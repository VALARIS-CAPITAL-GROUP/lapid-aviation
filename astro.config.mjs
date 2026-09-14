// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.lapidaviation.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      // Pages marked `noindex` are excluded, so the sitemap and the robots
      // meta tag never disagree. These are the four location pages whose
      // facts are still unverified, plus the two legal pages awaiting review
      // — exactly the set the design's reference sitemap left out.
      lastmod: new Date(),
      filter: (page) =>
        ![
          '/404/',
          '/airports/',
          '/airports/farnborough-airport/',
          '/london/',
          '/london/mayfair-private-jet-charter/',
          '/terms/',
          '/privacy/',
        ].includes(new URL(page).pathname),
      // Mirrors the priorities in the hand-written reference sitemap.
      serialize(item) {
        const path = new URL(item.url).pathname;
        const priority = /** @type {Record<string, number>} */ ({
          '/': 1.0,
          '/private-jets/': 0.9,
          '/helicopter-charter/': 0.9,
          '/business-aviation/': 0.9,
          '/private-jets/cost/': 0.8,
          '/request-charter/': 0.8,
          '/empty-leg-flights/': 0.7,
          '/first-time-private-flyers/': 0.7,
          '/aircraft/': 0.7,
          // Routes: the hub ranks above the individual sectors, and the
          // sectors carry the priority recorded alongside their data.
          '/routes/': 0.8,
          '/routes/london-to-paris/': 0.7,
          '/routes/london-to-geneva/': 0.7,
          '/routes/london-to-nice/': 0.7,
          '/routes/london-to-ibiza/': 0.6,
          '/routes/london-to-zurich/': 0.6,
          '/routes/london-to-dubai/': 0.6,
          '/routes/london-to-new-york/': 0.6,
          '/routes/london-to-courchevel/': 0.7,
          '/routes/london-to-amsterdam/': 0.6,
          '/routes/london-to-milan/': 0.6,
          '/routes/london-to-palma/': 0.6,
          '/routes/london-to-malaga/': 0.6,
          '/routes/london-to-mykonos/': 0.6,
          '/routes/london-to-marrakech/': 0.5,
          '/routes/london-to-miami/': 0.5,
          '/transfers/': 0.6,
          '/resorts/': 0.6,
          '/how-we-vet-operators/': 0.6,
          '/about/': 0.5,
          '/contact/': 0.5,
          '/terms/': 0.2,
          '/privacy/': 0.2,
        })[path];
        return { ...item, priority: priority ?? 0.5 };
      },
    }),
  ],
  // Cast: @tailwindcss/vite and Astro resolve slightly different Vite type
  // versions, which is a type-only conflict — the plugin works as-is.
  vite: { plugins: [/** @type {any} */ (tailwindcss())] },
});
