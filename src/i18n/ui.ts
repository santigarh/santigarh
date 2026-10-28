export const languages = {
  es: 'Español',
  en: 'English',
} as const

export type Lang = keyof typeof languages

export const defaultLang: Lang = 'es'

const es = {
  'meta.title': 'Santiago · Desarrollador Full Stack (.NET y React)',
  // TODO: revisar con el autor
  'meta.description':
    'Portafolio de Santiago, desarrollador Full Stack en Quito, Ecuador. Aplicaciones web con .NET, React y TypeScript para banca, contact centers y productos propios.',
  'meta.ogAlt': 'Tarjeta con el logo SG, el nombre Santiago, el rol Full Stack Developer y su foto',

  'skip': 'Saltar al contenido',
  'nav.label': 'Navegación principal',
  'nav.projects': 'Proyectos',
  'nav.experience': 'Experiencia',
  'nav.about': 'Sobre mí',
  'nav.contact': 'Contacto',
  'nav.home': 'Inicio',
  'nav.openMenu': 'Abrir menú',
  'nav.closeMenu': 'Cerrar menú',
  'theme.toggle': 'Cambiar entre modo claro y oscuro',
  'lang.switch': 'English',
  'lang.switchLabel': 'Ver el sitio en inglés',

  'social.github': 'GitHub de Santiago',
  'social.linkedin': 'LinkedIn de Santiago',
  'social.email': 'Escribir un correo a Santiago',

  // TODO: revisar con el autor (nombre completo en el h1)
  'hero.name': 'Santiago',
  'hero.greeting': 'Hola, soy',
  'hero.role': 'Desarrollador Full Stack · .NET y React',
  // TODO: revisar con el autor
  'hero.pitch.before': 'Construyo aplicaciones web',
  'hero.pitch.highlight': 'de punta a punta',
  'hero.pitch.after':
    ': desde la API en .NET hasta la interfaz en React. Hoy en banca; antes en contact centers y, en mi tiempo libre, productos propios.',
  'hero.location': 'Quito, Ecuador · Abierto a trabajo remoto',
  'hero.photoAlt': 'Foto de Santiago sonriendo, con camisa blanca y saco gris',
  'hero.cta.projects': 'Ver proyectos',
  'hero.cta.cv': 'Descargar CV',
  'hero.cta.cvFallback': 'Descargar CV',

  'projects.title': 'Proyectos',
  'projects.intro': 'Productos propios y trabajos para clientes, de la idea al despliegue.',
  'projects.live': 'Ver {name} en vivo',
  'projects.code': 'Ver el código de {name}',
  'projects.liveShort': 'En vivo',
  'projects.codeShort': 'Código',

  'experience.title': 'Experiencia',
  'experience.present': 'Actualidad',

  'about.title': 'Sobre mí',
  // TODO: revisar con el autor
  'about.p1':
    'Soy ingeniero en Sistemas por la ESPE y tengo un máster en DevOps por UNIR. Desde 2022 trabajo en Banco Solidario construyendo aplicaciones web con .NET y React.',
  // TODO: revisar con el autor
  'about.p2':
    'Antes integré plataformas de contact center con Genesys Cloud en Seteinfo y desarrollé aplicaciones web y móviles como freelancer. Fuera del trabajo construyo productos propios, como Mind Racer y Acordify, para probar herramientas nuevas en proyectos reales.',
  'about.stack': 'Stack',
  'stack.frontend': 'Frontend',
  'stack.backend': 'Backend y datos',
  'stack.devops': 'DevOps y nube',
  'stack.integrations': 'Integraciones',

  'education.title': 'Formación',
  'education.studies': 'Estudios',
  'education.certifications': 'Certificaciones',
  'education.credential': 'Ver credencial de {name}',

  'contact.title': 'Contacto',
  'contact.intro':
    '¿Tienes una vacante o un proyecto en mente? Escríbeme y te respondo en menos de 48 horas.',
  'contact.email': 'Correo',
  'contact.write': 'Escribir correo',
  'contact.copy': 'Copiar',
  'contact.copied': 'Correo copiado al portapapeles',
  'contact.copyError': 'No se pudo copiar. El correo es santigarh.77@gmail.com',

  'footer.rights': 'Hecho con Astro y Tailwind CSS.',
}

export type UiKey = keyof typeof es

