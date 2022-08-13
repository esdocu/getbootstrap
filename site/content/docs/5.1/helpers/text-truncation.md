---
layout: docs
title: Texto truncado
description: Trunca cadenas largas de texto con puntos suspensivos.
group: helpers
toc: false
---

Para contenido más largo, puedes agregar una clase `.text-truncate` para truncar el texto con puntos suspensivos. **Requiere `display: inline-block` o `display: block`.**

{{< example >}}
<!-- Block level -->
<div class="row">
  <div class="col-2 text-truncate">
    Este texto es bastante largo y se truncará una vez que se muestre.
  </div>
</div>

<!-- Inline level -->
<span class="d-inline-block text-truncate" style="max-width: 150px;">
  Este texto es bastante largo y se truncará una vez que se muestre.
</span>
{{< /example >}}

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}