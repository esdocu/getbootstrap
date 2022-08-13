---
layout: docs
title: Regla vertical
description: Utiliza el asistente de regla vertical personalizado para crear divisores verticales como el elemento `<hr>`.
group: helpers
toc: true
---

## ¿Cómo funciona?

Las reglas verticales están inspiradas en el elemento `<hr>`, lo que te permite crear divisores verticales en diseños comunes. Tienen el mismo estilo que los elementos `<hr>`:

- Son `1px` de ancho
- Tienen `min-height` de `1em`
- Su color se establece a través de `currentColor` y `opacity`

Personalízalos con estilos adicionales según sea necesario.

## Ejemplo

{{< example >}}
<div class="vr"></div>
{{< /example >}}

Las reglas verticales escalan su altura en diseños flexibles:

{{< example >}}
<div class="d-flex" style="height: 200px;">
  <div class="vr"></div>
</div>
{{< /example >}}

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

## Con pilas (stacks)

También se pueden usar en [stacks]({{< docsref "/helpers/stacks" >}}):

{{< example >}}
<div class="hstack gap-3">
  <div class="bg-light border">Primer elemento</div>
  <div class="bg-light border ms-auto">Segundo elemento</div>
  <div class="vr"></div>
  <div class="bg-light border">Tercer elemento</div>
</div>
{{< /example >}}
