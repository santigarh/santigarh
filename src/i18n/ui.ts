export const languages = {
  es: 'Español',
  en: 'English',
} as const

export type Lang = keyof typeof languages

export const defaultLang: Lang = 'es'

const es = {
  'meta.title': 'Santiago García Hernández · Desarrollador Full Stack Senior (.NET y React)',
  // TODO: revisar con el autor
  'meta.description':
    'Portafolio de Santiago García Hernández, desarrollador Full Stack Senior en Quito, Ecuador. Más de 7 años construyendo software empresarial con .NET Core, React y SQL Server, los últimos 4 en banca.',
  'meta.ogAlt':
    'Tarjeta con el logo SG, el nombre Santiago García, el rol Senior Full Stack Developer y su foto',

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

  'hero.name': 'Santiago García Hernández',
  'hero.greeting': 'Hola, soy',
  'hero.role': 'Desarrollador Full Stack Senior · .NET Core y React',
  // TODO: revisar con el autor
  'hero.pitch.before': 'Construyo software empresarial',
  'hero.pitch.highlight': 'de punta a punta',
  'hero.pitch.after':
    ': microservicios en .NET Core, interfaces en React y bases de datos en SQL Server. Más de 7 años de experiencia, los últimos 4 en banca.',
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
    'Soy ingeniero en Sistemas de la ESPE y tengo un máster en DevOps en UNIR. Desde 2022 trabajo en Banco Solidario, en el equipo que desarrolla la nueva Suite de Créditos: microservicios en .NET Core, frontend en React, SQL Server, flujos en Camunda y despliegues en OpenShift con Azure DevOps. He liderado pasos a producción bajo control de cambios, coordinando con QA, infraestructura y negocio.',
  // TODO: revisar con el autor
  'about.p2':
    'Antes integré soluciones de contact center con Genesys Cloud en Seteinfo, desarrollé aplicaciones web y móviles como freelancer y construí un sistema experto de realidad virtual en Unity en el CICTE de la ESPE. Fuera del trabajo creo productos propios, como Mind Racer y Acordify, para probar herramientas nuevas en proyectos reales.',
  'about.stack': 'Stack',
  'stack.frontend': 'Frontend',
  'stack.backend': 'Backend',
  'stack.data': 'Bases de datos',
  'stack.devops': 'DevOps',
  'stack.integrations': 'Integración y procesos',

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
  'meta.title': 'Santiago García Hernández · Senior Full Stack Developer (.NET & React)',
  // TODO: revisar con el autor
  'meta.description':
    'Portfolio of Santiago García Hernández, a Senior Full Stack developer based in Quito, Ecuador. 7+ years building enterprise software with .NET Core, React and SQL Server, the last 4 in banking.',
  'meta.ogAlt':
    'Card with the SG logo, the name Santiago García, the role Senior Full Stack Developer and a photo of Santiago',

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

  'hero.name': 'Santiago García Hernández',
  'hero.greeting': "Hi, I'm",
  'hero.role': 'Senior Full Stack Developer · .NET Core & React',
  // TODO: revisar con el autor
  'hero.pitch.before': 'I build enterprise software',
  'hero.pitch.highlight': 'end to end',
  'hero.pitch.after':
    ': .NET Core microservices, React interfaces and SQL Server databases. 7+ years of experience, the last 4 in banking.',
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
    "I'm a Systems Engineer from ESPE with a master's degree in DevOps from UNIR. Since 2022 I've been at Banco Solidario, on the team building the new Credit Suite: .NET Core microservices, a React frontend, SQL Server, Camunda workflows and OpenShift deployments with Azure DevOps. I've led production releases under change control, coordinating with QA, infrastructure and business teams.",
  // TODO: revisar con el autor
  'about.p2':
    'Before that I integrated contact center solutions with Genesys Cloud at Seteinfo, built web and mobile apps as a freelancer, and developed a virtual reality expert system in Unity at ESPE’s CICTE research center. Outside work I build my own products, like Mind Racer and Acordify, to try new tools on real projects.',
  'about.stack': 'Stack',
  'stack.frontend': 'Frontend',
  'stack.backend': 'Backend',
  'stack.data': 'Databases',
  'stack.devops': 'DevOps',
  'stack.integrations': 'Integration & processes',

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

// Competencias técnicas del CV, más lo que usan los proyectos propios.
export const stack: { group: UiKey; items: string[] }[] = [
  { group: 'stack.backend', items: ['C#', '.NET Core', 'ASP.NET Core Web API', 'REST', 'Dapper', 'Node.js'] },
  { group: 'stack.frontend', items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Astro', 'Next.js'] },
  { group: 'stack.data', items: ['SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB'] },
  { group: 'stack.devops', items: ['Azure DevOps', 'CI/CD', 'Docker', 'OpenShift', 'Git', 'GitHub'] },
  { group: 'stack.integrations', items: ['Camunda BPM', 'BPMN', 'DMN', 'WSO2 ESB', 'Genesys Cloud', 'SharePoint'] },
]
