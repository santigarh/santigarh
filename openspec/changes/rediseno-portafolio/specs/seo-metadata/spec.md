# Spec Delta

## Purpose

Define los metadatos de cada página del portafolio para que los buscadores la indexen bien y para que el enlace muestre una vista previa correcta al compartirlo en LinkedIn, WhatsApp u otras redes.

## ADDED Requirements

### Requirement: Título y descripción por página
Cada página SHALL tener un `<title>` y una `<meta name="description">` propios y no vacíos, en el idioma de la página, que incluyan el nombre del autor y su rol.

#### Scenario: Descripción presente
- **WHEN** se inspecciona el `<head>` de `/` o de `/en/`
- **THEN** existe una meta description no vacía en el idioma de la página

### Requirement: URLs absolutas del dominio real
Todas las URLs absolutas de los metadatos (canónica, Open Graph, `hreflang`, sitemap) SHALL usar el dominio público del sitio, `https://santigarh.netlify.app`. MUST NOT aparecer dominios de ejemplo ni de previsualización.

#### Scenario: Sin example.com
- **WHEN** se inspecciona el HTML generado y el sitemap
- **THEN** ninguna URL contiene `example.com`

### Requirement: Vista previa al compartir
Cada página SHALL declarar metadatos Open Graph y de Twitter (título, descripción, tipo, URL, imagen de 1200×630 con texto alternativo y `og:locale`) para que las redes muestren una tarjeta con imagen.

#### Scenario: Compartir en LinkedIn
- **WHEN** se pega la URL del sitio en el inspector de publicaciones de LinkedIn
- **THEN** la vista previa muestra el título, la descripción y la imagen del portafolio

### Requirement: Canónica y versiones alternativas
Cada página SHALL declarar su URL canónica y enlaces `hreflang` a la versión en español, a la versión en inglés y una opción `x-default` que apunte a la versión en español.

#### Scenario: Alternativas declaradas
- **WHEN** se inspecciona el `<head>` de `/en/`
- **THEN** tiene la canónica `https://santigarh.netlify.app/en/` y enlaces `hreflang` a `es`, `en` y `x-default`

### Requirement: Sitemap y robots
El sitio SHALL publicar un sitemap con las páginas de ambos idiomas y un `robots.txt` que permita la indexación y enlace al sitemap.

#### Scenario: Sitemap con ambos idiomas
- **WHEN** se abre el sitemap publicado
- **THEN** contiene las URLs `/` y `/en/`

### Requirement: Estructura semántica y rendimiento
Cada página SHALL usar encabezados en orden jerárquico sin saltos, los landmarks `header`, `main` y `footer`, y alcanzar al menos 90 en Rendimiento, Accesibilidad, Buenas prácticas y SEO de Lighthouse en móvil.

#### Scenario: Auditoría Lighthouse
- **WHEN** se audita `/` con Lighthouse en modo móvil
- **THEN** las cuatro categorías obtienen 90 o más

### Requirement: Sin scripts de seguimiento obsoletos
El sitio MUST NOT cargar scripts de analytics desactivados ni de terceros sin uso. La etiqueta de verificación de Google Search Console SHALL conservarse.

#### Scenario: Sin Universal Analytics
- **WHEN** se carga la página y se revisan las peticiones de red
- **THEN** no hay ninguna petición a `googletagmanager.com` con un ID `UA-`, y la meta `google-site-verification` sigue presente
