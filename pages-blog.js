/* Calibra — blog. Contenido escrito para responder arriba, con dato, fecha y entidad
   en las primeras 100 palabras: es lo que hace que un LLM pueda citarlo. */
window.PAGES = Object.assign(window.PAGES || {}, {

'blog': {
  t: 'Blog: automatización con IA para empresas',
  d: 'Artículos sobre automatización de procesos con IA en España: precios reales, AI Act, herramientas, flujos concretos y qué funciona de verdad.',
  h1: 'Blog',
  sub: 'Lo que hemos aprendido montando esto, con números y sin promesas redondas.',
  crumb: [],
  rel: ['comparativas', 'servicios', 'precios'],
  html: `
<div class="posts">
  <a class="post" href="#/blog/cuanto-cuesta-automatizar-proceso-ia">
    <span class="k">Precios · 19 sep 2026</span>
    <h3>Cuánto cuesta automatizar un proceso con IA en España</h3>
    <p>Precios públicos reales de siete agencias españolas, tarifas de freelance en Malt y en qué tramo compite cada uno.</p>
  </a>
  <a class="post" href="#/blog/ai-act-articulo-50-pymes">
    <span class="k">Normativa · 12 sep 2026</span>
    <h3>AI Act: qué te obliga el artículo 50 desde agosto de 2026</h3>
    <p>En vigor, aplazado y sancionable. Las tres obligaciones que ya aplican a cualquier pyme con un chatbot.</p>
  </a>
  <a class="post" href="#/blog/flujo-facturas-proveedor">
    <span class="k">Caso técnico · 5 sep 2026</span>
    <h3>Automatizar la recepción de facturas: el flujo completo</h3>
    <p>Los nueve pasos, los cuatro puntos donde falla y cómo se decide el umbral de intervención humana.</p>
  </a>
  <a class="post" href="#/blog/agentes-ia-vs-automatizacion-determinista">
    <span class="k">Criterio · 28 ago 2026</span>
    <h3>Agentes de IA o automatización determinista</h3>
    <p>Por qué el 70 % de los procesos de una pyme se resuelven mejor sin modelo de lenguaje.</p>
  </a>
  <a class="post" href="#/blog/automatizar-asesoria-fiscal">
    <span class="k">Sector · 20 ago 2026</span>
    <h3>Seis procesos automatizables en una asesoría fiscal</h3>
    <p>Del buzón de documentación al cierre del 303, con las horas que se recuperan en cada uno.</p>
  </a>
  <a class="post" href="#/blog/ia-datos-ue-rgpd">
    <span class="k">Cumplimiento · 12 ago 2026</span>
    <h3>Usar IA sin sacar los datos de la UE</h3>
    <p>Qué exige el 48 % de las pymes españolas y cómo se monta una arquitectura que lo cumple.</p>
  </a>
</div>
`
},

'blog/cuanto-cuesta-automatizar-proceso-ia': {
  t: 'Cuánto cuesta automatizar un proceso con IA en España (2026)',
  d: 'Precios reales publicados por agencias españolas en 2026: de 250 € un workflow básico a 40.000 € una implantación completa. Con las cifras y sus fuentes.',
  h1: 'Cuánto cuesta automatizar un proceso con IA en España',
  sub: 'Precios publicados, no estimaciones. Septiembre de 2026.',
  crumb: [['Blog', 'blog']],
  date: '19 de septiembre de 2026',
  type: 'article',
  rel: ['precios', 'comparativas/agencia-vs-equipo-interno', 'servicios/auditoria-ia'],
  html: `
<p class="lead">En septiembre de 2026, automatizar un proceso administrativo en una pyme española cuesta entre 250 € (un flujo de dos o tres pasos) y 12.000 € (back-office documental completo con IA). El mantenimiento va de 90 a 500 € al mes. Estas cifras están publicadas por las propias agencias, no estimadas.</p>

<h2>Lo que publican las agencias españolas</h2>
<table class="tbl">
<thead><tr><th>Concepto</th><th>Rango publicado</th></tr></thead>
<tbody>
<tr><td>Workflow básico (1 proceso, 2-3 apps)</td><td>250 - 900 €</td></tr>
<tr><td>Sistema multi-flujo con lógica y registro</td><td>990 - 3.900 €</td></tr>
<tr><td>Chatbot o agente conversacional</td><td>1.900 - 6.000 €</td></tr>
<tr><td>Agente de voz</td><td>desde 2.500 € + 0,30 €/min</td></tr>
<tr><td>Back-office con IA (OCR, generación documental)</td><td>5.000 - 12.000 €</td></tr>
<tr><td>Plataforma a medida</td><td>desde 9.000 €</td></tr>
<tr><td>Mantenimiento mensual</td><td>90 - 500 €</td></tr>
</tbody></table>
<p class="note">Cifras publicadas por Varkia, RoviDev, Rakaty, SANCANTIA, NeuroFluxIA, AizuaLabs y Ciberfobia en sus propias webs. Solo siete de las quince agencias españolas que revisamos publican tarifas.</p>

<h2>El dato que cambia la lectura</h2>
<p>En Malt España hay más de 320 perfiles con etiqueta n8n, con tarifas reales entre 100 y 1.500 € al día y la mayoría entre 280 y 600. Un freelance senior a 450 €/día entrega en tres días lo mismo que una micro-agencia factura a 1.350 €. <b>En el tramo bajo, la agencia no tiene ventaja de precio.</b> Su única defensa es continuidad, SLA, responsabilidad contractual y cobertura cuando la persona se pone enferma.</p>

<h2>Y el que lo complica</h2>
<p>Según la encuesta de IONOS a unos 514 decisores de pyme española, el 35 % invertirá en IA en 2026 (frente al 22 % en 2025), pero el 37 % declara que gastaría entre 21 y 100 € al mes y solo el 8 % más de 200 €. Esa es la distancia entre lo que la pyme dice que quiere y lo que puede pagar mensualmente — y explica por qué han aparecido productos SaaS empaquetados a 149-349 € al mes.</p>

<h2>Qué determina realmente el precio</h2>
<ol class="steps-n">
  <li><b>Cuántos sistemas hay que tocar.</b> Dos apps con API buena es un proyecto; un ERP local sin API es otro.</li>
  <li><b>El estado de tus datos.</b> Duplicados, formatos inconsistentes y maestros sin mantener multiplican el esfuerzo. Es el factor más subestimado.</li>
  <li><b>Las excepciones.</b> El camino feliz es el 20 % del trabajo. El 80 % es qué pasa cuando algo viene mal.</li>
  <li><b>La criticidad.</b> Un flujo que si falla retrasa un correo no se construye igual que uno que si falla descuadra la contabilidad.</li>
  <li><b>Quién lo mantiene después.</b> Un flujo que va a tocar alguien no técnico se diseña distinto, y cuesta más.</li>
</ol>

<h2>Cómo pedir presupuesto sin perder el tiempo</h2>
<ul class="tick">
  <li>Di el volumen mensual real del proceso, no "bastante"</li>
  <li>Di qué sistemas hay y en qué versión</li>
  <li>Pide el precio de la operación por separado, no solo el de la construcción</li>
  <li>Pregunta qué pasa cuando una API de terceros cambia, y quién lo paga</li>
  <li>Pide ver un sistema suyo en producción, no una demo</li>
</ul>

<div class="callout">Nuestros precios están publicados en <a href="#/precios">la página de precios</a>, con plazos y con lo que incluye cada tramo.</div>
`
},

'blog/ai-act-articulo-50-pymes': {
  t: 'AI Act artículo 50: qué obliga a las pymes desde agosto de 2026',
  d: 'El artículo 50 del AI Act está en vigor desde el 2 de agosto de 2026. Qué obliga, qué se aplazó al Digital Omnibus y qué sanciones hay.',
  h1: 'AI Act: qué te obliga el artículo 50 desde agosto de 2026',
  sub: 'Lo que ya aplica, lo que se aplazó y lo que circula mal contado.',
  crumb: [['Blog', 'blog']],
  date: '12 de septiembre de 2026',
  type: 'article',
  rel: ['confianza/ai-act', 'servicios/agentes-ia', 'confianza/seguridad-y-datos'],
  html: `
<p class="lead">Las obligaciones de transparencia del artículo 50 del Reglamento europeo de IA están en vigor desde el 2 de agosto de 2026. No se han aplazado. Si tu empresa tiene un chatbot en la web, un agente de voz o genera contenido con IA, te aplican hoy, y la sanción llega a 15 millones de euros o el 3 % de la facturación mundial.</p>

<h2>Las tres obligaciones</h2>
<h3>1. Declarar que es IA</h3>
<p>Cualquier sistema que interactúe con personas físicas debe informar de forma clara de que están tratando con un sistema de IA, salvo que resulte obvio por el contexto. En la práctica: visible al inicio de la conversación, no enterrado en el pie de página ni en los términos de uso.</p>

<h3>2. Marcar el contenido sintético</h3>
<p>Texto, audio, imagen y vídeo generados con IA deben marcarse en formato legible por máquina. Los sistemas ya en el mercado antes del 2 de agosto de 2026 tienen de plazo hasta el <b>2 de diciembre de 2026</b>. Los deepfakes que representen personas, lugares o hechos reales deben divulgarse por parte del desplegador.</p>

<h3>3. Emociones y biometría</h3>
<p>Si usas reconocimiento de emociones o categorización biométrica, hay que informar a las personas expuestas y tratar los datos conforme al RGPD.</p>

<h2>Lo que sí se aplazó</h2>
<p>El llamado Digital Omnibus retrasó las obligaciones de los sistemas de alto riesgo: los autónomos del Anexo III al 2 de diciembre de 2027, y los integrados en productos regulados al 2 de agosto de 2028. <b>No se aplazaron</b> ni las prácticas prohibidas (febrero de 2025), ni las obligaciones de modelos de propósito general (agosto de 2025), ni el artículo 50.</p>

<h2>La obligación de la que nadie habla</h2>
<p>El artículo 4 obliga desde febrero de 2025 a proveedores y desplegadores a garantizar un nivel suficiente de alfabetización en IA de su personal. Formación documentada. No lleva sanción propia asociada, pero es lo primero que se pide cuando hay un incidente, y es trivial de cumplir si se hace a tiempo.</p>

<h2>Proveedor o desplegador</h2>
<table class="tbl">
<thead><tr><th>Si tú...</th><th>Eres</th><th>Y entonces</th></tr></thead>
<tbody>
<tr><td>Encargas un agente y lo usas en tu empresa</td><td>Desplegador</td><td>Informas a los usuarios y registras el uso</td></tr>
<tr><td>Lo comercializas bajo tu marca</td><td>Proveedor</td><td>Asumes las obligaciones completas del sistema</td></tr>
<tr><td>Modificas sustancialmente un sistema de terceros</td><td>Puedes pasar a proveedor</td><td>Revísalo antes de tocar nada</td></tr>
</tbody></table>

<h2>Qué hacer esta semana</h2>
<ul class="tick">
  <li>Inventaría los sistemas de IA que tu empresa ya usa de cara al público</li>
  <li>Comprueba que cada uno se declara como IA visiblemente</li>
  <li>Determina por escrito si eres proveedor o desplegador en cada caso</li>
  <li>Documenta la formación de tu personal (artículo 4)</li>
  <li>Revisa los contratos con tus proveedores de IA: ¿quién asume qué?</li>
</ul>

<p class="note">Síntesis de fuentes públicas a 19 de septiembre de 2026, no asesoramiento jurídico. Circula una fecha alternativa (2 de noviembre de 2026) para el artículo 50; las fuentes jurídicas coinciden en el 2 de agosto de 2026.</p>
`
},

'blog/flujo-facturas-proveedor': {
  t: 'Automatizar la recepción de facturas de proveedor: el flujo completo',
  d: 'Los nueve pasos de un flujo real de facturas de proveedor, los cuatro puntos donde falla y cómo se fija el umbral de revisión humana.',
  h1: 'Automatizar la recepción de facturas: el flujo completo',
  sub: 'Un caso técnico, con los puntos de fallo incluidos.',
  crumb: [['Blog', 'blog']],
  date: '5 de septiembre de 2026',
  type: 'article',
  rel: ['servicios/documentos-facturas', 'sectores/asesorias-gestorias', 'servicios/integracion-erp-crm'],
  html: `
<p class="lead">Una empresa que recibe 300 facturas de proveedor al mes dedica entre 25 y 50 horas mensuales a procesarlas manualmente. El flujo automatizado tarda entre 4 y 10 segundos por factura. La diferencia no está en la extracción, que es la parte fácil: está en la validación y en qué se hace cuando algo no cuadra.</p>

<h2>Los nueve pasos</h2>
<ol class="steps-n">
  <li><b>Captura.</b> Buzón dedicado. Todo lo que entra se registra con su identificador antes de procesarse; si el flujo se cae, no se pierde nada.</li>
  <li><b>Desduplicado.</b> Huella del documento contra los últimos noventa días. Los proveedores reenvían más de lo que se cree.</li>
  <li><b>Clasificación.</b> ¿Es factura, albarán, recordatorio de pago o publicidad? Si no es factura, se archiva y se acaba el flujo.</li>
  <li><b>Extracción.</b> OCR más modelo de lenguaje: emisor, NIF, número, fecha, base, cuotas, total y líneas. Cada campo con puntuación de confianza.</li>
  <li><b>Normalización.</b> Fechas, decimales, tipos de IVA, identificación del proveedor contra el maestro. Aquí aparece la mitad de los problemas.</li>
  <li><b>Validación.</b> Suma de líneas contra total. Cuotas contra bases. NIF con formato correcto. Cruce contra pedido y albarán si existen.</li>
  <li><b>Decisión.</b> Si todo cuadra y la confianza supera el umbral, se registra. Si no, a bandeja humana con el motivo concreto señalado.</li>
  <li><b>Registro.</b> Asiento en el ERP, documento archivado con la referencia del asiento, acuse al proveedor si procede.</li>
  <li><b>Cuadre.</b> Al cierre del día, el número de facturas entradas tiene que coincidir con el de registradas más el de bandeja. Si no coincide, alerta.</li>
</ol>

<h2>Los cuatro puntos donde falla</h2>
<table class="tbl">
<thead><tr><th>Fallo</th><th>Por qué</th><th>Cómo se resuelve</th></tr></thead>
<tbody>
<tr><td>Proveedor no identificado</td><td>Razón social distinta del nombre comercial, o NIF ausente</td><td>Alias en el maestro y coincidencia difusa con umbral alto</td></tr>
<tr><td>Facturas multipágina</td><td>Se procesa solo la primera página</td><td>Detección de continuidad y agregación de líneas</td></tr>
<tr><td>Rectificativas</td><td>Se registran como factura normal y duplican el importe</td><td>Detección explícita y flujo propio</td></tr>
<tr><td>Reenvíos del proveedor</td><td>Duplican el asiento</td><td>Desduplicado por huella más número de factura</td></tr>
</tbody></table>

<h2>Dónde se pone el umbral</h2>
<p>La pregunta no es "qué precisión tiene el sistema" sino "cuánto cuesta un error frente a cuánto cuesta una revisión". Si revisar cuesta 30 segundos y un error mal detectado cuesta dos horas de contabilidad más una llamada al proveedor, el umbral se pone alto y se acepta que el 15 % vaya a bandeja. Esa cifra se decide con datos del piloto, midiendo, no con el porcentaje que trae el proveedor en el folleto.</p>

<div class="callout"><b>La regla de oro.</b> Un flujo de facturación sin cuadre diario no está terminado. Es la única forma de saber que no se está perdiendo nada en silencio, y el silencio es exactamente el modo en que fallan estos sistemas.</div>
`
},

'blog/agentes-ia-vs-automatizacion-determinista': {
  t: 'Agentes de IA o automatización determinista: cuándo usar cada uno',
  d: 'Por qué la mayoría de procesos de una pyme se resuelven mejor sin modelo de lenguaje, y cómo decidir cuándo el agente aporta valor real.',
  h1: 'Agentes de IA o automatización determinista',
  sub: 'Una decisión técnica que casi siempre se toma por motivos de marketing.',
  crumb: [['Blog', 'blog']],
  date: '28 de agosto de 2026',
  type: 'article',
  rel: ['comparativas/rpa-vs-ia', 'servicios/agentes-ia', 'metodo'],
  html: `
<p class="lead">Gartner estima que más del 40 % de los proyectos de IA agéntica se cancelarán antes de finales de 2027, y que de los miles de proveedores que dicen ofrecer IA agéntica solo unos 130 lo hacen de verdad. Buena parte de esas cancelaciones son procesos que nunca necesitaron un modelo de lenguaje.</p>

<h2>La proporción real del mercado</h2>
<p>Según Menlo Ventures, dentro del gasto empresarial en aplicaciones de IA los copilotos mueven 7.200 millones de dólares frente a 750 millones de los agentes autónomos. Además, el 76 % de las soluciones se compran en vez de construirse internamente, frente al 53 % en 2024. Traducción: vender agentes autónomos es competir por una porción pequeña; implantar IA sobre procesos existentes es donde está el dinero.</p>

<h2>Cuándo el modelo no aporta</h2>
<ul class="tick">
  <li>La entrada es estructurada y previsible</li>
  <li>Las reglas caben en una tabla de decisión</li>
  <li>El volumen es alto y el margen de error, estrecho</li>
  <li>Hay que justificar cada decisión ante un auditor</li>
  <li>El proceso se ejecuta miles de veces al día y cada céntimo cuenta</li>
</ul>

<h2>Cuándo sí aporta</h2>
<ul class="tick">
  <li>Texto libre: correos, descripciones, reclamaciones</li>
  <li>Documentos con formato impredecible entre emisores</li>
  <li>Clasificación difusa donde las reglas se vuelven inmanejables</li>
  <li>Redacción de borradores que una persona revisa</li>
  <li>Búsqueda semántica sobre documentación propia</li>
</ul>

<h2>El patrón que funciona: el modelo encapsulado</h2>
<p>La arquitectura que aguanta no es "un agente que lo hace todo". Es un proceso determinista con una o dos cápsulas de modelo en los puntos exactos donde la regla no llega. Cada cápsula tiene su entrada acotada, su salida validada y su métrica propia. Si el modelo empeora, se sustituye sin tocar el resto. Si encarece, se mide dónde.</p>

<h2>La lección del caso 11x</h2>
<p>La empresa de SDR con IA levantó 74 millones de dólares y, según reportes de prensa secundaria, perdió entre el 70 y el 80 % de su base de clientes. La causa señalada no fue el modelo: fue el hueco entre la demo con datos curados y la producción con CRMs sucios. Es exactamente el mismo motivo por el que insistimos en hacer el piloto con tus datos reales, no con una muestra preparada.</p>

<div class="callout"><b>Nuestra regla.</b> Si el proceso se puede resolver sin modelo, se resuelve sin modelo. Es más barato para ti, más fácil de mantener para nosotros y no hay que explicárselo a nadie en una auditoría.</div>
`
},

'blog/automatizar-asesoria-fiscal': {
  t: 'Seis procesos automatizables en una asesoría fiscal',
  d: 'Del buzón de documentación al cierre del modelo 303: seis procesos concretos de una asesoría española y las horas que recupera cada uno.',
  h1: 'Seis procesos automatizables en una asesoría fiscal',
  sub: 'Con las horas mensuales que recupera cada uno en una asesoría de unos 40 empleados.',
  crumb: [['Blog', 'blog']],
  date: '20 de agosto de 2026',
  type: 'article',
  rel: ['sectores/asesorias-gestorias', 'servicios/documentos-facturas', 'servicios/auditoria-ia'],
  html: `
<p class="lead">Una asesoría española de unos 40 empleados gestiona entre 3.000 y 8.000 documentos de cliente al mes. La mayor parte del trabajo que rodea a esos documentos no requiere criterio profesional, y es precisamente el que se lleva las horas del trimestre.</p>

<h2>Los seis, por orden de retorno</h2>
<table class="tbl">
<thead><tr><th>#</th><th>Proceso</th><th>Horas/mes</th><th>Dificultad</th></tr></thead>
<tbody>
<tr><td>1</td><td>Registro de facturas en A3 o Sage</td><td>40-90</td><td>Media</td></tr>
<tr><td>2</td><td>Recepción y clasificación de documentación</td><td>25-50</td><td>Baja</td></tr>
<tr><td>3</td><td>Reclamación de documentación pendiente</td><td>15-35</td><td>Baja</td></tr>
<tr><td>4</td><td>Conciliación bancaria</td><td>15-30</td><td>Media</td></tr>
<tr><td>5</td><td>Precomprobaciones de modelo 303</td><td>10-25</td><td>Media</td></tr>
<tr><td>6</td><td>Alta de cliente nuevo</td><td>5-15</td><td>Baja</td></tr>
</tbody></table>
<p class="note">Rangos observados en procesos de este tipo, no medias del sector. La cifra de tu despacho sale de medir, y medir cuesta ocho días.</p>

<h2>Por qué el registro de facturas va primero</h2>
<p>Porque tiene volumen predecible, retorno fácil de medir y riesgo acotado: si algo no cuadra, va a bandeja y lo mira una persona. Empezar por aquí también resuelve el problema político de cualquier automatización — el equipo ve el beneficio en la primera semana, en su propio trabajo.</p>

<h2>La reclamación de pendientes, el proceso invisible</h2>
<p>Nadie lo cuenta como trabajo, pero perseguir a doscientos clientes cada trimestre para que envíen lo que falta consume a una persona entera en los picos. Un flujo que sabe qué ha llegado de cada cliente y qué no, y que envía el recordatorio con el listado exacto, elimina casi todo ese trabajo y además mejora la sensación de servicio.</p>

<h2>Lo que no se automatiza</h2>
<p>La calificación de un gasto. La interpretación de una consulta vinculante. La estrategia de un cierre. El criterio de un profesional colegiado ante una inspección. La máquina prepara, ordena y detecta anomalías; la persona decide y firma.</p>

<h2>Y una oportunidad concreta</h2>
<p>Verifactu está obligando a miles de empresas a revisar cómo emiten facturas. Tus clientes van a preguntar. Una asesoría que llega con la respuesta preparada —y con el proceso de facturación de sus clientes ya ordenado— convierte una obligación normativa en un servicio facturable, que es lo contrario de lo que suele pasar con la normativa.</p>
`
},

'blog/ia-datos-ue-rgpd': {
  t: 'Usar IA sin sacar los datos de la UE: cómo se monta',
  d: 'El 48 % de las pymes españolas exige cumplimiento legal y el 27 % proveedor europeo. Cómo se diseña una arquitectura de IA que lo cumple de verdad.',
  h1: 'Usar IA sin sacar los datos de la UE',
  sub: 'Demanda declarada por casi la mitad del mercado y oferta que casi nadie comunica.',
  crumb: [['Blog', 'blog']],
  date: '12 de agosto de 2026',
  type: 'article',
  rel: ['confianza/seguridad-y-datos', 'comparativas/n8n-vs-make', 'confianza/ai-act'],
  html: `
<p class="lead">Según la encuesta de IONOS a unos 514 decisores de pyme española, el 48 % exige soluciones que cumplan los requisitos legales y el 27 % considera imprescindible que el proveedor sea europeo. Es demanda declarada por casi la mitad del mercado. Y sin embargo, de las quince agencias de automatización españolas que revisamos, solo dos o tres lo comunican en su web.</p>

<h2>Las tres capas donde se decide</h2>
<h3>1. Dónde se ejecuta el flujo</h3>
<p>Una plataforma en la nube ejecuta donde ella decide. Un n8n autoalojado en un servidor europeo ejecuta donde tú decides. La diferencia es un párrafo en el contrato de encargado de tratamiento frente a un anexo de transferencias internacionales.</p>

<h3>2. Dónde se procesa el texto</h3>
<p>Es la capa que más se olvida. Un flujo perfectamente europeo que envía el contenido de una factura a un modelo alojado fuera ha sacado el dato igualmente. Las opciones son tres: modelo con garantías contractuales y despliegue europeo, modelo abierto desplegado en tu infraestructura, o no mandar ese dato al modelo — que muchas veces es la respuesta correcta, porque el modelo no necesita el nombre del cliente para clasificar el documento.</p>

<h3>3. Dónde se guarda el resultado</h3>
<p>Base de datos, índice vectorial, registros de ejecución. Los logs son el punto ciego clásico: un flujo cumplidor que escribe en un servicio de monitorización fuera de la UE con el contenido completo de cada ejecución.</p>

<h2>La técnica que más ayuda</h2>
<p>Minimizar antes de enviar. Sustituir identificadores por referencias internas antes de que el texto llegue al modelo, y reconstruirlos al volver. El modelo clasifica igual de bien sin saber que el cliente se llama Martínez, y de repente la conversación sobre transferencias internacionales se vuelve mucho más corta.</p>

<h2>Cómo documentarlo</h2>
<ul class="tick">
  <li>Registro de actividades de tratamiento actualizado con el flujo nuevo</li>
  <li>Contrato de encargado con cada proveedor, incluidos los de modelo</li>
  <li>Lista de subencargados y sus ubicaciones</li>
  <li>Evaluación de impacto si hay tratamiento a gran escala o decisiones automatizadas</li>
  <li>Declaración de IA conforme al <a href="#/confianza/ai-act">artículo 50</a> donde haya interacción con personas</li>
</ul>

<div class="callout"><b>Y un argumento comercial.</b> Si vendes a empresas europeas, este es el arbitraje más claro que tienes frente a cualquier proveedor americano: ellos no pueden competir en credibilidad aquí, hagan lo que hagan.</div>
`
}

});
