// ============================================================
// ACADEMY LEADER — tunnel : diagnostic → réserver → merci (pages noindex).
// Copie exacte de la maquette (tableaux Q, RES, callFlow, merciTodo et fonction segment()).
// ⏸️ Règles de routage (segment) et envoi vers GoHighLevel : à FINALISER (décisions D3/D4 du brief).
// ⏸️ Calendrier : créneaux fictifs de la maquette, à remplacer par l'embed GoHighLevel.
// ============================================================

export const tunnelSeo = {
  diag: { title: 'Diagnostic 2 minutes · Academy Leader' },
  resa: { title: 'Réserver ton entretien · Academy Leader' },
  merci: { title: "C'est confirmé · Academy Leader" },
};

export const questions = [
  { q: "Où en es-tu aujourd'hui ?", sub: 'On adapte la suite à ta situation.', o: ["J'ai un projet d'ouverture ou de reprise", 'Je dirige un salon', 'Je dirige plusieurs salons'] },
  { q: "Chiffre d'affaires annuel de ton salon", sub: 'Une fourchette suffit.', o: ['Pas encore ouvert', 'Moins de 150 000 €', '150 000 à 300 000 €', 'Plus de 300 000 €'] },
  { q: 'Combien de personnes dans ton équipe ?', sub: 'Toi non compris.', o: ['Je suis seul', '1 à 3', '4 à 8', '9 et plus'] },
  { q: "Combien d'heures passes-tu au fauteuil par semaine ?", sub: '', o: ['Moins de 10 h', '10 à 25 h', '25 à 40 h', 'Plus de 40 h'] },
  { q: "Qu'est-ce qui te freine le plus ?", sub: 'Choisis le plus important.', o: ['Ma rentabilité et mes prix', 'Un planning irrégulier', 'Mon équipe', 'Mon temps'] },
  { q: 'Connais-tu ton coût minute ?', sub: 'Ce que te laisse chaque prestation, à la minute, charges déduites.', o: ['Oui, précisément', 'À peu près', 'Non'] },
  { q: 'Ton objectif à 12 mois', sub: '', o: ['Ouvrir mon salon', 'Gagner du temps sans perdre de chiffre', 'Augmenter ma marge', 'Faire monter le niveau de mon équipe'] },
  { q: 'Quand veux-tu démarrer ?', sub: '', o: ['Ce mois-ci', 'Dans les 3 mois', 'Plus tard'] },
  { q: 'Es-tu prêt à investir dans ton développement ?', sub: 'Formations financées ou accompagnement à partir de 7 000 € HT.', o: ['Oui', "J'ai besoin d'en savoir plus", 'Non, je cherche uniquement du financé'] },
];

/** Résultats par segment. {fn} = prénom saisi (« Camille » par défaut, comme la maquette). */
export const resultats = {
  OUVERTURE: {
    h: '{fn}, ton projet est au bon moment pour être cadré.',
    p: "Avant de signer un bail, on regarde tes chiffres ensemble : zone, coût minute, prévisionnel. C'est le seul moment où changer d'avis ne coûte rien.",
    facts: [{ k: 'Offre', v: 'Ouvrir un salon' }, { k: 'Investissement', v: "Sur devis, annoncé à l'appel" }, { k: 'Disponibilité', v: '1 projet ce mois-ci' }],
    cta: 'Réserver mon appel projet (30 min)', ctaSub: 'Premier créneau dans 2 jours ouvrés', go: 'resa',
  },
  ACCOMPAGNEMENT: {
    h: "{fn}, ton salon est prêt pour l'accompagnement Salon Autonome.",
    p: "Ton chiffre d'affaires permet d'actionner les six leviers. L'entretien de validation confirme le point de départ et te laisse ton coût minute calculé, que tu continues ou non.",
    facts: [{ k: 'Offre', v: 'Salon Autonome · 6 mois' }, { k: 'Investissement', v: 'À partir de 7 000 € HT' }, { k: 'Places', v: '4 nouveaux gérants / mois' }],
    cta: 'Réserver mon entretien de validation', ctaSub: '30 min · visio · coût minute offert', go: 'resa',
  },
  FORMATION: {
    h: '{fn}, commence par une formation financée.',
    p: "Aujourd'hui, ton levier le plus rentable est ton équipe. Une formation d'un ou deux jours dans ton salon te rapportera plus que l'accompagnement, pour beaucoup moins cher.",
    facts: [{ k: 'Offre', v: 'Formation en salon' }, { k: 'Reste à charge', v: 'Dès 0 € *' }, { k: 'Financement', v: 'OPCO EP ou FAFCEA' }],
    cta: 'Calculer mon reste à charge', ctaSub: 'Catalogue + simulateur', go: 'form',
  },
};

export const callFlow = [
  { n: '1', t: 'On valide ton point de départ', p: 'Tes réponses au diagnostic, ton dernier bilan.' },
  { n: '2', t: 'On calcule ton coût minute', p: 'Sur tes 3 prestations principales, ensemble.' },
  { n: '3', t: "On te dit si c'est ton moment", p: 'Et sinon, par quoi commencer. Sans relance.' },
];

export const merciTodo = [
  { n: '01', t: 'Réponds « OK » au SMS', p: 'Tu viens de le recevoir. Ça confirme ton créneau.' },
  { n: '02', t: 'Prépare ton dernier bilan', p: 'Et le prix de tes 3 prestations principales.' },
  { n: '03', t: 'Regarde la vidéo ci-dessus', p: '90 secondes pour savoir exactement comment ça se passe.' },
];

export const calBtns = ['Google Agenda', 'Apple Calendar', 'Outlook'];
