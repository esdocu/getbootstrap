---
layout: docs
title: Imágenes
description: Documentación y ejemplos para optar por que las imágenes tengan un comportamiento responsive (para que nunca se vuelvan más anchas que sus padres) y agregarles estilos livianos, todo a través de clases.
group: content
toc: true
---

## Imágenes responsive

Las imágenes en Bootstrap se hacen responsive con `.img-fluid`. Esto aplica `max-width: 100%;` y `height: auto;` a la imagen para que se escale con el ancho de su elemento padre.

{{< example >}}
{{< placeholder width="100%" height="250" class="bd-placeholder-img-lg img-fluid" text="Responsive image" >}}
{{< /example >}}

## Miniaturas de imágenes

Además de nuestras [utilidades border-radius]({{< docsref "/utilities/borders" >}}), puedes usar `.img-thumbnail` para darle a una imagen una apariencia de borde redondeado de 1px.

{{< example >}}
{{< placeholder width="200" height="200" class="img-thumbnail" title="Una imagen placeholder cuadrada genérica con un borde blanco alrededor, lo que la hace parecerse a una fotografía tomada con una cámara instantánea antigua" >}}
{{< /example >}}

## Alinear imágenes

Alinea las imágenes con las [clases flotantes auxiliares]({{< docsref "/utilities/float" >}}) o [clases de alineación de texto]({{< docsref "/utilities/text#text-alignment" >}}). Las imágenes a nivel de `block` se pueden centrar usando [la clase de utilidad de margen `.mx-auto`]({{< docsref "/utilities/spacing#horizontal-centering" >}}).

{{< example >}}
{{< placeholder width="200" height="200" class="rounded float-start" >}}
{{< placeholder width="200" height="200" class="rounded float-end" >}}
{{< /example >}}


{{< example >}}
{{< placeholder width="200" height="200" class="rounded mx-auto d-block" >}}
{{< /example >}}

{{< example >}}
<div class="text-center">
  {{< placeholder width="200" height="200" class="rounded" >}}
</div>
{{< /example >}}


## Picture

Si estás utilizando el elemento `<picture>` para especificar múltiples elementos `<source>` para un `<img>` específico, asegúrate de agregar las clases `.img-*` a `<img>` y no a la etiqueta `<picture>`.

```html
<picture>
  <source srcset="..." type="image/svg+xml">
  <img src="..." class="img-fluid img-thumbnail" alt="...">
</picture>
```

## Sass

### Variables

Las variables están disponibles para las miniaturas de imágenes.

{{< scss-docs name="thumbnail-variables" file="scss/_variables.scss" >}}
