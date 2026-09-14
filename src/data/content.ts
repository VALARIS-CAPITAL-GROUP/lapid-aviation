/**
 * Editorial content ported verbatim from the approved design.
 *
 * Kept as data rather than markup because most of it renders as repeated
 * card and accordion patterns across several pages. Copy changes happen here.
 */

export interface Airport { name: string; note: string }
export interface Category { name: string; use: string; spec: string; more: string }
export interface JourneyStep { n: string; title: string; who: string; colour: string; body: string; more: string }
export interface Sector { name: string; line: string; more: string }
export interface Faq { q: string; a: string }
/** Numbered "name + body" list item — used for cost factors, day-of steps, next steps. */
export interface NumberedItem { n: string; name: string; body: string }
export interface NamedItem { name: string; body: string }

export const AIRPORTS: Airport[] = [
  {
    "name": "Farnborough",
    "note": "The dedicated business-aviation airport south-west of London, and the most requested departure point for corporate flights."
  },
  {
    "name": "Biggin Hill",
    "note": "South-east of the city, long established for private movements and often the shorter run from central and east London."
  },
  {
    "name": "Luton",
    "note": "North of London with substantial private handling alongside scheduled traffic, useful for larger aircraft."
  },
  {
    "name": "London City",
    "note": "Closest field to the financial districts, with aircraft restrictions that shape which types can use it."
  },
  {
    "name": "Stansted",
    "note": "North-east, with capacity for heavy and long-range aircraft and fewer constraints at unsociable hours."
  },
  {
    "name": "RAF Northolt",
    "note": "West London, available for civil private movements under its own access arrangements."
  }
];

export const LONDON_AREAS: string[] = [
  "Mayfair",
  "Knightsbridge",
  "Chelsea",
  "Kensington",
  "Belgravia",
  "Notting Hill",
  "Holland Park",
  "St John's Wood",
  "Hampstead",
  "Canary Wharf",
  "City of London",
  "Westminster",
  "Fulham",
  "Chiswick",
  "Richmond"
];

export const CATEGORIES: Category[] = [
  {
    "name": "Very light jets",
    "use": "Short European sectors for small groups. Least expensive way to fly privately, with real limits on cabin and baggage.",
    "spec": "Specification to verify",
    "more": "Best for 2–4 passengers on sectors under roughly two hours, where minimal luggage is realistic."
  },
  {
    "name": "Light jets",
    "use": "The workhorse of London to Western Europe. Comfortable for a small team on a day trip.",
    "spec": "Specification to verify",
    "more": "The usual choice for Paris, Geneva or Amsterdam day trips with a small group and normal luggage."
  },
  {
    "name": "Midsize jets",
    "use": "More cabin, more luggage, and range that opens up the Mediterranean and beyond without a stop.",
    "spec": "Specification to verify",
    "more": "Suits ski trips and Mediterranean sectors where bags, boards or a larger group need the extra room."
  },
  {
    "name": "Super-midsize jets",
    "use": "Stand-up cabins and longer legs. The usual answer when the sector is over four hours but not transatlantic.",
    "spec": "Specification to verify",
    "more": "A comfortable stand-up cabin for groups travelling four-plus hours, such as London to the Canaries or the eastern Mediterranean."
  },
  {
    "name": "Heavy jets",
    "use": "Full cabins with separate zones, proper galley and a lavatory you would use. Long sectors with a group.",
    "spec": "Specification to verify",
    "more": "Suits larger groups or teams travelling together on longer sectors, with room to work or rest separately."
  },
  {
    "name": "Ultra-long-range jets",
    "use": "London to the Gulf, the US west coast or Asia without stopping. Beds, working space and quiet.",
    "spec": "Specification to verify",
    "more": "The category for non-stop long-haul: the Gulf, the US west coast or Asia, with a cabin built for sleeping en route."
  }
];

export const JOURNEY: JourneyStep[] = [
  {
    "n": "01",
    "title": "The enquiry",
    "who": "YOU",
    "colour": "#C08A5F",
    "body": "Four fields on this site, a call, or a message. Route, date, passengers. Nothing else is needed to start.",
    "more": "No account, no long form. If you would rather talk it through, call instead of typing it out."
  },
  {
    "n": "02",
    "title": "The search",
    "who": "US",
    "colour": "#7C879A",
    "body": "We work the market for aircraft that genuinely suit your sector and group, and check the operator before an option reaches you.",
    "more": "We rule out aircraft that don't suit the sector or group before you ever see them, rather than sending everything available."
  },
  {
    "n": "03",
    "title": "The shortlist",
    "who": "YOU DECIDE",
    "colour": "#C08A5F",
    "body": "A small set of real options with the trade-offs written down: what each aircraft and airport costs you in time, money and comfort.",
    "more": "Usually two or three options, each with the honest downside stated — not a single take-it-or-leave-it price."
  },
  {
    "n": "04",
    "title": "Confirmation",
    "who": "US",
    "colour": "#7C879A",
    "body": "Contract, crew, slots, handling and ground transfers arranged and confirmed to you in writing. One document, not a thread.",
    "more": "Cancellation terms and what happens if the aircraft goes technical are set out before you sign, not after."
  },
  {
    "n": "05",
    "title": "The pre-flight note",
    "who": "US",
    "colour": "#7C879A",
    "body": "The day before: where to arrive, who meets you, the aircraft, the crew, and the direct number for the person on duty.",
    "more": "Everything you need on one page, sent the day before, so nothing is a surprise on the morning of the flight."
  },
  {
    "n": "06",
    "title": "Arrival and boarding",
    "who": "YOU",
    "colour": "#C08A5F",
    "body": "A private terminal, a short walk, screening for your flight alone. The aircraft leaves when you are aboard.",
    "more": "No boarding call, no gate. You arrive, you're screened, you board, and the aircraft leaves."
  },
  {
    "n": "07",
    "title": "In the air, and after",
    "who": "US",
    "colour": "#7C879A",
    "body": "We watch the flight and hold the arrival end: the car, the formalities, and the next leg if there is one.",
    "more": "If plans change mid-trip — an earlier return, an added city — we handle it against the same booking."
  }
];

export const SECTORS: Sector[] = [
  {
    "name": "Executive teams",
    "line": "Board meetings and site visits placed where they are useful rather than where a timetable allows.",
    "more": "Same-day board meetings across two or three cities, with the aircraft waiting rather than the executive."
  },
  {
    "name": "Entrepreneurs",
    "line": "A schedule that bends to opportunity instead of to airline routes.",
    "more": "Short-notice trips to close a deal or meet an investor, arranged on the timeline the opportunity sets."
  },
  {
    "name": "Family offices",
    "line": "Discreet travel for principals and family, arranged through one point of contact.",
    "more": "One broker handling principal, family and staff travel, rather than several bookings across several people."
  },
  {
    "name": "Investment firms",
    "line": "Diligence trips and portfolio visits compressed into a working day.",
    "more": "Site visits to portfolio companies scheduled back-to-back across a single day instead of a multi-day trip."
  },
  {
    "name": "Private equity",
    "line": "Deal travel at short notice, including the trips that were not in the plan.",
    "more": "Fast turnarounds around signing and closing, when the trip was not on the calendar a week ago."
  },
  {
    "name": "Property",
    "line": "Multiple sites, one day, with the aircraft waiting between them.",
    "more": "Several sites or developments viewed in one day rather than spread across a week of driving."
  },
  {
    "name": "Entertainment",
    "line": "Tour and production movements with crew, cases and tight windows.",
    "more": "Equipment, crew and cases moved together, timed against load-in and show schedules."
  },
  {
    "name": "Sport",
    "line": "Squads, staff and equipment moved around fixture schedules.",
    "more": "Squad and staff travel built around the fixture list, not the other way round."
  }
];

export const COST_FACTORS: NumberedItem[] = [
  {
    "n": "01",
    "name": "Aircraft category",
    "body": "The single biggest lever. Size and range drive the hourly cost of the aircraft more than anything else."
  },
  {
    "n": "02",
    "name": "Flight time",
    "body": "Charter is broadly priced on hours flown, so sector length matters, as does whether the aircraft returns empty."
  },
  {
    "n": "03",
    "name": "Where the aircraft starts",
    "body": "If it has to fly to you before your flight, that positioning is part of the price. Aircraft already in London cost less to use."
  },
  {
    "n": "04",
    "name": "Airports at each end",
    "body": "Handling, landing and parking charges vary widely between fields, and peak-season slots at popular airports vary more."
  },
  {
    "n": "05",
    "name": "Timing",
    "body": "Weekends into the Mediterranean in August, or a ski airport in February half-term, price differently from a Tuesday in November."
  },
  {
    "n": "06",
    "name": "One way or return",
    "body": "A same-day return is often better value than two one-way flights, because the aircraft and crew stay with you."
  }
];

