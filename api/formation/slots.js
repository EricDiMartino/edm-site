// GET /api/formation/slots — créneaux libres du calendrier GHL « entretien de validation »
// sur les 21 prochains jours. Réponse : { days: [{ date: 'AAAA-MM-JJ', slots: [ISO…] }] }
import { freeSlots, calendarFor, json } from './_ghl.js';

export async function GET(request) {
  try {
    const start = new Date();
    const end = new Date(start.getTime() + 21 * 24 * 3600 * 1000);
    const cal = new URL(request.url).searchParams.get('cal') || '';
    const map = await freeSlots(start, end, calendarFor(cal));
    const days = Object.keys(map).sort().map((date) => ({ date, slots: map[date] }));
    return json({ days });
  } catch (e) {
    console.error('[slots]', e?.message, e?.data);
    return json({ error: 'slots_unavailable' }, 502);
  }
}
