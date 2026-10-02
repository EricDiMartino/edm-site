// POST /api/formation/book — réserve le créneau choisi dans le calendrier GHL.
// Sans contactId (visiteur hors diagnostic), le contact est d'abord créé.
// Réponse : { ok: true, startTime } ou { error: 'slot_taken' | 'invalid' | … }
import { upsertContact, bookAppointment, json, sameOrigin, clean, isEmail } from './_ghl.js';

export async function POST(request) {
  if (!sameOrigin(request)) return json({ error: 'forbidden' }, 403);
  let b;
  try { b = await request.json(); } catch { return json({ error: 'bad_request' }, 400); }
  if (clean(b.website)) return json({ ok: true }); // pot de miel

  const startTime = clean(b.startTime, 40);
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(startTime) || Number.isNaN(Date.parse(startTime))) return json({ error: 'invalid_slot' }, 400);

  try {
    let contactId = clean(b.contactId, 60);
    const firstName = clean(b.fn, 80);
    if (!contactId) {
      const email = clean(b.em, 160).toLowerCase();
      if (!firstName || !isEmail(email)) return json({ error: 'invalid' }, 400);
      contactId = await upsertContact({
        firstName,
        email,
        phone: clean(b.tel, 30),
        tags: ['academy-leader', 'rdv-site'],
        source: 'Réservation ericdimartino.com/formation',
      });
    }
    await bookAppointment(contactId, startTime, `Entretien de validation — ${firstName || 'Academy Leader'}`);
    return json({ ok: true, startTime });
  } catch (e) {
    console.error('[book]', e?.message, e?.data);
    if ([400, 409, 422].includes(e?.status)) return json({ error: 'slot_taken' }, 409);
    return json({ error: 'crm_unavailable' }, 502);
  }
}
