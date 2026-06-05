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

export interface Horaire {
  jour: string;
  valeur: string; // ex. "9h – 19h" ou "Fermé"
  ferme?: boolean;
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
export interface ChiffreCle {
  valeur: string; // ex. "200", "4,7 ★"
  label: string; // ex. "m² d'espace"
}
export interface Acces {
  label: string; // ex. "Parking" — affiché dans le badge
  detail?: string; // précision (provisoire) ; affichée en infobulle
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
  acces?: Acces[];
  chiffres?: ChiffreCle[];
  citation?: { texte: string; auteur: string };
  expertise?: { titre: string; texte: string; image?: ImageMetadata; lien?: string };
  introLocale?: string; // texte d'ancrage local, unique au salon
  services: ServicePhare[];
  equipeTitre?: string;
  equipe: Membre[];
  faq: FaqItem[];
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
    { jour: 'Lundi', valeur: 'Fermé', ferme: true },
    { jour: 'Mardi', valeur: '9h – 19h' },
    { jour: 'Mercredi', valeur: '9h – 19h' },
    { jour: 'Jeudi', valeur: '9h – 19h' },
    { jour: 'Vendredi', valeur: '9h – 19h' },
    { jour: 'Samedi', valeur: '9h – 18h' },
    { jour: 'Dimanche', valeur: 'Fermé', ferme: true },
  ],

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

  introLocale:
    'Place Victor Hugo, entre les platanes et les terrasses, notre salon grenoblois cultive une certaine idée du soin : celle du temps que l’on prend.',

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
      image: barbier,
      lien: '#reserver',
      lienLabel: 'Prendre rendez-vous',
    },
  ],

  equipeTitre: 'Nos coiffeurs Artistes',
  // Équipe — données en dur. `photo` absente → initiale en repli (vraies photos plus tard).
  // Spécialités PROVISOIRES (sauf Eva, déjà connue), à ajuster.
  equipe: [
    { prenom: 'Eva', specialite: 'Coloriste Visagiste' },
    { prenom: 'Philippe', specialite: 'Coiffeur Artiste' },
    { prenom: 'Coralie', specialite: 'Coloriste' },
    { prenom: 'Manon', specialite: 'Coiffeuse' },
    { prenom: 'Joanna', specialite: 'Head spa & soins' },
  ],

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
