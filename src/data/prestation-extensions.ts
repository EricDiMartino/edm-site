// Données — page prestation EXTENSIONS. Descriptif, aucun prix.
import type { PrestationData } from '../lib/prestations-shared';

export const extensions: PrestationData = {
  serviceType: 'Pose d’extensions capillaires',
  reservationUrl: '#reserver',

  hero: {
    eyebrow: 'Longueur & volume',
    titre: 'Extensions',
    lede:
      'Extensions kératine 100 % cheveux naturels, pour gagner en longueur, en volume ou en densité. Pose sur-mesure, après consultation obligatoire. Dans nos quatre salons.',
    meta: 'Dans nos 4 salons · Sur rendez-vous',
  },

  intro: {
    eyebrow: 'Avant la pose',
    titre: 'Une consultation, toujours',
    paragraphes: [
      'La pose d’extensions commence par une consultation obligatoire : on évalue la nature de votre cheveu, la quantité nécessaire, la méthode et la teinte — pour un résultat invisible et confortable.',
      'Nous travaillons exclusivement avec des cheveux naturels, posés dans le respect de votre chevelure, avec un entretien suivi dans le temps.',
    ],
    lien: { label: 'La consultation visagiste', href: '/consultation-visagiste-coloriste' },
  },

  variantes: {
    eyebrow: 'Au programme',
    titre: 'Pose, entretien & dépose',
    intro: 'De la première pose au suivi — un accompagnement complet.',
    items: [
      { nom: 'Extensions kératine', texte: 'Pose mèche à mèche à chaud, discrète et naturelle, fondue dans votre chevelure.' },
      { nom: 'Longueur', texte: 'Gagner de la longueur immédiatement, sans attendre la pousse.' },
      { nom: 'Volume & densité', texte: 'Densifier une chevelure fine ou clairsemée, avec un rendu naturel.' },
      { nom: 'Entretien & dépose', texte: 'Resserrage régulier et dépose en douceur, dans le respect du cheveu.' },
    ],
  },

  benefices: {
    eyebrow: 'Pourquoi nous',
    titre: 'Du naturel, sur-mesure',
    items: [
      { titre: '100 % cheveux naturels', texte: 'Des cheveux de qualité, pour un toucher et un tombé naturels.', icon: 'leaf' },
      { titre: 'Sur-mesure', texte: 'Teinte, longueur et quantité définies après consultation.', icon: 'eye' },
      { titre: 'Discret & confortable', texte: 'Une pose invisible, pensée pour le confort au quotidien.', icon: 'sparkle' },
    ],
  },

  maillage: {
    titre: 'À voir aussi',
    items: [
      { titre: 'Coupe & coiffage', href: '/coupe-coiffage-visagiste' },
      { titre: 'Coloration & balayage', href: '/coloration-balayage' },
      { titre: 'Head spa', href: '/head-spa-grenoble' },
    ],
  },

  faq: [
    { question: 'La consultation est-elle obligatoire ?', reponse: 'Oui : elle est indispensable pour évaluer votre cheveu, choisir la méthode, la teinte et la quantité, et établir un devis.' },
    { question: 'Quelle méthode de pose utilisez-vous ?', reponse: 'Une pose kératine mèche à mèche (à chaud), discrète et durable, adaptée à la majorité des chevelures.' },
    { question: 'Combien de temps durent les extensions ?', reponse: 'Plusieurs mois avec un entretien régulier (resserrage). La durée précise dépend de votre cheveu et de votre routine.' },
    { question: 'Les extensions abîment-elles le cheveu ?', reponse: 'Posées et entretenues correctement, elles respectent le cheveu. La dépose se fait en douceur, en salon.' },
    { question: 'Combien ça coûte ?', reponse: 'Les extensions sont sur devis (longueur, quantité, méthode). Le devis est établi lors de la consultation.' },
  ],

  cta: {
    titre: 'Envie de longueur ?',
    texte: 'Réservez votre consultation extensions dans le salon de votre choix.',
  },

  seo: {
    title: 'Extensions de cheveux à Grenoble | Eric Di Martino',
    description:
      'Extensions kératine 100 % cheveux naturels (longueur, volume, densité) dans les salons Eric Di Martino — Grenoble, Montbonnot, Voiron, Aix-les-Bains. Sur consultation, sur rendez-vous.',
  },
};
