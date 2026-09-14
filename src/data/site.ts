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
  | 'vehicles'
  | 'hotels'
  | 'experiences'
  | 'privateWorld'
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
    title: 'Private Jet Charter & Travel Concierge London | Lapid Aviation',
    url: '/',
    desc: 'Private jet and helicopter charter from London, with the chauffeur, hotels, resorts and experiences around the flight held by one relationship. Tell us where you want to be.',
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
    title: 'Chauffeur & Private Ground Transport | Lapid Aviation',
    url: '/transfers/',
    desc: 'Chauffeur transfers timed to the aircraft rather than to the traffic, at both ends of the journey, arranged through licensed ground transport partners.',
    intent: 'private jet airport transfer London · transactional',
  },
  vehicles: {
    title: 'Luxury & Performance Vehicle Hire | Lapid Aviation',
    url: '/vehicles/',
    desc: 'Luxury and performance cars arranged at the destination, from a saloon waiting at the aircraft steps to a weekend behind something rarer.',
    intent: 'luxury performance car hire · transactional',
  },
  hotels: {
    title: 'Exclusive Hotels | Lapid Aviation',
    url: '/hotels/',
    desc: 'A curated collection of exceptional hotels at the destinations we fly to, held as relationships rather than listings. Discreet enquiry, no price grids.',
    intent: 'exclusive luxury hotels · commercial investigation',
  },
  experiences: {
    title: 'Private Experiences | Lapid Aviation',
    url: '/experiences/',
    desc: 'The reason for the journey: private experiences arranged around your dates, from a table that is not taking bookings to a mountain before the lifts open.',
    intent: 'private luxury experiences · commercial investigation',
  },
  privateWorld: {
    title: 'The Private World of Lapid | Lapid Aviation',
    url: '/private-world/',
    desc: 'Aviation is the way in. Beyond it sits chauffeur, vehicles, hotels, resorts and private experiences — one relationship holding the whole journey.',
    intent: 'luxury travel concierge · commercial investigation',
  },
  resorts: {
    title: 'Bespoke Resorts & Private Villas | Lapid Aviation',
    url: '/resorts/',
    desc: 'A curated collection of resorts, villas and chalets at the destinations we fly to most, arranged through trusted destination partners.',
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

/**
 * Primary navigation.
 *
 * Aviation stays first and unqualified — it is the hero service and the entry
 * point into the brand. The rest of the ecosystem sits behind a single
 * "Private World" entry rather than as six more top-level links, so the header
 * stays quiet and the wider offering is something the visitor discovers rather
 * than something the nav shouts.
 */
export const NAV: { label: string; href: string }[] = [
  { label: 'Private jets', href: PAGES.jets.url },
  { label: 'Helicopters', href: PAGES.helicopter.url },
  { label: 'Private World', href: PAGES.privateWorld.url },
  { label: 'Business aviation', href: PAGES.business.url },
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
    heading: 'Private World',
    links: [
      { label: 'The whole journey', href: PAGES.privateWorld.url },
      { label: 'Chauffeur & ground', href: PAGES.transfers.url },
      { label: 'Luxury & performance cars', href: PAGES.vehicles.url },
      { label: 'Exclusive hotels', href: PAGES.hotels.url },
      { label: 'Bespoke resorts & villas', href: PAGES.resorts.url },
      { label: 'Private experiences', href: PAGES.experiences.url },
    ],
  },
  {
    heading: 'Planning',
    links: [
      { label: 'What charter costs', href: PAGES.cost.url },
      { label: 'First time flying private', href: PAGES.firsttime.url },
      { label: 'How we vet operators', href: PAGES.vetting.url },
      { label: 'Aircraft categories', href: PAGES.aircraft.url },
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

/**
 * Contact details — the single place they are defined.
 *
 * All three are deliberately `null` because none has been supplied yet, and a
 * concierge brand inventing its own phone number is worse than admitting it
 * does not have one on the page.
 *
 * Fill these in and the whole site lights up at once: the header strip becomes
 * real `tel:` / `wa.me` / `mailto:` links, the contact page renders them
 * instead of "to be confirmed", and the caveat on the contact page disappears.
 * Nothing else needs editing.
 */
export const CONTACT: {
  /** International format, e.g. '+44 20 7123 4567'. */
  phone: string | null;
  /** Digits only, no + or spaces, e.g. '442071234567'. */
  whatsapp: string | null;
  email: string | null;
} = {
  phone: null,
  whatsapp: null,
  email: null,
};

/** `href` for a contact method, or the contact page when it is not set yet. */
export function contactHref(method: 'phone' | 'whatsapp' | 'email'): string {
  if (method === 'phone') {
    return CONTACT.phone ? `tel:${CONTACT.phone.replace(/[^+\d]/g, '')}` : PAGES.contact.url;
  }
  if (method === 'whatsapp') {
    return CONTACT.whatsapp ? `https://wa.me/${CONTACT.whatsapp}` : PAGES.contact.url;
  }
  return CONTACT.email ? `mailto:${CONTACT.email}` : PAGES.contact.url;
}

/** True once every contact method is real, used to drop the "to be confirmed" note. */
export const hasContactDetails = Boolean(CONTACT.phone && CONTACT.whatsapp && CONTACT.email);

export const SITE = {
  name: 'Lapid Aviation',
  url: 'https://www.lapidaviation.com',
  /** Independent broker positioning — repeated across the design's trust copy. */
  tagline: 'Independent private jet and helicopter charter broker, London.',
  locality: 'London',
  country: 'GB',
} as const;
