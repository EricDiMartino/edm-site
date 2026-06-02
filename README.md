# edm-site

Refonte du site des salons de coiffure **Eric Di Martino** (Montbonnot, Grenoble, Voiron, Aix-les-Bains).

> **Source de vérité : [`PROJECT_BRIEF.md`](PROJECT_BRIEF.md)** — à lire au démarrage de toute session.

## Stack
- **Astro** — rendu statique, ~0 JS par défaut (83 % du trafic est mobile)
- **Storyblok** — CMS headless à édition visuelle (palier gratuit, 1 siège — voir §3 du brief)
- **Vercel** — hébergement + preview deploys par branche, prod protégée

## État
- **Phase 2 en cours** — Fondations : init repo → scaffold Astro → connexion Storyblok → déploiement test.
- Le site Webflow actuel reste **intact** jusqu'à la bascule (Phase 6).

## Conventions de travail
Voir **§10 du brief** : une étape à la fois, diff validé avant chaque commit, aucun push/déploiement sans accord explicite.
