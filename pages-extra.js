/* Calibra — fragmentos de interfaz y paginas especiales.
   Separado para que el generador estatico (build-static.js) vea TODAS las rutas. */
(function(){
'use strict';
var P = window.PAGES = window.PAGES || {};

/* ---------- fragmentos reutilizables ---------- */
var FORM = '<form class="form" id="form" novalidate>' +
'<div><label for="f-name">Nombre</label><input id="f-name" required></div>' +
'<div><label for="f-mail">Email corporativo</label><input id="f-mail" type="email" required></div>' +
'<div><label for="f-size">Tamaño de la empresa</label><select id="f-size">' +
'<option>Menos de 10 personas</option><option selected>10 a 50 personas</option><option>50 a 250 personas</option><option>Más de 250 personas</option></select></div>' +
'<div><label for="f-what">Qué quieres automatizar</label><select id="f-what">' +
'<option>Documentos y facturación</option><option>Atención al cliente</option><option>Ventas y captación</option>' +
'<option>Back-office y administración</option><option>Informes y datos</option><option>Todavía no lo sé</option></select></div>' +
'<div class="full"><label for="f-msg">El proceso, en dos frases</label><textarea id="f-msg" placeholder="Ej.: recibimos unas 300 facturas de proveedor al mes por correo y una persona las mete a mano en Sage."></textarea></div>' +
'<div class="full"><button class="btn btn-pri" type="submit">Preparar solicitud</button></div></form>' +
'<div class="result" id="result" hidden><div class="bar"><p>Listo. Copia este mensaje o ábrelo en tu correo.</p>' +
'<button class="btn btn-sec" id="copy" type="button">Copiar</button>' +
'<a class="btn btn-pri" id="mailto" href="#">Abrir en el correo</a></div><pre id="out"></pre></div>';

var ROI = '<div class="glass roi"><div class="roi-in">' +
'<div class="field"><label for="r-people"><span class="fl">Personas afectadas por el proceso</span><span class="fv" id="v-people">6</span></label><input type="range" id="r-people" min="1" max="60" value="6"></div>' +
'<div class="field"><label for="r-hours"><span class="fl">Horas a la semana, por persona, en tareas repetitivas</span><span class="fv" id="v-hours">8</span></label><input type="range" id="r-hours" min="1" max="30" value="8"></div>' +
'<div class="field"><label for="r-cost"><span class="fl">Coste por hora para la empresa</span><span class="fv" id="v-cost">24 €</span></label><input type="range" id="r-cost" min="10" max="90" value="24"></div>' +
'<div class="field"><label for="r-auto"><span class="fl">Porcentaje realmente automatizable</span><span class="fv" id="v-auto">60 %</span></label><input type="range" id="r-auto" min="20" max="90" value="60"></div>' +
'<div class="field" style="margin-bottom:0"><label for="r-inv"><span class="fl">Inversión estimada el primer año</span><span class="fv" id="v-inv">24.000 €</span></label><input type="range" id="r-inv" min="900" max="80000" step="100" value="24000"></div>' +
'</div><div class="roi-out"><div><span class="lab">Ahorro anual estimado</span><div class="big" id="o-save">—</div></div><div>' +
'<div class="outrow"><span>Horas recuperadas al año</span><b id="o-hours">—</b></div>' +
'<div class="outrow"><span>Equivalente en jornadas completas</span><b id="o-days">—</b></div>' +
'<div class="outrow"><span>Retorno neto el primer año</span><b id="o-net">—</b></div>' +
'<div class="outrow"><span>Meses hasta amortizar</span><b id="o-pay">—</b></div></div>' +
'<p class="disc">Cálculo: personas × horas/semana × 46 semanas laborables × % automatizable × coste/hora. No incluye el coste de los modelos ni de las licencias, que suele ir de 40 a 300 € al mes.</p></div></div>';

var PRICING = '<div class="glass tablewrap"><table class="price-t"><thead><tr>' +
'<th>Producto</th><th>Qué te llevas</th><th>Plazo</th><th>Precio</th></tr></thead><tbody>' +
'<tr><td><b>Diagnóstico exprés</b><small class="sub">Un proceso</small></td><td><small>Lo miramos, te decimos si se automatiza, cómo y cuánto costaría</small></td><td><small>3 días laborables</small></td><td class="p">490 €</td></tr>' +
'<tr><td><b>Automatización suelta</b><small class="sub">Sin compromiso</small></td><td><small>Un flujo en producción, con gestión de errores y documentación</small></td><td><small>5-10 días laborables</small></td><td class="p">900 – 2.500 €</td></tr>' +
'<tr><td><b>Auditoría</b><small class="sub">Varios procesos</small></td><td><small>Mapa de procesos, priorización por retorno, evaluación de RGPD y AI Act, plan a seis meses</small></td><td><small>8 días laborables</small></td><td class="p">2.500 – 4.500 €</td></tr>' +
'<tr><td><b>Piloto</b><small class="sub">Un caso de uso</small></td><td><small>Un proceso en producción con datos reales, gestión de errores y formación</small></td><td><small>10 días laborables</small></td><td class="p">3.500 €</td></tr>' +
'<tr><td><b>Implantación</b><small class="sub">3 a 8 procesos</small></td><td><small>Integraciones con tu ERP y CRM, panel de trazabilidad, documentación y traspaso</small></td><td><small>4-8 semanas</small></td><td class="p">12.000 – 40.000 €</td></tr>' +
'<tr><td><b>Operación</b><small class="sub">Con SLA</small></td><td><small>Monitorización, incidencias con tiempos comprometidos, ajustes por cambios de API, informe mensual</small></td><td><small>Activo en 48 h</small></td><td class="p">600 – 2.500 €/mes</td></tr>' +
'</tbody></table></div>';

/* ---------- páginas especiales ---------- */
P['precios'] = {
  t:'Precios de automatización con IA | Publicados',
  d:'Precios públicos: diagnóstico exprés 490 €, automatización suelta 900-2.500 €, auditoría 2.500-4.500 €, implantación 12.000-40.000 €, operación 600-2.500 €/mes.',
  h1:'Precios', sub:'Publicados, porque comparar cinco agencias no debería costar cinco llamadas.', crumb:[],
  rel:['servicios/auditoria-ia','metodo','comparativas/agencia-vs-equipo-interno'],
  html:'<p class="lead">El 74 % de los compradores B2B quiere el precio desde el principio y solo una de cada cuatro agencias lo publica. Hay una razón nueva además de la evidente: un asistente de IA no puede recomendarte si tu precio no está documentado en público.</p>' +
  PRICING +
  '<div class="callout"><b>Empresas pequeñas y despachos de pocas personas:</b> empezad por el diagnóstico exprés. 490 €, tres días, un solo proceso. De ahí salen automatizaciones de 900 a 2.500 € que se montan en días. La escalera completa está pensada para cuando el volumen la justifique, y os diremos con franqueza en qué escalón estáis.</div>' +
  '<h2>Calcula tu caso</h2><p>Mueve los valores a lo que se parezca a tu empresa. Es una estimación para ordenar la conversación, no una promesa: el número serio sale de medir.</p>' + ROI +
  '<h2>Qué hace que suba el precio</h2><ul class="tick">' +
  '<li>Cuántos sistemas hay que integrar y si tienen API decente</li>' +
  '<li>El estado de tus datos: duplicados y maestros sin mantener multiplican el esfuerzo</li>' +
  '<li>Las excepciones: el camino feliz es el 20 % del trabajo</li>' +
  '<li>La criticidad del proceso y el nivel de trazabilidad exigido</li>' +
  '<li>Quién lo va a mantener después</li></ul>' +
  '<div class="faq"><h2>Preguntas</h2>' +
  '<details><summary>¿El precio incluye el coste de los modelos?</summary><p>No. El consumo de modelos y licencias se factura aparte y a coste, sin margen. En un proceso de tamaño medio suele ir de 40 a 300 € al mes, y se acota con límite de gasto y alerta.</p></details>' +
  '<details><summary>¿Se puede pagar por hitos?</summary><p>La implantación sí, por defecto. La auditoría y el piloto son precio cerrado y se facturan al inicio y a la entrega.</p></details>' +
  '<details><summary>¿Hay permanencia en la operación?</summary><p>No. Treinta días de preaviso y sin penalización.</p></details></div>'
};

P['faq'] = {
  t:'Preguntas frecuentes sobre automatización con IA',
  d:'Las objeciones reales que aparecen en la primera llamada, respondidas sin marketing.',
  h1:'Preguntas frecuentes', sub:'Lo que se pregunta de verdad en la primera llamada.', crumb:[],
  rel:['precios','metodo','confianza/seguridad-y-datos'],
  html:'<div class="faq">' +
  '<details open><summary>¿Por qué cobráis la auditoría si todo el mundo la regala?</summary><p>Porque una auditoría gratuita de 45 minutos no es una auditoría: es una llamada de ventas, y su conclusión siempre es la misma. La nuestra son ocho días laborables de entrevistas y análisis, y el entregable vale por sí solo aunque no sigas. Si contratas la implantación en 60 días, el importe se descuenta íntegro.</p></details>' +
  '<details><summary>¿Esto es un agente de IA de verdad o software de siempre con otro nombre?</summary><p>Depende del proceso, y te lo diremos sin adornos. Muchas veces la mejor solución es una automatización determinista sin nada de IA: más barata, más rápida y no alucina. Gartner estima que de los miles de proveedores que dicen vender IA agéntica solo unos 130 lo hacen de verdad; no tenemos interés en engordar esa lista. <a href="#/comparativas/rpa-vs-ia">Más sobre esto</a>.</p></details>' +
  '<details><summary>¿Y si os contrato y luego desaparecéis?</summary><p>Todo queda en tus cuentas y a tu nombre, documentado para que otra persona lo retome. La operación se cancela con 30 días de aviso. Es deliberado: si nos quedamos es porque aportamos.</p></details>' +
  '<details><summary>Me sale más barato contratar a alguien interno</summary><p>A partir de cierto volumen, sí. <a href="#/comparativas/agencia-vs-equipo-interno">Aquí están los números</a>, incluido el punto de corte a partir del cual te conviene contratar dentro.</p></details>' +
  '<details><summary>¿Usáis n8n, Make o desarrollo a medida?</summary><p>Los tres, según el caso, y se decide en la auditoría con criterios escritos. <a href="#/comparativas/n8n-vs-make">Comparativa</a>.</p></details>' +
  '<details><summary>¿Cuánto tarda en verse algo funcionando?</summary><p>Diez días laborables desde que tenemos accesos: ese es el compromiso del piloto y está en el contrato. Para la implantación completa no damos un número único, porque depende de cuántos sistemas haya y del estado de tus datos — y eso lo sabemos al cerrar la auditoría, en el día ocho.</p></details>' +
  '<details><summary>Somos una empresa pequeña, ¿nos vale?</summary><p>Sí. Empieza por el <a href="#/servicios/auditoria-ia">diagnóstico exprés</a> de 490 €. Si el proceso no merece automatizarse todavía, el informe lo dirá.</p></details>' +
  '<details><summary>¿Dónde van nuestros datos?</summary><p>A la UE, o a tu propia infraestructura. <a href="#/confianza/seguridad-y-datos">Detalle completo</a>.</p></details></div>'
};

/* ---------- HOME ---------- */
var HOME =
'<section class="hero"><canvas id="field" aria-hidden="true"></canvas><div class="wrap"><div class="hero-grid"><div>' +
'<span class="pill"><i class="led"></i><span>Automatización de procesos con IA</span></span>' +
'<h1>Automatizamos el trabajo que tu equipo <span class="grad">repite cada día</span>.</h1>' +
'<p class="hero-lead">Con trazabilidad, con SLA por escrito y con los datos en Europa. Empezamos por un diagnóstico de precio cerrado: sales con el mapa de tus procesos y una cifra, contrates o no el desarrollo.</p>' +
'<div class="hero-cta"><a class="btn btn-pri" href="#/contacto">Reservar diagnóstico</a><a class="btn btn-sec" href="#/precios">Ver precios y calculadora</a></div>' +
'<p class="hero-note">Desde 490 € y tres días para un proceso suelto. El importe se descuenta íntegro si contratas la implantación en los 60 días siguientes.</p>' +
'<div class="strip"><span><i></i><span>Datos en la UE</span></span><span><i></i><span>Sin lock-in</span></span>' +
'<span><i></i><span>SLA por escrito</span></span><span><i></i><span>Art. 50 AI Act</span></span><span><i></i><span>Piloto en 10 días</span></span></div>' +
'</div><div class="glass"><div class="console-head"><span class="tl"><i></i><i></i><i></i></span><span class="lab">Flujo en producción · facturas de proveedor</span></div>' +
'<div class="console-body"><div class="pipe-row" id="pipe">' +
'<div class="node"><div class="n-ic">01</div><div class="n-t">Correo entrante</div></div><div class="link"><i></i></div>' +
'<div class="node"><div class="n-ic">02</div><div class="n-t">Extracción</div></div><div class="link"><i></i></div>' +
'<div class="node"><div class="n-ic">03</div><div class="n-t">Validación</div></div><div class="link"><i></i></div>' +
'<div class="node"><div class="n-ic">04</div><div class="n-t">ERP</div></div><div class="link"><i></i></div>' +
'<div class="node"><div class="n-ic">05</div><div class="n-t">Registro</div></div></div>' +
'<div class="trace" id="trace"></div></div></div></div>' +
'<div class="mq"><div class="mq-track" id="mqt"></div></div></div></section>' +

'<section><div class="wrap"><div class="sec-head"><span class="lab">El problema</span>' +
'<h2>El cuello de botella no es el modelo. Es <span class="grad">todo lo que hay alrededor</span>.</h2>' +
'<p>Ninguna empresa tiene un problema de inteligencia artificial. Tiene personas caras haciendo tareas que una máquina hace mejor, y sistemas que no se hablan entre sí.</p></div>' +
'<div class="cards" style="grid-template-columns:repeat(3,1fr)">' +
'<a class="card" href="#/servicios/automatizacion-procesos"><span class="k">Síntoma 01</span><h3>Alguien copia datos de un sistema a otro</h3><p>Del correo al ERP, del formulario a la hoja, del PDF al CRM. Cada salto manual es una hora perdida y un error esperando.</p></a>' +
'<a class="card" href="#/servicios/documentos-facturas"><span class="k">Síntoma 02</span><h3>Los documentos se abren uno a uno</h3><p>A 60 documentos al día, leer y teclear cuatro campos es media jornada de una persona.</p></a>' +
'<a class="card" href="#/metodo"><span class="k">Síntoma 03</span><h3>Compraste IA y nadie la usa</h3><p>El piloto funcionó en la demo y murió en producción: los datos reales estaban sucios y nadie se quedó a mantenerlo.</p></a></div>' +
'<div class="callout" style="max-width:76ch"><b>El 76 % de las soluciones de IA en empresa se compran en vez de construirse internamente</b>, frente al 53 % en 2024. Y los copilotos mueven 7.200 M$ frente a 750 M$ de los agentes autónomos. El dinero no está en construir un agente: está en conectar lo que ya existe a los procesos que ya tienes. <span style="display:block;margin-top:8px;font-family:var(--mono);font-size:11px;color:var(--muted)">Menlo Ventures · State of Generative AI in the Enterprise, diciembre 2025</span></div>' +
'</div></section>' +

'<section><div class="wrap"><div class="sec-head"><span class="lab">Qué hacemos</span>' +
'<h2>Cinco formas de <span class="grad">quitarle horas</span> a tu equipo</h2></div>' +
'<div class="cards">' +
'<a class="card" href="#/servicios/auditoria-ia"><span class="k">Empieza aquí</span><h3>Diagnóstico y auditoría</h3><p>Desde 490 € y tres días. Medimos antes de construir.</p></a>' +
'<a class="card" href="#/servicios/automatizacion-procesos"><span class="k">Servicio</span><h3>Automatización de procesos</h3><p>Los saltos manuales entre tus sistemas, con gestión de errores.</p></a>' +
'<a class="card" href="#/servicios/documentos-facturas"><span class="k">Servicio</span><h3>Documentos y facturación</h3><p>Facturas leídas, validadas y registradas sin tecleo.</p></a>' +
'<a class="card" href="#/servicios/agentes-ia"><span class="k">Servicio</span><h3>Agentes de IA</h3><p>Atención conectada a tus datos, con escalado a persona.</p></a>' +
'<a class="card" href="#/servicios/integracion-erp-crm"><span class="k">Servicio</span><h3>Integración ERP y CRM</h3><p>Sage, A3, Holded, Odoo, Dynamics. Donde se va el esfuerzo real.</p></a>' +
'<a class="card" href="#/sectores"><span class="k">Por sector</span><h3>Tu sector</h3><p>Asesorías, seguros, industria y laboratorios, con procesos concretos.</p></a>' +
'</div></div></section>' +

'<section><div class="wrap"><div class="sec-head"><span class="lab">Calculadora</span>' +
'<h2>Cuánto te cuesta hoy el <span class="grad">trabajo repetitivo</span></h2>' +
'<p>Una estimación para ordenar la conversación, no una promesa de resultado.</p></div>' + ROI + '</div></section>' +

'<section><div class="wrap"><div class="sec-head"><span class="lab">Confianza</span>' +
'<h2>Las cuatro preguntas que de verdad <span class="grad">frenan estos proyectos</span></h2>' +
'<p>El 48 % de las pymes españolas exige soluciones que cumplan los requisitos legales y el 27 % considera imprescindible que el proveedor sea europeo.</p></div>' +
'<div class="cards">' +
'<a class="card" href="#/confianza/seguridad-y-datos"><span class="k">Dónde van mis datos</span><h3>En la Unión Europea</h3><p>Alojamiento en la UE u opción autoalojada. Tus datos no entrenan modelos de terceros.</p></a>' +
'<a class="card" href="#/confianza/seguridad-y-datos"><span class="k">Y si os vais</span><h3>Sin lock-in</h3><p>Cuentas, código y documentación a tu nombre desde el día uno.</p></a>' +
'<a class="card" href="#/metodo"><span class="k">Y si se rompe</span><h3>SLA por escrito</h3><p>Tiempos comprometidos en contrato, no «soporte incluido».</p></a>' +
'<a class="card" href="#/confianza/ai-act"><span class="k">Y la ley</span><h3>AI Act, artículo 50</h3><p>En vigor desde el 2 de agosto de 2026. Cada entrega sale conforme.</p></a></div>' +
'</div></section>' +

'<section><div class="wrap"><div class="sec-head"><span class="lab">Blog</span><h2>Lo último que hemos escrito</h2></div>' +
'<div class="posts">' +
'<a class="post" href="#/blog/cuanto-cuesta-automatizar-proceso-ia"><span class="k">Precios · 19 sep 2026</span><h3>Cuánto cuesta automatizar un proceso con IA en España</h3><p>Precios públicos reales de siete agencias españolas y tarifas de freelance en Malt.</p></a>' +
'<a class="post" href="#/blog/ai-act-articulo-50-pymes"><span class="k">Normativa · 12 sep 2026</span><h3>AI Act: qué te obliga el artículo 50 desde agosto de 2026</h3><p>En vigor, aplazado y sancionable. Las tres obligaciones que ya aplican.</p></a>' +
'<a class="post" href="#/blog/flujo-facturas-proveedor"><span class="k">Caso técnico · 5 sep 2026</span><h3>Automatizar la recepción de facturas: el flujo completo</h3><p>Los nueve pasos y los cuatro puntos donde falla.</p></a>' +
'</div><div style="margin-top:18px"><a class="btn btn-sec" href="#/blog">Ver todos los artículos</a></div></div></section>' +

'<section><div class="wrap"><div class="band"><span class="lab">Siguiente paso</span>' +
'<h2 style="margin-top:14px">Cuéntanos qué proceso te está costando más</h2>' +
'<p>Cinco campos. Respondemos el mismo día laborable con una primera lectura del caso.</p>' +
'<div style="max-width:760px;margin:0 auto">' + FORM + '</div></div></div></section>';


window.FRAG = {FORM:FORM, ROI:ROI, PRICING:PRICING};
window.HOME = HOME;
})();
