// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Site statique simple : contenu en dur (src/data/), images via astro:assets.
// (Storyblok retiré — voir historique ; plus d'intégration ni de HTTPS dev requis.)
export default defineConfig({
  // Domaine canonique (www) — sert aux URLs canoniques, OG et au schema. Voir PROJECT_BRIEF §4.
  site: 'https://www.ericdimartino.com',
});
