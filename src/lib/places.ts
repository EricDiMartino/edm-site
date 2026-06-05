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
  items: { texte: string; auteur: string; detail?: string; rating?: number; time?: number }[];
}

async function fetchDetails(placeId: string, key: string, sort: 'most_relevant' | 'newest') {
  const fields = 'rating,user_ratings_total,reviews,url';
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&language=fr&reviews_sort=${sort}&key=${key}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.status === 'OK' && data.result ? data.result : null;
}

// L'API Place Details plafonne à ~5 avis par requête. On interroge donc les DEUX
// tris (pertinents + récents), on fusionne, on dédoublonne, on ne garde que les 5★
// et on trie du plus récent au plus ancien → pool plus large d'avis 5★ récents.
export async function getGoogleReviews(placeId?: string, max = 8): Promise<LiveAvis | null> {
  const key = getKey();
  if (!placeId || !key) return null;
  try {
    const [relevant, newest] = await Promise.all([
      fetchDetails(placeId, key, 'most_relevant'),
      fetchDetails(placeId, key, 'newest'),
    ]);
    const r = relevant ?? newest;
    if (!r) return null;

    const seen = new Set<string>();
    const items = [...(relevant?.reviews ?? []), ...(newest?.reviews ?? [])]
      .filter((rev: any) => rev.rating === 5) // uniquement les 5 étoiles
      .filter((rev: any) => {
        const k = `${rev.author_name}|${rev.time}`;
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .sort((a: any, b: any) => (b.time ?? 0) - (a.time ?? 0)) // plus récent d'abord
      .slice(0, max)
      .map((rev: any) => ({
        texte: rev.text,
        auteur: rev.author_name,
        detail: rev.relative_time_description,
        rating: rev.rating,
        time: rev.time,
      }));

    return {
      note: String(r.rating ?? '').replace('.', ','),
      noteRaw: r.rating,
      total: r.user_ratings_total ?? 0,
      source: 'Google',
      url: r.url,
      items,
    };
  } catch {
    return null;
  }
}
