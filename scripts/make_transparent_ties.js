const sharp = require('sharp');
const path = require('path');

async function processImage(inputName, outputName) {
  const inputPath = path.join(__dirname, '..', 'public', 'images', 'products', inputName);
  const outputPath = path.join(__dirname, '..', 'public', 'images', 'products', outputName);

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const isBg = new Uint8Array(width * height);

  // Helper to test if a pixel is background white/near-white
  function isWhitePixel(x, y) {
    if (x < 0 || x >= width || y < 0 || y >= height) return false;
    const idx = (y * width + x) * channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    return r > 242 && g > 242 && b > 242;
  }

  // BFS Queue for flood filling exterior background only
  const queue = [];
  // Seed with border pixels
  for (let x = 0; x < width; x++) {
    if (isWhitePixel(x, 0)) { isBg[0 * width + x] = 1; queue.push(x, 0); }
    if (isWhitePixel(x, height - 1)) { isBg[(height - 1) * width + x] = 1; queue.push(x, height - 1); }
  }
  for (let y = 0; y < height; y++) {
    if (isWhitePixel(0, y)) { isBg[y * width + 0] = 1; queue.push(0, y); }
    if (isWhitePixel(width - 1, y)) { isBg[y * width + (width - 1)] = 1; queue.push(width - 1, y); }
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
        if (!isBg[nIndex] && isWhitePixel(nx, ny)) {
          isBg[nIndex] = 1;
          queue.push(nx, ny);
        }
      }
    }
  }

  // Set alpha for flood-filled background pixels only
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pIdx = (y * width + x);
      const dataIdx = pIdx * channels;
      if (isBg[pIdx]) {
        data[dataIdx + 3] = 0; // Transparent
      }
    }
  }

  await sharp(data, {
    raw: {
      width,
      height,
      channels
    }
  })
    .png({ quality: 98 })
    .toFile(outputPath);

  console.log(`Flood-fill complete for ${outputName}. Preserved all internal white artwork!`);
}

async function run() {
  await processImage('lateralus-primary.jpg', 'lateralus-cutout.png');
  await processImage('alice-in-chains-primary.jpg', 'alice-in-chains-cutout.png');
}

run().catch(console.error);
