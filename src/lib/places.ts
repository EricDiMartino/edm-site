// Récupère les avis Google d'un salon au BUILD (rendu statique, zéro JS client).
// Clé lue depuis process.env (Vercel) ou .env local. Repli silencieux (null) si
// clé absente ou erreur → la page utilise alors les avis placeholder.
import { readFileSync } from 'node:fs';

function getKey(): string | undefined {
  if (process.env.GOOGLE_PLACES_API_KEY) return process.env.GOOGLE_PLACES_API_KEY;
  try {
    const m = readFileSync('.env', 'utf8').match(/^GOOGLE_PLACES_API_KEY=(.+)$/m);
    return m?.[1]?.trim();
  } catch {
    return undefined;
  }
}

export interface LiveAvis {
  note: string; // "4,7" (affichage)
  noteRaw: number; // 4.7 (schema)
  total: number;
  source: string;
  url?: string; // lien fiche Google (attribution)
  items: { texte: string; auteur: string; detail?: string; rating?: number }[];
}

export async function getGoogleReviews(placeId?: string, max = 6): Promise<LiveAvis | null> {
  const key = getKey();
  if (!placeId || !key) return null;
  try {
    const fields = 'rating,user_ratings_total,reviews,url';
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&language=fr&reviews_sort=most_relevant&key=${key}`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.status !== 'OK' || !data.result) return null;
    const r = data.result;
    return {
      note: String(r.rating ?? '').replace('.', ','),
      noteRaw: r.rating,
      total: r.user_ratings_total ?? 0,
      source: 'Google',
      url: r.url,
      items: (r.reviews ?? [])
        .filter((rev: any) => rev.rating === 5) // uniquement les 5 étoiles
        .slice(0, max)
        .map((rev: any) => ({
          texte: rev.text,
          auteur: rev.author_name,
          detail: rev.relative_time_description,
          rating: rev.rating,
        })),
    };
  } catch {
    return null;
  }
}
