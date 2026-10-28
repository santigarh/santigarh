# Tasks

## 1. Base técnica (Astro 7 + Tailwind 4)

- [x] 1.1 Con el PR #1 ya fusionado, crear la rama `feat/rediseno-portafolio` desde `master`. Verificar con `git log -1` que incluye el commit de proyectos recientes.
- [x] 1.2 Actualizar `package.json`: `astro` 7.x, `@astrojs/sitemap`, `tailwindcss` 4.x, `@tailwindcss/vite`, `@fontsource-variable/inter` y `@fontsource-variable/jetbrains-mono`. Quitar `@astrojs/image`, `@astrojs/mdx`, `@astrojs/rss`, `@astrojs/tailwind`, `@fontsource/overpass`, `react-rough-notation` y `rough-notation`. Verificar que `npm install` termina sin errores de dependencias.
- [x] 1.3 Reescribir `astro.config.mjs` con `site: 'https://santigarh.netlify.app'`, `i18n` (es por defecto y sin prefijo, más en), el plugin Vite de Tailwind y `sitemap` con `i18n`. Borrar `tailwind.config.cjs`. Verificar que `npx astro check` no reporta errores de configuración.
- [x] 1.4 Eliminar lo que no se usa: `src/pages/rss.xml.js`, la colección `blog` de `src/content/config.ts`, `src/styles/global.css`, `src/consts.ts`, los íconos sin usar de `src/components/icons/`, `foto-perfil.jpeg` y `foto-perfil.png` (queda una sola foto), `public/placeholder-*.jpg` y los utils de `@astrojs/image`. Verificar con `rg -i "danik|rough-notation|@astrojs/image|UA-205494740"` en `src/` que no queda nada.
- [x] 1.5 Agregar `.node-version` (`22.23.4`) y `netlify.toml` con `command = "npm run build"`, `publish = "dist"` y `NODE_VERSION = "22.23.4"`. Verificar que el *deploy preview* del PR compila en Netlify.
- [x] 1.6 Verificar que `npm run build` termina con éxito en Windows: el error `Invalid URL` de `@astrojs/image` ya no aparece.

## 2. Identidad visual y layout base

- [x] 2.1 Crear `src/styles/global.css` con `@import "tailwindcss"`, `@custom-variant dark` y los tokens de `@theme`: colores semánticos (fondo, superficie, texto, texto atenuado, borde, acento y degradado de acento), fuentes, radios y anchos máximos. Agregar los valores de modo claro bajo `:root:not(.dark)` (design D4). Verificar con una herramienta de contraste que cada par texto/fondo cumple 4.5:1, y 3:1 para títulos grandes, en ambos temas. Anotar los pares verificados como comentario en el archivo.
- [x] 2.2 Crear `src/layouts/BaseLayout.astro` con `<html lang>`, el script de tema en línea en el `<head>` (design D5), la clase `js`, las fuentes autoalojadas y los landmarks `header`, `main` y `footer`. Verificar en el navegador, con modo claro guardado y el sistema en oscuro, que al recargar no hay parpadeo de tema.
- [x] 2.3 Crear `src/components/ui/` con los primitivos `Button` (variantes primaria, secundaria e ícono), `Tag`, `Section` (con `id`, título y `scroll-margin-top`) y `Icon` (solo los íconos que se usan). Verificar que una página de prueba los muestra correctamente en ambos temas y después borrarla.

## 3. Internacionalización

- [x] 3.1 Crear `src/i18n/ui.ts` con los textos de interfaz para `es` y `en`, con el tipo de `en` derivado de `es` para que falte una clave y falle la compilación, y `src/i18n/utils.ts` con `getLangFromUrl`, `useTranslations` y `formatPeriod` (con `Intl.DateTimeFormat` y la duración calculada). Verificar con `npx astro check` que quitar una clave de `en` da error de tipos, y que `formatPeriod('2022-02', undefined, 'en')` devuelve `Feb 2022 – Present`.
- [x] 3.2 Crear `src/pages/index.astro` y `src/pages/en/index.astro` como páginas finas que renderizan `HomePage` con su idioma. Verificar que `/` tiene `lang="es"` y `/en/` tiene `lang="en"`.

