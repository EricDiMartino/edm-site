// ============================================================
// ACADEMY LEADER — page Ouvrir un salon, version « gains » (13/10/2026).
// Source : atelier « Page Ouvrir un salon » (artefact claude.ai RR5o2wpJU9TqnSUeRNtNz7).
// Textes du hero / bloc franchise : franchise.ts. SEO / FAQ / appel final : pages.ts.
// ============================================================

export const heroSub = "Une équipe formée, une communication prise en charge, et tu gardes la liberté de ton concept.";
/** Phrase-clé du persona, mise en avant sous le titre (13/10/2026). */
export const heroClaim = { h: "Tout ce qu'apporte une franchise.", chips: ["0 € de droit d'entrée", '0 € de redevance'] };

/** Bloc « Franchise ou indépendant » : 3 piliers (remplace colonnes + comparatif, 13/10/2026). */
export const piliers = [
  { k: 'Formation', img: 'pilier-formation-coiffure', alt: 'Eric Di Martino accompagnant une coupe en salon', t: 'La formation au centre', p: 'Chaque collaborateur suit un parcours pensé pour lui.', list: ['Collaborateurs accompagnés', 'Parcours de formation personnalisé', 'Coupe et technique'] },
  { k: 'Fournisseurs', img: 'pilier-fournisseurs-coiffure', alt: 'Produits professionnels de coiffure en salon', big: '-30 %', t: 'Des tarifs négociés', p: "Jusqu'à -30 % grâce aux conditions obtenues avec nos partenaires.", partners: ["L'Oréal", 'Mobicoif', 'Ybera', 'ghd', 'Schwarzkopf'] },
  { k: 'Communication', img: 'pilier-communication-salon-coiffure', alt: 'Photo de coiffure prise pour les réseaux sociaux du salon', t: 'Ta communication prise en charge', p: "Ton salon est visible avant même d'ouvrir.", list: ['Stratégie de lancement', 'Site internet', 'Réseaux sociaux'] },
];

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
  h2b: "tu n'as plus qu'à coiffer.",
  ouverture: [
    { t: 'Une communication gérée', p: "Stratégie, site internet et réseaux sociaux : on la prend en charge pour que tes premiers rendez-vous soient pris avant l'ouverture.", tags: ['Stratégie', 'Site internet', 'Réseaux sociaux'] },
    { t: 'Un plan de formation pour ton équipe', p: 'Un parcours personnalisé pour chaque collaborateur, de la technique à la consultation, construit avec toi.', tags: ['Parcours personnalisé', 'Technique', 'Consultation'] },
    { t: 'Un business plan préparé et précis', p: 'Prévisionnel, coût minute, grille tarifaire : des chiffres solides pour décider, et pour convaincre ta banque.', tags: ['Prévisionnel', 'Coût minute', 'Grille tarifaire'] },
    { t: 'Un concept complet', p: "Ton identité, prête le jour de l'ouverture.", tags: ['Dossier de présentation', 'Dossier bancaire', 'Décoration', 'Plan du salon'] },
    { t: 'Des partenaires financiers', p: 'Banque, comptable, assurance : on te met en lien avec des partenaires de confiance.', tags: ['Banque', 'Comptable', 'Assurance'] },
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
  preuveTitre: ['Notre dernière ouverture', 'de 180 K€ à 340 K€'],
  preuveSous: 'Grenoble, février 2026',
  preuveTexte: "200 m² place Victor Hugo, avec Head Spa et espace barbier : 180 000 € de chiffre d'affaires avant reprise, 340 000 € projetés en fin de première année.",
  preuveFine: '340 000 € : projection à date.',
  plaquette: {
    label: 'La plaquette',
    h: "Tout le détail de l'accompagnement, en 4 pages.",
    points: ['Ce que tu as en main le jour de l\'ouverture', 'Les 7 étapes, une par une', 'Le cas de Grenoble en chiffres', 'Franchise ou indépendant, point par point'],
    p: 'Télécharge la plaquette : tout ce qu\'on prépare avec toi avant l\'ouverture, en détail.',
    btn: 'Recevoir la plaquette',
    fine: 'PDF envoyé tout de suite. Pas de spam.',
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
  prioGain: { com: 'Une communication gérée', gestion: 'Un business plan préparé et précis', management: 'Un plan de formation pour ton équipe' },
  cta: { label: 'Réserver mon appel offert', sub: '30 min · avec un associé · sans engagement' },
};
