// Helpers de données structurées (schema.org) partagés.
// buildBreadcrumb : construit un BreadcrumbList à partir d'une liste ordonnée
// de { name, item }. La position est dérivée de l'ordre du tableau.
// Sortie strictement identique aux blocs écrits à la main auparavant.
export interface Crumb {
  name: string;
  item: string;
}

export function buildBreadcrumb(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.item,
    })),
  };
}
