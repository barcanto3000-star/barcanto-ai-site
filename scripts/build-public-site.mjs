import { cpSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('../', import.meta.url).pathname;
const output = process.env.BARCANTO_PUBLIC_OUTPUT || join(root, 'public');
const files = [
  '404.html',
  'app.js',
  'director.css',
  'herms-video.css',
  'herms-video.html',
  'index.html',
  'privacy.html',
  'robots.txt',
  'sitemap.xml',
  'styles.css',
  'terms.html',
  'tiktokNSA6WrjEbFUJYjgT1fOTYWDkHca40oPk.txt',
  'tiktokO50zu9Bbrg0HO5HFjcPgyiiDFJIUZ2T4.txt',
  'tiktokWuHCOtIQQmStvGPmBxaJvTKGicsgdl5W.txt',
  'oauth2callback/index.html',
  'assets/images/barcanto-b-city-concept-2026.png',
  'assets/images/barcanto-cinematic-coast-2026.png',
];

if (existsSync(output)) throw new Error(`Refusing to overwrite existing output: ${output}`);
mkdirSync(output, { recursive: true });
for (const file of files) {
  const destination = join(output, file);
  mkdirSync(join(destination, '..'), { recursive: true });
  cpSync(join(root, file), destination);
}
writeFileSync(join(output, '.nojekyll'), '');
console.log(`Built public site with ${files.length} files.`);
