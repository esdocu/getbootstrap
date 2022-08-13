---
layout: docs
title: Texto
description: Documentación y ejemplos de utilidades de texto comunes para controlar la alineación, el ajuste, el peso y más.
group: utilities
toc: true
---

## Alineación del texto

Realinea fácilmente el texto de los componentes con clases de alineación de texto. Para la alineación start, end y center, hay disponibles clases de respuesta que usan los mismos breakpoints de ancho de viewport que el sistema de cuadrícula.

{{< example >}}
<p class="text-start">Alineación de texto 'start' en todos los tamaños de viewport.</p>
<p class="text-center">Alineación de texto 'center' en todos los tamaños de viewport.</p>
<p class="text-end">Alineación de texto 'end' en todos los tamaños de viewport.</p>

<p class="text-sm-start">Alineación de texto 'start' en ventanas de tamaño SM (pequeño) o más ancho.</p>
<p class="text-md-start">Alineación de texto 'start' en ventanas de tamaño MD (mediano) o más ancho.</p>
<p class="text-lg-start">Alineación de texto 'start' en ventanas de tamaño LG (grande) o más anchas.</p>
<p class="text-xl-start">Alineación de texto 'start' en ventanas de tamaño XL (extra grande) o más anchas.</p>
{{< /example >}}

{{< callout info >}}
Ten en cuenta que no proporcionamos clases de utilidad para texto justificado. Si bien, estéticamente, el texto justificado puede parecer más atractivo, hace que el espacio entre palabras sea más aleatorio y, por lo tanto, más difícil de leer.
{{< /callout >}}

## Ajuste de texto y desbordamiento

Envuelve el texto con una clase `.text-wrap`.

{{< example >}}
<div class="badge bg-primary text-wrap" style="width: 6rem;">
  Este texto debe ajustarse.
</div>
{{< /example >}}

Evita que el texto se ajuste con una clase `.text-nowrap`.

{{< example >}}
<div class="text-nowrap bd-highlight" style="width: 8rem;">
  Este texto debe desbordar al padre.
</div>
{{< /example >}}

## Salto de palabra

Evita que largas cadenas de texto rompan el diseño de tus componentes usando `.text-break` para configurar `word-wrap: break-word` y `word-break: break-word`. Usamos `word-wrap` en lugar del `overflow-wrap` más común para una mayor compatibilidad con los navegadores, y agregamos el obsoleto `word-break: break-word` para evitar problemas con los contenedores flexibles.

{{< example >}}
<p class="text-break">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
{{< /example >}}

{{< callout warning >}}
Ten en cuenta que [no es posible dividir palabras en árabe](https://rtlstyling.com/posts/rtl-styling#3.-line-break), que es el idioma RTL más utilizado. Por lo tanto, `.text-break` se elimina de nuestro CSS compilado RTL.
{{< /callout >}}

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

## Transformación de texto

Transforma texto en componentes con clases de capitalización de texto.

{{< example >}}
<p class="text-lowercase">Texto en minúsculas.</p>
<p class="text-uppercase">Texto en mayúsculas.</p>
<p class="text-capitalize">Texto con primEras letras en mayúsculas.</p>
{{< /example >}}

Ten en cuenta que `.text-capitalize` solo cambia la primera letra de cada palabra, dejando intactas las mayúsculas y minúsculas de cualquier otra letra.

## Tamaño de fuente

Cambia rápidamente el `font-size` del texto. Mientras que nuestras clases de encabezado (p. ej., `.h1`–`.h6`) aplican `font-size`, `font-weight` y `line-height`, estas utilidades _solo_ aplican `font-size`. El tamaño de estas utilidades coincide con los elementos de encabezado de HTML, por lo que a medida que aumenta el número, su tamaño disminuye.

{{< example >}}
<p class="fs-1">Texto .fs-1</p>
<p class="fs-2">Texto .fs-2</p>
<p class="fs-3">Texto .fs-3</p>
<p class="fs-4">Texto .fs-4</p>
<p class="fs-5">Texto .fs-5</p>
<p class="fs-6">Texto .fs-6</p>
{{< /example >}}

Personaliza tus `font-size`s disponibles modificando el mapa de Sass `$font-sizes`.

## Peso de fuente y cursiva

Cambia rápidamente el `font-weight` o el `font-style` del texto con estas utilidades. Las utilidades `font-style` se abrevian como `.fst-*` y las utilidades `font-weight` se abrevian como `.fw-*`.

{{< example >}}
<p class="fw-bold">Texto en negrita.</p>
<p class="fw-bolder">Texto en negrita (relativo al elemento principal).</p>
<p class="fw-normal">Texto de peso normal.</p>
<p class="fw-light">Texto liviano.</p>
<p class="fw-lighter">Texto más ligero (en relación con el elemento principal).</p>
<p class="fst-italic">Texto en cursiva.</p>
<p class="fst-normal">Texto con estilo de fuente normal</p>
{{< /example >}}

## Altura de la línea

Cambia la altura de la línea con las utilidades `.lh-*`.

{{< example >}}
<p class="lh-1">Este es un párrafo largo escrito para mostrar cómo nuestras utilidades afectan la altura de línea de un elemento. Las clases se aplican al elemento mismo o, a veces, al elemento principal. Estas clases se pueden personalizar según sea necesario con nuestra API de utilidad.</p>
<p class="lh-sm">Este es un párrafo largo escrito para mostrar cómo nuestras utilidades afectan la altura de línea de un elemento. Las clases se aplican al elemento mismo o, a veces, al elemento principal. Estas clases se pueden personalizar según sea necesario con nuestra API de utilidad.</p>
<p class="lh-base">Este es un párrafo largo escrito para mostrar cómo nuestras utilidades afectan la altura de línea de un elemento. Las clases se aplican al elemento mismo o, a veces, al elemento principal. Estas clases se pueden personalizar según sea necesario con nuestra API de utilidad.</p>
<p class="lh-lg">Este es un párrafo largo escrito para mostrar cómo nuestras utilidades afectan la altura de línea de un elemento. Las clases se aplican al elemento mismo o, a veces, al elemento principal. Estas clases se pueden personalizar según sea necesario con nuestra API de utilidad.</p>
{{< /example >}}

## Monospace

Cambie una selección a nuestra pila de fuentes monoespaciadas con `.font-monospace`.

{{< example >}}
<p class="font-monospace">Esto está en monospace</p>
{{< /example >}}

## Restablecer color

Restablece el color de un texto o enlace con `.text-reset`, para que herede el color de su padre.

{{< example >}}
<p class="text-muted">
  Texto silenciado con un <a href="#" class="text-reset">vínculo de reinicio</a>.
</p>
{{< /example >}}

## Decoración de texto

Decora texto en componentes con clases de decoración de texto.

{{< example >}}
<p class="text-decoration-underline">Este texto tiene una línea debajo.</p>
<p class="text-decoration-line-through">Este texto tiene una línea que lo atraviesa.</p>
<a href="#" class="text-decoration-none">Se ha quitado la decoración de texto de este enlace</a>
{{< /example >}}

{{< callout info >}}
{{< partial "maybe-interested-2.md" >}}
{{< /callout >}}

## Sass

### Variables

{{< scss-docs name="font-variables" file="scss/_variables.scss" >}}

### Mapas

Las utilidades de tamaño de fuente se generan a partir de este mapa, en combinación con nuestra API de utilidades.

{{< scss-docs name="font-sizes" file="scss/_variables.scss" >}}

### API de utilidades

Las utilidades de fuentes y texto se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a usar la API de utilidades.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-text" file="scss/_utilities.scss" >}}
