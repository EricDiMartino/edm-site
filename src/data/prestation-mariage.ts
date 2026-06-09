// Données — page prestation COIFFURE DE MARIAGE. Descriptif, aucun prix.
import type { PrestationData } from '../lib/prestations-shared';

export const mariage: PrestationData = {
  serviceType: 'Coiffure de mariage',
  reservationUrl: '#reserver',

  hero: {
    eyebrow: 'Jour J',
    titre: 'Coiffure de mariage',
    lede:
      'Essai coiffure mariage, chignon mariée, attaché et coiffure du jour J : un accompagnement dédié pour votre cérémonie, en Isère et en Savoie. Dans nos quatre salons.',
    meta: 'Dans nos 4 salons · Sur rendez-vous',
  },

  intro: {
    eyebrow: 'Notre accompagnement',
    titre: 'Votre coiffure de mariage, jusqu’au jour J',
    paragraphes: [
      'Tout commence par un essai coiffure mariage : on teste le chignon ou l’attaché, on l’ajuste à votre robe, à la forme de votre visage et à votre style, puis on valide ensemble la coiffure de mariée avant le grand jour.',
      'Le jour J, vous êtes attendue pour une mise en beauté sereine — un chignon mariée ou une coiffure de cérémonie pensée pour tenir, du matin jusqu’à la dernière danse.',
    ],
    lien: { label: 'La consultation visagiste', href: '/consultation-visagiste-coloriste' },
  },

  variantes: {
    eyebrow: 'Au programme',
    titre: 'De l’essai coiffure au jour J',
    intro: 'Un parcours pensé pour la sérénité de la mariée.',
    items: [
      { nom: 'Essai mariée', texte: 'On teste et on valide votre essai coiffure mariage avant le jour J, en tenant compte de la robe et des accessoires.' },
      { nom: 'Chignon & attaché', texte: 'Chignon mariée, attaché ou coiffure de cérémonie, sur-mesure selon votre style et la forme de votre visage.' },
      { nom: 'Coiffure du jour J', texte: 'Mise en beauté le matin du mariage, dans le calme, pour partir l’esprit léger.' },
      { nom: 'Cortège & invitées', texte: 'Coiffure des proches et témoins, sur demande, pour une harmonie d’ensemble.' },
    ],
  },

  benefices: {
    eyebrow: 'Pourquoi nous',
    titre: 'Sereine, du matin au soir',
    items: [
      { titre: 'Accompagnement dédié', texte: 'Un interlocuteur attentif, de l’essai coiffure jusqu’au jour J.', icon: 'hand' },
      { titre: 'Essai avant le jour J', texte: 'On valide ensemble votre coiffure de mariage, sans mauvaise surprise.', icon: 'eye' },
      { titre: 'Tenue toute la journée', texte: 'Un chignon mariée pensé pour durer, du matin à la dernière danse.', icon: 'sparkle' },
    ],
  },

  maillage: {
    titre: 'À voir aussi',
    items: [
      { titre: 'Coloration & balayage', href: '/coloration-balayage' },
      { titre: 'Coupe & coiffage', href: '/coupe-coiffage-visagiste' },
      { titre: 'Head spa', href: '/head-spa-grenoble' },
    ],
  },

  faq: [
    { question: 'Faut-il faire un essai coiffure avant le mariage ?', reponse: 'Oui, l’essai coiffure mariage est vivement recommandé : il permet de définir et de valider le chignon mariée ou l’attaché du jour J en toute sérénité.' },
    { question: 'Combien de temps à l’avance réserver sa coiffure de mariage ?', reponse: 'Le plus tôt possible, surtout en pleine saison : les dates de mariage partent vite. Contactez le salon pour positionner votre essai et votre jour J.' },
    { question: 'Coiffez-vous aussi le cortège et les invitées ?', reponse: 'Oui, sur demande : nous coiffons les proches et témoins pour une harmonie d’ensemble le jour du mariage.' },
    { question: 'Vous déplacez-vous le jour J ?', reponse: 'Selon le salon et la disponibilité. Précisez votre besoin au moment de la prise de contact.' },
    { question: 'Quel est le tarif d’une coiffure de mariage ?', reponse: 'La coiffure de mariage est sur devis (essai + jour J, cortège éventuel), établi après échange selon votre projet.' },
  ],

  cta: {
    titre: 'On prépare votre coiffure de mariage ?',
    texte: 'Contactez le salon de votre choix pour réserver votre essai coiffure mariage.',
  },

  seo: {
    title: 'Coiffure de mariage Isère & Savoie | Eric Di Martino',
    description:
      'Coiffure de mariage par Eric Di Martino : essai, chignon mariée et jour J à Grenoble, Montbonnot, Voiron, Aix-les-Bains. Accompagnement dédié, sur rendez-vous.',
  },
};
