#!/usr/bin/env node
/* ============================================================================
   Calibra — generador estático
   ----------------------------------------------------------------------------
   Convierte la web de una sola página en HTML reales, uno por ruta. ESTE PASO
   ES EL QUE HACE QUE LA WEB INDEXE: Googlebot renderiza JavaScript, pero los
   rastreadores de IA (GPTBot, ClaudeBot, PerplexityBot) lo hacen mucho peor o
   directamente no lo hacen. Sin este paso, tienes 35 páginas que solo existen
   para quien ya está dentro.

   Uso:
     node build-static.js                → genera ./dist
     node build-static.js --dominio https://calibraautomation.com

   Después sube ./dist a tu hosting. Funciona en cualquier sitio estático
   (Netlify, Vercel, Cloudflare Pages, S3, un Apache de toda la vida).
   ============================================================================ */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const args = process.argv.slice(2);
const di = args.indexOf('--dominio');
const DOMAIN = (di > -1 && args[di + 1] ? args[di + 1] : 'https://calibraautomation.com').replace(/\/$/, '');
const SRC = __dirname;
const OUT = path.join(SRC, 'dist');
const TODAY = new Date().toISOString().slice(0, 10);

/* ---------- 1. cargar el contenido de las páginas ---------- */
const sandbox = { window: {}, document: { querySelectorAll: () => [], getElementById: () => null } };
sandbox.window.PAGES = {};
vm.createContext(sandbox);
for (const f of ['pages-core.js', 'pages-blog.js', 'pages-legal.js', 'pages-id.js', 'pages-extra.js']) {
  vm.runInContext(fs.readFileSync(path.join(SRC, f), 'utf8'), sandbox, { filename: f });
}
const PAGES = sandbox.window.PAGES;
const HOME = sandbox.window.HOME;
const FRAG = sandbox.window.FRAG;

/* ---------- 2. trocear index.html ---------- */
const index = fs.readFileSync(path.join(SRC, 'index.html'), 'utf8');
const head = index.slice(0, index.indexOf('<svg xmlns')).trim();          // title, fuentes y estilos
const sprite = index.slice(index.indexOf('<svg xmlns'), index.indexOf('<a class="skip"'));
const chrome = index.slice(index.indexOf('<a class="skip"'), index.indexOf('<main id="app">'));
const footer = index.slice(index.indexOf('</main>') + 7, index.indexOf('<script src='));
const scripts = index.slice(index.indexOf('<script src='));

/* ---------- 3. helpers de render (espejo de los del router) ---------- */
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const url = r => DOMAIN + (r === 'home' ? '/' : '/' + r + '/');

function crumbHtml(p) {
  let h = '<div class="crumb"><a href="/">Inicio</a>';
  (p.crumb || []).forEach(c => { h += `<i>/</i><a href="/${c[1]}/">${c[0]}</a>`; });
  return h + `<i>/</i><span>${p.h1}</span></div>`;
}
function relHtml(list) {
  if (!list || !list.length) return '';
  let h = '<div class="rel"><span class="lab">Seguir leyendo</span><div class="rel-grid">';
  list.forEach(r => { if (PAGES[r]) h += `<a href="/${r}/">${PAGES[r].h1}</a>`; });
  return h + '</div></div>';
}
const ctaHtml = () =>
  '<div class="band"><span class="lab">Siguiente paso</span>' +
  '<h2 style="margin-top:12px">¿Hablamos de tu proceso?</h2>' +
  '<p>Diagnóstico exprés desde 490 € y tres días laborables. Respondemos el mismo día.</p>' +
  '<div class="hero-cta"><a class="btn btn-pri" href="/contacto/">Escríbenos</a>' +
  '<a class="btn btn-sec" href="/precios/">Ver precios</a></div></div>';

/* rutas internas: de #/x (SPA) a /x/ (estático) */
const fixLinks = html => html
  .replace(/href="#\/([^"]*)"/g, (_, r) => `href="/${r}${r && !r.endsWith('/') ? '/' : ''}"`)
  .replace(/href="#\/"/g, 'href="/"');

