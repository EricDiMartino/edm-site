// Contenu — « Analyse capillaire » (composant réutilisable AnalyseCapillaire.astro).
// Positionnement STRICT : diagnostic expert, jamais vente de produit.
//   - Aucune marque ni techno produit (pas de nom d'appareil, de gamme, de soin).
//   - Jamais « analyse médicale » ni promesse médicale → « analyse / diagnostic / bilan capillaire ».
//   - Le salon MESURE, il ne devine pas. Ton premium, technique, rassurant.
// Le CTA renvoie TOUJOURS vers la consultation, jamais vers un produit.
// Textes PROVISOIRES — à affiner.
//
// Deux usages :
//   1) `salon`  → bloc FUSIONNÉ consultation + analyse (pages salon, variante "moyenne", double photo).
//                 {ville} est remplacé par le composant → contenu localisé (SEO/GEO), pas de duplicate strict.
//   2) analyse seule (accroche/lede/etapes/suivi) → accueil / LP / page consultation (variantes courte & complète).

import type { ImageMetadata } from 'astro';
// Photo analyse à venir : « la pince à capteur en action pendant la consultation ».
// Quand elle sera prête : décommenter l'import + renseigner `image`.
// import analyseImg from '../assets/analyse-capillaire/consultation.webp';

export interface AcBenefice {
  titre: string;
  texte: string;
}
export interface AcEtape {
  num: string;
  titre: string;
  texte: string;
}

export const analyseCapillaire = {
  // ════ Bloc FUSIONNÉ consultation + analyse — pages salon (variante "moyenne") ════
  salon: {
    eyebrow: 'Notre signature',
    titre: 'La consultation visagiste, avant chaque coupe',
    // {ville} remplacé au rendu par le composant (localisation SEO/GEO).
    lede:
      'Au salon de {ville}, chaque coupe commence par une vraie consultation : morphologie du visage, nature du cheveu, mode de vie. Et pour ne rien laisser au hasard, une analyse mesure la santé interne de la fibre, au-delà de ce que l’œil perçoit.',
    benefices: [
      { titre: 'Coupe pensée pour votre visage', texte: 'Le geste suit votre morphologie, votre cheveu, votre quotidien.' },
      { titre: 'La santé du cheveu, mesurée', texte: 'Un capteur lit l’état interne de la fibre, invisible à l’œil nu.' },
      { titre: 'Des recommandations sur-mesure', texte: 'Un diagnostic objectif, pas une estimation à vue.' },
      { titre: 'Le suivi visite après visite', texte: 'On mesure l’évolution dans le temps et on ajuste.' },
    ] as AcBenefice[],
    cta: { label: 'Découvrir la consultation', href: '/consultation-visagiste-coloriste' },
  },

  // ════ Analyse seule — accueil / LP / page consultation (variantes courte & complète) ════
  eyebrow: 'Diagnostic capillaire',
  titre: 'Vos cheveux, analysés en profondeur',
  // COURTE (accueil / LP) — l'accroche qui répond à la question que se pose le client.
  accroche: 'Comment vont vraiment vos cheveux ? Pendant la consultation, on le mesure, au lieu de le deviner.',
  // MOYENNE / COMPLÈTE — le lede sous le titre.
  lede:
    'Un capteur de dernière génération lit l’état interne de la fibre, sa force et sa santé, au-delà de ce que l’œil perçoit. Un diagnostic objectif, pour des recommandations vraiment sur-mesure.',
  benefices: [
    { titre: 'Mesuré, pas deviné', texte: 'On part de données réelles, jamais d’une estimation à vue.' },
    { titre: 'La santé interne révélée', texte: 'Ce qui se joue dans la fibre, invisible à l’œil nu, devient lisible.' },
    { titre: 'Un indice personnalisé', texte: 'Un repère clair de la santé de vos cheveux, propre à vous.' },
    { titre: 'Le suivi dans le temps', texte: 'Visite après visite, on mesure l’évolution et on ajuste.' },
  ] as AcBenefice[],
  // COMPLÈTE — « comment ça marche » (page consultation).
  etapes: [
    { num: '01', titre: 'La mesure', texte: 'Pendant la consultation, le capteur relève en quelques secondes l’état interne de votre fibre. Indolore, sans produit.' },
    { num: '02', titre: 'La lecture', texte: 'Votre coiffeur lit le diagnostic avec vous : ce que révèlent les mesures, en clair.' },
    { num: '03', titre: 'Les recommandations', texte: 'Un plan sur-mesure, ajusté à ce que vos cheveux montrent, et suivi à chaque visite.' },
  ] as AcEtape[],
  // COMPLÈTE — développé du suivi dans le temps.
  suivi:
    'Vos mesures sont conservées d’une visite à l’autre. On compare, on voit ce qui progresse, on ajuste le soin. Votre diagnostic devient un fil dans le temps, pas une photo isolée.',
  cta: { label: 'Découvrir la consultation', href: '/consultation-visagiste-coloriste' },

  // Photo de l'analyse (pince en action) — placeholder pour l'instant → cadre générique.
  image: undefined as ImageMetadata | undefined,
  imageAlt: 'Analyse capillaire pendant la consultation, au salon Eric Di Martino',
};
