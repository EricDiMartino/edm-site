// Bloc TRIO — consultation au centre (offre d'ancrage des pages salon).
// Prix gérés ICI (comme head-spa.ts), jamais en dur dans le markup.
// Surcharge possible par salon via le champ `trioConsult` de SalonData ;
// à défaut, ce trio par défaut est utilisé.
// ⚠️ Prix de départ fournis par EDM — à confirmer/ajuster par salon si besoin.

export interface TrioCard {
  badge: string;
  name: string;
  prefix?: string; // ex. "dès"
  price: string; // montant, ex. "60"
  meta?: string; // ex. "· 30 min"
  offer?: { label: string; strike: string }; // bandeau "consultation offerte"
  points: { texte: string; muted?: boolean; gift?: boolean }[];
  cta: string;
  featured?: boolean; // carte centrale, mise en avant
}

export interface TrioConsultData {
  kicker: string;
  titre: string;
  sous: string;
  cards: TrioCard[];
}

export const defaultTrioConsult: TrioConsultData = {
  kicker: 'Consultation & Coupe',
  titre: 'Tout commence par un diagnostic',
  sous: 'Notre signature : une consultation visagiste qui révèle votre coupe idéale avant le premier coup de ciseaux.',
  cards: [
    {
      badge: "L'essentiel",
      name: 'Coupe Signature',
      prefix: 'dès',
      price: '60',
      offer: { label: 'Consultation offerte', strike: '30€' },
      points: [
        { texte: 'Coupe signature personnalisée' },
        { texte: 'Coiffage & finition' },
        { texte: 'Routine maison conseillée' },
      ],
      cta: 'Réserver',
    },
    {
      badge: 'Notre spécialité',
      name: 'Consultation Visagiste',
      price: '30',
      meta: '· 30 min',
      featured: true,
      points: [
        { texte: 'Analyse du visage & morphologie' },
        { texte: 'Conseil coupe + couleur sur-mesure' },
        { texte: 'Projection du rendu' },
        { texte: 'Offerte dès une coupe ou couleur', muted: true, gift: true },
      ],
      cta: 'Réserver ma consultation',
    },
    {
      badge: 'La transformation',
      name: 'Coupe + Balayage Signature',
      prefix: 'dès',
      price: '150',
      offer: { label: 'Consultation offerte', strike: '30€' },
      points: [
        { texte: 'Balayage signature sur-mesure' },
        { texte: 'Coupe signature personnalisée' },
        { texte: 'Coiffage & finition' },
      ],
      cta: 'Réserver',
    },
  ],
};
