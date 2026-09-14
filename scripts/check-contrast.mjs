/**
 * Walks the built HTML and flags text that does not have enough contrast
 * against the surface it actually sits on.
 *
 * This exists because the same class of bug shipped twice. Both times the
 * markup and the tokens looked right in isolation and only the combination
 * was wrong:
 *
 *   1. A hover state set `bg-bone` with `text-paper` — near-white on
 *      near-white.
 *   2. `--color-title: var(--c-title)` looked like it would follow the
 *      surrounding context, but a custom property is substituted when its
 *      own value is computed on the declaring element. It resolved once at
 *      :root and inherited that literal, so every hero heading rendered
 *      near-black on a dark photograph.
 *
 * Neither was catchable by `astro check`, and neither was visible without
 * rendering. So rather than trusting a visual pass, resolve the semantic
 * tokens the same way the cascade does and do the arithmetic.
 *
 * Deliberately narrow: it only reasons about the semantic colour classes and
 * explicit surface classes, and skips anything sitting over a photograph,
 * where contrast depends on the image rather than on a token. It is a
 * regression guard, not a full accessibility audit.
 *
 * Usage: node scripts/check-contrast.mjs   (after a build)
 */
import fs from 'node:fs';
import path from 'node:path';

const DIST = 'dist';
const MIN = 4.5; // WCAG AA for normal-size text

/** The semantic palette, mirroring the two contexts in global.css. */
const CONTEXT = {
  light: {
    surface: '#faf9f7',
    'surface-2': '#f1eee9',
    title: '#14110f',
    body: '#4a4441',
    muted: '#6e655f',
    accent: '#836337',
    rule: '#e2ddd5',
  },
  dark: {
    surface: '#0c0a09',
    'surface-2': '#1c1917',
    title: '#fafaf9',
    body: '#b8b2ad',
    muted: '#8a827c',
    accent: '#cdb389',
    rule: '#2f2a27',
  },
};

const srgb = (c) => {
  const v = c / 255;
  return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
};

function luminance(hex) {
  const h = hex.replace('#', '');
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
  return 0.2126 * srgb(r) + 0.7152 * srgb(g) + 0.0722 * srgb(b);
}

function contrast(a, b) {
  const [x, y] = [luminance(a), luminance(b)];
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
}

const TEXT = /(?:^|\s)!?text-(title|body|muted|accent)(?:\s|$)/;
const SURFACE = /(?:^|\s)bg-(surface-2|surface)(?:\s|$)/;
/**
 * Elements whose background is a photograph, a scrim or a translucent tint.
 * Contrast there is a function of the image, so the token arithmetic says
 * nothing useful and we skip the subtree.
 */
const IMAGE_BACKED = /(?:^|\s)(?:bg-gradient-|bg-obsidian|bg-surface\/|bg-surface-2\/|opacity-)/;

/**
 * Check the CSS actually implements the two contexts before trusting the
 * table above.
 *
 * The table asserts what `on-dark` *should* mean. Bug 2 was that the CSS
 * silently did not implement it: the utilities referenced a variable that
 * `.on-dark` never overrode, so the markup walk below would have happily
 * passed while every hero heading rendered unreadable. Verifying the two
 * halves separately is the whole point.
 */
function checkCssInvariants() {
  const cssFile = fs
    .readdirSync(path.join(DIST, '_astro'))
    .filter((f) => f.endsWith('.css'))
    .map((f) => path.join(DIST, '_astro', f))[0];
  if (!cssFile) return ['no built CSS found — run a build first'];

  const css = fs.readFileSync(cssFile, 'utf8');
  const problems = [];

  // Which custom properties do the semantic utilities actually read?
  const roles = ['title', 'body', 'muted', 'accent'];
  const surfaces = ['surface', 'surface-2', 'rule'];
  const needed = new Set();
  for (const u of [...roles.map((r) => `text-${r}`), ...surfaces.map((s) => `bg-${s}`)]) {
    const rule = css.match(new RegExp(`\\.${u.replace('-', '\\-')}\\{([^}]*)\\}`));
    if (!rule) continue;
    for (const v of rule[1].matchAll(/var\((--[\w-]+)\)/g)) needed.add(v[1]);
  }

  // None of them may point at another custom property: that indirection is
  // resolved at the declaring element and stops inheriting context.
  for (const [, prop] of css.matchAll(/(--color-[\w-]+):\s*var\(/g)) {
    problems.push(`${prop} is an indirection to another var(); it will not follow on-dark`);
  }

  // And .on-dark must redefine every one of them.
  const darkRule = css.match(/\.on-dark\{([^}]*)\}/);
  if (!darkRule) {
    problems.push('.on-dark emits no rule at all');
  } else {
    const overridden = new Set([...darkRule[1].matchAll(/(--[\w-]+):/g)].map((m) => m[1]));
    for (const v of needed) {
      if (!overridden.has(v)) {
        problems.push(`.on-dark does not override ${v}, which the utilities read`);
      }
    }
  }
  return problems;
}

