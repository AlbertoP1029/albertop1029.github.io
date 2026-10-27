# Portafolio · Alberto Palacios

Sitio estático (HTML, CSS y JavaScript, sin dependencias ni compilación) para GitHub Pages.

## Páginas

| Archivo | Página |
|---|---|
| `index.html` | Inicio: presentación, foto, Acerca de mí, Lo que hago y proyectos destacados. |
| `portfolio.html` | Portafolio: todos los proyectos y una página de detalle por proyecto (`portfolio.html#id`). |
| `resume.html` | Currículum: formación, experiencia, distinciones, habilidades e intereses. |
| `leadership.html` | Liderazgo: equipos que has liderado, Quantum, experiencia internacional y deporte. |
| `contact.html` | Contacto: formulario y datos directos. |

Archivos comunes: `styles.css` (diseño), `content.js` (proyectos y habilidades), `app.js` (lógica, no necesita cambios), `media/` (imágenes).

## Actualizar el sitio que ya tienes publicado

1. En tu repositorio `USUARIO.github.io`, sube **todo** el contenido de esta carpeta con **Add file → Upload files** (en Chrome o Edge, arrastrando también la carpeta `media`). Los archivos con el mismo nombre se reemplazan.
2. Confirma con **Commit changes** y espera uno o dos minutos.
3. Si en `index.html` y las demás páginas sigue apareciendo `USUARIO` en la línea `og:image`, sustitúyelo por tu usuario.

## Fotos genéricas que debes reemplazar

Sube tu foto **con el mismo nombre de archivo** y se reemplaza sola, sin tocar el código:

| Archivo | Dónde aparece | Tamaño sugerido |
|---|---|---|
| `media/foto-portada.jpg` | Inicio, portada a pantalla completa detrás de tu nombre (se oscurece automáticamente) | horizontal, 2400 × 1350 px |
| `media/foto-perfil.jpg` | Inicio, junto a "Acerca de mí" | vertical 4:5, p. ej. 800 × 1000 px |
| `media/foto-liderazgo.jpg` | Página de Liderazgo, portada | horizontal, 2400 × 1350 px |

La portada del Portafolio es `media/portada-portafolio.jpg` (lámina técnica de un brazo robótico, 3000 × 900 px). Si la reemplazas, usa una imagen muy horizontal (proporción cercana a 3:1).
En `index.html` hay un comentario para agregar un pie de foto en cursiva bajo tu foto de perfil, si quieres indicar dónde fue tomada.
Si tu foto es PNG o tiene otro nombre, cambia la ruta correspondiente en la página.

## Botón "Descargar CV (PDF)"

El botón del Currículum aparece solo cuando existe el archivo `media/cv.pdf`. Sube tu CV con ese nombre y el botón se muestra automáticamente.

## Proyectos, fotos y videos

Todo está en `content.js`; las instrucciones con ejemplos están al inicio del archivo. Se puede editar directamente en GitHub con el ícono del lápiz.

- Fotos: JPG, PNG o WEBP, de preferencia menores a 500 KB.
- Videos propios: MP4 menores a 50 MB. Para videos largos, súbelos a YouTube y agrega el enlace; se reproducen dentro de la página.

## Formulario de contacto

GitHub Pages no tiene servidor, así que el formulario abre la aplicación de correo del visitante con el mensaje ya escrito y dirigido a tu correo. Si en el futuro quieres que los mensajes lleguen sin que el visitante abra su correo, se puede conectar un servicio gratuito como Formspree.

## Enlaces directos a cada proyecto

`portfolio.html#schneider`, `#diram-interface-board`, `#fred-factory`, `#abb-packaging`, `#drone-landing`, `#inverted-pendulum`, `#semi-automated-vehicle`, `#tractor-cabin`, `#dc-power-supply`, `#vibrating-platform`, `#emotion-recognition`, `#efuse`. Los enlaces anteriores del tipo `index.html#schneider` redirigen solos al portafolio.

## Dominio propio (opcional)

Agrégalo en **Settings → Pages → Custom domain** y sigue las instrucciones de DNS que muestra GitHub.

## Si un cambio no se ve después de subirlo

El navegador guarda una copia de `content.js`, `app.js` y `styles.css`. Las páginas cargan esos archivos con un número de versión (`?v=...`). Cuando cambies cualquiera de ellos, cambia ese número en las cinco páginas HTML (por ejemplo, de `v=20261024b` a `v=20261101`) para que los visitantes reciban la versión nueva de inmediato. Para revisar tú mismo, recarga con Ctrl + Shift + R (Cmd + Shift + R en Mac).
