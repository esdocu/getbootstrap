---
layout: docs
title: Visibilidad
description: Controla la visibilidad de los elementos, sin modificar su visualización, con las utilidades de visibilidad.
group: utilities
---

Establece la propiedad `visibility` de los elementos con nuestras utilidades de visibilidad. Estas clases de utilidad no modifican el valor `display` en absoluto y no afectan el diseño: los elementos `.invisible` siguen ocupando espacio en la página.

{{< callout warning >}}
Los elementos con la clase `.invisible` se ocultarán tanto visualmente como para los usuarios de lectores de pantalla/tecnología de asistencia.
{{< /callout >}}

Aplica `.visible` o `.invisible` según sea necesario.

```html
<div class="visible">...</div>
<div class="invisible">...</div>
```

```scss
// Class
.visible {
  visibility: visible !important;
}
.invisible {
  visibility: hidden !important;
}
```

## Sass

### API de utilidades

Las utilidades de visibilidad se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a usar la API de utilidades.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-visibility" file="scss/_utilities.scss" >}}
