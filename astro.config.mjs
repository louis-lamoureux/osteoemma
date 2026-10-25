// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://osteoemma.ca',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: {
          fr: 'fr-CA',
          en: 'en-CA',
        },
      },
    }),
  ],
  // Pure static output: every page is pre-rendered to plain HTML.
  // Canonicals, hreflang, and internal links have no trailing slash. Keep the sitemap the same.
  output: 'static',
  trailingSlash: 'never',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
