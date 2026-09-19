# Calibra — web

Sitio estático de [calibraautomation.com](https://calibraautomation.com). 38 páginas
generadas desde contenido en JavaScript, sin base de datos ni panel de administración.

**Para publicarlo: lee [PUBLICAR.md](PUBLICAR.md).**

## Cómo funciona

`index.html` es la aplicación: estilos, navegación, router y widgets (calculadora de
ROI, formulario, consentimiento de cookies). El contenido vive aparte:

| Archivo | Contenido |
|---|---|
| `pages-core.js` | Servicios, sectores, comparativas, método, casos, confianza, Kit Digital |
| `pages-blog.js` | Artículos del blog |
| `pages-id.js` | Sección de I+D |
| `pages-legal.js` | Aviso legal, privacidad, cookies |
| `pages-extra.js` | Precios, FAQ y portada, más los fragmentos reutilizables |
| `consent.js` | Gestor de cookies conforme a la guía de la AEPD |
| `build-static.js` | Generador: convierte todo en HTML reales, uno por ruta |
| `marca/` | Logotipo e isotipo en SVG y PNG |

## Construir

```bash
node build-static.js --dominio https://calibraautomation.com
```

Genera `dist/` con una carpeta por ruta, cada una con su `index.html` completo,
más `sitemap.xml`, `robots.txt`, `feed.xml`, `llms.txt`, `CNAME` y `.nojekyll`.

Ese paso es lo que hace que la web indexe: los rastreadores de IA renderizan
JavaScript mal o directamente no lo renderizan.

## Desplegar

Automático. `.github/workflows/deploy.yml` construye y publica en GitHub Pages
en cada push a `main`.

## Pendiente antes de dar la web por publicada

- Añadir NIF y domicilio de notificaciones en el aviso legal (artículo 10 de la LSSI)
- Detallar los encargados del tratamiento en la política de privacidad cuando se conozcan
- Conectar el formulario a un backend real (Resend) y a un calendario
- Si se activa analítica: declararla en la política de cookies y cargarla dentro de
  `loadAnalytics()` en `consent.js`, nunca en el HTML
