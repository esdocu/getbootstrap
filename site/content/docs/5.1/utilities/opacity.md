---
layout: docs
title: Opacidad
description: Controla la opacidad de los elementos.
group: utilities
---

La propiedad `opacity` establece el nivel de opacidad de un elemento. El nivel de opacidad describe el nivel de transparencia, donde `1` no es transparente en absoluto, `.5` es 50% visible y `0` es completamente transparente.

Establece la `opacity` de un elemento usando las utilidades `.opacity-{value}`.

<div class="bd-example d-sm-flex">
  <div class="opacity-100 p-3 m-2 bg-primary text-light fw-bold rounded">100%</div>
  <div class="opacity-75 p-3 m-2 bg-primary text-light fw-bold rounded">75%</div>
  <div class="opacity-50 p-3 m-2 bg-primary text-light fw-bold rounded">50%</div>
  <div class="opacity-25 p-3 m-2 bg-primary text-light fw-bold rounded">25%</div>
</div>

```html
<div class="opacity-100">...</div>
<div class="opacity-75">...</div>
<div class="opacity-50">...</div>
<div class="opacity-25">...</div>
```

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

### API de utilidades

Las utilidades de opacidad se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a usar la API de utilidades.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-opacity" file="scss/_utilities.scss" >}}
