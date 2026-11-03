import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://apexconcreteleveling.com',
  trailingSlash: 'always',
  output: 'static',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you/') && !page.includes('/404'),
      serialize(item) {
        if (item.url === 'https://apexconcreteleveling.com/') {
          item.changefreq = 'weekly';
          item.priority = 1.0;
        } else if (
          item.url.includes('/polyurethane-foam-lifting/') ||
          item.url.endsWith('/concrete-leveling/')
        ) {
          item.changefreq = 'monthly';
          item.priority = 0.9;
        } else if (
          item.url.includes('/concrete-leveling/') ||
          item.url.includes('/concrete-leveling-cost/') ||
          item.url.endsWith('/service-areas/') ||
          item.url.includes('/contact/')
        ) {
          item.changefreq = 'monthly';
          item.priority = 0.8;
        } else if (
          item.url.includes('/service-areas/') ||
          item.url.includes('/guides/') ||
          item.url.includes('/before-and-after/')
        ) {
          item.changefreq = 'monthly';
          item.priority = 0.7;
        } else if (item.url.includes('/about/')) {
          item.changefreq = 'monthly';
          item.priority = 0.6;
        } else if (item.url.includes('/privacy/')) {
          item.changefreq = 'yearly';
          item.priority = 0.3;
        }
        item.lastmod = new Date('2026-11-03');
        return item;
      },
    }),
  ],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
});
