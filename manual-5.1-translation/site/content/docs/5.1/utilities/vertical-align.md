---
layout: docs
title: Alineación vertical
description: Cambia fácilmente la alineación vertical de los elementos en línea, de bloque en línea, de tabla en línea y de celda de tabla.
group: utilities
---

Cambia la alineación de los elementos con las utilidades [`vertical-alignment`](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align). Ten en cuenta que la alineación vertical solo afecta a los elementos en línea (inline), bloque en línea (inline-block), tabla en línea (inline-table) y celda de tabla.

Elije entre `.align-baseline`, `.align-top`, `.align-middle`, `.align-bottom`, `.align-text-bottom` y `.align-text-top` según sea necesario .

Para centrar verticalmente el contenido que no está en línea (como `<div>`s y más), usa nuestras [utilidades de cuadro flexible]({{< docsref "/utilities/flex#align-items" >}}).

Con elementos en línea:

{{< example >}}
<span class="align-baseline">baseline</span>
<span class="align-top">superior</span>
<span class="align-middle">medio</span>
<span class="align-bottom">inferior</span>
<span class="align-text-top">texto-superior</span>
<span class="align-text-bottom">texto-inferior</span>
{{< /example >}}

Con celdas de tabla:

{{< example >}}
<table style="height: 100px;">
  <tbody>
    <tr>
      <td class="align-baseline">baseline</td>
      <td class="align-top">superior</td>
      <td class="align-middle">medio</td>
      <td class="align-bottom">inferior</td>
      <td class="align-text-top">texto-superior</td>
      <td class="align-text-bottom">texto-inferior</td>
    </tr>
  </tbody>
</table>
{{< /example >}}

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

## Sass

### API de utilidades

Las utilidades de alineación vertical se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a usar la API de utilidades.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-vertical-align" file="scss/_utilities.scss" >}}
