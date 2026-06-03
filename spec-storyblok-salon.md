# Spec Storyblok — content-type `salon`

> Dérivé du wireframe page Salon validé. Sert de spec à Claude Code pour écrire
> `storyblok/components/salon.json` puis le pousser (gated). Modèle générique :
> un seul gabarit, blocs optionnels activables par salon, sections optionnelles
> masquées si vides.

## Type
- `salon` = **content-type** (root, `is_root: true`, `is_nestable: false`).
- Une story `salon` par implantation : Grenoble, Montbonnot, Voiron, Aix-les-Bains.

## Champs (dans l'ordre du wireframe)

### 1. Hero — 🟢 commun
| Champ | Type | Notes éditeur |
|---|---|---|
| `nom` | text | Nom du salon (ex. « Eric Di Martino — Grenoble ») |
| `ville` | text | Ville seule (sert au schema + libellés) |
| `accroche` | text | Phrase courte d'accroche |
| `hero_image` | asset (images) | Photo principale |
| `hero_galerie` | multiasset (images) | Optionnel — galerie intégrée au hero (évite une section dédiée) |
| `lien_reservation` | text/link | URL de réservation du salon |

### 2. Infos pratiques (NAP) — 🟢 commun — *nourrit SEO local + schema*
| Champ | Type | Notes |
|---|---|---|
| `adresse` | text | Rue + numéro |
| `code_postal` | text | |
| `telephone` | text | |
| `horaires` | blocks (répétable `horaire_jour`) | 1 entrée par jour : `jour` (option), `ouverture`, `fermeture`, `ferme` (bool) |
| `geo_lat` | number | Latitude (pour le schema/map) |
| `geo_lng` | number | Longitude |
| `lien_maps` | text/link | Lien Google Maps |

### 3. Expertise visagiste / consultation — 🟢 commun — *différenciateur, option A (vitrine + lien)*
| Champ | Type | Notes |
|---|---|---|
| `expertise_titre` | text | |
| `expertise_texte` | richtext | Court — valorise, ne duplique pas la page dédiée |
| `expertise_image` | asset (images) | |
| `expertise_lien` | text/link | → /consultation-visagiste-coloriste |

### 4. Intro locale unique — 🟢 commun — *corrige le « générique »*
| Champ | Type | Notes |
|---|---|---|
| `intro_locale` | richtext | **Unique par salon**, ancrage quartier/ville. Jamais dupliqué |

### 5. Service phare — 🔵 optionnel, **répétable** — *bande éditoriale*
| Champ | Type | Notes |
|---|---|---|
| `services_phares` | blocks (répétable `service_phare`) | Vide = section masquée |

Bloc `service_phare` (nestable) :
| Champ | Type | Notes |
|---|---|---|
| `titre` | text | ex. « Head spa », « Barber », « Esthétique » |
| `texte` | text | 1-2 lignes qui donnent envie |
| `image` | asset (images) | Grande photo signature |
| `lien` | text/link | → page dédiée du service (ex. /head-spa-grenoble) |

### 6. Équipe du salon — 🟢 commun — *AUTO, pas de champ de saisie*
- Pas de champ ici. L'affichage est **calculé** : on liste les `membre_equipe` dont la relation `salon` pointe vers cette story. (Logique au rendu, côté Astro.)
- Optionnel : `equipe_titre` (text) pour personnaliser le titre de section.

### 7. Avis — 🔵 optionnel
| Champ | Type | Notes |
|---|---|---|
| `avis_actif` | boolean | Affiche/masque la section |
| `avis_source` | option (google / trustpilot) | Branché sur les vrais avis — jamais saisis à la main |
- *(L'intégration technique des avis se câblera en Phase 4/5 ; ici on prévoit juste l'activation.)*

### 8. Contenu local SEO + FAQ — 🟢 commun — *carburant GEO*
| Champ | Type | Notes |
|---|---|---|
| `contenu_local` | richtext | Texte SEO local complémentaire (optionnel) |
| `faq` | blocks (répétable `faq_item`) | Prestations absorbées ici **si utile**, avec liens |

Bloc `faq_item` (nestable) :
| Champ | Type | Notes |
|---|---|---|
| `question` | text | |
| `reponse` | richtext | Peut contenir un lien vers page Femme/Homme/service |

### 9. CTA final — 🟢 commun
| Champ | Type | Notes |
|---|---|---|
| `cta_titre` | text | Optionnel (sinon valeur par défaut) |
- Réutilise `lien_reservation` + `telephone` déjà saisis. Pas de re-saisie.

### 10. SEO — 🟢 commun — *bloc déjà créé*
| Champ | Type | Notes |
|---|---|---|
| `seo` | bloc (le composant `seo` existant) | title / meta_description / og_image, propres au salon |

## Règles transverses
- **Sections optionnelles masquées si vides** (logique au rendu, côté Astro) → longueur auto-régulée.
- **NAP saisie une seule fois** → alimente section 2, schema `HairSalon`, et le CTA.
- **Aucune re-saisie de prestations** : le détail vit sur les pages Femme/Homme + l'outil de réservation ; le salon ne fait que pointer (liens en FAQ / service phare).
- Champs `display_name` et `description` en français, pensés pour Eric (libellés clairs, aides de longueur sur les champs SEO comme le bloc `seo`).
- Push **gated** : diff montré + accord explicite avant `push salon --confirm`.

## Blocs nestables à créer (réutilisables)
- `service_phare`
- `faq_item`
- `horaire_jour`
- (`seo` existe déjà)
