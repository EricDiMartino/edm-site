// Données de contenu — page salon GRENOBLE.
// Contenu EN DUR, séparé du design (src/components/SalonPage.astro).
// → Modifier le contenu = éditer ce fichier. Le design ne bouge pas.
// Les textes marqués « provisoire » sont des placeholders cohérents,
// à remplacer par les vrais textes (étape 5 de la méthode page par page).

import type { ImageMetadata } from 'astro';
import hero from '../assets/salons/grenoble/hero.webp';
import expertise from '../assets/salons/grenoble/expertise.webp';
import headspa from '../assets/salons/grenoble/headspa.webp';
import barbier from '../assets/salons/grenoble/barbier.webp';
// Portrait d'équipe PROVISOIRE (image IA) — sera remplacé par les vrais portraits.
import equipePlaceholder from '../assets/salons/grenoble/equipe-placeholder.webp';

export interface Horaire {
  jour: string;
  valeur: string; // ex. "9h – 19h" ou "Fermé" (affichage)
  ferme?: boolean;
  jourEn?: string; // jour en anglais pour le schema (Monday…)
  opens?: string; // "09:00" — pour openingHoursSpecification
  closes?: string; // "19:00"
}
export interface ServicePhare {
  titre: string;
  texte: string;
  image?: ImageMetadata;
  lien?: string;
  lienLabel?: string; // libellé du lien (défaut « En savoir plus »)
  eyebrow?: string; // petit sur-titre en capitales
  points?: string[]; // liste courte de bénéfices (puces)
  prix?: string; // ex. "89 €" (badge sur l'image)
  prixDetail?: string; // ex. "1h · soin signature"
  sombre?: boolean; // true = bande sombre (esprit cocon), ex. head spa
}
export interface Membre {
  prenom: string;
  specialite?: string;
  photo?: ImageMetadata; // absent → initiale en repli
}
export interface FaqItem {
  question: string;
  reponse: string;
}
export interface Avis {
  note: string; // ex. "4,7"
  total: number; // nombre d'avis
  source: string; // ex. "Google"
  url?: string; // lien fiche Google (attribution)
  items: { texte: string; auteur: string; detail?: string; rating?: number }[];
}
export interface ChiffreCle {
  valeur: string; // ex. "200", "4,7 ★"
  label: string; // ex. "m² d'espace"
}
export interface Acces {
  label: string; // ex. "Parking" — affiché dans le badge
  detail?: string; // précision (provisoire) ; affichée en infobulle
}
export interface Prestation {
  titre: string;
  texte: string;
  caption?: string; // petite légende en capitales (sous le filet)
  icon?: string; // clé d'icône : extensions | mariage | coaching | soin (défaut : soin)
}
export interface SalonData {
  nom: string;
  ville: string;
  accroche: string; // grande accroche éditoriale (hero)
  titreSeo: string; // H1 descriptif (SEO local) — mesuré, jamais géant
  heroTexte: string; // lede sous le H1
  heroImage: ImageMetadata;
  reservationUrl: string;
  adresse: string;
  codePostal: string;
  telephone: string;
  horaires: Horaire[];
  mapsUrl?: string;
  geo?: { lat: number; lng: number };
  priceRange?: string; // ex. "€€€" (schema)
  areaServed?: string[]; // communes desservies (GEO local)
  googlePlaceId?: string; // pour fetch des avis Google au build
  acces?: Acces[];
  chiffres?: ChiffreCle[];
  citation?: { texte: string; auteur: string };
  expertise?: { titre: string; texte: string; image?: ImageMetadata; lien?: string };
  maison?: {
    numero?: string; // ex. "01"
    eyebrow: string;
    titre: string; // titre éditorial (contient le mot-clé local)
    paragraphes: string[]; // texte local riche (SEO/GEO)
    lien?: { label: string; href: string };
    image?: ImageMetadata; // sinon panneau placeholder
  };
  services: ServicePhare[];
  prestations?: {
    eyebrow?: string;
    titre: string;
    titreEm?: string; // tail mis en valeur (italique)
    texte?: string; // lede sous le titre
    items: Prestation[];
  };
  equipeTitre?: string;
  equipePlaceholder?: ImageMetadata; // portrait de repli tant qu'un membre n'a pas sa photo
  equipe: Membre[];
  faq: FaqItem[];
  avis?: Avis;
  ctaTitre?: string;
  seo: { title: string; description: string };
}