const en: Record<UiKey, string> = {
  'meta.title': 'Santiago · Full Stack Developer (.NET & React)',
  // TODO: revisar con el autor
  'meta.description':
    'Portfolio of Santiago, a Full Stack developer based in Quito, Ecuador. Web applications with .NET, React and TypeScript for banking, contact centers and personal products.',
  'meta.ogAlt': 'Card with the SG logo, the name Santiago, the role Full Stack Developer and a photo of Santiago',

  'skip': 'Skip to content',
  'nav.label': 'Main navigation',
  'nav.projects': 'Projects',
  'nav.experience': 'Experience',
  'nav.about': 'About',
  'nav.contact': 'Contact',
  'nav.home': 'Home',
  'nav.openMenu': 'Open menu',
  'nav.closeMenu': 'Close menu',
  'theme.toggle': 'Toggle light and dark mode',
  'lang.switch': 'Español',
  'lang.switchLabel': 'View the site in Spanish',

  'social.github': "Santiago's GitHub",
  'social.linkedin': "Santiago's LinkedIn",
  'social.email': 'Email Santiago',

  // TODO: revisar con el autor (nombre completo en el h1)
  'hero.name': 'Santiago',
  'hero.greeting': "Hi, I'm",
  'hero.role': 'Full Stack Developer · .NET & React',
  // TODO: revisar con el autor
  'hero.pitch.before': 'I build web applications',
  'hero.pitch.highlight': 'end to end',
  'hero.pitch.after':
    ': from .NET APIs to React interfaces. Currently in banking; before that in contact centers and, in my spare time, my own products.',
  'hero.location': 'Quito, Ecuador · Open to remote work',
  'hero.photoAlt': 'Photo of Santiago smiling, wearing a white shirt and a grey blazer',
  'hero.cta.projects': 'View projects',
  'hero.cta.cv': 'Download CV',
  'hero.cta.cvFallback': 'Download CV (Spanish)',

  'projects.title': 'Projects',
  'projects.intro': 'My own products and client work, from idea to deployment.',
  'projects.live': 'View {name} live',
  'projects.code': 'View the source code of {name}',
  'projects.liveShort': 'Live',
  'projects.codeShort': 'Code',

  'experience.title': 'Experience',
  'experience.present': 'Present',

  'about.title': 'About me',
  // TODO: revisar con el autor
  'about.p1':
    "I'm a Systems Engineer from ESPE with a master's degree in DevOps from UNIR. Since 2022 I've been building web applications with .NET and React at Banco Solidario.",
  // TODO: revisar con el autor
  'about.p2':
    'Before that I integrated contact center platforms with Genesys Cloud at Seteinfo and built web and mobile apps as a freelancer. Outside work I build my own products, like Mind Racer and Acordify, to try new tools on real projects.',
  'about.stack': 'Stack',
  'stack.frontend': 'Frontend',
  'stack.backend': 'Backend & data',
  'stack.devops': 'DevOps & cloud',
  'stack.integrations': 'Integrations',

  'education.title': 'Education',
  'education.studies': 'Degrees',
  'education.certifications': 'Certifications',
  'education.credential': 'View the {name} credential',

  'contact.title': 'Contact',
  'contact.intro':
    "Have an open role or a project in mind? Send me an email and I'll reply within 48 hours.",
  'contact.email': 'Email',
  'contact.write': 'Send an email',
  'contact.copy': 'Copy',
  'contact.copied': 'Email copied to clipboard',
  'contact.copyError': "Couldn't copy. The email is santigarh.77@gmail.com",

  'footer.rights': 'Built with Astro and Tailwind CSS.',
}

export const ui: Record<Lang, Record<UiKey, string>> = { es, en }

// Datos de contacto y redes, iguales en ambos idiomas.
export const profile = {
  email: 'santigarh.77@gmail.com',
  github: 'https://github.com/santigarh',
  linkedin: 'https://www.linkedin.com/in/santigarh/',
}

// TODO: revisar con el autor
export const stack: { group: UiKey; items: string[] }[] = [
  { group: 'stack.frontend', items: ['React', 'TypeScript', 'JavaScript', 'Astro', 'Next.js', 'Tailwind CSS'] },
  { group: 'stack.backend', items: ['.NET Core', 'C#', 'Node.js', 'Hono', 'PostgreSQL', 'Supabase'] },
  { group: 'stack.devops', items: ['Git', 'GitHub', 'CI/CD', 'Vercel', 'Netlify', 'Cloudflare'] },
  { group: 'stack.integrations', items: ['Genesys Cloud', 'REST', 'WebSockets'] },
]
