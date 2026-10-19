// ============================================================
// ACADEMY LEADER — tunnel : diagnostic → réserver → merci (pages noindex).
// Textes de la maquette pour réserver / merci (callFlow, merciTodo).
// ============================================================

export const tunnelSeo = {
  diag: { title: 'Diagnostic 2 minutes · Academy Leader' },
  resa: { title: 'Réserver ton entretien · Academy Leader' },
  merci: { title: "C'est confirmé · Academy Leader" },
};

// Questions, score, règles et résultats du diagnostic : voir diagnostic.ts.

export const callFlow = [
  { n: '1', t: 'On valide ton point de départ', p: 'Tes réponses au diagnostic, ton dernier bilan.' },
  { n: '2', t: 'On calcule ton coût minute', p: 'Sur tes 3 prestations principales, ensemble.' },
  { n: '3', t: "On te dit si c'est ton moment", p: 'Et sinon, par quoi commencer. Sans relance.' },
];

/** Appel « projet d'ouverture » (page /formation/reserver-ouverture). */
export const callFlowOuverture = [
  { n: '1', t: 'On parle de ton projet', p: "Ta ville, ton local, ton budget : où tu en es aujourd'hui." },
  { n: '2', t: 'On te partage nos conseils', p: "Ce qu'on a appris en ouvrant nos propres salons, appliqué à ton projet." },
  { n: '3', t: 'On valide ton éligibilité', p: "Si tu souhaites aller plus loin. Un seul projet par mois, sans relance." },
];

export const merciTodo = [
  { n: '01', t: 'Réponds « OK » au SMS', p: 'Tu viens de le recevoir. Ça confirme ton créneau.' },
  { n: '02', t: 'Prépare ton dernier bilan', p: 'Et le prix de tes 3 prestations principales.' },
  { n: '03', t: 'Regarde la vidéo ci-dessus', p: '90 secondes pour savoir exactement comment ça se passe.' },
];

export const calBtns = ['Google Agenda', 'Apple Calendar', 'Outlook'];
