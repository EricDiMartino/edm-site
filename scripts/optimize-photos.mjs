// Optimisation des photos sources pour le web (perf mobile / CWV).
// Lit photos-src/originals/** et écrit des masters WebP allégés dans
// photos-src/optimized/** (même arborescence). Ces masters sont destinés à
// être uploadés dans les assets Storyblok — ils ne sont PAS commités (gitignorés).
//
// Réglages : long côté ≤ 2560 px (jamais d'agrandissement), WebP qualité 80,
// auto-rotation EXIF, métadonnées strippées (par défaut sharp).
//
// Usage : node scripts/optimize-photos.mjs

import { readdir, mkdir, stat } from "node:fs/promises";
import { join, relative, dirname, extname } from "node:path";
import sharp from "sharp";

const SRC = "photos-src/originals";
const OUT = "photos-src/optimized";
const MAX = 2560;
const QUALITY = 80;
const EXT = new Set([".jpg", ".jpeg", ".png"]);

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (EXT.has(extname(e.name).toLowerCase())) out.push(p);
  }
  return out;
}

const mb = (b) => (b / 1048576).toFixed(1) + " Mo";

// Slug SEO : minuscules, sans accents, alphanumérique + tirets.
const slug = (s) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const files = (await walk(SRC)).sort();
if (!files.length) {
  console.log(`Aucune image dans ${SRC}/`);
  process.exit(0);
}

console.log(`${files.length} image(s) → WebP (long côté ≤ ${MAX}px, qualité ${QUALITY})\n`);
let totalIn = 0;
let totalOut = 0;

for (const f of files) {
  // Renommage SEO automatique : eric-di-martino-<salon>-<photo>.webp, rangé par salon.
  const seg = relative(SRC, f).split(/[\\/]/);
  const top = slug(seg[0]); // dossier racine = salon/sujet
  const base = slug(seg[seg.length - 1].replace(/\.[^.]+$/, ""));
  const rel = `${top}/eric-di-martino-${top}-${base}.webp`;
  const outPath = join(OUT, rel);
  await mkdir(dirname(outPath), { recursive: true });
  await sharp(f)
    .rotate() // applique l'orientation EXIF
    .resize({ width: MAX, height: MAX, fit: "inside", withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(outPath);
  const si = (await stat(f)).size;
  const so = (await stat(outPath)).size;
  totalIn += si;
  totalOut += so;
  console.log(`  ${rel}\n    ${mb(si)} → ${mb(so)}`);
}

const pct = totalIn ? (100 - (totalOut / totalIn) * 100).toFixed(0) : 0;
console.log(`\nTotal : ${mb(totalIn)} → ${mb(totalOut)}  (−${pct} %)`);
console.log(`Masters optimisés dans ${OUT}/ (gitignorés, prêts pour l'upload Storyblok).`);