export const JET_FAQS: Faq[] = [
  {
    "q": "How far in advance should I book?",
    "a": "Short-notice charter is routine, and same-day departures are often possible. Notice mainly affects choice: the earlier you ask, the wider the range of aircraft and airports we can put in front of you."
  },
  {
    "q": "Do I charter by the seat or by the aircraft?",
    "a": "By the aircraft. The quoted price covers the whole aeroplane and crew for that flight, whether one person travels or the cabin is full."
  },
  {
    "q": "Who operates the flight?",
    "a": "An appropriately licensed third-party operator. Lapid Aviation arranges the charter and remains your point of contact throughout; we do not own or operate aircraft."
  },
  {
    "q": "Can the itinerary change after booking?",
    "a": "Usually, within limits. Timing changes are often straightforward; changing routing, aircraft or passenger numbers depends on the operator's terms and on slot and crew availability. We set out what is flexible before you commit."
  }
];

export const HELI_USES: NamedItem[] = [
  {
    "name": "Airport transfers",
    "body": "City to jet, without the motorway. Used most often where a road transfer would undo the time the jet saves."
  },
  {
    "name": "Business travel",
    "body": "Regional meetings and site visits where the destination has no useful airport but does have a field."
  },
  {
    "name": "Events and sport",
    "body": "Race weekends, racing fixtures and festivals, where arrival and departure windows are the difficult part."
  },
  {
    "name": "Private estates",
    "body": "Landing at or near a private property, subject to the site, the permissions and the conditions on the day."
  }
];

export const HELI_FAQS: Faq[] = [
  {
    "q": "Can a helicopter land at a private address?",
    "a": "Sometimes. It depends on the site, the surrounding area, landowner permission and the operator's own assessment. We check before promising anything."
  },
  {
    "q": "What happens in poor weather?",
    "a": "Helicopter flying is more weather-sensitive than jet flying. We plan a ground alternative for time-critical journeys so a delay does not become a missed meeting."
  },
  {
    "q": "Can a helicopter connect to a private jet?",
    "a": "Yes, and it is one of the most common requests. Both legs are arranged together so the connection is built into the plan rather than hoped for."
  }
];

export const COST_FAQS: Faq[] = [
  {
    "q": "Is an empty leg cheaper?",
    "a": "Often, yes. An empty leg is a repositioning flight sold at a reduced rate, but it is fixed to that aircraft's route and timing and can be cancelled if the original charter changes. It suits flexible plans, not fixed ones."
  },
  {
    "q": "Why do two quotes for the same route differ so much?",
    "a": "Usually because the aircraft is coming from somewhere different, or because one quote excludes costs the other includes. We set out what is in and out of each option so the comparison is real."
  },
  {
    "q": "Does splitting the cost between passengers make it cheaper per person?",
    "a": "The aircraft price does not change with passenger numbers, so a fuller cabin lowers the cost per person. Charter cannot be sold by the seat to unconnected passengers."
  }
];

export const BEFORE_DAY: NamedItem[] = [
  {
    "name": "Passenger details",
    "body": "Names and passport details are submitted ahead of time. Nobody queues to be processed on the day."
  },
  {
    "name": "Luggage",
    "body": "Baggage is limited by the aircraft's hold, not by an allowance. Tell us what you are carrying — golf clubs, skis, instruments, camera cases — before the aircraft is chosen rather than after."
  },
  {
    "name": "Children and pets",
    "body": "Both are common on charter flights. Rules vary by operator and by destination, particularly for animals crossing borders, so we confirm the specifics for your routing before booking."
  },
  {
    "name": "Catering and preferences",
    "body": "Requests are made in advance and are usually straightforward. It is worth asking for exactly what you want rather than accepting a default."
  }
];

export const ON_DAY: NumberedItem[] = [
  {
    "n": "01",
    "name": "Arrival",
    "body": "You arrive at a private terminal, not the main building. Cars often drop directly at the door."
  },
  {
    "n": "02",
    "name": "Security",
    "body": "Screening still happens, but it is done for your flight alone and takes a fraction of the time."
  },
  {
    "n": "03",
    "name": "Boarding",
    "body": "The aircraft leaves when you are on board. There is no boarding call and no seat allocation."
  },
  {
    "n": "04",
    "name": "The other end",
    "body": "The same in reverse: a short walk, formalities handled privately, and a car waiting if you asked for one."
  }
];

export const NEXT_STEPS: NumberedItem[] = [
  {
    "n": "01",
    "name": "We read it, then call or write",
    "body": "A short conversation usually saves a long exchange of emails. If you would rather not speak, say so and we will keep it in writing."
  },
  {
    "n": "02",
    "name": "We search and check",
    "body": "Aircraft that genuinely suit the sector, from operators we have reviewed for that flight."
  },
  {
    "n": "03",
    "name": "You get a shortlist, not a single price",
    "body": "Each option with what it costs you in money, time and comfort, and our view on which one we would take."
  },
  {
    "n": "04",
    "name": "You decide, we arrange the rest",
    "body": "Contract, crew, slots, handling and ground transfers, confirmed in writing before the day."
  }
];

/* ---------------------------------------------------------------------------
   Brand layer — the outcome, the ecosystem and the curated collections.

   Everything below sells the result of using Lapid rather than the mechanics
   of chartering an aircraft. It is kept deliberately free of named properties,
   named partners and claims of exclusivity: none of that has been confirmed,
   and the brief is explicit that exclusivity must not be claimed until it has.
   --------------------------------------------------------------------------- */

export interface Pillar { name: string; line: string; body: string }
export interface EcosystemStage { n: string; name: string; line: string; body: string; href: string }
export interface ArcStep { label: string; note: string }
export interface SampleJourney { kicker: string; title: string; steps: string[]; body: string }
export interface Collection { name: string; line: string }

/**
 * The four ideas every page reinforces. Ordered as the brief orders them:
 * time first, because it is the thing the client is actually buying.
 */
export const PILLARS: Pillar[] = [
  {
    name: 'Time',
    line: 'The hours come back to you.',
    body: 'No queue, no terminal, no connection built around somebody else’s timetable. You arrive minutes before departure and land closer to where you are going.',
  },
  {
    name: 'Freedom',
    line: 'Travel around your life.',
    body: 'The aircraft waits for you rather than the reverse. Leave when the meeting finishes, return when the weekend is genuinely over, change it the evening before.',
  },
  {
    name: 'Access',
    line: 'One relationship, the whole journey.',
    body: 'Aircraft, helicopters, chauffeur, cars, hotels, resorts and the experiences at the other end — reached through one number rather than eight separate arrangements.',
  },
  {
    name: 'Effortless luxury',
    line: 'The complexity stays with us.',
    body: 'Slots, crew, handling, permissions, transfers and the table you wanted are held behind the scenes. What reaches you is a single itinerary and a person who knows it.',
  },
];

/**
 * The ecosystem, in the order the brief sets out. Aviation is stages one and
 * two because it remains the hero service; the rest is what the visitor
 * discovers as they go, not a menu of unrelated products.
 */
export const ECOSYSTEM: EcosystemStage[] = [
  {
    n: '01',
    name: 'Private jets',
    line: 'The way in.',
    body: 'Point-to-point charter from the London airports, sized to the group and the distance rather than to a fleet we happen to own.',
    href: '/private-jets/',
  },
  {
    n: '02',
    name: 'Helicopters',
    line: 'Over the last hour of traffic.',
    body: 'City to aircraft, aircraft to resort, or into a site with no useful runway — arranged as part of the same journey rather than booked separately.',
    href: '/helicopter-charter/',
  },
  {
    n: '03',
    name: 'Chauffeur',
    line: 'Timed to the aircraft.',
    body: 'A car at the steps at both ends, briefed on the flight rather than on a pickup time, so a delay moves the car instead of stranding you.',
    href: '/transfers/',
  },
  {
    n: '04',
    name: 'Luxury & performance cars',
    line: 'Something to drive yourself.',
    body: 'Where the point of the trip is the road, a saloon, an estate or something rarer waiting at the destination for the days you are there.',
    href: '/vehicles/',
  },
  {
    n: '05',
    name: 'Exclusive hotels',
    line: 'Held as relationships.',
    body: 'A short collection of exceptional hotels at the destinations we fly to most, approached directly rather than through a booking engine.',
    href: '/hotels/',
  },
  {
    n: '06',
    name: 'Bespoke resorts & villas',
    line: 'The whole property, privately.',
    body: 'Villas, chalets and resorts for the trip either side of the flight, arranged through destination partners who know the properties personally.',
    href: '/resorts/',
  },
  {
    n: '07',
    name: 'Private experiences',
    line: 'The reason you went.',
    body: 'The table, the mountain, the berth, the paddock. Arranged around your dates so the journey ends in something worth the travel.',
    href: '/experiences/',
  },
];

