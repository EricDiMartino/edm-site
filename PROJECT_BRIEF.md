# PROJECT_BRIEF — Refonte ericdimartino.com

> Source de vérité du projet. Consolide la Phase 0 (audit) et la Phase 1 (architecture).
> À lire au démarrage de toute session Claude Code sur ce repo.

## 1. Projet & périmètre
Refonte complète du site des salons de coiffure haut de gamme **Eric Di Martino** (4 salons : Montbonnot, Grenoble — flagship place Victor Hugo —, Voiron, Aix-les-Bains).
**Hors périmètre :** Academy Leader (formation). Ne pas mélanger les contenus.
On repart de zéro côté code, mais on **conserve 100 % du contenu** et **tout le capital SEO**.

## 2. Objectif central
Devenir **n°1 en local** sur les requêtes coiffure / head spa des zones desservies, via :
- **SEO local** (positions Google + pack local + Google Business Profile)
- **GEO** (être la réponse citée par ChatGPT, Perplexity, AI Overviews)

## 3. Stack (validée)
- **Astro** (perf max, ~0 JS par défaut — 83 % du trafic est mobile)
- **Storyblok** (CMS headless à édition visuelle — le plus simple pour un éditeur non-technicien ; limites du palier gratuit à confirmer en live au setup)
- **Vercel** (hébergement + preview deploys par branche, prod protégée)
- **Repo :** `github.com/EricDiMartino/edm-site` (dossier local `edm-site`)

## 4. Arborescence cible & conventions d'URL
Domaine canonique = **www**. `ericdimartino.com` (sans www) → 301 → `https://www.ericdimartino.com`. Toutes canoniques en www.

**Conservées à l'identique :**
`/` · `/nos-salons-de-coiffure` · `/salon-de-coiffure/{grenoble|montbonnot|voiron|aix-les-bains}` · `/salon-esthetique` · `/head-spa-grenoble` · `/coiffeur-mariage` · `/extension-cheveux-grenoble` · `/coaching-coiffure` · `/consultation-visagiste-coloriste` · `/nos-valeurs` · `/contact` · `/contact-recrutement` · `/nous-rejoindre`

**Prestations (split) :** hub `/prestations-coiffure` + `/prestations-coiffure/femme` + `/prestations-coiffure/homme`. Enfant = **section** sur la page femme (pas de page dédiée).

**Collections :**
- Équipe : `/nos-coiffeurs` (hub) + `/equipe/{slug}` (~19 fiches)
- Actualités : `/actualites` (hub) + `/actualites/{slug}` (11+ articles)

**Zones Isère (13) :** `/salon-de-coiffures-isere/{ville}` — redirections vers le salon le plus proche, **conservées**. Arbitrage zone par zone plus tard (data fine).

**Réservation :** tunnels fonctionnels conservés + **`noindex`** (pages transactionnelles).

**Academy Leader :** bouton de nav (lien externe) → `https://academy.ericdimartino.fr/coiffure`.

## 5. Plan de redirections 301
**P1 — Critique : fusion du site fantôme `/site-edm/*`** (ancien site encore en ligne, indexé, qui cannibalise les pages propres et concentre des backlinks externes) :
- `/site-edm/coiffeur-montbonnot` → `/salon-de-coiffure/montbonnot` (~3 468 clics/an)
- `/site-edm/coiffeur-grenoble` → `/salon-de-coiffure/grenoble` (~1 945 clics/an)
- `/site-edm/coiffeur-voiron` → `/salon-de-coiffure/voiron` *(à confirmer)*
- `/site-edm/coiffeur-aix-les-bains` → `/salon-de-coiffure/aix-les-bains` *(à confirmer)*
- `/site-edm/prestations` → `/prestations-coiffure`
- `/site-edm/reservation-montbonnot-esthetique` → `/reservation-salon-esthetique`
- **Catch-all `/site-edm/*`** → équivalent canonique, sinon `/`

**P2 — Nettoyage :**
- `/actualite-coiffure` → `/actualites`
- `/bis---nos-salons-de-coiffure` → `/nos-salons-de-coiffure`
- `/reservation-salon-montbonnot-copy` → `/reservation-salon-montbonnot`
- `/test` (ancien e-shop, retiré) → `/`
- `/formation-consultation-expert` → `https://academy.ericdimartino.fr/coiffure`

**P3 — Fiches équipe orphelines** (ex-collaborateurs encore indexés : loredana, zoe-grenoble, william, yelena, max, eva-aix…) → `/nos-coiffeurs`. Règle pérenne : départ = 301 vers le hub équipe, jamais de 404.

**Règle absolue :** aucune ancienne URL ne tombe en 404. Vérification exhaustive au crawl (Screaming Frog) en Phase 6 avant bascule.

## 6. Modèle de contenu (CMS)
Tout texte/photo éditable vit dans le CMS. **Chaque page/entrée embarque ses propres champs SEO** (`title`, `meta description`, image OG) éditables → élimine les titres dupliqués constatés en audit.

