/**
 * Canonical route + metadata table.
 *
 * Ported from the META map in the approved design, which is also the source
 * the reference sitemap.xml was built from. Titles and descriptions are the
 * SEO copy as written; `intent` records the target keyword and search intent
 * so page copy can be checked against it later.
 */

export type PageKey =
  | 'home'
  | 'jets'
  | 'helicopter'
  | 'business'
  | 'cost'
  | 'firsttime'
  | 'request'
  | 'transfers'
  | 'resorts'
  | 'about'
  | 'contact'
  | 'routeGeneva'
  | 'vetting'
  | 'emptylegs'
  | 'aircraft'
  | 'terms'
  | 'privacy'
  | 'airportsHub'
  | 'farnborough'
  | 'londonHub'
  | 'mayfair';

export interface PageMeta {
  title: string;
  url: string;
  desc: string;
  intent: string;
}

export const PAGES: Record<PageKey, PageMeta> = {
  home: {
    title: 'Private Jet Charter London | Lapid Aviation',
    url: '/',
    desc: 'Private jet and helicopter charter from London, arranged by an independent broker. Tell us the route and the day and we will return the aircraft that fit.',
    intent: 'private jet charter London · transactional',
  },
  jets: {
    title: 'Private Jet Charter London | Lapid Aviation',
    url: '/private-jets/',
    desc: 'Private jet charter from Farnborough, Biggin Hill, Luton, London City, Stansted and Northolt. Aircraft categories, airport choice and how charter works.',
    intent: 'private jet charter London · transactional',
  },
  helicopter: {
    title: 'Helicopter Charter London | Lapid Aviation',
    url: '/helicopter-charter/',
    desc: 'Helicopter charter in and around London: airport transfers, business travel, events and private landing sites, arranged through licensed operators.',
    intent: 'helicopter charter London · transactional',
  },
  business: {
    title: 'Corporate Private Jet Charter | Lapid Aviation',
    url: '/business-aviation/',
    desc: 'Business aviation for executive teams, family offices and investment firms. Multi-city itineraries and roadshows arranged around the diary.',
    intent: 'corporate private jet charter · transactional',
  },
  cost: {
    title: 'Private Jet Charter Cost UK | Lapid Aviation',
    url: '/private-jets/cost/',
    desc: 'What drives the cost of chartering a private jet: aircraft category, flight time, positioning, airports, timing and routing. No rate card, no invented prices.',
    intent: 'private jet charter cost UK · commercial investigation',
  },
  firsttime: {
    title: 'First Time Flying Private | Lapid Aviation',
    url: '/first-time-private-flyers/',
    desc: 'What actually happens on your first private flight, from enquiry to arrival, and the four questions worth asking any charter broker.',
    intent: 'first time flying private · informational',
  },
  request: {
    title: 'Request a Private Jet Charter | Lapid Aviation',
    url: '/request-charter/',
    desc: 'Start a charter enquiry with four fields. A broker replies with the realistic options for your route and date.',
    intent: 'request private jet charter · transactional',
  },
  transfers: {
    title: 'Private Jet Airport Transfers | Lapid Aviation',
    url: '/transfers/',
    desc: 'Chauffeur transfers to and from the aircraft, timed to your flight and arranged through licensed ground transport partners.',
    intent: 'private jet airport transfer London · transactional',
  },
  resorts: {
    title: 'Resorts, Villas & Hotels | Lapid Aviation',
    url: '/resorts/',
    desc: 'Introductions to villas, chalets and hotels at the destinations we fly to most, arranged through trusted destination partners.',
    intent: 'private jet resort access · commercial investigation',
  },
  about: {
    title: 'About Lapid Aviation | Private Jet Charter Broker',
    url: '/about/',
    desc: 'Lapid Aviation is an independent private jet and helicopter charter broker in London. We own no aircraft and arrange flights through licensed operators.',
    intent: 'private jet broker London · navigational',
  },
  contact: {
    title: 'Contact Lapid Aviation | Private Jet Charter',
    url: '/contact/',
    desc: 'Speak to a broker about a private jet or helicopter charter from London.',
    intent: 'contact private jet broker London · navigational',
  },
  routeGeneva: {
    title: 'Private Jet London to Geneva | Lapid Aviation',
    url: '/routes/london-to-geneva/',
    desc: 'Private jet charter from London to Geneva. Departure airports, suitable aircraft, and what shapes the cost of the route.',
    intent: 'private jet London to Geneva · transactional',
  },
  vetting: {
    title: 'How We Vet Operators | Lapid Aviation',
    url: '/how-we-vet-operators/',
    desc: 'How Lapid Aviation checks an operator before offering it as an option, and what you can ask us to confirm before you fly.',
    intent: 'private jet operator safety vetting · trust',
  },
  emptylegs: {
    title: 'Private Jet Empty Leg Flights | Lapid Aviation',
    url: '/empty-leg-flights/',
    desc: 'Empty leg flights from London: repositioning flights at a reduced rate, with the trade-offs explained plainly.',
    intent: 'private jet empty leg flights · transactional',
  },
  aircraft: {
    title: 'Private Jet & Helicopter Categories | Lapid Aviation',
    url: '/aircraft/',
    desc: 'An overview of every aircraft category we can source, from very light jets to ultra-long-range, and which trips each one suits.',
    intent: 'private jet categories · informational',
  },
  terms: {
    title: 'Terms & Conditions | Lapid Aviation',
    url: '/terms/',
    desc: 'The terms on which Lapid Aviation arranges private jet and helicopter charter as an independent broker.',
    intent: 'n/a · legal',
  },
  privacy: {
    title: 'Privacy Policy | Lapid Aviation',
    url: '/privacy/',
    desc: 'What Lapid Aviation collects when you make an enquiry, how it is used, and your rights over it.',
    intent: 'n/a · legal',
  },
  airportsHub: {
    title: 'London Private Jet Airports | Lapid Aviation',
    url: '/airports/',
    desc: 'The six airports we use around London for private jet charter, and how the choice shapes your journey time and cost.',
    intent: 'private jet airports London · informational',
  },
  farnborough: {
    title: 'Farnborough Private Jet Charter | Lapid Aviation',
    url: '/airports/farnborough-airport/',
    desc: "Private jet charter from Farnborough Airport, London's dedicated business aviation airport, and what makes it the most requested departure point.",
    intent: 'Farnborough private jet charter · transactional',
  },
  londonHub: {
    title: 'Private Jet Charter by London Area | Lapid Aviation',
    url: '/london/',
    desc: 'Private jet charter for each London area, with the nearest departure airport and realistic door-to-aircraft times.',
    intent: 'private jet London areas · informational',
  },
  mayfair: {
    title: 'Mayfair Private Jet Charter | Lapid Aviation',
    url: '/london/mayfair-private-jet-charter/',
    desc: 'Private jet charter for Mayfair, with the nearest departure airports and how long the run to each one really takes.',
    intent: 'private jet Mayfair · transactional',
  },
};

