---
layout: docs
title: Float
description: Configura la flotabilidad en cualquier elemento, a través de cualquier breakpoint, utilizando nuestras utilidades flotantes responsive.
group: utilities
toc: true
---

## Descripción general

Estas clases de utilidad hacen flotar un elemento a la izquierda o a la derecha, o deshabilitan la flotación, en función del tamaño actual del viewport mediante la [propiedad `float` de CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/float). Se incluye `!important` para evitar problemas de especificidad. Estos utilizan los mismos breakpoints de viewport que nuestro sistema de cuadrícula. Ten en cuenta que las utilidades flotantes no tienen efecto en los elementos flexibles.

{{< example >}}
<div class="float-start">Float start en todos los tamaños de viewport</div><br>
<div class="float-end">Float end en todos los tamaños de viewport</div><br>
<div class="float-none">Don't float en todos los tamaños de viewport</div>
{{< /example >}}

## Responsive

También existen variaciones responsive para cada valor `float`.

{{< example >}}
<div class="float-sm-start">Float start en viewports de tamaño SM (small) o superior</div><br>
<div class="float-md-start">Float start en viewports de tamaño MD (medium) o superior</div><br>
<div class="float-lg-start">Float start en viewports de tamaño LG (large) o superior</div><br>
<div class="float-xl-start">Float start en viewports de tamaño XL (extra-large) o superior</div><br>
{{< /example >}}

Aquí están todas las clases soportadas:

{{< markdown >}}
{{< float.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.float{{ .abbr }}-start`
- `.float{{ .abbr }}-end`
- `.float{{ .abbr }}-none`
{{- end -}}
{{< /float.inline >}}
{{< /markdown >}}

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

## Sass

### API de utilidades

Las utilidades flotantes se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a usar la API de utilidades.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-float" file="scss/_utilities.scss" >}}
