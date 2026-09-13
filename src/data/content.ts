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