/** Primary navigation, as defined in the design. */
export const NAV: { label: string; href: string }[] = [
  { label: 'Private jets', href: PAGES.jets.url },
  { label: 'Helicopters', href: PAGES.helicopter.url },
  { label: 'Business aviation', href: PAGES.business.url },
  { label: 'Transfers', href: PAGES.transfers.url },
  { label: 'Safety', href: PAGES.vetting.url },
  { label: 'About', href: PAGES.about.url },
  { label: 'Contact', href: PAGES.contact.url },
];

/** Footer link groups. */
export const FOOTER_GROUPS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: 'Charter',
    links: [
      { label: 'Private jets', href: PAGES.jets.url },
      { label: 'Helicopter charter', href: PAGES.helicopter.url },
      { label: 'Business aviation', href: PAGES.business.url },
      { label: 'Empty leg flights', href: PAGES.emptylegs.url },
      { label: 'Aircraft categories', href: PAGES.aircraft.url },
    ],
  },
  {
    heading: 'Planning',
    links: [
      { label: 'What charter costs', href: PAGES.cost.url },
      { label: 'First time flying private', href: PAGES.firsttime.url },
      { label: 'How we vet operators', href: PAGES.vetting.url },
      { label: 'Chauffeur transfers', href: PAGES.transfers.url },
      { label: 'Resorts & villas', href: PAGES.resorts.url },
    ],
  },
  {
    heading: 'Where we fly',
    links: [
      { label: 'London airports', href: PAGES.airportsHub.url },
      { label: 'Farnborough Airport', href: PAGES.farnborough.url },
      { label: 'London by area', href: PAGES.londonHub.url },
      { label: 'London to Geneva', href: PAGES.routeGeneva.url },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About us', href: PAGES.about.url },
      { label: 'Contact', href: PAGES.contact.url },
      { label: 'Request a charter', href: PAGES.request.url },
      { label: 'Terms & conditions', href: PAGES.terms.url },
      { label: 'Privacy policy', href: PAGES.privacy.url },
    ],
  },
];

export const SITE = {
  name: 'Lapid Aviation',
  url: 'https://www.lapidaviation.com',
  /** Independent broker positioning — repeated across the design's trust copy. */
  tagline: 'Independent private jet and helicopter charter broker, London.',
  locality: 'London',
  country: 'GB',
} as const;
