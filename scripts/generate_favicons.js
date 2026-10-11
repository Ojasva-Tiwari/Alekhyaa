const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const sourcePath = path.join(__dirname, '..', 'public', 'images', 'brand', 'aalekhya-logo.png');
const publicDir = path.join(__dirname, '..', 'public');
const appDir = path.join(__dirname, '..', 'src', 'app');

function createIco(pngBuffers) {
  // pngBuffers: array of { width, height, buffer }
  const count = pngBuffers.length;
  const headerLength = 6;
  const dirEntryLength = 16;
  const totalHeaderSize = headerLength + count * dirEntryLength;

  let currentOffset = totalHeaderSize;
  const entries = [];

  for (const item of pngBuffers) {
    const entry = Buffer.alloc(dirEntryLength);
    entry.writeUInt8(item.width >= 256 ? 0 : item.width, 0); // width
    entry.writeUInt8(item.height >= 256 ? 0 : item.height, 1); // height
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8); // size of image data
    entry.writeUInt32LE(currentOffset, 12); // offset
    entries.push(entry);
    currentOffset += item.buffer.length;
  }

  const header = Buffer.alloc(headerLength);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // icon type (1 = icon)
  header.writeUInt16LE(count, 4); // number of images

  return Buffer.concat([header, ...entries, ...pngBuffers.map(p => p.buffer)]);
}

async function generate() {
  console.log('Generating AALEKHYA favicons from:', sourcePath);

  // Artwork bounds from analysis: minX=66, maxX=987, minY=220, maxY=769 (width=922, height=550)
  // Center is around X=526, Y=495.
  // We want a square crop centered around (526, 495) with a slight margin so the artwork fills the square cleanly.
  // A box of size 960x960 centered at 526, 495:
  // left = Math.round(526 - 480) = 46
  // top = Math.round(495 - 480) = 15
  // width = 960, height = 960
  // Note: 46 + 960 = 1006 <= 1024, 15 + 960 = 975 <= 1024!
  
  const cropBox = {
    left: 46,
    top: 15,
    width: 960,
    height: 960,
  };

  const croppedMaster = await sharp(sourcePath)
    .extract(cropBox)
    .toBuffer();

  // Also enhance contrast / sharpness slightly for extreme small sizes (16, 32)
  const sizes = [
    { size: 16, name: 'favicon-16x16.png' },
    { size: 32, name: 'favicon-32x32.png' },
    { size: 48, name: 'favicon-48x48.png' },
    { size: 64, name: 'favicon-64x64.png' },
    { size: 180, name: 'apple-touch-icon.png' },
    { size: 192, name: 'icon-192.png' },
    { size: 512, name: 'icon-512.png' },
  ];

  const icoFrames = [];

  for (const { size, name } of sizes) {
    const buffer = await sharp(croppedMaster)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 1 },
      })
      .png({ quality: 100 })
      .toBuffer();

    fs.writeFileSync(path.join(publicDir, name), buffer);
    console.log(`Saved public/${name}`);

    if (size === 16 || size === 32 || size === 48) {
      icoFrames.push({ width: size, height: size, buffer });
    }
  }

  // 1. Create public/favicon.ico
  const icoBuffer = createIco(icoFrames);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('Saved public/favicon.ico');

  // 2. Also save standard icon.png & favicon.png in public/
  const icon32 = await sharp(croppedMaster).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'icon.png'), icon32);
  fs.writeFileSync(path.join(publicDir, 'favicon.png'), icon32);
  console.log('Saved public/icon.png & public/favicon.png');

  // 3. Put Next.js file-based icons in src/app/
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(appDir, 'icon.png'), icon32);
  const apple180 = await sharp(croppedMaster).resize(180, 180).png().toBuffer();
  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), apple180);
  console.log('Saved src/app/favicon.ico, src/app/icon.png, src/app/apple-icon.png');
}

generate().catch(console.error);
