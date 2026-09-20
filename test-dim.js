import sharp from 'sharp';

async function run() {
  const meta = await sharp('src/assets/projects/salvation_army/IMG_1274.jpg').metadata();
  console.log(meta.width, meta.height, meta.orientation);
}
run();
