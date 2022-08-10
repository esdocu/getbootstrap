---
layout: docs
title: Color
description: Bootstrap está respaldado por un extenso sistema de colores que tematiza nuestros estilos y componentes. Esto permite una personalización y extensión más completas para cualquier proyecto.
group: customize
toc: true
---

## Colores del tema

Usamos un subconjunto de todos los colores para crear una paleta de colores más pequeña para generar esquemas de color, también disponible como variables Sass y un mapa Sass en el archivo `scss/_variables.scss` de Bootstrap.

<div class="row">
  {{< theme-colors.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
    <div class="col-md-4">
      <div class="p-3 mb-3 bg-{{ .name }} {{ if .contrast_color }}text-{{ .contrast_color }}{{ else }}text-white{{ end }}">{{ .name | title }}</div>
    </div>
  {{ end -}}
  {{< /theme-colors.inline >}}
</div>

Todos estos colores están disponibles como mapa Sass, `$theme-colors`.

{{< scss-docs name="theme-colors-map" file="scss/_variables.scss" >}}

Consulta nuestros documentos de [mapas y bucles de Sass]({{< docsref "/customize/sass#maps-and-loops" >}}) para saber cómo modificar estos colores.

## Todos los colores

Todos los colores de Bootstrap están disponibles como variables Sass y un mapa Sass en el archivo `scss/_variables.scss`. Para evitar aumentar el tamaño de los archivos, no creamos clases de color de texto o de fondo para cada una de estas variables. En su lugar, elegimos un subconjunto de estos colores para una [paleta de temas](#theme-colors).

Asegúrate de controlar las relaciones de contraste a medida que personalizas los colores. Como se muestra a continuación, hemos agregado tres proporciones de contraste a cada uno de los colores principales: una para los colores actuales de la muestra, una contra el blanco y otra contra el negro.

<div class="row font-monospace">
  {{< theme-colors.inline >}}
  {{- range $color := $.Site.Data.colors }}
    {{- if (and (not (eq $color.name "white")) (not (eq $color.name "gray")) (not (eq $color.name "gray-dark"))) }}
    <div class="col-md-4 mb-3">
      <div class="p-3 mb-2 position-relative swatch-{{ $color.name }}">
        <strong class="d-block">${{ $color.name }}</strong>
        {{ $color.hex }}
      </div>
      {{ range (seq 100 100 900) }}
      <div class="p-3 bd-{{ $color.name }}-{{ . }}">${{ $color.name }}-{{ . }}</div>
      {{ end }}
    </div>
    {{ end -}}
  {{ end -}}

  <div class="col-md-4 mb-3">
    <div class="p-3 mb-2 position-relative swatch-gray-500">
      <strong class="d-block">$gray-500</strong>
      #adb5bd
    </div>
  {{- range $.Site.Data.grays }}
    <div class="p-3 bd-gray-{{ .name }}">$gray-{{ .name }}</div>
  {{ end -}}
  </div>
  {{< /theme-colors.inline >}}

  <div class="col-md-4 mb-3">
    <div class="p-3 mb-2 bd-black text-white">
      <strong class="d-block">$black</strong>
      #000
    </div>
    <div class="p-3 mb-2 bd-white border">
      <strong class="d-block">$white</strong>
      #fff
    </div>
  </div>
</div>

### Notas sobre Sass

Sass no puede generar variables programáticamente, por lo que creamos variables manualmente para cada tinte y sombreado nosotros mismos. Especificamos el valor del punto medio (por ejemplo, `$blue-500`) y usamos funciones de color personalizadas para teñir (aclarar) o sombrear (oscurecer) nuestros colores a través de la función de color `mix()` de Sass.

Usar `mix()` no es lo mismo que `lighten()` y `darken()`: el primero combina el color especificado con blanco o negro, mientras que el último solo ajusta el valor de luminosidad de cada color. El resultado es un conjunto de colores mucho más completo, como se muestra en esta [demostración de CodePen](https://codepen.io/emdeoh/pen/zYOQOPB).

Nuestras funciones `tint-color()` y `shade-color()` usan `mix()` junto con nuestra variable `$theme-color-interval`, que especifica un valor porcentual escalonado para cada color mezclado que producimos. Consulta los archivos `scss/_functions.scss` y `scss/_variables.scss` para obtener el código fuente completo.

## Mapas Sass de colores

Los archivos fuente de Sass de Bootstrap incluyen tres mapas para ayudarte a recorrer rápida y fácilmente una lista de colores y sus valores hexadecimales.

- `$colors` enumera todos nuestros colores base disponibles (`500`)
- `$theme-colors` enumera todos los colores del tema con nombres semánticos (que se muestran a continuación)
- `$grays` enumera todos los tintes y tonos de gris

Dentro de `scss/_variables.scss`, encontrarás las variables de color de Bootstrap y el mapa de Sass. Aquí hay un ejemplo del mapa Sass `$colors`:

{{< scss-docs name="colors-map" file="scss/_variables.scss" >}}

Agrega, elimina o modifica valores dentro del mapa para actualizar cómo se usan en muchos otros componentes. Desafortunadamente, en este momento, no todos los componentes utilizan este mapa de Sass. Las actualizaciones futuras se esforzarán por mejorar esto. Hasta entonces, planea hacer uso de las variables `${color}` y este mapa de Sass.

### Ejemplo

Así es como puedes usarlos en tu Sass:

```scss
.alpha { color: $purple; }
.beta {
  color: $yellow-300;
  background-color: $indigo-900;
}
```

Las clases de utilidad [Color]({{< docsref "/utilities/colors" >}}) y [background]({{< docsref "/utilities/background" >}}) también están disponibles para configurar `color` y `background-color` utilizando los valores de color `500`.

## Generación de utilidades

<small class="d-inline-flex px-2 py-1 font-monospace text-muted border rounded-3">Añadido en v5.1.0</small>

Bootstrap no incluye las utilidades `color` y `background-color` para cada variable de color, pero puedes generarlas tú mismo con nuestra [utility API]({{< docsref "/utilities/api" >}}) y nuestra mapas Sass extendido añadido en v5.1.0.

1. Para comenzar, asegúrate de haber importado nuestras funciones, variables, mixins y utilidades.
2. Utiliza nuestra función `map-merge-multiple()` para fusionar rápidamente múltiples mapas Sass en un nuevo mapa.
3. Fusiona este nuevo mapa combinado para ampliar cualquier utilidad con un nombre de clase `{color}-{level}`.

Aquí hay un ejemplo que genera utilidades de color de texto (por ejemplo, `.text-purple-500`) siguiendo los pasos anteriores.

```scss
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";

$all-colors: map-merge-multiple($blues, $indigos, $purples, $pinks, $reds, $oranges, $yellows, $greens, $teals, $cyans);

$utilities: map-merge(
  $utilities,
  (
    "color": map-merge(
      map-get($utilities, "color"),
      (
        values: map-merge(
          map-get(map-get($utilities, "color"), "values"),
          (
            $all-colors
          ),
        ),
      ),
    ),
  )
);

@import "bootstrap/scss/utilities/api";
```

Esto generará nuevas utilidades `.text-{color}-{level}` para cada color y nivel. También puedes hacer lo mismo con cualquier otra utilidad y propiedad.
