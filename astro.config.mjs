// @ts-check
import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro';
import { loadEnv } from 'vite';
import { readFileSync, existsSync } from 'node:fs';

// Charge les variables d'env (.env) au build — le token n'est jamais en dur dans le code.
const env = loadEnv(process.env.NODE_ENV ?? '', process.cwd(), 'STORYBLOK');

// HTTPS local en DEV uniquement (aperçu live de l'éditeur Storyblok).
// Certificat mkcert local dans certs/ (gitignoré). Générer une fois via :
//   mkcert -cert-file certs/localhost.pem -key-file certs/localhost-key.pem localhost 127.0.0.1 ::1
// Si les certs sont absents → repli HTTP, sans casser. La prod (build Vercel) n'est pas concernée.
const isDev = process.env.NODE_ENV !== 'production';
const KEY = 'certs/localhost-key.pem';
const CRT = 'certs/localhost.pem';
const httpsDev =
	isDev && existsSync(KEY) && existsSync(CRT)
		? { key: readFileSync(KEY), cert: readFileSync(CRT) }
		: undefined;

// https://astro.build/config
export default defineConfig({
	integrations: [
		storyblok({
			accessToken: env.STORYBLOK_TOKEN,
			apiOptions: {
				// Espace hébergé en région UE (RGPD) — voir PROJECT_BRIEF §3.
				region: 'eu',
			},
			// Mapping nom de composant Storyblok → composant Astro (chemin relatif à src/).
			components: {
				salon: 'storyblok/Salon',
			},
		}),
	],
	vite: {
		server: httpsDev ? { https: httpsDev } : {},
	},
});
