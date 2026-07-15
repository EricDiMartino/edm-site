// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Site statique : contenu en dur (src/data/) + blog en Content Collection (src/content/blog).
export default defineConfig({
  // Domaine canonique (www) — sert aux URLs canoniques, OG et au schema. Voir PROJECT_BRIEF §4.
  site: 'https://www.ericdimartino.com',
  integrations: [
    sitemap({
      // exclut les pages utilitaires/non indexables
      filter: (page) => !['/styleguide', '/reserver-widget', '/consultation-offerte', '/calculette-en-ligne'].some((p) => page.includes(p)),
    }),
  ],
});
