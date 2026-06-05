// Données de contenu — page salon MONTBONNOT.
// Même design que Grenoble (src/components/SalonPage.astro) : SANS head spa,
// le service « barbier » est remplacé par « beauté du regard ».
// Textes marqués « provisoire » = placeholders cohérents (étape 5 : vrais textes).
// Images : réutilisent PROVISOIREMENT les visuels Grenoble (à remplacer par les
// vraies photos de Montbonnot).

import type { SalonData } from './grenoble';
import hero from '../assets/salons/grenoble/hero.webp'; // PROVISOIRE
import expertise from '../assets/salons/grenoble/expertise.webp'; // PROVISOIRE
import equipePlaceholder from '../assets/salons/grenoble/equipe-placeholder.webp'; // PROVISOIRE

export const montbonnot: SalonData = {
  // — Réel (saisi / vérifié sur Google) —
  nom: 'Eric Di Martino',
  ville: 'Montbonnot',
  accroche: "L'élégance, prise au mot.",
  titreSeo: 'Coiffeur et coloriste visagiste à Montbonnot',
  adresse: '1435 avenue de l’Europe',
  codePostal: '38330',
  telephone: '04 76 51 29 93',
  heroImage: hero,
  reservationUrl: '#reserver', // TODO: URL réelle de réservation
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=1435+avenue+de+l%27Europe+38330+Montbonnot',

  horaires: [
    { jour: 'Lundi', valeur: 'Fermé', ferme: true, jourEn: 'Monday' },
    { jour: 'Mardi', valeur: '9h – 18h', jourEn: 'Tuesday', opens: '09:00', closes: '18:00' },
    { jour: 'Mercredi', valeur: '9h – 18h', jourEn: 'Wednesday', opens: '09:00', closes: '18:00' },
    { jour: 'Jeudi', valeur: '9h – 18h', jourEn: 'Thursday', opens: '09:00', closes: '18:00' },
    { jour: 'Vendredi', valeur: '9h – 18h', jourEn: 'Friday', opens: '09:00', closes: '18:00' },
    { jour: 'Samedi', valeur: '9h – 17h', jourEn: 'Saturday', opens: '09:00', closes: '17:00' },
    { jour: 'Dimanche', valeur: 'Fermé', ferme: true, jourEn: 'Sunday' },
  ],

  geo: { lat: 45.2227008, lng: 5.812974 }, // fiche Google Montbonnot
  priceRange: '€€€',
  areaServed: ['Montbonnot-Saint-Martin', 'Meylan', 'Biviers', 'Saint-Ismier', 'Crolles', 'Grenoble'],
  googlePlaceId: 'ChIJHbBqVQxfikcR4owvJan1wr8', // Salon Eric Di Martino Montbonnot (4,8★ · 192 avis)

  // Badges d'accès — détails PROVISOIRES à confirmer.
  acces: [
    { label: 'Parking', detail: 'Parking gratuit sur place' },
    { label: 'Accès', detail: 'Proche A41 — sortie Montbonnot' },
    { label: 'Accessible PMR', detail: 'Accès de plain-pied' },
  ],

  // Chiffres-clés. L'entrée « avis » est resynchronisée au build sur les vrais avis Google.
  chiffres: [
    { valeur: '5', label: 'artistes' },
    { valeur: '4,8 ★', label: '192 avis Google' },
    { valeur: 'Mar–Sam', label: 'sur rendez-vous' },
  ],

  // Citation signature — texte PROVISOIRE (commun marque).
  citation: {
    texte: 'On ne coiffe pas une tête, on dessine un visage.',
    auteur: 'Eric Di Martino',
  },

  // — Provisoire (textes placeholders cohérents) —
  heroTexte:
    'Coupe, couleur et beauté du regard à Montbonnot, avenue de l’Europe. Une coiffure pensée pour vous, à partir d’une vraie consultation.',

  expertise: {
    titre: 'La consultation visagiste, avant chaque coupe',
    texte:
      'Avant chaque coupe ou couleur, nous prenons le temps : morphologie du visage, nature du cheveu, mode de vie. Un diagnostic précis pour un résultat qui vous ressemble et se vit simplement, au quotidien.',
    image: expertise,
    lien: '/consultation-visagiste-coloriste',
  },

  // Bloc « Notre maison » — texte local PROVISOIRE (SEO/GEO : Montbonnot, Grésivaudan).
  maison: {
    numero: '01',
    eyebrow: 'Notre maison',
    titre: 'Le salon de Montbonnot.',
    paragraphes: [
      'À Montbonnot-Saint-Martin, avenue de l’Europe, notre salon accueille le Grésivaudan et l’agglomération grenobloise dans un cadre clair et apaisé.',
      'Coupe pensée pour le visage, coloration sur-mesure et beauté du regard : chaque rendez-vous commence par une vraie consultation, jamais par une grille tarifaire.',
    ],
    lien: { label: 'Découvrir nos prestations', href: '/prestations-coiffure' },
  },

  services: [
    {
      eyebrow: 'Le regard, en signature',
      titre: 'Beauté du regard à Montbonnot',
      texte:
        'Rehaussement et extensions de cils, teinture des cils et des sourcils, restructuration des sourcils : un regard intensifié et sur-mesure, dans le même esprit d’exigence que nos prestations coiffure.',
      points: ['Rehaussement de cils', 'Extensions de cils', 'Teinture cils & sourcils', 'Restructuration sourcils'],
      image: undefined, // pas de visuel dédié → cadre dégradé (à remplacer par une vraie photo)
      lien: '#reserver',
      lienLabel: 'Prendre rendez-vous',
    },
  ],

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
  // Équipe — prénoms réels (site). Spécialités PROVISOIRES (sauf Audrey, beauté du regard).
  equipe: [
    { prenom: 'Manon', specialite: 'Coiffeuse' },
    { prenom: 'Lili Rose', specialite: 'Coiffeuse' },
    { prenom: 'Audrey', specialite: 'Beauté du regard' },
    { prenom: 'Jeremy', specialite: 'Coiffeur Artiste' },
    { prenom: 'Lidia', specialite: 'Coloriste' },
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
      question: 'Proposez-vous la beauté du regard à Montbonnot ?',
      reponse:
        'Oui : rehaussement et extensions de cils, teinture des cils et des sourcils, restructuration des sourcils — en prestation seule ou en complément d’une coiffure.',
    },
  ],

  seo: {
    title: 'Coiffeur & coloriste visagiste à Montbonnot — Eric Di Martino',
    description:
      'Salon de coiffure haut de gamme à Montbonnot, avenue de l’Europe. Coupe, couleur et beauté du regard sur rendez-vous, à partir d’une vraie consultation visagiste.',
  },
};
