/* Calibra — public integrations and templates directory.
   Reads data/integrations.json (refresh with: node scripts/fetch-integrations.js)
   and data/templates.json, and writes /integrations/ and /templates/ into dist.
   Called from build-site.js; returns the list of URLs for the sitemap. */
const fs = require('fs');
const path = require('path');

const APP = 'https://app.calibraautomation.com';
const DOMAIN = 'https://calibraautomation.com';

const CATEGORY_LABELS = {
  ARTIFICIAL_INTELLIGENCE: 'AI', UNIVERSAL_AI: 'AI', MARKETING: 'Marketing', PRODUCTIVITY: 'Productivity',
  DEVELOPER_TOOLS: 'Developer tools', COMMUNICATION: 'Communication', SALES_AND_CRM: 'Sales and CRM',
  CONTENT_AND_FILES: 'Content and files', COMMERCE: 'E-commerce', BUSINESS_INTELLIGENCE: 'Data and analytics',
  ACCOUNTING: 'Accounting and finance', PAYMENT_PROCESSING: 'Accounting and finance', CUSTOMER_SUPPORT: 'Customer support',
  CORE: 'Built-in tools', FLOW_CONTROL: 'Built-in tools', FORMS_AND_SURVEYS: 'Forms and surveys', HUMAN_RESOURCES: 'HR',
};
const CATEGORY_ORDER = ['AI', 'Sales and CRM', 'Marketing', 'Communication', 'Productivity', 'E-commerce', 'Accounting and finance',
  'Customer support', 'HR', 'Forms and surveys', 'Content and files', 'Data and analytics', 'Developer tools', 'Built-in tools'];
const SECTOR_LABELS = {
  sales: 'Sales', marketing: 'Marketing', support: 'Customer support', ecommerce: 'E-commerce', invoicing: 'Invoicing',
  'accounting-firms': 'Accounting firms', hr: 'HR', operations: 'Operations', logistics: 'Logistics', health: 'Health',
  hospitality: 'Hospitality', legal: 'Legal', 'real-estate': 'Real estate', education: 'Education',
};

const h = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const POPULAR = ['gmail', 'google-sheets', 'slack', 'openai', 'hubspot', 'notion', 'airtable', 'stripe', 'shopify', 'microsoft-teams', 'microsoft-outlook', 'google-drive', 'google-calendar', 'whatsapp', 'telegram-bot', 'salesforce', 'pipedrive', 'trello', 'asana', 'clickup', 'monday', 'mailchimp', 'typeform', 'calendly', 'zoom', 'discord', 'woocommerce', 'quickbooks', 'xero', 'holded', 'zendesk', 'intercom', 'jira-cloud', 'github', 'linear', 'dropbox', 'claude', 'google-gemini', 'facebook-pages', 'instagram-business', 'linkedin', 'google-forms', 'todoist', 'zoho-crm', 'sendinblue', 'activecampaign', 'twilio', 'docusign', 'odoo', 'freshdesk'];
const popRank = (p) => { const i = POPULAR.indexOf(slugOf(p.name)); return i === -1 ? POPULAR.length : i; };
const slugOf = (name) => name.replace(/^@[^/]+\/piece-/, '');
const tplSlug = (id) => id.replace(/^calibra-/, '');
const logo = (url) => (!url ? '/marca/calibra-isotipo-gradient.svg' : url.startsWith('http') ? url : APP + url);
const clip = (s, n) => { const t = String(s || '').trim(); return t.length <= n ? t : t.slice(0, n - 1).replace(/\s+\S*$/, '') + '…'; };
const labelsOf = (p) => [...new Set((p.categories || []).map((c) => CATEGORY_LABELS[c]).filter(Boolean))];
const sentence = (s) => { const t = String(s || '').trim(); return !t ? '' : /[.!?]$/.test(t) ? t : t + '.'; };

