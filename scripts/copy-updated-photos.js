// scripts/copy-updated-photos.js
const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'public', 'assets');
const updatedDir = path.join(baseDir, 'Updated photos');

const copies = [
  // Hero photos
  { src: path.join(updatedDir, 'hero', 'Guitar Image.png'), dest: path.join(baseDir, 'hero', 'slider-1.jpg') },
  { src: path.join(updatedDir, 'hero', 'kathak- Landscape.png'), dest: path.join(baseDir, 'hero', 'slider-2.jpg') },
  { src: path.join(updatedDir, 'hero', 'Keyboard Landscape.png'), dest: path.join(baseDir, 'hero', 'slider-3.jpg') },
  { src: path.join(updatedDir, 'hero', 'Drums Lanscape.png'), dest: path.join(baseDir, 'hero', 'drums.png') },
  { src: path.join(updatedDir, 'hero', 'Western Dance- Kids.png'), dest: path.join(baseDir, 'hero', 'western-dance.png') },
  { src: path.join(updatedDir, 'hero', 'Vocal singing-kids.jpeg'), dest: path.join(baseDir, 'hero', 'vocal.jpeg') },

  // Course Cover photos
  { src: path.join(updatedDir, 'Programs Images', 'Western Dance - cover page_.jpg'), dest: path.join(baseDir, 'courses', 'Western-Dance.jpg') },
  { src: path.join(updatedDir, 'Programs Images', 'Kathak- Cover page_.png'), dest: path.join(baseDir, 'courses', 'dance.jpg') },
  { src: path.join(updatedDir, 'Programs Images', 'Vocal- Cover Page.jpg'), dest: path.join(baseDir, 'courses', 'Vocal-Music.jpg') },
  { src: path.join(updatedDir, 'Programs Images', 'Keyboard- cover page_.png'), dest: path.join(baseDir, 'courses', 'keyboard.jpg') },
  { src: path.join(updatedDir, 'Programs Images', 'Drums- Cover page_.jpg'), dest: path.join(baseDir, 'courses', 'Drum.jpg') },
  { src: path.join(updatedDir, 'Programs Images', 'Guitar- Cover Page_.png'), dest: path.join(baseDir, 'courses', 'guitar.jpg') },

  // Course Inside photos
  { src: path.join(updatedDir, 'Programs Images', 'Kathak Inside.png'), dest: path.join(baseDir, 'courses', 'Kathak-Inside.png') },
  { src: path.join(updatedDir, 'Programs Images', 'Vocal- Inside.jpg'), dest: path.join(baseDir, 'courses', 'Vocal-Inside.jpg') },
  { src: path.join(updatedDir, 'Programs Images', 'Keyboard- inside.JPG'), dest: path.join(baseDir, 'courses', 'Keyboard-Inside.JPG') },
  { src: path.join(updatedDir, 'Programs Images', 'Drums- Inside.jpg'), dest: path.join(baseDir, 'courses', 'Drums-Inside.jpg') },
  { src: path.join(updatedDir, 'Programs Images', 'Guitar- Inside.png'), dest: path.join(baseDir, 'courses', 'Guitar-Inside.png') },
  { src: path.join(updatedDir, 'Programs Images', 'Western Dance inside.png'), dest: path.join(baseDir, 'courses', 'Western-Dance-Inside.png') },

  // Testimonials photos
  { src: path.join(updatedDir, 'testimonials', 'annu-kapoor.png'), dest: path.join(baseDir, 'testimonials', 'anu-kapoor.jpg') },
  { src: path.join(updatedDir, 'testimonials', 'saroj-khan.png'), dest: path.join(baseDir, 'testimonials', 'saroj_khan.jpg') },
  { src: path.join(updatedDir, 'testimonials', 'shakti-kapoor.png'), dest: path.join(baseDir, 'testimonials', 'master-ji.jpg') },
  { src: path.join(updatedDir, 'testimonials', 'ismail-darbar.png'), dest: path.join(baseDir, 'testimonials', 'ismail-darbar.png') },
  { src: path.join(updatedDir, 'testimonials', 'marzi-pestonji.png'), dest: path.join(baseDir, 'testimonials', 'marzi-pestonji.png') },

  // Gallery photos
  { src: path.join(updatedDir, 'hero', 'Western Dance- Kids.png'), dest: path.join(baseDir, 'gallery', 'gallery-1.jpg') },
  { src: path.join(updatedDir, 'testimonials', 'annu-kapoor.png'), dest: path.join(baseDir, 'gallery', 'gallery-2.jpg') },
  { src: path.join(updatedDir, 'Programs Images', 'Kathak- Cover page_.png'), dest: path.join(baseDir, 'gallery', 'gallery-3.jpg') },
  { src: path.join(updatedDir, 'Programs Images', 'Guitar- Cover Page_.png'), dest: path.join(baseDir, 'gallery', 'gallery-4.jpg') },
  { src: path.join(updatedDir, 'Programs Images', 'Keyboard- cover page_.png'), dest: path.join(baseDir, 'gallery', 'gallery-5.jpg') },
  { src: path.join(updatedDir, 'testimonials', 'saroj-khan.png'), dest: path.join(baseDir, 'gallery', 'gallery-6.jpg') },
  { src: path.join(updatedDir, 'Programs Images', 'Drums- Cover page_.jpg'), dest: path.join(baseDir, 'gallery', 'gallery-7.jpg') },
  { src: path.join(updatedDir, 'Programs Images', 'Western Dance inside.png'), dest: path.join(baseDir, 'gallery', 'gallery-8.jpg') },
  { src: path.join(updatedDir, 'testimonials', 'shakti-kapoor.png'), dest: path.join(baseDir, 'gallery', 'gallery-9.jpg') },
  { src: path.join(updatedDir, 'hero', 'Vocal singing-kids.jpeg'), dest: path.join(baseDir, 'gallery', 'gallery-10.jpg') },
];

console.log('Copying updated photos...');
let count = 0;

for (const c of copies) {
  try {
    const dir = path.dirname(c.dest);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.copyFileSync(c.src, c.dest);
    console.log(`✓ Copied ${path.basename(c.src)} -> ${path.relative(baseDir, c.dest)}`);
    count++;
  } catch (err) {
    console.error(`✗ Error copying ${c.src}:`, err.message);
  }
}

console.log(`Finished copying ${count} updated photos.`);
