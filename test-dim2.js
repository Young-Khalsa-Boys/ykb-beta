import sharp from 'sharp';
import fs from 'fs';
const files = fs.readdirSync('src/assets/projects/salvation_army');

async function run() {
  for (const f of files) {
    if (!f.endsWith('.jpg')) continue;
    const meta = await sharp('src/assets/projects/salvation_army/' + f).metadata();
    console.log(f, meta.width, meta.height, meta.orientation);
  }
}
run();
