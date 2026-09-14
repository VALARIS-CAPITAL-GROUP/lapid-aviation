/**
 * Generates the 1200x630 Open Graph images in public/og/.
 *
 * Run with `npm run og` after changing a hero photo or a headline. The output
 * is committed, so Netlify never regenerates it — which also means the fonts
 * used here (rendered through librsvg at generation time) do not need to exist
 * on the build machine.
 */
import sharp from 'sharp';
import fs from 'node:fs';

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * slug -> [source image in src/assets, headline]
 *
 * Keyed by canonical path with slashes flattened to dashes, matching the
 * lookup in Seo.astro. Every route needs an entry here, including noindex
 * ones — a missing entry ships an og:image URL that 404s.
 */
const PAGES = {
  home: ['home-hero', 'Private jet charter from London'],
  'private-jets': ['jets-hero', 'Private jet charter from London'],
  'private-jets-cost': ['hangar', 'What private jet charter costs'],
  'helicopter-charter': ['heli-hero', 'Helicopter charter around London'],
  'business-aviation': ['business-hero', 'Business aviation for executive teams'],
  'first-time-private-flyers': ['cabin-work', 'Your first private flight, made simple'],
  'request-charter': ['jets-apron', 'Request a private jet charter'],
  transfers: ['transfers-hero', 'Chauffeur and ground transport'],
  vehicles: ['transfers-hero', 'Luxury and performance vehicles'],
  hotels: ['resorts-hero', 'A collection, not a catalogue'],
  experiences: ['resorts-hero', 'Nobody remembers the aircraft'],
  'private-world': ['hangar', 'One relationship. The whole journey.'],
  resorts: ['resorts-hero', 'Bespoke resorts and private villas'],
  about: ['hangar', 'An independent broker, not an operator'],
  contact: ['london-hero', 'Speak to a broker'],
  'routes-london-to-geneva': ['geneva-hero', 'Private jet: London to Geneva'],
  'how-we-vet-operators': ['jets-apron', 'How we vet an operator'],
  'empty-leg-flights': ['jets-hero', 'Private jet empty leg flights'],
  aircraft: ['jets-apron', 'Every aircraft category we source'],
  airports: ['london-hero', 'Private jet airports around London'],
  'airports-farnborough-airport': ['jets-apron', 'Charter from Farnborough Airport'],
  london: ['london-hero', 'Private jet charter by London area'],
  'london-mayfair-private-jet-charter': ['london-hero', 'Private jet charter for Mayfair'],
  terms: ['hangar', 'Terms & Conditions'],
  privacy: ['hangar', 'Privacy Policy'],
  'enquiry-received': ['jets-apron', 'Enquiry received'],
  404: ['jets-apron', 'That page has already departed'],
  default: ['home-hero', 'Independent private jet charter, London'],
};

const LINE = 62;

function wrap(text, max = 26) {
  const out = [];
  let line = '';
  for (const word of text.split(' ')) {
    if ((line + ' ' + word).trim().length > max) {
      out.push(line.trim());
      line = word;
    } else line += ' ' + word;
  }
  if (line.trim()) out.push(line.trim());
  return out.slice(0, 3);
}

function overlay(title) {
  const lines = wrap(title);
  // Anchor from the last line so the rule and strapline never sit on top of
  // the headline, however many lines it wraps to.
  const firstBaseline = 430 - (lines.length - 1) * LINE;
  const ruleY = firstBaseline + (lines.length - 1) * LINE + 40;
  const tspans = lines
    .map((l, i) => `<tspan x="72" dy="${i ? LINE : 0}">${esc(l)}</tspan>`)
    .join('');

  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs><linearGradient id="g" x1="0" y1="1" x2="0" y2="0">
    <stop offset="0%" stop-color="#0C0A09" stop-opacity="0.98"/>
    <stop offset="55%" stop-color="#0C0A09" stop-opacity="0.82"/>
    <stop offset="100%" stop-color="#0C0A09" stop-opacity="0.42"/>
  </linearGradient></defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <text x="72" y="96" font-family="Georgia, serif" font-size="42" fill="#FAFAF9">Lapid</text>
  <text x="72" y="126" font-family="Helvetica, Arial, sans-serif" font-size="15" font-weight="600" letter-spacing="7" fill="#CDB389">AVIATION</text>
  <text y="${firstBaseline}" font-family="Georgia, serif" font-size="54" fill="#FFFFFF">${tspans}</text>
  <rect x="72" y="${ruleY}" width="64" height="2" fill="#9C7C4A"/>
  <text x="72" y="${ruleY + 52}" font-family="Helvetica, Arial, sans-serif" font-size="19" fill="#A8A29E">Independent charter broker &#183; lapidaviation.com</text>
</svg>`);
}

fs.mkdirSync('public/og', { recursive: true });

for (const [slug, [img, title]] of Object.entries(PAGES)) {
  const base = await sharp(`src/assets/${img}.jpg`)
    .resize(1200, 630, { fit: 'cover', position: 'centre' })
    .toBuffer();
  await sharp(base)
    .composite([{ input: overlay(title) }])
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(`public/og/${slug}.jpg`);
}

const files = fs.readdirSync('public/og');
const total = files.reduce((n, f) => n + fs.statSync(`public/og/${f}`).size, 0);
console.log(`${files.length} OG images, ${Math.round(total / 1024)} KB total`);
