---
layout: docs
title: Close button
description: Un botón de cierre genérico para descartar contenido como modals y alerts.
group: components
toc: true
---

## Ejemplo

Proporciona una opción para descartar o cerrar un componente con `.btn-close`. El estilo predeterminado es limitado, pero altamente personalizable. Modifica las variables de Sass para reemplazar la `background-image` predeterminada. **Asegúrate de incluir texto para lectores de pantalla**, como hemos hecho con `aria-label`.

{{< example >}}
<button type="button" class="btn-close" aria-label="Cerrar"></button>
{{< /example >}}

## Estado deshabilitado

Los botones de cierre deshabilitados cambian su `opacity`. También hemos aplicado `pointer-events: none` y `user-select: none` para evitar que se activen los estados *active* y *hover*.

{{< example >}}
<button type="button" class="btn-close" disabled aria-label="Cerrar"></button>
{{< /example >}}

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

## Variante clara

Cambia el `.btn-close` predeterminado para que sea blanco con la clase `.btn-close-white`. Esta clase usa la propiedad `filter` para invertir la `background-image`.

{{< example class="bg-dark" >}}
<button type="button" class="btn-close btn-close-white" aria-label="Cerrar"></button>
<button type="button" class="btn-close btn-close-white" disabled aria-label="Cerrar"></button>
{{< /example >}}

## Sass

### Variables

{{< scss-docs name="close-variables" file="scss/_variables.scss" >}}
