---
layout: docs
title: Clearfix
description: Borra rápida y fácilmente el contenido flotante dentro de un contenedor agregando una utilidad clearfix.
group: helpers
aliases: "/docs/5.1/helpers/"
---

Borre fácilmente los `float`s agregando `.clearfix` **al elemento padre**. También se puedes utilizar como mixin.

Uso en HTML:

```html
<div class="clearfix">...</div>
```

El código fuente del mixin:

{{< scss-docs name="clearfix" file="scss/mixins/_clearfix.scss" >}}

Uso del mixin en SCSS:

```scss
.element {
  @include clearfix;
}
```

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

El siguiente ejemplo muestra cómo se puede utilizar clearfix. Sin clearfix, el div envolvente no se extendería alrededor de los botones, lo que causaría un diseño roto.

{{< example >}}
<div class="bg-info clearfix">
  <button type="button" class="btn btn-secondary float-start">Botón flotando a la izquierda</button>
  <button type="button" class="btn btn-secondary float-end">Botón flotando a la derecha</button>
</div>
{{< /example >}}
