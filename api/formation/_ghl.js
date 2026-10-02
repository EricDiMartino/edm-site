// ============================================================
// Pont GoHighLevel (API v2) — fonctions serveur Vercel (dossier api/, hors build Astro).
// Fichier préfixé « _ » : utilitaire, pas une route.
// Jeton : variable d'env Vercel GHL_PRIVATE_TOKEN (intégration privée du sous-compte
// « Eric Di Martino - Formation »). Jamais exposé au navigateur.
// Autorisations : calendars.readonly, calendars/events.(read|write), contacts.(read|write).
// ============================================================

export const GHL = {
  base: 'https://services.leadconnectorhq.com',
  locationId: 'YAnexmjlEQWx4ii9j82p',
  calendarId: 'SnP8lLdQOua0TtyKsXKn', // entretien de validation 30 min
  timezone: 'Europe/Paris',
};

async function call(path, { method = 'GET', body, version }) {
  const token = process.env.GHL_PRIVATE_TOKEN;
  if (!token) throw new Error('GHL_PRIVATE_TOKEN manquant');
  const res = await fetch(GHL.base + path, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      Version: version,
      Accept: 'application/json',
      ...(body ? { 'Content-Type': 'application/json' } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let data = null;
  try { data = text ? JSON.parse(text) : null; } catch { data = text; }
  if (!res.ok) {
    const err = new Error(`GHL ${res.status} ${path}`);
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

/** Créneaux libres → { 'AAAA-MM-JJ': ['2026-10-05T09:30:00+02:00', …] } */
export async function freeSlots(start, end) {
  const q = new URLSearchParams({ startDate: String(start.getTime()), endDate: String(end.getTime()), timezone: GHL.timezone });
  const data = await call(`/calendars/${GHL.calendarId}/free-slots?${q}`, { version: '2021-04-15' });
  const out = {};
  for (const [k, v] of Object.entries(data || {})) {
    if (/^\d{4}-\d{2}-\d{2}$/.test(k) && v && Array.isArray(v.slots)) out[k] = v.slots;
  }
  return out;
}

/** Crée ou met à jour le contact (dédoublonné par GHL sur email / téléphone). Renvoie son id. */
export async function upsertContact({ firstName, email, phone, tags = [], source }) {
  const data = await call('/contacts/upsert', {
    method: 'POST',
    version: '2021-07-28',
    body: { locationId: GHL.locationId, firstName, email, ...(phone ? { phone } : {}), tags, source: source || 'Site ericdimartino.com/formation' },
  });
  const id = data?.contact?.id;
  if (!id) throw new Error('GHL : id contact absent');
  return id;
}

/** Note texte sur le contact (réponses du diagnostic, UTM…). */
export function addNote(contactId, body) {
  return call(`/contacts/${contactId}/notes`, { method: 'POST', version: '2021-07-28', body: { body } });
}

/** Réserve un créneau (GHL refuse si le créneau n'est plus libre). */
export function bookAppointment(contactId, startTime, title) {
  return call('/calendars/events/appointments', {
    method: 'POST',
    version: '2021-04-15',
    body: { calendarId: GHL.calendarId, locationId: GHL.locationId, contactId, startTime, title, appointmentStatus: 'confirmed' },
  });
}

// ---------- utilitaires HTTP ----------
export const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });

/** Refuse les appels venant d'un autre site. */
export function sameOrigin(request) {
  const o = request.headers.get('origin');
  if (!o) return true;
  try {
    const h = new URL(o).hostname;
    return h === 'www.ericdimartino.com' || h === 'ericdimartino.com' || h.endsWith('.vercel.app') || h === 'localhost';
  } catch {
    return false;
  }
}

export const clean = (v, max = 200) => String(v ?? '').trim().slice(0, max);
export const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