function page({ title, description, canonical, body, jsonLd }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${h(title)}</title>
<meta name="description" content="${h(description)}">
<link rel="canonical" href="${h(canonical)}">
<meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large">
<meta name="theme-color" content="#05060B">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Calibra">
<meta property="og:title" content="${h(title)}">
<meta property="og:description" content="${h(description)}">
<meta property="og:url" content="${h(canonical)}">
<meta property="og:image" content="${DOMAIN}/assets/og-product.png">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/marca/calibra-isotipo-gradient.svg" type="image/svg+xml">
<link rel="preload" href="/assets/fonts/sora-700.woff2" as="font" type="font/woff2" crossorigin>
${jsonLd ? `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>` : ''}
<link rel="stylesheet" href="/assets/directory.css">
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="top"><div class="wrap nav">
<a class="brand" href="/" aria-label="Calibra home"><img src="/marca/calibra-isotipo-gradient.svg" alt="" width="28" height="28"><img src="/marca/calibra-wordmark-light.svg" alt="calibra" width="88" height="22"></a>
<nav class="links" aria-label="Main"><a href="/#product">Product</a><a href="/integrations/">Integrations</a><a href="/templates/">Templates</a><a href="/#pricing">Pricing</a><a href="/partners/">Partners</a></nav>
<div class="nav-cta"><a class="login" href="${APP}/sign-in">Log in</a><a class="btn btn-pri" href="${APP}/sign-up">Start free</a></div>
</div></header>
<main id="main">
${body}
<section class="final"><div class="wrap">
<h2>Describe your first process. <span class="grad">Watch it run today.</span></h2>
<p>Free plan, no card. One credit per run, however many steps it has.</p>
<div class="ctas"><a class="btn btn-pri btn-lg" href="${APP}/sign-up">Start free</a><a class="btn btn-sec btn-lg" href="/#pricing">See pricing</a></div>
</div></section>
</main>
<footer><div class="wrap foot">
<span>© 2026 Calibra · Servers in the EU · Frankfurt</span>
<span><a href="/">Home</a><a href="/integrations/">Integrations</a><a href="/templates/">Templates</a><a href="/#pricing">Pricing</a><a href="${APP}/trust">Trust center</a><a href="${APP}/legal/privacidad">Privacy</a></span>
</div></footer>
<script src="/assets/directory.js" defer></script>
<script src="/assets/affiliate-tracking.js" defer></script>
</body>
</html>
`;
}

function appCard(p) {
  const n = p.triggers.length, a = p.actions.length;
  const counts = [n ? `${n} trigger${n > 1 ? 's' : ''}` : '', a ? `${a} action${a > 1 ? 's' : ''}` : ''].filter(Boolean).join(' · ');
  return `<a class="app-card" href="/integrations/${slugOf(p.name)}/" data-name="${h(p.displayName.toLowerCase())}" data-cats="${h(labelsOf(p).join('|'))}">
<img src="${h(logo(p.logoUrl))}" alt="" width="40" height="40" loading="lazy" decoding="async">
<span class="ac-body"><strong>${h(p.displayName)}</strong><span>${h(clip(p.description, 92))}</span><em>${h(counts)}</em></span></a>`;
}

function tplCard(t, bySlug) {
  const apps = t.pieces.map((n) => bySlug.get(n)).filter((p) => p && !labelsOf(p).includes('Built-in tools')).slice(0, 5);
  return `<a class="tpl-card" href="/templates/${tplSlug(t.id)}/" data-sector="${h(t.sector || '')}">
<span class="logos">${apps.map((p) => `<img src="${h(logo(p.logoUrl))}" alt="" width="26" height="26" loading="lazy">`).join('')}</span>
<strong>${h(t.name)}</strong><span>${h(clip(t.summary, 140))}</span>
<em>${h(apps.map((p) => p.displayName).join(' · '))}</em></a>`;
}

function itemList(items, kind) {
  if (!items.length) return '';
  const title = kind === 'trigger' ? 'Triggers' : 'Actions';
  const lead = kind === 'trigger' ? 'Start a workflow when this happens' : 'Then Calibra can do this for you';
  return `<section class="block"><div class="block-hd"><h2>${title}</h2><span>${lead}</span></div>
<ul class="items">${items.map((i) => `<li><span class="kind ${kind}">${kind === 'trigger' ? 'WHEN' : 'DO'}</span><div><strong>${h(i.displayName)}</strong>${i.description ? `<p>${h(sentence(i.description))}</p>` : ''}</div></li>`).join('')}</ul></section>`;
}

function integrationPage(p, ctx) {
  const slug = slugOf(p.name);
  const cats = labelsOf(p);
  const isTool = cats.includes('Built-in tools');
  const templates = ctx.templates.filter((t) => t.pieces.includes(p.name)).slice(0, 6);
  const related = ctx.integrations
    .filter((o) => o !== p && labelsOf(o).some((c) => cats.includes(c)) && (o.actions.length + o.triggers.length) > 2)
    .sort((x, y) => (popRank(x) - popRank(y)) || ((y.actions.length + y.triggers.length) - (x.actions.length + x.triggers.length)))
    .slice(0, 8);
  const exampleTrigger = p.triggers[0], exampleAction = p.actions[0];
  const notify = slug === 'slack' ? 'email my team' : 'tell my team in Slack';
  const prompt = exampleTrigger && exampleAction
    ? `When “${exampleTrigger.displayName}” happens in ${p.displayName}, check the details with AI, then “${exampleAction.displayName}” and ${notify}.`
    : exampleTrigger
      ? `When “${exampleTrigger.displayName}” happens in ${p.displayName}, summarise it with AI and add a row to my Google Sheet.`
      : exampleAction
        ? `Every morning, read yesterday's new leads from my form, and for each one “${exampleAction.displayName}” in ${p.displayName}.`
        : '';
  const title = isTool ? `${p.displayName}: built-in automation tool | Calibra` : `${p.displayName} integration: automate ${p.displayName} with AI | Calibra`;
  const desc = clip(`Connect ${p.displayName} to 1,100+ apps with Calibra. ${sentence(p.description)} ${p.triggers.length} triggers and ${p.actions.length} actions, free plan, one credit per run.`, 158);
  const faqs = [
    [`Is the ${p.displayName} integration free?`, `Yes. ${p.displayName} is available on every Calibra plan, including the free plan, which needs no card.`],
    [`How is ${p.displayName} usage billed?`, 'Calibra charges one credit per workflow run, however many steps it has. Steps that read from or write to this app do not cost extra.'],
    [`Can I connect ${p.displayName} without writing code?`, `Yes. Describe the process in plain words and the AI copilot builds the workflow with ${p.displayName} for you. You can also use templates or the visual editor.`],
  ];
  const body = `<section class="hero-int"><div class="wrap">
<nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/integrations/">Integrations</a><span>/</span><span>${h(p.displayName)}</span></nav>
<div class="int-head"><img class="big-logo" src="${h(logo(p.logoUrl))}" alt="${h(p.displayName)} logo" width="72" height="72">
<div><h1>${isTool ? h(p.displayName) : `${h(p.displayName)} <span class="grad">integration</span>`}</h1>
<p class="lead">${h(sentence(p.description))}</p>
<div class="chips">${cats.map((c) => `<a class="chip" href="/integrations/#${encodeURIComponent(c)}">${h(c)}</a>`).join('')}<span class="chip ghost">${p.triggers.length} triggers · ${p.actions.length} actions</span></div></div></div>
<div class="ctas"><a class="btn btn-pri btn-lg" href="${APP}/sign-up">Connect ${h(p.displayName)} free</a><a class="btn btn-sec btn-lg" href="#what">See what you can automate</a></div>
</div></section>
<div class="wrap int-grid" id="what">
<div class="col-main">
${prompt ? `<section class="block ai"><div class="block-hd"><h2>Build it by describing it</h2><span>Type a sentence like this and the copilot builds, validates and simulates the workflow.</span></div>
<div class="prompt">${h(prompt)}</div>
<ul class="mini"><li>Simulated before it goes live</li><li>Fixes proposed when something breaks</li><li>One credit per run</li></ul></section>` : ''}
${itemList(p.triggers, 'trigger')}
${itemList(p.actions, 'action')}
${templates.length ? `<section class="block"><div class="block-hd"><h2>Ready-made workflows with ${h(p.displayName)}</h2><span>Install, connect your apps and switch on.</span></div>
<div class="tpl-grid">${templates.map((t) => tplCard(t, ctx.bySlug)).join('')}</div></section>` : ''}
<section class="block"><div class="block-hd"><h2>Questions</h2></div>
<div class="faq">${faqs.map(([q, a]) => `<details><summary>${h(q)}</summary><p>${h(a)}</p></details>`).join('')}</div></section>
</div>
<aside class="col-side">
<div class="side-card"><strong>Why teams automate ${h(p.displayName)} with Calibra</strong>
<ul><li>Pay per run, not per step</li><li>Test on real events in shadow mode before you switch</li><li>AI that proposes fixes, you approve</li><li>Data hosted in the EU</li></ul>
<a class="btn btn-pri" href="${APP}/sign-up">Start free</a></div>
${related.length ? `<div class="side-card"><strong>Works well with</strong><div class="rel">${related.map((o) => `<a href="/integrations/${slugOf(o.name)}/"><img src="${h(logo(o.logoUrl))}" alt="" width="24" height="24" loading="lazy">${h(o.displayName)}</a>`).join('')}</div></div>` : ''}
</aside>
</div>`;
  const url = `${DOMAIN}/integrations/${slug}/`;
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${DOMAIN}/` },
      { '@type': 'ListItem', position: 2, name: 'Integrations', item: `${DOMAIN}/integrations/` },
      { '@type': 'ListItem', position: 3, name: p.displayName, item: url }] },
    { '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
  ] };
  return { slug, html: page({ title, description: desc, canonical: url, body, jsonLd }) };
}

function integrationsIndex(ctx) {
  const groups = CATEGORY_ORDER.map((c) => [c, ctx.integrations.filter((p) => labelsOf(p).includes(c)).length]).filter(([, n]) => n);
  const body = `<section class="hero-dir"><div class="wrap">
<span class="eyebrow">Integrations</span>
<h1><span class="grad">${ctx.integrations.length.toLocaleString('en-US')}</span> apps, ready to automate.</h1>
<p class="lead">Connect the tools you already use, then let AI build the workflow. Can't find an app? Call any of 2,500+ public APIs, import any OpenAPI file, or use one of 35,000+ MCP servers.</p>
<div class="search"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.6" y2="16.6"/></svg>
<input id="q" type="search" placeholder="Search ${ctx.integrations.length.toLocaleString('en-US')} apps" aria-label="Search apps" autocomplete="off"></div>
<div class="filters" role="group" aria-label="Categories"><button type="button" class="chip on" data-cat="">All</button>${groups.map(([c, n]) => `<button type="button" class="chip" data-cat="${h(c)}">${h(c)} <em>${n}</em></button>`).join('')}</div>
</div></section>
<div class="wrap"><p class="count" id="count" aria-live="polite"></p>
<div class="app-grid" id="apps">${ctx.integrations.map(appCard).join('\n')}</div>
<p class="empty" id="empty" hidden>No app matches that search. You can still connect it: <a href="${APP}/sign-up">call any API or MCP server from Calibra</a>.</p></div>`;
  return page({
    title: `${ctx.integrations.length.toLocaleString('en-US')}+ integrations: connect your apps with AI | Calibra`,
    description: `Browse ${ctx.integrations.length.toLocaleString('en-US')} apps you can automate with Calibra, from CRMs and e-commerce to accounting, HR and AI. Free plan, one credit per run.`,
    canonical: `${DOMAIN}/integrations/`, body,
  });
}

function templatePage(t, ctx) {
  const apps = t.pieces.map((n) => ctx.bySlug.get(n)).filter(Boolean);
  const visible = apps.filter((p) => !labelsOf(p).includes('Built-in tools'));
  const related = ctx.templates.filter((o) => o !== t && o.sector === t.sector).slice(0, 3);
  const url = `${DOMAIN}/templates/${tplSlug(t.id)}/`;
  const body = `<section class="hero-int"><div class="wrap">
<nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/templates/">Templates</a><span>/</span><span>${h(clip(t.name, 48))}</span></nav>
<div class="tpl-head"><span class="logos big">${visible.slice(0, 6).map((p) => `<img src="${h(logo(p.logoUrl))}" alt="${h(p.displayName)}" width="40" height="40">`).join('')}</span>
<h1>${h(t.name)}</h1><p class="lead">${h(sentence(t.summary))}</p>
<div class="chips">${(t.categories || []).map((c) => `<span class="chip">${h(c)}</span>`).join('')}${t.sector && SECTOR_LABELS[t.sector] ? `<span class="chip ghost">${h(SECTOR_LABELS[t.sector])}</span>` : ''}</div></div>
<div class="ctas"><a class="btn btn-pri btn-lg" href="${APP}/templates/${encodeURIComponent(t.id)}">Use this template free</a><a class="btn btn-sec btn-lg" href="/templates/">Browse all templates</a></div>
</div></section>
<div class="wrap int-grid">
<div class="col-main">
<section class="block"><div class="block-hd"><h2>How it works</h2></div><p class="prose">${h(sentence(t.description))}</p>
<ul class="mini"><li>Simulate it before it goes live</li><li>Adjust any step in the visual editor</li><li>One credit per run</li></ul></section>
${visible.length ? `<section class="block"><div class="block-hd"><h2>Apps in this workflow</h2></div><div class="rel wide">${visible.map((p) => `<a href="/integrations/${slugOf(p.name)}/"><img src="${h(logo(p.logoUrl))}" alt="" width="24" height="24" loading="lazy">${h(p.displayName)}</a>`).join('')}</div></section>` : ''}
${related.length ? `<section class="block"><div class="block-hd"><h2>Related templates</h2></div><div class="tpl-grid">${related.map((o) => tplCard(o, ctx.bySlug)).join('')}</div></section>` : ''}
</div>
<aside class="col-side"><div class="side-card"><strong>Start with this template</strong><ul><li>Free plan, no card</li><li>Connect your apps in minutes</li><li>The AI copilot can adapt it to your process</li></ul><a class="btn btn-pri" href="${APP}/templates/${encodeURIComponent(t.id)}">Use this template</a></div></aside>
</div>`;
  const jsonLd = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${DOMAIN}/` },
    { '@type': 'ListItem', position: 2, name: 'Templates', item: `${DOMAIN}/templates/` },
    { '@type': 'ListItem', position: 3, name: t.name, item: url }] };
  return { slug: tplSlug(t.id), html: page({ title: `${clip(t.name, 60)} | Calibra template`, description: clip(`${sentence(t.summary)} Free automation template for ${visible.map((p) => p.displayName).join(', ')}.`, 158), canonical: url, body, jsonLd }) };
}

