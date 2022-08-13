---
layout: docs
title: Contenido
description: Descubre lo que se incluye en Bootstrap, incluidos nuestros tipos de código fuente y precompilados.
group: getting-started
toc: true
---

## Precompiled Bootstrap

Una vez descargado, descomprime el archivo y verás una carpeta con algo como esto:

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

Esta es la forma más básica de Bootstrap: archivos precompilados para un uso rápido en casi cualquier proyecto web. Proporcionamos CSS y JS compilados (`bootstrap.*`), así como CSS y JS compilados y minimizados (`bootstrap.min.*`). Los [mapas de origen](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) (`bootstrap.*.map`) están disponibles para su uso con las herramientas de desarrollo de ciertos navegadores. Los archivos JS incluidos (`bootstrap.bundle.js` y `bootstrap.bundle.min.js` minificado) incluyen [Popper](https://popper.js.org/).

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

## Archivos CSS

Bootstrap incluye un puñado de opciones para incluir solo partes o la totalidad de nuestro CSS compilado.

<table class="table">
  <thead>
    <tr>
      <th scope="col">CSS files</th>
      <th scope="col">Layout</th>
      <th scope="col">Content</th>
      <th scope="col">Components</th>
      <th scope="col">Utilities</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">bootstrap.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap.rtl.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap.min.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap.rtl.min.css</code></div>
      </th>
      <td>Included</td>
      <td>Included</td>
      <td>Included</td>
      <td>Included</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">bootstrap-grid.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap-grid.rtl.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap-grid.min.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap-grid.rtl.min.css</code></div>
      </th>
      <td><a class="link-secondary" href="{{< docsref "/layout/grid" >}}">Only grid system</a></td>
      <td class="text-muted">&mdash;</td>
      <td class="text-muted">&mdash;</td>
      <td><a class="link-secondary" href="{{< docsref "/utilities/flex" >}}">Only flex utilities</a></td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">bootstrap-utilities.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap-utilities.rtl.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap-utilities.min.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap-utilities.rtl.min.css</code></div>
      </th>
      <td class="text-muted">&mdash;</td>
      <td class="text-muted">&mdash;</td>
      <td class="text-muted">&mdash;</td>
      <td>Included</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">bootstrap-reboot.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap-reboot.rtl.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap-reboot.min.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap-reboot.rtl.min.css</code></div>
      </th>
      <td class="text-muted">&mdash;</td>
      <td><a class="link-secondary" href="{{< docsref "/content/reboot" >}}">Only Reboot</a></td>
      <td class="text-muted">&mdash;</td>
      <td class="text-muted">&mdash;</td>
    </tr>
  </tbody>
</table>

## Archivos JS

Del mismo modo, tenemos opciones para incluir solo partes o la totalidad de nuestro JavaScript compilado.

<table class="table">
  <thead>
    <tr>
      <th scope="col">JS files</th>
      <th scope="col">Popper</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">bootstrap.bundle.js</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap.bundle.min.js</code></div>
      </th>
      <td>Included</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">bootstrap.js</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap.min.js</code></div>
      </th>
      <td class="text-muted">&mdash;</td>
    </tr>
  </tbody>
</table>

## Código fuente de Bootstrap

La descarga del código fuente de Bootstrap incluye los activos CSS y JavaScript precompilados, junto con las fuentes en Sass, JavaScript y documentación. Más específicamente, incluye lo siguiente y más:

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

`scss/` y `js/` son el código fuente de nuestro CSS y JavaScript. La carpeta `dist/` incluye todo lo enumerado en la sección anterior de descarga precompilada. La carpeta `site/docs/` incluye el código fuente de nuestra documentación y `examples/` del uso de Bootstrap. Más allá de eso, cualquier otro archivo incluido brinda soporte para paquetes, información de licencia y desarrollo.