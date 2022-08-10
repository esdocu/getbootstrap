---
layout: docs
title: Color de fondo
description: Transmite significado a través de `background-color` (color de fondo) y agrega decoración con degradados.
group: utilities
toc: true
---

## Color de fondo

De forma similar a las clases de color de texto contextual, establece el fondo de un elemento en cualquier clase contextual. Las utilidades de fondo **no configuran `color`**, por lo que en algunos casos querrás usar `.text-*` [utilidades de color]({{< docsref "/utilities/colors" >}}).

{{< example >}}
{{< colors.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="p-3 mb-2 bg-{{ .name }}{{ if .contrast_color }} text-{{ .contrast_color }}{{ else }} text-white{{ end }}">.bg-{{ .name }}</div>
{{- end -}}
{{< /colors.inline >}}
<div class="p-3 mb-2 bg-body text-dark">.bg-body</div>
<div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
<div class="p-3 mb-2 bg-transparent text-dark">.bg-transparent</div>
{{< /example >}}

## Gradiente de fondo

Al agregar una clase `.bg-gradient`, se agrega un degradado lineal como imagen de fondo a los fondos. Este degradado comienza con un blanco semitransparente que se desvanece hasta el fondo.

¿Necesitas un degradado personalizado en tu CSS? Simplemente agrega `background-image: var(--bs-gradient);`.

{{< markdown >}}
{{< colors.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="p-3 mb-2 bg-{{ .name }} bg-gradient{{ with .contrast_color }} text-{{ . }}{{ else }} text-white{{ end }}">.bg-{{ .name }}.bg-gradient</div>
{{- end -}}
{{< /colors.inline >}}
{{< /markdown >}}

## Opacidad

<small class="d-inline-flex px-2 py-1 font-monospace text-muted border rounded-3">Añadido en v5.1.0</small>

A partir de v5.1.0, las utilidades `background-color` se generan con Sass usando variables CSS. Esto permite cambios de color en tiempo real sin compilación y cambios dinámicos de transparencia alfa.

### ¿Cómo funciona background-color?

Analicemos nuestra utilidad predeterminada `.bg-success`.

```css
.bg-success {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important;
}
```

Usamos una versión RGB de nuestra variable CSS `--bs-success` (con el valor de `25, 135, 84`) y adjuntamos una segunda variable CSS, `--bs-bg-opacity`, para la transparencia alfa (con un valor predeterminado `1` gracias a una variable CSS local). Esto significa que cada vez que usas `.bg-success` ahora, tu valor de `color` calculado es `rgba(25, 135, 84, 1)`. La variable CSS local dentro de cada clase `.bg-*` evita problemas de herencia, por lo que las instancias anidadas de las utilidades no tienen automáticamente una transparencia alfa modificada.

### Ejemplo

Para cambiar esa opacidad, sobrescribe `--bs-bg-opacity` a través de estilos personalizados o estilos en línea.

{{< example >}}
<div class="bg-success p-2 text-white">Este es el fondo de success predeterminado</div>
<div class="bg-success p-2" style="--bs-bg-opacity: .5;">Este es el fondo de success con una opacidad del 50%</div>
{{< /example >}}

O bien, elije cualquiera de las utilidades `.bg-opacity`:

{{< example >}}
<div class="bg-success p-2 text-white">Este es el fondo success predeterminado</div>
<div class="bg-success p-2 text-white bg-opacity-75">Este es un fondo success con una opacidad del 75%</div>
<div class="bg-success p-2 text-dark bg-opacity-50">Este es un fondo success con una opacidad del 50%</div>
<div class="bg-success p-2 text-dark bg-opacity-25">Este es un fondo success con una opacidad del 25%</div>
<div class="bg-success p-2 text-dark bg-opacity-10">Este es un fondo success con una opacidad del 10%</div>
{{< /example >}}

## Sass

Además de la siguiente funcionalidad de Sass, considera leer sobre nuestras [propiedades personalizadas CSS]({{< docsref "/customize/css-variables" >}}) (también conocidas como variables CSS) para colores y más.

### Variables

La mayoría de las utilidades de `background-color` son generadas por nuestros colores de tema, reasignados desde nuestras variables de paleta de colores genéricas.

{{< scss-docs name="color-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="theme-color-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="variable-gradient" file="scss/_variables.scss" >}}

Los colores en escala de grises también están disponibles, pero solo se usa un subconjunto para generar utilidades.

{{< scss-docs name="gray-color-variables" file="scss/_variables.scss" >}}

### Mapas

Luego, los colores del tema se colocan en un mapa de Sass para que podamos recorrerlos para generar nuestras utilidades, modificadores de componentes y más.

{{< scss-docs name="theme-colors-map" file="scss/_variables.scss" >}}

Los colores en escala de grises también están disponibles como mapa Sass. **Este mapa no se usa para generar utilidades.**

{{< scss-docs name="gray-colors-map" file="scss/_variables.scss" >}}

Los colores RGB se generan a partir de un mapa Sass separado:

{{< scss-docs name="theme-colors-rgb" file="scss/_maps.scss" >}}

Y las opacidades del color de fondo se basan en esto con su propio mapa que consume la API de utilidades:

{{< scss-docs name="utilities-bg-colors" file="scss/_maps.scss" >}}

### Mixins

**No se utilizan mixins para generar nuestras utilidades de fondo**, pero tenemos algunos mixins adicionales para otras situaciones en las que te gustaría crear tus propios degradados.

{{< scss-docs name="gradient-bg-mixin" file="scss/mixins/_gradients.scss" >}}

{{< scss-docs name="gradient-mixins" file="scss/mixins/_gradients.scss" >}}

### API de utilidades

Las utilidades de fondo se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a usar la API de utilidades.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-bg-color" file="scss/_utilities.scss" >}}
