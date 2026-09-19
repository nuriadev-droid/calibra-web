/* Calibra — contenido de páginas (núcleo). Cada clave es una ruta real:
   en producción, /servicios/agentes-ia/ debe ser un HTML servido desde el servidor,
   no una ruta de cliente. Ver la nota de montaje en el pie. */
window.PAGES = Object.assign(window.PAGES || {}, {

/* ============ SERVICIOS ============ */

'servicios': {
  t: 'Servicios de automatización con IA para empresas',
  d: 'Automatización de procesos, agentes de IA, tratamiento de documentos e integración con ERP y CRM. Precios públicos y plazos cerrados.',
  h1: 'Servicios',
  sub: 'Cuatro formas de quitarle a tu equipo el trabajo que repite. Todas empiezan por medir y todas terminan con alguien que responde de que siga funcionando.',
  crumb: [],
  rel: ['precios', 'metodo', 'servicios/auditoria-ia'],
  html: `
<div class="cards">
  <a class="card" href="#/servicios/automatizacion-procesos">
    <span class="k">01</span><h3>Automatización de procesos</h3>
    <p>Los saltos manuales entre sistemas: del correo al ERP, del formulario a la hoja, del PDF al CRM.</p>
  </a>
  <a class="card" href="#/servicios/documentos-facturas">
    <span class="k">02</span><h3>Documentos y facturación</h3>
    <p>Facturas, albaranes, pedidos y contratos leídos, validados y registrados sin que nadie teclee.</p>
  </a>
  <a class="card" href="#/servicios/agentes-ia">
    <span class="k">03</span><h3>Agentes de IA</h3>
    <p>Atención por WhatsApp, correo o teléfono, conectada a tus datos y con escalado a persona.</p>
  </a>
  <a class="card" href="#/servicios/integracion-erp-crm">
    <span class="k">04</span><h3>Integración con ERP y CRM</h3>
    <p>Sage, A3, Holded, Odoo, Dynamics, HubSpot. Sincronización real, no exportaciones manuales.</p>
  </a>
</div>

<h2>Y antes de todo eso</h2>
<p>Ningún servicio arranca sin un diagnóstico. Para un proceso suelto, el <a href="#/servicios/auditoria-ia">diagnóstico exprés</a> de 490 € y tres días. Para varios, la auditoría completa en ocho días laborables.</p>
`
},

'servicios/auditoria-ia': {
  t: 'Auditoría de automatización con IA | Precio cerrado, 8 días',
  d: 'Auditoría de procesos con IA en ocho días laborables: mapa de procesos, horas y euros recuperables, evaluación de RGPD y AI Act, plan a seis meses. Desde 490 €.',
  h1: 'Auditoría de automatización',
  sub: 'Ocho días laborables. Precio cerrado. Sales con un documento tuyo, contrates o no el desarrollo.',
  crumb: [['Servicios', 'servicios']],
  rel: ['metodo', 'precios', 'confianza/ai-act'],
  html: `
<p class="lead">Una auditoría de automatización cuesta entre 490 € (un solo proceso, tres días) y 4.500 € (empresa completa, ocho días laborables). En España casi todas las agencias la regalan en forma de llamada de 45 minutos; esto es otra cosa.</p>

<h2>Qué incluye</h2>
<ul class="tick">
  <li><b>Entrevistas</b> con entre cinco y diez personas de tu equipo. No con el organigrama: con quien de verdad hace el trabajo.</li>
  <li><b>Mapa de procesos</b> con el tiempo real de cada uno, medido, no estimado a ojo.</li>
  <li><b>Priorización</b> por retorno y por riesgo de implantación. Lo que más ahorra no siempre es lo primero que hay que hacer.</li>
  <li><b>Evaluación legal</b>: dónde hay datos personales, qué encargados de tratamiento hacen falta y qué te obliga el artículo 50 del AI Act.</li>
  <li><b>Plan a seis meses</b> con estimaciones de coste por fase y qué se puede hacer sin nosotros.</li>
</ul>

<h2>Calendario</h2>
<table class="tbl">
<thead><tr><th>Día</th><th>Qué pasa</th></tr></thead>
<tbody>
<tr><td>0</td><td>Firma. Accesos de solo lectura y agenda de entrevistas cerrada en 48 h.</td></tr>
<tr><td>1-3</td><td>Entrevistas y observación directa de los procesos.</td></tr>
<tr><td>4-5</td><td>Medición: volúmenes reales, tiempos, tasa de error, coste por operación.</td></tr>
<tr><td>6-7</td><td>Diseño de los flujos candidatos y estimación de esfuerzo.</td></tr>
<tr><td>8</td><td>Entrega del informe y sesión de presentación de una hora.</td></tr>
</tbody></table>

<h2>Por qué se cobra</h2>
<p>Porque una auditoría gratuita no es una auditoría: es una llamada de ventas disfrazada, y su conclusión siempre es la misma — que contrates. Cuando el diagnóstico se paga, el interés cambia de lado. Si la conclusión honesta es que tu proceso no merece automatizarse todavía, eso es exactamente lo que va a poner el informe.</p>
<div class="callout"><b>El importe se descuenta íntegro</b> si contratas la implantación en los 60 días siguientes. Así el precio cumple su función —cualificar— sin ser una barrera.</div>

<div class="faq">
<h2>Preguntas</h2>
<details><summary>¿Y si después decido no seguir?</summary><p>El informe es tuyo. Incluye el detalle suficiente para que lo ejecute tu equipo interno o cualquier otro proveedor. No lleva cláusulas de exclusividad.</p></details>
<details><summary>¿Necesitáis acceso a nuestros sistemas?</summary><p>Solo de lectura, y solo a lo que haga falta. Se firma el contrato de encargado de tratamiento antes de tocar nada. Si prefieres que trabajemos sobre datos anonimizados en esta fase, se puede.</p></details>
<details><summary>¿Cuánto tiempo tiene que dedicar mi equipo?</summary><p>Entre 45 y 60 minutos por persona entrevistada, y una hora de la persona responsable en la presentación final. Nada más.</p></details>
</div>
`
},

'servicios/automatizacion-procesos': {
  t: 'Automatización de procesos con IA para empresas',
  d: 'Automatizamos los saltos manuales entre tus sistemas: correo, ERP, CRM, hojas de cálculo. Con gestión de errores, trazabilidad y SLA. Precios desde 900 €.',
  h1: 'Automatización de procesos',
  sub: 'El trabajo que no aparece en ningún organigrama y se come media plantilla: copiar, pegar, comprobar, reenviar.',
  crumb: [['Servicios', 'servicios']],
  rel: ['servicios/integracion-erp-crm', 'comparativas/rpa-vs-ia', 'precios'],
  html: `
<p class="lead">Un flujo de automatización sencillo en España cuesta entre 900 y 2.500 € y se monta en días. Uno complejo, con varios sistemas y reglas de negocio, entre 2.500 y 8.000 €. Lo que decide el precio no es la IA: es cuántos sistemas hay que tocar y en qué estado están los datos.</p>

<h2>Los procesos que más se repiten</h2>
<table class="tbl">
<thead><tr><th>Proceso</th><th>Qué se automatiza</th><th>Horas/mes típicas</th></tr></thead>
<tbody>
<tr><td>Alta de cliente</td><td>Formulario o correo → validación → CRM → carpeta → correo de bienvenida</td><td>8-20 h</td></tr>
<tr><td>Recepción de pedidos</td><td>PDF o correo → extracción → comprobación de stock → ERP → confirmación</td><td>15-40 h</td></tr>
<tr><td>Conciliación bancaria</td><td>Extracto → cruce con facturas → marcado → incidencias a revisión humana</td><td>10-25 h</td></tr>
<tr><td>Informes recurrentes</td><td>Consulta a varias fuentes → cálculo → documento → envío</td><td>6-16 h</td></tr>
<tr><td>Triaje de correo</td><td>Clasificación, extracción de datos, respuesta o derivación al responsable</td><td>20-50 h</td></tr>
</tbody></table>
<p class="note">Rangos observados en procesos de este tipo. Tu cifra real sale de la auditoría, midiendo, no estimando.</p>

<h2>Lo que distingue un flujo que aguanta</h2>
<ul class="tick">
  <li><b>Gestión de errores desde el primer día.</b> Qué pasa cuando el PDF viene torcido, cuando la API devuelve un 500, cuando el importe no cuadra. Un flujo sin ruta de excepción no es un flujo: es una demo.</li>
  <li><b>Reproceso.</b> Poder relanzar una ejecución fallida sin duplicar el asiento.</li>
  <li><b>Trazabilidad.</b> Cada ejecución registrada con entrada, salida y decisión tomada. Es lo que te permite auditar y lo que exige el AI Act si hay decisiones sobre personas.</li>
  <li><b>Control de coste.</b> Un flujo con un modelo de lenguaje mal puesto puede costar más que la persona a la que sustituye. Se mide y se acota.</li>
  <li><b>Una persona dueña del proceso</b> dentro de tu empresa. Sin eso, el proyecto muere a los tres meses.</li>
</ul>

<h2>Con qué se construye</h2>
<p>Con <a href="#/comparativas/n8n-vs-make">n8n, Make o desarrollo a medida</a>, según el caso. La herramienta se elige en la auditoría, no antes, y se elige con un criterio explícito: volumen, criticidad, dónde deben vivir los datos y quién lo va a mantener el año que viene.</p>

<div class="faq">
<h2>Preguntas</h2>
<details><summary>¿Hace falta IA para esto?</summary><p>A menudo no. Muchos de estos procesos son deterministas y se resuelven mejor sin modelo: más barato, más rápido y sin alucinaciones. El modelo entra donde hay texto libre, documentos o decisiones difusas. Te lo diremos sin adornos.</p></details>
<details><summary>¿Y si cambiamos de ERP dentro de un año?</summary><p>Por eso los flujos se construyen con la integración aislada en su propia capa. Cambiar de ERP significa rehacer esa capa, no el proceso entero.</p></details>
<details><summary>¿Podemos empezar por uno solo?</summary><p>Es lo que recomendamos. <a href="#/servicios/auditoria-ia">Diagnóstico exprés</a> de un proceso, 490 €, y si sale a cuenta se monta.</p></details>
</div>
`
},

'servicios/documentos-facturas': {
  t: 'Automatizar facturas y documentos con IA (OCR + LLM)',
  d: 'Extracción, validación y registro automático de facturas, albaranes, pedidos y contratos. Integrado con Sage, A3, Holded u Odoo. Con Verifactu en el horizonte.',
  h1: 'Documentos y facturación',
  sub: 'Facturas, albaranes, pedidos y contratos leídos, comprobados y registrados sin que nadie los teclee.',
  crumb: [['Servicios', 'servicios']],
  rel: ['blog/flujo-facturas-proveedor', 'servicios/integracion-erp-crm', 'sectores/asesorias-gestorias'],
  html: `
<p class="lead">Una empresa que recibe 300 facturas de proveedor al mes dedica entre 25 y 50 horas mensuales a abrirlas, extraer cuatro campos y teclearlos. A 24 € la hora cargada, son entre 7.200 y 14.400 € al año en un solo proceso administrativo.</p>

<h2>Cómo funciona el flujo</h2>
<ol class="steps-n">
  <li><b>Captura.</b> Buzón dedicado, carpeta compartida o portal de proveedor. Todo lo que entra queda registrado antes de tocarse.</li>
  <li><b>Extracción.</b> OCR para el texto y modelo de lenguaje para entender el documento: emisor, NIF, base, cuotas, líneas de detalle, condiciones de pago. Cada campo con su puntuación de confianza.</li>
  <li><b>Validación.</b> Cruce contra el pedido, contra el albarán y contra el maestro de proveedores. Suma de líneas frente a total. NIF contra el censo.</li>
  <li><b>Decisión.</b> Si todo cuadra y la confianza supera el umbral, se registra. Si no, va a una bandeja humana con el motivo señalado. Esa frontera la decides tú, y se puede mover.</li>
  <li><b>Registro.</b> Asiento en el ERP, documento archivado con su referencia, traza completa de qué se decidió y por qué.</li>
</ol>

<h2>Qué documentos</h2>
<table class="tbl">
<thead><tr><th>Tipo</th><th>Dificultad</th><th>Nota</th></tr></thead>
<tbody>
<tr><td>Factura de proveedor</td><td>Baja</td><td>El caso con mejor retorno y menor riesgo. Suele ser el piloto.</td></tr>
<tr><td>Albarán y pedido</td><td>Baja-media</td><td>Formatos muy heterogéneos entre proveedores.</td></tr>
<tr><td>Extracto bancario</td><td>Media</td><td>Mejor por Norma 43 o API bancaria que por PDF.</td></tr>
<tr><td>Contrato y póliza</td><td>Alta</td><td>Extracción de cláusulas y vencimientos. Siempre con revisión humana.</td></tr>
<tr><td>Documentación técnica</td><td>Alta</td><td>Planos, fichas, certificados. Caso a caso.</td></tr>
</tbody></table>

<h2>Verifactu: el plazo que obliga a tocar la facturación</h2>
<p>El sistema de facturación verificable de la AEAT obliga a miles de empresas españolas a revisar cómo emiten y registran facturas. Es trabajo que hay que hacer igualmente — y es el mejor momento para automatizar de paso lo que ya se hacía a mano. Si vas a abrir ese proceso, ábrelo una sola vez.</p>

<div class="callout"><b>Dónde ponemos el listón.</b> Ningún flujo de facturación se pone en producción sin ruta de excepción, sin reproceso sin duplicados y sin cuadre contra el ERP al cierre del día. Es contabilidad: un error silencioso aquí sale carísimo.</div>

<div class="faq">
<h2>Preguntas</h2>
<details><summary>¿Qué precisión tiene la extracción?</summary><p>Depende del documento y no te vamos a dar un porcentaje de folleto. Lo que sí hacemos es medirlo con tus documentos reales durante el piloto y fijar el umbral de confianza a partir de esa medición. Lo que no supera el umbral va a revisión humana.</p></details>
<details><summary>¿Se integra con Sage o A3?</summary><p>Sí, y también con Holded, Odoo, Contasol, Dynamics y cualquier sistema con API o importación estructurada. <a href="#/servicios/integracion-erp-crm">Más sobre integración</a>.</p></details>
<details><summary>¿Los documentos salen de la UE?</summary><p>No, salvo que tú lo autorices expresamente. <a href="#/confianza/seguridad-y-datos">Cómo tratamos los datos</a>.</p></details>
</div>
`
},

'servicios/agentes-ia': {
  t: 'Agentes de IA para empresas: WhatsApp, correo y teléfono',
  d: 'Desarrollo de agentes de IA conectados a tus datos, con escalado a persona, trazabilidad y declaración conforme al artículo 50 del AI Act.',
  h1: 'Agentes de IA',
  sub: 'Atención automatizada que sabe de tu empresa, sabe cuándo callarse y sabe a quién pasarle la conversación.',
  crumb: [['Servicios', 'servicios']],
  rel: ['blog/agentes-ia-vs-automatizacion-determinista', 'confianza/ai-act', 'precios'],
  html: `
<p class="lead">Un agente de IA útil no es un chatbot con mejor redacción. Es un sistema que consulta tus datos reales, ejecuta acciones en tus sistemas, sabe reconocer cuándo no sabe y deja rastro de todo lo que hizo. Los tres primeros son ingeniería; el cuarto es lo que te salva en una auditoría.</p>

<h2>Dónde funcionan bien</h2>
<ul class="tick">
  <li><b>Preguntas frecuentes con respuesta en tus documentos.</b> Estado de un pedido, condiciones de una póliza, plazos de un trámite. El agente busca en tu documentación y cita la fuente.</li>
  <li><b>Cualificación y toma de datos.</b> Recoge lo necesario, lo valida y lo mete en el CRM antes de pasar la conversación a una persona.</li>
  <li><b>Citas y agenda.</b> Consulta huecos reales y confirma, en vez de prometer que alguien llamará.</li>
  <li><b>Primer nivel interno.</b> El asistente que responde a tu propio equipo sobre procedimientos, convenios o normativa interna.</li>
</ul>

<h2>Dónde funcionan mal</h2>
<p>Conviene decirlo: donde la respuesta equivocada tiene consecuencias y no hay forma barata de verificarla. Asesoramiento fiscal concreto, diagnóstico, cálculos de nómina, interpretación de cláusulas con dinero detrás. Ahí el agente prepara el trabajo y la persona firma — nunca al revés.</p>

<h2>Arquitectura</h2>
<table class="tbl">
<thead><tr><th>Capa</th><th>Qué resuelve</th></tr></thead>
<tbody>
<tr><td>Recuperación</td><td>Búsqueda sobre tus documentos y datos, con citación de la fuente en cada respuesta.</td></tr>
<tr><td>Herramientas</td><td>Acciones acotadas sobre tus sistemas: consultar, crear, agendar. Con permisos mínimos.</td></tr>
<tr><td>Barreras</td><td>Qué no puede decir ni hacer, y qué desencadena el paso a persona.</td></tr>
<tr><td>Traza</td><td>Registro de cada conversación, cada fuente consultada y cada acción ejecutada.</td></tr>
<tr><td>Coste</td><td>Límite de gasto por conversación y por día, con alerta.</td></tr>
</tbody></table>

<div class="callout"><b>Obligación legal, desde el 2 de agosto de 2026.</b> El artículo 50 del AI Act exige que cualquier sistema que interactúe con personas se declare como IA de forma clara. Todos nuestros agentes salen con esa declaración puesta y con la documentación de tus obligaciones como desplegador. <a href="#/confianza/ai-act">Qué te aplica exactamente</a>.</div>

<div class="faq">
<h2>Preguntas</h2>
<details><summary>¿Y si el agente se inventa una respuesta?</summary><p>Por eso la capa de recuperación cita la fuente y por eso hay barreras y umbral de derivación. Un agente que responde solo con lo que encuentra en tus documentos y que dice "no lo sé, te paso con una persona" cuando no encuentra nada es mucho más útil que uno que siempre tiene respuesta.</p></details>
<details><summary>¿Cuánto cuesta mantenerlo?</summary><p>El consumo de modelo en un agente de atención con volumen medio suele ir de 40 a 300 € al mes. La operación con SLA, de 600 a 2.500 €. <a href="#/precios">Precios completos</a>.</p></details>
<details><summary>¿Podemos empezar solo con WhatsApp?</summary><p>Sí, y suele ser lo sensato. Un canal, un caso de uso, diez días laborables.</p></details>
</div>
`
},

'servicios/integracion-erp-crm': {
  t: 'Integración de IA con ERP y CRM: Sage, A3, Holded, Odoo',
  d: 'Conectamos automatizaciones e IA con el software que ya usas: Sage, A3 Wolters Kluwer, Holded, Odoo, Dynamics, HubSpot. Sincronización real y trazable.',
  h1: 'Integración con ERP y CRM',
  sub: 'La parte que nadie enseña en las demos y que es donde se va el 70 % del esfuerzo real.',
  crumb: [['Servicios', 'servicios']],
  rel: ['servicios/automatizacion-procesos', 'servicios/documentos-facturas', 'metodo'],
  html: `
<p class="lead">Casi todas las agencias enseñan logos de HubSpot, Salesforce y Shopify. La pyme española trabaja con Sage, A3, Holded, Odoo, Contasol y Factusol, y ahí es donde están los procesos que duelen. Si tu ERP no aparece en la web de tu proveedor, pregúntale por qué antes de firmar.</p>

<h2>Con qué integramos</h2>
<table class="tbl">
<thead><tr><th>Sistema</th><th>Vía</th><th>Notas</th></tr></thead>
<tbody>
<tr><td>Sage 50 / 200</td><td>API, base de datos o importación estructurada</td><td>Depende de la versión y del alojamiento.</td></tr>
<tr><td>A3 (Wolters Kluwer)</td><td>Importación estructurada</td><td>Muy común en asesorías. Formato estable.</td></tr>
<tr><td>Holded</td><td>API REST</td><td>La integración más cómoda del grupo.</td></tr>
<tr><td>Odoo</td><td>API XML-RPC / JSON-RPC</td><td>Acceso completo al modelo de datos.</td></tr>
<tr><td>Dynamics 365</td><td>API + Dataverse</td><td>Requiere gobierno de permisos.</td></tr>
<tr><td>HubSpot / Pipedrive</td><td>API REST + webhooks</td><td>Sincronización bidireccional viable.</td></tr>
<tr><td>Bancos</td><td>Norma 43, PSD2</td><td>Siempre preferible al PDF del extracto.</td></tr>
<tr><td>AEAT</td><td>SII, Verifactu</td><td>Requisitos formales estrictos.</td></tr>
</tbody></table>

<h2>Las tres cosas que rompen una integración</h2>
<ol class="steps-n">
  <li><b>Datos duplicados en origen.</b> El mismo cliente tres veces con NIF distinto. Ninguna automatización arregla esto sola; hay que decidir la fuente de verdad antes de empezar.</li>
  <li><b>Cambios de API sin aviso.</b> Por eso la operación con SLA no es un extra opcional: alguien tiene que estar mirando cuando el proveedor cambia un campo.</li>
  <li><b>Permisos concedidos con la cuenta de una persona.</b> El día que esa persona se va, el flujo cae. Se usan credenciales de servicio, con permisos mínimos y documentadas.</li>
</ol>

<div class="callout"><b>Todo queda a tu nombre.</b> Las cuentas, las claves, el código y la documentación son tuyos desde el primer día. Si mañana te llevas el sistema a tu equipo interno, sigue funcionando. <a href="#/confianza/seguridad-y-datos">Cómo lo hacemos</a>.</div>
`
},

/* ============ SECTORES ============ */

'sectores': {
  t: 'Automatización con IA por sector',
  d: 'Automatización con IA para asesorías y gestorías, correduría de seguros, industria y clínicas. Procesos concretos de cada sector, no plantillas.',
  h1: 'Sectores',
  sub: 'Páginas escritas con los procesos reales de cada sector. Si un sector no está aquí es porque todavía no tenemos método construido, y preferimos decirlo.',
  crumb: [],
  rel: ['servicios', 'casos', 'contacto'],
  html: `
<div class="cards">
  <a class="card" href="#/sectores/asesorias-gestorias"><span class="k">Método construido</span><h3>Asesorías y gestorías</h3><p>Modelo 303, conciliación, alta de clientes, remesas de nóminas, A3 y Sage.</p></a>
  <a class="card" href="#/sectores/seguros"><span class="k">Método construido</span><h3>Seguros y correduría</h3><p>Pólizas, siniestros, vencimientos, comparativas y comunicación con compañías.</p></a>
  <a class="card" href="#/sectores/industria"><span class="k">Método construido</span><h3>Industria y fabricación</h3><p>Pedidos, albaranes, control de calidad, partes de producción y trazabilidad.</p></a>
  <a class="card" href="#/sectores/clinicas"><span class="k">En desarrollo</span><h3>Clínicas y laboratorios</h3><p>Citas, consentimientos, informes y dato de salud — con las cautelas que exige.</p></a>
</div>
<p class="note">Distribución y logística, agroalimentario y servicios profesionales: trabajamos en ellos, pero el descubrimiento es más largo porque no partimos de método propio. Lo decimos antes de presupuestar.</p>
`
},

'sectores/asesorias-gestorias': {
  t: 'Automatización con IA para asesorías y gestorías',
  d: 'Automatiza el trabajo repetitivo de tu asesoría: recepción de documentación, conciliación, modelo 303, alta de clientes. Integrado con A3, Sage y Holded.',
  h1: 'Asesorías y gestorías',
  sub: 'El sector con más volumen documental por empleado de España y, probablemente, el de mayor retorno por euro invertido.',
  crumb: [['Sectores', 'sectores']],
  rel: ['servicios/documentos-facturas', 'servicios/integracion-erp-crm', 'blog/automatizar-asesoria-fiscal'],
  html: `
<p class="lead">Una asesoría de 40 empleados mueve entre 3.000 y 8.000 documentos al mes de clientes. La mayor parte del trabajo que hay alrededor de esos documentos —pedirlos, clasificarlos, reclamarlos, teclearlos— no requiere criterio profesional. El criterio profesional empieza después, y es lo único que el cliente está pagando de verdad.</p>

<h2>Los procesos que automatizamos aquí</h2>
<table class="tbl">
<thead><tr><th>Proceso</th><th>Dolor</th><th>Qué cambia</th></tr></thead>
<tbody>
<tr><td>Recepción de documentación</td><td>Llega por correo, WhatsApp, carpeta y papel</td><td>Buzón único, clasificación automática por cliente y periodo, acuse al cliente</td></tr>
<tr><td>Reclamación de pendientes</td><td>Alguien persiguiendo a 200 clientes cada trimestre</td><td>Recordatorios automáticos con el listado exacto de lo que falta</td></tr>
<tr><td>Registro de facturas</td><td>Tecleo campo a campo en A3 o Sage</td><td>Extracción, validación contra censo y asiento, con excepciones a bandeja</td></tr>
<tr><td>Conciliación bancaria</td><td>Cruce manual de extracto y facturas</td><td>Cruce automático, solo las discrepancias llegan a una persona</td></tr>
<tr><td>Cierre de modelo 303</td><td>Revisión completa a contrarreloj</td><td>Precomprobaciones diarias: los errores aparecen en enero, no el día 18 de abril</td></tr>
<tr><td>Alta de cliente</td><td>Diez pasos manuales y tres sistemas</td><td>Un formulario dispara expediente, carpetas, alta en A3 y contrato</td></tr>
</tbody></table>

<h2>Lo que no automatizamos</h2>
<p>La decisión fiscal. La calificación de un gasto, la interpretación de una consulta vinculante, la estrategia de un cierre. La máquina prepara, ordena y detecta; el profesional colegiado decide y firma. Cualquiera que te venda lo contrario no ha trabajado nunca en una asesoría.</p>

<div class="callout"><b>Verifactu.</b> Tus clientes van a venir preguntando. Una asesoría que llega con una respuesta montada —y con el proceso de facturación de sus clientes ya ordenado— convierte una obligación normativa en un servicio facturable.</div>

<h2>Por dónde empezar</h2>
<p>Por el registro de facturas de un solo cliente grande. Es el proceso con volumen más predecible, el retorno más fácil de medir y el menor riesgo si algo falla. <a href="#/servicios/auditoria-ia">Diagnóstico exprés</a>: 490 €, tres días.</p>
`
},

'sectores/seguros': {
  t: 'Automatización con IA para correduría de seguros',
  d: 'Automatiza pólizas, vencimientos, siniestros y comunicación con compañías. Para corredurías que compiten con comparadores sin perder el trato personal.',
  h1: 'Seguros y correduría',
  sub: 'Mucho documento, muchos plazos y un margen que se defiende con servicio, no con precio.',
  crumb: [['Sectores', 'sectores']],
  rel: ['servicios/documentos-facturas', 'servicios/agentes-ia', 'contacto'],
  html: `
<p class="lead">Una correduría mediana gestiona miles de pólizas de decenas de compañías, cada una con su portal, su formato y su plazo. El trabajo administrativo crece con la cartera; los ingresos, no necesariamente. Ahí es donde la automatización deja de ser un lujo.</p>

<h2>Procesos con retorno claro</h2>
<ul class="tick">
  <li><b>Vencimientos.</b> Detección anticipada, aviso al cliente con la comparativa ya preparada y seguimiento de la renovación. Es el proceso que más prima retiene.</li>
  <li><b>Alta y modificación de póliza.</b> Extracción de los datos del documento de la compañía y volcado al sistema de la correduría sin tecleo doble.</li>
  <li><b>Apertura de siniestro.</b> Recogida estructurada por WhatsApp o web, documentación completa a la primera y expediente creado antes de que nadie lo mire.</li>
  <li><b>Comparativa multicompañía.</b> Normalización de coberturas dispares en una tabla legible por el cliente.</li>
  <li><b>Comisiones.</b> Cuadre de las liquidaciones de las compañías contra la cartera propia. Aquí aparecen diferencias con una frecuencia que sorprende.</li>
</ul>

<h2>La cautela que hay que tener</h2>
<p>El asesoramiento en seguros está regulado y la responsabilidad es del mediador. Un agente de IA puede recoger datos, explicar coberturas generales y preparar comparativas, pero la recomendación concreta la firma una persona. Lo diseñamos así desde el principio, no como parche posterior.</p>

<div class="callout">Un agente que atiende consultas de clientes sobre sus propias pólizas es, además, una obligación de transparencia bajo el artículo 50 del AI Act. <a href="#/confianza/ai-act">Qué implica</a>.</div>
`
},

'sectores/industria': {
  t: 'Automatización con IA para industria y fabricación',
  d: 'Pedidos, albaranes, partes de producción, control de calidad y trazabilidad documental automatizados para empresas industriales.',
  h1: 'Industria y fabricación',
  sub: 'Donde la administración va en papel aunque la planta esté digitalizada.',
  crumb: [['Sectores', 'sectores']],
  rel: ['servicios/documentos-facturas', 'servicios/integracion-erp-crm', 'precios'],
  html: `
<p class="lead">En muchas industrias españolas conviven un ERP moderno y un flujo administrativo de 1998: pedidos que llegan por correo en PDF, albaranes que se teclean, partes de producción en papel que alguien pasa a una hoja el viernes. La planta no es el cuello de botella; la oficina sí.</p>

<h2>Procesos habituales</h2>
<table class="tbl">
<thead><tr><th>Proceso</th><th>Qué se automatiza</th></tr></thead>
<tbody>
<tr><td>Entrada de pedidos</td><td>PDF o correo del cliente → extracción de referencias y cantidades → comprobación contra catálogo y stock → alta en ERP</td></tr>
<tr><td>Albaranes de proveedor</td><td>Cotejo contra pedido, alta de recepción, incidencias señaladas</td></tr>
<tr><td>Partes de producción</td><td>Captura desde formulario en planta o foto del parte, volcado a ERP</td></tr>
<tr><td>Documentación de calidad</td><td>Certificados, fichas y ensayos indexados y localizables por lote</td></tr>
<tr><td>Trazabilidad</td><td>Reconstrucción de la historia de un lote sin buscar en cinco carpetas</td></tr>
<tr><td>Ofertas</td><td>Generación de la oferta desde el escandallo y el histórico de precios</td></tr>
</tbody></table>

<h2>Una nota sobre la planta</h2>
<p>No tocamos control de proceso, PLC ni seguridad de máquina. Eso es otro oficio, con otras certificaciones y otro régimen de responsabilidad. Trabajamos en la capa administrativa y documental, y donde hace falta nos integramos con el MES o el SCADA en modo lectura.</p>

<div class="callout"><b>Trazabilidad documental y AI Act.</b> Si un sistema automatizado participa en decisiones de calidad, tiene que quedar registro de qué decidió y con qué datos. Lo construimos así por defecto, porque en un sector con auditorías esto no es opcional.</div>
`
},

'sectores/clinicas': {
  t: 'Automatización con IA para clínicas y laboratorios',
  d: 'Citas, consentimientos, recordatorios e informes automatizados para clínicas y laboratorios, con las cautelas que exige el dato de salud.',
  h1: 'Clínicas y laboratorios',
  sub: 'El sector donde más se promete y donde más cuidado hay que tener.',
  crumb: [['Sectores', 'sectores']],
  rel: ['confianza/seguridad-y-datos', 'confianza/ai-act', 'servicios/agentes-ia'],
  html: `
<p class="lead">El dato de salud es categoría especial bajo el RGPD y buena parte de los usos clínicos de la IA entran en el ámbito de alto riesgo del AI Act. Eso no impide automatizar: impide automatizar a la ligera, y obliga a separar con claridad lo administrativo de lo asistencial.</p>

<h2>Lo administrativo: retorno alto y riesgo bajo</h2>
<ul class="tick">
  <li>Gestión de citas, recordatorios y reducción de ausencias</li>
  <li>Recogida y archivo de consentimientos informados</li>
  <li>Preparación de documentación antes de la visita</li>
  <li>Facturación a mutuas y cuadre de liquidaciones</li>
  <li>Indexación y búsqueda sobre protocolos internos</li>
</ul>

<h2>Lo asistencial: otra liga</h2>
<p>Apoyo a la interpretación, priorización de pacientes, cualquier cosa que influya en una decisión clínica. Aquí la conversación empieza por el marco regulatorio —producto sanitario, IVDR, categoría de riesgo del AI Act— y no por la herramienta. Si alguien te ofrece esto como un proyecto de automatización de seis semanas, desconfía.</p>

<div class="callout"><b>Nuestra posición.</b> En este sector trabajamos la capa administrativa con normalidad. Para lo asistencial, o el proyecto se plantea desde el principio con el marco regulatorio encima de la mesa, o no lo cogemos.</div>
`
},

/* ============ COMPARATIVAS ============ */

'comparativas': {
  t: 'Comparativas de herramientas de automatización',
  d: 'n8n vs Make, n8n vs Zapier, RPA vs IA, agencia vs equipo interno. Comparativas honestas, con criterios de decisión y sin ganador predeterminado.',
  h1: 'Comparativas',
  sub: 'Escritas para que puedas decidir tú, incluso si la decisión es no contratarnos.',
  crumb: [],
  rel: ['servicios/automatizacion-procesos', 'precios', 'blog'],
  html: `
<div class="cards">
  <a class="card" href="#/comparativas/n8n-vs-make"><span class="k">Herramientas</span><h3>n8n vs Make</h3><p>Cuál elegir según volumen, criticidad y dónde deben vivir los datos.</p></a>
  <a class="card" href="#/comparativas/n8n-vs-zapier"><span class="k">Herramientas</span><h3>n8n vs Zapier</h3><p>Facilidad contra control, y el factor europeo que casi nadie menciona.</p></a>
  <a class="card" href="#/comparativas/rpa-vs-ia"><span class="k">Enfoques</span><h3>RPA vs automatización con IA</h3><p>Cuándo el modelo aporta y cuándo solo encarece y añade riesgo.</p></a>
  <a class="card" href="#/comparativas/agencia-vs-equipo-interno"><span class="k">Decisión</span><h3>Agencia vs equipo interno</h3><p>Los números a partir de los cuales conviene contratar dentro.</p></a>
</div>
`
},

'comparativas/n8n-vs-make': {
  t: 'n8n vs Make en 2026: cuál elegir para tu empresa',
  d: 'Comparativa práctica entre n8n y Make: autoalojamiento, coste por operación, control del dato, mantenimiento y criticidad. Con criterio de decisión claro.',
  h1: 'n8n vs Make',
  sub: 'Las dos son buenas. La pregunta no es cuál es mejor, sino cuál es mejor para tu caso.',
  crumb: [['Comparativas', 'comparativas']],
  rel: ['comparativas/n8n-vs-zapier', 'servicios/automatizacion-procesos', 'confianza/seguridad-y-datos'],
  html: `
<p class="lead">Resumen para quien tiene prisa: si tus datos son sensibles, el volumen es alto o quieres poder llevarte el sistema, n8n. Si el equipo que lo va a mantener no es técnico y el volumen es moderado, Make. Cualquier comparativa que dé un ganador absoluto está vendiendo algo.</p>

<table class="tbl">
<thead><tr><th>Criterio</th><th>n8n</th><th>Make</th></tr></thead>
<tbody>
<tr><td>Autoalojamiento</td><td>Sí, es su mayor ventaja</td><td>No</td></tr>
<tr><td>Dónde viven los datos</td><td>Donde tú decidas</td><td>En la nube del proveedor</td></tr>
<tr><td>Modelo de coste</td><td>Por ejecución de flujo, o coste de servidor si lo alojas</td><td>Por operación individual</td></tr>
<tr><td>A volumen alto</td><td>Escala mejor, sobre todo autoalojado</td><td>El coste por operación se dispara</td></tr>
<tr><td>Curva de aprendizaje</td><td>Más pronunciada; recompensa a quien sabe programar</td><td>Más suave, editor visual muy pulido</td></tr>
<tr><td>Lógica compleja</td><td>Permite código JavaScript o Python embebido</td><td>Posible pero incómoda</td></tr>
<tr><td>Catálogo de conectores</td><td>Amplio y creciente; lo que falte se hace por HTTP</td><td>Más extenso y más pulido</td></tr>
<tr><td>Portabilidad</td><td>Alta: los flujos son JSON y el motor es tuyo</td><td>Baja: dependes de la plataforma</td></tr>
<tr><td>Quién lo mantiene</td><td>Requiere perfil técnico si lo alojas</td><td>Un perfil de operaciones puede apañarse</td></tr>
</tbody></table>

<h2>El factor que casi nadie menciona</h2>
<p>Una encuesta de IONOS a decisores de pyme europea sitúa en el 27 % el porcentaje de empresas españolas que considera imprescindible que su proveedor sea europeo, y en el 48 % las que exigen cumplimiento legal explícito. Con n8n autoalojado en un servidor en la UE, esa conversación se acaba en una frase. Con cualquier plataforma en la nube hay que documentar transferencias, subencargados y ubicaciones.</p>

<h2>Cuándo ninguna de las dos</h2>
<p>Cuando el proceso es crítico, de alto volumen y va a vivir cinco años. Ahí un servicio a medida, con sus pruebas y su despliegue controlado, sale más barato a tres años que mantener un flujo no-code que se ha vuelto ilegible. Meter un proceso crítico en una herramienta visual solo porque se monta en dos tardes es una decisión que se paga después.</p>

<div class="callout"><b>Cómo decidimos nosotros.</b> La herramienta se elige en la auditoría, con criterios escritos: volumen mensual, criticidad, sensibilidad del dato, quién lo mantendrá dentro de un año. No al revés. <a href="#/metodo">Ver el método</a>.</div>
`
},

'comparativas/n8n-vs-zapier': {
  t: 'n8n vs Zapier: comparativa para empresas europeas (2026)',
  d: 'n8n frente a Zapier: coste a volumen, control del dato, RGPD y portabilidad. Cuándo Zapier sigue siendo la opción correcta.',
  h1: 'n8n vs Zapier',
  sub: 'Facilidad contra control, y una diferencia europea que pesa más de lo que parece.',
  crumb: [['Comparativas', 'comparativas']],
  rel: ['comparativas/n8n-vs-make', 'confianza/seguridad-y-datos', 'servicios/automatizacion-procesos'],
  html: `
<p class="lead">Zapier es la forma más rápida de conectar dos aplicaciones de consumo. n8n es la forma más razonable de construir automatización empresarial que tiene que durar, escalar y cumplir. Casi todo el debate se reduce a eso.</p>

<table class="tbl">
<thead><tr><th>Criterio</th><th>n8n</th><th>Zapier</th></tr></thead>
<tbody>
<tr><td>Tiempo hasta el primer flujo</td><td>Horas</td><td>Minutos</td></tr>
<tr><td>Coste a volumen alto</td><td>Predecible</td><td>Crece rápido con las tareas</td></tr>
<tr><td>Ubicación del dato</td><td>Tuya si autoalojas</td><td>Infraestructura del proveedor</td></tr>
<tr><td>Ramificación y lógica</td><td>Completa, con código embebido</td><td>Limitada en los planes básicos</td></tr>
<tr><td>Integraciones de nicho</td><td>Vía HTTP, siempre posible</td><td>Las que existan en el catálogo</td></tr>
<tr><td>Portabilidad</td><td>Flujos exportables, motor propio</td><td>Dependencia total</td></tr>
</tbody></table>

<h2>Cuándo Zapier es la respuesta correcta</h2>
<p>Cuando el proceso conecta dos herramientas SaaS estándar, no toca datos personales sensibles, el volumen es bajo y quien lo mantiene no es técnico. En ese escenario, montar infraestructura propia es sobreingeniería — y te lo diremos aunque signifique un proyecto más pequeño.</p>

<h2>Dónde se rompe</h2>
<p>En tres sitios, siempre los mismos: el coste cuando el volumen sube, el momento en que hace falta una decisión con varias ramas y excepciones, y la primera vez que el departamento legal pregunta dónde se procesan los datos de los clientes.</p>

<div class="callout">¿Tienes ya flujos montados en Zapier o Make y no funcionan bien? Los revisamos, te decimos qué merece la pena migrar y qué no, y lo migramos si sale a cuenta. <a href="#/contacto">Cuéntanos el caso</a>.</div>
`
},

'comparativas/rpa-vs-ia': {
  t: 'RPA vs automatización con IA: cuándo usar cada una',
  d: 'Diferencias reales entre RPA clásica y automatización con modelos de lenguaje. Cuándo la IA aporta valor y cuándo solo añade coste y riesgo.',
  h1: 'RPA vs automatización con IA',
  sub: 'La pregunta correcta no es cuál es más moderna, sino cuál falla menos en tu proceso.',
  crumb: [['Comparativas', 'comparativas']],
  rel: ['blog/agentes-ia-vs-automatizacion-determinista', 'servicios/automatizacion-procesos', 'metodo'],
  html: `
<p class="lead">Una automatización determinista hace siempre lo mismo ante la misma entrada, cuesta menos y no alucina. Un modelo de lenguaje entiende texto que ninguna regla podría cubrir, pero introduce variabilidad. El 70 % de los procesos de una pyme se resuelven mejor sin modelo, y decirlo en voz alta nos ha costado más de un proyecto.</p>

<table class="tbl">
<thead><tr><th></th><th>Determinista / RPA</th><th>Con modelo de lenguaje</th></tr></thead>
<tbody>
<tr><td>Entrada</td><td>Estructurada y previsible</td><td>Texto libre, documentos heterogéneos</td></tr>
<tr><td>Resultado</td><td>Idéntico siempre</td><td>Variable dentro de un margen</td></tr>
<tr><td>Coste por ejecución</td><td>Prácticamente cero</td><td>Céntimos, pero se multiplican</td></tr>
<tr><td>Depuración</td><td>Directa</td><td>Requiere medición y umbrales</td></tr>
<tr><td>Falla cuando</td><td>Cambia el formato de entrada</td><td>El caso se sale de lo visto</td></tr>
<tr><td>Cumplimiento</td><td>Sencillo de justificar</td><td>Requiere traza y, a veces, declaración bajo el AI Act</td></tr>
</tbody></table>

<h2>La regla que aplicamos</h2>
<p>El modelo entra solo donde la regla no llega: texto libre, documentos con formato impredecible, clasificación difusa, redacción. Y cuando entra, va encapsulado — la parte que decide con criterio se aísla, se mide y se puede sustituir sin rehacer el proceso entero.</p>

<h2>El error caro</h2>
<p>Poner un modelo en el centro de un proceso de alto volumen porque suena moderno. Gartner estima que más del 40 % de los proyectos de IA agéntica se cancelarán antes de finales de 2027 por costes crecientes y valor poco claro, y calcula que de los miles de proveedores que dicen ofrecer IA agéntica solo unos 130 lo hacen de verdad. La mayoría de esas cancelaciones son procesos que nunca necesitaron un modelo.</p>
`
},

'comparativas/agencia-vs-equipo-interno': {
  t: 'Agencia de automatización o equipo interno: los números',
  d: 'Cuándo sale a cuenta contratar a alguien dentro y cuándo un contrato de operación. Comparativa de costes reales en España.',
  h1: 'Agencia vs equipo interno',
  sub: 'Te damos los números aunque la conclusión sea que no nos contrates.',
  crumb: [['Comparativas', 'comparativas']],
  rel: ['precios', 'metodo', 'contacto'],
  html: `
<p class="lead">Un perfil senior de automatización en España cuesta entre 45.000 y 70.000 € anuales cargados, más entre dos y cuatro meses de búsqueda. Un contrato de operación con SLA va de 7.200 a 30.000 € al año. El punto de corte está en torno a ocho o diez procesos en producción.</p>

<table class="tbl">
<thead><tr><th></th><th>Equipo interno</th><th>Agencia con SLA</th><th>Freelance</th></tr></thead>
<tbody>
<tr><td>Coste anual</td><td>45.000-70.000 € cargados</td><td>7.200-30.000 €</td><td>Variable, 280-600 €/día</td></tr>
<tr><td>Tiempo hasta productivo</td><td>3-6 meses</td><td>Días</td><td>Días</td></tr>
<tr><td>Conocimiento del negocio</td><td>El mejor, a medio plazo</td><td>Medio, documentado</td><td>Depende de la persona</td></tr>
<tr><td>Si esa persona se va</td><td>Se para todo</td><td>Continuidad contractual</td><td>Se para todo</td></tr>
<tr><td>Vacaciones y bajas</td><td>Sin cobertura</td><td>Cubiertas</td><td>Sin cobertura</td></tr>
<tr><td>Variedad de tecnología</td><td>La que esa persona domine</td><td>Amplia por rotación de proyectos</td><td>La que esa persona domine</td></tr>
</tbody></table>

<h2>Cuándo contratar dentro</h2>
<ul class="tick">
  <li>Más de ocho o diez procesos en producción que cambian a menudo</li>
  <li>Automatización que toca el núcleo del producto que vendes</li>
  <li>Necesidad de respuesta en minutos, no en horas</li>
  <li>Ya tienes equipo técnico que pueda absorber el relevo</li>
</ul>

<h2>Cuándo no</h2>
<ul class="tick">
  <li>Estás empezando y no sabes aún cuánto trabajo habrá</li>
  <li>El volumen es estacional</li>
  <li>Necesitas resultados este trimestre y no dentro de dos</li>
</ul>

<div class="callout"><b>El escenario que más recomendamos a empresas medianas:</b> nosotros montamos y operamos el primer año, tu equipo entra en paralelo y al final del periodo se lleva el sistema con documentación y formación. Todo está a tu nombre desde el día uno, así que esta salida está siempre disponible.</div>
`
},

/* ============ PÁGINAS SUELTAS ============ */

'metodo': {
  t: 'Método: auditoría, piloto, implantación y operación',
  d: 'Cuatro fases con plazos y precios cerrados: auditoría en 8 días, piloto en 10, implantación en 4-8 semanas y operación con SLA activa en 48 h.',
  h1: 'Método',
  sub: 'Cuatro fases. Cada una se puede parar. Ninguna empieza antes de que la anterior haya entregado algo utilizable.',
  crumb: [],
  rel: ['servicios/auditoria-ia', 'precios', 'comparativas/agencia-vs-equipo-interno'],
  html: `
<ol class="steps-n big">
  <li><b>Auditoría — 8 días laborables.</b> Entrevistas, medición y un informe con procesos priorizados por retorno y riesgo. Precio cerrado. El importe se descuenta si sigues. <a href="#/servicios/auditoria-ia">Detalle</a>.</li>
  <li><b>Piloto — 10 días laborables.</b> Un solo caso de uso en producción real, con tus datos sucios. Gestión de errores y formación incluidas. Precio cerrado.</li>
  <li><b>Implantación — 4 a 8 semanas.</b> De tres a ocho procesos integrados con tus sistemas, panel de trazabilidad, documentación y traspaso. Facturación por hitos.</li>
  <li><b>Operación con SLA — activa en 48 h.</b> Monitorización, incidencias con tiempos comprometidos, ajustes por cambios de API, control de coste e informe mensual. Cancelable con 30 días.</li>
</ol>

<h2>Por qué en este orden</h2>
<p>Porque el modo contrario —construir primero y medir después— es el que produce el dato más incómodo del sector: la mayoría de las implantaciones de IA nunca llegan a producción estable. No fallan por falta de tecnología. Fallan porque se automatizó el proceso equivocado, porque nadie previó las excepciones o porque al romperse no había nadie al otro lado.</p>

<h2>Lo que pedimos a tu lado</h2>
<ul class="tick">
  <li>Una persona responsable del proceso, con capacidad de decidir</li>
  <li>Accesos de lectura en 48 h desde la firma</li>
  <li>Disponibilidad de 45 minutos por persona entrevistada</li>
  <li>Permiso para mirar los datos reales, no una muestra limpia</li>
</ul>
<p class="note">Ese último punto es el que más proyectos salva. Un piloto que funciona con datos preparados y falla con los de verdad es la causa documentada del fracaso más sonado del sector.</p>
`
},

'casos': {
  t: 'Casos de éxito',
  d: 'Publicaremos cada caso con nombre, cifras y método cuando el cliente lo autorice. Todavía no hay ninguno publicado, y preferimos decirlo.',
  h1: 'Casos',
  sub: 'Todavía no hay casos publicados aquí.',
  crumb: [],
  rel: ['metodo', 'sectores', 'contacto'],
  html: `
<p class="lead">Podríamos llenar esta página de logos genéricos y porcentajes redondos, como hace buena parte del sector. Preferimos decirlo: los primeros clientes están en marcha y cada caso se publicará con nombre, cifras y método cuando el cliente lo autorice.</p>

<h2>El formato que usaremos</h2>
<table class="tbl">
<thead><tr><th>Bloque</th><th>Qué contendrá</th></tr></thead>
<tbody>
<tr><td>Cliente y sector</td><td>Nombre real, tamaño y sector. Con NDA: "asesoría de 40 empleados en Valencia", nunca "una empresa del sector servicios".</td></tr>
<tr><td>Situación de partida</td><td>El proceso tal como estaba, con su volumen y su coste medidos antes de tocar nada.</td></tr>
<tr><td>Qué se construyó</td><td>El diagrama del flujo real, los sistemas integrados y qué ocurre cuando falla.</td></tr>
<tr><td>Resultado</td><td>Una métrica de negocio antes y después, con el periodo y el método de medición.</td></tr>
<tr><td>Qué no salió bien</td><td>Lo que hubo que rehacer. Va en todos los casos.</td></tr>
</tbody></table>

<div class="callout">Si eres de los primeros y aceptas que publiquemos el caso con cifras, hay condiciones especiales en la implantación. <a href="#/contacto">Hablemos</a>.</div>
`
},

'confianza/seguridad-y-datos': {
  t: 'Seguridad y tratamiento de datos',
  d: 'Dónde viven tus datos, qué subencargados intervienen, cómo se gestionan los accesos y por qué no hay lock-in. RGPD, LOPDGDD y residencia en la UE.',
  h1: 'Seguridad y datos',
  sub: 'Las respuestas por escrito, antes de que tengas que preguntarlas.',
  crumb: [['Confianza', 'confianza/ai-act']],
  rel: ['confianza/ai-act', 'servicios/integracion-erp-crm', 'contacto'],
  html: `
<h2>Dónde viven los datos</h2>
<p>En la Unión Europea, o en tu propia infraestructura si eliges despliegue autoalojado. Para cada proyecto se documenta qué dato sale de tus sistemas, hacia dónde y con qué base jurídica. Si algún componente implica transferencia internacional, aparece en el contrato de encargado de tratamiento y en la evaluación correspondiente — no en una nota al pie.</p>

<h2>Modelos de lenguaje</h2>
<p>Cuando un flujo usa un modelo de terceros, se contrata en la modalidad que no utiliza los datos para entrenamiento y se documenta. Cuando el dato es especialmente sensible, la alternativa es un modelo desplegado en infraestructura europea o en la tuya. Es una decisión de diseño que se toma en la auditoría, no un ajuste posterior.</p>

<h2>Accesos</h2>
<ul class="tick">
  <li>Credenciales de servicio con permisos mínimos, nunca la cuenta personal de un empleado</li>
  <li>Solo lectura durante la auditoría</li>
  <li>Registro de qué sistema accedió a qué y cuándo</li>
  <li>Revocación inmediata al cierre del proyecto, documentada</li>
</ul>

<h2>Sin lock-in, y qué significa exactamente</h2>
<ul class="tick">
  <li>Las cuentas de las plataformas son tuyas y están a tu nombre desde el primer día</li>
  <li>El código y los flujos se entregan en tu repositorio</li>
  <li>La documentación es suficiente para que otro proveedor o tu equipo lo retome</li>
  <li>La operación con SLA se cancela con 30 días de aviso, sin penalización</li>
</ul>

<div class="callout">Si tu departamento legal necesita el detalle antes de una primera reunión, pídelo y lo enviamos. Es más rápido para todos.</div>
`
},

'confianza/ai-act': {
  t: 'AI Act: qué obliga a tu empresa desde agosto de 2026',
  d: 'El artículo 50 del AI Act está en vigor desde el 2 de agosto de 2026. Qué te obliga como desplegador, qué se ha aplazado y qué sanciones hay.',
  h1: 'AI Act',
  sub: 'Qué te aplica de verdad hoy, sin el ruido que circula.',
  crumb: [['Confianza', 'confianza/seguridad-y-datos']],
  rel: ['confianza/seguridad-y-datos', 'blog/ai-act-articulo-50-pymes', 'servicios/agentes-ia'],
  html: `
<p class="lead">Desde el 2 de agosto de 2026 está en vigor el artículo 50 del Reglamento de IA: todo sistema que interactúe con personas debe informar claramente de que es un sistema de IA, y el contenido sintético debe marcarse en formato legible por máquina. Las sanciones llegan a 15 millones de euros o el 3 % de la facturación mundial.</p>

<h2>Las tres obligaciones del artículo 50</h2>
<ol class="steps-n">
  <li><b>Sistemas que hablan con personas.</b> Chatbots, agentes de atención, agentes de voz. Hay que informar de que es IA, salvo que sea obvio por el contexto.</li>
  <li><b>Contenido sintético.</b> Texto, audio, imagen o vídeo generados deben marcarse de forma legible por máquina. Los sistemas ya en el mercado antes del 2 de agosto tienen hasta el <b>2 de diciembre de 2026</b>.</li>
  <li><b>Reconocimiento de emociones y categorización biométrica.</b> Hay que informar a las personas expuestas y tratar los datos conforme al RGPD.</li>
</ol>

<h2>Qué se ha aplazado y qué no</h2>
<table class="tbl">
<thead><tr><th>Obligación</th><th>Fecha</th></tr></thead>
<tbody>
<tr><td>Prácticas prohibidas</td><td>En vigor desde febrero de 2025</td></tr>
<tr><td>Alfabetización en IA (art. 4)</td><td>En vigor desde febrero de 2025</td></tr>
<tr><td>Modelos de propósito general</td><td>En vigor desde agosto de 2025</td></tr>
<tr><td>Transparencia (art. 50)</td><td>En vigor desde el 2 de agosto de 2026</td></tr>
<tr><td>Marcado de contenido ya en mercado</td><td>2 de diciembre de 2026</td></tr>
<tr><td>Alto riesgo autónomo (Anexo III)</td><td>Aplazado a 2 de diciembre de 2027</td></tr>
<tr><td>Alto riesgo integrado en producto (Anexo I)</td><td>Aplazado a 2 de agosto de 2028</td></tr>
</tbody></table>

<h2>Eres proveedor o desplegador (y cambia todo)</h2>
<p>Si encargas un agente y lo operas en tu empresa, normalmente eres desplegador. Si lo comercializas bajo tu marca, eres proveedor, y las obligaciones son mayores. En cada proyecto lo dejamos por escrito en el contrato, porque discutirlo después de una inspección es tarde.</p>

<h2>La obligación que casi nadie ha visto</h2>
<p>El artículo 4 exige desde febrero de 2025 que proveedores y desplegadores garanticen un nivel suficiente de alfabetización en IA de su personal. Es decir: formación documentada. No hay sanción específica asociada, pero es lo primero que se pregunta cuando algo va mal.</p>

<div class="callout"><b>Cómo lo resolvemos.</b> Cada entrega incluye la declaración de IA puesta, el marcado cuando procede y un documento que explica a tu empresa sus obligaciones como desplegador. Sin coste adicional, porque no es un extra: es parte de entregar algo que se puede usar.</div>

<p class="note">Esto es una síntesis de fuentes públicas, no asesoramiento jurídico. Antes de publicar afirmaciones de cumplimiento, valídalo con un abogado especializado.</p>
`
},

'kit-digital': {
  t: 'Kit Digital e IA: qué se puede financiar en 2026',
  d: 'Cómo encajan las automatizaciones con IA en las ayudas de digitalización vigentes, qué cubren y qué no, y qué hacer si tu bono ya caducó.',
  h1: 'Kit Digital y ayudas',
  sub: 'Lo que se puede financiar, lo que no, y lo que ya no existe aunque siga saliendo en Google.',
  crumb: [],
  rel: ['precios', 'servicios/auditoria-ia', 'contacto'],
  html: `
<p class="lead">Dos avisos antes de nada. Kit Consulting —el programa de asesoramiento con bonos de 12.000 a 24.000 €— tuvo una única convocatoria entre mayo de 2024 y febrero de 2025 y no hay convocatoria abierta. Kit Digital sí sigue financiando soluciones de digitalización, incluidas categorías donde encajan automatizaciones con IA.</p>

<h2>Qué suele cubrirse</h2>
<ul class="tick">
  <li>Gestión de procesos y automatización de flujos administrativos</li>
  <li>Gestión de clientes, cuando la automatización va dentro del CRM</li>
  <li>Factura electrónica y digitalización documental</li>
  <li>Inteligencia empresarial y analítica</li>
</ul>

<h2>Qué no</h2>
<ul class="tick">
  <li>El consumo recurrente de modelos de lenguaje</li>
  <li>La operación y el mantenimiento continuos</li>
  <li>Hardware</li>
  <li>Proyectos ya iniciados antes de la concesión</li>
</ul>

<h2>Cómo lo planteamos</h2>
<p>La ayuda cubre parte del desarrollo, no la operación. Por eso el proyecto se estructura en dos piezas separadas desde el presupuesto: lo subvencionable y lo que no lo es. Presentarlo todo junto es la forma más habitual de que te denieguen la justificación.</p>

<div class="callout"><b>Sé escéptica con quien te prometa "la IA gratis con la subvención".</b> Las ayudas cubren una parte, tienen justificación formal y hay que adelantar dinero. Si el proyecto solo tiene sentido con subvención, probablemente no tenía sentido.</div>

<p class="note">Comprueba siempre las convocatorias vigentes en la sede de Red.es antes de tomar decisiones. Las condiciones cambian entre convocatorias.</p>
`
},

'contacto': {
  t: 'Contacto',
  d: 'Cuéntanos qué proceso te está costando más. Respondemos el mismo día laborable con una primera lectura del caso.',
  h1: 'Contacto',
  sub: 'Respondemos el mismo día laborable con una primera lectura del caso.',
  crumb: [],
  rel: ['precios', 'servicios/auditoria-ia', 'metodo'],
  html: '{{FORM}}'
}

});
