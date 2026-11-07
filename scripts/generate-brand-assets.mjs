import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Read authentic vector glyph path
const uiLogoPath = path.resolve(rootDir, 'packages/ui/src/components/Logo.tsx');
const logoTsx = fs.readFileSync(uiLogoPath, 'utf8');
const match = logoTsx.match(/const KURZAGIN_EMBLEM_PATH =\s*'([^']+)';/);
if (!match) {
  throw new Error('Could not find KURZAGIN_EMBLEM_PATH in Logo.tsx');
}
const glyphPath = match[1];

// 1. Vector SVGs
const svgGlyphAmber = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024" fill="none">
  <path d="${glyphPath}" fill="#c49368" fill-rule="evenodd" />
</svg>`;

const svgGlyphCurrentColor = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024" fill="none">
  <path d="${glyphPath}" fill="currentColor" fill-rule="evenodd" />
</svg>`;

const svgBadge = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024" fill="none">
  <circle cx="512" cy="512" r="488" fill="#08080a" />
  <circle cx="512" cy="512" r="488" stroke="#c49368" stroke-width="20" stroke-opacity="0.8" />
  <circle cx="512" cy="512" r="460" stroke="#2a2a30" stroke-width="4" stroke-dasharray="8 8" />
  <circle cx="512" cy="24" r="8" fill="#c49368" />
  <circle cx="512" cy="1000" r="8" fill="#c49368" />
  <circle cx="24" cy="512" r="8" fill="#c49368" />
  <circle cx="1000" cy="512" r="8" fill="#c49368" />
  <path d="${glyphPath}" fill="#c49368" fill-rule="evenodd" />
</svg>`;

const svgBadgePurple = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024" fill="none">
  <circle cx="512" cy="512" r="488" fill="#050409" />
  <circle cx="512" cy="512" r="488" stroke="#b066ff" stroke-width="20" stroke-opacity="0.8" />
  <circle cx="512" cy="512" r="460" stroke="#331f4d" stroke-width="4" stroke-dasharray="8 8" />
  <circle cx="512" cy="24" r="8" fill="#b066ff" />
  <circle cx="512" cy="1000" r="8" fill="#b066ff" />
  <circle cx="24" cy="512" r="8" fill="#b066ff" />
  <circle cx="1000" cy="512" r="8" fill="#b066ff" />
  <path d="${glyphPath}" fill="#b066ff" fill-rule="evenodd" />
</svg>`;

const targetDirs = [
  path.resolve(rootDir, 'packages/ui/assets'),
  path.resolve(rootDir, 'apps/docs/public'),
  path.resolve(rootDir, '../personal-web-app/apps/web/public'),
];

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'logo.svg'), svgGlyphAmber);
  fs.writeFileSync(path.join(dir, 'logo-icon.svg'), svgGlyphCurrentColor);
  fs.writeFileSync(path.join(dir, 'favicon.svg'), svgBadge);
  fs.writeFileSync(path.join(dir, 'logo-badge.svg'), svgBadge);
  fs.writeFileSync(path.join(dir, 'logo-alley.svg'), svgBadgePurple);
}

console.log('✓ Assets synchronized across ui, docs, and web');