/** The homepage scroll narrative: terminal to experience, in six beats. */
export const JOURNEY_ARC: ArcStep[] = [
  { label: 'Private terminal', note: 'Arrive minutes before, not hours.' },
  { label: 'Private jet', note: 'Your aircraft, your departure time.' },
  { label: 'Destination', note: 'The closest field, not the biggest.' },
  { label: 'Chauffeur', note: 'A car at the aircraft steps.' },
  { label: 'Private resort', note: 'Keys held, arrival expected.' },
  { label: 'Experience', note: 'The reason the trip existed.' },
];

/**
 * Worked journeys. Illustrative of how the pieces connect, and written as
 * shapes rather than as packages with prices attached.
 */
export const SAMPLE_JOURNEYS: SampleJourney[] = [
  {
    kicker: 'A summer weekend',
    title: 'London to a villa above the sea',
    steps: ['London', 'Private terminal', 'Midsize jet', 'Ibiza', 'Chauffeur', 'Private villa'],
    body: 'Leave west London after lunch on Friday, clear a private terminal in minutes, and be on a terrace before the light goes. The car knows the aircraft, and the villa knows the car.',
  },
  {
    kicker: 'A winter week',
    title: 'London to the Alps before the lifts open',
    steps: ['London', 'Light jet', 'Geneva', 'Helicopter', 'Alpine resort'],
    body: 'The road from Geneva into the mountains is the part that undoes the time the jet saved. A short helicopter leg removes it, and the skis travel with you rather than behind you.',
  },
  {
    kicker: 'A working day',
    title: 'Three cities, home for dinner',
    steps: ['Farnborough', 'Super-midsize jet', 'Zurich', 'Milan', 'Chauffeur', 'London'],
    body: 'Two meetings and a site visit placed where they are useful rather than where a timetable allows, with the aircraft waiting between them and one person holding the whole day.',
  },
];

/**
 * Curated collections. Organising ideas for the accommodation pages, so the
 * experience reads as a private collection rather than as a search result.
 * Named properties are deliberately absent until there is something real to
 * name.
 */
export const COLLECTIONS: Collection[] = [
  { name: 'Private Islands', line: 'A whole shoreline, and nobody else on it.' },
  { name: 'Mediterranean Escapes', line: 'The coast from the Balearics to the Aegean.' },
  { name: 'Alpine Retreats', line: 'Chalets with the mountain on the doorstep.' },
  { name: 'City Icons', line: 'The addresses that define their skyline.' },
  { name: 'Remote Luxury', line: 'Far from everything, short of nothing.' },
  { name: 'Beachfront Villas', line: 'The sea at the end of the garden.' },
  { name: 'Wellness Retreats', line: 'Somewhere designed around recovering.' },
  { name: 'Bespoke Residences', line: 'Houses taken privately, staffed and stocked.' },
];

/** Chauffeur and ground transport, framed around what it removes. */
export const GROUND_USES: NamedItem[] = [
  {
    name: 'At the aircraft steps',
    body: 'Cars are permitted airside at most private terminals, so the walk from the seat to the cabin is a matter of yards rather than a terminal crossing.',
  },
  {
    name: 'Briefed on the flight, not the clock',
    body: 'Your driver is given the tail number and the movement, so an early arrival or a slot delay moves the car rather than leaving you waiting for it.',
  },
  {
    name: 'Both ends of the journey',
    body: 'The arrival car is arranged at the same time as the departure one, through partners at the destination rather than an app you open on landing.',
  },
  {
    name: 'For the whole stay',
    body: 'A car and driver held on call for the days you are there, rather than booked leg by leg as each plan firms up.',
  },
];

/** Vehicle hire, kept honest about what depends on the destination. */
export const VEHICLE_KINDS: NamedItem[] = [
  {
    name: 'Executive saloons',
    body: 'The default for city arrivals and business travel: quiet, discreet, and unremarkable in the right way.',
  },
  {
    name: 'Large SUVs and estates',
    body: 'For families, luggage, skis and dogs, or where the last stretch of road is not tarmac.',
  },
  {
    name: 'Performance and open-top',
    body: 'Where the drive is the point. Availability is genuinely limited and seasonal, particularly in the Mediterranean and the Alps in peak weeks.',
  },
  {
    name: 'Self-drive or chauffeured',
    body: 'Either, at each destination. Self-drive depends on local licence and insurance requirements, which we confirm for your specific trip before promising a car.',
  },
];

/** What the hotel and resort relationship actually is. Deliberately modest. */
export const STAY_PRINCIPLES: NamedItem[] = [
  {
    name: 'A collection, not a catalogue',
    body: 'A short list of places we would send someone we know, at the destinations we fly to most. No grids of a thousand properties competing on price.',
  },
  {
    name: 'Approached directly',
    body: 'Enquiries go to the property rather than through a booking platform, which is what makes a late arrival, an adjoining room or a held suite a conversation rather than a form.',
  },
  {
    name: 'Arranged around the flight',
    body: 'Check-in is set against your actual arrival, and the property is told when the aircraft lands rather than a nominal time.',
  },
  {
    name: 'No invented exclusivity',
    body: 'Where we have a direct relationship we will say so, and where we are making an introduction we will say that instead. We do not claim a property is ours alone.',
  },
];

/** Experience categories, written as outcomes rather than as an activity list. */
export const EXPERIENCES: NamedItem[] = [
  {
    name: 'Tables and cellars',
    body: 'Restaurants that are not taking bookings, kitchens that will cook privately, and cellars that open for a small group.',
  },
  {
    name: 'Mountains and water',
    body: 'First tracks before the lifts turn, a guide who knows the off-piste, a berth for the week or a boat for the afternoon.',
  },
  {
    name: 'Sport and the paddock',
    body: 'Race weekends, finals and fixtures, with the arrival and departure windows — the genuinely difficult part — planned alongside the tickets.',
  },
  {
    name: 'Quiet and closed doors',
    body: 'A gallery outside opening hours, a maker’s workshop, a garden not open to the public. Arranged where it can be, declined where it cannot.',
  },
];

/* ------------------------------------------------------------------ *
 * Market rates, route detail and accreditation literacy.
 *
 * Added after a competitor review of the London charter market
 * (September 2026). Three gaps came out of it:
 *
 *  1. Every competitor either publishes nothing on price (Charter-A,
 *     Starr Luxury Jets, SHY) or publishes single fake-precise totals
 *     (PrivateFly quotes one number per seat count for London–Geneva).
 *     Publishing honest *ranges* with their provenance, and showing the
 *     arithmetic rather than a total, beats both.
 *  2. Competitors run dozens of route pages; we had one, and it showed
 *     "To verify" to real visitors.
 *  3. LunaJets leads on trust with "first European broker to hold ARGUS
 *     certification". Nobody explains to a client what the standards
 *     actually are, or that auditing an operator and auditing a broker
 *     are different things. That explanation is ours to own.
 * ------------------------------------------------------------------ */

export interface MarketRate {
  /** Must match a `name` in CATEGORIES. */
  category: string;
  /** Indicative charter rate per flying hour, GBP. */
  low: number;
  high: number;
  /** The sectors this category is usually the right answer for. */
  suits: string;
}

/**
 * Indicative UK market rates per flying hour, not a Lapid rate card.
 *
 * These are the published ranges that independent UK charter cost guides
 * converged on as at September 2026, cross-checked against the per-flight
 * figures PrivateFly publishes for London–Geneva. They are here to give a
 * reader an order of magnitude before they enquire — which is the single
 * thing the market's own websites refuse to do — and every page that shows
 * them also shows what sits on top.
 *
 * Very light jets and turboprops are deliberately absent: the published
 * figures for them disagree too widely to quote, and on the short sectors
 * they suit, positioning dominates the price anyway.
 */
export const MARKET_RATES: MarketRate[] = [
  {
    category: 'Light jets',
    low: 2200,
    high: 3500,
    suits: 'London to Paris, Geneva, Amsterdam or Zurich with a small group.',
  },
  {
    category: 'Midsize jets',
    low: 3000,
    high: 4500,
    suits: 'Ski trips with luggage, and Mediterranean sectors without a stop.',
  },
  {
    category: 'Super-midsize jets',
    low: 3800,
    high: 5500,
    suits: 'Four-hour-plus sectors with a stand-up cabin, short of transatlantic.',
  },
  {
    category: 'Heavy jets',
    low: 5000,
    high: 7500,
    suits: 'Larger groups on long sectors, with separate zones to work or rest.',
  },
  {
    category: 'Ultra-long-range jets',
    low: 7000,
    high: 10000,
    suits: 'Non-stop to the Gulf, the US west coast or Asia.',
  },
];

/** Provenance for MARKET_RATES, rendered wherever the table appears. */
export const MARKET_RATES_NOTE =
  'Indicative UK market ranges per flying hour as at September 2026, drawn from published charter cost guides and cross-checked against operator quotes. They are not our rates, and they are not a quote.';

