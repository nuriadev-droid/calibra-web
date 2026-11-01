#!/usr/bin/env node
/* Calibra — web de producto (calibraautomation.com)
   Copia producto/ y marca/ a dist/ y crea una página de redirección por cada
   URL antigua de la web de servicios, que ahora vive en studio.calibraautomation.com.
   Uso: node build-site.js */
const fs = require('fs');
const path = require('path');
const SRC = __dirname, OUT = path.join(SRC, 'dist');
const DOMAIN = 'https://calibraautomation.com';
const STUDIO = 'https://studio.calibraautomation.com';
const TODAY = new Date().toISOString().slice(0, 10);

fs.rmSync(OUT, { recursive: true, force: true });
fs.cpSync(path.join(SRC, 'producto'), OUT, { recursive: true });
fs.cpSync(path.join(SRC, 'marca'), path.join(OUT, 'marca'), { recursive: true });

const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
const stub = to => `<!doctype html>
<html lang="es"><head><meta charset="utf-8">
<title>Calibra Studio</title>
<link rel="canonical" href="${esc(to)}">
<meta name="robots" content="noindex,follow">
<meta http-equiv="refresh" content="0; url=${esc(to)}">
<script>location.replace(${JSON.stringify(to)} + location.search + location.hash);</script>
</head><body style="background:#05060B;color:#F1F3FA;font-family:system-ui,sans-serif;padding:40px">
<p>Esta página se ha movido a <a style="color:#A894FF" href="${esc(to)}">${esc(to)}</a>.</p>
</body></html>
`;
const routes = fs.readFileSync(path.join(SRC, 'redirects.txt'), 'utf8').split('\n').map(s => s.trim()).filter(Boolean);
/* Modo puente: mientras studio.calibraautomation.com no resuelve, las URLs antiguas siguen
   sirviendo las páginas de servicios (generadas desde el repo calibra-studio, con canonical
   ya apuntando a studio). Cuando existe el archivo `studio-live`, pasan a ser redirecciones. */
const STUDIO_DIST = process.env.STUDIO_DIST;
const LIVE = fs.existsSync(path.join(SRC, 'studio-live')) || !STUDIO_DIST || !fs.existsSync(STUDIO_DIST);
if (!LIVE) {
  const skip = new Set(['index.html', 'CNAME', 'robots.txt', 'sitemap.xml', 'llms.txt', '.nojekyll', 'marca']);
  for (const f of fs.readdirSync(STUDIO_DIST)) {
    if (skip.has(f)) continue;
    fs.cpSync(path.join(STUDIO_DIST, f), path.join(OUT, f), { recursive: true });
  }
  console.log('modo puente: páginas de servicios servidas también desde la raíz');
} else {
  for (const r of routes) {
    const dir = path.join(OUT, r);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), stub(STUDIO + '/' + r));
  }
}
// rutas sueltas de la web antigua
for (const [from, to] of [['feed.xml', '/feed.xml'], ['studio', '/']]) {
  if (from.endsWith('.xml')) continue;
  fs.mkdirSync(path.join(OUT, from), { recursive: true });
  fs.writeFileSync(path.join(OUT, from, 'index.html'), stub(STUDIO + to));
}

fs.writeFileSync(path.join(OUT, '404.html'), `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Page not found | Calibra</title><meta name="robots" content="noindex">
<link rel="icon" href="/marca/calibra-isotipo-gradient.svg" type="image/svg+xml"></head>
<body style="margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#05060B;color:#F1F3FA;font-family:system-ui,sans-serif;text-align:center;padding:24px">
<div><img src="/marca/calibra-isotipo-gradient.svg" alt="" width="56" height="56">
<h1 style="font-size:32px;margin:20px 0 10px">Page not found</h1>
<p style="color:#AEB4CC;margin:0 0 24px">The page you're looking for doesn't exist or has moved.</p>
<p><a style="color:#A894FF;margin:0 12px" href="/">Calibra platform</a><a style="color:#A894FF;margin:0 12px" href="${STUDIO}/">Calibra Studio (services, in Spanish)</a></p></div>
</body></html>
`);

fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${DOMAIN}/sitemap.xml\n`);
fs.writeFileSync(path.join(OUT, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${DOMAIN}/</loc><lastmod>${TODAY}</lastmod><priority>1.0</priority></url>\n</urlset>\n`);
fs.writeFileSync(path.join(OUT, 'feed.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>Calibra</title><link>${STUDIO}/blog/</link><description>The Calibra blog has moved to ${STUDIO}/feed.xml</description></channel></rss>\n`);
fs.writeFileSync(path.join(OUT, 'llms.txt'), `# Calibra

> Calibra is a workflow automation platform with AI, hosted in the EU (Frankfurt).
> Describe a process in plain words and the AI copilot builds the workflow; simulate it
> before it goes live; get an AI diagnosis and a proposed fix when a run fails; get
> cheaper-model suggestions for AI steps; and see hours saved and net value per workflow.

- App: https://app.calibraautomation.com/
- 750+ apps, 2,500+ public APIs via OpenAPI, AI agents, MCP, webhooks and code steps
- 85+ templates, including "digital employee" templates
- Import workflows from other automation tools with a compatibility report

## Pricing (EUR, excl. VAT)

- Free: 0 EUR, 1,000 credits/month, 2 active workflows, 1 user
- Basic: 8 EUR/month or 80 EUR/year, 10,000 credits, unlimited active workflows, 1 user
- Pro: 16 EUR/month or 160 EUR/year, 25,000 credits, unlimited active workflows, 3 users
- Team: 29 EUR/month or 290 EUR/year, 50,000 credits, unlimited active workflows, 10 users
- Extra credits: 10,000 for 5 EUR
- One credit per step that works with an app; logic, data, waits and approvals are free.
- AI steps use the customer's own AI provider key, with no markup.

## Done-for-you services

Calibra Studio (in Spanish): ${STUDIO}/

Contact: info@calibraautomation.com
`);
fs.writeFileSync(path.join(OUT, 'CNAME'), 'calibraautomation.com\n');
fs.writeFileSync(path.join(OUT, '.nojekyll'), '');
console.log(`web de producto en ./dist · ${LIVE ? routes.length + ' redirecciones a ' + STUDIO : 'modo puente'}`);
