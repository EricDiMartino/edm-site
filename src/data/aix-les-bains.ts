// Données de contenu — page salon AIX-LES-BAINS.
// Même design que Grenoble (src/components/SalonPage.astro), version sobre :
// PAS de service « signature » (services: []), juste coiffure + consultation visagiste.
// Textes marqués « provisoire » = placeholders cohérents (étape 5 : vrais textes).
// Images : réutilisent PROVISOIREMENT les visuels Grenoble.

import type { SalonData } from './grenoble';
import hero from '../assets/salons/aix-les-bains/hero.webp';
import ig1 from '../assets/salons/aix-les-bains/instagram/1.webp';
import ig2 from '../assets/salons/aix-les-bains/instagram/2.webp';
import ig3 from '../assets/salons/aix-les-bains/instagram/3.webp';
import ig4 from '../assets/salons/aix-les-bains/instagram/4.webp';
import ig5 from '../assets/salons/aix-les-bains/instagram/5.webp';
import ig6 from '../assets/salons/aix-les-bains/instagram/6.webp';
import expertise from '../assets/salons/aix-les-bains/expertise.webp';
import equipePlaceholder from '../assets/salons/grenoble/equipe-placeholder.webp'; // PROVISOIRE
import eqaura from '../assets/salons/aix-les-bains/equipe/laura.webp';
import eqanny from '../assets/salons/aix-les-bains/equipe/fanny.webp';
import eqenna from '../assets/salons/aix-les-bains/equipe/jenna.webp';

