// Données de contenu — page salon VOIRON.
// Même design que Grenoble (src/components/SalonPage.astro), version sobre :
// PAS de service « signature » (services: []), juste coiffure + consultation visagiste.
// Textes marqués « provisoire » = placeholders cohérents (étape 5 : vrais textes).
// Images : réutilisent PROVISOIREMENT les visuels Grenoble.

import type { SalonData } from './grenoble';
import hero from '../assets/salons/grenoble/hero.webp'; // PROVISOIRE
import expertise from '../assets/salons/grenoble/expertise.webp'; // PROVISOIRE
import equipePlaceholder from '../assets/salons/grenoble/equipe-placeholder.webp'; // PROVISOIRE

export const voiron: SalonData = {
  // — Réel (saisi / vérifié sur Google) —
  nom: 'Eric Di Martino',
  ville: 'Voiron',
  accroche: "L'élégance, prise au mot.",
  titreSeo: 'Coiffeur et coloriste visagiste à Voiron',
  adresse: '29 avenue du 8 Mai 1945',
  codePostal: '38500',
  telephone: '04 76 07 82 30',
  heroImage: hero,
  reservationUrl: '#reserver', // déclenche la modale Planity (salon résolu via planityKey, voir BookingModal.astro)
  planityKey: '-L7OgePoi82iJeECJYDN', // widget White-Label Planity (clé publique)
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=29+avenue+du+8+Mai+1945+38500+Voiron',

  horaires: [
    { jour: 'Lundi', valeur: 'Fermé', ferme: true, jourEn: 'Monday' },
    { jour: 'Mardi', valeur: '9h – 19h', jourEn: 'Tuesday', opens: '09:00', closes: '19:00' },
    { jour: 'Mercredi', valeur: '9h – 19h', jourEn: 'Wednesday', opens: '09:00', closes: '19:00' },
    { jour: 'Jeudi', valeur: '9h – 19h', jourEn: 'Thursday', opens: '09:00', closes: '19:00' },
    { jour: 'Vendredi', valeur: '9h – 19h', jourEn: 'Friday', opens: '09:00', closes: '19:00' },
    { jour: 'Samedi', valeur: '9h – 18h', jourEn: 'Saturday', opens: '09:00', closes: '18:00' },
    { jour: 'Dimanche', valeur: 'Fermé', ferme: true, jourEn: 'Sunday' },
  ],

  geo: { lat: 45.3765781, lng: 5.5804424 }, // fiche Google Voiron
  priceRange: '€€€',
  areaServed: ['Voiron', 'Coublevie', 'Saint-Jean-de-Moirans', 'Moirans', 'La Buisse', 'Rives'],
  googlePlaceId: 'ChIJIT79Vj7kikcR5wHgFGsalkI', // Eric Di Martino - Voiron (4,7★ · 394 avis)

  acces: [
    { label: 'Parking', detail: 'Stationnement à proximité' },
    { label: 'Centre-ville', detail: 'Avenue du 8 Mai 1945' },
    { label: 'Accessible PMR', detail: 'Accès de plain-pied' },
  ],

  chiffres: [
    { valeur: '9', label: 'artistes' },
    { valeur: '4,7 ★', label: '394 avis Google' },
    { valeur: 'Mar–Sam', label: 'sur rendez-vous' },
  ],

  citation: {
    texte: 'On ne coiffe pas une tête, on dessine un visage.',
    auteur: 'Eric Di Martino',
  },

  heroTexte:
    'Coupe, couleur et consultation visagiste à Voiron, avenue du 8 Mai 1945. Une coiffure pensée pour vous, à partir d’une vraie consultation.',

  expertise: {
    titre: 'La consultation visagiste, avant chaque coupe',
    texte:
      'Avant chaque coupe ou couleur, nous prenons le temps : morphologie du visage, nature du cheveu, mode de vie. Un diagnostic précis pour un résultat qui vous ressemble et se vit simplement, au quotidien.',
    image: expertise,
    lien: '/consultation-visagiste-coloriste',
  },

  maison: {
    numero: '01',
    eyebrow: 'Notre maison',
    titre: 'Le salon de Voiron.',
    paragraphes: [
      'Avenue du 8 Mai 1945, notre salon est une référence de la coiffure à Voiron et dans le Pays Voironnais : coupe, couleur et techniques exigeantes, dans un cadre soigné.',
      'Coupe pensée pour le visage et coloration sur-mesure : chaque rendez-vous commence par une vraie consultation, jamais par une grille tarifaire.',
    ],
    lien: { label: 'Découvrir nos prestations', href: '/prestations-coiffure' },
  },

  // Pas de service « signature » sur Voiron.
  services: [],

  // Prestations complémentaires (grille) — textes PROVISOIRES, éditables.
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

  equipeTitre: 'Notre équipe',
  equipePlaceholder, // image provisoire pour tous tant qu'il n'y a pas de vrai portrait
  // Prénoms réels (site). Spécialités non communiquées → omises pour l'instant.
  equipe: [
    { prenom: 'Lily' },
    { prenom: 'Florence' },
    { prenom: 'Emy' },
    { prenom: 'Diego' },
    { prenom: 'Emmanuel' },
    { prenom: 'Marlène' },
    { prenom: 'Charlotte' },
    { prenom: 'Lisa' },
    { prenom: 'Sarah' },
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
  ],

  instagram: { handle: '@salon_eric_di_martino_voiron', url: 'https://www.instagram.com/salon_eric_di_martino_voiron/' },

  seo: {
    title: 'Coiffeur visagiste à Voiron, Pays Voironnais | Eric Di Martino',
    description:
      'Salon de coiffure premium à Voiron, avenue du 8 Mai 1945 : coupe, couleur et consultation visagiste sur rendez-vous, dans le Pays Voironnais.',
  },
};
