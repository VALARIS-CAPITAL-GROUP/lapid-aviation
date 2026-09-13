import type { Faq } from '~/data/content';
import { SITE } from '~/data/site';

/** FAQPage JSON-LD for any page that renders a <Faq /> block. */
export function faqSchema(items: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

/** BreadcrumbList JSON-LD. Pass the trail excluding the current page's own name. */
export function breadcrumbSchema(trail: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: new URL(item.url, SITE.url).href,
    })),
  };
}

/**
 * Service JSON-LD for the charter service pages. Deliberately omits `offers`
 * and any price — the design's cost page is explicit that there is no rate
 * card, and inventing price data would be both wrong and a rich-result risk.
 */
export function serviceSchema(opts: { name: string; description: string; serviceType: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    provider: { '@id': `${SITE.url}/#organization` },
    areaServed: { '@type': 'City', name: 'London' },
  };
}
