# Design

## Context

El motivo del cambio está en `proposal.md` (sección Why). Este documento recoge solo el estado actual que condiciona el enfoque:

- **Base técnica**: Astro 2.1 con `@astrojs/image` 0.16 y `@astrojs/tailwind` (Tailwind 3, `darkMode: 'class'`). Ese paquete está deprecado y su caché arma rutas con `path.join` sobre una URL, por eso `astro build` falla en Windows. Netlify compila en Linux y hoy no le afecta.
- **Estructura**: una sola página (`src/pages/index.astro`) que compone los componentes `Hero`, `WorkExperience` y `Projects` dentro de `Layout` → `BaseLayout`. Todo el contenido está escrito a mano dentro de los componentes. La única excepción son los proyectos, que se definen en un arreglo dentro de `Projects.astro`.
- **Tema**: `BasicScripts.astro` aplica la clase `dark` al final del `<body>`, por eso hay un parpadeo. Los colores están sueltos como valores arbitrarios (`#19323c`, `#244856`, `#EBF3FF`).
- **Restos sin uso**: la colección `blog`, `rss.xml.js`, MDX, `global.css`, unos 15 íconos sin importar, tres versiones de la foto de perfil y `rough-notation` cargado desde unpkg.
- **Despliegue**: Netlify, a partir de la rama `master`. El PR #1 (`feat/proyectos-recientes`) agrega 4 proyectos con capturas en `src/assets/images/proyectos/`; esas capturas se reutilizan.

## Goals / Non-Goals

**Goals:**
- Que un solo componente de página sirva para ambos idiomas, cambiando solo los textos y los datos.
- Que la identidad visual quede definida en tokens (colores, tipografía, radios y espaciado) que ambos temas comparten. Ningún componente debe usar colores arbitrarios.
- Que la página funcione completa sin JavaScript. El JS solo agrega mejoras: cambio de tema, menú, copiar el correo, sección activa y animaciones.
- Que `astro build` funcione en Windows y en Linux.

**Non-Goals:**
- Blog, páginas de detalle por proyecto o un CMS. La estructura de colecciones lo permite más adelante, pero no entra en este cambio.
- Formulario de contacto con backend (Netlify Forms o similar).
- Elegir e instalar analytics.
- Generar imágenes Open Graph distintas para cada página.

## Decisions

### D1. Reescribir sobre un proyecto Astro 7 nuevo en lugar de actualizar por pasos
Se reemplaza `src/` y la configuración partiendo de cero con Astro 7 (la versión mayor vigente, publicada en junio de 2026), `@tailwindcss/vite` y `@astrojs/sitemap`. De lo existente se rescatan solo los recursos: capturas, logos, foto y logo SG.
- Se eligió Astro 7 en lugar de 5.18, que era lo planeado al principio, para que el rediseño no empiece dos versiones mayores atrás. Lo que esto implica para el código: `z` se importa de `astro/zod` (Zod 4, con `{ error }` en lugar de `{ message }`); `compressHTML` es `'jsx'` por defecto, así que los espacios entre elementos en línea se escriben con `{" "}`; y el compilador en Rust no corrige anidados inválidos.
- *Alternativa*: subir de versión paso a paso (2 → 3 → 4 → 5) y migrar `@astrojs/image` a `astro:assets`. Se descarta porque casi todos los componentes se rediseñan de todas formas; actualizar código que luego se borra es trabajo perdido.

### D2. Internacionalización con el enrutado nativo de Astro y un diccionario de textos
`astro.config` define `i18n: { locales: ['es', 'en'], defaultLocale: 'es', routing: { prefixDefaultLocale: false } }`. Hay dos páginas finas, `src/pages/index.astro` y `src/pages/en/index.astro`, que solo pasan el idioma a un componente `HomePage`. Los textos de interfaz viven en `src/i18n/ui.ts`, un objeto por idioma con las mismas claves y tipado para que falte una clave y falle la compilación. Las funciones `t(lang)` y `getLangFromUrl` usan los helpers de `astro:i18n`.
- Los `id` de las secciones son los mismos en ambos idiomas (`proyectos`, `experiencia`, `sobre-mi`, `formacion`, `contacto`). Así, el selector de idioma conserva el `#hash` sin tener que traducirlo.
- *Alternativa*: una librería como `astro-i18next` o Paraglide. Se descarta: para dos idiomas y una página, el soporte nativo basta y no agrega dependencias.

