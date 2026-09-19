/* Calibra — sección de I+D. */
window.PAGES = Object.assign(window.PAGES || {}, {

'i-d': {
  t: 'I+D: investigación en agentes de IA fiables para procesos de empresa',
  d: 'Líneas de investigación propias en verificación de agentes, extracción documental con datos ruidosos, minería de procesos y trazabilidad de decisiones automatizadas.',
  h1: 'I+D',
  sub: 'Lo que investigamos cuando el estado del arte no nos da una respuesta.',
  crumb: [],
  rel: ['i-d/que-es-id', 'i-d/colabora', 'metodo'],
  html: `
<p class="lead">Hay una frontera clara entre implantar tecnología existente e investigar. Implantar un agente con una API de un modelo comercial es ingeniería: funciona, es previsible y lo hacemos todos los días. Medir con garantías cuándo ese agente se equivoca, y acotar esa tasa, todavía no tiene respuesta cerrada en la literatura. Eso es lo que investigamos.</p>

<h2>Por qué una empresa de nuestro tamaño investiga</h2>
<p>Por una razón práctica, no de prestigio: <b>los proyectos de automatización con IA no fracasan por falta de modelos, fracasan en producción.</b> Gartner estima que más del 40 % de los proyectos de IA agéntica se cancelarán antes de finales de 2027 por costes crecientes y valor poco claro. El hueco entre una demo que funciona y un sistema que aguanta un año es un problema técnico sin resolver, y es exactamente el problema por el que nos paga un cliente.</p>

<h2>Líneas de investigación</h2>

<h3>01 · Verificación y acotación del error en agentes de negocio</h3>
<p>Un agente que ejecuta tareas sobre sistemas reales acierta un porcentaje de las veces. Ese porcentaje casi nunca se mide con rigor, y cuando se mide se hace sobre conjuntos de prueba preparados que no se parecen a la producción. Investigamos métodos para estimar la tasa de error real de un agente sobre un proceso concreto, con intervalos de confianza, y para fijar umbrales de derivación a persona que optimicen el coste total —el de revisar frente al de equivocarse— en lugar de un número elegido a ojo.</p>

<h3>02 · Extracción documental con datos escasos, sucios o contradictorios</h3>
<p>Los métodos publicados degradan cuando el documento viene torcido, incompleto, con formatos heterogéneos entre emisores o con contradicciones internas. En una asesoría española eso no es el caso raro: es el caso normal. Trabajamos en técnicas de extracción robustas a esa realidad y en señales de confianza calibradas —que la puntuación que devuelve el sistema signifique de verdad lo que dice significar.</p>

<h3>03 · Minería de procesos y estructura causal</h3>
<p>Las herramientas de <i>process mining</i> reconstruyen la secuencia de un proceso a partir de sus registros. Reconstruir su <b>estructura causal</b> —qué provoca qué, y no solo qué ocurre después de qué— es un problema distinto y abierto. Es también el que decide si automatizar un paso mejora el proceso o simplemente mueve el cuello de botella.</p>

<h3>04 · Trazabilidad y auditabilidad de decisiones automatizadas</h3>
<p>El artículo 50 del AI Act obliga desde el 2 de agosto de 2026 a declarar los sistemas que interactúan con personas, y el régimen de alto riesgo llega en diciembre de 2027. Investigamos cómo registrar la decisión de un sistema con modelo de lenguaje de forma que sea reconstruible a posteriori sin almacenar datos personales innecesarios: qué se consultó, qué se decidió y con qué grado de certeza. <a href="#/confianza/ai-act">Más sobre el AI Act</a>.</p>

<h3>05 · Eficiencia computacional</h3>
<p>Conseguir un rendimiento equivalente con un orden de magnitud menos de cómputo cambia por completo la economía de un flujo de alto volumen. Es también lo que hace viable ejecutar en infraestructura europea o autoalojada en lugar de depender de una API externa. <a href="#/blog/ia-datos-ue-rgpd">Por qué eso importa</a>.</p>

<h2>Cómo trabajamos</h2>
<ul class="tick">
<li><b>Hipótesis antes que herramienta.</b> Cada línea arranca con una afirmación falsable y una métrica con la que se mide si es cierta.</li>
<li><b>Línea base explícita.</b> Antes de proponer una mejora, medimos el estado del arte sobre nuestros propios datos. Sin línea base no hay avance, hay opinión.</li>
<li><b>Registro sistemático.</b> Hipótesis, experimentos, resultados y —sobre todo— los experimentos que no funcionaron. Es requisito del <a href="#/i-d/que-es-id">Manual de Frascati</a> y es, de paso, la única forma de no repetir errores.</li>
<li><b>Separación estricta entre I+D y entrega.</b> Un cliente nunca paga por investigación cuyo resultado es incierto salvo que lo haya acordado expresamente. Lo que se le entrega está probado.</li>
</ul>
`
},

'i-d/que-es-id': {
  t: 'Qué se considera I+D en inteligencia artificial (y qué no)',
  d: 'Los cinco criterios del Manual de Frascati aplicados a proyectos de IA, la diferencia con la innovación tecnológica y por qué importa para las deducciones fiscales.',
  h1: 'Qué es I+D y qué no lo es',
  sub: 'La distinción que decide si un proyecto de IA da derecho a deducción o no.',
  crumb: [['I+D', 'i-d']],
  rel: ['i-d', 'i-d/colabora', 'kit-digital'],
  date: '19 de septiembre de 2026',
  type: 'article',
  html: `
<p class="lead">Una actividad es I+D solo si cumple los cinco criterios del Manual de Frascati (OCDE, 2015): ser novedosa, creativa, incierta, sistemática y transferible. En proyectos de inteligencia artificial el criterio que casi nunca se cumple es el tercero — <b>si no hay riesgo real de que técnicamente no funcione, no es I+D</b>, por sofisticada que sea la implantación.</p>

<h2>Los cinco criterios</h2>
<table class="tbl">
<thead><tr><th>Criterio</th><th>Qué exige</th><th>Error habitual</th></tr></thead>
<tbody>
<tr><td><b>Novedosa</b></td><td>Novedad apreciable a nivel sectorial o global</td><td>Confundir "nuevo para nosotros" con "nuevo"</td></tr>
<tr><td><b>Creativa</b></td><td>Hipótesis y enfoques originales</td><td>Aplicar procedimientos ya establecidos</td></tr>
<tr><td><b>Incierta</b></td><td>Incertidumbre técnica genuina sobre el resultado</td><td>El resultado está predeterminado y solo falta ejecutarlo</td></tr>
<tr><td><b>Sistemática</b></td><td>Plan, objetivos, recursos y calendario documentados</td><td>Trabajo real pero sin registro que lo acredite</td></tr>
<tr><td><b>Transferible</b></td><td>Resultados documentados y reproducibles por terceros</td><td>Todo el conocimiento en la cabeza de una persona</td></tr>
</tbody></table>

<h2>Aplicado a la IA: lo que no es I+D</h2>
<ul class="tick">
<li>Implantar RPA, n8n, Make o Zapier, por complejo que sea el despliegue</li>
<li>Integrar un modelo de lenguaje vía API en un flujo de trabajo</li>
<li><i>Fine-tuning</i> con técnicas estándar y documentadas</li>
<li>Configurar, parametrizar y desplegar herramientas existentes</li>
<li>Desarrollo de software a medida sin reto científico-técnico</li>
</ul>
<p>Esto es, con diferencia, el motivo de rechazo más frecuente en proyectos de IA: la disponibilidad de modelos preentrenados y APIs hace que casi todo sea integrable <b>sin riesgo científico</b>. Que sea difícil no lo convierte en investigación.</p>

<h2>Lo que sí podría serlo</h2>
<p>La prueba está en poder escribir esta frase de forma honesta:</p>
<div class="callout">«El estado del arte —<i>estas referencias concretas</i>— resuelve X hasta el límite Y. Nuestra hipótesis es que Z permite superar Y. <b>No sabemos si funcionará</b>, y estos son los experimentos con los que lo mediremos y estos los umbrales cuantitativos de éxito o fracaso.»</div>
<p>Si no puedes escribirla con nombres, cifras y citas, el proyecto es innovación tecnológica, no I+D. Y eso no es un fracaso: es otro instrumento, con otro porcentaje de deducción y otra línea de financiación.</p>

<h2>I+D frente a innovación tecnológica</h2>
<table class="tbl">
<thead><tr><th></th><th>I+D (art. 35.1 LIS)</th><th>Innovación tecnológica (art. 35.2 LIS)</th></tr></thead>
<tbody>
<tr><td>Novedad exigida</td><td>Objetiva: nueva para el sector</td><td><b>Subjetiva</b>: basta que sea nueva para la empresa</td></tr>
<tr><td>Incertidumbre</td><td>Científico-técnica genuina</td><td>No se exige</td></tr>
<tr><td>Deducción</td><td>25 % general, 42 % sobre el exceso respecto a la media de los dos años anteriores, +17 % por personal investigador en exclusiva</td><td>12 %</td></tr>
<tr><td>Instrumento típico</td><td>Proyectos de I+D del CDTI, Cervera</td><td>Línea Directa de Innovación</td></tr>
</tbody></table>

<h2>Cómo se acredita</h2>
<ol class="steps-n">
<li><b>Certificación</b> por una entidad acreditada por ENAC conforme a las normas UNE 166001 (proyectos) y UNE 166002 (sistemas de gestión de la I+D+i).</li>
<li><b>Informe técnico</b> emitido por esa entidad.</li>
<li><b>Informe Motivado Vinculante</b> del Ministerio de Ciencia, Innovación y Universidades. Vincula a la Agencia Tributaria en cuanto a la <i>calificación</i> científico-tecnológica de la actividad, aunque la cuantificación de la base sigue siendo revisable.</li>
</ol>
<p class="note">Esto es una síntesis de fuentes públicas —Manual de Frascati de la OCDE, artículo 35 de la Ley 27/2014 y documentación del CDTI— y no constituye asesoramiento fiscal. Antes de aplicar una deducción, consulta con un asesor o plantea consulta vinculante a la Dirección General de Tributos.</p>
`
},

'i-d/colabora': {
  t: 'Colaboración con universidades y centros de investigación',
  d: 'Buscamos colaboración con grupos de investigación en IA aplicada, procesos y verificación de sistemas. Qué aportamos y qué buscamos.',
  h1: 'Colabora con nosotros',
  sub: 'Para grupos de investigación, centros tecnológicos y doctorandos.',
  crumb: [['I+D', 'i-d']],
  rel: ['i-d', 'i-d/que-es-id', 'contacto'],
  html: `
<p class="lead">Nos interesa colaborar con grupos universitarios y centros tecnológicos que trabajen en IA aplicada a procesos, verificación de sistemas basados en modelos de lenguaje, minería de procesos o extracción de información en dominios ruidosos.</p>

<h2>Qué aportamos</h2>
<ul class="tick">
<li><b>Casos y datos reales de empresa</b>, que es precisamente lo que suele faltar en investigación académica de este campo: documentos reales, procesos reales y errores reales, debidamente anonimizados y con el consentimiento del cliente.</li>
<li><b>Un banco de pruebas en producción</b>, no un conjunto sintético: sistemas que funcionan todos los días con volumen y consecuencias.</li>
<li><b>Capacidad de ingeniería</b> para convertir un método publicado en algo que aguante fuera del laboratorio.</li>
<li><b>Perfil híbrido.</b> Venimos de la biotecnología y la genética, donde un resultado mal validado tiene consecuencias regulatorias. Ese rigor es el que aplicamos al software.</li>
</ul>

<h2>Qué buscamos</h2>
<ul class="tick">
<li>Grupos de investigación interesados en validar métodos sobre datos industriales</li>
<li>Codirección de trabajos de fin de máster y tesis doctorales industriales</li>
<li>Centros tecnológicos acreditados para proyectos de transferencia</li>
<li>Coautoría en publicaciones y en conjuntos de datos abiertos</li>
</ul>

<h2>Cómo funcionaría</h2>
<ol class="steps-n">
<li><b>Conversación inicial</b> sobre líneas de interés compartidas, sin compromiso.</li>
<li><b>Definición de la hipótesis</b> y de las métricas con las que se va a medir. Si no se puede medir, no arrancamos.</li>
<li><b>Acuerdo marco</b> que fije desde el principio la propiedad de los resultados, el régimen de publicación y el tratamiento de los datos.</li>
<li><b>Ejecución</b> por fases con revisiones intermedias.</li>
</ol>

<div class="callout"><b>Sobre la propiedad intelectual.</b> No pedimos exclusividad sobre resultados publicables. Lo que nos interesa es la aplicación al dominio concreto y el conocimiento de cómo implantarlo; el método puede y debe publicarse. Un acuerdo que impide publicar no sirve a un grupo universitario, y lo sabemos.</div>

<p>Escríbenos a <a href="mailto:info@calibraautomation.com">info@calibraautomation.com</a> indicando tu grupo y la línea que te interesa.</p>
`
}

});
