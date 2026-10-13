// ============================================================
// ACADEMY LEADER — page Ouvrir un salon, version « gains » (13/10/2026).
// Source : atelier « Page Ouvrir un salon » (artefact claude.ai RR5o2wpJU9TqnSUeRNtNz7).
// Textes du hero / bloc franchise : franchise.ts. SEO / FAQ / appel final : pages.ts.
// ============================================================

export const heroSub =
  "Une équipe formée, des plannings remplis, un concept qui t'appartient et deux ans à tes côtés. Tout ce qu'apporte une franchise, <b>sans droit d'entrée ni redevance.</b>";

export const erreur = {
  label: 'Ce que coûte une erreur',
  h2a: 'Chaque mauvais choix',
  h2b: 'se paye longtemps.',
  p: "Le positionnement tarifaire. Le recrutement. L'agencement. Les travaux. La négociation. La localisation. Aucune de ces décisions ne relève de la coiffure. Toutes se prennent avant d'ouvrir, et tu les paies ensuite pendant des années.",
  fin: "C'est pour ça qu'on intervient au démarrage du projet, et pas à l'ouverture.",
  annees: 7,
};

export const gains = {
  label: 'Ce que tu gagnes',
  h2a: "Le jour de l'ouverture,",
  h2b: 'tout est déjà en place.',
  ouverture: [
    { t: 'Des plannings déjà remplis', p: "Ta communication démarre avant l'ouverture : réseaux, site et stratégie de lancement. Tes premiers rendez-vous sont pris avant que tu lèves le rideau.", tags: ['Réseaux sociaux', 'Site', 'Stratégie de lancement'] },
    { t: 'Une équipe complète et formée', p: 'De 2 à 5 personnes selon ton projet, recrutées avec toi et formées à nos méthodes, prêtes le premier jour.', tags: ['Recrutement', 'Formation à nos méthodes'] },
    { t: 'Des chiffres qui tiennent', p: "Du prévisionnel à ta grille tarifaire, chaque prix est calculé pour te laisser une marge avant même d'ouvrir.", tags: ['Prévisionnel', 'Coût minute', 'Grille tarifaire'] },
    { t: "Un concept qui t'appartient", p: 'Ton nom, ton identité, prêts à convaincre ta banque.', tags: ['Dossier de présentation', 'Dossier bancaire', 'Décoration', 'Plan du salon'] },
    { t: 'Nos outils de gestion', p: 'Les outils développés pour piloter nos propres salons, réservés à nos membres.', tags: [] },
  ],
  deuxAnsLabel: 'Pendant 2 ans',
  deuxAns: [
    { t: 'Des tarifs fournisseurs négociés', p: 'On négocie pour toi, et tu profites des partenariats signés avec les plus grandes marques nationales.' },
    { t: 'Un gérant accompagné', p: "Un devis, une embauche, un prix à revoir : tu nous appelles, on décide ensemble. Et une semaine de séminaire dans une villa d'exception, autour d'un projet réel sorti de terre." },
    { t: 'Une équipe qui progresse', p: 'Accès à toute notre bibliothèque de formation pour ton équipe.' },
  ],
};

export const engagement = {
  label: 'Notre engagement',
  h: 'Une garantie de résultat sur tes deux premières années.',
  p: "Au démarrage, on s'engage par écrit sur un objectif de résultat pour tes deux premières années. Si tu as appliqué toutes nos recommandations et qu'il n'est pas atteint, la garantie s'applique.",
  fine: "Modalités fixées dans ta convention d'accompagnement",
  preuveLabel: 'Notre dernière ouverture · Grenoble, février 2026',
  preuveChiffre: '180 K€ → 340 K€',
  preuveTexte: "200 m² place Victor Hugo, avec Head Spa et espace barbier : 180 000 € de chiffre d'affaires avant reprise, 340 000 € projetés en fin de première année.",
  preuveFine: '340 000 € : projection à date.',
  plaquette: {
    h: "Tout le détail de l'accompagnement",
    p: 'Télécharge la plaquette : ce qui est fait avant l\'ouverture, ce qui est inclus pendant 2 ans, notre engagement.',
    btn: 'Recevoir la plaquette',
    file: '/formation/plaquette-ouverture-salon-de-coiffure-academy-leader.pdf',
  },
};

