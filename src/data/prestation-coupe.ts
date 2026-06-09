// Données — page prestation COUPE & COIFFAGE. Descriptif, aucun prix.
import type { PrestationData } from '../lib/prestations-shared';

export const coupe: PrestationData = {
  serviceType: 'Coupe de cheveux',
  reservationUrl: '#reserver',

  hero: {
    eyebrow: 'Coupe',
    titre: 'Coupe & coiffage',
    lede:
      'Coupe femme et homme, brushing, coiffage et barbe — par nos coiffeurs visagistes, après diagnostic. Une coupe pensée pour votre visage, facile à vivre. Dans nos quatre salons.',
    meta: 'Dans nos 4 salons · Sur rendez-vous',
  },

  intro: {
    eyebrow: 'Notre signature',
    titre: 'La coupe pensée pour le visage',
    paragraphes: [
      'Avant chaque coupe, un diagnostic : morphologie du visage, nature et implantation du cheveu, mode de vie. C’est lui qui dessine la ligne.',
      'Le résultat : une coupe qui vous ressemble, qui retombe bien et se coiffe simplement au quotidien — pas seulement le jour du rendez-vous.',
    ],
    lien: { label: 'La consultation visagiste', href: '/consultation-visagiste-coloriste' },
  },

  variantes: {
    eyebrow: 'Au programme',
    titre: 'Coupe, coiffage & barbe',
    intro: 'Femme, homme, mise en forme — chaque geste pensé pour vos traits.',
    items: [
      { nom: 'Coupe femme', texte: 'Une création sur-mesure qui révèle votre personnalité, après diagnostic visagiste.' },
      { nom: 'Brushing & coiffage', texte: 'Mise en forme, volume et mouvement ; shampooing et coiffage adaptés à la longueur.' },
      { nom: 'Coupe homme', texte: 'Du classique au contemporain, structurée selon vos traits et votre style.' },
      { nom: 'Barbe & contours', texte: 'Taille, sculpture des contours et rituel barbe — précision et netteté.' },
    ],
  },

  benefices: {
    eyebrow: 'Pourquoi nous',
    titre: 'Une coupe qui se vit simplement',
    items: [
      { titre: 'Pensée pour le visage', texte: 'Votre morphologie et vos traits guident chaque ligne de la coupe.', icon: 'eye' },
      { titre: 'Geste précis', texte: 'Une exécution maîtrisée par nos artistes, pour un rendu net et durable.', icon: 'sparkle' },
      { titre: 'Facile à coiffer', texte: 'Une coupe qui retombe bien et se travaille en quelques minutes, chez vous.', icon: 'leaf' },
    ],
  },

  maillage: {
    titre: 'À voir aussi',
    items: [
      { titre: 'Coloration & balayage', href: '/coloration-balayage' },
      { titre: 'Lissage & soins', href: '/lissage-soin' },
      { titre: 'Head spa', href: '/head-spa-grenoble' },
    ],
  },

  faq: [
    { question: 'Qu’est-ce qu’une coupe visagiste ?', reponse: 'Une coupe pensée à partir de votre morphologie et de vos traits, après un diagnostic — pour un résultat harmonieux et facile à vivre.' },
    { question: 'Le brushing est-il inclus ?', reponse: 'Le coiffage dépend de la prestation choisie ; le détail s’affiche au moment de la réservation.' },
    { question: 'Faites-vous les coupes homme et la barbe ?', reponse: 'Oui : coupe homme, taille de barbe et contours, avec la même exigence de précision.' },
    { question: 'Combien de temps dure une coupe ?', reponse: 'Cela dépend de la prestation et de la longueur. La durée s’affiche à la réservation, salon par salon.' },
    { question: 'Les tarifs sont-ils les mêmes dans tous les salons ?', reponse: 'Certains tarifs varient selon le salon et la longueur. Le prix exact s’affiche à la réservation en ligne.' },
  ],

  cta: {
    titre: 'Envie d’une nouvelle coupe ?',
    texte: 'Réservez votre coupe dans le salon de votre choix. Consultation comprise pour une transformation.',
  },

  seo: {
    title: 'Coupe & coiffage : coiffeur visagiste | Eric Di Martino',
    description:
      'Coupe femme et homme, brushing et barbe par les coiffeurs visagistes Eric Di Martino à Grenoble, Montbonnot, Voiron, Aix-les-Bains. Après diagnostic, sur RDV.',
  },
};
