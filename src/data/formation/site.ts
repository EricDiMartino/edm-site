// ============================================================
// ACADEMY LEADER — données communes (nav, pied de page, identité légale).
// Texte = maquette validée, mot à mot. Modifier ici = modifié sur toutes les pages /formation/.
// ============================================================

export const BASE = '/formation';

export const url = {
  accueil: `${BASE}/`,
  ouvrir: `${BASE}/ouvrir-un-salon-de-coiffure`,
  accompagnement: `${BASE}/accompagnement-salon-de-coiffure`,
  formations: `${BASE}/formations-coiffure`,
  diagnostic: `${BASE}/diagnostic`,
  reserver: `${BASE}/reserver`,
  merci: `${BASE}/merci`,
  mentions: `${BASE}/mentions-legales`,
  cgv: `${BASE}/cgv`,
  confidentialite: `${BASE}/confidentialite`,
};

/** Liens du header (hors CTA) */
export const nav = [
  { label: 'Ouvrir un salon', href: url.ouvrir },
  { label: 'Salon Autonome', href: url.accompagnement },
  { label: 'Formations', href: url.formations },
];

export const ctaDiagnostic = { label: 'Faire le diagnostic', href: url.diagnostic };

/** Colonne « Parcours » du pied de page (maquette). « L'équipe » → section « Qui te forme » de l'accueil
 *  en attendant la page équipe (V2). */
export const footerParcours = [
  { label: 'Ouvrir un salon de coiffure', href: url.ouvrir },
  { label: 'Accompagnement Salon Autonome', href: url.accompagnement },
  { label: 'Formations coiffure', href: url.formations },
  { label: "L'équipe", href: `${url.accueil}#equipe` },
];

/** Identité légale — pied de page de la maquette */
export const edxp = {
  nom: 'EDXP Formation',
  adresse: "1435 av. de l'Europe, 38330 Montbonnot-Saint-Martin",
  tel: '07 81 73 40 18',
  telHref: 'tel:+33781734018',
  lignes: [
    'SAS au capital de 1 000 € · RCS Grenoble 931 295 208',
    'NDA 84 38 10226 38',
    'Qualiopi n° 25FOR01783.1 · QUALITIA',
    'Référent handicap : Lucie Shobbrook',
  ],
};

/** Liens légaux (ajout intégration : obligatoires, absents de la maquette) */
export const legal = [
  { label: 'Mentions légales', href: url.mentions },
  { label: 'CGV', href: url.cgv },
  { label: 'Confidentialité', href: url.confidentialite },
];
