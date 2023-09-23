---
layout: docs
title: Figuras
description: Documentación y ejemplos para mostrar imágenes y texto relacionados con el componente de figure en Bootstrap.
group: content
toc: true
---

Cada vez que necesites mostrar una parte del contenido, como una imagen con un título opcional, considera usar `<figure>`.

Utiliza las clases incluidas `.figure`, `.figure-img` y `.figure-caption` para proporcionar algunos estilos básicos para los elementos HTML5 `<figure>` y `<figcaption>`. Las imágenes en las figuras no tienen un tamaño explícito, así que asegúrate de agregar la clase `.img-fluid` a tu `<img>` para que sea responsive.

{{< example >}}
<figure class="figure">
  {{< placeholder width="400" height="300" class="figure-img img-fluid rounded" >}}
  <figcaption class="figure-caption">Un título para la imagen de arriba.</figcaption>
</figure>
{{< /example >}}

Alinear el título de la figura es fácil con nuestras [utilidades de texto]({{< docsref "/utilities/text#text-alignment" >}}).

{{< example >}}
<figure class="figure">
  {{< placeholder width="400" height="300" class="figure-img img-fluid rounded" >}}
  <figcaption class="figure-caption text-end">Un título para la imagen de arriba.</figcaption>
</figure>
{{< /example >}}

## Sass

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

### Variables

{{< scss-docs name="figure-variables" file="scss/_variables.scss" >}}
