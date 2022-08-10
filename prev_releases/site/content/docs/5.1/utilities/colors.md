---
layout: docs
title: Colores
description: Transmite significado a través del `color` con un puñado de clases de utilidad de color. También incluye soporte para diseñar enlaces con estado hover.
group: utilities
toc: true
---

## Colores

Colorea el texto con utilidades de color. Si deseas colorear los enlaces, puedes usar las [clases auxiliares `.link-*`]({{< docsref "/helpers/colored-links" >}}) que tienen estados `:hover` y `:focus` .

{{< example >}}
{{< colors.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<p class="text-{{ .name }}{{ with .contrast_color }} bg-{{ . }}{{ end }}">.text-{{ .name }}</p>
{{- end -}}
{{< /colors.inline >}}
<p class="text-body">.text-body</p>
<p class="text-muted">.text-muted</p>
<p class="text-white bg-dark">.text-white</p>
<p class="text-black-50">.text-black-50</p>
<p class="text-white-50 bg-dark">.text-white-50</p>
{{< /example >}}

{{< callout warning >}}
**En desuso:** Con la adición de las utilidades `.text-opacity-*` y las variables CSS para las utilidades de texto, `.text-black-50` y `.text-white-50` quedan en desuso a partir de la v5.1.0 . Se eliminarán en v6.0.0.
{{< /callout >}}

{{< callout info >}}
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## Opacidad

<small class="d-inline-flex px-2 py-1 font-monospace text-muted border rounded-3">Añadido en v5.1.0</small>

A partir de v5.1.0, las utilidades de color de texto se generan con Sass usando variables CSS. Esto permite cambios de color en tiempo real sin compilación y cambios dinámicos de transparencia alfa.

### ¿Cómo funcionan los colores?

Analicemos nuestra utilidad predeterminada `.text-primary`.

```css
.text-primary {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
}
```

Usamos una versión RGB de nuestra variable CSS `--bs-primary` (con el valor de `13, 110, 253`) y adjuntamos una segunda variable CSS, `--bs-text-opacity`, para la transparencia alfa (con un valor predeterminado `1` gracias a una variable CSS local). Esto significa que cada vez que usas `.text-primary` ahora, tu valor de `color` calculado es `rgba(13, 110, 253, 1)`. La variable CSS local dentro de cada clase `.text-*` evita problemas de herencia, por lo que las instancias anidadas de las utilidades no tienen automáticamente una transparencia alfa modificada.

### Ejemplo

Para cambiar la opacidad, sobrescribe `--bs-text-opacity` a través de estilos personalizados o estilos en línea.

{{< example >}}
<div class="text-primary">Este es el texto primary predeterminado</div>
<div class="text-primary" style="--bs-text-opacity: .5;">Este es un texto primary con una opacidad del 50%</div>
{{< /example >}}

O bien, elije cualquiera de las utilidades `.text-opacity`:

{{< example >}}
<div class="text-primary">Este es el texto primary predeterminado</div>
<div class="text-primary text-opacity-75">Este es un texto primary con una opacidad del 75%</div>
<div class="text-primary text-opacity-50">Este es un texto primary con una opacidad del 50%</div>
<div class="text-primary text-opacity-25">Este es un texto primary con una opacidad del 25%</div>
{{< /example >}}

## Especificidad

A veces, las clases contextuales no se pueden aplicar debido a la especificidad de otro selector. En algunos casos, una solución alternativa suficiente es envolver el contenido de tu elemento en un `<div>` con la clase deseada.

## Sass

Además de la siguiente funcionalidad de Sass, considera leer sobre nuestras [propiedades personalizadas CSS]({{< docsref "/customize/css-variables" >}}) (también conocidas como variables CSS) para colores y más.

### Variables

La mayoría de las utilidades de `color` son generadas por nuestros colores de tema, reasignados desde nuestras variables genéricas de paleta de colores.

{{< scss-docs name="color-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="theme-color-variables" file="scss/_variables.scss" >}}

Los colores en escala de grises también están disponibles, pero solo se usa un subconjunto para generar utilidades.

{{< scss-docs name="gray-color-variables" file="scss/_variables.scss" >}}

### Mapa

Luego, los colores del tema se colocan en un mapa de Sass para que podamos recorrerlos para generar nuestras utilidades, modificadores de componentes y más.

{{< scss-docs name="theme-colors-map" file="scss/_variables.scss" >}}

Los colores en escala de grises también están disponibles como mapa Sass. **Este mapa no se usa para generar utilidades.**

{{< scss-docs name="gray-colors-map" file="scss/_variables.scss" >}}

Los colores RGB se generan a partir de un mapa Sass separado:

{{< scss-docs name="theme-colors-rgb" file="scss/_maps.scss" >}}

Y las opacidades de color se basan en esto con su propio mapa que consume la API de utilidades:

{{< scss-docs name="utilities-text-colors" file="scss/_maps.scss" >}}

### API de utilidades

Las utilidades de color se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a usar la API de utilidades.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-color" file="scss/_utilities.scss" >}}
