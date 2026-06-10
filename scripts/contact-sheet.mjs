// Planche-contact : assemble les images d'un dossier en une grille (pour tri visuel).
// Usage : node scripts/contact-sheet.mjs "<dossier>" "<sortie.jpg>"
import { readdir } from 'node:fs/promises';
import { join, extname } from 'node:path';
import sharp from 'sharp';

const [dir, out] = process.argv.slice(2);
const EXT = new Set(['.webp', '.jpg', '.jpeg', '.png']);
const files = (await readdir(dir)).filter((f) => EXT.has(extname(f).toLowerCase())).sort();

const COLS = 4;
const CELL = 360;
const PAD = 10;
const rows = Math.ceil(files.length / COLS);
const W = COLS * CELL;
const H = rows * CELL;

const composites = [];
for (let i = 0; i < files.length; i++) {
  const col = i % COLS;
  const row = Math.floor(i / COLS);
  const thumb = await sharp(join(dir, files[i]))
    .resize({ width: CELL - PAD * 2, height: CELL - PAD * 2 - 22, fit: 'inside', withoutEnlargement: true })
    .toBuffer();
  composites.push({ input: thumb, left: col * CELL + PAD, top: row * CELL + PAD });
  // étiquette : numéro + nom de fichier
  const label = `#${i + 1}  ${files[i]}`;
  const svg = Buffer.from(
    `<svg width="${CELL - PAD * 2}" height="20"><text x="0" y="15" font-family="sans-serif" font-size="13" fill="#111">${label.replace(/&/g, '&amp;')}</text></svg>`,
  );
  composites.push({ input: svg, left: col * CELL + PAD, top: row * CELL + CELL - PAD - 16 });
}

await sharp({ create: { width: W, height: H, channels: 3, background: '#fff' } })
  .composite(composites)
  .jpeg({ quality: 82 })
  .toFile(out);

console.log(`${files.length} images → ${out}`);
files.forEach((f, i) => console.log(`  #${i + 1}  ${f}`));
