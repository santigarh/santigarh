# Spec Delta

## Purpose

Define la estructura común a todas las páginas del portafolio: header con navegación, menú móvil, selección de tema claro/oscuro, selección de idioma y footer.

## ADDED Requirements

### Requirement: Header fijo y legible
El sitio SHALL mostrar un header fijo en la parte superior con fondo opaco o translúcido. El contenido que pasa por debajo al hacer scroll MUST NOT afectar la legibilidad del header, ni en modo claro ni en modo oscuro.

#### Scenario: Scroll sobre contenido
- **WHEN** el visitante hace scroll y una sección pasa por debajo del header
- **THEN** el header sigue visible en la parte superior y sus textos e íconos mantienen un contraste de al menos 4.5:1 con su fondo

#### Scenario: Logo visible en ambos temas
- **WHEN** la página se muestra en modo claro o en modo oscuro
- **THEN** el logo del header se distingue claramente del fondo

### Requirement: Navegación a secciones
El header SHALL ofrecer enlaces a las secciones principales de la página: Proyectos, Experiencia, Sobre mí y Contacto. Al activar un enlace, la vista MUST desplazarse a esa sección sin que el header tape su título.

#### Scenario: Ir a una sección
- **WHEN** el visitante activa el enlace "Proyectos" del header
- **THEN** la página se desplaza a la sección de proyectos y su título queda visible bajo el header

#### Scenario: Sección actual resaltada
- **WHEN** una sección ocupa la mayor parte de la vista
- **THEN** su enlace en el header aparece marcado como activo, tanto visualmente como con `aria-current`

### Requirement: Menú móvil accesible
En anchos menores a 768 px, la navegación SHALL quedar dentro de un menú desplegable que se abre con un botón. El botón MUST indicar su estado con `aria-expanded` y el menú MUST poder cerrarse con la tecla Escape o al elegir un enlace.

#### Scenario: Abrir y cerrar el menú
- **WHEN** el visitante en móvil pulsa el botón de menú
- **THEN** el menú se abre y el botón expone `aria-expanded="true"`

#### Scenario: Cerrar al navegar
- **WHEN** el menú está abierto y el visitante elige un enlace
- **THEN** el menú se cierra y la página se desplaza a la sección elegida

#### Scenario: Cerrar con Escape
- **WHEN** el menú está abierto y el visitante pulsa Escape
- **THEN** el menú se cierra y el foco vuelve al botón de menú

### Requirement: Tema claro y oscuro sin parpadeo
El sitio SHALL ofrecer modo claro y modo oscuro. En la primera visita MUST usar la preferencia del sistema; después, la elección del visitante MUST guardarse y aplicarse antes de que la página se pinte por primera vez.

#### Scenario: Primera visita
- **WHEN** un visitante sin preferencia guardada abre el sitio con el sistema en modo oscuro
- **THEN** la página se muestra en modo oscuro desde el primer pintado

#### Scenario: Preferencia guardada
- **WHEN** el visitante eligió modo claro y vuelve a cargar la página con el sistema en modo oscuro
- **THEN** la página se muestra en modo claro sin pasar antes por el modo oscuro

#### Scenario: Contraste en ambos temas
- **WHEN** cualquier sección se muestra en modo claro o en modo oscuro
- **THEN** todo el texto de contenido tiene un contraste de al menos 4.5:1 con su fondo, y los títulos grandes de al menos 3:1

### Requirement: Footer con enlaces y créditos
Todas las páginas SHALL terminar con un footer que muestre el nombre del autor, el año actual, enlaces a GitHub, LinkedIn y correo, y el selector de idioma.

#### Scenario: Contenido del footer
- **WHEN** el visitante llega al final de cualquier página
- **THEN** ve el nombre del autor, el año en curso y enlaces que funcionan a GitHub, LinkedIn y correo

### Requirement: Enlaces externos seguros y etiquetados
Los enlaces que abren otro sitio SHALL abrirse en una pestaña nueva con `rel="noopener noreferrer"`. Los enlaces que solo muestran un ícono MUST tener una etiqueta accesible, en el idioma de la página, que nombre al autor o al destino real.

#### Scenario: Ícono de GitHub
- **WHEN** un lector de pantalla llega al ícono de GitHub del header
- **THEN** anuncia una etiqueta como "GitHub de Santiago" (o "Santiago's GitHub" en inglés) y no el nombre de otra persona