const cssProblems = checkCssInvariants();
if (cssProblems.length) {
  console.error('CSS context invariants failed:\n');
  for (const p of cssProblems) console.error(`  ${p}`);
  process.exit(1);
}
console.log('CSS invariants OK: semantic vars are literal and all overridden by .on-dark.');

const files = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.html')) files.push(p);
  }
})(DIST);

const TAG = /<(\/?)([a-zA-Z][\w-]*)((?:"[^"]*"|'[^']*'|[^>"'])*)>/g;
const VOID = new Set(['img', 'br', 'input', 'meta', 'link', 'source', 'hr', 'path', 'use']);

const failures = [];
let checked = 0;

for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  // Each frame: the context and surface in force for that subtree.
  const stack = [{ tag: null, ctx: 'light', surface: 'surface', skip: false }];

  for (const m of html.matchAll(TAG)) {
    const [, closing, tag, attrs] = m;
    if (closing) {
      for (let i = stack.length - 1; i > 0; i--) {
        if (stack[i].tag === tag) {
          stack.length = i;
          break;
        }
      }
      continue;
    }

    const cls = (attrs.match(/\sclass=(?:"([^"]*)"|'([^']*)')/) || [])
      .slice(1)
      .find(Boolean) ?? '';
    const top = stack[stack.length - 1];

    const ctx = /(?:^|\s)on-dark(?:\s|$)/.test(cls) ? 'dark' : top.ctx;
    const surfaceMatch = cls.match(SURFACE);
    const surface = surfaceMatch ? surfaceMatch[1] : top.surface;
    const skip = top.skip || IMAGE_BACKED.test(cls);

    const textMatch = cls.match(TEXT);
    if (textMatch && !skip) {
      const role = textMatch[1];
      const fg = CONTEXT[ctx][role];
      const bg = CONTEXT[ctx][surface];
      const ratio = contrast(fg, bg);
      checked++;
      if (ratio < MIN) {
        failures.push({
          file: path.relative(DIST, file),
          detail: `text-${role} (${fg}) on bg-${surface} (${bg}) in ${ctx} context`,
          ratio: ratio.toFixed(2),
        });
      }
    }

    if (!VOID.has(tag.toLowerCase()) && !/\/\s*$/.test(attrs)) {
      stack.push({ tag, ctx, surface, skip });
    }
  }
}

/**
 * Bug 1's shape: a raw-palette class pairing that happened to be
 * same-on-same (`bg-bone` with `text-paper`). Those tokens are fixed values
 * that ignore context entirely, so the walk above cannot reason about them.
 * Everything has been migrated to the semantic names, so the honest guard is
 * that none of them comes back.
 *
 * `obsidian` is exempt: the hero scrim gradients reference it deliberately,
 * because a scrim must be dark whatever the surrounding page does.
 */
const RAW = /(?:^|\s|")(?:!?(?:text|bg|border|divide)-(?:paper|ash|slate|bone|bone-dim|ink|ink-soft|charcoal|graphite|hair|hair-light|gold|gold-light|line))(?=\s|"|$)/;
const rawUses = [];
for (const file of files) {
  for (const m of fs.readFileSync(file, 'utf8').matchAll(/\sclass=(?:"([^"]*)"|'([^']*)')/g)) {
    const cls = m[1] ?? m[2] ?? '';
    const hit = cls.match(RAW);
    if (hit) rawUses.push({ file: path.relative(DIST, file), cls: hit[0].trim() });
  }
}
if (rawUses.length) {
  const u = [...new Map(rawUses.map((r) => [r.cls + r.file, r])).values()];
  console.error(`\n${u.length} raw-palette class use(s); these ignore on-dark context:\n`);
  for (const r of u) console.error(`  ${r.file}  ${r.cls}`);
  process.exit(1);
}
console.log('No raw-palette colour classes in the built markup.');

const unique = [...new Map(failures.map((f) => [f.detail + f.file, f])).values()];

console.log(`Checked ${checked} text nodes across ${files.length} pages.`);
if (unique.length) {
  console.error(`\n${unique.length} contrast failure(s) below ${MIN}:1\n`);
  for (const f of unique) console.error(`  ${f.ratio}:1  ${f.file}  ${f.detail}`);
  process.exit(1);
}
console.log(`No text below ${MIN}:1 against its resolved surface.`);
