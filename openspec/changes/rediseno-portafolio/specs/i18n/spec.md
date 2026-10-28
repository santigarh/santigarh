# Spec Delta

## Purpose

Define las versiones en español e inglés del portafolio, sus rutas y cómo se cambia de idioma, para llegar tanto a reclutadores locales como internacionales.

## ADDED Requirements

### Requirement: Rutas por idioma
El sitio SHALL servir la versión en español en la raíz (`/`) y la versión en inglés bajo `/en/`. Cada página MUST declarar su idioma en el atributo `lang` del documento.

#### Scenario: Versión en español
- **WHEN** el visitante abre `/`
- **THEN** ve el portafolio en español y el documento tiene `lang="es"`

#### Scenario: Versión en inglés
- **WHEN** el visitante abre `/en/`
- **THEN** ve el portafolio en inglés y el documento tiene `lang="en"`

### Requirement: Textos completos por idioma
Todos los textos visibles y accesibles de una página SHALL estar en el idioma de esa página: navegación, títulos, contenido, botones, etiquetas accesibles, textos alternativos y metadatos. Los nombres propios de proyectos, empresas y tecnologías se mantienen sin traducir.

#### Scenario: Sin mezcla de idiomas
- **WHEN** el visitante recorre `/en/`
- **THEN** no encuentra textos de interfaz ni descripciones en español, salvo nombres propios

### Requirement: Selector de idioma
Cada página SHALL ofrecer un selector visible para cambiar al otro idioma. Al cambiar, el visitante MUST llegar a la página equivalente y, si venía de una sección enlazada, a esa misma sección.

#### Scenario: Cambiar desde una sección
- **WHEN** el visitante está en `/#proyectos` y elige "English"
- **THEN** llega a `/en/#proyectos` con la sección de proyectos visible

#### Scenario: Etiqueta del selector
- **WHEN** un lector de pantalla llega al selector en la versión en español
- **THEN** anuncia la opción como "English", marcada con `lang="en"`

### Requirement: Sin redirección automática por idioma
El sitio MUST NOT redirigir automáticamente según el idioma del navegador. La URL que el visitante abre o comparte SHALL ser la que se muestra.

#### Scenario: Navegador en inglés abre la raíz
- **WHEN** un visitante con el navegador en inglés abre `/`
- **THEN** ve la versión en español, con el selector de idioma disponible

### Requirement: Fechas en el formato del idioma
Las fechas y duraciones SHALL mostrarse con los nombres de mes y las palabras del idioma de la página.

#### Scenario: Fecha de inicio en inglés
- **WHEN** un puesto empezó en febrero de 2022 y se muestra en `/en/`
- **THEN** el periodo dice "Feb 2022 – Present"
