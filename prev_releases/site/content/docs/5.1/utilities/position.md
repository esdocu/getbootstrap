---
layout: docs
title: Posición
description: Utiliza estas utilidades abreviadas para configurar rápidamente la posición de un elemento.
group: utilities
toc: true
---

## Valores de posición

Las clases de posicionamiento rápido están disponibles, aunque no son responsive.

```html
<div class="position-static">...</div>
<div class="position-relative">...</div>
<div class="position-absolute">...</div>
<div class="position-fixed">...</div>
<div class="position-sticky">...</div>
```

## Organizar elementos

Organiza elementos fácilmente con las utilidades de posicionamiento de bordes. El formato es `{property}-{position}`.

Donde *property* es uno de:

- `top` - para la posición vertical `top`
- `start` - para la posición horizontal `left` (en LTR)
- `bottom` - para la posición vertical `bottom`
- `end` - para la posición horizontal `right` (en LTR)

Donde *position* es uno de:

- `0` - para posición de borde `0`
- `50` - para posición de borde `50%`
- `100` - para posición de borde `100%`

(Puedes agregar más valores de posición agregando entradas a la variable de mapa Sass `$position-values`).

{{< example class="bd-example-position-utils" >}}
<div class="position-relative">
  <div class="position-absolute top-0 start-0"></div>
  <div class="position-absolute top-0 end-0"></div>
  <div class="position-absolute top-50 start-50"></div>
  <div class="position-absolute bottom-50 end-50"></div>
  <div class="position-absolute bottom-0 start-0"></div>
  <div class="position-absolute bottom-0 end-0"></div>
</div>
{{< /example >}}

## Centrar elementos

Además, también puedes centrar los elementos con la clase de utilidad de transformación `.translate-middle`.

Esta clase aplica las transformaciones `translateX(-50%)` y `translateY(-50%)` al elemento que, en combinación con las utilidades de posicionamiento de bordes, te permite centrar un elemento de forma absoluta.

{{< example class="bd-example-position-utils" >}}
<div class="position-relative">
  <div class="position-absolute top-0 start-0 translate-middle"></div>
  <div class="position-absolute top-0 start-50 translate-middle"></div>
  <div class="position-absolute top-0 start-100 translate-middle"></div>
  <div class="position-absolute top-50 start-0 translate-middle"></div>
  <div class="position-absolute top-50 start-50 translate-middle"></div>
  <div class="position-absolute top-50 start-100 translate-middle"></div>
  <div class="position-absolute top-100 start-0 translate-middle"></div>
  <div class="position-absolute top-100 start-50 translate-middle"></div>
  <div class="position-absolute top-100 start-100 translate-middle"></div>
</div>
{{< /example >}}

Al agregar las clases `.translate-middle-x` o `.translate-middle-y`, los elementos se pueden colocar solo en dirección horizontal o vertical.

{{< example class="bd-example-position-utils" >}}
<div class="position-relative">
  <div class="position-absolute top-0 start-0"></div>
  <div class="position-absolute top-0 start-50 translate-middle-x"></div>
  <div class="position-absolute top-0 end-0"></div>
  <div class="position-absolute top-50 start-0 translate-middle-y"></div>
  <div class="position-absolute top-50 start-50 translate-middle"></div>
  <div class="position-absolute top-50 end-0 translate-middle-y"></div>
  <div class="position-absolute bottom-0 start-0"></div>
  <div class="position-absolute bottom-0 start-50 translate-middle-x"></div>
  <div class="position-absolute bottom-0 end-0"></div>
</div>
{{< /example >}}

## Ejemplos

Aquí hay algunos ejemplos de la vida real de estas clases:

{{< example class="bd-example-position-examples d-flex justify-content-around" >}}
<button type="button" class="btn btn-primary position-relative">
  Correos <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">+99 <span class="visually-hidden">mensajes no leídos</span></span>
</button>

<button type="button" class="btn btn-dark position-relative">
  Marcador <svg width="1em" height="1em" viewBox="0 0 16 16" class="position-absolute top-100 start-50 translate-middle mt-1 bi bi-caret-down-fill" fill="#212529" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>
</button>

<button type="button" class="btn btn-primary position-relative">
  Alertas <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"><span class="visually-hidden">mensajes no leídos</span></span>
</button>
{{< /example >}}

Puedes usar estas clases con componentes existentes para crear otros nuevos. Recuerda que puedes extender su funcionalidad agregando entradas a la variable `$position-values`.

{{< example class="bd-example-position-examples" >}}
<div class="position-relative m-4">
  <div class="progress" style="height: 1px;">
    <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">1</button>
  <button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">2</button>
  <button type="button" class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill" style="width: 2rem; height:2rem;">3</button>
</div>
{{< /example >}}

## Sass

### Mapas

Los valores de utilidad de posición predeterminados se declaran en un mapa Sass y luego se utilizan para generar nuestras utilidades.

{{< scss-docs name="position-map" file="scss/_variables.scss" >}}

### API de utilidades

Las utilidades de posición se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a usar la API de utilidades.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-position" file="scss/_utilities.scss" >}}
