# Audit du code — site ericdimartino.com

> Généré par une revue multi-agents (audit lecture seule). 74 constats. 
Le nettoyage sûr (commentaires trompeurs + CSS mort) a déjà été appliqué — voir commit « Nettoyage sûr post-audit ».

**Total : 74** — 🔴 15 hautes · 🟠 29 moyennes · 🟡 30 basses


## Code mort & inutilisé

### 🟠 src/pages/head-spa-grenoble.astro (343-345)
- **Problème** : Bloc CSS .hs-hero-quote (+ .hs-hero-quote p / cite) défini mais jamais référencé. Le hero (.hs-hero-side) ne rend qu'une liste .hs-meta — aucune citation n'est affichée. Vestige d'une version antérieure du hero.
- **Correctif** : Supprimer les trois règles .hs-hero-quote*. Aucun impact visuel (sélecteur non utilisé).

### 🟡 src/pages/head-spa-grenoble.astro (311)
- **Problème** : Classe .hs-num définie mais jamais utilisée dans le markup (les numéros de section I/II/III du data h.intro.numero/h.deroule.numero/h.tarifs.numero ne sont jamais rendus). Code mort.
- **Correctif** : Supprimer la règle .hs-num. Accessoirement, les champs numero ('I','II','III') dans src/data/head-spa.ts ne sont lus nulle part non plus.

### 🟡 src/pages/head-spa-grenoble.astro (425)
- **Problème** : Classe .hs-shot-cap définie mais jamais référencée. La galerie utilise .hs-shot figcaption (ligne 407), pas .hs-shot-cap. Doublon mort.
- **Correctif** : Supprimer la règle .hs-shot-cap.

### 🟡 src/components/SalonPage.astro (502)
- **Problème** : Règle CSS '.cta-title .ital' jamais déclenchée : le titre CTA est rendu en texte brut ({salon.ctaTitre || '...'} ligne 356), sans span .ital enfant. Sélecteur mort.
- **Correctif** : Supprimer la ligne .cta-title .ital { color: var(--cream); }. Aucun rendu actuel ne dépend de cette règle.

### 🟡 src/styles/system.css (146)
- **Problème** : Règle .js .reveal[data-d="2"].is-in { transition-delay: 0.18s; } définie mais aucun élément n'utilise data-d="2" dans tout le site (seuls data-d="1" sont présents). Branche de motion morte.
- **Correctif** : Soit supprimer la règle data-d="2", soit la conserver comme API documentée du système d'animation (choix éditorial). Sans usage actuel, c'est du code mort.

### 🟡 src/data/head-spa.ts (143-147)
- **Problème** : La meta description SEO mentionne 'Rituels de 45 min à 1h45, dès 65 €' alors que les formules/hero réels affichent 1h15–2h30 et dès 120 €. Incohérence de contenu (pas du code mort à proprement parler, mais texte obsolète laissé en place).
- **Correctif** : Aligner la description SEO sur les durées/prix réels des formules (hero.meta + tarifs.formules).

### 🟡 src/styles/system.css (21)
- **Problème** : Tokens sémantiques --c-success, --c-warning, --c-error définis mais jamais référencés dans le CSS/markup (seul --c-info est utilisé, dans index.astro). Potentiellement API design-system documentée (styleguide.astro les liste).
- **Correctif** : Conserver si c'est volontairement une palette de tokens réservée aux formulaires (documentée dans le styleguide). Sinon retirer les 3 tokens inutilisés. À trancher selon l'intention.


## Cohérence & duplication

### 🔴 src/components/PrestationPage.astro, src/components/SalonPage.astro, src/pages/nos-valeurs.astro, src/pages/head-spa-grenoble.astro, src/pages/consultation-offerte.astro, src/pages/consultation-visagiste-coloriste.astro, src/pages/beaute-du-regard-montbonnot.astro, src/pages/prestations-coiffure.astro, src/pages/actualites/[...slug].astro (PrestationPage 181-191 ; SalonPage 487-496 ; nos-valeurs 211-220)
- **Problème** : L'accordéon FAQ (markup <details><summary>…<span class="X-plus"></span> + CSS du « + » qui se transforme en « − ») est dupliqué quasi à l'identique dans 9 fichiers. Seul le préfixe de classe change (pp-faq / faq / nv-faq …) ; le CSS (summary flex, ::-webkit-details-marker none, .X-plus::before/::after, [open] scaleY(0), .rt max-width 62ch) est copié-collé. Toute évolution du composant FAQ doit être répétée 9 fois et a déjà légèrement divergé.
- **Correctif** : Extraire un composant <Faq items={…} /> (ou au minimum des classes globales .faq/.faq-item/.faq-plus dans system.css) et l'utiliser partout. Supprime ~9 blocs CSS redondants.

### 🟠 src/components/PrestationPage.astro, src/components/SalonPage.astro, src/pages/index.astro, src/pages/nos-valeurs.astro, src/pages/nous-rejoindre.astro, src/pages/consultation-offerte.astro, src/pages/prestations-coiffure.astro, src/pages/beaute-du-regard-montbonnot.astro, src/pages/actualites/[...slug].astro (PrestationPage 194-198 ; SalonPage 499-506 ; index 390-394 ; nos-valeurs 223-227)
- **Problème** : Le bloc CTA olive (encart pleine largeur fond var(--olive), texte blanc, titre editorial, lede rgba(255,255,255,0.86), bouton terracotta, mobile pleine largeur + bordure arrondie ≥820px) est réimplémenté dans 9 fichiers avec des préfixes différents (pp-cta / cta / hm-cta / nv-cta …). CSS strictement identique à chaque fois.
- **Correctif** : Créer un composant <CtaBlock title texte href /> partagé, ou des classes globales .cta-band/.cta-inner dans system.css. Élimine ~9 copies du même bloc.

