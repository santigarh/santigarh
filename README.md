# Santigarh · Portafolio

Portafolio personal de Santiago, desarrollador Full Stack. Es un sitio bilingüe: español en `/` e inglés en `/en/`.

Publicado en <https://santigarh.netlify.app>. Hecho con [Astro 7](https://astro.build) y [Tailwind CSS 4](https://tailwindcss.com).

## Requisitos

- Node.js 22.23.4 o superior. La versión está fijada en `.node-version`, así que con `fnm` o `nvm` basta con `fnm use` o `nvm use`.

## Comandos

| Comando           | Qué hace                                            |
| ----------------- | --------------------------------------------------- |
| `npm install`     | Instala las dependencias                            |
| `npm run dev`     | Servidor de desarrollo en `http://localhost:4321`   |
| `npm run build`   | Genera el sitio en `dist/` y valida el contenido    |
| `npm run preview` | Sirve `dist/` para revisarlo antes de publicar      |
| `npm run check`   | Revisa tipos de TypeScript y componentes Astro      |

Netlify compila con `npm run build` (ver `netlify.toml`).

## Estructura

```
src/
  content/            Contenido del sitio (un YAML por entrada, con sus imágenes al lado)
    projects/         Proyectos
    experience/       Puestos de trabajo
    education/        Estudios y certificaciones
  content.config.ts   Esquemas que validan el contenido en cada build
  i18n/ui.ts          Textos de la interfaz en español e inglés, perfil y stack
  components/         Header, footer, secciones y componentes base (ui/)
  pages/              index.astro (es) y en/index.astro (en)
  styles/global.css   Tokens de color, tipografía y utilidades
public/               favicon, logo, og.png, robots.txt y cv/
```

## Cómo agregar un proyecto, puesto o certificación

Cada entrada es un archivo YAML en su carpeta de `src/content/`. No hace falta tocar componentes: la entrada aparece en ambos idiomas en el siguiente build. Si falta un campo obligatorio o un valor no es válido, `npm run build` falla e indica la entrada y el campo.

### Proyecto (`src/content/projects/mi-proyecto.yaml`)

Guarda la captura junto al YAML. Lo ideal es 1280×500; se recorta desde arriba a esa proporción.

```yaml
name: Mi proyecto
order: 5              # posición dentro de su grupo (destacados primero)
featured: true        # opcional, por defecto false
published: true       # opcional; false lo oculta sin borrarlo
description:
  es: Qué hace el proyecto, en una o dos frases.
  en: What the project does, in one or two sentences.
image: ./mi-proyecto.png
imageAlt:
  es: Qué se ve en la captura
  en: What the screenshot shows
tech: [Astro, TypeScript]
site: https://mi-proyecto.vercel.app       # opcional
repo: https://github.com/santigarh/mi-proyecto  # opcional (hace falta al menos uno de los dos)
```

### Puesto (`src/content/experience/empresa.yaml`)

```yaml
company: Empresa
role:
  es: Desarrollador Full Stack
  en: Full Stack Developer
start: 2024-03        # YYYY-MM
end: 2025-01          # opcional; sin "end" es el puesto actual
achievements:         # entre 2 y 4
  - es: Logro concreto, mejor si tiene un resultado medible.
    en: A concrete achievement, ideally with a measurable result.
  - es: Otro logro.
    en: Another achievement.
tech: [React, .NET]
```

El periodo ("Mar 2024 – Ene 2025") y la duración se calculan solos en cada idioma.

### Estudio o certificación (`src/content/education/nombre.yaml`)

```yaml
kind: certification   # o "study"
name:
  es: Nombre de la certificación
  en: Certification name
institution: Plataforma o universidad
start: 2023           # opcional, para estudios con rango de años
year: 2024
logo: ./logo.png      # cuadrado, junto al YAML
credentialUrl: https://...  # opcional; si existe, el nombre enlaza a la credencial
```

## CV

Coloca el PDF en `public/cv/santiago-cv-es.pdf` y, si tienes la versión en inglés, en `public/cv/santiago-cv-en.pdf`. El botón "Descargar CV" del hero aparece solo cuando existe el PDF en español. Si no hay versión en inglés, la página en inglés ofrece la de español con la etiqueta "Download CV (Spanish)".