export const grenoble: SalonData = {
  // — Réel (saisi) —
  nom: 'Eric Di Martino',
  ville: 'Grenoble',
  accroche: "L'élégance, prise au mot.",
  titreSeo: 'Coiffeur et coloriste visagiste à Grenoble',
  adresse: '6 place Victor Hugo',
  codePostal: '38000',
  telephone: '04 76 46 07 04',
  heroImage: hero,
  reservationUrl: '#reserver', // TODO: remplacer par l'URL réelle de réservation
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=6+place+Victor+Hugo+38000+Grenoble',

  horaires: [
    { jour: 'Lundi', valeur: 'Fermé', ferme: true, jourEn: 'Monday' },
    { jour: 'Mardi', valeur: '9h – 19h', jourEn: 'Tuesday', opens: '09:00', closes: '19:00' },
    { jour: 'Mercredi', valeur: '9h – 19h', jourEn: 'Wednesday', opens: '09:00', closes: '19:00' },
    { jour: 'Jeudi', valeur: '9h – 19h', jourEn: 'Thursday', opens: '09:00', closes: '19:00' },
    { jour: 'Vendredi', valeur: '9h – 19h', jourEn: 'Friday', opens: '09:00', closes: '19:00' },
    { jour: 'Samedi', valeur: '9h – 18h', jourEn: 'Saturday', opens: '09:00', closes: '18:00' },
    { jour: 'Dimanche', valeur: 'Fermé', ferme: true, jourEn: 'Sunday' },
  ],

  // Geo/SEO local. Coordonnées place Victor Hugo (à affiner). areaServed = GEO local.
  geo: { lat: 45.1909, lng: 5.7263 },
  priceRange: '€€€',
  areaServed: ['Grenoble', 'Meylan', 'Saint-Martin-d’Hères', 'La Tronche', 'Échirolles'],
  googlePlaceId: 'ChIJ0Uu6VYT0ikcRBPdnb7f5mLc',

  // Badges d'accès (section infos pratiques) — détails PROVISOIRES à ajuster.
  acces: [
    { label: 'Parking', detail: 'Parking Lafayette à 2 min' },
    { label: 'Tramway', detail: 'Tram A & B — arrêt Victor Hugo' },
    { label: 'Accessible PMR', detail: 'Accès de plain-pied' },
  ],

  // Chiffres-clés (bandeau réassurance). « 200 m² » = salon flagship Grenoble.
  // 4,7 ★ · 500 avis : PROVISOIRE — à brancher sur les vrais avis Google plus tard.
  chiffres: [
    { valeur: '5', label: 'artistes' },
    { valeur: '200', label: 'm² d’espace' },
    { valeur: '4,7 ★', label: '500 avis Google' },
  ],

  // Citation signature d'Eric — texte PROVISOIRE.
  citation: {
    texte: 'On ne coiffe pas une tête, on dessine un visage.',
    auteur: 'Eric Di Martino',
  },

  // — Provisoire (textes placeholders cohérents) —
  heroTexte:
    'Coupe, couleur, head spa et barbier au cœur de Grenoble, place Victor Hugo. Une coiffure pensée pour vous, à partir d’une vraie consultation.',

  expertise: {
    titre: 'La consultation visagiste, avant chaque coupe',
    texte:
      'Avant chaque coupe ou couleur, nous prenons le temps : morphologie du visage, nature du cheveu, mode de vie. Un diagnostic précis pour un résultat qui vous ressemble et se vit simplement, au quotidien.',
    image: expertise,
    lien: '/consultation-visagiste-coloriste',
  },

  // Bloc « Notre maison » — texte local PROVISOIRE (porteur SEO/GEO : Grenoble, centre-ville, services).
  maison: {
    numero: '01',
    eyebrow: 'Notre maison',
    titre: 'Le salon de Grenoble.',
    paragraphes: [
      'Place Victor Hugo, en plein cœur de Grenoble, notre salon déploie 200 m² baignés de lumière naturelle — un écrin pensé pour que le geste prime.',
      'Coupe pensée pour le visage, coloration sur-mesure, soins capillaires et head spa : chaque rendez-vous commence par une vraie consultation, jamais par une grille tarifaire.',
    ],
    lien: { label: 'Découvrir nos prestations', href: '/prestations-coiffure' },
  },

  services: [
    {
      eyebrow: 'Signature exclusive',
      titre: 'Head spa à Grenoble',
      texte:
        'Une heure suspendue. Notre rituel d’inspiration japonaise associe massage du cuir chevelu, vapeur tiède et soin profond — pour un cheveu apaisé, un esprit relâché.',
      points: ['Diagnostic capillaire', 'Massage 20 minutes', 'Soin sur-mesure', 'Brushing inclus'],
      prix: '89 €',
      prixDetail: '1h · soin signature',
      image: headspa,
      lien: '/head-spa-grenoble',
      lienLabel: 'Découvrir le head spa',
      sombre: true,
    },
    {
      eyebrow: 'Au masculin',
      titre: 'Barbier à Grenoble, sur rendez-vous',
      texte:
        'Coupe, taille de barbe et entretien, avec la même exigence de précision et la même tranquillité. Discrètement, dans l’esprit de la maison.',
      points: ['Coupe & coiffage', 'Taille de barbe', 'Contours nets', 'Serviette chaude'],
      prix: 'dès 28 €',
      prixDetail: '30 min',
      image: barbier,
      lien: '#reserver',
      lienLabel: 'Prendre rendez-vous',
    },
  ],

  // Prestations complémentaires (grille) — textes PROVISOIRES, éditables par salon.
  prestations: {
    eyebrow: 'Aussi au salon',
    titre: 'Bien plus qu’une coupe,',
    titreEm: 'tout un savoir-faire',
    texte: 'Au-delà de la coupe et de la couleur, nos artistes vous accompagnent sur les grands rendez-vous comme au quotidien.',
    items: [
      { titre: 'Extensions', texte: 'Longueur, volume ou densité : pose sur-mesure, entretien et dépose, dans le respect du cheveu.', caption: 'Sur consultation', icon: 'extensions' },
      { titre: 'Coiffure de mariage', texte: 'Essai préalable, chignon et coiffure du jour J — un accompagnement dédié pour votre cérémonie.', caption: 'Sur devis', icon: 'mariage' },
      { titre: 'Coaching & relooking', texte: 'Apprenez à coiffer votre coupe au quotidien : gestes, produits et conseils sur-mesure.', caption: 'Sur demande', icon: 'coaching' },
    ],
  },

  equipeTitre: 'Nos coiffeurs Artistes',
  equipePlaceholder, // image IA provisoire, utilisée pour tous tant qu'il n'y a pas de vrai portrait
  // Équipe — données en dur. `photo` absente → portrait placeholder (vraies photos plus tard).
  // Spécialités PROVISOIRES (sauf Eva, déjà connue), à ajuster.
  equipe: [
    { prenom: 'Eva', specialite: 'Coloriste Visagiste' },
    { prenom: 'Philippe', specialite: 'Coiffeur Artiste' },
    { prenom: 'Coralie', specialite: 'Coloriste' },
    { prenom: 'Manon', specialite: 'Coiffeuse' },
    { prenom: 'Joanna', specialite: 'Head spa & soins' },
  ],

  // Avis — PLACEHOLDER (témoignages fictifs). À remplacer par les vrais avis Google :
  // note + total + items à brancher sur la source réelle (jamais codés en dur en prod, brief §7).
  avis: {
    note: '4,7',
    total: 500,
    source: 'Google',
    items: [
      { texte: 'Première fois que je ressors d’un salon en me sentant vraiment écoutée. La consultation change tout.', auteur: 'Marion B.', detail: 'Coupe & couleur' },
      { texte: 'Le head spa est une parenthèse hors du temps. On revient autant pour le soin que pour le résultat.', auteur: 'Sophie L.', detail: 'Head spa' },
      { texte: 'Accueil impeccable, geste précis, conseils justes. Un salon qui mérite sa réputation.', auteur: 'Julien R.', detail: 'Barbier' },
    ],
  },

  faq: [
    {
      question: 'Faut-il prendre rendez-vous ?',
      reponse:
        'Oui, nous travaillons exclusivement sur rendez-vous afin de vous consacrer le temps nécessaire, consultation comprise.',
    },
    {
      question: 'En quoi consiste la consultation visagiste ?',
      reponse:
        'Un temps d’échange avant chaque prestation : morphologie, nature du cheveu, mode de vie. Elle oriente la coupe et la couleur pour un résultat facile à vivre.',
    },
    {
      question: 'Proposez-vous le head spa à Grenoble ?',
      reponse: 'Oui, dans un espace dédié — en soin seul ou en complément d’une prestation.',
    },
  ],

  seo: {
    title: 'Coiffeur & coloriste visagiste à Grenoble — Eric Di Martino',
    description:
      'Salon de coiffure haut de gamme à Grenoble, place Victor Hugo. Coupe, couleur, head spa et barbier sur rendez-vous, à partir d’une vraie consultation visagiste.',
  },
};
