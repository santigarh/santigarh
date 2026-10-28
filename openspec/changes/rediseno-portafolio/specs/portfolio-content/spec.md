# Spec Delta

## Purpose

Define el modelo de contenido del portafolio (proyectos, experiencia, formación y certificaciones) para que se pueda actualizar editando datos validados, sin tocar el marcado de las páginas.

## ADDED Requirements

### Requirement: Contenido separado del marcado
Los proyectos, puestos de experiencia, estudios y certificaciones SHALL definirse como entradas de contenido independientes de los componentes visuales. Agregar, quitar o reordenar una entrada MUST NOT requerir cambios en los componentes.

#### Scenario: Agregar un proyecto
- **WHEN** el autor agrega una entrada de proyecto válida con su captura
- **THEN** el proyecto aparece en la sección de proyectos de ambos idiomas en el siguiente build, sin editar ningún componente

#### Scenario: Ocultar un proyecto
- **WHEN** el autor marca un proyecto como no publicado
- **THEN** el proyecto deja de aparecer en el sitio y su entrada sigue guardada

### Requirement: Validación de entradas
Cada entrada SHALL validarse en el build contra un esquema con campos obligatorios y tipos definidos. Una entrada inválida MUST hacer fallar el build con un mensaje que nombre la entrada y el campo.

#### Scenario: Falta un campo obligatorio
- **WHEN** una entrada de proyecto no tiene descripción en inglés
- **THEN** el build falla e indica el proyecto y el campo que falta

#### Scenario: URL mal formada
- **WHEN** el enlace de sitio en vivo de un proyecto no es una URL válida
- **THEN** el build falla e indica el proyecto y el campo

### Requirement: Campos de un proyecto
Una entrada de proyecto SHALL tener nombre, descripción en español e inglés, captura con texto alternativo en ambos idiomas, lista de tecnologías, orden, marca de destacado, marca de publicado y, de forma opcional, URL del sitio y URL del repositorio. MUST tener al menos una de las dos URLs.

#### Scenario: Proyecto sin enlaces
- **WHEN** una entrada de proyecto no tiene ni URL de sitio ni URL de repositorio
- **THEN** el build falla e indica que el proyecto necesita al menos un enlace

### Requirement: Campos de un puesto de experiencia
Una entrada de experiencia SHALL tener cargo y logros en ambos idiomas, empresa, fecha de inicio, fecha de fin opcional (sin fecha significa puesto actual) y lista de tecnologías.

#### Scenario: Fechas inconsistentes
- **WHEN** una entrada de experiencia tiene una fecha de fin anterior a su fecha de inicio
- **THEN** el build falla e indica la entrada

### Requirement: Campos de formación y certificación
Una entrada de formación o certificación SHALL tener tipo (estudio o certificación), nombre en ambos idiomas, institución, año, logo y, de forma opcional, URL de credencial.

#### Scenario: Certificación con logo
- **WHEN** se agrega una certificación con su logo
- **THEN** aparece en la sección de formación con ese logo, sin estilos de fondo escritos a mano para cada entrada

### Requirement: Imágenes optimizadas
Las capturas, logos y la foto de perfil SHALL servirse en formatos modernos, redimensionadas al tamaño en que se muestran y con ancho y alto declarados, para evitar saltos de diseño al cargar.

#### Scenario: Sin saltos de diseño
- **WHEN** la página termina de cargar las imágenes
- **THEN** ningún bloque cambia de posición por la carga de una imagen (CLS menor a 0.1)
