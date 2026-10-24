# Portafolio · Alberto Palacios

## Estructura

| Archivo | Para qué sirve |
|---|---|
| `index.html` | Estructura de la página principal (experiencia, formación, contacto). |
| `content.js` | **Contenido de los proyectos y habilidades.** Aquí se agregan fotos, videos y textos. |
| `app.js` | Lógica: páginas por proyecto, filtros, idioma, galería. No necesita cambios. |
| `styles.css` | Diseño. |
| `media/` | Fotos, videos y la imagen para vista previa en redes (`og.png`). |

## Publicar en GitHub Pages

1. Crea una cuenta en GitHub si aún no tienes una.
2. Crea un repositorio **público** llamado exactamente `USUARIO.github.io`, sustituyendo `USUARIO` por tu nombre de usuario.
3. En el repositorio, elige **Add file → Upload files** y arrastra **todo el contenido** de esta carpeta (no la carpeta en sí): `index.html`, `content.js`, `app.js`, `styles.css`, `favicon.svg`, `.nojekyll` y la carpeta `media`. Confirma con **Commit changes**.
   - El archivo `.nojekyll` está oculto en algunos sistemas; si no lo ves, no pasa nada.
4. Ve a **Settings → Pages**. En *Build and deployment*, selecciona **Deploy from a branch**, rama `main` y carpeta `/ (root)`. Guarda.
5. En uno o dos minutos el sitio estará en `https://USUARIO.github.io`.
6. En `index.html`, cambia `USUARIO` en la línea de `og:image` por tu usuario real, para que la vista previa funcione al compartir el enlace en LinkedIn o WhatsApp.

## Enlaces directos a cada proyecto

`https://USUARIO.github.io/#schneider`, `#fred-factory`, `#abb-packaging`, `#drone-landing`, `#inverted-pendulum`, `#semi-automated-vehicle`, `#tractor-cabin`, `#dc-power-supply`, `#vibrating-platform`, `#emotion-recognition`, `#efuse`.

## Agregar fotos y videos

Las instrucciones están al inicio de `content.js`. Se puede editar directamente en GitHub: abre el archivo, presiona el ícono del lápiz, haz el cambio y confirma con **Commit changes**. El sitio se actualiza solo en uno o dos minutos.

- Fotos: JPG, PNG o WEBP, de preferencia menores a 500 KB.
- Videos propios: MP4 menores a 50 MB (GitHub no acepta archivos de más de 100 MB). Para videos largos es mejor subirlos a YouTube y agregar el enlace.

## Dominio propio (opcional)

Si compras un dominio (por ejemplo `albertopalacios.com`), agrégalo en **Settings → Pages → Custom domain** y sigue las instrucciones de DNS que muestra GitHub.

## Ver el sitio en tu computadora

Abre `index.html` con doble clic. Los videos de YouTube pueden no cargar desde un archivo local; en GitHub Pages sí funcionan.
