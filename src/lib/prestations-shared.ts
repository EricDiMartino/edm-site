// Partagé par toutes les pages prestation (modèle réutilisable).
// Salons (provider + maillage) + areaServed + constructeur de schémas.
// AUCUN PRIX : les tarifs vivent dans le widget de réservation.
import { grenoble } from '../data/grenoble';
import { montbonnot } from '../data/montbonnot';
import { voiron } from '../data/voiron';
import { aixLesBains } from '../data/aix-les-bains';

const SALONS = [grenoble, montbonnot, voiron, aixLesBains];

export const salonsNav = [
  { ville: grenoble.ville, href: '/salon-de-coiffure/grenoble' },
  { ville: montbonnot.ville, href: '/salon-de-coiffure/montbonnot' },
  { ville: voiron.ville, href: '/salon-de-coiffure/voiron' },
  { ville: aixLesBains.ville, href: '/salon-de-coiffure/aix-les-bains' },
];

export const areaServed = [...new Set(SALONS.flatMap((s) => s.areaServed ?? []))];

const providers = SALONS.map((s) => ({
  '@type': 'HairSalon',
  name: `Eric Di Martino — ${s.ville}`,
  telephone: s.telephone,
  address: { '@type': 'PostalAddress', streetAddress: s.adresse, postalCode: s.codePostal, addressLocality: s.ville, addressCountry: 'FR' },
}));

export interface PrestationVariante { nom: string; texte: string }
export interface PrestationBenefit { titre: string; texte: string; icon: string }
export interface PrestationLien { titre: string; href: string }

export interface PrestationData {
  serviceType: string; // pour le schema Service
  reservationUrl: string;
  hero: { eyebrow: string; titre: string; lede: string; meta?: string };
  intro: { eyebrow: string; titre: string; paragraphes: string[]; lien?: PrestationLien };
  variantes?: { eyebrow: string; titre: string; intro?: string; items: PrestationVariante[] };
  benefices?: { eyebrow: string; titre: string; items: PrestationBenefit[] };
  maillage?: { titre: string; items: PrestationLien[] };
  faq: { question: string; reponse: string }[];
  cta: { titre: string; texte: string };
  seo: { title: string; description: string };
}

// Construit Service + BreadcrumbList + FAQPage. `site` = Astro.site.
export function buildPrestationSchemas(data: PrestationData, canonical: string, nom: string, site: URL | undefined) {
  const abs = (path: string) => new URL(path, site).href;
  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: data.serviceType,
    name: `${nom} — Eric Di Martino`,
    description: data.seo.description,
    url: canonical,
    areaServed,
    provider: providers,
  };
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: abs('/') },
      { '@type': 'ListItem', position: 2, name: 'Prestations', item: abs('/prestations-coiffure') },
      { '@type': 'ListItem', position: 3, name: nom, item: canonical },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faq.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.reponse } })),
  };
  return { service, breadcrumb, faqSchema };
}