/** Simulateur de projet : questions, notation (3 piliers), textes du résultat. */
export const sim = {
  label: 'Ton plan d\'ouverture',
  h2a: 'Ton projet,',
  h2b: 'en 2 minutes.',
  intro: "9 questions. Tu vois tout de suite le potentiel de ton projet, puis ton plan d'ouverture sur mesure.",
  questions: [
    { id: 's1', q: 'As-tu déjà un salon ?', o: ['Non', 'Oui, un', 'Oui, plusieurs'] },
    { id: 's2', q: 'Quel est ton projet ?', o: ['Ouvrir un salon', 'Ouvrir une franchise', "M'associer"] },
    { id: 's3', q: 'As-tu trouvé ton lieu ?', o: ['Pas encore', 'La ville', 'Le local'], p: 'moment', sc: [100, 70, 30] },
    { id: 's4', q: 'Quel positionnement vises-tu ?', o: ['Volume', 'Milieu de gamme', 'Haut de gamme'], p: 'ambition', sc: [30, 60, 100] },
    { id: 's5', q: 'Combien de collaborateurs vises-tu ?', o: ['Je démarre seul', '1 ou 2', '3 ou 4', '5 et plus'], p: 'equipe', sc: [20, 50, 80, 100] },
    { id: 's6', q: 'Les as-tu déjà trouvés ?', o: ['Oui, tous', 'En partie', 'Pas encore'], p: 'equipe', sc: [100, 60, 30], showIf: { q: 's5', in: [1, 2, 3] } },
    { id: 's7', q: "De 1 à 10, l'importance pour toi d'être accompagné sur…", type: 'scales', scales: [{ k: 'com', l: 'La communication' }, { k: 'gestion', l: 'La gestion' }, { k: 'management', l: 'Le management' }] },
    { id: 's8', q: "Combien d'heures par semaine veux-tu passer au fauteuil ?", o: ['Plus de 35 h', '20 à 35 h', '10 à 20 h', 'Moins de 10 h'], p: 'ambition', sc: [20, 50, 80, 100] },
    { id: 's9', q: 'Dans un monde parfait, combien de salons veux-tu ouvrir ?', o: ['1', '2 ou 3', '4 et plus'], p: 'ambition', sc: [40, 80, 100] },
  ],
  pillars: [
    { k: 'moment', n: 'Bon moment', lever: 'Ton levier n°1 : le timing', txt: "Une partie de ton projet est déjà engagée. On vérifie avec toi ces décisions avant d'aller plus loin : c'est là que se cachent les erreurs qui coûtent cher." },
    { k: 'ambition', n: 'Ambition', lever: 'Ton levier n°1 : ton ambition', txt: "Ton projet peut viser plus haut : positionnement, temps libéré du fauteuil, développement. On construit avec toi un salon qui te fait vivre sans t'enfermer derrière le fauteuil." },
    { k: 'equipe', n: 'Équipe', lever: 'Ton levier n°1 : ton équipe', txt: "Une équipe complète et formée dès l'ouverture fait la différence. On recrute et on forme avec toi, avant que tu lèves le rideau." },
  ],
  scoreTitle: 'Le potentiel de ton projet',
  bands: [
    { max: 45, t: "Ton projet a du potentiel, mais certaines décisions sont déjà engagées ou encore floues. C'est le moment de les cadrer avant qu'elles coûtent cher." },
    { max: 75, t: "Ton projet tient la route. Reste à sécuriser les décisions qui feront la différence le jour de l'ouverture." },
    { max: 101, t: "Ton projet est ambitieux et arrive au bon moment : rien n'est encore figé, tout peut être construit dans le bon ordre." },
  ],
  gate: { h: "Débloque ton plan d'ouverture", p: "L'équipe à recruter, tes priorités d'accompagnement et ce que tu gagnes avec nous. On t'en envoie aussi une copie.", btn: 'Voir mon plan' },
  /** gain mis en avant selon la priorité n°1 */
  prioGain: { com: 'Des plannings déjà remplis', gestion: 'Des chiffres qui tiennent', management: 'Une équipe complète et formée' },
  cta: { label: 'Réserver mon appel offert', sub: '30 min · avec un associé · sans engagement' },
};