### D3. Colecciones con los dos idiomas dentro de la misma entrada
`src/content.config.ts` define las colecciones `projects`, `experience` y `education` con el loader `glob` (un archivo YAML por entrada en `src/content/<coleccion>/`). Los campos que se traducen usan un tipo `localized = z.object({ es: z.string(), en: z.string() })`. Las imágenes usan el helper `image()` del esquema, así Astro las optimiza. Las reglas que cruzan campos (al menos una URL por proyecto; fecha de fin no anterior a la de inicio) se validan con `.refine()`, con mensajes que nombran el campo.
- *Alternativa*: una entrada por idioma (`projects/es/…`, `projects/en/…`). Se descarta: duplica datos que no se traducen (URLs, tecnologías, imagen y orden) y permite que una traducción quede desfasada sin que nadie se entere. Con los dos idiomas en la misma entrada, olvidar el inglés hace fallar el build.
- Las fechas de experiencia van como `YYYY-MM`. La duración y el formato del periodo se calculan con `Intl.DateTimeFormat` según el idioma.

### D4. Identidad visual: oscura por defecto, sobria, con un solo acento azul
Se conserva el azul del nombre actual (`#0061ff` → `#60efff`) como único color de acento, por continuidad de marca. El resto es neutro: un gris pizarra para fondos y texto y una superficie elevada para las tarjetas. Los tokens se definen en `src/styles/global.css` con `@theme` de Tailwind 4 y variables CSS que el tema claro sobrescribe bajo `:root:not(.dark)`. Los componentes usan solo clases semánticas (`bg-surface`, `text-muted`, `text-accent`, `border-subtle`).
- **Tipografía**: una familia variable autoalojada con `@fontsource-variable/inter` para la interfaz y `@fontsource-variable/jetbrains-mono` para etiquetas de tecnología y fechas. Autoalojarla evita la petición a Google Fonts y su bloqueo de renderizado.
- **Diseño de página**: ancho máximo de 72rem, texto alineado a la izquierda y una retícula de 12 columnas en escritorio. El hero va a dos columnas en escritorio (texto + foto) y apilado en móvil, con la foto arriba y más pequeña.
- **Contraste**: cada par texto/fondo de los tokens se verifica en ambos temas contra 4.5:1 antes de usarlo (spec `site-shell`).
- *Alternativas*: un estilo con mucho color (degradados en cada título, como hoy) o una plantilla comercial. Se descartan: lo primero es lo que hoy se ve desordenado, y lo segundo repite el problema de partir de una plantilla ajena.

### D5. Tema sin parpadeo con un script en línea en el `<head>`
Un `<script is:inline>` en el `<head>`, antes de los estilos, lee `localStorage.theme` o `prefers-color-scheme` y pone la clase `dark` y `color-scheme` en `<html>`. El botón de tema solo cambia la clase y la guarda. Tailwind 4 declara la variante con `@custom-variant dark (&:where(.dark, .dark *))`.
- *Alternativa*: usar solo `prefers-color-scheme`, sin botón. Se descarta: el sitio actual tiene botón de tema y quitarlo sería perder una función.

### D6. Resaltado del hero con CSS en lugar de `rough-notation`
La frase clave del hero se marca con un subrayado hecho por CSS (`background-image` con degradado bajo el texto y `box-decoration-break: clone`). Al formar parte del propio texto, sigue a la frase al cambiar el tamaño de la ventana y en los saltos de línea. Se elimina la dependencia.
- *Alternativa*: mantener `rough-notation` y recalcular en `resize`. Se descarta: es un SVG posicionado en absoluto que se desalinea cuando cambia el diseño (el fallo actual), y además agrega JS.

### D7. JavaScript mínimo, en módulos pequeños y con mejora progresiva
Hay cuatro comportamientos con JS, cada uno en su propio `<script>` (Astro los empaqueta como módulos):
1. **Menú móvil**: `aria-expanded`, cierre con Escape y al elegir un enlace, y el foco vuelve al botón.
2. **Tema**: el botón descrito en D5.
3. **Sección activa**: un `IntersectionObserver` sobre las secciones que pone `aria-current="true"` en el enlace correspondiente.
4. **Copiar correo**: `navigator.clipboard` y un aviso en una región `aria-live="polite"`.

Las animaciones de entrada son CSS. Solo se activan si el JS agregó la clase `js` a `<html>` y si `prefers-reduced-motion` no es `reduce`. Sin JS, todo se ve sin animación.
- Para que el header no tape el título de cada sección se usa `scroll-margin-top`, del alto del header, en cada sección.

### D8. Imágenes con `astro:assets`
La foto, las capturas y los logos se muestran con `<Picture>` en formatos AVIF y WebP, con `widths` y `sizes` según su tamaño real. Astro declara el ancho y el alto automáticamente. La foto del hero lleva `loading="eager"` y `fetchpriority="high"`; el resto es lazy. Las tres fotos de perfil se reducen a una sola fuente de buena resolución.

