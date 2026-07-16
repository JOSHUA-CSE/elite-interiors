import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const inputDir = 'D:/Interior/images';
const outputDir = 'D:/Interior/public/images';

const skipImage = 'WhatsApp Image 2026-07-16 at 13.08.12 (1).jpeg';
const sizes = [600, 1200, 1920];

async function processImages() {
  await fs.mkdir(outputDir, { recursive: true });
  
  const files = await fs.readdir(inputDir);
  const validFiles = files.filter(f => f.match(/\.(jpeg|jpg|png)$/i));

  const imageMappings = [];
  let index = 1;

  for (const file of validFiles) {
    if (file === skipImage) {
      console.log(`Skipping ${file}`);
      continue;
    }

    const inputPath = path.join(inputDir, file);
    const id = `img-${String(index).padStart(2, '0')}`;
    const outputBasename = path.join(outputDir, id);

    console.log(`Processing ${file} -> ${id}`);

    const versions = [];

    for (const size of sizes) {
      const outputPath = `${outputBasename}-${size}w.webp`;
      await sharp(inputPath)
        .resize({ width: size, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);
      versions.push({ width: size, url: `/images/${id}-${size}w.webp` });
    }

    const fallbackPath = `${outputBasename}.jpg`;
    await sharp(inputPath)
      .resize({ width: 1200, withoutEnlargement: true })
      .jpeg({ quality: 85 })
      .toFile(fallbackPath);

    imageMappings.push({
      id,
      originalName: file,
      fallback: `/images/${id}.jpg`,
      versions
    });

    index++;
  }

  await fs.mkdir('D:/Interior/src/data', { recursive: true });
  await fs.writeFile('D:/Interior/src/data/images.json', JSON.stringify(imageMappings, null, 2));

  console.log('Image processing complete! Mapped 14 images.');
}

processImages().catch(console.error);
