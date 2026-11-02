#!/usr/bin/env node
/* Downloads the public connector catalog from app.calibraautomation.com into
   data/integrations.json, used by build-directory.js to generate /integrations/.
   Usage: node scripts/fetch-integrations.js */
const fs = require('fs');
const path = require('path');

const API = 'https://app.calibraautomation.com/api/v1/pieces';
const OUT = path.join(__dirname, '..', 'data', 'integrations.json');
const CONCURRENCY = 6;

async function getJson(url) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    const res = await fetch(url, { headers: { accept: 'application/json' } });
    if (res.ok) return res.json();
    if (attempt === 3) throw new Error(`${res.status} for ${url}`);
    await new Promise((r) => setTimeout(r, 1000 * attempt));
  }
}

function slim(items) {
  return Object.values(items || {})
    .filter((i) => i && i.displayName)
    .map((i) => ({ name: i.name, displayName: i.displayName, description: i.description || '' }));
}

async function main() {
  const list = await getJson(`${API}?locale=en`);
  const out = [];
  let next = 0;
  async function worker() {
    while (next < list.length) {
      const item = list[next++];
      try {
        const d = await getJson(`${API}/${item.name}?locale=en`);
        out.push({
          name: d.name,
          displayName: d.displayName,
          description: d.description || '',
          logoUrl: d.logoUrl,
          categories: d.categories || [],
          actions: slim(d.actions),
          triggers: slim(d.triggers),
        });
      } catch (e) {
        console.error('skip', item.name, e.message);
      }
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  out.sort((a, b) => a.displayName.localeCompare(b.displayName, 'en'));
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(out));
  console.log(`saved ${out.length} of ${list.length} integrations`);
}

main().catch((e) => { console.error(e); process.exit(1); });
