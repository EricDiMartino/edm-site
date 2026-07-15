// Calculette de prix — OUTIL INTERNE (page /calculette-en-ligne, noindex).
// Logique reprise à l'identique des anciennes calculettes Webflow.
// Formule unique par prestation : PRIX = produit(facteurs) + somme(suppléments).
//   - kind: 'factor' → multiplié entre eux (longueur, épaisseur, densité…)
//   - kind: 'add'    → additionné (suppléments, options)
// `default` = index de l'option sélectionnée par défaut.
// Pour éditer un prix : modifier les `value` ci-dessous.

export interface CalcOption { label: string; value: number }
export interface CalcField { id: string; label: string; kind: 'factor' | 'add'; options: CalcOption[]; default: number }
export interface CalcService { id: string; label: string; fields: CalcField[] }

// Coefficients réutilisés
const EPAISSEUR: CalcOption[] = [
  { label: 'Fins', value: 0.8 },
  { label: 'Moyens', value: 1.0 },
  { label: 'Épais', value: 1.2 },
];
const DENSITE: CalcOption[] = [
  { label: 'Clairsemés', value: 0.8 },
  { label: 'Normaux', value: 1.0 },
  { label: 'Forte densité', value: 1.2 },
];
// Suppléments : 0 → 10, pas de `step` € (ex. step 20 → 0,20,40…200)
const supp = (step: number): CalcOption[] => Array.from({ length: 11 }, (_, i) => ({ label: String(i), value: i * step }));

export const calculette: CalcService[] = [
  {
    id: 'lissage',
    label: 'Lissage',
    fields: [
      { id: 'longueur', label: 'Longueur', kind: 'factor', default: 1, options: [ { label: 'Courts', value: 130 }, { label: 'Mi-longs', value: 180 }, { label: 'Longs', value: 250 } ] },
      { id: 'epaisseur', label: 'Épaisseur', kind: 'factor', default: 1, options: EPAISSEUR },
      { id: 'densite', label: 'Densité', kind: 'factor', default: 1, options: DENSITE },
      { id: 'supplement', label: 'Supplément (× 20 €)', kind: 'add', default: 0, options: supp(20) },
    ],
  },
  {
    id: 'botox',
    label: 'Botox',
    fields: [
      { id: 'longueur', label: 'Longueur', kind: 'factor', default: 1, options: [ { label: 'Courts', value: 100 }, { label: 'Mi-longs', value: 120 }, { label: 'Longs', value: 150 } ] },
      { id: 'epaisseur', label: 'Épaisseur', kind: 'factor', default: 1, options: EPAISSEUR },
      { id: 'densite', label: 'Densité', kind: 'factor', default: 1, options: DENSITE },
      { id: 'supplement', label: 'Supplément (× 10 €)', kind: 'add', default: 0, options: supp(10) },
    ],
  },
  {
    id: 'plex',
    label: 'Plex',
    fields: [
      { id: 'longueur', label: 'Longueur', kind: 'factor', default: 1, options: [ { label: 'Courts', value: 15 }, { label: 'Mi-longs', value: 25 }, { label: 'Longs', value: 35 } ] },
      { id: 'densite', label: 'Densité', kind: 'factor', default: 1, options: DENSITE },
      { id: 'supplement', label: 'Supplément (× 5 €)', kind: 'add', default: 0, options: supp(5) },
    ],
  },
  {
    id: 'lissactiv',
    label: 'Liss Activ',
    fields: [
      { id: 'longueur', label: 'Longueur', kind: 'factor', default: 1, options: [ { label: 'Courts', value: 20 }, { label: 'Mi-longs', value: 30 }, { label: 'Longs', value: 40 } ] },
      { id: 'densite', label: 'Densité', kind: 'factor', default: 1, options: DENSITE },
      { id: 'supplement', label: 'Supplément (× 5 €)', kind: 'add', default: 0, options: supp(5) },
    ],
  },
  {
    id: 'masque',
    label: 'Masque',
    fields: [
      { id: 'longueur', label: 'Longueur', kind: 'factor', default: 1, options: [ { label: 'Courts', value: 10 }, { label: 'Mi-longs', value: 15 }, { label: 'Longs', value: 20 } ] },
      { id: 'option', label: 'Option', kind: 'add', default: 0, options: [ { label: 'Aucune option', value: 0 }, { label: 'JustLiss (+5 €)', value: 5 }, { label: 'Patine (+10 €)', value: 10 }, { label: 'Patine + JustLiss (+15 €)', value: 15 } ] },
    ],
  },
  {
    id: 'patine',
    label: 'Patine',
    fields: [
      { id: 'longueur', label: 'Longueur', kind: 'factor', default: 1, options: [ { label: 'Courts', value: 15 }, { label: 'Mi-longs', value: 20 }, { label: 'Longs', value: 25 } ] },
    ],
  },
];
