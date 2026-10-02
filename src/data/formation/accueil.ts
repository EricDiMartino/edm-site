// ============================================================
// ACADEMY LEADER — ACCUEIL (/formation/)
// Texte = maquette validée, MOT À MOT (formation-src/maquette.html, écran « 01 Accueil »).
// Seuls écarts autorisés (validés le 28/09/2026) : doubles espaces / coquilles évidentes,
// et chiffres sans source masqués (« 50+ salons accompagnés », « ★ 4,9 note Google »).
// ============================================================
import type { Qa } from '../../components/formation/FormationFaq.astro';
import type { FinalCta } from '../../components/formation/FormationFinalCta.astro';
import { url } from './site';
import heroImg from '../../assets/formation/photos/eric-di-martino-formateur-coiffure-academy-leader.webp';
import ericImg from '../../assets/formation/photos/eric-di-martino-portrait.webp';
import xavierImg from '../../assets/formation/photos/xavier-paolucci-portrait.webp';
import lucieImg from '../../assets/formation/photos/lucie-shobbrook-portrait.webp';

export const seo = {
  title: 'Academy Leader · Formations et accompagnement pour gérants de salon de coiffure',
  description:
    "Ouvrir un salon rentable, le rendre autonome, former ton équipe jusqu'à 0 € de reste à charge. Par 3 associés qui dirigent 4 salons. Qualiopi.",
};

export const hero = {
  eyebrow: 'Formations et accompagnement · gérants de salon de coiffure',
  cta: { label: 'Découvre quelle offre est faite pour toi', sub: '2 minutes · prix affiché à la fin · sans appel', href: url.diagnostic },
  photo: { src: heroImg, alt: "Eric Di Martino, président d'EDXP Formation et formateur Academy Leader" },
};

/** Bandeau de preuve. « 50+ » et « ★ 4,9 » retirés tant que la source n'est pas fournie. */
export const stats = [
  { n: '4', l: 'salons en exploitation' },
  { n: '27', l: 'collaborateurs' },
  { n: '1,5 M€', l: "de chiffre d'affaires" },
];

/** « Academy Leader, c'est quoi ? » — repris tel quel dans le JSON-LD (description). */
export const enBrefTexte =
  "Academy Leader est le programme de formation et d'accompagnement propulsé par Eric Di Martino et ses associés. Organisme certifié Qualiopi basé à Montbonnot-Saint-Martin (Isère), il s'adresse aux gérants et futurs gérants de salon de coiffure : ouverture de salon (un projet par mois), accompagnement vers des salons autonomes (pour les salons à partir de ~300 000 € et plus de CA) et 9 formations d'équipe finançables par l'OPCO EP ou le FAFCEA. Eric et ses associés dirigent quatre salons en Isère et en Savoie et partagent tous leurs secrets à leurs membres.";

export const parcours = [
  {
    sit: "Tu as un projet d'ouverture",
    h: 'Ouvre un salon de coiffure rentable',
    p: "7 étapes menées avec toi, de l'étude du projet, jusqu'à la fin de ta deuxième année, nous garantissons le succès de ton projet.",
    tag: 'Création ou reprise - Salon premium à équipe',
    price: 'Sur sélection',
    cap: '1 projet / mois',
    cta: 'Voir le parcours →',
    href: url.ouvrir,
  },
  {
    sit: 'Tu as un salon qui fait 300K+',
    h: 'Rends ton salon autonome',
    p: 'De 40 h à 4 h par semaine. Six mois de coaching individuel pour rendre ton salon autonome et te concentrer sur tes projets ou ta vie perso.',
    tag: "6 mois · 6 Outils · 20 000 € d'outils offerts",
    price: 'À partir de 7 000 € HT',
    cap: '4 gérants / mois',
    cta: 'Voir le parcours →',
    href: url.accompagnement,
  },
  {
    sit: 'Fais progresser ton équipe',
    h: 'Forme ton équipe dans ton salon',
    p: '9 formations, 1 à 2 jours, chez toi ou en visio. Pour les coiffeurs visant le premium et qui en veulent toujours plus.',
    tag: 'Certifié Qualiopi · OPCO EP ou FAFCEA',
    price: '0 € de reste à charge*',
    cap: "Jusqu'à 8 pers.",
    cta: 'Voir le catalogue →',
    href: url.formations,
  },
];

