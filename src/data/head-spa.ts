// Données de contenu — page HEAD SPA Grenoble (design sombre).
// Contenu EN DUR, séparé du design (src/pages/head-spa-grenoble.astro).
// Bienfaits volontairement formulés « bien-être / sensoriel » (aucune allégation
// médicale ni étude chiffrée). Tarifs et durées PROVISOIRES, à confirmer.

export interface HsEtape { num: string; titre: string; duree: string; texte: string }
export interface HsBienfait { titre: string; texte: string; caption: string; icon: string }
export interface HsFormule { badge?: string; nom: string; prix: string; duree: string; points: string[]; highlight?: boolean }
export interface HsHoraire { jour: string; valeur: string; ferme?: boolean }

export const headSpa = {
  ville: 'Grenoble',
  telephone: '04 76 46 07 04',
  reservationUrl: '#reserver', // déclenche la modale Planity (salon résolu via planityKey, voir BookingModal.astro)
  salonHref: '/salon-de-coiffure/grenoble',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=6+place+Victor+Hugo+38000+Grenoble',

  hero: {
    eyebrow: 'Rituel signature · Grenoble',
    titre: 'Head Spa',
    titreEm: 'japonais',
    lede:
      "Un soin du cuir chevelu d'inspiration japonaise. Vapeur tiède, massage crânien, rituels d'huiles précieuses — un voyage sensoriel pour relâcher le mental et révéler la beauté du cheveu.",
    meta: [
      { label: 'Durée', valeur: '1h15 – 2h30' },
      { label: 'À partir de', valeur: '120 €' },
      { label: 'Lieu', valeur: 'Salon Grenoble' },
    ],
  },

  // I — Le rituel
  intro: {
    numero: 'I',
    eyebrow: 'Le rituel',
    titre: 'Le Head Spa, c’est quoi ?',
    paragraphes: [
      'Né dans les salons de Tokyo, le Head Spa est le pendant capillaire du massage shiatsu — un soin profond du cuir chevelu, traité comme on traite la peau du visage.',
      'Il associe diagnostic du cuir chevelu, vapeur d’eau tiède, exfoliation aux huiles essentielles et massage crânien lent. Un soin technique, mais une expérience avant tout sensorielle : on s’allonge, on ferme les yeux, et on disparaît, le temps d’un rituel.',
      'Inspiré des rituels japonais et adapté aux cuirs chevelus européens, il est pratiqué exclusivement dans la cabine dédiée du salon de Grenoble.',
    ],
    citation: {
      texte: 'On ne soigne pas un cheveu sec, on apaise un cuir chevelu fatigué.',
      auteur: 'Eric Di Martino — Maître coiffeur',
    },
  },

  // II — Le déroulé
  deroule: {
    numero: 'II',
    eyebrow: 'Le déroulé',
    titre: 'Cinq étapes, un vrai moment pour soi',
    intro:
      'Chaque rituel suit le même protocole, transmis par notre maître coiffeur. La durée totale varie selon la formule choisie — l’enchaînement reste le même.',
    etapes: [
      { num: '01', titre: 'Diagnostic du cuir chevelu', duree: '10 min', texte: 'Analyse à la loupe lumineuse. On identifie la nature du cuir chevelu — sec, sensible, gras, irrité — et on choisit l’huile essentielle adaptée.' },
      { num: '02', titre: 'Bain de vapeur tiède', duree: '8 min', texte: 'Une fine vapeur d’eau de source ouvre les follicules et prépare le cuir chevelu à recevoir les actifs. La sensation est cocooning, jamais brûlante.' },
      { num: '03', titre: 'Exfoliation aux huiles précieuses', duree: '12 min', texte: 'Un mélange d’huiles bio (jojoba, ricin, romarin) appliqué en gestes lents, pour débarrasser le cuir chevelu des résidus de pollution et de sébum.' },
      { num: '04', titre: 'Massage crânien shiatsu', duree: '20 min', texte: 'Le cœur du rituel : points d’acupression, drainage du cuir chevelu, étirement de la nuque. La plupart de nos clientes s’endorment ici — c’est bon signe.' },
      { num: '05', titre: 'Rinçage et finition', duree: '15 min', texte: 'Rinçage à l’eau tiède, shampooing doux et soin nourrissant. On termine par un brushing léger ou un séchage à l’air libre, au choix.' },
    ] as HsEtape[],
  },

  // Les bienfaits (formulation bien-être, sans allégation médicale)
  bienfaits: {
    eyebrow: 'Les bienfaits',
    titre: 'Plus qu’un soin, une parenthèse',
    intro: 'Le Head Spa agit sur le cuir chevelu, le cheveu et l’esprit. Six bienfaits que nos clientes nous rapportent, séance après séance.',
    items: [
      { titre: 'Anti-stress profond', texte: 'Un relâchement immédiat des tensions, du corps comme de l’esprit.', caption: 'Dès la séance', icon: 'leaf' },
      { titre: 'Sommeil apaisé', texte: 'Le massage crânien lent invite à un état de détente propice au repos.', caption: 'Détente profonde', icon: 'moon' },
      { titre: 'Cuir chevelu rééquilibré', texte: 'Tiraillements, démangeaisons : un cuir chevelu nettoyé en douceur et apaisé.', caption: 'Confort retrouvé', icon: 'drop' },
      { titre: 'Circulation stimulée', texte: 'Le drainage du cuir chevelu oxygène et tonifie la racine du cheveu.', caption: 'Cheveu fortifié', icon: 'wave' },
      { titre: 'Brillance & souplesse', texte: 'Cheveu dépollué et nourri, plus lumineux et soyeux dès la première fois.', caption: 'Effet visible', icon: 'sparkle' },
      { titre: 'Mental délesté', texte: 'Une heure pour soi, sans téléphone, sans regard. Le luxe contemporain.', caption: 'L’effet le plus rapporté', icon: 'mind' },
    ] as HsBienfait[],
  },

  // III — Tarifs & formules (PROVISOIRES)
  tarifs: {
    numero: 'III',
    eyebrow: 'Tarifs & formules',
    titre: 'Trois rituels, une seule attention',
    intro:
      'Du rituel d’éveil à l’expérience signature — choisissez le rituel qui vous correspond. Brushing inclus dans chaque rituel.',
    formules: [
      { badge: 'L’éveil', nom: 'Rituel Éveil', prix: '180', duree: '2h', points: ['Diagnostic du cuir chevelu', 'Vapeur tiède', 'Massage crânien', 'Brushing inclus'] },
      { badge: 'Le plus complet', nom: 'Rituel Signature', prix: '220', duree: '2h30', highlight: true, points: ['Diagnostic complet à la loupe', 'Vapeur d’eau de source', 'Exfoliation aux huiles précieuses', 'Massage crânien shiatsu', 'Soin nourrissant', 'Brushing inclus'] },
      { badge: 'Au masculin', nom: 'Rituel Homme', prix: '120', duree: '1h15', points: ['Diagnostic personnalisé', 'Soins ciblés', 'Massage relaxant', 'Brushing inclus'] },
    ] as HsFormule[],
    // Duo & cures (réservation par téléphone — 04 76 46 07 04)
    extras: [
      { nom: 'Rituel Duo Éveil', prix: 'dès 350 €', detail: '2h · à deux' },
      { nom: 'Cure 6 mois — Éveil', prix: '450 €', detail: 'Éveil + brushing' },
      { nom: 'Cure 12 mois — Éveil', prix: '900 €', detail: 'Éveil + brushing' },
    ],
  },

  // L'atmosphère (galerie — cadres dégradés provisoires en attendant les vraies photos)
  atmosphere: {
    eyebrow: 'L’atmosphère',
    titre: 'La cabine, cocon de lumière',
    photos: ['Vapeur', 'Bougie', 'Eau de source', 'Massage', 'Huiles précieuses'],
  },

  // Lieu
  lieu: {
    eyebrow: 'Pratiqué exclusivement à',
    titre: 'Notre cabine signature',
    nom: 'Salon Grenoble',
    adresse: '6 place Victor Hugo',
    codePostal: '38000',
    horaires: [
      { jour: 'Mardi – Vendredi', valeur: '9h – 19h' },
      { jour: 'Samedi', valeur: '9h – 18h' },
      { jour: 'Dimanche & Lundi', valeur: 'Fermé', ferme: true },
    ] as HsHoraire[],
  },

  faq: [
    { question: 'Faut-il avoir les cheveux sales ou propres ?', reponse: 'L’idéal est d’arriver avec un cheveu lavé la veille — ni trop propre, ni gras. Cela permet à l’exfoliation et au massage de travailler efficacement sans alourdir le cuir chevelu.' },
    { question: 'Combien de séances pour voir un résultat ?', reponse: 'L’effet relaxant est immédiat, dès la première séance. Pour un cuir chevelu inconfortable, un cycle de 3 à 4 séances espacées de 3 semaines est conseillé.' },
    { question: 'Le Head Spa convient-il aux cheveux colorés ?', reponse: 'Oui, et c’est même conseillé. Le rituel utilise des huiles bio sans sulfate qui respectent la couleur, et un cuir chevelu apaisé garde mieux sa couleur dans le temps.' },
    { question: 'Puis-je l’offrir en cadeau ?', reponse: 'Oui. Nous proposons un coffret cadeau pour chacune des trois formules, valable 1 an, à retirer en salon ou à recevoir par voie postale.' },
    { question: 'Le rituel est-il fait pour les hommes ?', reponse: 'Absolument. Le Head Spa est unisexe — environ un tiers de notre clientèle est masculine. Les hommes apprécient particulièrement l’effet sur le cuir chevelu et la décontraction des cervicales.' },
    { question: 'Peut-on le combiner avec une coupe ou une couleur ?', reponse: 'Oui, le Head Spa s’intègre parfaitement avant une coupe ou une couleur. Précisez-le à la réservation : nous adaptons le planning pour enchaîner les soins sans rupture.' },
  ],

  // Instagram du salon de Grenoble (lien + sameAs schema). Galerie = placeholders provisoires.
  instagram: {
    eyebrow: 'Sur Instagram',
    titre: 'Le rituel, en images',
    texte: 'Coulisses de la cabine, avant/après et instants suspendus — suivez le quotidien du salon.',
    handle: '@salon_eric_di_martino_grenoble',
    url: 'https://www.instagram.com/salon_eric_di_martino_grenoble/',
  },

  cta: {
    eyebrow: 'Prêt·e à respirer ?',
    titre: 'Une heure pour vous',
    texte: 'Réservez votre rituel Head Spa au salon de Grenoble. Confirmation immédiate, annulation gratuite jusqu’à 24h avant.',
  },

  seo: {
    title: 'Head Spa japonais à Grenoble, place Victor Hugo | Eric Di Martino',
    description:
      'Head Spa d’inspiration japonaise place Victor Hugo à Grenoble : diagnostic du cuir chevelu, vapeur tiède, massage crânien. Rituels 1h15 à 2h30, dès 120 €.',
  },
};
