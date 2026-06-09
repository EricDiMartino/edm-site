// Données de contenu — HUB /prestations-coiffure.
// Vue d'ensemble : consultation + cartes prestations (→ pages dédiées) + maillage.
// AUCUN PRIX EN DUR : les tarifs varient par salon et dans le temps → source de
// vérité = le widget de réservation. Le site reste descriptif (SEO/GEO) + CTA.
// Textes « provisoires » = placeholders cohérents (étape 5 : vrais textes).

export interface PrestationCarte {
  titre: string;
  texte: string;
  lien: string;
  lienLabel?: string;
  icon: string; // clé d'icône (voir PREST_ICONS dans la page)
}

export const prestations = {
  reservationUrl: '#reserver', // modale Planity : pages sans planityKey -> sélecteur de salon (voir BookingModal.astro)

  hero: {
    eyebrow: 'Prestations',
    titre: 'Coupe, couleur, soin —',
    titreEm: 'pensés pour vous',
    lede:
      'Chaque prestation commence par une vraie consultation visagiste, dans nos quatre salons. Coupe, coloration, lissage, soins, extensions, head spa et mariage — sur rendez-vous.',
    meta: 'Dans nos 4 salons · Sur rendez-vous',
  },

  // Le différenciateur — on mène avec la consultation.
  consultation: {
    eyebrow: 'Le point de départ',
    titre: 'La consultation visagiste, avant tout',
    paragraphes: [
      'Avant chaque transformation, un diagnostic fondé sur trois piliers : votre mode de vie, la santé de votre cheveu et la géométrie de votre visage.',
      'C’est lui qui oriente la coupe et la couleur — pour un résultat qui vous ressemble et se vit simplement, au quotidien. Le montant de la consultation est déduit le jour du rendez-vous.',
    ],
    lien: { label: 'Découvrir la consultation', href: '/consultation-visagiste-coloriste' },
  },

  // Cartes prestations → pages dédiées (certaines à créer ensuite).
  cartesTitre: 'Nos prestations',
  cartes: [
    { titre: 'Coupe & coiffage', texte: 'Coupe sur-mesure pensée pour le visage, brushing et coiffage — après diagnostic visagiste.', lien: '/coupe-coiffage-visagiste', icon: 'scissors' },
    { titre: 'Coloration & balayage', texte: 'Coloration, balayage, ombré, gloss : un éclat sur-mesure, dans le respect du cheveu.', lien: '/coloration-balayage', icon: 'drop' },
    { titre: 'Lissage & soins', texte: 'Lissage, botox capillaire, soins profonds et masques : discipline, brillance et réparation.', lien: '/lissage-soin', icon: 'leaf' },
    { titre: 'Extensions', texte: 'Longueur, volume ou densité : pose sur-mesure, entretien et dépose, dans le respect du cheveu.', lien: '/extension-cheveux-grenoble', icon: 'strands' },
    { titre: 'Head spa', texte: 'Rituel japonais du cuir chevelu : vapeur, massage crânien, huiles précieuses. Au salon de Grenoble.', lien: '/head-spa-grenoble', icon: 'spa' },
    { titre: 'Coiffure de mariage', texte: 'Essai, chignon et coiffure du jour J — un accompagnement dédié pour votre cérémonie.', lien: '/coiffeur-mariage', icon: 'ring' },
  ] as PrestationCarte[],

  // Maillage local (le local passe par la donnée + le maillage, pas l'URL par ville).
  salons: {
    eyebrow: 'Où nous trouver',
    titre: 'Dans nos quatre salons',
    texte: 'Mêmes gestes, même exigence à Grenoble, Montbonnot, Voiron et Aix-les-Bains — et dans tout le bassin Isère et Savoie.',
    lien: { label: 'Voir nos salons', href: '/nos-salons-de-coiffure' },
  },

  faq: [
    {
      question: 'Les tarifs sont-ils les mêmes dans tous les salons ?',
      reponse:
        'Certains tarifs varient d’un salon à l’autre. Le prix exact de chaque prestation s’affiche au moment de la réservation en ligne, salon par salon.',
    },
    {
      question: 'Faut-il une consultation avant une couleur ?',
      reponse:
        'Pour toute transformation (couleur, éclaircissement, balayage), une consultation préalable est nécessaire : elle permet d’établir le projet et un devis précis.',
    },
    {
      question: 'Peut-on réserver en ligne ?',
      reponse:
        'Oui, la plupart des prestations se réservent en ligne. Le head spa et certaines prestations sur devis se réservent par téléphone.',
    },
    {
      question: 'Proposez-vous des facilités de paiement ?',
      reponse: 'Oui, le paiement en 3 ou 4 fois est possible avec Alma.',
    },
  ],

  ctaTitre: 'Offrez-vous un vrai moment.',
  ctaTexte: 'Réservez votre rendez-vous dans le salon de votre choix. Consultation comprise.',

  seo: {
    title: 'Prestations de coiffure : coupe, couleur, soin | Eric Di Martino',
    description:
      'Coupe, coloration, balayage, lissage, soins, extensions, head spa et mariage chez Eric Di Martino : chaque prestation débute par la consultation visagiste.',
  },
};
