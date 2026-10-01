# FORMATION_BRIEF — Academy Leader sous `/formation/`

> Brief de référence **v2 (28/09/2026)** pour intégrer le site Academy Leader dans le repo `edm-site`.
> Sources : maquette (`formation-src/maquette.html`, décompressée dans `formation-src/unpacked/`) + dossier de passation du 28/09.
> Conventions de travail : `PROJECT_BRIEF.md` §10 et `CLAUDE.md`. Statuts : ✅ acté · 🟡 recommandation, à valider · ❓ info manquante.

---

## 1. Architecture ✅
- **Même repo, même build, même projet Vercel.** Pages dans `src/pages/formation/`, données dans `src/data/formation/`, composants dans `src/components/formation/`, images dans `src/assets/formation/`.
- Convention héritée : données `.ts` (contenu) → composant Astro (design) → page (SEO).
- Astro statique, **0 React** : le runtime de la maquette (React UMD) est abandonné. Seuls le quiz, le simulateur et le menu mobile ont du JS vanilla, en îlots.
- Mis en commun avec le site des salons : `Layout.astro` (head, canonical, OG, Consent Mode v2, GTM), `ConsentBanner`, `schema.ts`, sitemap, `vercel.json`.
- **Spécifique à la formation :** header, footer, menu mobile, tokens de couleur et typographie.
- `Layout.astro` doit recevoir une prop `variant="formation"` pour **ne pas** injecter `BookingModal` (Planity) ni les éléments propres aux salons.

## 2. Identité visuelle ✅
**Charte de la maquette conservée** (sombre, cuivre, Instrument Sans), limitée à `/formation/`.
- Cible B2B (gérants) ≠ cible salons (clientes, femme premium) → deux marques distinctes, une seule base de code.
- Mise en œuvre : fichier `src/styles/formation.css` qui redéfinit les tokens sous `.formation` (`--bg`, `--ink`, `--accent`…). Aucune modification de `system.css`.
- Instrument Sans auto-hébergée (`@fontsource-variable/instrument-sans` ou les `.woff2` de la maquette), `preload` latin.
- Tokens : ceux du §5 du dossier de passation (fond `#0F0C0A`, crème `#F5F1E8`, cuivre `#C2874A`, survol `#DCA366`, cuivre sur clair `#8A5A2B`, vert `#8CA377`).
- À concevoir (absent de la maquette) : **menu burger** sous 880 px, états de survol des CTA et des cartes.

## 3. Arborescence
| Page | URL | Index | Statut |
|---|---|---|---|
| Accueil | `/formation/` | oui | maquette ✅ |
| Ouvrir un salon | `/formation/ouvrir-un-salon-de-coiffure` | oui | maquette ✅ |
| Salon Autonome | `/formation/accompagnement-salon-de-coiffure` | oui | maquette ✅ |
| Formations (catalogue + simulateur) | `/formation/formations-coiffure` | oui | maquette ✅ |
| Diagnostic | `/formation/diagnostic` | noindex | logique à écrire |
| Réserver | `/formation/reserver` | noindex | embed GHL |
| Merci | `/formation/merci` | noindex | maquette ✅ |
| Mentions légales / CGV / Confidentialité | `/formation/mentions-legales` · `/formation/cgv` · `/formation/confidentialite` | noindex | ❓ textes |
| Infos Qualiopi (accès, délais, handicap, indicateurs) | `/formation/informations-qualiopi` 🟡 | oui | ❓ textes |
| **Phase 2** — 9 fiches formation | `/formation/formations-coiffure/{slug}` | oui | après lancement |
| **Phase 2** — Équipe | `/formation/equipe/{prenom-nom}` | oui | ⚠️ pas `/equipe/*` (déjà redirigé vers les salons) |
| **Phase 2** — Blog | `/formation/blog/...` (collection séparée) | oui | plus tard |

URLs sans slash final, comme le site actuel. Seule exception : l'index `/formation/`, avec 301 depuis `/formation` (à vérifier au build).

## 4. Tunnel & GoHighLevel 🟡
Parcours : page offre → **diagnostic** (9 questions) → coordonnées (prénom, email, tél) → **résultat** → **RDV** → merci.
- **Diagnostic** : quiz maison en Astro/JS (design maquette). À la fin, il envoie réponses + coordonnées + UTM + segment calculé à GHL.
  - 🟡 Option A (recommandée) : **Inbound Webhook GHL**, qui crée ou met à jour le contact, remplit les champs personnalisés et lance le workflow. Rien à héberger.
  - Option B : fonction Vercel qui appelle l'API GHL (clé côté serveur). Plus robuste, mais ajoute du backend.
- **Réserver** : **widget calendrier GHL embarqué** (remplace le faux calendrier), prérempli avec prénom et email. Redirection GHL après réservation → `/formation/merci?…`.
- **Merci** : prénom et créneau lus dans l'URL de redirection GHL (plus de « Camille » en dur).
- Rappels email/SMS : dans les workflows GHL (hors site).

## 5. Tracking ✅ (voir D5)
- **Conteneur GTM dédié Academy Leader** (❓ ID à créer), GA4 dédiée, pixels Meta / Google Ads d'Academy Leader uniquement. `GTM-MHHC3VXC` (salons) ne se charge **pas** sur `/formation`.
- Événements dataLayer : `diag_start`, `diag_step` (n), `diag_complete` (segment), `lead_submit` (form=diagnostic), `rdv_pose`, `rdv_confirme`, `pdf_download`, `simu_use`.
- UTM : captés à l'arrivée (sessionStorage), envoyés à GHL avec le diagnostic.
- Pixels Meta / Google Ads : ❓ IDs, dans GTM derrière le consentement (bandeau existant).

