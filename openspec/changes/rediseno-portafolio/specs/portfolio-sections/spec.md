# Spec Delta

## Purpose

Define las secciones de la página principal del portafolio, su orden y lo que cada una muestra, para que un reclutador entienda en segundos quién es el autor, qué ha construido y cómo contactarlo.

## ADDED Requirements

### Requirement: Orden de las secciones
La página principal SHALL presentar las secciones en este orden: Hero, Proyectos, Experiencia, Sobre mí y stack, Formación y certificaciones, Contacto. Cada sección MUST tener un `id` estable para enlazarla.

#### Scenario: Recorrido de la página
- **WHEN** el visitante recorre la página de arriba a abajo
- **THEN** encuentra las secciones en el orden Hero, Proyectos, Experiencia, Sobre mí, Formación y Contacto

### Requirement: Hero con identidad y propuesta
El hero SHALL mostrar el nombre del autor como único `<h1>` de la página, su rol profesional, una propuesta de valor de una o dos frases y la foto de perfil. El texto MUST estar alineado a la izquierda en todos los anchos.

#### Scenario: Primera vista en escritorio
- **WHEN** el visitante abre la página en una ventana de 1280×800
- **THEN** ve el nombre, el rol, la propuesta de valor y los botones de acción sin hacer scroll

#### Scenario: Un solo h1
- **WHEN** se inspecciona el documento
- **THEN** existe exactamente un elemento `<h1>`, y contiene el nombre del autor

### Requirement: Botones de acción del hero
El hero SHALL ofrecer un botón principal "Ver proyectos" que lleve a la sección de proyectos, un botón para descargar el CV en el idioma de la página y enlaces a GitHub y LinkedIn.

#### Scenario: Descargar CV
- **WHEN** el visitante activa "Descargar CV" en la versión en español
- **THEN** se descarga o se abre el CV en PDF en español

#### Scenario: CV sin traducción
- **WHEN** el visitante activa "Download CV" en inglés y no existe un CV en inglés
- **THEN** se entrega el CV en español y el botón lo indica (por ejemplo, "Download CV (Spanish)")

### Requirement: Hero sin espacio muerto
El hero MUST ocupar como máximo el alto de la ventana. Entre el hero y la siguiente sección MUST NOT quedar un hueco vacío mayor que el espaciado normal entre secciones.

#### Scenario: Pantalla alta
- **WHEN** la página se abre en una ventana de 1280×1600
- **THEN** la sección de proyectos empieza inmediatamente después del hero, sin una franja vacía mayor que el espaciado entre secciones

### Requirement: Proyectos destacados
La sección de proyectos SHALL mostrar cada proyecto en una tarjeta con captura, nombre, descripción breve, tecnologías como etiquetas y solo los enlaces disponibles: sitio en vivo, repositorio o ambos. Los proyectos MUST aparecer según el orden definido en el contenido, con los destacados primero.

#### Scenario: Proyecto sin repositorio público
- **WHEN** un proyecto tiene sitio en vivo pero no repositorio público
- **THEN** su tarjeta muestra el enlace al sitio y ningún botón de código

#### Scenario: Enlaces con nombre accesible
- **WHEN** un lector de pantalla llega al botón de sitio de la tarjeta de Acordify
- **THEN** anuncia una etiqueta que incluye el nombre del proyecto, como "Ver Acordify en vivo"

#### Scenario: Una columna en móvil
- **WHEN** la página se ve con 390 px de ancho
- **THEN** las tarjetas se muestran en una columna sin desbordamiento horizontal

### Requirement: Experiencia con logros
La sección de experiencia SHALL mostrar cada puesto en orden cronológico inverso, con cargo, empresa, periodo y entre dos y cuatro logros o responsabilidades redactados como frases, además de las tecnologías como etiquetas.

#### Scenario: Puesto actual
- **WHEN** un puesto no tiene fecha de fin
- **THEN** su periodo se muestra como "Feb 2022 – Actualidad" (o "Present" en inglés) y aparece primero

#### Scenario: Duración calculada
- **WHEN** se muestra un puesto con fecha de inicio y de fin
- **THEN** la duración se calcula a partir de esas fechas y no está escrita a mano

### Requirement: Sobre mí y stack
La sección "Sobre mí" SHALL incluir un texto breve sobre el autor y su stack técnico agrupado por área (por ejemplo, frontend, backend, DevOps y herramientas).

#### Scenario: Stack agrupado
- **WHEN** el visitante llega a "Sobre mí"
- **THEN** ve las tecnologías agrupadas por área, cada grupo con su título

### Requirement: Formación y certificaciones
La sección SHALL listar los estudios formales y las certificaciones, cada uno con nombre, institución, año y logo. Las certificaciones con credencial verificable MUST enlazar a ella.

#### Scenario: Certificación con credencial
- **WHEN** una certificación tiene URL de credencial
- **THEN** su nombre enlaza a esa URL y se abre en una pestaña nueva

### Requirement: Contacto directo
La sección de contacto SHALL ofrecer el correo del autor visible y copiable, un botón que abra el cliente de correo y enlaces a LinkedIn y GitHub. El correo MUST NOT depender de JavaScript para mostrarse.

#### Scenario: Copiar correo
- **WHEN** el visitante pulsa "Copiar" junto al correo
- **THEN** el correo se copia al portapapeles y aparece una confirmación breve que también se anuncia a los lectores de pantalla

#### Scenario: Sin JavaScript
- **WHEN** la página se carga con JavaScript desactivado
- **THEN** el correo y el enlace `mailto:` se ven y funcionan

### Requirement: Movimiento respetuoso
Las animaciones de entrada y de resaltado de texto SHALL desactivarse cuando el visitante tiene activada la preferencia de reducir movimiento. Ningún resaltado decorativo MUST desplazarse respecto del texto que marca.

#### Scenario: Reducir movimiento
- **WHEN** el sistema del visitante tiene activado "reducir movimiento"
- **THEN** las secciones aparecen sin animación y el contenido es igual de visible

#### Scenario: Resaltado alineado
- **WHEN** el hero muestra un resaltado decorativo sobre una frase y la ventana cambia de tamaño
- **THEN** el resaltado sigue sobre esa frase
