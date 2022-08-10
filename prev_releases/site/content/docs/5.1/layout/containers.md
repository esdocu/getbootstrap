---
layout: docs
title: Contenedores
description: Los contenedores son un bloque de construcción fundamental de Bootstrap que contienen, rellenan y alinean tu contenido dentro de un dispositivo o viewport determinado.
group: layout
toc: true
---

## Cómo trabajan

Los contenedores son el elemento de diseño más básico en Bootstrap y son **requeridos cuando se usa nuestro sistema de cuadrícula predeterminado**. Los contenedores se utilizan para contener, rellenar y (a veces) centrar el contenido dentro de ellos. Si bien los contenedores *pueden* anidarse, la mayoría de los diseños no requieren un contenedor anidado.

Bootstrap viene con tres contenedores diferentes:

- `.container`, que establece un `max-width` en cada breakpoint responsive
- `.container-fluid`, que es `width: 100%` en todos los breakpoints
- `.container-{breakpoint}`, que es `width: 100%` hasta el breakpoint especificado

La siguiente tabla ilustra cómo se compara el `max-width` de cada contenedor con el `.container` y el `.container-fluid` originales en cada breakpoint.

Puedes verlo en acción y compararlos en nuestro [ejemplo de cuadrícula]({{< docsref "/examples/grid#containers" >}}).

<table class="table">
  <thead>
    <tr>
      <td class="border-dark"></td>
      <th scope="col">
        Extra small<br>
        <span class="fw-normal">&lt;576px</span>
      </th>
      <th scope="col">
        Small<br>
        <span class="fw-normal">&ge;576px</span>
      </th>
      <th scope="col">
        Medium<br>
        <span class="fw-normal">&ge;768px</span>
      </th>
      <th scope="col">
        Large<br>
        <span class="fw-normal">&ge;992px</span>
      </th>
      <th scope="col">
        X-Large<br>
        <span class="fw-normal">&ge;1200px</span>
      </th>
      <th scope="col">
        XX-Large<br>
        <span class="fw-normal">&ge;1400px</span>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" class="fw-normal"><code>.container</code></th>
      <td class="text-muted">100%</td>
      <td>540px</td>
      <td>720px</td>
      <td>960px</td>
      <td>1140px</td>
      <td>1320px</td>
    </tr>
    <tr>
      <th scope="row" class="fw-normal"><code>.container-sm</code></th>
      <td class="text-muted">100%</td>
      <td>540px</td>
      <td>720px</td>
      <td>960px</td>
      <td>1140px</td>
      <td>1320px</td>
    </tr>
    <tr>
      <th scope="row" class="fw-normal"><code>.container-md</code></th>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td>720px</td>
      <td>960px</td>
      <td>1140px</td>
      <td>1320px</td>
    </tr>
    <tr>
      <th scope="row" class="fw-normal"><code>.container-lg</code></th>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td>960px</td>
      <td>1140px</td>
      <td>1320px</td>
    </tr>
    <tr>
      <th scope="row" class="fw-normal"><code>.container-xl</code></th>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td>1140px</td>
      <td>1320px</td>
    </tr>
    <tr>
      <th scope="row" class="fw-normal"><code>.container-xxl</code></th>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td>1320px</td>
    </tr>
    <tr>
      <th scope="row" class="fw-normal"><code>.container-fluid</code></th>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
    </tr>
  </tbody>
</table>

## Contenedor predeterminado

Nuestra clase `.container` predeterminada es un contenedor sensible de ancho fijo, lo que significa que su `max-width` cambia en cada breakpoint.

```html
<div class="container">
  <!-- Contenido aquí -->
</div>
```

## Contenedores responsive

Los contenedores responsive te permiten especificar una clase que tiene un 100% de ancho hasta que se alcanza el breakpoint especificado, después de lo cual aplicamos `max-width`s para cada uno de los breakpoints más altos. Por ejemplo, `.container-sm` tiene un 100% de ancho al principio hasta que se alcanza el breakpoint `sm`, donde se escalará con `md`, `lg`, `xl` y `xxl`.

```html
<div class="container-sm">100% de ancho hasta el small breakpoint</div>
<div class="container-md">100% de ancho hasta el medium breakpoint</div>
<div class="container-lg">100% de ancho hasta el large breakpoint</div>
<div class="container-xl">100% de ancho hasta el extra large breakpoint</div>
<div class="container-xxl">100% de ancho hasta el extra extra large breakpoint</div>
```

## Contenedores fluidos

Usa `.container-fluid` para un contenedor de ancho completo, que abarque todo el ancho del viewport.

```html
<div class="container-fluid">
  ...
</div>
```

## Sass

Como se muestra arriba, Bootstrap genera una serie de clases de contenedores predefinidas para ayudarte a crear los diseños que deseas. Puedes personalizar estas clases de contenedor predefinidas modificando el mapa de Sass (que se encuentra en `_variables.scss`):

{{< scss-docs name="container-max-widths" file="scss/_variables.scss" >}}

Además de personalizar el Sass, también puedes crear tus propios contenedores con nuestro mixin Sass.

```scss
// Source mixin
@mixin make-container($padding-x: $container-padding-x) {
  width: 100%;
  padding-right: $padding-x;
  padding-left: $padding-x;
  margin-right: auto;
  margin-left: auto;
}

// Uso
.custom-container {
  @include make-container();
}
```

Para obtener más información y ejemplos sobre cómo modificar nuestros mapas y variables Sass, consulta [la sección Sass de la documentación de Grid]({{< docsref "/layout/grid#sass" >}}).