function templatesIndex(ctx) {
  const sectors = Object.entries(SECTOR_LABELS).map(([k, v]) => [k, v, ctx.templates.filter((t) => t.sector === k).length]).filter(([, , n]) => n);
  const body = `<section class="hero-dir"><div class="wrap">
<span class="eyebrow iris">Templates</span>
<h1><span class="grad">${ctx.templates.length}</span> ready-made workflows and digital employees.</h1>
<p class="lead">Install a template, connect your apps and switch it on. Or describe what you need and the AI copilot builds it for you.</p>
<div class="filters" role="group" aria-label="Sectors"><button type="button" class="chip on" data-sector="">All</button>${sectors.map(([k, v, n]) => `<button type="button" class="chip" data-sector="${h(k)}">${h(v)} <em>${n}</em></button>`).join('')}</div>
</div></section>
<div class="wrap"><div class="tpl-grid" id="tpls">${ctx.templates.map((t) => tplCard(t, ctx.bySlug)).join('\n')}</div></div>`;
  return page({
    title: `${ctx.templates.length} free automation templates and AI employees | Calibra`,
    description: `Browse ${ctx.templates.length} free workflow templates for sales, support, e-commerce, invoicing, HR and more. Install in one click and switch on.`,
    canonical: `${DOMAIN}/templates/`, body,
  });
}

function buildDirectory({ src, out }) {
  const integrations = JSON.parse(fs.readFileSync(path.join(src, 'data', 'integrations.json'), 'utf8'));
  const templates = JSON.parse(fs.readFileSync(path.join(src, 'data', 'templates.json'), 'utf8'));
  const ctx = { integrations, templates, bySlug: new Map(integrations.map((p) => [p.name, p])) };
  const urls = [`${DOMAIN}/integrations/`, `${DOMAIN}/templates/`];
  const write = (rel, html) => { const dir = path.join(out, rel); fs.mkdirSync(dir, { recursive: true }); fs.writeFileSync(path.join(dir, 'index.html'), html); };
  write('integrations', integrationsIndex(ctx));
  for (const p of integrations) { const { slug, html } = integrationPage(p, ctx); write(`integrations/${slug}`, html); urls.push(`${DOMAIN}/integrations/${slug}/`); }
  write('templates', templatesIndex(ctx));
  for (const t of templates) { const { slug, html } = templatePage(t, ctx); write(`templates/${slug}`, html); urls.push(`${DOMAIN}/templates/${slug}/`); }
  return urls;
}

module.exports = { buildDirectory };
