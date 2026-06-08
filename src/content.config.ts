// Content Collections — BLOG / Actualités.
// Automation-ready : un article = un fichier Markdown dans src/content/blog/.
// Un agent/routine dépose un .md conforme au schéma → liste + page + RSS + sitemap auto.
// Les fichiers préfixés "_" (ex. _template.md) sont ignorés.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(), // méta description + extrait (≤ ~160 car.)
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.enum(['Conseils soin', 'Territoire Isère', 'Coulisses & équipe', 'Focus prestations']),
    cover: z.string().optional(), // chemin/URL image (sinon dégradé)
    author: z.string().default('Eric Di Martino'),
    tags: z.array(z.string()).default([]),
    // FAQ → schema FAQPage (carburant GEO)
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    // Maillage interne : liens vers prestations/salons/consultation liés
    related: z.array(z.object({ titre: z.string(), href: z.string() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
