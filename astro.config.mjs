// @ts-check
import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro';
import { loadEnv } from 'vite';

// Charge les variables d'env (.env) au build — le token n'est jamais en dur dans le code.
const env = loadEnv(process.env.NODE_ENV ?? '', process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
	integrations: [
		storyblok({
			accessToken: env.STORYBLOK_TOKEN,
			apiOptions: {
				// Espace hébergé en région UE (RGPD) — voir PROJECT_BRIEF §3.
				region: 'eu',
			},
			// Les composants Storyblok seront mappés ici au fur et à mesure (Phase 3+).
			components: {},
		}),
	],
});