### 🟠 src/components/PrestationPage.astro, src/components/SalonPage.astro, src/pages/nos-valeurs.astro, src/pages/index.astro, src/pages/mentions-legales.astro, src/pages/nos-salons-de-coiffure.astro, src/pages/nous-rejoindre.astro, src/pages/actualites.astro, src/pages/consultation-offerte.astro, src/pages/consultation-visagiste-coloriste.astro, src/pages/beaute-du-regard-montbonnot.astro, src/pages/prestations-coiffure.astro, src/pages/head-spa-grenoble.astro, src/pages/actualites/[...slug].astro (PrestationPage 141-144/204-206 ; SalonPage 382-393/587-592 ; nos-valeurs 169-172/229-231)
- **Problème** : Le footer « marque + sous-titre Salons de coiffure · Grenoble · Montbonnot · Voiron · Aix-les-Bains » (et sa variante footer-grid) est dupliqué dans 14 fichiers, avec préfixes divergents (pp-foot / site-footer / nv-foot / hm-footer …). La liste des villes est même réécrite en dur à plusieurs endroits alors que salonsNav existe.
- **Correctif** : Extraire un composant <SiteFooter /> (variante simple + variante colonnes) consommant salonsNav, et le placer dans Layout ou en import unique. Centralise aussi la liste des villes.

### 🟠 src/pages/salon-de-coiffure/grenoble.astro, voiron.astro, montbonnot.astro, aix-les-bains.astro (grenoble 1-75 (intégral))
- **Problème** : Les 4 pages-wrapper de salon sont byte-identiques à l'exception du nom de variable importé (grenoble/voiron/…) : même logique liveAvis, même remap des chiffres /avis/i, même schéma HairSalon, même breadcrumb. ~75 lignes copiées 4 fois.
- **Correctif** : Remplacer par une route dynamique src/pages/salon-de-coiffure/[ville].astro avec getStaticPaths sur un tableau de salons, ou factoriser la construction du schéma + du salon enrichi dans un helper buildSalonPage(salon, Astro). Une seule source de vérité.

### 🟠 src/pages/nous-rejoindre.astro, nos-salons-de-coiffure.astro, actualites.astro, consultation-visagiste-coloriste.astro, nos-valeurs.astro, prestations-coiffure.astro, head-spa-grenoble.astro, beaute-du-regard-montbonnot.astro, actualites/[...slug].astro + les 4 pages salon (nos-valeurs 58-65 ; grenoble 61-68)
- **Problème** : Le JSON-LD BreadcrumbList est construit à la main dans 14 fichiers avec la même forme ({'@type':'ListItem', position, name, item}). prestations-shared.ts contient déjà un constructeur de breadcrumb mais il n'est utilisé que par les pages prestation ; toutes les autres pages le réécrivent.
- **Correctif** : Exposer un helper générique buildBreadcrumb(items, site) dans un module partagé (ex. src/lib/schema.ts) et l'appeler dans chaque page. Réduit le risque d'incohérence position/URL.

### 🟠 src/data/grenoble.ts, src/lib/places.ts (grenoble.ts 44-50 ; places.ts 16-23)
- **Problème** : Deux types décrivent le même objet « avis » avec des champs divergents : interface Avis (data) = {note, total, source, url, items:{…rating}} alors que LiveAvis (places) = {note, noteRaw, total, source, url, items:{…rating, time}}. Les wrappers salon reconstruisent un objet avis à partir de LiveAvis en perdant noteRaw/time. Risque de désynchronisation à chaque ajout de champ.
- **Correctif** : Faire de LiveAvis l'unique type (ou faire étendre Avis par LiveAvis) et le partager entre data et places.ts, plutôt que deux définitions parallèles.