**Collections :**
- **Salons (4)** — nom, slug, NAP (adresse/CP/ville/tél), horaires structurés jour/jour, geo lat-lng, photos, **intro locale unique**, offre spéciale optionnelle (ex. « lundi pour elles » Montbonnot), lien réservation, services dispo, champs SEO. *Pièce maîtresse : NAP & horaires à un seul endroit, alimentent pages salon + blocs « disponible dans nos salons » + schema.*
- **Équipe (~19)** — prénom, slug, **salon (relation)**, spécialité, citation, photo, bio, SEO.
- **Actualités (11+)** — titre, slug, **catégorie** (Conseils soin / Territoire Isère / Coulisses & équipe / Focus prestations), date, image, extrait, contenu, **FAQ optionnelle**, prestations liées (maillage).

**Singletons composables** (hero + sections réutilisables) : Accueil, hub Prestations, Prestations Femme, Prestations Homme, Head spa, Mariage, Extensions, Coaching, Consultation, Esthétique, Valeurs, Contact, Nous rejoindre.

## 7. Données structurées (SEO local + GEO)
- Sitewide : `Organization` + `BreadcrumbList` (`sameAs` = réseaux sociaux)
- Pages salon : `HairSalon` (NAP, `openingHours`, `geo`, `telephone`, `priceRange`, `image`, `areaServed`, `aggregateRating` **branché sur les vrais avis** Google/Trustpilot — jamais codé en dur)
- Pages service : `Service` (`provider` → 4 `HairSalon`, **`areaServed` = 4 villes + communes Isère**). `areaServed` ≠ page par ville : le local passe par la donnée + le maillage, pas par la multiplication d'URLs.
- Articles : `Article` + **`FAQPage`** (carburant GEO)
- Fiches équipe : `Person` (`worksFor` → salon)

## 8. Mesure
- **Search Console** : positions, indexation, 404, Core Web Vitals (mobile prioritaire), soumission nouveau sitemap.
- **GA4** via GTM existant (`GTM-PC7R3SCF`). KPI = **réservations** (events : clics `tel:`, pages réservation, soumissions formulaire).
- **Microsoft Clarity** : heatmaps clic/scroll/zones + replays. **Après consentement** (RGPD/CNIL) → derrière le bandeau cookies.
- **Baseline (avant bascule) :** ~24 000 clics/an, 83 % mobile, trafic très brandé.

## 9. Priorités business
- **Grenoble = priorité n°1** : « coiffeur grenoble » ≈ 46 800 impressions/an très mal captées + page mince + cannibalisée par `/site-edm/`. La fusion 301 doit débloquer ce gisement.
- **Voiron & Aix** : déjà forts (pos ~3,7-4), pousser vers #1-2.
- **Montbonnot** : déjà #1 (via le fantôme), sécuriser dans la fusion.
- **Femme = ~80 % du CA et du trafic → communication 100 % femme, premium.**
- **Barber** : capteur discret uniquement (ligne « barbier sur RDV » sur page Aix + `areaServed`). Jamais en hero, jamais en nav. Ne pas cannibaliser la com femme.
- **Extensions** : ré-optimiser Grenoble **+ Voiron**.
- **Mariage** (faible) et **Head spa** (neuf) : à construire.
- Contenu formation / B2B (« ouvrir un salon ») = hors périmètre → Academy Leader.

## 10. Conventions de travail (règles fermes)
- Une phase / une étape à la fois. Présenter le résultat, attendre validation explicite avant de continuer.
- **Diff montré et validé avant CHAQUE commit.** Aucun push ni déploiement sans accord explicite.
- Le site Webflow actuel reste **intact** jusqu'à la bascule (Phase 6).
- Sur le code : guider l'utilisateur pas à pas (débutant). Sur stratégie/contenu/business : le traiter en expert, le challenger.
- Ton : direct, précis, zéro remplissage. **Ne jamais inventer** ; signaler toute incertitude.

## 11. Phases restantes
- **Phase 2 (en cours)** — Fondations : init repo `edm-site` + scaffold Astro + connexion Storyblok + pipeline Vercel (preview deploys, prod protégée). Ordre : confirmer Storyblok (palier gratuit) → init repo → scaffold Astro → déploiement test.
- **Phase 3** — Back-office minimaliste (Storyblok), testé du point de vue d'un non-technicien.
- **Phase 4** — Migration + optimisation du contenu, page par page (SEO local + GEO), validée page par page.
- **Phase 5** — SEO/GEO technique : schema complet, `sitemap.xml`, `robots.txt`, canoniques (www), Open Graph, perf (images, chargement), accessibilité.
- **Phase 6** — Pré-lancement & bascule : vérif 301, crawl Screaming Frog (zéro 404), QA, contrôle schema, Search Console, bascule sans coupure de référencement.

---
*Skill `claude-code-agents-web` non installée sur la machine — ses conventions sont reprises en §10. À restaurer si retrouvée, sinon non bloquante.*
