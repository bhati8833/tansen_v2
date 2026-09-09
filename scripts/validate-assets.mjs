#!/usr/bin/env node
// Asset-integrity guard for the course pages (zero-dependency).
// Verifies:
//   1. Every /assets/ path referenced in src/data/course-details.ts exists under public/
//   2. heroImage != introImage (except documented courses with no distinct asset)
//   3. galleryImages references are scoped to /assets/gallery/ and exist on disk
//   4. /assets/ paths on the /gallery page resolve too
// Run: npm run check:assets
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const publicDir = join(root, 'public');

// Courses that intentionally share the same image for hero and intro because
// no distinct *-inside asset exists on disk yet (tracked in TODO backlog).
const HERO_INTRO_EXCEPTIONS = new Set(['tabla', 'fine-arts']);

let failures = 0;

function fail(message) {
  console.error('  FAIL ' + message);
  failures++;
}

function checkAsset(srcFile, assetPath) {
  const rel = assetPath.replace(/^\/assets\//, 'assets/');
  const abs = join(publicDir, rel);
  if (!existsSync(abs)) {
    fail(`${assetPath} (referenced in ${srcFile}) -> missing under public/`);
    return false;
  }
  return true;
}

function extractAssetPaths(text) {
  return [...text.matchAll(/\/(assets\/[^']+)/g)].map((m) => '/' + m[1]);
}

const DATA_FILE = 'src/data/course-details.ts';
const data = readFileSync(join(root, DATA_FILE), 'utf8');

// 1) Every /assets/ path anywhere in the data file must exist.
for (const p of extractAssetPaths(data)) checkAsset(DATA_FILE, p);

// 2) Per-course hero/intro uniqueness + gallery scoping.
const courseBlocks = [...data.matchAll(/^\s{2}'([a-z0-9-]+)': \{/gm)];
for (let i = 0; i < courseBlocks.length; i++) {
  const slug = courseBlocks[i][1];
  const start = data.indexOf(courseBlocks[i][0]);
  const end = i + 1 < courseBlocks.length ? data.indexOf(courseBlocks[i + 1][0]) : data.length;
  const block = data.slice(start, end);

  const hero = (block.match(/heroImage: '([^']+)'/) || [])[1];
  const intro = (block.match(/introImage: '([^']+)'/) || [])[1];
  const galleryBlock = (block.match(/galleryImages: \[([\s\S]*?)\]/) || [])[1] || '';
  const gallery = galleryBlock.length > 0 ? extractAssetPaths(galleryBlock) : [];

  console.log(`\n${slug}:`);
  if (hero) {
    checkAsset(DATA_FILE, hero);
    console.log('  hero   ' + hero);
  }
  if (intro) {
    checkAsset(DATA_FILE, intro);
    console.log('  intro  ' + intro);
  }
  if (hero && intro && hero === intro && !HERO_INTRO_EXCEPTIONS.has(slug)) {
    fail(`${slug}: heroImage === introImage (${hero})`);
  }
  for (const g of gallery) {
    checkAsset(DATA_FILE, g);
    if (!g.startsWith('/assets/gallery/')) {
      fail(`${slug}: gallery image ${g} is outside /assets/gallery/`);
    }
  }
  if (gallery.length === 0) fail(`${slug}: galleryImages is empty`);
  console.log('  gallery[' + gallery.length + '] ' + gallery.join(', '));
}

// 3) Stray /assets/ references on the /gallery page must resolve too.
const GALLERY_PAGE = 'src/app/gallery/page.tsx';
const galleryPage = readFileSync(join(root, GALLERY_PAGE), 'utf8');
for (const p of extractAssetPaths(galleryPage)) checkAsset(GALLERY_PAGE, p);

console.log(failures === 0 ? '\nPASS' : `\nFAIL (${failures} problem(s))`);
process.exit(failures === 0 ? 0 : 1);