## 6. SEO / GEO ✅
- Title, meta, H1 : ceux du dossier de passation, page par page.
- JSON-LD : `EducationalOrganization` (EDXP Formation, marque Academy Leader) + `Person ×3` + `FAQPage` sur l'accueil ; `Service` + `FAQPage` sur les pages offre (`Offer` + `priceSpecification.minPrice 7000` sur Salon Autonome) ; `ItemList` + `Course ×9` sur Formations. `HowTo` : utile pour les IA, mais Google ne l'affiche plus depuis 2023 → optionnel.
- Le paragraphe « Academy Leader, c'est quoi ? » est reproduit à l'identique dans `description` du JSON-LD.
- FAQ dans le HTML initial (`<details>`), jamais injectée en JS.
- Pas de cannibalisation des requêtes salons : mots-clés formation strictement B2B.

## 7. Redirections
- `vercel.json` : `/formation-consultation-expert` → **`/formation/`** (au lieu de `/`).
- `academy.ericdimartino.fr` (GHL, DNS IONOS) : 🟡 **au lancement**, faire pointer le sous-domaine vers Vercel et gérer les 301 dans `vercel.json` (règles `has: host`). Toutes les redirections restent au même endroit.
  - ⚠️ Avant ça, vérifier que **aucune campagne ads / lien actif** ne dépend encore des pages GHL.
  - ❓ Exporter la liste complète des URLs depuis l'admin GHL.

## 8. Juridique ❓ (bloquant pour la mise en ligne)
Connu : EDXP Formation SAS au capital de 1 000 €, RCS Grenoble 931 295 208, NDA 84 38 10226 38, Qualiopi 25FOR01783.1 (QUALITIA), 1435 av. de l'Europe 38330 Montbonnot-Saint-Martin, 07 81 73 40 18, référent handicap Lucie Shobbrook.
Manque : TVA intracom, directeur de publication, email de contact, CGV (paiement, rétractation, **garantie de remboursement**), politique de confidentialité, règlement intérieur, informations Qualiopi.
Hébergeur à mentionner : Vercel Inc. (adresse à vérifier au moment de la rédaction).

## 9. Corrections de contenu à appliquer
1. **Grenoble = place Victor Hugo** partout (le dossier de passation écrit « place Grenette » : faux).
2. Diagnostic : **9 questions** (maquette) ; le dossier dit 8 par endroits → harmoniser.
3. Guide PDF « 8 étapes » vs méthode « 7 étapes » → harmoniser.
4. « ★ 4,9 » et « 50+ » : **masqués** tant que la source n'est pas fournie.
5. Étude de cas Grenoble : « 180 m² » vs « 200 m² » → clarifier (avant/après ?).
6. Coquilles : « Des parcours pour pour », doubles espaces.
7. « Nous garantissons le succès » / « un choix 100 % garanti » / « remboursement au moindre doute » : **wording aligné sur les CGV**, validé juridiquement.
8. Logos Schwarzkopf, Mizutani, ghd, Planity : seulement avec l'accord des marques. Partenariat financier Schwarzkopf éventuel = à divulguer.
9. Aucun témoignage tant qu'il n'y a pas de cas réels (section retirée).

## 10. Décisions (validées le 28/09/2026)
| # | Sujet | Décision |
|---|---|---|
| D1 | Charte | ✅ Charte de la maquette (sombre, cuivre, Instrument Sans), limitée à `/formation` |
| D2 | Contenu & design | ✅ **Maquette mot à mot, design à l'identique.** Ordre de priorité des sources : **maquette** (`formation-src/maquette.html`) > code livré (`formation-src/code/`) > dossier de passation |
| D3 | Règles du diagnostic (réponses → offre / prix / disqualification) | ⏸️ Reporté : à finaliser plus tard. Écrans en place, logique de routage en attente |
| D4 | Envoi vers GHL (webhook ou fonction Vercel) | ⏸️ Reporté |
| D5 | Tracking | ✅ **Conteneur GTM séparé** pour Academy Leader + propriété GA4 dédiée + clé de consentement propre (`al_consent`). `Layout.astro` : `gtmId` passé selon la variante |
| D6 | `academy.ericdimartino.fr` | ✅ Redirigé vers `/formation/` au lancement ; le site GHL ne sera plus utilisé en l'état |
| D7 | Lien depuis le site salons | ✅ Footer + page Nous rejoindre |
| D8 | Périmètre V1 | ✅ Tout le contenu de la maquette + pages obligatoires (mentions légales, CGV, confidentialité, infos Qualiopi) |

**Note sur §9 :** les corrections restent **signalées**, pas appliquées d'office (D2 = mot à mot). Seules exceptions, faites après validation : fautes de frappe évidentes, et éléments sans source (★ 4,9, 50+), masqués.

## 11. À récupérer
- ✅ Code livré reçu : `formation-src/code/` (9 questions dans `quiz.json`, 9 formations dans `forms.json`).
- Photos (hero accueil, chantier Grenoble, 3 portraits), vidéo Merci, logo SVG, favicon, image OG 1200×630.
- Accès GHL : URL du calendrier, webhook, champs personnalisés.