### D9. Metadatos en un componente `Seo` y una imagen Open Graph estática
El componente `Seo.astro` recibe `title`, `description` y `lang`, y genera la canónica (`new URL(Astro.url.pathname, Astro.site)`), los `hreflang` (es, en y x-default), Open Graph y Twitter. `astro.config` define `site: 'https://santigarh.netlify.app'`. La imagen social es un único `public/og.png` de 1200×630, diseñado una vez con la nueva identidad. `robots.txt` va en `public/`. El sitemap lo genera `@astrojs/sitemap` con `i18n` configurado.
- *Alternativa*: generar la imagen Open Graph en el build con Satori. Se descarta por ahora: con dos páginas casi iguales no compensa la complejidad.

### D10. Contacto con `mailto:` y botón de copiar, sin formulario
Ver la spec `portfolio-sections` (Contacto directo). Un formulario necesitaría backend, protección contra spam y una notificación. Para reclutadores, el correo visible y LinkedIn son suficientes y más directos.

### D11. CV como PDF estático
Los archivos `public/cv/santiago-cv-es.pdf` y, si existe, `public/cv/santiago-cv-en.pdf` se enlazan con el atributo `download`. El texto del botón en inglés cambia según exista o no el PDF en inglés (spec `portfolio-sections`). Esa existencia se resuelve en el build revisando el archivo en `public/`.

### D12. Node fijado para Netlify
Astro 7 exige Node 22.23.4 o superior. Se agrega `.node-version` con `22.23.4`, que leen tanto `fnm` en local como Netlify, y `netlify.toml` con `command = "npm run build"`, `publish = "dist"` y `NODE_VERSION = "22.23.4"`. Así el build no depende de la versión de Node configurada en el panel de Netlify ni de la versión del sistema.

## Risks / Trade-offs

- **[El contenido nuevo depende del autor]** Los textos del hero, "Sobre mí", los logros de cada puesto, las traducciones y el CV no se pueden inferir del código. → Las tareas de contenido van separadas y se empieza con borradores basados en lo actual, marcados para revisión. El sitio no se publica hasta que el autor apruebe los textos.
- **[Reescritura grande en un solo cambio]** Si algo falla, toda la página se ve afectada. → Se trabaja en una rama con *deploy previews* de Netlify y se compara contra el sitio actual antes de fusionar. Para volver atrás basta con publicar de nuevo el deploy anterior en Netlify o revertir el merge.
- **[Tailwind 4 requiere navegadores modernos]** Necesita Safari 16.4+, Chrome 111+ y Firefox 128+. → Es aceptable para el público objetivo (reclutadores con navegadores actuales). No se agregan polyfills.
- **[Se pierde el aspecto actual]** Quien conoce el sitio verá algo distinto. → Se conserva el azul de marca y el logo SG como elementos de continuidad.
- **[Sin analytics]** No se sabrá cuánta gente visita el sitio hasta decidir una herramienta. → Es un riesgo aceptado: hoy tampoco se mide nada, porque Universal Analytics ya no funciona.
- **[Rebase con el PR #1]** Si este cambio arranca antes de fusionar `feat/proyectos-recientes`, habrá conflictos en `Projects.astro`. → Fusionar el PR #1 primero y crear la rama del rediseño desde `master`. Las capturas de ese PR pasan a las entradas de la colección `projects`.

## Migration Plan

1. Fusionar el PR #1 en `master`. Crear la rama `feat/rediseno-portafolio` desde `master`.
2. Implementar las tareas de `tasks.md` y revisar cada avance en el *deploy preview* de Netlify del PR.
3. Antes de fusionar: Lighthouse en móvil (cada categoría 90 o más), revisión del contraste en ambos temas, inspector de publicaciones de LinkedIn con la URL del preview, y `astro build` en Windows.
4. Fusionar en `master`. Netlify publica el sitio.
5. Si hace falta volver atrás: en Netlify, *Deploys* → publicar el deploy anterior, y después revertir el merge en `master`.

## Open Questions

- **Tonos exactos de la paleta**: la dirección está decidida en D4, pero los valores finales se ajustan al verlos aplicados. No cambia ni las specs ni las tareas.
- **Nombre completo en el `<h1>`**: no se sabe si el autor quiere "Santiago" o su nombre con apellido. Es un texto de contenido.
- **CV en inglés**: si el autor lo tiene. El comportamiento sin él ya está especificado.
- **Analytics a futuro**: Netlify Analytics, Plausible o Umami. Queda fuera de este cambio.