/** What sits on top of the hourly rate. The honest half of the arithmetic. */
export const RATE_CAVEATS: NamedItem[] = [
  {
    name: 'Positioning',
    body: 'The aircraft has to get to you. If the nearest suitable one is in Nice, you are paying for the empty legs at both ends, and on a short sector that can exceed the flight itself.',
  },
  {
    name: 'Minimum charges',
    body: 'Most operators apply a minimum — commonly two flying hours a day, and a daily minimum on a multi-day trip where the aircraft waits for you.',
  },
  {
    name: 'Airport and handling',
    body: 'Landing, handling, parking and passenger fees differ sharply between airports. Choosing Luton over London City can move the total either way.',
  },
  {
    name: 'The day itself',
    body: 'De-icing in January, a slot at 7am on a Friday in July, an overnight crew, a two-hour wait on the ground. Each is real and none is in an hourly rate.',
  },
];

export interface RouteDetail {
  /** URL segment under /routes/. */
  slug: string;
  city: string;
  title: string;
  desc: string;
  intent: string;
  /** Key into the route hero image map in the page template. */
  image: string;
  eyebrow: string;
  standfirst: string;
  /** Great-circle distance from Farnborough, nautical miles. Computed, not sourced. */
  distanceNm: number;
  /** Realistic block time range, engines on to engines off. */
  blockTime: string;
  /** The nearest London departure field, where it is not Farnborough. */
  nearest: string;
  departures: string[];
  arrival: string;
  /** Categories from MARKET_RATES that suit this sector, in order of typical choice. */
  categories: string[];
  aircraftNote: string;
  uses: { title: string; body: string; link?: 'firsttime' | 'transfers' | 'business' }[];
  faqs: Faq[];
  /** Sitemap priority. */
  priority: number;
}

/**
 * Distances are great-circle from Farnborough, computed rather than quoted.
 * Block times add airway routing and taxi to that, and are given as ranges
 * because winds and routing genuinely move them — a single figure would be
 * the same false precision we are criticising elsewhere.
 */
