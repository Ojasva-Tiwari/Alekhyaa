const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const dir = path.join(__dirname, '..', 'public', 'images', 'products');

async function processCutout(inputName, outputName) {
  const inputPath = path.join(dir, inputName);
  const outputPath = path.join(dir, outputName);

  if (!fs.existsSync(inputPath)) {
    console.error(`Missing input file: ${inputName}`);
    return;
  }

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const isBg = new Uint8Array(width * height);

  function isWhite(x, y) {
    if (x < 0 || x >= width || y < 0 || y >= height) return false;
    const idx = (y * width + x) * channels;
    const r = data[idx], g = data[idx + 1], b = data[idx + 2];
    return r > 240 && g > 240 && b > 240;
  }

  const queue = [];
  for (let x = 0; x < width; x++) {
    if (isWhite(x, 0)) { isBg[0 * width + x] = 1; queue.push(x, 0); }
    if (isWhite(x, height - 1)) { isBg[(height - 1) * width + x] = 1; queue.push(x, height - 1); }
  }
  for (let y = 0; y < height; y++) {
    if (isWhite(0, y)) { isBg[y * width + 0] = 1; queue.push(0, y); }
    if (isWhite(width - 1, y)) { isBg[y * width + (width - 1)] = 1; queue.push(width - 1, y); }
  }

  let head = 0;
  while (head < queue.length) {
    const cx = queue[head++];
    const cy = queue[head++];

    const neighbors = [
      [cx + 1, cy],
      [cx - 1, cy],
      [cx, cy + 1],
      [cx, cy - 1]
    ];

    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nIndex = ny * width + nx;
        if (!isBg[nIndex] && isWhite(nx, ny)) {
          isBg[nIndex] = 1;
          queue.push(nx, ny);
        }
      }
    }
  }

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pIdx = (y * width + x);
      const dataIdx = pIdx * channels;
      if (isBg[pIdx]) {
        data[dataIdx + 3] = 0;
      }
    }
  }

  await sharp(data, {
    raw: { width, height, channels }
  })
    .png({ quality: 95 })
    .toFile(outputPath);

  console.log(`Generated cutout: ${outputName} (${width}x${height})`);
}

async function run() {
  const items = [
    ['lateralus-primary.jpg', 'lateralus-cutout.png'],
    ['alice-in-chains-primary.jpg', 'alice-in-chains-cutout.png'],
    ['moonchild-primary.jpg', 'moonchild-cutout.png'],
    ['devil-in-i-primary.jpg', 'devil-in-i-cutout.png'],
    ['crimson-litanies-primary.jpg', 'crimson-litanies-cutout.png'],
    ['vermillion-primary.jpg', 'vermillion-cutout.png'],
    ['parabola-primary.jpg', 'parabola-cutout.png']
  ];

  for (const [inp, outp] of items) {
    await processCutout(inp, outp);
  }
}

run().catch(console.error);
