---
layout: docs
title: Relación de aspecto
description: Usa pseudo elementos generados para hacer que un elemento mantenga la relación de aspecto de tu elección. Perfecto para manejar incrustaciones de video o presentación de diapositivas de manera responsive según el ancho del padre.
group: helpers
toc: true
---

## Acerca de ratio

Utiliza el asistente de proporción para administrar las proporciones de aspecto de contenido externo como `<iframe>`s, `<embed>`s, `<video>`s y `<object>`s. Estos helpers también se pueden usar en cualquier elemento secundario HTML estándar (por ejemplo, un `<div>` o `<img>`). Los estilos se aplican desde la clase principal `.ratio` directamente a la secundaria.

Las relaciones de aspecto se declaran en un mapa de Sass y se incluyen en cada clase a través de la variable CSS, que también permite [relaciones de aspecto personalizadas](#custom-ratios).

{{< callout info >}}
**¡Pro-Tip!** No necesitas `frameborder="0"` en tus `<iframe>`s, ya que lo sobrescribimos en [Reboot]({{< docsref "/content/reboot" >}}).
{{< /callout >}}

## Ejemplo

Envuelve cualquier inserción, como un `<iframe>`, en un elemento padre con una clase `.ratio` y una clase de relación de aspecto. El elemento secundario inmediato se dimensiona automáticamente gracias a nuestro selector universal `.ratio > *`.

{{< example >}}
<div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
</div>
{{< /example >}}

## Relaciones de aspecto

Las relaciones de aspecto se pueden personalizar con clases modificadoras. De forma predeterminada, se proporcionan las siguientes clases de relación:

{{< example class="bd-example-ratios" >}}
<div class="ratio ratio-1x1">
  <div>1x1</div>
</div>
<div class="ratio ratio-4x3">
  <div>4x3</div>
</div>
<div class="ratio ratio-16x9">
  <div>16x9</div>
</div>
<div class="ratio ratio-21x9">
  <div>21x9</div>
</div>
{{< /example >}}

## Proporciones personalizadas

Cada clase `.ratio-*` incluye una propiedad personalizada CSS (o variable CSS) en el selector. Puedes sobrescribir esta variable CSS para crear relaciones de aspecto personalizadas sobre la marcha con algunos cálculos rápidos de tu parte.

Por ejemplo, para crear una relación de aspecto de 2x1, establece `--bs-aspect-ratio: 50%` en `.ratio`.

{{< example class="bd-example-ratios" >}}
<div class="ratio" style="--bs-aspect-ratio: 50%;">
  <div>2x1</div>
</div>
{{< /example >}}

Esta variable CSS facilita la modificación de la relación de aspecto en los breakpoints. Lo siguiente es 4x3 para comenzar, pero cambia a un 2x1 personalizado en el breakpoint medium.

```scss
.ratio-4x3 {
  @include media-breakpoint-up(md) {
    --bs-aspect-ratio: 50%; // 2x1
  }
}
```

{{< example class="bd-example-ratios bd-example-ratios-breakpoint" >}}
<div class="ratio ratio-4x3">
  <div>4x3, then 2x1</div>
</div>
{{< /example >}}


## Sass map

Dentro de `_variables.scss`, puedes cambiar las relaciones de aspecto que deseas utilizar. Aquí está nuestro mapa `$ratio-aspect-ratios` por defecto. Modifica el mapa como desees y vuelve a compilar tu Sass para ponerlos en uso.

{{< scss-docs name="aspect-ratios" file="scss/_variables.scss" >}}
