/* Calibra — gestor de consentimiento de cookies.
   Cumple la Guía de cookies de la AEPD:
   · tres opciones con la misma relevancia visual (aceptar / rechazar / configurar)
   · rechazar tan fácil como aceptar: un clic, mismo tamaño, misma posición
   · categorías no esenciales desmarcadas por defecto
   · sin consentimiento por scroll ni por navegación continuada
   · BLOQUEO PREVIO REAL: ningún script de terceros se carga antes de decidir
   · caducidad de 24 meses y revocación accesible desde el pie

   CÓMO AÑADIR ANALÍTICA: no pegues el script de GA4 en el HTML. Ponlo dentro de
   loadAnalytics() de abajo. Así solo se ejecuta cuando hay consentimiento, que es
   exactamente lo que la mayoría de sitios incumple aunque tengan el banner bien. */
(function(){
'use strict';

var KEY = 'calibra-consent';
var VERSION = 2;                 // súbelo cuando cambien las cookies: vuelve a preguntar (v2: Apollo.io, 23-sep-2026)
var MAX_AGE = 1000*60*60*24*730; // 24 meses

var state = null;

function read(){
  try{
    var raw = localStorage.getItem(KEY);
    if(!raw) return null;
    var o = JSON.parse(raw);
    if(o.v !== VERSION) return null;
    if(Date.now() - o.ts > MAX_AGE) return null;
    return o;
  }catch(e){ return null; }
}
function write(o){
  o.v = VERSION; o.ts = Date.now();
  state = o;
  try{ localStorage.setItem(KEY, JSON.stringify(o)); }catch(e){}
  apply();
}

/* ---- carga condicionada: aquí va todo lo que necesita consentimiento ---- */
var analyticsLoaded = false;
function loadAnalytics(){
  if(analyticsLoaded) return;
  analyticsLoaded = true;

  /* Apollo.io — identificación de la empresa visitante (tracker de Apollo).
     Solo se ejecuta con consentimiento analítico. Declarado en #/cookies y #/privacidad.
     Envía datos a aplo-evnt.com (Apollo Technologies Inc., EE. UU.). */
  try{
    var ap = document.createElement('script');
    ap.async = true; ap.defer = true;
    ap.src = 'https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=' + Math.random().toString(36).substring(7);
    ap.onload = function(){
      if(window.trackingFunctions && window.trackingFunctions.onLoad){
        window.trackingFunctions.onLoad({ appId: '6ab135a1a163750018fa8e4c' });
      }
    };
    document.head.appendChild(ap);
  }catch(e){}

  /* Otra analítica (GA4, Plausible…): añádela aquí, nunca en el HTML, y decláralo en #/cookies. */
  if(window.console && console.info) console.info('[consent] analítica autorizada — Apollo.io cargado');
}

function purgeAnalytics(){
  /* Retirada del consentimiento: elimina lo que Apollo.io guarda en el navegador. */
  try{
    var keys = [];
    for(var i=0;i<localStorage.length;i++){ keys.push(localStorage.key(i)); }
    keys.forEach(function(k){
      if(k === 'apolloAnonId' || k === 'liveIntentData' || /_eventQueue$|_canTrack$/.test(k)) localStorage.removeItem(k);
    });
  }catch(e){}
}

function apply(){
  if(state && state.analytics) loadAnalytics();
  else purgeAnalytics();
  document.documentElement.setAttribute('data-consent', state ? (state.analytics ? 'analytics' : 'necessary') : 'pending');
}

/* ---------------- interfaz ---------------- */
var el = null;
function build(){
  if(el) return el;
  el = document.createElement('div');
  el.className = 'ckwrap';
  el.setAttribute('role','dialog');
  el.setAttribute('aria-modal','false');
  el.setAttribute('aria-label','Aviso de cookies');
  el.innerHTML =
    '<div class="ck">' +
      '<div class="ck-main">' +
        '<h3>Cookies</h3>' +
        '<p>Este sitio usa cookies técnicas necesarias para funcionar. Con tu permiso usaría también cookies analíticas para entender qué contenidos resultan útiles e identificar la empresa desde la que se visita el sitio (Apollo.io). ' +
        'No hay cookies publicitarias, y nada se carga antes de que decidas. ' +
        '<a href="#/cookies">Política de cookies</a> · <a href="#/privacidad">Privacidad</a></p>' +
        '<div class="ck-cats" id="ck-cats" hidden>' +
          '<label class="ck-cat"><input type="checkbox" checked disabled><span><b>Necesarias</b> — imprescindibles para que la página funcione y para recordar esta misma decisión. No se pueden desactivar.</span></label>' +
          '<label class="ck-cat"><input type="checkbox" id="ck-an"><span><b>Analíticas</b> — medición del uso del sitio e identificación de la empresa visitante mediante Apollo.io (proveedor de EE. UU.). Desactivadas por defecto.</span></label>' +
          '<label class="ck-cat ck-off"><input type="checkbox" disabled><span><b>Publicitarias</b> — no se utilizan en este sitio.</span></label>' +
        '</div>' +
      '</div>' +
      '<div class="ck-btns">' +
        '<button class="btn ck-b" data-ck="all">Aceptar todas</button>' +
        '<button class="btn ck-b" data-ck="none">Rechazar todas</button>' +
        '<button class="btn ck-b ck-cfg" data-ck="cfg">Configurar</button>' +
        '<button class="btn ck-b ck-save" data-ck="save" hidden>Guardar preferencias</button>' +
      '</div>' +
    '</div>';
  document.body.appendChild(el);

  el.addEventListener('click', function(ev){
    var b = ev.target.closest('[data-ck]'); if(!b) return;
    var a = b.getAttribute('data-ck');
    if(a === 'all')  { write({necessary:true, analytics:true});  hide(); }
    if(a === 'none') { write({necessary:true, analytics:false}); hide(); }
    if(a === 'cfg')  {
      document.getElementById('ck-cats').hidden = false;
      el.querySelector('[data-ck="cfg"]').hidden = true;
      el.querySelector('[data-ck="save"]').hidden = false;
    }
    if(a === 'save') {
      write({necessary:true, analytics: !!document.getElementById('ck-an').checked});
      hide();
    }
  });
  return el;
}
function show(prefill){
  build();
  var cats = document.getElementById('ck-cats');
  if(prefill && state){
    cats.hidden = false;
    document.getElementById('ck-an').checked = !!state.analytics;
    el.querySelector('[data-ck="cfg"]').hidden = true;
    el.querySelector('[data-ck="save"]').hidden = false;
  } else {
    cats.hidden = true;
    el.querySelector('[data-ck="cfg"]').hidden = false;
    el.querySelector('[data-ck="save"]').hidden = true;
  }
  el.classList.add('on');
}
function hide(){ if(el) el.classList.remove('on'); }

/* revocación desde cualquier enlace o botón con data-cookie-open */
document.addEventListener('click', function(ev){
  var t = ev.target.closest('[data-cookie-open]');
  if(t){ ev.preventDefault(); show(true); }
});

/* Escape NO acepta: solo cierra si ya había decisión previa */
document.addEventListener('keydown', function(ev){
  if(ev.key === 'Escape' && state) hide();
});

state = read();
apply();
if(!state) { if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function(){ show(false); }); else show(false); }

window.CalibraConsent = { open: function(){ show(true); }, get: function(){ return state; } };
})();
