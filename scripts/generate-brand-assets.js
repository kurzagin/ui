const fs = require('fs');
const path = require('path');
const PNG = require('/root/projects/youtube-to-opus/node_modules/pngjs').PNG;

const glyphPath = fs.readFileSync('/tmp/glyph_path.txt', 'utf8').trim();

// -------------------------------------------------------------
// 1. Vector SVGs across all background / color themes
// -------------------------------------------------------------
const themes = [
  { name: 'default', bg: '#08080a', fg: '#c49368', ring: '#c49368', sub: '#2a2a30' },
  { name: 'alley',   bg: '#050409', fg: '#b066ff', ring: '#b066ff', sub: '#331f4d' },
  { name: 'teal',    bg: '#040b0b', fg: '#50b0b0', ring: '#50b0b0', sub: '#123838' },
  { name: 'mono',    bg: '#0a0a0c', fg: '#e2ded6', ring: '#4a4a52', sub: '#2a2a30' },
  { name: 'clean',   bg: '#000000', fg: '#ffffff', ring: '#ffffff', sub: '#333333' },
];

function makeBadgeSvg(theme) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024" fill="none">
  <circle cx="512" cy="512" r="488" fill="${theme.bg}" />
  <circle cx="512" cy="512" r="488" stroke="${theme.ring}" stroke-width="20" stroke-opacity="0.85" />
  <circle cx="512" cy="512" r="460" stroke="${theme.sub}" stroke-width="4" stroke-dasharray="8 8" />
  <!-- Corner tactical HUD pips -->
  <circle cx="512" cy="24" r="8" fill="${theme.fg}" />
  <circle cx="512" cy="1000" r="8" fill="${theme.fg}" />
  <circle cx="24" cy="512" r="8" fill="${theme.fg}" />
  <circle cx="1000" cy="512" r="8" fill="${theme.fg}" />
  <path d="${glyphPath}" fill="${theme.fg}" fill-rule="evenodd" />
</svg>`;
}

function makeAdaptiveForegroundSvg(theme) {
  // Android adaptive icon foreground: safe zone is central 66% (circle r=340 at 512,512)
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024" fill="none">
  <path d="${glyphPath}" fill="${theme.fg}" fill-rule="evenodd" />
</svg>`;
}

function makeAdaptiveBackgroundSvg(theme) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024">
  <rect width="1024" height="1024" fill="${theme.bg}" />