export const ROUTE_DETAIL: RouteDetail[] = [
  {
    slug: 'london-to-paris',
    city: 'Paris',
    title: 'Private Jet London to Paris | Lapid Aviation',
    desc: 'Private jet charter from London to Paris Le Bourget. Departure airports, block time, suitable aircraft and what actually moves the price.',
    intent: 'private jet London to Paris · transactional',
    image: 'jets',
    eyebrow: 'European route',
    standfirst:
      'The shortest route most people fly privately, and the one where the aircraft matters least and the airports matter most. Le Bourget sits closer to central Paris than Charles de Gaulle, and the whole journey is usually shorter than the queue at the other end of a scheduled flight.',
    distanceNm: 186,
    blockTime: '50 minutes – 1 hour 5 minutes',
    nearest: 'Biggin Hill, at 169nm',
    departures: ['Farnborough', 'Biggin Hill', 'London City', 'Luton', 'RAF Northolt'],
    arrival:
      'Paris Le Bourget (LBG), the dedicated business aviation airport north-east of the city. Toussus-le-Noble and Pontoise are alternatives when Le Bourget is full.',
    categories: ['Light jets', 'Midsize jets'],
    aircraftNote:
      'A light jet is almost always the right answer. On a sector this short the hourly rate barely matters — positioning and the minimum charge dominate the total, which is why two quotes for the same aircraft can differ by thousands.',
    uses: [
      {
        title: 'Same-day business',
        body: 'Out at seven, a full day of meetings, home for dinner. The reason this route exists.',
        link: 'business',
      },
      {
        title: 'Weekends',
        body: 'Friday evening out and Sunday night back, with the car waiting at the aircraft rather than in a rank.',
        link: 'transfers',
      },
      {
        title: 'First private flight',
        body: 'Short, familiar and forgiving — the sector most people fly first.',
        link: 'firsttime',
      },
      {
        title: 'Events',
        body: 'Roland-Garros, the rugby, a show. Arrival and departure windows are the difficult part, and they are planned with the tickets.',
      },
    ],
    faqs: [
      {
        q: 'Is it quicker than the Eurostar?',
        a: 'Door to door, often not by much, and on a bad day the train wins. What charter buys on this route is the departure time and the absence of a terminal, not raw speed.',
      },
      {
        q: 'Why is a 50-minute flight not cheap?',
        a: 'Because you are not paying for 50 minutes. You are paying for the aircraft to reach you, the crew day, the minimum charge and the handling at both ends. On short sectors that fixed cost is most of the price.',
      },
    ],
    priority: 0.7,
  },
  {
    slug: 'london-to-geneva',
    city: 'Geneva',
    title: 'Private Jet London to Geneva | Lapid Aviation',
    desc: 'Private jet charter from London to Geneva. Departure airports, block time, suitable aircraft and what shapes the cost of the route.',
    intent: 'private jet London to Geneva · transactional',
    image: 'geneva',
    eyebrow: 'European route',
    standfirst:
      'One of the busiest private aviation routes in Europe, used for banking meetings, ski connections and onward travel into the Alps. Charter removes the layover through Zurich or Basel that scheduled airlines often add, and lets you choose the airport at either end.',
    distanceNm: 407,
    blockTime: '1 hour 25 minutes – 1 hour 40 minutes',
    nearest: 'Biggin Hill, at 389nm',
    departures: ['Farnborough', 'Biggin Hill', 'London City', 'Luton'],
    arrival:
      'Geneva Airport (GVA), which has dedicated business aviation handling on the French and Swiss sides. Slots tighten considerably on winter weekends.',
    categories: ['Light jets', 'Midsize jets'],
    aircraftNote:
      'Light jets cover this sector comfortably for small groups. A midsize aircraft adds cabin and baggage space, which is what decides it for a ski party travelling with boards, boots and bags.',
    uses: [
      {
        title: 'Business travel',
        body: 'A morning meeting in Geneva and back in London for the evening, without a scheduled layover eating the middle of the day.',
        link: 'business',
      },
      {
        title: 'The Alps',
        body: 'The usual connection point for the mountains, with luggage for boards, boots and bags handled without an allowance.',
        link: 'transfers',
      },
      {
        title: 'Family travel',
        body: 'No transfers, no queues, and departure times that work around school runs and nap schedules rather than a timetable.',
      },
      {
        title: 'First-time flyers',
        body: 'A short, familiar route is a straightforward first private flight.',
        link: 'firsttime',
      },
    ],
    faqs: [
      {
        q: 'Can I fly into Geneva for a ski connection?',
        a: 'Yes, it is one of the most common uses of this route. Ground transfer onward into the Alps is arranged alongside the flight, and timed to the aircraft rather than to the booking.',
      },
      {
        q: 'Is a same-day return practical?',
        a: 'Often, for a single meeting. Crew duty limits and airport hours set the boundaries, and we check both before confirming a same-day plan.',
      },
      {
        q: 'How far ahead should I book in ski season?',
        a: 'Further than you would expect. Geneva slots and Alpine ground transfer both tighten on Saturdays between late December and early March, and the aircraft is rarely the constraint — the slot is.',
      },
    ],
    priority: 0.7,
  },
  {
    slug: 'london-to-nice',
    city: 'Nice',
    title: 'Private Jet London to Nice | Lapid Aviation',
    desc: 'Private jet charter from London to Nice Côte d’Azur. Block time, suitable aircraft, the onward helicopter to Monaco and what drives the cost.',
    intent: 'private jet London to Nice · transactional',
    image: 'resorts',
    eyebrow: 'Mediterranean route',
    standfirst:
      'The gateway to the Côte d’Azur, and the busiest business aviation airport in France. It is also the route where timing matters most: on a Friday in July the aircraft is the easy part and the slot is not.',
    distanceNm: 560,
    blockTime: '1 hour 50 minutes – 2 hours 5 minutes',
    nearest: 'Biggin Hill, at 544nm',
    departures: ['Farnborough', 'Biggin Hill', 'Luton', 'Stansted'],
    arrival:
      'Nice Côte d’Azur (NCE), with a separate business aviation terminal and a heliport alongside it for the onward run to Monaco.',
    categories: ['Light jets', 'Midsize jets', 'Super-midsize jets'],
    aircraftNote:
      'A light jet will do it, but a midsize is the more usual choice — two hours is long enough that cabin space starts to be worth paying for, particularly with a family and summer luggage.',
    uses: [
      {
        title: 'Summer on the coast',
        body: 'Antibes, Saint-Tropez and Cap Ferrat, with the car or the tender arranged to meet the aircraft.',
        link: 'transfers',
      },
      {
        title: 'Monaco',
        body: 'Flown into Nice with a seven-minute helicopter transfer on to Monaco itself — faster and considerably more pleasant than the coast road.',
      },
      {
        title: 'Race weekend',
        body: 'The Grand Prix is the hardest weekend of the year to arrange here. It is planned months out, not weeks.',
      },
      {
        title: 'Yachts',
        body: 'Joining or leaving a boat, where the flight has to fit a berth window rather than a diary.',
      },
    ],
    faqs: [
      {
        q: 'Should I fly to Nice or Cannes–Mandelieu?',
        a: 'Mandelieu is closer to Cannes and quieter, but it takes smaller aircraft and closes earlier. For most trips Nice is the better answer; for a light jet landing in daylight, Mandelieu can save half an hour of road.',
      },
      {
        q: 'Is the helicopter to Monaco worth it?',
        a: 'In summer, almost always. It is roughly seven minutes against an hour or more on the coast road, and it is a scheduled-frequency service rather than a charter in its own right.',
      },
    ],
    priority: 0.7,
  },
  {
    slug: 'london-to-ibiza',
    city: 'Ibiza',
    title: 'Private Jet London to Ibiza | Lapid Aviation',
    desc: 'Private jet charter from London to Ibiza. Block time, suitable aircraft, summer slot constraints and what shapes the cost.',
    intent: 'private jet London to Ibiza · transactional',
    image: 'resorts',
    eyebrow: 'Mediterranean route',
    standfirst:
      'A two-and-a-half hour sector with the sharpest seasonality of any route we fly. Between June and September, Ibiza is not a question of which aircraft but of whether there is a slot and somewhere to park it.',
    distanceNm: 750,
    blockTime: '2 hours 15 minutes – 2 hours 35 minutes',
    nearest: 'Farnborough or Biggin Hill, both at 750nm',
    departures: ['Farnborough', 'Biggin Hill', 'Luton', 'Stansted'],
    arrival:
      'Ibiza Airport (IBZ). Parking is the binding constraint in high summer, and an aircraft often has to reposition away and return for you.',
    categories: ['Midsize jets', 'Super-midsize jets'],
    aircraftNote:
      'Midsize upward. It is long enough that a light jet becomes a compromise, and summer groups rarely travel light.',
    uses: [
      {
        title: 'Summer weekends',
        body: 'Thursday or Friday out, Sunday or Monday back — the pattern the whole island runs on, and the reason those slots go first.',
      },
      {
        title: 'Villa season',
        body: 'A house for a week or a fortnight, with the flights at either end and the ground in between held together.',
      },
      {
        title: 'Groups',
        body: 'Ten or twelve travelling together, where the alternative is three scheduled flights arriving four hours apart.',
      },
      {
        title: 'Formentera',
        body: 'The real destination for many trips here, reached by boat from Ibiza and worth arranging before you land.',
      },
    ],
    faqs: [
      {
        q: 'Why does the price jump so much in August?',
        a: 'Because the aircraft cannot stay. Parking at Ibiza is full, so it flies empty to Palma or Valencia, waits, and flies back empty to collect you. You pay for those legs, and they are the difference.',
      },
      {
        q: 'How early should I book a summer weekend?',
        a: 'Weeks rather than days for July and August. It is the one route where we will tell you plainly that leaving it late means either a worse aircraft or a different day.',
      },
    ],
    priority: 0.6,
  },
  {
    slug: 'london-to-zurich',
    city: 'Zurich',
    title: 'Private Jet London to Zurich | Lapid Aviation',
    desc: 'Private jet charter from London to Zurich. Block time, suitable aircraft, ground transfer to the financial district and what drives the cost.',
    intent: 'private jet London to Zurich · transactional',
    image: 'business',
    eyebrow: 'European route',
    standfirst:
      'A business route almost to the exclusion of anything else. Ninety minutes in the air, minimal ground transfer at the far end, and a diary that usually wants the same aircraft back the same evening.',
    distanceNm: 430,
    blockTime: '1 hour 25 minutes – 1 hour 45 minutes',
    nearest: 'Biggin Hill, at 405nm',
    departures: ['Farnborough', 'Biggin Hill', 'London City', 'Luton'],
    arrival:
      'Zurich Airport (ZRH), with business aviation handling and around fifteen minutes on the road to the financial district. Kloten operates a night curfew that shapes late departures.',
    categories: ['Light jets', 'Midsize jets'],
    aircraftNote:
      'A light jet suits it. Where the same team is going on to Geneva or Milan the following morning, a midsize aircraft held for the two days is often the cheaper arrangement despite the larger aircraft.',
    uses: [
      {
        title: 'Same-day meetings',
        body: 'The standard shape: early out, back before the curfew, nothing lost to a connection.',
        link: 'business',
      },
      {
        title: 'Roadshows',
        body: 'Zurich as one stop among four or five, where the aircraft waits and the schedule is yours.',
        link: 'business',
      },
      {
        title: 'Discretion',
        body: 'A movement that does not appear on a passenger manifest anyone can see, which for some of this traffic is the point.',
      },
      {
        title: 'The mountains',
        body: 'An alternative entry to the eastern Alps, with the onward drive to Klosters or St Moritz timed to the aircraft.',
        link: 'transfers',
      },
    ],
    faqs: [
      {
        q: 'Can I get back the same night?',
        a: 'Usually, but Zurich has a night curfew and crew duty limits apply from the moment they report. A late finish is the thing to tell us first, not last.',
      },
      {
        q: 'Is London City worth using for this route?',
        a: 'If you are in the City or Canary Wharf, often yes. It has a steep-approach restriction that rules out some types, so the airport choice and the aircraft choice have to be made together.',
      },
    ],
    priority: 0.6,
  },
  {
    slug: 'london-to-dubai',
    city: 'Dubai',
    title: 'Private Jet London to Dubai | Lapid Aviation',
    desc: 'Private jet charter from London to Dubai non-stop. Block time, ultra-long-range aircraft, overnight scheduling and what drives the cost.',
    intent: 'private jet London to Dubai · transactional',
    image: 'cabin',
    eyebrow: 'Long-haul route',
    standfirst:
      'Just under three thousand nautical miles, flown non-stop and usually overnight so the aircraft lands into the start of a working day. This is the sector where the cabin stops being a comfort and becomes the reason you chartered.',
    distanceNm: 2986,
    blockTime: '6 hours 30 minutes – 7 hours 15 minutes',
    nearest: 'Stansted, at 2,956nm',
    departures: ['Farnborough', 'Luton', 'Stansted'],
    arrival:
      'Al Maktoum (DWC) for most private movements, or Dubai International (DXB) where the schedule justifies it. Al Maktoum is quicker on the ground and further from the city.',
    categories: ['Heavy jets', 'Ultra-long-range jets'],
    aircraftNote:
      'Ultra-long-range for a comfortable non-stop with beds. A heavy jet will do it, but with a tighter payload-and-range trade: a full cabin of passengers and luggage can be the thing that forces a fuel stop.',
    uses: [
      {
        title: 'Overnight business',
        body: 'Depart after the London evening, sleep, and arrive able to work. The single most common reason this sector is flown privately.',
        link: 'business',
      },
      {
        title: 'Family relocation trips',
        body: 'A household moving in one aircraft, with the luggage and the flexibility that implies.',
      },
      {
        title: 'Onward to the Indian Ocean',
        body: 'Dubai as the connection point for the Maldives or the Seychelles, with the second sector and the resort arranged together.',
      },
      {
        title: 'Winter sun',
        body: 'A long weekend in January where the flight time is the price of the weather.',
      },
    ],
    faqs: [
      {
        q: 'Is it definitely non-stop?',
        a: 'On an ultra-long-range aircraft, yes. On a heavy jet it depends on the passenger and luggage load and on the winds that day — we tell you which before you book, not after.',
      },
      {
        q: 'Does flying overnight cost more?',
        a: 'Not in itself, and it often costs less: the aircraft is more likely to be available, and you are not paying for a crew to sit in a hotel while you work.',
      },
    ],
    priority: 0.6,
  },
  {
    slug: 'london-to-new-york',
    city: 'New York',
    title: 'Private Jet London to New York | Lapid Aviation',
    desc: 'Private jet charter from London to New York Teterboro. Block time both directions, ultra-long-range aircraft, customs pre-clearance and cost drivers.',
    intent: 'private jet London to New York · transactional',
    image: 'jets',
    eyebrow: 'Transatlantic route',
    standfirst:
      'Flown direct into Teterboro, twelve miles from Midtown, which is most of the argument. The other part is that the westbound and eastbound legs are not the same flight: the jet stream adds close to an hour going out.',
    distanceNm: 2986,
    blockTime: '7 hours 30 minutes – 8 hours 15 minutes westbound, around an hour less coming back',
    nearest: 'Farnborough, at 2,986nm',
    departures: ['Farnborough', 'Luton', 'Stansted'],
    arrival:
      'Teterboro (TEB) for most private traffic, with Westchester and Morristown as alternatives. Teterboro has a weight limit that rules out the largest types.',
    categories: ['Heavy jets', 'Ultra-long-range jets'],
    aircraftNote:
      'Ultra-long-range westbound. Heavy jets make the crossing eastbound comfortably but can need a technical stop — Gander, Shannon or Keflavík — going the other way against the winds with a full load.',
    uses: [
      {
        title: 'Working the day twice',
        body: 'Leave London in the morning, land into the New York working day, and keep both.',
        link: 'business',
      },
      {
        title: 'Deal timetables',
        body: 'Signings and closings that move by hours, where a scheduled ticket is the wrong instrument.',
        link: 'business',
      },
      {
        title: 'Families crossing together',
        body: 'One aircraft, one set of luggage, no connection, and a cabin the children can actually sleep in.',
      },
      {
        title: 'Onward domestic',
        body: 'Teterboro to Nantucket, Aspen or Palm Beach as a second short sector, planned as one journey rather than two bookings.',
      },
    ],
    faqs: [
      {
        q: 'Why is the return quicker?',
        a: 'The jet stream. It runs west to east across the Atlantic, so it works against you outbound and with you coming home — routinely an hour of difference, occasionally more.',
      },
      {
        q: 'Do I still clear customs?',
        a: 'Yes. You clear on arrival at the private terminal rather than in a hall, which typically takes minutes, and we confirm the arrangements at your specific arrival airport before you fly.',
      },
    ],
    priority: 0.6,
  },
  {
    slug: 'london-to-amsterdam',
    city: 'Amsterdam',
    title: 'Private Jet London to Amsterdam | Lapid Aviation',
    desc: 'Private jet charter from London to Amsterdam. Block time, suitable aircraft, Rotterdam as an alternative and what drives the cost.',
    intent: 'private jet London to Amsterdam · transactional',
    image: 'business',
    eyebrow: 'European route',
    standfirst:
      'Under an hour in the air, which makes this the route where chartering is hardest to justify on speed alone and easiest to justify on the day. Scheduled options are frequent and cheap; what they will not do is leave at 6.40am because your meeting moved.',
    distanceNm: 215,
    blockTime: '55 minutes – 1 hour 10 minutes',
    nearest: 'Stansted, at 169nm',
    departures: ['Farnborough', 'Biggin Hill', 'London City', 'Luton', 'Stansted'],
    arrival:
      'Schiphol (AMS) has business aviation handling but shares the congestion of a major hub. Rotterdam (RTM) is often quicker on the ground and closer to the south of the city.',
    categories: ['Light jets'],
    aircraftNote:
      'A light jet, and on a sector this short the smallest one that fits the group. Anything larger is paying for range you will not use — the cost here is almost entirely positioning and the minimum charge.',
    uses: [
      {
        title: 'Same-day meetings',
        body: 'Out and back inside a working day with the aircraft waiting, which on a route this short usually costs less than two separate one-way charters.',
        link: 'business',
      },
      {
        title: 'Moving a team',
        body: 'Six or eight people travelling together rather than spread across three scheduled departures.',
        link: 'business',
      },
      {
        title: 'Onward into Europe',
        body: 'Amsterdam as the first leg of a multi-city week, where the aircraft stays with you rather than being rebooked.',
      },
      {
        title: 'Late finishes',
        body: 'A day that ends when it ends. Schiphol operates into the evening and Rotterdam has a curfew, so the airport choice follows the diary.',
      },
    ],
    faqs: [
      {
        q: 'Is this route worth chartering at all?',
        a: 'Honestly, not always — and we will say so. On a flexible day the scheduled options are hard to argue with. Charter earns its cost here when the timing is fixed, the group is more than four, or the return has to happen the same evening.',
      },
      {
        q: 'Schiphol or Rotterdam?',
        a: 'Schiphol for onward connections and the east of the city; Rotterdam for The Hague, the south, and a faster turn on the ground. The difference is usually twenty to thirty minutes of road, which on a one-hour flight is not trivial.',
      },
    ],
    priority: 0.6,
  },
  {
    slug: 'london-to-courchevel',
    city: 'Courchevel',
    title: 'Private Jet London to Courchevel | Lapid Aviation',
    desc: 'Private jet charter from London to Courchevel via Chambéry or Geneva. Block time, the altiport restriction, transfer options and what drives the cost.',
    intent: 'private jet London to Courchevel · transactional',
    image: 'resorts',
    eyebrow: 'Alpine route',
    standfirst:
      'The route most people ask for by the resort rather than the airport, which is where the complication starts. Courchevel has its own altiport, but it is one of the most restricted runways in Europe and takes almost no jets — so for most trips the flight goes to Chambéry and the last hour is on the ground.',
    distanceNm: 430,
    blockTime: '1 hour 25 minutes – 1 hour 45 minutes',
    nearest: 'Biggin Hill, at 413nm',
    departures: ['Farnborough', 'Biggin Hill', 'London City', 'Luton'],
    arrival:
      'Chambéry (CMF) is the usual answer, around an hour and a half by road. Geneva is further but has more slots and longer hours. Courchevel Altiport (CVF) itself takes turboprops and helicopters only, and requires a specifically certified crew.',
    categories: ['Light jets', 'Midsize jets'],
    aircraftNote:
      'A midsize jet more often than a light one, because nobody travels to the Alps without luggage. If the plan is to land at the altiport rather than drive up, that is a turboprop or a helicopter and a separate conversation — we will tell you which is realistic for your dates before you commit to the idea.',
    uses: [
      {
        title: 'Ski weeks',
        body: 'Saturday to Saturday in high season, which is exactly when Chambéry slots and Alpine transfers are hardest to get.',
        link: 'transfers',
      },
      {
        title: 'Long weekends',
        body: 'Thursday night out, Monday morning back, with the chalet and the transfer timed to the aircraft rather than to a booking system.',
      },
      {
        title: 'The altiport',
        body: 'A helicopter from Chambéry or Geneva into Courchevel itself, which turns a ninety-minute mountain road into about fifteen minutes.',
      },
      {
        title: 'Families with kit',
        body: 'Skis, boards, boots and a pushchair, with no allowance to argue about and no oversize desk.',
      },
    ],
    faqs: [
      {
        q: 'Can I land a jet at Courchevel?',
        a: 'Almost certainly not. The altiport has a very short, steeply sloped runway, no instrument approach and a crew certification requirement. It is turboprop and helicopter territory. Any broker promising you a jet into CVF is worth a second question.',
      },
      {
        q: 'Chambéry or Geneva?',
        a: 'Chambéry is closer — roughly an hour and a half to Courchevel against two and a half from Geneva. Geneva has more slots, longer operating hours and more aircraft positioned nearby, so in a busy week it is often the only one available.',
      },
      {
        q: 'How far ahead for February half term?',
        a: 'Months, not weeks. It is the single most contested week of the Alpine season, and the constraint is the slot and the transfer rather than the aircraft.',
      },
    ],
    priority: 0.7,
  },
  {
    slug: 'london-to-milan',
    city: 'Milan',
    title: 'Private Jet London to Milan | Lapid Aviation',
    desc: 'Private jet charter from London to Milan Linate. Block time, suitable aircraft, airport choice and what drives the cost.',
    intent: 'private jet London to Milan · transactional',
    image: 'business',
    eyebrow: 'European route',
    standfirst:
      'A business route with two spikes a year for fashion week and one for the Grand Prix. Linate sits close enough to the centre that the ground leg is genuinely short, which is most of the reason this route is flown privately rather than scheduled.',
    distanceNm: 532,
    blockTime: '1 hour 40 minutes – 2 hours',
    nearest: 'Biggin Hill, at 510nm',
    departures: ['Farnborough', 'Biggin Hill', 'London City', 'Luton'],
    arrival:
      'Linate (LIN) for almost all private traffic, around twenty minutes from the centre. Malpensa is further out and Bergamo further still; both are fallbacks when Linate is slot-constrained.',
    categories: ['Light jets', 'Midsize jets'],
    aircraftNote:
      'A light jet does it comfortably. A midsize is the usual choice when the group is larger than five or the same aircraft is going on to Rome or Geneva the next morning.',
    uses: [
      {
        title: 'Same-day business',
        body: 'The standard pattern: early out, back the same evening, nothing lost to a connection at either end.',
        link: 'business',
      },
      {
        title: 'Fashion weeks',
        body: 'February and September, when the whole route books out and the slots go before the aircraft do.',
      },
      {
        title: 'Monza',
        body: 'Grand Prix weekend, which is planned in the spring rather than in August.',
      },
      {
        title: 'Onward to the lakes',
        body: 'Como and Garda, with the car meeting the aircraft at Linate and the house expecting you when you actually arrive.',
        link: 'transfers',
      },
    ],
    faqs: [
      {
        q: 'Why Linate rather than Malpensa?',
        a: 'Proximity. Linate is roughly twenty minutes from central Milan against fifty or more from Malpensa, and on a two-hour flight that is a meaningful share of the journey. Linate is slot-constrained, though, so it is not always available.',
      },
      {
        q: 'Can the aircraft wait for a same-day return?',
        a: 'Usually, and on this sector waiting is often cheaper than two one-way charters. Crew duty limits set the outer boundary, so a late finish is the thing to tell us at the start.',
      },
    ],
    priority: 0.6,
  },
  {
    slug: 'london-to-palma',
    city: 'Palma',
    title: 'Private Jet London to Palma de Mallorca | Lapid Aviation',
    desc: 'Private jet charter from London to Palma de Mallorca. Block time, suitable aircraft, summer slot pressure and what drives the cost.',
    intent: 'private jet London to Palma · transactional',
    image: 'resorts',
    eyebrow: 'Mediterranean route',
    standfirst:
      'Two and a half hours to the Balearics, and a route that behaves completely differently in July than in April. Palma is a full commercial airport with heavy summer traffic, so in season the constraint is the slot and the parking rather than the aircraft.',
    distanceNm: 719,
    blockTime: '2 hours 10 minutes – 2 hours 30 minutes',
    nearest: 'Biggin Hill, at 716nm',
    departures: ['Farnborough', 'Biggin Hill', 'Luton', 'Stansted'],
    arrival:
      'Palma de Mallorca (PMI), with a dedicated general aviation terminal. Summer slot allocation is tight and parking often forces an aircraft to reposition away and return.',
    categories: ['Midsize jets', 'Super-midsize jets'],
    aircraftNote:
      'Midsize upward. At two and a half hours a light jet becomes a compromise rather than a saving, and summer groups travelling to a villa rarely pack light.',
    uses: [
      {
        title: 'Villa weeks',
        body: 'A house for a week or a fortnight, with the flights either side and the ground in between held by one person.',
      },
      {
        title: 'Yachts',
        body: 'Joining or leaving a boat in Palma or Port Adriano, where the flight has to fit a berth window rather than a diary.',
      },
      {
        title: 'Family summers',
        body: 'Children, luggage and a departure time chosen around them instead of around a timetable.',
      },
      {
        title: 'Shoulder season',
        body: 'April, May and October, when the island is quiet, the slots are free and this route is at its least expensive.',
      },
    ],
    faqs: [
      {
        q: 'Why does August cost so much more?',
        a: 'Because the aircraft usually cannot stay. Parking at Palma fills, so it flies empty to Valencia or Ibiza, waits, and flies back empty for you. Those two legs are the difference, and they are not a markup — they are real flying.',
      },
      {
        q: 'Can I fly straight to Ibiza or Menorca instead?',
        a: 'Yes, both take private traffic directly. Which island you land on should follow where you are staying, not the other way round, and we will price all three rather than steering you to one.',
      },
    ],
    priority: 0.6,
  },
  {
    slug: 'london-to-malaga',
    city: 'Málaga',
    title: 'Private Jet London to Málaga | Lapid Aviation',
    desc: 'Private jet charter from London to Málaga for Marbella and the Costa del Sol. Block time, suitable aircraft, Gibraltar as an alternative and cost drivers.',
    intent: 'private jet London to Malaga · transactional',
    image: 'resorts',
    eyebrow: 'Mediterranean route',
    standfirst:
      'The gateway to Marbella and the Costa del Sol, and one of the longer sectors people still fly on a midsize aircraft. Málaga runs year-round rather than seasonally, which makes it one of the easier Mediterranean routes to arrange at short notice.',
    distanceNm: 891,
    blockTime: '2 hours 30 minutes – 2 hours 50 minutes',
    nearest: 'Farnborough, at 891nm',
    departures: ['Farnborough', 'Biggin Hill', 'Luton', 'Stansted'],
    arrival:
      'Málaga (AGP), with a separate general aviation terminal and around forty minutes on the road to Marbella. Gibraltar and Jerez are alternatives for the western end of the coast.',
    categories: ['Midsize jets', 'Super-midsize jets'],
    aircraftNote:
      'A midsize jet is the usual answer and a super-midsize the comfortable one. Close to three hours is long enough that a stand-up cabin stops being a luxury for a full group.',
    uses: [
      {
        title: 'Marbella and Sotogrande',
        body: 'The reason most of this traffic exists, with the car meeting the aircraft rather than waiting in a rank.',
        link: 'transfers',
      },
      {
        title: 'Golf',
        body: 'Clubs, a group of eight, and a tee time that the flight is arranged around rather than the reverse.',
      },
      {
        title: 'Winter sun',
        body: 'One of the few Mediterranean routes that genuinely works in January, which also makes it cheaper then.',
      },
      {
        title: 'Property',
        body: 'A viewing trip out and back in a day, which scheduled timings make close to impossible.',
      },
    ],
    faqs: [
      {
        q: 'Should I fly to Gibraltar for Sotogrande?',
        a: 'Sometimes. Gibraltar is much closer to the western coast but its runway and weather make it less reliable, and a diversion there is inconvenient in a way a diversion at Málaga is not. We price both and explain the risk rather than picking for you.',
      },
      {
        q: 'Is a day return realistic?',
        a: 'Yes, and it is a common shape for property and business trips. Roughly five and a half hours of flying plus the day itself sits inside crew duty limits comfortably.',
      },
    ],
    priority: 0.6,
  },
  {
    slug: 'london-to-mykonos',
    city: 'Mykonos',
    title: 'Private Jet London to Mykonos | Lapid Aviation',
    desc: 'Private jet charter from London to Mykonos. Block time, suitable aircraft, severe summer slot and parking constraints, and what drives the cost.',
    intent: 'private jet London to Mykonos · transactional',
    image: 'resorts',
    eyebrow: 'Mediterranean route',
    standfirst:
      'Three and a half hours to a small island airport that spends ten weeks a year well beyond its comfortable capacity. Mykonos is the route where we are most likely to tell you that the aircraft is available and the airport is not.',
    distanceNm: 1383,
    blockTime: '3 hours 30 minutes – 3 hours 55 minutes',
    nearest: 'Biggin Hill, at 1,358nm',
    departures: ['Farnborough', 'Luton', 'Stansted'],
    arrival:
      'Mykonos (JMK), a single-runway airport with very limited parking. In July and August aircraft routinely drop passengers and reposition to Athens for the duration of the stay.',
    categories: ['Midsize jets', 'Super-midsize jets', 'Heavy jets'],
    aircraftNote:
      'Super-midsize is the sweet spot: enough range to do it comfortably without a stop, and a cabin worth having for three and a half hours. A midsize aircraft will make it, but with less margin on a hot day out of a short runway.',
    uses: [
      {
        title: 'Summer weeks',
        body: 'July and August, when the island is the destination and the airport is the problem.',
      },
      {
        title: 'Yachts',
        body: 'Joining a boat in the Cyclades, where Mykonos or Athens is the airport and the berth sets the timing.',
      },
      {
        title: 'Groups',
        body: 'Twelve or fourteen travelling together, which is where the per-person arithmetic starts to change.',
      },
      {
        title: 'Island hopping',
        body: 'Paros, Naxos and Santorini as onward legs by helicopter or boat, planned with the flight rather than after it.',
      },
    ],
    faqs: [
      {
        q: 'Why is Mykonos disproportionately expensive in August?',
        a: 'Parking. The aircraft cannot sit on the island for a week, so it flies empty to Athens and empty back. On a week-long trip you are paying for four legs of flying to take two, and no broker can make that go away.',
      },
      {
        q: 'Would Athens plus a helicopter be better?',
        a: 'Often, yes — and it is worth pricing both. Athens has capacity, longer hours and more aircraft nearby, and the helicopter leg is about thirty-five minutes. For a longer stay it frequently comes out cheaper as well as easier.',
      },
    ],
    priority: 0.6,
  },
  {
    slug: 'london-to-marrakech',
    city: 'Marrakech',
    title: 'Private Jet London to Marrakech | Lapid Aviation',
    desc: 'Private jet charter from London to Marrakech. Block time, suitable aircraft, permits and handling, and what drives the cost.',
    intent: 'private jet London to Marrakech · transactional',
    image: 'resorts',
    eyebrow: 'North African route',
    standfirst:
      'Three and a quarter hours, and the first route on this list that leaves European airspace — which changes the paperwork rather than the flying. Permits and handling need real lead time, and that is the part a broker is actually for.',
    distanceNm: 1224,
    blockTime: '3 hours 15 minutes – 3 hours 40 minutes',
    nearest: 'Farnborough, at 1,224nm',
    departures: ['Farnborough', 'Luton', 'Stansted'],
    arrival:
      'Marrakech Menara (RAK), which handles private traffic routinely but requires landing permits and arranged handling. Overflight and landing clearances are the long lead item, not the aircraft.',
    categories: ['Midsize jets', 'Super-midsize jets'],
    aircraftNote:
      'Midsize or super-midsize. The sector is comfortably inside a midsize aircraft’s range, and the decision is usually about cabin comfort for three hours rather than about whether it can make it.',
    uses: [
      {
        title: 'Long weekends',
        body: 'Close enough for three nights to make sense, and far enough that the weather is genuinely different.',
      },
      {
        title: 'Riads and resorts',
        body: 'The medina or the Palmeraie, with the transfer arranged at an airport where turning up without one is unpleasant.',
        link: 'transfers',
      },
      {
        title: 'Winter sun',
        body: 'December to February, when it is the shortest reliable flight from London to warmth.',
      },
      {
        title: 'Golf and the Atlas',
        body: 'Courses around the city, or a guided day in the mountains arranged before you land.',
      },
    ],
    faqs: [
      {
        q: 'How much notice does this route need?',
        a: 'More than a European sector. Landing and overflight permits are the constraint and they are not instant. Same-day is unrealistic; a few days is usually workable, and we will tell you plainly if your date is too tight rather than accepting it and hoping.',
      },
      {
        q: 'Is the handling different outside the EU?',
        a: 'Yes, in practice. Ground handling, customs and immigration all have to be arranged rather than assumed, and it is where an unmanaged private arrival goes wrong. It is included in what we set up, not an extra.',
      },
    ],
    priority: 0.5,
  },
  {
    slug: 'london-to-miami',
    city: 'Miami',
    title: 'Private Jet London to Miami | Lapid Aviation',
    desc: 'Private jet charter from London to Miami non-stop. Block time both directions, ultra-long-range aircraft, fuel stops and what drives the cost.',
    intent: 'private jet London to Miami · transactional',
    image: 'cabin',
    eyebrow: 'Transatlantic route',
    standfirst:
      'Nearly four thousand nautical miles, and the longest sector we are regularly asked for. Westbound against the jet stream it is a genuine test of an aircraft’s range: the question is not whether you can get there, but whether you can get there without stopping.',
    distanceNm: 3823,
    blockTime: '9 hours – 9 hours 45 minutes westbound, around an hour less coming back',
    nearest: 'Farnborough, at 3,823nm',
    departures: ['Farnborough', 'Luton', 'Stansted'],
    arrival:
      'Opa-locka (OPF) takes most private traffic and is closest to Miami Beach. Fort Lauderdale Executive and Miami International are alternatives, the last of them rarely worth it.',
    categories: ['Ultra-long-range jets'],
    aircraftNote:
      'Ultra-long-range, and not every aircraft in that category with a full cabin and full luggage against winter headwinds. A heavy jet will need a stop — Bangor, Gander or the Azores — and anyone quoting you one non-stop westbound in January should be asked to show the flight plan.',
    uses: [
      {
        title: 'Winter escapes',
        body: 'January and February, which is also when the headwinds are worst and the range question is sharpest.',
      },
      {
        title: 'Families crossing together',
        body: 'Nine hours in a cabin you can sleep in, with no connection and one set of luggage.',
      },
      {
        title: 'Onward to the Caribbean',
        body: 'Miami as the connection point for the islands, with the second sector planned as part of the same journey.',
      },
      {
        title: 'Business',
        body: 'Latin American and Caribbean operations run through Miami, and the time zone makes a same-week return workable.',
        link: 'business',
      },
    ],
    faqs: [
      {
        q: 'Will I need a fuel stop?',
        a: 'On a true ultra-long-range aircraft, usually not. On anything smaller, or on a winter westbound leg with a full load, probably. We tell you which before you book and put it in writing, because discovering it over Newfoundland is not the same conversation.',
      },
      {
        q: 'Why is the return so much quicker?',
        a: 'The jet stream runs west to east, so it fights you going out and carries you coming home. An hour of difference is routine on this sector and it also means the eastbound leg is far less likely to need a stop.',
      },
      {
        q: 'Do I clear US customs at Opa-locka?',
        a: 'Yes, at the private terminal rather than in a hall, which normally takes minutes. ESTA or a visa is still required, and we confirm the arrangements for your specific arrival airport before departure.',
      },
    ],
    priority: 0.5,
  },
];

