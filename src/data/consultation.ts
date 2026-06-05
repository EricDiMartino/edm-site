// Données — LANDING PAGE Consultation (trafic Ads Google/Meta). Conversion max.
// Form de rappel (lead) + offre togglable. AUCUN prix. Textes optimisés conversion.

export const consultation = {
  // ---- OFFRE (togglable) — on l'allume quand le wording + la date sont validés ----
  offre: {
    actif: false, // ← passer à true pour activer le bandeau + badge urgence
    quantite: 10, // « 10 consultations offertes »
    date: '[date à définir]', // ex. « 17 mai 2026 »
  },

  // ---- FORM de rappel ----
  form: {
    titre: 'Votre consultation offerte',
    sousTitre: 'Laissez vos coordonnées : nos experts vous rappellent pour faire le point sur votre projet.',
    submit: 'Être rappelé·e',
    confirmation: 'Merci ! Nous avons bien reçu votre demande — un expert vous rappelle très vite.',
    rgpd: 'Vos données servent uniquement à vous recontacter. Aucune revente.',
    endpoint: '', // TODO: URL du formulaire (Formspree / GoHighLevel / webhook)
  },

  hero: {
    eyebrow: 'Consultation visagiste',
    titre: 'Trouvez la coupe et la couleur qui vous vont',
    titreEm: 'vraiment',
    lede:
      '30 minutes en tête-à-tête avec un visagiste confirmé : bilan, diagnostic et préconisations sur-mesure. Sans engagement.',
  },

  inclus: {
    titre: 'Ce que comprend votre consultation',
    duree: '30 min · en tête-à-tête',
    items: [
      { titre: 'Bilan capillaire', texte: 'État, nature et besoins réels de votre cheveu.' },
      { titre: 'Diagnostic visagiste & coloriste', texte: 'Morphologie du visage, teint, mode de vie.' },
      { titre: 'Préconisations sur-mesure', texte: 'La coupe et la couleur qui vous correspondent vraiment.' },
      { titre: 'Astuces & conseils', texte: 'Comment entretenir et coiffer au quotidien, simplement.' },
    ],
  },

  etapes: {
    titre: 'Comment ça marche',
    items: [
      { num: '01', titre: 'Laissez vos coordonnées', texte: 'Le formulaire prend 30 secondes.' },
      { num: '02', titre: 'Nos experts vous rappellent', texte: 'Pour faire le point sur votre projet, dans la limite des places.' },
      { num: '03', titre: 'Votre consultation en salon', texte: 'Bilan, diagnostic et plan d’action, dans le salon de votre choix.' },
    ],
  },

  besoins: {
    titre: 'C’est pour vous si…',
    items: [
      { titre: 'Envie de changement', texte: 'Une coupe enfin adaptée à votre visage et à votre quotidien.' },
      { titre: 'Cheveux indomptables', texte: 'Des solutions concrètes pour les dompter et les soigner.' },
      { titre: 'Besoin de confiance', texte: 'Un moment rien que pour vous, avec un pro à l’écoute.' },
      { titre: 'Une autre envie', texte: 'Couleur, lissage, soin, extensions, mariage : on en parle.' },
    ],
  },

  faq: [
    { question: 'Ça m’engage à quoi ?', reponse: 'À rien. C’est un échange-conseil avec un expert, sans aucune obligation d’achat.' },
    { question: 'Combien de temps dure la consultation ?', reponse: '30 minutes, en tête-à-tête avec un visagiste confirmé.' },
    { question: 'Dans quel salon ?', reponse: 'Au choix : Grenoble, Montbonnot, Voiron ou Aix-les-Bains.' },
    { question: 'Quand serai-je rappelé·e ?', reponse: 'Rapidement, dans la limite des places disponibles.' },
    { question: 'Et après la consultation ?', reponse: 'Vous repartez avec des préconisations claires. Vous décidez ensuite, librement, de réserver une prestation.' },
  ],

  ctaFinal: {
    titre: 'Prêt·e à changer de tête ?',
    texte: 'Laissez vos coordonnées — on s’occupe du reste.',
  },

  seo: {
    title: 'Consultation visagiste offerte — coiffeur Grenoble | Eric Di Martino',
    description:
      'Consultation visagiste & coloriste de 30 min : bilan, diagnostic et préconisations sur-mesure. Nos experts vous rappellent. Grenoble, Montbonnot, Voiron, Aix-les-Bains. Sans engagement.',
  },
};
