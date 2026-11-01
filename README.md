# Calibra — calibraautomation.com

Web de producto de la plataforma Calibra (SaaS de automatización con IA), en inglés.

- Fuente: `producto/index.html` (HTML, CSS y JS en un solo archivo) y `producto/assets/` (fuentes alojadas aquí e imagen para redes).
- Marca: `marca/`.
- `node build-site.js` genera `dist/`: copia el producto, crea las redirecciones de las URLs antiguas de servicios
  (lista en `redirects.txt`) hacia https://studio.calibraautomation.com, el 404, el sitemap, robots y llms.txt.
- Cada push a `main` publica con GitHub Pages (`.github/workflows/deploy.yml`).

La web de servicios (Calibra Studio) está en el repo `innovare-genetics/calibra-studio`.
El formulario de contacto envía con Web3Forms a info@calibraautomation.com.