function jsonLd(route, p) {
  const g = [{
    '@type': 'ProfessionalService', '@id': DOMAIN + '/#org', name: 'Calibra',
    url: DOMAIN + '/', email: 'info@calibraautomation.com', areaServed: 'ES',
    description: 'Automatización de procesos con IA para empresas: auditoría de precio cerrado, implantación y operación con SLA, datos en la UE.',
    priceRange: '490-40000 EUR'
  }];
  if (p.type === 'article') {
    g.push({
      '@type': 'Article', headline: p.h1, description: p.d,
      datePublished: '2026-09-19', dateModified: TODAY,
      publisher: { '@id': DOMAIN + '/#org' }, mainEntityOfPage: url(route),
      inLanguage: 'es-ES'
    });
  } else if (route.startsWith('servicios/')) {
    g.push({ '@type': 'Service', name: p.h1, description: p.d, provider: { '@id': DOMAIN + '/#org' }, areaServed: 'ES' });
  }
  const faqs = [...(p.html || '').matchAll(/<details[^>]*><summary[^>]*>(.*?)<\/summary>\s*<p[^>]*>(.*?)<\/p>/gs)];
  if (faqs.length >= 2) {
    g.push({
      '@type': 'FAQPage',
      mainEntity: faqs.map(m => ({
        '@type': 'Question', name: m[1].replace(/<[^>]+>/g, '').trim(),
        acceptedAnswer: { '@type': 'Answer', text: m[2].replace(/<[^>]+>/g, '').trim() }
      }))
    });
  }
  if ((p.crumb || []).length) {
    const items = [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: DOMAIN + '/' }];
    p.crumb.forEach((c, i) => items.push({ '@type': 'ListItem', position: i + 2, name: c[0], item: DOMAIN + '/' + c[1] + '/' }));
    items.push({ '@type': 'ListItem', position: items.length + 1, name: p.h1 });
    g.push({ '@type': 'BreadcrumbList', itemListElement: items });
  }
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': g });
}

function page(route, p, bodyHtml) {
  const depth = route === 'home' ? 0 : route.split('/').length;
  const rel = depth === 0 ? '' : '../'.repeat(depth);
  const title = route === 'home' ? 'Calibra — Automatización de procesos con IA' : `${p.t} | Calibra`;
  return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(p.d)}">
<link rel="canonical" href="${url(route)}">
<meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large">
<meta property="og:type" content="${p.type === 'article' ? 'article' : 'website'}">
<meta property="og:title" content="${esc(p.t)}">
<meta property="og:description" content="${esc(p.d)}">
<meta property="og:url" content="${url(route)}">
<meta property="og:image" content="${DOMAIN}/marca/og-image-1200x630.png">
<meta property="og:locale" content="es_ES">
<meta property="og:site_name" content="Calibra">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/marca/calibra-isotipo-gradient.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/marca/calibra-isotipo-gradient-512.png">
<link rel="alternate" type="application/rss+xml" title="Calibra — blog" href="${DOMAIN}/feed.xml">
${head.slice(head.indexOf('<link rel="preconnect"'))}
<script type="application/ld+json">${jsonLd(route, p)}</script>
</head>
<body>
${fixLinks(sprite + chrome)}
<main id="app">
${bodyHtml}
</main>
${fixLinks(footer)}
${scripts.replace(/src="/g, `src="${rel}`)}
</body>
</html>`;
}

/* ---------- 4. generar ---------- */
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

const routes = ['home', ...Object.keys(PAGES)];
let n = 0;

for (const route of routes) {
  let bodyHtml, p;
  if (route === 'home') {
    p = {
      t: 'Automatización de procesos con IA para empresas',
      d: 'Automatizamos el trabajo repetitivo de tu empresa con trazabilidad, SLA y los datos en la UE. Diagnóstico desde 490 €, piloto en 10 días laborables.',
      h1: 'Calibra', crumb: []
    };
    bodyHtml = fixLinks(HOME);
  } else {
    p = PAGES[route];
    const notice = '';
    const body = (p.html || '').replace('{{FORM}}', '<div style="max-width:760px">' + FRAG.FORM + '</div>');
    bodyHtml = fixLinks(
      '<section class="page"><div class="wrap">' + crumbHtml(p) + notice +
      '<div class="page-head"><h1>' + p.h1 + '</h1>' + (p.sub ? '<p class="sub">' + p.sub + '</p>' : '') +
      (p.date ? '<p class="date">Publicado el ' + p.date + ' · revisado el 19 de septiembre de 2026</p>' : '') +
      '</div><div class="body">' + body + '</div>' + relHtml(p.rel) + ctaHtml() + '</div></section>'
    );
  }
  const dir = route === 'home' ? OUT : path.join(OUT, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), page(route, p, bodyHtml));
  n++;
}

