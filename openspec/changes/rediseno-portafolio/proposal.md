# Proposal

## Why

El portafolio (santigarh.netlify.app) se armó en 2023 sobre una plantilla de terceros y se ve desactualizado. Tiene fallos visibles: en modo claro el título "Proyectos" y el logo casi no se ven, el header es transparente, el subrayado animado del hero sale desalineado y queda un hueco vacío bajo el hero. Además, al compartir el enlace no aparece una vista previa correcta, porque `site` apunta a `example.com` y la descripción meta está vacía. Su objetivo es conseguir empleo, local en Ecuador o remoto internacional, y hoy no habla ni el idioma ni el lenguaje de un reclutador: está solo en español, los proyectos quedan al final y la experiencia lista tecnologías en lugar de logros. A esto se suma una base técnica obsoleta: Astro 2 con `@astrojs/image`, un paquete deprecado que rompe el build en Windows.

## What Changes

- **Nueva estructura de página** pensada para reclutadores: header fijo, hero con `<h1>` y propuesta de valor, botones para ver proyectos, descargar el CV, GitHub y LinkedIn, una sección "Sobre mí" con el stack, proyectos destacados antes de la experiencia, experiencia contada con logros, formación y certificaciones, contacto y footer completo.
- **Nueva identidad visual** coherente, con una sola paleta, una tipografía y componentes consistentes. Se mantienen los modos claro y oscuro, ahora con buen contraste en ambos y sin parpadeo al cargar.
- **Sitio bilingüe ES/EN**: el español es el idioma por defecto, la versión en inglés vive en `/en/` y se puede cambiar de idioma desde cualquier página.
- **El contenido se separa del marcado**: proyectos, experiencia, formación y certificaciones pasan a colecciones de contenido. Agregar un proyecto será crear un archivo, no editar un componente.
- **SEO y vistas previas**: `site` real, título y descripción por idioma, imagen Open Graph, URL canónica, `hreflang`, un solo `<h1>` y textos alternativos en el idioma de la página.
- **Migración técnica**: Astro 2 pasa a Astro 7 con `astro:assets` y Tailwind 3 pasa a Tailwind 4. **BREAKING** para quien edite el código: cambia la estructura de `src/` y desaparecen `Picture.astro` y `@astrojs/image`.
- **Se elimina**: los restos de la plantilla ("DaniK" en los `aria-label` y el código comentado de terceros), Google Analytics Universal (dado de baja en 2023), MDX, RSS, la colección `blog` vacía, `src/styles/global.css`, las dependencias e íconos sin usar, las fotos duplicadas, los `console.log` y la carga de `rough-notation` desde unpkg.
- Se mantiene el despliegue en Netlify y la URL actual.

## Capabilities

### New Capabilities
- `site-shell`: estructura común a todas las páginas. Cubre el header fijo con navegación, el menú móvil, el selector de tema claro/oscuro sin parpadeo, el selector de idioma y el footer.
- `portfolio-sections`: las secciones de la página principal, su orden y su comportamiento (hero, sobre mí/stack, proyectos, experiencia, formación y certificaciones, contacto).
- `portfolio-content`: el modelo de contenido. Define las colecciones validadas de proyectos, experiencia, formación y certificaciones, con sus textos en ambos idiomas.
- `i18n`: las versiones en español e inglés del sitio, sus rutas y el cambio de idioma.
- `seo-metadata`: los metadatos de cada página (título, descripción, canónica, Open Graph, `hreflang`, sitemap) y la vista previa al compartir.

### Modified Capabilities
<!-- No hay specs existentes en openspec/specs/. -->

## Impact

- **Código**: se reescribe casi todo `src/` (layouts, widgets, core e icons). Se agregan `src/content/` con las colecciones y las páginas `src/pages/index.astro` y `src/pages/en/index.astro`.
- **Dependencias**: suben `astro` a 7.x y `tailwindcss` a 4.x (con `@tailwindcss/vite`). Se eliminan `@astrojs/image`, `@astrojs/mdx`, `@astrojs/rss`, `@astrojs/tailwind`, `@fontsource/overpass` y `react-rough-notation`. `@astrojs/sitemap` se mantiene y se actualiza.
- **Recursos**: hace falta un CV en PDF (ES y, si existe, EN) en `public/`, una imagen Open Graph de 1200×630 y una foto de perfil única.
- **Contenido**: hay que reescribir los textos del hero, de "Sobre mí" y los logros de cada experiencia, y traducirlos al inglés. Esto requiere información del autor.
- **Despliegue**: Netlify sigue compilando con `astro build`. Astro 7 exige Node 22.23.4 o superior, así que la versión se fija en el repositorio para Netlify y para el entorno local.
- **Analytics**: el sitio queda sin analytics hasta decidir una alternativa. La etiqueta de verificación de Google Search Console se conserva.