export const aixLesBains: SalonData = {
  // — Réel (saisi / vérifié sur Google) —
  nom: 'Eric Di Martino',
  ville: 'Aix-les-Bains',
  accroche: "L'élégance, prise au mot.",
  titreSeo: 'Coiffeur et coloriste visagiste à Aix-les-Bains',
  adresse: '433 boulevard Président Wilson',
  codePostal: '73100',
  telephone: '04 79 35 03 31',
  heroImage: hero,
  reservationUrl: '#reserver', // déclenche la modale Planity (salon résolu via planityKey, voir BookingModal.astro)
  planityKey: '-Mb6Bi_k1N3O517DT9yI', // widget White-Label Planity (clé publique)
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=433+boulevard+President+Wilson+73100+Aix-les-Bains',

  horaires: [
    { jour: 'Lundi', valeur: 'Fermé', ferme: true, jourEn: 'Monday' },
    { jour: 'Mardi', valeur: '9h – 19h', jourEn: 'Tuesday', opens: '09:00', closes: '19:00' },
    { jour: 'Mercredi', valeur: '9h – 19h', jourEn: 'Wednesday', opens: '09:00', closes: '19:00' },
    { jour: 'Jeudi', valeur: '9h – 19h', jourEn: 'Thursday', opens: '09:00', closes: '19:00' },
    { jour: 'Vendredi', valeur: '9h – 19h', jourEn: 'Friday', opens: '09:00', closes: '19:00' },
    { jour: 'Samedi', valeur: '9h – 18h', jourEn: 'Saturday', opens: '09:00', closes: '18:00' },
    { jour: 'Dimanche', valeur: 'Fermé', ferme: true, jourEn: 'Sunday' },
  ],

  geo: { lat: 45.6877887, lng: 5.9098819 }, // fiche Google Aix-les-Bains
  priceRange: '€€€',
  areaServed: ['Aix-les-Bains', 'Grésy-sur-Aix', 'Mouxy', 'Drumettaz-Clarafond', 'Le Bourget-du-Lac', 'Chambéry'],
  googlePlaceId: 'ChIJQ3cxzqSgi0cRw4n61YLpKnA', // Salon Eric Di Martino Aix-les-Bains (4,6★ · 235 avis)

  acces: [
    { label: 'Parking', detail: 'Stationnement à proximité' },
    { label: 'Bord du lac', detail: 'Boulevard Président Wilson' },
    { label: 'Accessible PMR', detail: 'Accès de plain-pied' },
  ],

  chiffres: [
    { valeur: '3', label: 'artistes' },
    { valeur: '4,6 ★', label: '235 avis Google' },
    { valeur: '4,9★', label: '309 avis Planity' },
    { valeur: 'Mar–Sam', label: 'sur rendez-vous' },
  ],

  citation: {
    texte: 'On ne coiffe pas une tête, on dessine un visage.',
    auteur: 'Eric Di Martino',
  },

  heroTexte:
    'Coupe, couleur et consultation visagiste à Aix-les-Bains, boulevard Président Wilson, au bord du lac. Une coiffure pensée pour vous, à partir d’une vraie consultation.',

  expertise: {
    titre: 'La consultation visagiste, avant chaque coupe',
    texte:
      'Avant chaque coupe ou couleur, nous prenons le temps du diagnostic : morphologie du visage, nature du cheveu, mode de vie. Un résultat qui vous ressemble et se vit simplement, au quotidien.',
    image: expertise,
    lien: '/consultation-visagiste-coloriste',
  },

  maison: {
    numero: '01',
    eyebrow: 'Notre maison',
    titre: 'Le salon d’Aix-les-Bains.',
    paragraphes: [
      'Boulevard Président Wilson, au cœur d’Aix-les-Bains et tout près du lac, un espace entièrement rénové, pensé pour la créativité et la santé du cheveu. Un point de rendez-vous pour les habitants de Grésy-sur-Aix, Mouxy et du Bourget-du-Lac.',
      'Coupe pensée pour le visage et coloration sur-mesure : chaque rendez-vous commence par une vraie consultation, jamais par une grille tarifaire.',
    ],
    lien: { label: 'Découvrir nos prestations', href: '/prestations-coiffure' },
  },

  // Pas de service « signature » sur Aix-les-Bains.
  services: [],

  // Prestations complémentaires (grille) — textes PROVISOIRES, éditables.
  prestations: {
    eyebrow: 'Aussi au salon',
    titre: 'Bien plus qu’une coupe,',
    titreEm: 'tout un savoir-faire',
    texte: 'Au-delà de la coupe et de la couleur, nos artistes vous accompagnent sur les grands rendez-vous comme au quotidien.',
    items: [
      { titre: 'Extensions', texte: 'Longueur, volume ou densité : pose sur-mesure, entretien et dépose, dans le respect du cheveu.', caption: 'Sur consultation', icon: 'extensions' },
      { titre: 'Coiffure de mariage', texte: 'Essai préalable, chignon et coiffure du jour J : un accompagnement dédié pour votre cérémonie.', caption: 'Sur devis', icon: 'mariage' },
      { titre: 'Coaching & relooking', texte: 'Apprenez à coiffer votre coupe au quotidien : gestes, produits et conseils sur-mesure.', caption: 'Sur demande', icon: 'coaching' },
    ],
  },

  equipeTitre: 'Notre équipe',
  equipePlaceholder, // image provisoire pour tous tant qu'il n'y a pas de vrai portrait
  // Prénoms + spécialités réels (site).
  equipe: [
    { prenom: 'Laura', photo: eqaura },
    { prenom: 'Fanny', specialite: 'Artiste Visagiste', photo: eqanny },
    { prenom: 'Jenna', specialite: 'Artiste complète', photo: eqenna },
  ],

  faq: [
    {
      question: 'Faut-il prendre rendez-vous ?',
      reponse:
        'Oui, nous travaillons exclusivement sur rendez-vous, du mardi au samedi, afin de vous consacrer le temps nécessaire, consultation comprise.',
    },
    {
      question: 'En quoi consiste la consultation visagiste ?',
      reponse:
        'Un temps d’échange avant chaque prestation : morphologie, nature du cheveu, mode de vie. Elle oriente la coupe et la couleur pour un résultat facile à vivre.',
    },
  ],

  instagram: { handle: '@salon_ericdimartino_aix', url: 'https://www.instagram.com/salon_ericdimartino_aix/' },
  instagramPhotos: [ig1, ig2, ig3, ig4, ig5, ig6],

  seo: {
    title: 'Coiffeur visagiste à Aix-les-Bains (Savoie) | Eric Di Martino',
    description:
      'Salon de coiffure premium à Aix-les-Bains, bd Président Wilson, au bord du lac : coupe, couleur et consultation visagiste sur rendez-vous, en Savoie.',
  },
};