### 🟠 src/pages/index.astro, src/pages/head-spa-grenoble.astro, src/components/SalonPage.astro (index 347-363 ; SalonPage 445-447 ; head-spa 285+) · ⚠️ impacte le rendu
- **Problème** : La palette des sections sombres (espresso) repose sur des hex magiques non tokenisés et incohérents entre eux : l'accent cuivre est #cf9d72 dans index.astro et head-spa-grenoble.astro mais #d8a98a dans SalonPage (.service-dark em), et le near-white est tantôt #fdfbf7 tantôt var(--cream). Aucune variable ne les regroupe, alors que --espresso et --terracotta existent.
- **Correctif** : Ajouter des tokens (ex. --copper:#cf9d72; --on-dark:#fdfbf7; --on-dark-muted:rgba(247,243,234,.72)) dans system.css et remplacer les hex inline, en alignant SalonPage sur la même teinte cuivre.

### 🟡 src/components/SalonPage.astro, src/pages/index.astro (SalonPage 535-575 ; index 365-372) · ⚠️ impacte le rendu
- **Problème** : Deux implémentations distinctes de « carte d'avis Google » : SalonPage (.review-card, scroll-snap horizontal, avatar initiale, étoiles répétées, line-clamp 6) et index.astro (.hm-avis-card, grille, étoiles fixes ★★★★★, line-clamp 5). Même donnée source (LiveAvis.items), deux markups/CSS sans rien de partagé.
- **Correctif** : Extraire un composant <ReviewCard avis /> paramétrable (layout grille vs carrousel) consommé par les deux pages.

### 🟡 src/pages/index.astro, src/pages/nos-valeurs.astro, src/components/SalonPage.astro, src/pages/nous-rejoindre.astro, src/pages/consultation-offerte.astro, src/pages/consultation-visagiste-coloriste.astro, src/pages/head-spa-grenoble.astro (nos-valeurs 179 & 206 ; index 378 ; SalonPage 434-437) · ⚠️ impacte le rendu
- **Problème** : Le « chip » / pastille (border-radius:999px, font 0.68–0.74rem, letter-spacing, uppercase, color var(--olive-deep), background var(--cream), border var(--line)) est redéfini sous des noms différents dans ~7 fichiers (nv-tags, nv-chip, hm-engage-chips, acces-badge…). Valeurs quasi identiques mais légèrement variables (0.68 vs 0.70 vs 0.74rem).
- **Correctif** : Créer une classe utilitaire .chip dans system.css (avec modificateurs de taille si besoin) et la réutiliser ; harmonise les tailles divergentes.

### 🟡 src/components/PrestationPage.astro, src/pages/index.astro, src/pages/nos-valeurs.astro, src/pages/head-spa-grenoble.astro, src/components/SalonPage.astro (PrestationPage 16-22 ; index 40-45 ; nos-valeurs 37-41 ; SalonPage 38-43)
- **Problème** : Les définitions d'icônes filaires SVG (Record<string,string> ICONS) sont dupliquées de fichier en fichier ; certains paths sont strictement identiques (leaf, sparkle, drop) mais recopiés dans 4-5 fichiers, d'autres ont des clés différentes pour le même usage (icon 'soin' = drop ; 'coaching' = sparkle).
- **Correctif** : Centraliser les paths SVG dans un module partagé (ex. src/lib/icons.ts) importé par les composants/pages, avec des clés de nommage uniformes.

### 🟡 src/components/BookingModal.astro, src/pages/reserver-widget.astro (BookingModal 86-94 ; reserver-widget 33-91)
- **Problème** : Les couleurs de marque sont écrites en hex en dur (#31302e, #c25510, #81806c, fonts 'Fraunces'/'Poppins') au lieu des tokens var(--ink)/--terracotta/--olive. Acceptable pour reserver-widget (page iframe isolée sans system.css), mais BookingModal utilise un <style is:global> dans le DOM principal où les tokens sont disponibles : la divergence y est évitable.
- **Correctif** : Dans BookingModal.astro, remplacer les hex par les var(--ink)/--terracotta/--olive/--serif/--sans. Laisser reserver-widget en hex (justifié) avec un commentaire.


## Accessibilité (a11y)

### 🔴 src/styles/system.css (36-50) · ⚠️ impacte le rendu
- **Problème** : Aucun style de focus visible défini globalement. Le système ne fournit aucun :focus-visible pour les liens, boutons (.btn), liens textuels (.link-olive/.link-cream) ni les <summary>. La navigation au clavier ne montre aucun indicateur d'où se trouve le focus (sauf le style natif du navigateur, qui est par ailleurs supprimé sur les champs de formulaire, voir autre finding). Blocant WCAG 2.4.7.
- **Correctif** : Ajouter un style global, ex. :focus-visible { outline: 2px solid var(--olive); outline-offset: 2px; border-radius: 2px; } et un variant clair sur fonds sombres (.service-dark, .hm-signatures, CTA olive). À tester visuellement.

### 🔴 src/pages/consultation-offerte.astro (154) · ⚠️ impacte le rendu
- **Problème** : .lp-form input/textarea/select:focus pose outline:none et ne remplace l'indicateur que par un changement de couleur de bordure (var(--line) → var(--olive)). Le passage rgba(38,38,31,0.10) → olive est subtil et insuffisant comme seul signal de focus clavier (et risque de contraste faible). Idem apply-form (nous-rejoindre.astro:220).
- **Correctif** : Conserver/ajouter un anneau de focus net : input:focus-visible { outline: 2px solid var(--olive); outline-offset: 1px; } plutôt que outline:none. Même correctif pour .apply-form.

### 🟠 src/components/Header.astro (46-100)
- **Problème** : Pas de lien d'évitement (skip link) vers le contenu principal. Avec un header sticky comportant logo + nav complète + dropdowns, l'utilisateur clavier/lecteur d'écran doit tabuler toute la navigation sur chaque page. Plusieurs pages n'ont d'ailleurs pas de landmark <main> avec id ciblable de façon cohérente.
- **Correctif** : Ajouter un <a class="skip-link" href="#main">Aller au contenu</a> en tout début de header (visuellement masqué, révélé au focus) et un id="main" sur le <main> de chaque page/layout.

### 🟠 src/components/Header.astro (54-66)
- **Problème** : Le menu déroulant desktop (.nav-drop) est un <a> avec aria-haspopup mais le panneau ne s'ouvre qu'au :hover / :focus-within CSS. Au clavier, focus-within ne s'active que quand un lien À L'INTÉRIEUR du panneau reçoit le focus ; or le panneau est en visibility:hidden/pointer-events:none tant qu'il n'est pas ouvert. Le trigger lui-même (le <a>) ne déclenche pas l'ouverture au focus, donc tabuler depuis le trigger amène-t-il bien dans le panneau ? Le panneau étant masqué jusqu'au focus-within, le premier lien interne peut être inatteignable de façon fiable selon l'ordre de focus.
- **Correctif** : Rendre le panneau visible aussi quand le trigger a le focus : .nav-drop-trigger:focus-visible ~ .nav-drop-panel (ou :focus-within sur .nav-drop déjà présent — vérifier que le trigger fait partie de .nav-drop, c'est le cas). Idéalement, le trigger ne devrait pas être un lien-page ET un déclencheur de menu ; tester au clavier réel et envisager aria-expanded piloté en JS.

### 🟠 src/components/BookingModal.astro (15-25)
- **Problème** : Le <dialog> n'a pas de focus initial défini ni de titre associé via aria-labelledby. aria-label="Réservation en ligne" existe, mais quand le sélecteur de salon s'affiche, le titre visible (.bk-picker-title) n'est pas relié au dialog. De plus, à l'ouverture via showModal le focus n'est pas explicitement placé sur un élément pertinent (bouton fermer ou premier salon).
- **Correctif** : Relier aria-labelledby au .bk-picker-title quand le picker est affiché, et placer le focus sur le premier .bk-salon (mode picker) ou sur #bk-close (mode iframe) après showModal(). showModal gère le focus trap, mais le focus initial mérite d'être explicite.

### 🟠 src/components/SalonPage.astro (321)
- **Problème** : La note d'avis est rendue avec des caractères ★ et un aria-label="{note} sur 5" sur le span — correct — MAIS sur la home (index.astro:199) les étoiles .hm-avis-stars ont aria-hidden="true" SANS aucune alternative textuelle de la note pour chaque carte d'avis : un lecteur d'écran n'a aucune information de notation pour ces avis. Idem nos-salons-de-coiffure.astro:86 (card-stars aria-hidden avec la note en strong adjacent, acceptable, mais l'étoile seule n'indique pas 'sur 5').
- **Correctif** : Sur index.astro, donner un libellé accessible aux cartes d'avis (ex. <span class="sr-only">Note 5 sur 5</span>) puisque les étoiles sont décoratives. Uniformiser le pattern utilisé dans SalonPage (aria-label sur les étoiles).

### 🟠 src/pages/consultation-visagiste-coloriste.astro (106-114)
- **Problème** : Onglets de réservation : role="tablist" + boutons avec aria-selected, mais il manque role="tab" sur les boutons, role="tabpanel" sur .cv-stage, et l'association aria-controls/aria-labelledby. Le pattern ARIA tabs est incomplet : aria-selected sans role=tab est invalide et les lecteurs d'écran n'annonceront pas correctement la relation onglet/panneau. Pas de gestion clavier flèches non plus.
- **Correctif** : Soit compléter le pattern (role=tab sur chaque bouton, role=tabpanel + aria-labelledby sur le conteneur iframe, navigation flèches), soit retirer role=tablist/aria-selected et traiter en simples boutons avec aria-pressed. La 2e option est plus simple et robuste ici.

### 🟠 src/pages/nous-rejoindre.astro (123-124)
- **Problème** : Modale candidature <dialog> : focus initial non géré à l'ouverture (open() appelle showModal sans déplacer le focus vers le titre/premier champ), et titre relié seulement par aria-label='Candidature' alors qu'un h2 visible 'Postuler chez Eric Di Martino' existe. La fermeture par Échap est gérée nativement par showModal, OK.
- **Correctif** : Ajouter aria-labelledby pointant vers le h2 (.apply-title via id) et placer le focus sur le premier champ (Prénom) ou le titre après open().

### 🟡 src/components/SalonPage.astro (102-108)
- **Problème** : Les badges d'accès (.acces-badge) sont des <li> portant uniquement un attribut title pour le détail. title n'est ni accessible au clavier ni lu de façon fiable par les lecteurs d'écran ; l'information de détail (a.detail) est donc inaccessible.
- **Correctif** : Exposer le détail dans le texte (ex. visually-hidden) ou via aria-label sur le li, plutôt que title seul.

### 🟡 src/pages/actualites.astro (40-43)
- **Problème** : Filtres de catégorie : role="tablist" sur le conteneur mais les boutons utilisent aria-pressed (sémantique toggle button), pas aria-selected/role=tab. Mélange de deux patterns ARIA. aria-pressed sur des boutons est correct, mais role=tablist sur le parent crée une attente de role=tab non satisfaite.
- **Correctif** : Retirer role="tablist" du conteneur (garder un simple groupe de boutons aria-pressed) ou passer en pattern tabs complet. La version boutons+aria-pressed est suffisante.

### 🟡 src/pages/consultation-offerte.astro (57-67)
- **Problème** : Champs de formulaire : les labels enveloppent le contrôle (implicite) ce qui est valide, mais le <select> salon utilise une option 'Choisissez votre salon…' disabled selected comme placeholder sans aria-required explicite (required présent, OK). Le textarea 'Votre envie ?' a un placeholder qui ne doit pas servir de label — ici le label texte existe, donc OK. Point réel : aucun lien programmatique d'erreur/validation n'est prévu, mais c'est hors périmètre statique.
- **Correctif** : RAS bloquant. Vérifier au runtime que les messages de validation natifs sont annoncés. Conserver les labels enveloppants.

### 🟡 src/pages/index.astro (169)
- **Problème** : Lien '.hm-sig-all' contient le texte 'Toutes les prestations →' avec la flèche directement dans le texte (pas de aria-hidden), donc lue par les lecteurs d'écran comme 'flèche vers la droite'. Idem .lp-ribbon n'est pas un souci, mais plusieurs flèches → sont correctement en aria-hidden ailleurs ; incohérence ici.
- **Correctif** : Mettre la flèche dans un <span aria-hidden="true">→</span> comme dans les autres liens .link-arrow du site.

### 🟡 src/pages/head-spa-grenoble.astro (126-130)
- **Problème** : Le déroulé d'étapes utilise un <input type="checkbox"> + <label> pour faire un accordéon CSS-only. Ce détournement n'expose aucun état expanded/collapsed sémantique aux lecteurs d'écran (une case à cocher annoncée 'coché/non coché' au lieu de 'développé/réduit'), contrairement aux autres accordéons du site qui utilisent <details>/<summary> (pattern accessible).
- **Correctif** : Aligner sur le pattern <details>/<summary> utilisé partout ailleurs (FAQ), qui expose nativement l'état d'ouverture.

### 🟡 src/components/Header.astro (86-98)
- **Problème** : Le menu mobile et le dropdown résa reposent sur <details>/<summary> sans JS. Le <summary> du burger a aria-label correct. En revanche, ouvrir le menu mobile n'emprisonne pas le focus et un clic en dehors ne le referme pas (comportement natif details : reste ouvert). Mineur mais peut désorienter au clavier ; pas bloquant.
- **Correctif** : Optionnel : fermer le <details> au clic extérieur / à la navigation via un peu de JS, ou documenter comme acceptable.


## SEO & données structurées (JSON-LD, canonical, meta, h1, maillage, sitemap/noindex, cohérence URLs)

### 🔴 src/components/Layout.astro (15,23)
- **Problème** : noindex={true} est la valeur PAR DÉFAUT du Layout et AUCUNE page indexable ne passe noindex={false}. Combiné au vercel.json qui force X-Robots-Tag: noindex, nofollow sur /(.*), 100% du site est non-indexable. C'est l'état pré-lancement documenté (Phase 6), mais c'est le blocage SEO #1 : tant qu'il n'est pas levé, aucune des optimisations (JSON-LD, canonical, maillage) ne sert. À la bascule, retirer le header vercel.json ET inverser le défaut/passer noindex={false} sur chaque page publique.
- **Correctif** : À la bascule Phase 6 : supprimer le bloc headers de vercel.json, passer le défaut Layout à noindex=false (ou ajouter noindex={false} sur toutes les pages publiques), et garder noindex explicite uniquement sur styleguide, reserver-widget, consultation-offerte.

### 🔴 vercel.json (3-10)
- **Problème** : X-Robots-Tag: noindex, nofollow appliqué à TOUTES les routes via source /(.*). Ce header HTTP est prioritaire sur la balise meta et bloque même les ressources/sitemap. Redondant avec le noindex du Layout et source d'oubli au lancement (deux endroits à changer).
- **Correctif** : À la bascule : supprimer ce header. Centraliser le contrôle d'indexation sur la seule balise meta (prop noindex du Layout) pour n'avoir qu'un seul interrupteur.

### 🟠 astro.config.mjs (10-15)
- **Problème** : Le sitemap est généré (et exclut styleguide/reserver-widget/consultation-offerte), MAIS toutes les pages qu'il liste sont actuellement noindex (Layout + vercel.json). Au lancement, incohérence possible : un sitemap listant des URLs noindex envoie un signal contradictoire à Google. De plus, aucun robots.txt n'existe dans public/ donc le sitemap n'est référencé nulle part (Sitemap: ...).
- **Correctif** : Ajouter public/robots.txt avec 'Sitemap: https://www.ericdimartino.com/sitemap-index.xml' (et Disallow vide en prod). Vérifier à la bascule que sitemap et noindex sont cohérents.

### 🟠 src/pages/actualites/[...slug].astro (100)
- **Problème** : Le CTA final de l'article pointe sur href="#reserver" mais la page article ne contient AUCUN élément id="reserver" (contrairement aux pages salon/head-spa). Le clic ne fait rien (ancre morte) — perte de conversion et lien interne cassé. La modale BookingModal s'ouvre via [data-reserve], pas via #reserver seul.
- **Correctif** : Remplacer par <a class="btn btn-action btn-lg" data-reserve href="#reserver"> (comme le Header mobile et la home) pour déclencher la modale de réservation.

### 🟠 src/data/grenoble.ts (123,211,138)
- **Problème** : reservationUrl='#reserver' (placeholder TODO) sur les 4 salons + toutes les prestations + head spa. Sur les pages salon il existe bien un id="reserver" donc l'ancre fonctionne, mais le bouton 'Réserver' du Header (reservationUrl) et le service barbier (lien '#reserver') renvoient vers une ancre, pas vers le widget Planity réel. Tant que l'URL réelle n'est pas branchée, tous les CTA de réservation principaux sont des ancres internes, pas des conversions — impact direct sur l'objectif rentabilité.
- **Correctif** : Remplacer '#reserver' par l'URL/déclencheur Planity réel (ou data-reserve vers la modale) dans tous les fichiers src/data/*. Vérifier que chaque CTA ouvre bien le widget du bon salon (planityKey).

### 🟠 src/pages/consultation-offerte.astro (25-37)
- **Problème** : Deux pages ciblent le même intent 'consultation visagiste' : /consultation-visagiste-coloriste (indexable) et /consultation-offerte (noindex). La LP offerte n'émet PAS de JSON-LD (pas de Service/breadcrumb) alors que la page normale en a — incohérence. Comme elle est noindex c'est acceptable, mais il faut s'assurer qu'aucun lien interne indexable ne pointe vers /consultation-offerte (sinon dilution + risque duplicate). Vérifié : la home pointe bien vers la version indexable, OK. Risque résiduel : pas de canonical croisé.
- **Correctif** : Laisser la LP en noindex (correct pour trafic Ads). Optionnel : ajouter sur /consultation-offerte un <link rel="canonical"> vers /consultation-visagiste-coloriste si on veut consolider, ou laisser tel quel puisque noindex suffit. Ne pas y ajouter de JSON-LD.

### 🟠 src/pages/index.astro (48-60)
- **Problème** : Le schema Organization de la home ne possède ni telephone, ni address, ni @id, et ne fait pas de lien (sameAs/@id) vers les 4 entités HairSalon des pages salon. Résultat : Google voit une Organization 'flottante' + 4 HairSalon non reliés, au lieu d'une marque multi-établissements. aggregateRating est posé sur l'Organization (ratingValue cumulé) — risque de non-éligibilité aux rich results car une Organization sans produit/service précis et avec rating agrégé maison est souvent ignorée/peut déclencher un warning.
- **Correctif** : Donner un @id stable à l'Organization (ex. URL#org), référencer les 4 HairSalon via 'department' ou 'subOrganization' (ou au minimum un @id partagé), et envisager de retirer l'aggregateRating au niveau Organization (le garder par HairSalon où il est légitime). Ajouter logo/telephone à l'Organization.

### 🟡 src/pages/salon-de-coiffure/grenoble.astro (28-31)
- **Problème** : Le name du HairSalon est 'Eric Di Martino — Grenoble' alors que data.nom='Eric Di Martino'. Le tiret cadratin dans le name de schema est cosmétique mais surtout : le name diffère du name utilisé dans prestations-shared providers ('Eric Di Martino — Grenoble' aussi, cohérent) et de l'Organization ('Eric Di Martino'). Mineur, mais l'absence d'un @id partagé empêche Google de dédupliquer ces entités identiques répétées sur chaque page prestation.
- **Correctif** : Définir un @id canonique par salon (ex. https://www.ericdimartino.com/salon-de-coiffure/grenoble#salon) et le réutiliser dans le HairSalon de la page salon ET dans les providers des schemas Service (prestations-shared.ts), pour que ce soit la même entité partout.

### 🟡 src/lib/prestations-shared.ts (20-25,47-56)
- **Problème** : Les providers (HairSalon) injectés dans chaque schema Service des pages prestation sont des entités HairSalon partielles (sans address country bien présent, mais sans url/@id, sans geo, sans openingHours). Répétées sur ~6 pages prestation, ce sont 6x4 HairSalon dupliqués et non reliés aux vraies entités HairSalon complètes des pages /salon-de-coiffure/*. Google peut créer des doublons d'établissements.
- **Correctif** : Donner à chaque provider un @id pointant vers l'entité salon canonique (#salon de la page salon) et y ajouter 'url' vers la page salon. Ne pas redéclarer adresse/tél en double si un @id suffit à référencer l'entité complète.

### 🟡 src/pages/head-spa-grenoble.astro (209-210,55-65)
- **Problème** : Le Service head spa porte des Offers avec price (f.prix) mais SANS aggregateRating ni review au niveau Offer/Service — c'est correct, mais les Offer sont posées sur un Service (pas un Product), or schema.org Offer sur Service n'est pas éligible aux rich snippets de prix. Par ailleurs le title h.seo.title et le H1 (h.hero.titre) doivent contenir 'Grenoble' pour le local : à vérifier dans head-spa.ts (le H1 visible est h.hero.titre + titreEm, pas garanti d'inclure la ville).
- **Correctif** : Vérifier que le H1 du head spa contient bien 'Grenoble' (sinon page nommée /head-spa-grenoble sans le mot-clé local dans le H1). Les Offer sur Service sont tolérées mais n'apporteront pas de rich result prix ; acceptable.

### 🟡 src/components/SalonPage.astro (302-308) · ⚠️ impacte le rendu
- **Problème** : Le bloc Avis affiche une note + 'X avis Google' dans le HTML (reviews-rating) en se basant sur salon.avis (placeholder 4,7/500 en dur dans grenoble.ts lignes 243-252 si l'API ne répond pas). Or l'aggregateRating JSON-LD n'est émis QUE si liveAvis existe (vraie API). Donc en repli, le HTML affiche une note 5★/500 avis FICTIVE sans contrepartie schema — incohérence contenu visible vs structuré, et risque de note inventée affichée en prod si la clé Google manque au build.
- **Correctif** : Ne jamais afficher de note/total chiffrés en repli : masquer la note (ou la section avis) si liveAvis est absent, comme c'est déjà fait pour l'aggregateRating. Aligner le visible sur le structuré.

### 🟡 src/pages/index.astro (61)
- **Problème** : Le schema WebSite ne contient pas de potentialAction (SearchAction) — normal car pas de recherche interne — mais surtout il n'y a pas de lien @id entre WebSite, Organization et les pages. Mineur. Aucun BreadcrumbList sur la home (acceptable pour la racine).
- **Correctif** : Optionnel : relier WebSite.publisher → Organization via @id. Sans impact rich result majeur.

### 🟡 src/components/Layout.astro (26-33)
- **Problème** : og:url, og:image et canonical ne sont rendus que si la prop est fournie. og:image n'est passé que par les pages salon et articles ; la home, prestations, head spa, consultation n'ont PAS de og:image → partages sociaux sans visuel. twitter:card aussi conditionné à ogImage.
- **Correctif** : Définir une og:image par défaut (logo/visuel marque) dans le Layout quand aucune n'est fournie, pour que toutes les pages aient un visuel de partage.


## Bugs & robustesse JS/TS

### 🟠 src/lib/places.ts (28-30)
- **Problème** : fetchDetails appelle res.json() sans verifier res.ok. Sur reponse non-200 (quota depasse 429, 500, OVER_QUERY_LIMIT), Google renvoie souvent un corps JSON avec status != 'OK' qui sera correctement filtre (ligne 30 verifie data.status === 'OK'), MAIS un corps non-JSON (page d'erreur HTML d'un proxy/gateway) ferait throw res.json(). C'est rattrape par le try/catch de getGoogleReviews donc fallback silencieux OK. Probleme reel plus subtil : un seul des deux tris peut reussir (relevant null, newest OK) — gere via r = relevant ?? newest, correct. Risque principal : aucun timeout sur fetch — si l'API Google pend, le BUILD entier se bloque indefiniment.
- **Correctif** : Ajouter un AbortController avec timeout (ex. 8s) sur chaque fetch pour garantir que le build ne se bloque jamais : const ctrl = new AbortController(); const t = setTimeout(()=>ctrl.abort(), 8000); fetch(url,{signal:ctrl.signal}).finally(()=>clearTimeout(t)). Sur abort, le catch renvoie null (fallback placeholder).

### 🟠 src/lib/places.ts (66-72) · ⚠️ impacte le rendu
- **Problème** : noteRaw: r.rating et note: String(r.rating ?? '') : si l'API renvoie un result sans champ rating (etablissement sans avis, ou champ omis), noteRaw vaut undefined et note vaut '' (chaine vide). Injecte tel quel dans le schema JSON-LD (noteRaw consomme par AggregateRating) → schema invalide / rating affiche vide. De plus total: r.user_ratings_total ?? 0 peut etre 0 alors qu'on a quand meme un bloc d'avis.
- **Correctif** : Garder : si typeof r.rating !== 'number', renvoyer null (fallback placeholder) plutot que de propager un rating vide. Idem si items.length === 0 apres filtrage 5 etoiles, decider explicitement du fallback.

### 🟠 src/components/BookingModal.astro (34-43) · ⚠️ impacte le rendu
- **Problème** : load() affecte frame.src puis cache le picker, mais ne reinitialise jamais l'iframe si on rouvre la modale sur le MEME salon apres l'avoir fermee. A la fermeture (ligne 79) frame.src est retire (removeAttribute('src')). Si l'utilisateur reclique le meme salon, load() refait frame.src = url → OK. En revanche, depuis le picker (ligne 74) load() est appele sans verifier que le salon a une cle : data-key provient de s.key qui peut etre undefined si un salon n'a pas de planityKey (grenoble la definit, mais le type la rend optionnelle, ligne 73 grenoble.ts). load() a un garde (if(!key) return) mais cela laisse alors la modale en etat 'picker' sans feedback : le bouton ne fait rien visuellement.
- **Correctif** : Si data-key est vide cote build, ne pas rendre le bouton salon du tout (filtrer SALONS sur s.key dans BookingModal). Garantit qu'aucun bouton mort n'apparait.

### 🟠 src/components/Layout.astro (48) · ⚠️ impacte le rendu
- **Problème** : Le script reveal est is:inline (donc execute immediatement, en parsing synchrone dans le <body> via Astro qui l'injecte tel quel). Il s'abonne a DOMContentLoaded. Si le script est place apres le contenu et que le DOM est deja interactif au moment de l'execution (cas frequent avec is:inline en fin de body, ou navigation back/forward cache), l'evenement DOMContentLoaded peut avoir DEJA ete tire → le callback ne s'execute jamais → les elements .reveal restent invisibles (opacity 0) et le contenu ne s'affiche pas.
- **Correctif** : Garder le code defensif : if (document.readyState === 'loading') { addEventListener('DOMContentLoaded', init); } else { init(); }. Eviter de dependre de DOMContentLoaded pour un script deja en bas de body.

### 🟠 src/pages/reserver-widget.astro (95-104)
- **Problème** : MutationObserver obs n'est jamais deconnecte. Une fois le widget Planity charge (loader masque), l'observer continue d'ecouter tous les childList/subtree de #planity-appointment indefiniment — Planity re-rend son DOM a chaque etape (selection service, calendrier, formulaire), declenchant le callback en continu. Fuite de travail (pas de fuite memoire grave car l'iframe est detruite a la fermeture de la modale qui retire src, mais consommation CPU inutile pendant toute la session de resa).
- **Correctif** : Deconnecter apres premier rendu : var obs = new MutationObserver(function(){ if (c.childNodes.length) { loader.style.display='none'; obs.disconnect(); } });

### 🟠 src/pages/reserver-widget.astro (97-104) · ⚠️ impacte le rendu
- **Problème** : Chargement des scripts Planity sans gestion d'erreur : s1.onload chaine s2, mais aucun s1.onerror / s2.onerror. Si le CDN cloudfront est injoignable (blocage reseau, adblock, panne), le loader 'Chargement des prestations…' tourne indefiniment sans message d'erreur ni fallback (ex. lien direct vers Planity ou numero de tel).
- **Correctif** : Ajouter s1.onerror et s2.onerror qui affichent un message de repli dans #planity-loader ('Reservation indisponible, appelez le salon au …' ou lien Planity direct). Optionnel : timeout de securite (10s) qui bascule sur le message si le widget n'a pas charge.

### 🟡 src/lib/places.ts (58-64) · ⚠️ impacte le rendu
- **Problème** : map sur les avis : texte: rev.text peut etre une chaine vide (avis 5 etoiles note seule, sans commentaire — frequent sur Google). Ces avis passent le filtre rating===5 et produisent des cartes d'avis vides dans le rendu.
- **Correctif** : Ajouter un filtre .filter((rev)=> rev.text && rev.text.trim().length > 0) avant le slice(0,max) pour ne garder que les avis avec texte.

### 🟡 src/components/BookingModal.astro (55-56)
- **Problème** : Fallback dlg.setAttribute('open','') quand showModal absent : <dialog open> sans showModal() ne cree PAS de backdrop et ne pose pas de focus trap ni la touche Echap pour fermer. Sur ces navigateurs (tres anciens), close() via removeAttribute marche mais le clic sur backdrop (ligne 78, e.target===dlg) ne se declenche jamais car il n'y a pas de backdrop → modale non fermable au clic exterieur. Marginal (dialog supporte partout en 2026) mais le fallback est trompeur.
- **Correctif** : Acceptable de garder ; sinon supprimer le fallback et assumer <dialog>.showModal (support universel desormais), ce qui simplifie open()/close().

### 🟡 src/pages/consultation-visagiste-coloriste.astro (141-148)
- **Problème** : frame = getElementById('cv-frame') sans null-check. Si l'IIFE s'execute et que #cv-frame est absent (refonte du markup, condition de rendu), select() throw sur frame.src a la premiere ligne select(tabs[0]) (ligne 148). Erreur JS non rattrapee qui casse le reste du script de la page.
- **Correctif** : Ajouter if (!frame || !tabs.length) return; en tete de l'IIFE.

### 🟡 src/pages/actualites.astro (82) · ⚠️ impacte le rendu
- **Problème** : Filtre journal : card.style.display = '' restaure l'affichage par defaut, correct. Aucun null-check necessaire (querySelectorAll renvoie liste vide si rien). Edge case reel : si une carte n'a pas d'attribut data-category, getAttribute renvoie null et la comparaison ne matchera jamais un filtre actif → carte cachee sur tout filtre sauf '*'. Acceptable mais fragile si un futur article omet la categorie (le schema la rend obligatoire via z.enum, donc faible risque).
- **Correctif** : Optionnel : traiter null comme '*' ou logger. Faible priorite vu la contrainte de schema.

### 🟡 src/pages/reserver-widget.astro (91-94) · ⚠️ impacte le rendu
- **Problème** : window.planity est reaffecte a chaque chargement, mais si l'iframe est reutilisee (changement de salon via la modale qui refait frame.src), une nouvelle navigation de l'iframe relance la page → OK. En revanche serviceSetsWhitelist provient de cat.split(',') sans validation : une valeur cat malformee (vide entre virgules 'a,,b') produit une entree '' dans le whitelist apres trim, que Planity peut interpreter comme filtre vide → aucune prestation affichee.
- **Correctif** : Filtrer les entrees vides : .map(s=>s.trim()).filter(Boolean).

### 🟡 src/components/BookingModal.astro (62-71)
- **Problème** : Handler de clic global delegue : e.target.closest && e.target.closest(...). Le garde e.target.closest && protege contre e.target sans methode closest (ex. clic sur un Text node ou document). Correct. Mais e.preventDefault() est appele meme si t est un [data-reserve] qui n'est pas un <a> (ex. un <button>), ce qui est inoffensif. Pas de bug bloquant ; robustesse correcte.
- **Correctif** : Aucune action requise.


## Commentaires & lisibilité

### 🔴 src/data/grenoble.ts (123)
- **Problème** : Commentaire TROMPEUR : `reservationUrl: '#reserver', // TODO: remplacer par l'URL réelle de réservation`. Or `#reserver` n'est PAS un placeholder : c'est le mécanisme final. La BookingModal globale (src/components/BookingModal.astro, l.62-71) intercepte tout `a[href="#reserver"]` et ouvre le widget Planity via la `planityKey` du salon. Le commentaire laisse croire qu'il reste un travail à faire et qu'il manque une URL, ce qui est faux. Le vrai paramètre de config est `planityKey` (déjà renseigné l.124), pas l'URL.
- **Correctif** : Supprimer le `// TODO` et le remplacer par un commentaire factuel, ex. `// '#reserver' = déclencheur de la modale Planity globale (voir BookingModal.astro). Le salon est résolu via data-planity / planityKey.`

### 🔴 src/data/montbonnot.ts (23)
- **Problème** : Même commentaire trompeur que grenoble.ts : `reservationUrl: '#reserver', // TODO: URL réelle de réservation`. `#reserver` est le mécanisme définitif intercepté par BookingModal, pas un placeholder à remplacer.
- **Correctif** : Retirer le TODO. Mutualiser le commentaire d'explication une seule fois (idéalement sur le champ `reservationUrl` de l'interface SalonData dans grenoble.ts l.72) plutôt que de le dupliquer faux dans chaque fichier.

### 🔴 src/data/voiron.ts (22)
- **Problème** : Idem : `reservationUrl: '#reserver', // TODO: URL réelle de réservation`. Commentaire obsolète/trompeur, `#reserver` est le hook final de la modale.
- **Correctif** : Supprimer le `// TODO: URL réelle de réservation`.

### 🔴 src/data/aix-les-bains.ts (22)
- **Problème** : Idem : `reservationUrl: '#reserver', // TODO: URL réelle de réservation`. Faux TODO.
- **Correctif** : Supprimer le `// TODO`.

### 🔴 src/data/head-spa.ts (14)
- **Problème** : Idem : `reservationUrl: '#reserver', // TODO: URL réelle de réservation`. Mécanisme final, pas un placeholder.
- **Correctif** : Supprimer le `// TODO`.

### 🔴 src/data/prestations.ts (16)
- **Problème** : Idem : `reservationUrl: '#reserver', // TODO: URL réelle de réservation (widget)`. Sur les pages prestation (sans ancêtre data-planity), `#reserver` ouvre volontairement le sélecteur de salon de la modale. C'est le comportement voulu, pas un TODO.
- **Correctif** : Supprimer le `// TODO`.

### 🔴 src/data/prestation-coloration.ts (7)
- **Problème** : Idem : `reservationUrl: '#reserver', // TODO: URL réelle (widget)`. Les autres fichiers prestation (prestation-coupe.ts l.6, prestation-extensions, prestation-lissage, prestation-mariage) portent le même `#reserver` ; vérifier qu'aucun ne garde ce faux TODO.
- **Correctif** : Supprimer le `// TODO` dans tous les fichiers prestation-*.ts.

### 🔴 src/data/consultation.ts (19)
- **Problème** : TODO réel et bloquant fonctionnellement : `endpoint: '', // TODO: URL du formulaire (Formspree / GoHighLevel / webhook)`. Le formulaire de capture de leads de la LP Ads Consultation n'a pas d'endpoint — toute soumission est perdue. Sur une page conçue pour la conversion de trafic payant, c'est critique.
- **Correctif** : À traiter en priorité (renseigner l'endpoint GoHighLevel/webhook). En attendant, le commentaire est correct ; le signaler comme blocage produit, pas seulement comme dette de commentaire.

### 🔴 src/pages/nous-rejoindre.astro (9)
- **Problème** : TODO réel et bloquant : `const FORM_ENDPOINT = ''; // TODO: endpoint candidatures (Formspree / GoHighLevel)`. Le formulaire de candidature « Nous rejoindre » n'envoie nulle part — les candidatures sont perdues.
- **Correctif** : Renseigner l'endpoint avant mise en ligne. Commentaire exact mais à transformer en blocage à lever.

### 🔴 src/pages/mentions-legales.astro (3, 34-35, 40, 67, 81, 86) · ⚠️ impacte le rendu
- **Problème** : Placeholders légaux visibles en page : `[à compléter]` (capital social), `[à vérifier]` (TVA), `[à confirmer : nom du président]`, `[à compléter, ex. 12 mois...]` (conservation données), `[À COMPLÉTER ... pixels Google/Meta]` (cookies), `[à compléter]` (concepteur). Ces marqueurs sont rendus à l'écran (mark.legal-todo) — non conformes RGPD/mentions légales obligatoires si publiés en l'état.
- **Correctif** : Compléter les champs juridiques (Eric) avant la bascule en prod. Le commentaire d'en-tête (l.3) est clair et correct ; le risque est la publication avec placeholders.

### 🟠 src/components/SalonPage.astro (297)
- **Problème** : Commentaire OBSOLÈTE : `<!-- 6b. AVIS (placeholder — vrais avis Google à brancher) -->`. Les vrais avis Google SONT déjà branchés : les pages salon (ex. salon-de-coiffure/grenoble.astro l.13) appellent getGoogleReviews() au build et injectent `salon.avis` réel via src/lib/places.ts. Le commentaire indique un TODO qui est déjà fait.
- **Correctif** : Remplacer par `<!-- 6b. AVIS — vrais avis Google (build, voir lib/places.ts) avec repli sur les avis du fichier data si la clé API est absente -->`.

### 🟠 src/data/grenoble.ts (241-242)
- **Problème** : Commentaire potentiellement obsolète/incohérent avec le runtime : `// Avis — PLACEHOLDER (témoignages fictifs). À remplacer par les vrais avis Google ... jamais codés en dur en prod, brief §7`. En réalité ces avis ne servent que de REPLI : grenoble.astro écrase `salon.avis` par les avis Google live quand la clé est présente. Le commentaire alarmiste (« jamais en prod ») ne reflète pas que le mécanisme de repli est volontaire et que les vrais avis sont déjà branchés.
- **Correctif** : Reformuler en : `// Avis de REPLI (affichés uniquement si l'API Google Places est indisponible au build, voir lib/places.ts). Témoignages illustratifs.`

### 🟠 src/data/grenoble.ts (150-156)
- **Problème** : Commentaire partiellement obsolète : `// 4,7 ★ · 500 avis : PROVISOIRE — à brancher sur les vrais avis Google plus tard.` Le branchement live existe déjà (grenoble.astro l.14-18 remplace le chiffre `avis` par les valeurs Google). Le « plus tard » est trompeur ; seul le repli 500/4,7 reste fictif.
- **Correctif** : Reformuler : `// Valeurs de repli ; remplacées au build par les vrais chiffres Google si la clé API est présente (grenoble.astro).`

### 🟠 src/pages/nos-valeurs.astro (112) · ⚠️ impacte le rendu
- **Problème** : Placeholder visible en page : `<mark class="nv-todo">[à compléter : association partenaire]</mark>`. Affiché au visiteur dans le bloc « cancer/repousse ». À ne pas laisser en prod.
- **Correctif** : Renseigner le nom de l'association partenaire ou retirer le marqueur visible avant mise en ligne.

### 🟠 src/data/grenoble.ts (137-138)
- **Problème** : Commentaire signalant une donnée approximative : `// Coordonnées place Victor Hugo (à affiner)` + `geo: { lat: 45.1909, lng: 5.7263 }`. Ces coordonnées alimentent le schema HairSalon (GeoCoordinates, SEO local). Un `lat/lng` imprécis dégrade le référencement local — le « à affiner » est un vrai TODO non recensé ailleurs.
- **Correctif** : Vérifier les coordonnées exactes du 6 place Victor Hugo et retirer le « à affiner ». Recenser ce point dans le suivi pré-prod.

### 🟡 src/data/montbonnot.ts (114)
- **Problème** : Commentaire conditionnellement obsolète : `// Équipe — prénoms réels (site). Spécialités PROVISOIRES (sauf Audrey, beauté du regard).` Sur les autres salons les commentaires « provisoire » sont cohérents, mais l'accumulation de mentions PROVISOIRE/placeholder (relevées par grep dans grenoble/voiron/aix/montbonnot/head-spa) crée un bruit important : difficile de distinguer le contenu validé du contenu temporaire.
- **Correctif** : Centraliser l'état d'avancement « provisoire » dans un seul endroit (PROJECT_BRIEF ou un commentaire d'en-tête unique par fichier) plutôt que de répéter PROVISOIRE sur chaque champ ; ne garder les marqueurs inline que sur les valeurs réellement risquées (tarifs, specialités).

### 🟡 src/components/BookingModal.astro (6)
- **Problème** : Commentaire d'en-tête référence `serviceSetsWhitelist` : `// Catégorie optionnelle via [data-cat] (serviceSetsWhitelist).` Ce terme n'apparaît nulle part dans le composant (le code utilise simplement `cat` passé en query param à /reserver-widget). Le commentaire renvoie à une notion non définie dans ce fichier, ce qui nuit à la compréhension.
- **Correctif** : Soit ajouter une ligne expliquant où `serviceSetsWhitelist` est consommé (reserver-widget.astro), soit retirer la référence si elle n'est plus pertinente.
