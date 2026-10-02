// POST /api/formation/lead — fin du diagnostic : crée/met à jour le contact dans GHL
// (tags + note avec les réponses), AVANT la réservation : un prospect qui ne réserve pas
// n'est donc plus perdu. Réponse : { contactId }
import { upsertContact, addNote, json, sameOrigin, clean, isEmail } from './_ghl.js';

export async function POST(request) {
  if (!sameOrigin(request)) return json({ error: 'forbidden' }, 403);
  let b;
  try { b = await request.json(); } catch { return json({ error: 'bad_request' }, 400); }
  if (clean(b.website)) return json({ contactId: null }); // pot de miel anti-robot

  const firstName = clean(b.fn, 80);
  const lastName = clean(b.ln, 80);
  const email = clean(b.em, 160).toLowerCase();
  const phone = clean(b.tel, 30);
  const segment = clean(b.segment, 30);
  if (!firstName || !isEmail(email)) return json({ error: 'invalid' }, 400);

  try {
    const contactId = await upsertContact({
      firstName,
      lastName,
      email,
      phone,
      tags: ['academy-leader', 'diagnostic-site', segment ? `diag-${segment.toLowerCase()}` : 'diag'],
      source: 'Diagnostic ericdimartino.com/formation',
    });
    const answers = Array.isArray(b.answers) ? b.answers.slice(0, 20).map((a) => `• ${clean(a?.q, 120)} → ${clean(a?.a, 120)}`) : [];
    const utm = b.utm && typeof b.utm === 'object' ? Object.entries(b.utm).map(([k, v]) => `${clean(k, 30)}=${clean(v, 120)}`).join(' · ') : '';
    const note = [`Diagnostic Academy Leader — résultat : ${segment || 'n/a'}`, ...answers, utm ? `UTM : ${utm}` : '', `Page : ${clean(b.page, 200)}`]
      .filter(Boolean)
      .join('\n');
    try { await addNote(contactId, note); } catch (e) { console.error('[lead] note', e?.message, e?.data); }
    return json({ contactId });
  } catch (e) {
    console.error('[lead]', e?.message, e?.data);
    return json({ error: 'crm_unavailable' }, 502);
  }
}