export interface Accreditation {
  name: string;
  audits: 'The operator' | 'The broker';
  body: string;
}

/**
 * What the safety acronyms actually mean.
 *
 * Competitors either name-drop these without explanation (LunaJets leads with
 * ARGUS certification) or gesture at "rigorous safety protocols" with nothing
 * behind it (Starr Luxury Jets, Charter-A). Neither tells a client the one
 * thing that matters: auditing the operator and auditing the broker are
 * different exercises, and a badge in a footer does not say which you got.
 */
export const ACCREDITATIONS: Accreditation[] = [
  {
    name: 'AOC — Air Operator Certificate',
    audits: 'The operator',
    body: 'The licence itself, issued by a civil aviation authority such as the UK CAA or EASA. It is the floor, not a distinction: no legitimate commercial charter happens without one. What is worth checking is that it covers the specific aircraft and the specific kind of flight you are buying.',
  },
  {
    name: 'IS-BAO',
    audits: 'The operator',
    body: 'An international standard for business aircraft operations, registered at three stages of increasing maturity. It looks at how the operator runs its safety management system rather than at any single aircraft.',
  },
  {
    name: 'ARGUS',
    audits: 'The operator',
    body: 'Independent operator ratings — Gold, Gold Plus and Platinum — based on historical safety data, crew experience and, at the higher tiers, an on-site audit. ARGUS also runs a separate registry for brokers, which is a different thing wearing a similar name.',
  },
  {
    name: 'Wyvern Wingman',
    audits: 'The operator',
    body: 'An on-site operator audit, plus a per-trip verification report that checks the actual aircraft and the actual crew assigned to your flight against the standard. The trip-specific part is what makes it useful rather than decorative.',
  },
  {
    name: 'Air Charter Association',
    audits: 'The broker',
    body: 'The UK trade body for charter brokers, whose members sign a code of conduct and are checked for financial standing and insurance. It says something about the company selling you the flight. It says nothing about the aircraft.',
  },
  {
    name: 'ARGUS or Wyvern broker programmes',
    audits: 'The broker',
    body: 'These audit the broker’s own vetting process — whether we actually do what we say we do on this page. Worth distinguishing from the operator ratings above, because a broker can hold one and none of its aircraft hold the other.',
  },
];

