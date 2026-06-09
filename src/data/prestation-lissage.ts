// Données — page prestation LISSAGE & SOINS. Descriptif, aucun prix.
import type { PrestationData } from '../lib/prestations-shared';

export const lissage: PrestationData = {
  serviceType: 'Soin capillaire',
  reservationUrl: '#reserver',

  hero: {
    eyebrow: 'Soin',
    titre: 'Lissage & soins',
    lede:
      'Lissage brésilien, botox capillaire, soins profonds et masques — pour discipliner, réparer et faire briller le cheveu. Sur-mesure, après diagnostic de la fibre. Dans nos quatre salons à Grenoble et en Isère, à Voiron comme à Aix-les-Bains.',
    meta: 'Dans nos 4 salons · Sur rendez-vous',
  },

  intro: {
    eyebrow: 'Notre approche',
    titre: 'Réparer, discipliner, sublimer',
    paragraphes: [
      'Tout part d’un diagnostic de la fibre : porosité, état, attentes. On choisit ensuite le soin ou le lissage le plus adapté — jamais l’inverse.',
      'Des soins ciblés aux lissages durables, l’objectif reste le même : un cheveu sain, discipliné et lumineux, dans le respect de sa nature.',
    ],
    lien: { label: 'La consultation visagiste', href: '/consultation-visagiste-coloriste' },
  },

  variantes: {
    eyebrow: 'Techniques',
    titre: 'Lissages & soins profonds',
    intro: 'Du soin réparateur au lissage longue durée — chaque besoin a sa réponse.',
    items: [
      { nom: 'Lissage brésilien', texte: 'Discipline durable, anti-frisottis et brillance miroir, tout en gardant du mouvement.' },
      { nom: 'Lissage New Yorkais', texte: 'Un lissage plus doux et modulable, pour assouplir sans tout figer.' },
      { nom: 'Botox capillaire', texte: 'Un soin reconstructeur qui répare, densifie et lisse les cheveux fragilisés.' },
      { nom: 'Soin profond', texte: 'Soin concentré associé à un massage du cuir chevelu, pour nourrir en profondeur.' },
      { nom: 'Masque & soins ciblés', texte: 'Nutrition, réparation, brillance : un soin sur-mesure selon l’état du cheveu.' },
    ],
  },

  benefices: {
    eyebrow: 'Pourquoi nous',
    titre: 'Le soin avant l’effet',
    items: [
      { titre: 'Réparation en profondeur', texte: 'Des soins qui agissent sur la fibre, pas seulement en surface.', icon: 'drop' },
      { titre: 'Discipline & brillance', texte: 'Un cheveu plus lisse, plus souple et plus lumineux, durablement.', icon: 'sparkle' },
      { titre: 'Sur-mesure', texte: 'Le protocole est choisi après diagnostic, selon votre cheveu.', icon: 'eye' },
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
    { question: 'Le lissage abîme-t-il le cheveu ?', reponse: 'Nos lissages sont choisis après diagnostic et associés à des soins : l’objectif est de discipliner tout en respectant la fibre.' },
    { question: 'Combien de temps tient un lissage brésilien ?', reponse: 'En moyenne plusieurs mois selon la nature du cheveu et l’entretien ; le détail est précisé en consultation.' },
    { question: 'Quelle différence entre botox capillaire et lissage ?', reponse: 'Le botox est un soin reconstructeur (répare, densifie) ; le lissage discipline et assouplit durablement. Ils peuvent être complémentaires.' },
    { question: 'Comment entretenir son lissage ou son soin ?', reponse: 'Avec des produits adaptés sans sulfate ; nous vous conseillons la routine à la fin du rendez-vous.' },
    { question: 'Les tarifs sont-ils les mêmes dans tous les salons ?', reponse: 'Certains tarifs varient selon le salon et la longueur. Le prix exact s’affiche à la réservation en ligne.' },
  ],

  cta: {
    titre: 'Envie d’un cheveu réparé ?',
    texte: 'Réservez votre soin ou votre lissage dans le salon de votre choix. Diagnostic compris.',
  },

  seo: {
    title: 'Lissage & soin capillaire en Isère | Eric Di Martino',
    description:
      'Lissage brésilien, botox capillaire et soins profonds chez Eric Di Martino (Grenoble, Isère, Savoie). Protocole choisi après diagnostic de la fibre.',
  },
};
