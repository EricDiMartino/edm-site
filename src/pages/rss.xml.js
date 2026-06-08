// Flux RSS du blog — généré automatiquement depuis la Content Collection.
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog', (e) => !e.data.draft)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );
  return rss({
    title: 'Eric Di Martino — Le journal',
    description: 'Conseils soin du cheveu, focus prestations et actualités des salons Eric Di Martino.',
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `/actualites/${p.id}/`,
      categories: [p.data.category],
    })),
  });
}