/* assets */
for (const f of ['pages-core.js', 'pages-blog.js', 'pages-legal.js', 'pages-id.js', 'pages-extra.js', 'consent.js', 'llms.txt']) {
  if (fs.existsSync(path.join(SRC, f))) fs.copyFileSync(path.join(SRC, f), path.join(OUT, f));
}
fs.cpSync(path.join(SRC, 'marca'), path.join(OUT, 'marca'), { recursive: true });

/* el script del router vive inline en index.html: lo extraemos a app.js */
const inline = index.slice(index.lastIndexOf('<script>') + 8, index.lastIndexOf('</script>'));
fs.writeFileSync(path.join(OUT, 'app.js'), inline);
for (const route of routes) {
  const file = route === 'home' ? path.join(OUT, 'index.html') : path.join(OUT, route, 'index.html');
  let html = fs.readFileSync(file, 'utf8');
  const depth = route === 'home' ? 0 : route.split('/').length;
  const rel = depth === 0 ? '' : '../'.repeat(depth);
  html = html.replace(/<script>[\s\S]*?<\/script>/, `<script src="${rel}app.js"></script>`);
  fs.writeFileSync(file, html);
}

/* sitemap */
const prio = r => r === 'home' ? '1.0' : (!r.includes('/') ? '0.9' : r.startsWith('servicios/') ? '0.9' : '0.7');
fs.writeFileSync(path.join(OUT, 'sitemap.xml'),
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  routes.map(r => `  <url><loc>${url(r)}</loc><lastmod>${TODAY}</lastmod><priority>${prio(r)}</priority></url>`).join('\n') +
  '\n</urlset>\n');

/* robots */
fs.writeFileSync(path.join(OUT, 'robots.txt'),
  fs.readFileSync(path.join(SRC, 'robots.txt'), 'utf8').replace(/https:\/\/calibra\.example/g, DOMAIN));

/* RSS del blog: los agregadores y varios rastreadores de IA lo consumen */
const posts = Object.keys(PAGES).filter(r => r.startsWith('blog/'));
fs.writeFileSync(path.join(OUT, 'feed.xml'),
  '<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel>\n' +
  `<title>Calibra — blog</title>\n<link>${DOMAIN}/blog/</link>\n` +
  '<description>Automatización de procesos con IA para empresas.</description>\n<language>es-es</language>\n' +
  posts.map(r => `<item><title>${esc(PAGES[r].h1)}</title><link>${url(r)}</link><guid>${url(r)}</guid><description>${esc(PAGES[r].d)}</description></item>`).join('\n') +
  '\n</channel></rss>\n');


/* CNAME para dominio propio en GitHub Pages + .nojekyll */
try {
  const host = new URL(DOMAIN).hostname;
  if (!host.endsWith('github.io') && !host.endsWith('pages.dev') && !host.endsWith('netlify.app')) {
    fs.writeFileSync(path.join(OUT, 'CNAME'), host + '\n');
  }
} catch (e) { /* dominio no valido: sin CNAME */ }
fs.writeFileSync(path.join(OUT, '.nojekyll'), '');

console.log(`\n  ${n} páginas generadas en ./dist`);
console.log(`  dominio: ${DOMAIN}`);
console.log(`  + sitemap.xml, robots.txt, feed.xml, llms.txt y /marca\n`);
console.log('  Comprueba antes de subir:');
console.log('   · que el aviso legal y la privacidad ya no tienen campos entre corchetes');
console.log('   · que cada página abre sin JavaScript (desactívalo y recarga)');
console.log('   · que el servidor sirve /ruta/ sin barra final con redirección 301\n');