## 4. Modelo de contenido

- [x] 4.1 Crear `src/content.config.ts` con las colecciones `projects`, `experience` y `education`, usando el loader `glob` sobre YAML, el tipo `localized` y `image()`. Agregar los `.refine()` para "al menos una URL" y "fin no anterior al inicio", con mensajes que nombren el campo (design D3). Verificar que una entrada de prueba sin `description.en` hace fallar `npm run build` con un mensaje que nombra el proyecto y el campo, y después borrarla.
- [x] 4.2 Migrar los 6 proyectos de `Projects.astro` (incluidos los 4 del PR #1) a `src/content/projects/*.yaml`, con descripciones y textos alternativos en ES y EN, `order`, `featured` y `published`. Mover las capturas junto a sus entradas. Verificar que `npm run build` compila y que las 6 entradas se cargan.
- [x] 4.3 Migrar la experiencia (Banco Solidario, Seteinfo, Freelancer) a `src/content/experience/*.yaml`, con fechas `YYYY-MM` y logros en borrador redactados como frases, marcados con `# TODO: revisar con el autor`. Verificar que el build compila.
- [x] 4.4 Migrar la formación (UNIR, ESPE) y las 4 certificaciones a `src/content/education/*.yaml`, con sus logos y `credentialUrl` cuando exista. Verificar que el build compila y que se cargan 6 entradas.
- [x] 4.5 Reescribir `README.md` con la descripción del proyecto, los comandos y una sección "Cómo agregar un proyecto, puesto o certificación" con un YAML de ejemplo. Verificar siguiendo la guía para agregar un proyecto de prueba: aparece en `/` y en `/en/`. Después borrarlo.

## 5. Shell del sitio (header y footer)

- [x] 5.1 Crear `Header.astro`: fijo y con fondo, logo SG visible en ambos temas, enlaces a Proyectos, Experiencia, Sobre mí y Contacto, botón de tema, selector de idioma que conserva el `#hash`, e íconos de GitHub y LinkedIn con etiquetas accesibles en el idioma de la página. Verificar con scroll en ambos temas que el header se lee bien, y que en `/#proyectos` el selector lleva a `/en/#proyectos`.
- [x] 5.2 Implementar el menú móvil (design D7): `aria-expanded`, cierre con Escape con el foco de vuelta en el botón, y cierre al elegir un enlace. Verificar con 375 px de ancho usando solo el teclado.
- [x] 5.3 Implementar el resaltado de la sección activa con `IntersectionObserver` y `aria-current`. Verificar que al hacer scroll por cada sección se marca su enlace.
- [x] 5.4 Crear `Footer.astro` con el nombre, el año calculado en el build, enlaces a GitHub, LinkedIn y correo, y el selector de idioma. Verificar en ambos idiomas que los tres enlaces funcionan.

## 6. Secciones de la página

- [x] 6.1 Crear `Hero.astro`: un solo `<h1>` con el nombre, el rol, la propuesta de valor (borrador para revisar), la frase clave con resaltado CSS (design D6), la foto con `<Picture>` eager y `fetchpriority="high"`, y los botones Ver proyectos, Descargar CV, GitHub y LinkedIn. Verificar a 1280×800 que todo se ve sin scroll; a 1280×1600 que no queda hueco antes de Proyectos; y que el resaltado sigue sobre la frase al cambiar el ancho de 1280 a 375.
- [x] 6.2 Crear `Projects.astro` y `ProjectCard.astro` a partir de la colección `projects` (filtrada por `published` y ordenada por `featured` y `order`): captura con `<Picture>`, etiquetas de tecnologías y solo los enlaces que existen, con etiquetas accesibles que nombran el proyecto. Verificar que Acordify muestra solo el enlace al sitio, que a 390 px las tarjetas van en una columna sin scroll horizontal, y que marcar `published: false` oculta un proyecto.
- [x] 6.3 Crear `Experience.astro` a partir de la colección `experience`, en orden cronológico inverso, con el periodo de `formatPeriod`, los logros y las etiquetas. Verificar que Banco Solidario aparece primero con "Actualidad" / "Present" y que las duraciones coinciden con las fechas.
- [x] 6.4 Crear `About.astro` con el texto "Sobre mí" (borrador para revisar) y el stack agrupado por área (Frontend, Backend, DevOps/Cloud, Herramientas). Verificar en ambos idiomas que cada grupo tiene su título.
- [x] 6.5 Crear `Education.astro` a partir de la colección `education`, separando estudios y certificaciones, con logos uniformes sin degradados por entrada y enlaces de credencial cuando existan. Verificar que las certificaciones con `credentialUrl` abren en una pestaña nueva.
- [x] 6.6 Crear `Contact.astro` con el correo visible, el botón `mailto:`, el botón Copiar con aviso en `aria-live`, y los enlaces a LinkedIn y GitHub. Verificar que copiar funciona y se anuncia, y que con JavaScript desactivado el correo y el `mailto:` siguen ahí.
- [x] 6.7 Crear `HomePage.astro`, que compone las secciones en el orden Hero, Proyectos, Experiencia, Sobre mí, Formación y Contacto, y agregar las animaciones de entrada en CSS condicionadas a `.js` y a que no se haya pedido reducir movimiento. Verificar el orden en ambos idiomas, y que con "reducir movimiento" activado (DevTools → Rendering) no hay animaciones.
- [ ] 6.8 Agregar el CV en `public/cv/` y la lógica del botón en inglés según exista o no el PDF en inglés (design D11). Verificar que en `/` se descarga el PDF en español y que en `/en/` el botón dice "Download CV (Spanish)" si no hay PDF en inglés.

## 7. SEO y metadatos

- [x] 7.1 Crear `Seo.astro` con título y descripción por idioma, canónica, `hreflang` (es, en y x-default), Open Graph (con `og:locale` e imagen con alt), Twitter y la meta `google-site-verification`, sin Universal Analytics. Verificar en el HTML generado de `/en/` la canónica `https://santigarh.netlify.app/en/` y los tres `hreflang`, y que `rg example.com dist/` no encuentra nada.
- [ ] 7.2 Diseñar `public/og.png` de 1200×630 con la nueva identidad (nombre, rol y logo SG). Verificar con el inspector de publicaciones de LinkedIn sobre la URL del *deploy preview* que la vista previa muestra imagen, título y descripción.
- [x] 7.3 Agregar `public/robots.txt` con `Allow: /` y el enlace al sitemap. Verificar que `dist/sitemap-index.xml` y el sitemap que referencia incluyen `/` y `/en/`.

## 8. Revisión de contenido con el autor

- [ ] 8.1 Revisar con el autor y cerrar los borradores: nombre en el `<h1>`, propuesta de valor, "Sobre mí", logros de cada puesto y traducciones al inglés. Verificar que `rg "TODO: revisar" src/` no devuelve resultados.

## 9. Verificación integral

- [ ] 9.1 Ejecutar Lighthouse en móvil sobre `/` y `/en/` en el *deploy preview*. Verificar que Rendimiento, Accesibilidad, Buenas prácticas y SEO dan 90 o más, y anotar los puntajes en el PR.
- [ ] 9.2 Recorrer el sitio en Chrome y Safari (o WebKit) a 375, 768 y 1280 px, en ambos temas y ambos idiomas, contrastando con las specs `site-shell`, `portfolio-sections` e `i18n`. Verificar que no hay scroll horizontal, que no hay textos en el idioma equivocado, que todos los enlaces funcionan y que no hay errores en la consola.
- [x] 9.3 Navegar todo el sitio solo con el teclado: foco visible, orden lógico y menú y botones operables. Verificar que se puede llegar y activar cada enlace y botón.

## Workflow follow-up

- Fusionar el PR del rediseño en `master` cuando el autor apruebe el *deploy preview*, y confirmar que el sitio publicado coincide con el preview.
- Archivar el cambio con `/opsx:archive` para pasar las specs a `openspec/specs/`.
