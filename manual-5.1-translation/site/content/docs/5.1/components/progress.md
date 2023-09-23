---
layout: docs
title: Progress
description: Documentación y ejemplos para el uso de barras de progreso personalizadas de Bootstrap con soporte para barras apiladas, fondos animados y etiquetas de texto.
group: components
toc: true
---

## ¿Cómo funciona progress?

Los componentes de progreso se construyen con dos elementos HTML, algo de CSS para establecer el ancho y algunos atributos. No usamos [el elemento HTML5 `<progress>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress), lo que garantiza que puedes apilar barras de progreso, animarlas y colocar etiquetas de texto sobre ellos.

- Usamos `.progress` como contenedor para indicar el valor máximo de la barra de progreso.
- Usamos la `.progress-bar` interna para indicar el progreso hasta el momento.
- La `.progress-bar` requiere un estilo en línea, una clase de utilidad o un CSS personalizado para establecer su ancho.
- La `.progress-bar` también requiere algunos atributos `role` y `aria` para que sea accesible.

Pon todo eso junto, y tienes los siguientes ejemplos.

{{< example >}}
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{< /example >}}

Bootstrap proporciona un puñado de [utilidades para configurar el ancho]({{< docsref "/utilities/sizing" >}}). Dependiendo de tus necesidades, estos pueden ayudar a configurar rápidamente el progreso.

{{< example >}}
<div class="progress">
  <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{< /example >}}

## Etiquetas

Agrega etiquetas a tus barras de progreso colocando texto dentro de `.progress-bar`.

{{< example >}}
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>
{{< /example >}}

## Altura

Solo establecemos un valor de `height` en `.progress`, por lo que si cambias ese valor, la `.progress-bar` interna cambiará automáticamente de tamaño en consecuencia.

{{< example >}}
<div class="progress" style="height: 1px;">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress" style="height: 20px;">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{< /example >}}

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

## Fondos

Usa clases de utilidad de fondo para cambiar la apariencia de las barras de progreso individuales.

{{< example >}}
<div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{< /example >}}

## Múltiples barras

Incluye múltiples barras de progreso en un componente de progreso si lo necesitas.

{{< example >}}
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{< /example >}}

## A rayas

Agrega `.progress-bar-striped` a cualquier `.progress-bar` para aplicar una rayas con un degradado CSS sobre el color de fondo de la barra de progreso.

{{< example >}}
<div class="progress">
  <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{< /example >}}

## Rayas animadas

El degradado rayado también se puede animar. Agrega `.progress-bar-animated` a `.progress-bar` para animar las franjas de derecha a izquierda a través de animaciones CSS3.

{{< example >}}
<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
</div>
{{< /example >}}

{{< callout info >}}
{{< partial "maybe-interested-2.md" >}}
{{< /callout >}}

## Sass

### Variables

{{< scss-docs name="progress-variables" file="scss/_variables.scss" >}}

### Keyframes

Se utiliza para crear animaciones CSS para `.progress-bar-animated`. Incluido en `scss/_progress-bar.scss`.

{{< scss-docs name="progress-keyframes" file="scss/_progress.scss" >}}
