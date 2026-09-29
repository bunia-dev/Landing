import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import fs from 'fs';

const outDir = 'public';

// Exact logo path from the official SVG
const logoPath = 'M300 270 C300 248 318 230 340 230 H430 C452 230 470 248 470 270 V440 H710 C754 440 790 476 790 520 V710 C790 754 754 790 710 790 H340 C318 790 300 772 300 750 Z M555 565 C555 548 568 535 585 535 H635 C652 535 665 548 665 565 V665 C665 682 652 695 635 695 H585 C568 695 555 682 555 665 Z';

// White mark SVG for compositing on indigo
const markSvg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="none"><path fill="#F7F6F2" fill-rule="evenodd" clip-rule="evenodd" d="${logoPath}"/></svg>`);

async function generate() {
  const compositeLogo = async (size, bgFillColor, scale = 0.6) => {
    const mark = await sharp(markSvg).resize(Math.floor(size * scale), Math.floor(size * scale)).toBuffer();
    return sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: bgFillColor
      }
    }).composite([{ input: mark, gravity: 'center' }]).png();
  };

  // apple-touch-icon.png (180x180, indigo background)
  const appleImg = await compositeLogo(180, { r: 43, g: 47, b: 119, alpha: 1 });
  await appleImg.toFile(`${outDir}/apple-touch-icon.png`);

  // 192 & 512 (indigo background for PWA)
  const icon192 = await compositeLogo(192, { r: 43, g: 47, b: 119, alpha: 1 });
  await icon192.toFile(`${outDir}/icon-192.png`);
  
  const icon512 = await compositeLogo(512, { r: 43, g: 47, b: 119, alpha: 1 });
  await icon512.toFile(`${outDir}/icon-512.png`);

  // Maskable 512 (indigo background, 80% safe zone -> scale 0.8)
  const maskImg = await compositeLogo(512, { r: 43, g: 47, b: 119, alpha: 1 }, 0.8);
  await maskImg.toFile(`${outDir}/icon-maskable-512.png`);

  // og-image.png (1200x630, indigo background, off-white mark)
  const ogMark = await sharp(markSvg).resize(400, 400).toBuffer();
  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 43, g: 47, b: 119, alpha: 1 } // Indigo #2B2F77
    }
  })
  .composite([{ input: ogMark, gravity: 'center' }])
  .png()
  .toFile(`${outDir}/og-image.png`);

  // favicon.ico (16, 32, 48) - Indigo background for visibility
  const ico16 = await compositeLogo(16, { r: 43, g: 47, b: 119, alpha: 1 }).toBuffer();
  const ico32 = await compositeLogo(32, { r: 43, g: 47, b: 119, alpha: 1 }).toBuffer();
  const ico48 = await compositeLogo(48, { r: 43, g: 47, b: 119, alpha: 1 }).toBuffer();
  
  const icoBuffer = await pngToIco([ico16, ico32, ico48]);
  fs.writeFileSync(`${outDir}/favicon.ico`, icoBuffer);

  console.log('Icons generated successfully with the official logo geometry.');
}

generate().catch(console.error);