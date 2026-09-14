/**
 * Editorial content ported verbatim from the approved design.
 *
 * Kept as data rather than markup because most of it renders as repeated
 * card and accordion patterns across several pages. Copy changes happen here.
 */

export interface Airport { name: string; note: string }
export interface Category { name: string; use: string; spec: string; more: string }
export interface Route { key?: string; to: string; cat: string; aircraft: string; note: string }
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

export const ROUTES: Route[] = [
  {
    "to": "Paris",
    "cat": "Short European",
    "aircraft": "Light jets",
    "note": "The most requested short-haul route from London, usually flown with return same day."
  },
  {
    "to": "Geneva",
    "cat": "Short European",
    "key": "geneva",
    "aircraft": "Light – midsize jets",
    "note": "Banking meetings and ski connections into the Alps."
  },
  {
    "to": "Nice",
    "cat": "Mediterranean",
    "aircraft": "Light – midsize jets",
    "note": "The gateway to the Côte d'Azur and Monaco, busiest in the summer season."
  },
  {
    "to": "Monaco",
    "cat": "Mediterranean",
    "aircraft": "Light jets + helicopter",
    "note": "Flown into Nice, with a short helicopter transfer on to Monaco itself."
  },
  {
    "to": "Ibiza",
    "cat": "Mediterranean",
    "aircraft": "Midsize jets",
    "note": "Seasonal demand peaks sharply in summer weekends."
  },
  {
    "to": "Zurich",
    "cat": "Short European",
    "aircraft": "Light jets",
    "note": "A regular business route with minimal ground-transfer time to the financial district."
  },
  {
    "to": "Dubai",
    "cat": "Long-haul",
    "aircraft": "Heavy – ultra-long-range",
    "note": "Non-stop, typically flown overnight to arrive in the working day."
  },
  {
    "to": "New York",
    "cat": "Transatlantic",
    "aircraft": "Ultra-long-range",
    "note": "Direct, avoiding the connections and check-in time of scheduled transatlantic travel."
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
