# Publicar calibraautomation.com — paso a paso

Hosting: **GitHub Pages**, gratis y sin límite de tiempo.
Único coste: el dominio, unos **10-12 € al año**.

Tiempo total: 20 minutos, más la propagación del DNS.

---

## 1 · Comprar el dominio

Regístralo en cualquiera de estos (precios orientativos del primer año):

| Registrador | Aprox. | Nota |
|---|---|---|
| Cloudflare Registrar | ~10 €/año | Vende a precio de coste, sin renovación inflada. El más recomendable |
| Namecheap | ~12 €/año | Cómodo, con WHOIS privado incluido |
| Porkbun | ~11 €/año | Buen panel de DNS |
| Dondominio / Nominalia | ~15 €/año | Soporte en español, útil si prefieres factura española |

Activa la **privacidad de WHOIS** al comprarlo: si no, tu nombre, dirección y teléfono quedan públicos en el registro del dominio. Es gratis en casi todos.

---

## 2 · Crear el repositorio

En GitHub, con la cuenta **nuriadev-droid**:

1. Entra en <https://github.com/new>
2. Nombre: `calibra-web`
3. Visibilidad: **Public** — GitHub Pages solo es gratis con repositorio público
4. **No** marques «Add a README file»
5. Create repository

---

## 3 · Subir el proyecto

Descomprime `calibra-web.zip`, abre una terminal dentro de la carpeta y ejecuta:

```bash
git init -b main
git add .
git commit -m "Web de Calibra: 38 paginas, generador estatico y legales"
git remote add origin https://github.com/nuriadev-droid/calibra-web.git
git push -u origin main
```

La carpeta `dist/` está en el `.gitignore` a propósito: **no se sube**. La genera GitHub en cada push.

---

## 4 · Activar GitHub Pages

En el repositorio → **Settings** → **Pages**:

- **Source**: `GitHub Actions` (no «Deploy from a branch»)

Con eso, el flujo de trabajo `.github/workflows/deploy.yml` que ya viene en el proyecto se encarga del resto: en cada push a `main` ejecuta `build-static.js`, genera las 38 páginas y las publica.

Mira la pestaña **Actions** para ver el primer despliegue. Tarda un minuto largo.

---

## 5 · Apuntar el dominio

En el panel DNS de tu registrador, crea estos registros:

**Para calibraautomation.com (dominio raíz) — cuatro registros A:**

```
Tipo  Nombre  Valor
A     @       185.199.108.153
A     @       185.199.109.153
A     @       185.199.110.153
A     @       185.199.111.153
```

**Y los cuatro AAAA, para IPv6:**

```
AAAA  @       2606:50c0:8000::153
AAAA  @       2606:50c0:8001::153
AAAA  @       2606:50c0:8002::153
AAAA  @       2606:50c0:8003::153
```

**Para www:**

```
CNAME www     nuriadev-droid.github.io
```

Ojo: el CNAME apunta a `nuriadev-droid.github.io`, **sin** el nombre del repositorio.

Después, en **Settings → Pages → Custom domain**, escribe `calibraautomation.com` y guarda. Cuando GitHub verifique el DNS (de minutos a unas horas), marca **Enforce HTTPS**.

El archivo `CNAME` lo genera `build-static.js` automáticamente, así que no lo borres del panel ni lo crees a mano.

---

## 6 · Las dos imágenes binarias

Si al clonar faltan, sube a mano estos dos archivos a la carpeta `marca/` del repositorio (están en el ZIP):

- `og-image-1200x630.png` — la previsualización cuando compartes un enlace
- `calibra-isotipo-gradient-512.png` — el icono para iOS

Se pueden arrastrar directamente en la web de GitHub: **Add file → Upload files**.

---

## 7 · Dar de alta la web en los buscadores

Cuando el dominio ya resuelva:

1. **Google Search Console** — <https://search.google.com/search-console>
   Añade la propiedad de dominio, verifica con un registro TXT en el DNS y envía `https://calibraautomation.com/sitemap.xml`
2. **Bing Webmaster Tools** — <https://www.bing.com/webmasters>
   Importante más de lo que parece: **ChatGPT usa el índice de Bing**, así que estar aquí es lo que te hace citable
3. Comprueba que `https://calibraautomation.com/robots.txt` responde y permite GPTBot, ClaudeBot y PerplexityBot
4. Crea el perfil de empresa en **Google Business Profile** si vas a dar dirección

---

## 8 · Comprobaciones antes de dar la web por buena

- [ ] Abre una página cualquiera **con JavaScript desactivado**: el texto tiene que verse igual. Si no se ve, el generador no corrió
- [ ] `https://calibraautomation.com/sitemap.xml` devuelve las 38 URLs con el dominio correcto
- [ ] El banner de cookies aparece, y **rechazar** funciona igual de fácil que aceptar
- [ ] Ninguna página tiene todavía corchetes `[...]` en el aviso legal
- [ ] Comparte un enlace por WhatsApp y comprueba que sale la previsualización
- [ ] Pásala por <https://pagespeed.web.dev> — debería salir en verde casi todo

---

## Cambiar algo más adelante

Todo el contenido vive en cuatro archivos:

| Archivo | Qué contiene |
|---|---|
| `pages-core.js` | Servicios, sectores, comparativas, método, casos, confianza, Kit Digital |
| `pages-blog.js` | Los seis artículos |
| `pages-id.js` | La sección de I+D |
| `pages-legal.js` | Aviso legal, privacidad y cookies |
| `pages-extra.js` | Precios, FAQ y la portada |

Editas, `git commit`, `git push`, y en un minuto está publicado. No hay panel de administración ni base de datos: es texto y se versiona.

Para probar en local antes de subir:

```bash
node build-static.js --dominio http://localhost:8000
cd dist && python3 -m http.server 8000
```

---

## Si prefieres cambiar de hosting

El sitio es estático puro, así que sirve en cualquier sitio. En **Cloudflare Pages** (también gratis, ancho de banda ilimitado y más rápido en Europa) basta con conectar este mismo repositorio y configurar:

- Comando de construcción: `node build-static.js --dominio https://calibraautomation.com`
- Carpeta de salida: `dist`

No hace falta tocar nada del código.
