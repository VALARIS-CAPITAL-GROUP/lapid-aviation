# Design reference (not deployed)

Source-of-truth artefacts extracted from the original single-file design export.
Nothing in this directory is built or served — it exists so the Astro build can
be checked against the approved design.

| File | What it is |
| --- | --- |
| `bundled-design-export.html` | The original 3.7 MB self-unpacking export, as committed. |
| `template.html` | The real 199 KB HTML the export unpacks to at runtime. |
| `page-script.js` | The design's data + state script (source of `src/data/content.ts`). |
| `pages/is*.html` | `template.html` split into one file per page, by its `sc-if` gate. |
| `routes.json` | The `META` map: title, URL, description and search intent per page. |
| `font-faces.json`, `unicode-ranges.json` | Font subset mapping used to pick the woff2 files kept in `src/fonts/`. |
| `assets/` | Every asset decoded out of the export's base64 manifest. |

## Why the export could not be deployed as-is

- It rendered nothing without JavaScript: a runtime unpacked a 3.4 MB base64
  manifest client-side, so crawlers saw `<title>Bundled Page</title>`.
- All 21 pages lived at one URL. `href` appeared once in the whole template, for
  a font preconnect — there was no internal linking at all.
- Styling was 4054 inline declarations against 4 CSS classes, with the mobile
  layout bolted on as `!important` overrides keyed to selectors like
  `header > div + div > nav`.
- `<image-slot>` is documented in its own source as read-only outside the
  design tool, and depended on a `.image-slots.state.json` sidecar that was
  never committed.