</svg>`;
}

// -------------------------------------------------------------
// 2. Resampling & Image Buffers
// -------------------------------------------------------------
const srcBuf = fs.readFileSync('/root/projects/ui/packages/ui/assets/icon.png');
const srcPng = PNG.sync.read(srcBuf);

function resizePng(source, targetWidth, targetHeight) {
  const dest = new PNG({ width: targetWidth, height: targetHeight });
  const xRatio = (source.width - 1) / (targetWidth - 1 || 1);
  const yRatio = (source.height - 1) / (targetHeight - 1 || 1);

  for (let y = 0; y < targetHeight; y++) {
    const srcY = y * yRatio;
    const y0 = Math.floor(srcY);
    const y1 = Math.min(y0 + 1, source.height - 1);
    const yWeight = srcY - y0;

    for (let x = 0; x < targetWidth; x++) {
      const srcX = x * xRatio;
      const x0 = Math.floor(srcX);
      const x1 = Math.min(x0 + 1, source.width - 1);
      const xWeight = srcX - x0;

      const idx00 = (y0 * source.width + x0) * 4;
      const idx10 = (y0 * source.width + x1) * 4;
      const idx01 = (y1 * source.width + x0) * 4;
      const idx11 = (y1 * source.width + x1) * 4;

      const destIdx = (y * targetWidth + x) * 4;

      for (let c = 0; c < 4; c++) {
        const top = source.data[idx00 + c] * (1 - xWeight) + source.data[idx10 + c] * xWeight;
        const bottom = source.data[idx01 + c] * (1 - xWeight) + source.data[idx11 + c] * xWeight;
        dest.data[destIdx + c] = Math.round(top * (1 - yWeight) + bottom * yWeight);
      }
    }
  }
  return dest;
}

// Create theme-tinted versions of icon.png (for background/theme variants)
function tintIconPng(source, theme) {
  // Extract hex RGB
  const hexToRgb = (hex) => {
    const num = parseInt(hex.replace('#', ''), 16);
    return [ (num >> 16) & 255, (num >> 8) & 255, num & 255 ];
  };
  const [bgR, bgG, bgB] = hexToRgb(theme.bg);
  const [fgR, fgG, fgB] = hexToRgb(theme.fg);

  const out = new PNG({ width: source.width, height: source.height });
  for (let y = 0; y < source.height; y++) {
    for (let x = 0; x < source.width; x++) {
      const idx = (y * source.width + x) * 4;
      const a = source.data[idx + 3];
      if (a === 0) {
        out.data[idx] = 0;
        out.data[idx+1] = 0;
        out.data[idx+2] = 0;
        out.data[idx+3] = 0;
        continue;
      }
      const r = source.data[idx];
      const g = source.data[idx+1];
      const b = source.data[idx+2];
      const lum = (r * 0.299 + g * 0.587 + b * 0.114) / 255;

      if (lum < 0.2) {
        // Dark background portion
        const factor = lum / 0.2;
        out.data[idx] = Math.round(bgR * factor);
        out.data[idx+1] = Math.round(bgG * factor);
        out.data[idx+2] = Math.round(bgB * factor);
        out.data[idx+3] = a;
      } else {
        // Foreground glyph/ring portion
        const factor = Math.min(1, (lum - 0.2) / 0.8);
        out.data[idx] = Math.round(bgR * (1 - factor) + fgR * factor);
        out.data[idx+1] = Math.round(bgG * (1 - factor) + fgG * factor);
        out.data[idx+2] = Math.round(bgB * (1 - factor) + fgB * factor);
        out.data[idx+3] = a;
      }
    }
  }
  return out;
}

// All standard favicon & app icon sizes
const faviconSpecs = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'favicon-64x64.png', size: 64 },
  { name: 'favicon-96x96.png', size: 96 },
  { name: 'favicon-128x128.png', size: 128 },
  { name: 'apple-touch-icon-120x120.png', size: 120 },
  { name: 'apple-touch-icon-152x152.png', size: 152 },
  { name: 'apple-touch-icon-167x167.png', size: 167 },
  { name: 'apple-touch-icon-180x180.png', size: 180 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'pwa-192x192.png', size: 192 },
  { name: 'pwa-256x256.png', size: 256 },
  { name: 'pwa-384x384.png', size: 384 },
  { name: 'pwa-512x512.png', size: 512 },
  { name: 'pwa-maskable-192x192.png', size: 192 },
  { name: 'pwa-maskable-512x512.png', size: 512 },
];

// Target directories to populate
const targetDirs = [
  '/root/projects/ui/packages/ui/assets',
  '/root/projects/ui/apps/docs/public',
  '/root/projects/personal-web-app/apps/mobile/assets',
  '/root/projects/personal-web-app/apps/web/public',
  '/root/projects/youtube-to-opus/apps/mobile/assets',
];

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// Write Theme SVGs
for (const theme of themes) {
  const badgeSvg = makeBadgeSvg(theme);
  const fgSvg = makeAdaptiveForegroundSvg(theme);
  const bgSvg = makeAdaptiveBackgroundSvg(theme);

  for (const dir of targetDirs) {
    fs.writeFileSync(path.join(dir, `logo-${theme.name}.svg`), badgeSvg);
    fs.writeFileSync(path.join(dir, `android-foreground-${theme.name}.svg`), fgSvg);
    fs.writeFileSync(path.join(dir, `android-background-${theme.name}.svg`), bgSvg);
  }
}
console.log('✓ All theme vector SVGs written');

// Generate all Favicon sizes
const icoSizes = [16, 32, 48, 64];
const icoPngs = {};

for (const spec of faviconSpecs) {
  const resized = resizePng(srcPng, spec.size, spec.size);
  const buf = PNG.sync.write(resized);
  if (icoSizes.includes(spec.size)) {
    icoPngs[spec.size] = buf;
  }
  for (const dir of targetDirs) {
    fs.writeFileSync(path.join(dir, spec.name), buf);
  }
}
console.log('✓ All favicon PNG dimensions written (16, 32, 48, 64, 96, 120, 128, 152, 167, 180, 192, 256, 384, 512)');

// Generate Alley and Teal icon variants (1024x1024)
const alleyIconPng = tintIconPng(srcPng, themes[1]);
const alleyBuf = PNG.sync.write(alleyIconPng);
const tealIconPng = tintIconPng(srcPng, themes[2]);
const tealBuf = PNG.sync.write(tealIconPng);

for (const dir of targetDirs) {
  fs.writeFileSync(path.join(dir, 'icon-alley.png'), alleyBuf);
  fs.writeFileSync(path.join(dir, 'icon-teal.png'), tealBuf);
}
console.log('✓ Alley & Teal 1024x1024 icons written');

// Generate Multi-resolution ICO (16, 32, 48, 64)
function pngsToIco(items) {
  const count = items.length;
  let offset = 6 + 16 * count;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // 1 = ICO
  header.writeUInt16LE(count, 4); // Number of images

  const entries = [];
  for (const item of items) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(item.width >= 256 ? 0 : item.width, 0);
    entry.writeUInt8(item.height >= 256 ? 0 : item.height, 1);
    entry.writeUInt8(0, 2); // Color palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8); // Image byte size
    entry.writeUInt32LE(offset, 12); // Image byte offset
    entries.push(entry);
    offset += item.buffer.length;
  }

  return Buffer.concat([header, ...entries, ...items.map((i) => i.buffer)]);
}

const icoBuffer = pngsToIco(icoSizes.map(size => ({ width: size, height: size, buffer: icoPngs[size] })));

for (const dir of targetDirs) {
  fs.writeFileSync(path.join(dir, 'favicon.ico'), icoBuffer);
}
console.log('✓ Comprehensive multi-resolution favicon.ico written (16, 32, 48, 64)');
