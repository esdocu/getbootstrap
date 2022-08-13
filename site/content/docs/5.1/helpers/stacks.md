---
layout: docs
title: Pilas
description: Helpers que se basan en nuestras utilidades flexbox para hacer que el diseño de componentes sea más rápido y fácil que nunca.
group: helpers
toc: true
---

Las pilas ofrecen un atajo para aplicar una serie de propiedades de flexbox para crear diseños rápida y fácilmente en Bootstrap. Todo el crédito por el concepto y la implementación es para el de código abierto [proyecto Pylon](https://almonk.github.io/pylon/).

{{< callout warning >}}
¡Aviso! La compatibilidad de las utilidades gap con flexbox se agregó recientemente a Safari, así que considera verificar la compatibilidad de tu navegador. El diseño de la cuadrícula no debería tener problemas. [Leer más](https://caniuse.com/flexbox-gap).
{{< /callout >}}

## Vertical

Usa `.vstack` para crear diseños verticales. Los elementos apilados ocupan el ancho completo de forma predeterminada. Usa las utilidades `.gap-*` para agregar espacio entre elementos.

{{< example >}}
<div class="vstack gap-3">
  <div class="bg-light border">Primer elemento</div>
  <div class="bg-light border">Segundo elemento</div>
  <div class="bg-light border">Tercer elemento</div>
</div>
{{< /example >}}

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

## Horizontal

Usa `.hstack` para diseños horizontales. Los elementos apilados están centrados verticalmente de forma predeterminada y solo ocupan el ancho necesario. Usa las utilidades `.gap-*` para agregar espacio entre elementos.

{{< example >}}
<div class="hstack gap-3">
  <div class="bg-light border">Primer elemento</div>
  <div class="bg-light border">Segundo elemento</div>
  <div class="bg-light border">Tercer elemento</div>
</div>
{{< /example >}}

Usando utilidades de margen horizontal como `.ms-auto` como espaciadores:

{{< example >}}
<div class="hstack gap-3">
  <div class="bg-light border">Primer elemento</div>
  <div class="bg-light border ms-auto">Segundo elemento</div>
  <div class="bg-light border">Tercer elemento</div>
</div>
{{< /example >}}

Y con [reglas verticales]({{< docsref "/helpers/vertical-rule" >}}):

{{< example >}}
<div class="hstack gap-3">
  <div class="bg-light border">Primer elemento</div>
  <div class="bg-light border ms-auto">Segundo elemento</div>
  <div class="vr"></div>
  <div class="bg-light border">Tercer elemento</div>
</div>
{{< /example >}}

## Ejemplos

Usa `.vstack` para apilar botones y otros elementos:

{{< example >}}
<div class="vstack gap-2 col-md-5 mx-auto">
  <button type="button" class="btn btn-secondary">Guardar cambios</button>
  <button type="button" class="btn btn-outline-secondary">Cancelar</button>
</div>
{{< /example >}}

Crea un formulario en línea con `.hstack`:

{{< example >}}
<div class="hstack gap-3">
  <input class="form-control me-auto" type="text" placeholder="Add your item here..." aria-label="Add your item here...">
  <button type="button" class="btn btn-secondary">Enviar</button>
  <div class="vr"></div>
  <button type="button" class="btn btn-outline-danger">Reiniciar</button>
</div>
{{< /example >}}

{{< callout info >}}
{{< partial "maybe-interested-2.md" >}}
{{< /callout >}}

## Sass

{{< scss-docs name="stacks" file="scss/helpers/_stacks.scss" >}}
