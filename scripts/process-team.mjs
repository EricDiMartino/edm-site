// Traite les portraits d'équipe choisis : recadrage carré centré sur le visage
// (attention crop), 560px, WebP → src/assets/salons/<ville>/equipe/<prenom>.webp
import { mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import sharp from 'sharp';

const SRC = 'public/PHOTO EQUIPE';
const OUT = 'src/assets/salons';
const W = 480;
const H = 640; // portrait 3:4 (correspond au design .portrait)

// ville-slug → [ [prenom-slug, fichier-source] ]
const MAP = {
  'aix-les-bains': { dir: 'AIX', people: [['agnes', 'Agnès.jpg'], ['fanny', 'Fanny-1.jpg'], ['jenna', 'Jenna-1.jpg'], ['laura', 'Laura.jpg']] },
  grenoble: { dir: 'GRENOBLE', people: [['eva', 'Eva-7.jpg'], ['lo-ann', 'LO-ann-2.jpg'], ['manon', 'Manon-1.jpg'], ['philippe', 'Philippe-1.jpg']] },
  montbonnot: { dir: 'MONTBONNOT', people: [['audrey', 'Audrey-1.jpg'], ['jeremy', 'Jeremy.jpg'], ['lidia', 'Lidia.jpg'], ['lili', 'Lili-2.jpg']] },
  voiron: { dir: 'VOIRON', people: [['charlotte', 'Charlotte.jpg'], ['emy', 'Emy.jpg'], ['lisa', 'Lisa.jpg'], ['manu', 'Manu-2.jpg'], ['sarah', 'Sarah-2.jpg']] },
};

let n = 0;
for (const [ville, { dir, people }] of Object.entries(MAP)) {
  for (const [slug, file] of people) {
    const out = `${OUT}/${ville}/equipe/${slug}.webp`;
    await mkdir(dirname(out), { recursive: true });
    await sharp(`${SRC}/${dir}/${file}`)
      .rotate()
      .resize(W, H, { fit: 'cover', position: sharp.strategy.attention })
      .webp({ quality: 82 })
      .toFile(out);
    n++;
    console.log(`  ${ville}/${slug}.webp  ←  ${dir}/${file}`);
  }
}
console.log(`\n${n} portraits traités.`);
