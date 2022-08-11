---
layout: docs
title: Contenidos
description: Descubre lo que se incluye en Bootstrap, incluidos nuestros tipos de código fuente y precompilados.
group: getting-started
toc: true
---

## Bootstrap precompilado

Una vez descargado, descomprime la carpeta comprimida y verás algo como esto:

<!-- NOTE: This info is intentionally duplicated in the README. Copy any changes made here over to the README too, but be sure to keep in mind to add the `dist` folder. -->

```text
bootstrap/
├── css/
│   ├── bootstrap-grid.css
│   ├── bootstrap-grid.css.map
│   ├── bootstrap-grid.min.css
│   ├── bootstrap-grid.min.css.map
│   ├── bootstrap-grid.rtl.css
│   ├── bootstrap-grid.rtl.css.map
│   ├── bootstrap-grid.rtl.min.css
│   ├── bootstrap-grid.rtl.min.css.map
│   ├── bootstrap-reboot.css
│   ├── bootstrap-reboot.css.map
│   ├── bootstrap-reboot.min.css
│   ├── bootstrap-reboot.min.css.map
│   ├── bootstrap-reboot.rtl.css
│   ├── bootstrap-reboot.rtl.css.map
│   ├── bootstrap-reboot.rtl.min.css
│   ├── bootstrap-reboot.rtl.min.css.map
│   ├── bootstrap-utilities.css
│   ├── bootstrap-utilities.css.map
│   ├── bootstrap-utilities.min.css
│   ├── bootstrap-utilities.min.css.map
│   ├── bootstrap-utilities.rtl.css
│   ├── bootstrap-utilities.rtl.css.map
│   ├── bootstrap-utilities.rtl.min.css
│   ├── bootstrap-utilities.rtl.min.css.map
│   ├── bootstrap.css
│   ├── bootstrap.css.map
│   ├── bootstrap.min.css
│   ├── bootstrap.min.css.map
│   ├── bootstrap.rtl.css
│   ├── bootstrap.rtl.css.map
│   ├── bootstrap.rtl.min.css
│   └── bootstrap.rtl.min.css.map
└── js/
    ├── bootstrap.bundle.js
    ├── bootstrap.bundle.js.map
    ├── bootstrap.bundle.min.js
    ├── bootstrap.bundle.min.js.map
    ├── bootstrap.esm.js
    ├── bootstrap.esm.js.map
    ├── bootstrap.esm.min.js
    ├── bootstrap.esm.min.js.map
    ├── bootstrap.js
    ├── bootstrap.js.map
    ├── bootstrap.min.js
    └── bootstrap.min.js.map
```

Esta es la forma más básica de Bootstrap: archivos precompilados para un uso rápido en casi cualquier proyecto web. Proporcionamos CSS y JS compilados (`bootstrap.*`), así como CSS y JS compilados y minimizados (`bootstrap.min.*`). [Source maps](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) (`bootstrap.*.map`) están disponibles para usar con las herramientas de desarrollo de ciertos navegadores. Los archivos JS incluidos (`bootstrap.bundle.js` y `bootstrap.bundle.min.js` minificado) incluyen [Popper](https://popper.js.org/).

## Archivos CSS

Bootstrap incluye un puñado de opciones para incluir parte o la totalidad de nuestro CSS compilado.

{{< bs-table "table" >}}
| Archivos CSS | Layout | Contenido | Componentes | Utilidades |
| --- | --- | --- | --- | --- |
| `bootstrap.css`<br> `bootstrap.min.css`<br> `bootstrap.rtl.css`<br> `bootstrap.rtl.min.css` | Incluido | Incluido | Incluido | Incluido |
| `bootstrap-grid.css`<br> `bootstrap-grid.rtl.css`<br> `bootstrap-grid.min.css`<br> `bootstrap-grid.rtl.min.css` | [Solo grid system]({{< docsref "/layout/grid" >}}) | — | — | [Solo utilidades flex]({{< docsref "/utilities/flex" >}}) |
| `bootstrap-utilities.css`<br> `bootstrap-utilities.rtl.css`<br> `bootstrap-utilities.min.css`<br> `bootstrap-utilities.rtl.min.css` | — | — | — | Incluido |
| `bootstrap-reboot.css`<br> `bootstrap-reboot.rtl.css`<br> `bootstrap-reboot.min.css`<br> `bootstrap-reboot.rtl.min.css` | — | [Solo Reboot]({{< docsref "/content/reboot" >}}) | — | — |
{{< /bs-table >}}

## Archivos JS

Similarly, we have options for including some or all of our compiled JavaScript.

{{< bs-table "table" >}}
| Archivos JS | Popper |
| --- | --- |
| `bootstrap.bundle.js`<br> `bootstrap.bundle.min.js`<br> | Incluido |
| `bootstrap.js`<br> `bootstrap.min.js`<br> | – |
{{< /bs-table >}}

## Código fuente de Bootstrap

La descarga del código fuente de Bootstrap incluye los assets CSS y JavaScript precompilados, junto con la fuente Sass, JavaScript y documentación. Más específicamente, incluye lo siguiente y más:

```text
bootstrap/
├── dist/
│   ├── css/
│   └── js/
├── site/
│   └──content/
│      └── docs/
│          └── {{< param docs_version >}}/
│              └── examples/
├── js/
└── scss/
```

`scss/` y `js/` son el código fuente de nuestro CSS y JavaScript. La carpeta `dist/` incluye todo lo enumerado en la sección de descarga precompilada anterior. La carpeta `site/docs/` incluye el código fuente de nuestra documentación y `examples/` del uso de Bootstrap. Más allá de eso, cualquier otro archivo incluido brinda soporte para paquetes, información de licencia y desarrollo.
