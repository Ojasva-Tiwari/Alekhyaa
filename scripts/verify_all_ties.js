const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const downloadsDir = 'C:/Users/tojas/Downloads';
const targetDir = 'C:/Users/tojas/Alekhyaa/public/images/products';

async function verify() {
  console.log('Inspecting downloads...');
  const files = [
    'Alice in Chains.jpg',
    'Moonchild.jpg',
    'Devil in I.jpg',
    'Crimson Litanies.jpg',
    'Vermillion.jpg',
    'Parabola.jpg'
  ];

  for (const f of files) {
    const full = path.join(downloadsDir, f);
    const meta = await sharp(full).metadata();
    console.log(f, 'exists:', fs.existsSync(full), meta.width, 'x', meta.height);
  }
}

verify();