export const methode = {
  label: 'La méthode',
  intro:
    "On t'a appris à couper et à faire des techniques. Personne ne t'a appris à lire une marge, à tenir une équipe, contrôler le flux de tes clients, à maîtriser ta rentabilité sans ton comptable, ni à organiser ta croissance. Toutes nos offres partent du même point.",
  items: [
    { n: '01', h: "Le chiffre avant l'avis", p: "On analyse ta situation managériale, financière et marketing. On valide ton processus de décision et on avance avec toi jusqu'à l'atteinte de tes projets." },
    { n: '02', h: 'Un processus clair', p: "Chaque étape est adaptée à ton avancement, mais l'ordre reste le même. Rentabilité, puis prix, puis flux client, puis équipe, puis panier moyen." },
    { n: '03', h: 'Testé dans nos murs', p: "Tout ce qu'on t'apprend tourne dans nos quatre salons. On ne transmet rien que l'on n'ait pas testé et appliqué dans nos propres salons." },
  ],
};

export const equipe = {
  label: 'Qui te forme',
  intro:
    "Est-ce que la personne qui te conseille a encore un salon aujourd'hui ? Nous oui. Grenoble, Montbonnot, Voiron, Aix-les-Bains et d'autres ouvertures en cours, toujours en nom propre.",
  derniere: { label: 'Dernière ouverture :', texte: 'Février 2026 - 200 m² à Grenoble' },
  associes: [
    { ini: 'ED', photo: ericImg, nom: 'Eric Di Martino', role: 'La technique et le métier', p: 'Président. A construit la méthode de consultation en 7 étapes. Anime toutes les formations présentielles.' },
    { ini: 'XP', photo: xavierImg, nom: 'Xavier Paolucci', role: 'Le business et le pilotage', p: 'Rentabilité par prestation, coût minute, grille tarifaire, management. Blocs Fondations et Management.' },
    { ini: 'LS', photo: lucieImg, nom: 'Lucie Shobbrook', role: "L'acquisition et la marque", p: 'Concept, positionnement, communication, flux client. Tu repars avec un plan, des scripts et une méthode de mesure.' },
  ],
};

export const faq: Qa[] = [
  { q: 'Quelle offre choisir entre formation, accompagnement et ouverture ?', a: "Ça dépend de ta situation : un projet d'ouverture relève de l'accompagnement ouverture, un salon à partir de ~300 000 € de CA de l'accompagnement Salon Autonome, une équipe à faire monter d'une formation financée. Le diagnostic de 2 minutes te le dit avec le prix." },
  { q: 'Les formations sont-elles financées ?', a: "Oui. L'OPCO EP prend en charge 25 € HT de l'heure sur les formations métier et 30 € HT sur les transverses, pour les salariés. Les gérants TNS relèvent du FAFCEA. Le reste à charge peut tomber à 0 €, sous réserve de ton plafond annuel." },
  { q: 'Où intervenez-vous ?', a: "Les formations présentielles ont lieu dans ton salon, partout en France, avec un forfait de déplacement selon la zone. L'accompagnement et les formations IA se font en visio." },
  { q: 'Qui sont les formateurs ?', a: "Eric Di Martino, Xavier Paolucci et Lucie Shobbrook, associés d'EDXP Formation. Ils dirigent quatre salons (Grenoble, Montbonnot, Voiron, Aix-les-Bains), 27 collaborateurs et 1,5 M€ de chiffre d'affaires." },
  { q: "Combien coûte l'accompagnement ?", a: "L'accompagnement Salon Autonome commence à 7 000 € HT pour six mois, facturé à la société. Le montant exact t'est donné à la fin du diagnostic, sans appel." },
];

export const finalCta: FinalCta = {
  label: 'Par où tu commences',
  h: 'Deux minutes pour savoir quelle offre est faite pour toi.',
  p: 'Neuf questions. À la fin, tu sais laquelle de nos trois offres correspond à ton moment, et son prix. Sans appel.',
  cta: 'Faire le diagnostic',
  sub: '2 minutes · gratuit',
  href: url.diagnostic,
};
