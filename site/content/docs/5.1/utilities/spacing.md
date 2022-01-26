---
layout: docs
title: Espaciado
description: Bootstrap incluye una amplia gama de clases de utilidades de margin, padding y gap para modificar la apariencia de un elemento.
group: utilities
toc: true
---

## Margin y padding

Asigna valores de "margin" o "padding" responsive a un elemento o un subconjunto de sus lados con clases abreviadas. Incluye soporte para propiedades individuales, todas las propiedades y propiedades verticales y horizontales. Las clases se crean a partir de un mapa Sass predeterminado que va desde `.25rem` a `3rem`.

¿Utilizas el módulo de diseño de cuadrícula CSS? Considera usar [la utilidad gap](#gap).

### Notación

Las utilidades de espaciado que se aplican a todos los breakpoint, desde `xs` hasta `xxl`, no tienen abreviatura de breakpoint. Esto se debe a que esas clases se aplican desde `min-width: 0` en adelante y, por lo tanto, no están vinculadas a una media query. Sin embargo, los breakpoints restantes sí incluyen una abreviatura de breakpoint.

Las clases se nombran usando el formato `{property}{sides}-{size}` para `xs` y `{property}{sides}-{breakpoint}-{size}` para `sm`, `md`, `lg`, `xl` y `xxl`.

Donde *property* es uno de:

- `m` - para clases que establecen `margin`
- `p` - para clases que establecen `padding`

Donde *sides* es uno de:

- `t` - para clases que establecen `margin-top` o `padding-top`
- `b` - para clases que establecen `margin-bottom` o `padding-bottom`
- `s` - (start) para clases que establecen `margin-left` o `padding-left` en LTR, `margin-right` o `padding-right` en RTL
- `e` - (end) para clases que establecen `margin-right` o `padding-right` en LTR, `margin-left` o `padding-left` en RTL
- `x` - para clases que establecen tanto `*-left` como `*-right`
- `y` - para clases que establecen tanto `*-top` como `*-bottom`
- en blanco - para clases que establecen un `margin` o `padding` en los 4 lados del elemento

Donde *size* es uno de:

- `0` - para clases que eliminan el `margin` o `padding` al establecerlo en `0`
- `1` - (por defecto) para las clases que establecen el `margin` o `padding` en `$spacer * .25`
- `2` - (por defecto) para las clases que establecen el `margin` o `padding` en `$spacer * .5`
- `3` - (por defecto) para las clases que establecen el `margin` o `padding` en `$spacer`
- `4` - (por defecto) para las clases que establecen el `margin` o `padding` en `$spacer * 1.5`
- `5` - (por defecto) para las clases que establecen el `margin` o `padding` en `$spacer * 3`
- `auto` - para clases que establecen el `margin` en automático

(Puedes agregar más tamaños agregando entradas a la variable de mapa Sass `$spacers`).

### Ejemplos

Estos son algunos ejemplos representativos de estas clases:

```scss
.mt-0 {
  margin-top: 0 !important;
}

.ms-1 {
  margin-left: ($spacer * .25) !important;
}

.px-2 {
  padding-left: ($spacer * .5) !important;
  padding-right: ($spacer * .5) !important;
}

.p-3 {
  padding: $spacer !important;
}
```

### Centrado horizontal

Además, Bootstrap también incluye una clase `.mx-auto` para centrar horizontalmente contenido de nivel de bloque de ancho fijo, es decir, contenido que tiene `display: block` y un conjunto `width`, configurando los márgenes horizontales en `auto` .

<div class="bd-example">
  <div class="mx-auto" style="width: 200px; background-color: rgba(86,61,124,.15);">
    Elemento centrado
  </div>
</div>

```html
<div class="mx-auto" style="width: 200px;">
  Elemento centrado
</div>
```

## Margen negativo

En CSS, las propiedades `margin` pueden utilizar valores negativos (`padding` no). Estos márgenes negativos están **deshabilitados de forma predeterminada**, pero se pueden habilitar en Sass configurando `$enable-negative-margins: true`.

La sintaxis es casi la misma que las utilidades de margen positivo predeterminadas, pero con la adición de `n` antes del tamaño solicitado. Aquí hay una clase de ejemplo que es lo opuesto a `.mt-1`:

```scss
.mt-n1 {
  margin-top: -0.25rem !important;
}
```

##  Gap (espacios entre elementos)

Al usar `display: grid`, puede utilizar las utilidades `gap` en el contenedor de cuadrícula principal. Esto puede evitar tener que agregar utilidades de margen a elementos de cuadrícula individuales (hijos de un contenedor `display: grid`). Las utilidades Gap responden de forma predeterminada y se generan a través de nuestra API de utilidades, según el mapa Sass `$spacers`.

{{< example html >}}
<div class="d-grid gap-3">
  <div class="p-2 bg-light border">Elemento de cuadrícula 1</div>
  <div class="p-2 bg-light border">Elemento de cuadrícula 2</div>
  <div class="p-2 bg-light border">Elemento de cuadrícula 3</div>
</div>
{{< /example >}}

El soporte incluye opciones responsive para todos los puntos de interrupción de la cuadrícula de Bootstrap, así como seis tamaños del mapa `$spacers` (`0`–`5`). No hay clase de utilidad `.gap-auto` ya que es efectivamente lo mismo que `.gap-0`.

## Sass

### Mapas

Las utilidades de espaciado se declaran a través del mapa Sass y luego se generan con nuestra API de utilidades.

{{< scss-docs name="spacer-variables-maps" file="scss/_variables.scss" >}}

### API de utilidades

Las utilidades de espaciado se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a usar la API de utilidades.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-spacing" file="scss/_utilities.scss" >}}
