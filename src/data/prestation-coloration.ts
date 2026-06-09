// Données — page prestation COLORATION & BALAYAGE.
// Descriptif (SEO/GEO), aucun prix (→ widget). Textes provisoires cohérents.
import type { PrestationData } from '../lib/prestations-shared';

export const coloration: PrestationData = {
  serviceType: 'Coloration capillaire',
  reservationUrl: '#reserver', // modale Planity : pages sans planityKey -> sélecteur de salon (voir BookingModal.astro)

  hero: {
    eyebrow: 'Couleur',
    titre: 'Coloration & balayage',
    lede:
      'Coloration, balayage, ombré, gloss et coloration naturelle — par nos coloristes visagistes, dans le respect du cheveu et après diagnostic. Dans nos quatre salons.',
    meta: 'Dans nos 4 salons · Sur rendez-vous',
  },

  intro: {
    eyebrow: 'Notre approche',
    titre: 'La couleur, après diagnostic',
    paragraphes: [
      'Une couleur réussie part d’un diagnostic : teint, couleur des yeux, géométrie du visage et santé du cheveu. C’est lui qui guide la teinte, la technique et la pose.',
      'Toute transformation (changement de couleur, éclaircissement, balayage) commence par une consultation : on établit le projet et un devis précis, et on protège la fibre à chaque étape.',
    ],
    lien: { label: 'La consultation visagiste', href: '/consultation-visagiste-coloriste' },
  },

  variantes: {
    eyebrow: 'Techniques',
    titre: 'Toutes nos techniques de couleur',
    intro: 'De l’entretien de la racine à la transformation complète — chaque technique répond à un besoin précis.',
    items: [
      { nom: 'Coloration racine', texte: 'Entretien régulier de la racine : ton sur ton ou couvrance des cheveux blancs, pour une couleur toujours nette.' },
      { nom: 'Coloration & soin', texte: 'Couleur complète sur l’ensemble de la chevelure, éclat et profondeur, dans le respect de la fibre.' },
      { nom: 'Coloration naturelle', texte: 'Une coloration d’origine naturelle, plus douce, aux reflets lumineux — pour qui cherche une alternative respectueuse.' },
      { nom: 'Balayage', texte: 'Éclaircissement par mèches, fondu et progressif : un effet naturel et lumineux, sans démarcation à la repousse.' },
      { nom: 'Ombré hair', texte: 'Un dégradé des racines foncées vers des pointes plus claires, très peu d’entretien, plein de relief.' },
      { nom: 'Gloss & reflets', texte: 'Un voile de couleur qui ravive l’éclat et les reflets, sublime la brillance, sans engager durablement.' },
    ],
  },

  benefices: {
    eyebrow: 'Pourquoi nous',
    titre: 'Une couleur qui respecte le cheveu',
    items: [
      { titre: 'Sur-mesure', texte: 'La teinte est choisie selon votre teint, vos yeux et votre visage — jamais sur catalogue.', icon: 'eye' },
      { titre: 'Respect du cheveu', texte: 'Produits haut de gamme et soins associés, pour préserver la fibre à chaque passage.', icon: 'leaf' },
      { titre: 'Brillance & tenue', texte: 'Des reflets lumineux et une couleur qui dure, séance après séance.', icon: 'sparkle' },
    ],
  },

  maillage: {
    titre: 'À voir aussi',
    items: [
      { titre: 'Coupe & coiffage', href: '/coupe-coiffage-visagiste' },
      { titre: 'Lissage & soins', href: '/lissage-soin' },
      { titre: 'Head spa', href: '/head-spa-grenoble' },
    ],
  },

  faq: [
    { question: 'Faut-il une consultation avant un balayage ou une couleur ?', reponse: 'Pour toute transformation ou tout éclaircissement, oui : la consultation permet d’établir le projet et un devis précis, et de protéger le cheveu.' },
    { question: 'Combien de temps dure la prestation ?', reponse: 'Cela dépend de la technique et de la longueur. La durée et le tarif s’affichent au moment de la réservation, salon par salon.' },
    { question: 'La coloration abîme-t-elle le cheveu ?', reponse: 'Nous travaillons avec des produits haut de gamme et des soins associés pour respecter la fibre. Les éclaircissements sont encadrés par un diagnostic.' },
    { question: 'À quelle fréquence refaire sa couleur ?', reponse: 'En moyenne toutes les 4 à 6 semaines pour une racine, et tous les 3 à 4 mois pour un balayage ou un ombré, qui s’entretiennent peu.' },
    { question: 'Proposez-vous une coloration naturelle ?', reponse: 'Oui, nous proposons une coloration d’origine naturelle, plus douce, pour qui cherche une alternative respectueuse.' },
    { question: 'Les tarifs sont-ils les mêmes dans tous les salons ?', reponse: 'Certains tarifs varient selon le salon et la longueur. Le prix exact s’affiche à la réservation en ligne.' },
  ],

  cta: {
    titre: 'Envie de changement ?',
    texte: 'Réservez votre couleur ou votre balayage dans le salon de votre choix. Consultation comprise pour les transformations.',
  },

  seo: {
    title: 'Coloration & balayage, coloriste visagiste | Eric Di Martino',
    description:
      'Coloration, balayage, ombré et gloss par nos coloristes visagistes Eric Di Martino. Teinte sur-mesure définie après diagnostic. Sur rendez-vous en salon.',
  },
};