/**
 * The pre-flight brief.
 *
 * Wyvern's broker programme sells a per-trip verification report on the actual
 * aircraft and crew assigned to your flight — that trip-specific check, rather
 * than a badge in a footer, is the part clients value. It needs no
 * accreditation to deliver, only the discipline to send it every time and
 * unprompted, so it is a commitment rather than a credential. The vetting page
 * previously listed these as things a client *could* ask for; sending them
 * without being asked is the actual differentiator.
 */
export const TRIP_BRIEF: NumberedItem[] = [
  {
    n: '01',
    name: 'The operator, named',
    body: 'Which company holds the certificate for your flight, the authority that issued it, and the registration of the specific aircraft. Before you pay, not at the aircraft steps.',
  },
  {
    n: '02',
    name: 'Its safety standing',
    body: 'Any independent rating the operator holds, who issued it, and when it was last renewed. If it holds none, we say that too rather than leaving the line blank.',
  },
  {
    n: '03',
    name: 'The crew on your flight',
    body: 'Total hours and hours on this aircraft type for the crew actually assigned, not a company average.',
  },
  {
    n: '04',
    name: 'Insurance in force',
    body: 'The liability cover carried for this aircraft and this flight, confirmed rather than assumed.',
  },
  {
    n: '05',
    name: 'What we turned down',
    body: 'Where we rejected a cheaper option on safety or suitability grounds, you get told which and why. A quote you cannot see the alternatives to is not really a choice.',
  },
];

/** The uncomfortable questions. Published because most brokers will not answer them. */
export const BROKER_QUESTIONS: NamedItem[] = [
  {
    name: 'Are you a broker or an operator, and do you own this aircraft?',
    body: 'A broker with its own fleet has a reason to put you on it. Ask outright, because the answer changes how you should read every recommendation that follows.',
  },
  {
    name: 'How are you paid on this flight?',
    body: 'Commission from the operator, a margin on the price, or a fee from me? All three are legitimate. Only one of them is usually disclosed without being asked.',
  },
  {
    name: 'Which operator is flying it, under which licence, and what is its safety rating?',
    body: 'You are entitled to the operator’s name before you pay, not at the point of boarding. A broker who will not name it is telling you something.',
  },
  {
    name: 'What is not in this price?',
    body: 'De-icing, waiting time, overnight crew, catering beyond standard, changes after signature. Get the exclusions in writing while you still have alternatives.',
  },
  {
    name: 'Where is my money held until the flight?',
    body: 'Charter is paid up front. Ask whether funds sit in a client account or in general working capital, and what happens to them if the operator or the broker fails.',
  },
];
