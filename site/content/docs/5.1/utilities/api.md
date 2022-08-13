---
layout: docs
title: API de utilidades
description: La API de utilidad es una herramienta basada en Sass para generar clases de utilidad.
group: utilities
aliases: "/docs/5.1/utilities/"
toc: true
---

Las utilidades Bootstrap se generan con nuestra API de utilidades y se pueden usar para modificar o ampliar nuestro conjunto predeterminado de clases de utilidades a través de Sass. Nuestra API de utilidad se basa en una serie de mapas y funciones de Sass para generar familias de clases con varias opciones. Si no estás familiarizado con los mapas de Sass, lee la [documentación oficial de Sass](https://sass-lang.com/documentation/values/maps) para comenzar.

El mapa `$utilities` contiene todas nuestras utilidades y luego se fusiona con tu mapa `$utilities` personalizado, si está presente. El mapa de utilidades contiene una lista codificada de grupos de utilidades que aceptan las siguientes opciones:

{{< bs-table "table text-start" >}}
| Opción | Tipo | Por&nbsp;defecto | Descripción |
| --- | --- | --- | --- |
| [`property`](#property) | **Requerido** | – | Nombre de la propiedad, puede ser un string o un array de strings (por ejemplo, margins o paddings horizontales). |
| [`values`](#values) | **Requerido** | – | Lista de valores o un mapa si no deseas que el nombre de la clase sea el mismo que el valor. Si se usa `null` como clave de mapa, `class` no se antepone al nombre de la clase. |
| [`class`](#class) | Opcional | null | Nombre de la clase generada. Si no se proporciona y `property` es un array de strings, `class` tomará por defecto el primer elemento del array `property`. Si no se proporciona y `property` es un string, las claves de `values` se utilizan para los nombres de `class`. |
| [`css-var`](#css-variable-utilities) | Opcional | `false` | Boolean para generar variables CSS en lugar de reglas CSS. |
| [`local-vars`](#local-css-variables) | Opcional | null | Mapa de variables CSS locales para generar además de las reglas CSS. |
| [`state`](#states) | Opcional | null | Lista de variantes de pseudoclases (p. ej., `:hover` o `:focus`) para generar. |
| [`responsive`](#responsive) | Opcional | `false` | Booleano que indica si se deben generar clases responsive. |
| `rfs` | Opcional | `false` | Booleano para habilitar el [cambio de escala fluido con RFS]({{< docsref "/getting-started/rfs" >}}). |
| [`print`](#print) | Opcional | `false` | Booleano que indica si es necesario generar clases de impresión. |
| `rtl` | Opcional | `true` | Booleano que indica si la utilidad debe mantenerse en RTL. |
{{< /bs-table >}}

## API explicada

Todas las variables de utilidad se agregan a la variable `$utilities` dentro de nuestra hoja de estilo `_utilities.scss`. Cada grupo de utilidades se parece a esto:

```scss
$utilities: (
  "opacity": (
    property: opacity,
    values: (
      0: 0,
      25: .25,
      50: .5,
      75: .75,
      100: 1,
    )
  )
);
```

Lo que genera lo siguiente:

```css
.opacity-0 { opacity: 0; }
.opacity-25 { opacity: .25; }
.opacity-50 { opacity: .5; }
.opacity-75 { opacity: .75; }
.opacity-100 { opacity: 1; }
```

### Property

La clave de `property` requerida debe configurarse para cualquier utilidad y debe contener una propiedad CSS válida. Esta propiedad se utiliza en el conjunto de reglas de la utilidad generada. Cuando se omite la clave `class`, también sirve como el nombre de clase predeterminado. Considera la utilidad `text-decoration`:

```scss
$utilities: (
  "text-decoration": (
    property: text-decoration,
    values: none underline line-through
  )
);
```

Salida:

```css
.text-decoration-none { text-decoration: none !important; }
.text-decoration-underline { text-decoration: underline !important; }
.text-decoration-line-through { text-decoration: line-through !important; }
```

### Values

Usa la clave `values` para especificar qué valores para la `property` especificada deben usarse en los nombres y reglas de clase generados. Puede ser una lista o un mapa (establecido en las utilidades o en una variable Sass).

Como lista, como con las [utilidades `text-decoration`]({{< docsref "/utilities/text#text-decoration" >}}):

```scss
values: none underline line-through
```

Como mapa, como con las [utilidades `opacity`]({{< docsref "/utilities/opacity" >}}):

```scss
values: (
  0: 0,
  25: .25,
  50: .5,
  75: .75,
  100: 1,
)
```

Como una variable de Sass que establece la lista o el mapa, como en nuestras [utilidades `position`]({{< docsref "/utilities/position" >}}):

```scss
values: $position-values
```

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

### Class

Utiliza la opción `class` para cambiar el prefijo de clase utilizado en el CSS compilado. Por ejemplo, para cambiar de `.opacity-*` a `.o-*`:

```scss
$utilities: (
  "opacity": (
    property: opacity,
    class: o,
    values: (
      0: 0,
      25: .25,
      50: .5,
      75: .75,
      100: 1,
    )
  )
);
```

Salida:

```css
.o-0 { opacity: 0 !important; }
.o-25 { opacity: .25 !important; }
.o-50 { opacity: .5 !important; }
.o-75 { opacity: .75 !important; }
.o-100 { opacity: 1 !important; }
```

Si `class: null`, genera clases para cada una de las claves `values`:

```scss
$utilities: (
  "visibility": (
    property: visibility,
    class: null,
    values: (
      visible: visible,
      invisible: hidden,
    )
  )
);
```

Salida:

```css
.visible { visibility: visible !important; }
.invisible { visibility: hidden !important; }
```

### Utilidades de variables CSS

Establece la opción booleana `css-var` en `true` y la API generará variables CSS locales para el selector dado en lugar de las reglas habituales de `property: value`. Considera nuestras utilidades `.text-opacity-*`:

```scss
$utilities: (
  "text-opacity": (
    css-var: true,
    class: text-opacity,
    values: (
      25: .25,
      50: .5,
      75: .75,
      100: 1
    )
  ),
);
```

Salida:

```css
.text-opacity-25 { --bs-text-opacity: .25; }
.text-opacity-50 { --bs-text-opacity: .5; }
.text-opacity-75 { --bs-text-opacity: .75; }
.text-opacity-100 { --bs-text-opacity: 1; }
```

### Variables CSS locales

Utiliza la opción `local-vars` para especificar un mapa Sass que generará variables CSS locales dentro del conjunto de reglas de la clase de utilidad. Ten en cuenta que puede requerir trabajo adicional consumir esas variables CSS locales en las reglas CSS generadas. Por ejemplo, considera nuestras utilidades `.bg-*`:

```scss
$utilities: (
  "background-color": (
    property: background-color,
    class: bg,
    local-vars: (
      "bg-opacity": 1
    ),
    values: map-merge(
      $utilities-bg-colors,
      (
        "transparent": transparent
      )
    )
  )
);
```

Salida:

```css
.bg-primary {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important;
}
```

### Estados

Usa la opción `state` para generar variaciones de pseudo-clase. Ejemplos de pseudo-clases son `:hover` y `:focus`. Cuando se proporciona una lista de estados, se crean nombres de clase para esa pseudoclase. Por ejemplo, para cambiar la opacidad al pasar el mouse, agrega `state: hover` y obtendrás `.opacity-hover:hover` en tu CSS compilado.

¿Necesita varias pseudoclases? Usa una lista de estados separados por espacios: `state: hover focus`.

```scss
$utilities: (
  "opacity": (
    property: opacity,
    class: opacity,
    state: hover,
    values: (
      0: 0,
      25: .25,
      50: .5,
      75: .75,
      100: 1,
    )
  )
);
```

Salida:

```css
.opacity-0-hover:hover { opacity: 0 !important; }
.opacity-25-hover:hover { opacity: .25 !important; }
.opacity-50-hover:hover { opacity: .5 !important; }
.opacity-75-hover:hover { opacity: .75 !important; }
.opacity-100-hover:hover { opacity: 1 !important; }
```

### Responsive

Agrega el booleano `responsive` para generar utilidades responsive (p. ej., `.opacity-md-25`) en [todos los breakpoints]({{< docsref "/layout/breakpoints" >}}).

```scss
$utilities: (
  "opacity": (
    property: opacity,
    responsive: true,
    values: (
      0: 0,
      25: .25,
      50: .5,
      75: .75,
      100: 1,
    )
  )
);
```

Salida:

```css
.opacity-0 { opacity: 0 !important; }
.opacity-25 { opacity: .25 !important; }
.opacity-50 { opacity: .5 !important; }
.opacity-75 { opacity: .75 !important; }
.opacity-100 { opacity: 1 !important; }

@media (min-width: 576px) {
  .opacity-sm-0 { opacity: 0 !important; }
  .opacity-sm-25 { opacity: .25 !important; }
  .opacity-sm-50 { opacity: .5 !important; }
  .opacity-sm-75 { opacity: .75 !important; }
  .opacity-sm-100 { opacity: 1 !important; }
}

@media (min-width: 768px) {
  .opacity-md-0 { opacity: 0 !important; }
  .opacity-md-25 { opacity: .25 !important; }
  .opacity-md-50 { opacity: .5 !important; }
  .opacity-md-75 { opacity: .75 !important; }
  .opacity-md-100 { opacity: 1 !important; }
}

@media (min-width: 992px) {
  .opacity-lg-0 { opacity: 0 !important; }
  .opacity-lg-25 { opacity: .25 !important; }
  .opacity-lg-50 { opacity: .5 !important; }
  .opacity-lg-75 { opacity: .75 !important; }
  .opacity-lg-100 { opacity: 1 !important; }
}

@media (min-width: 1200px) {
  .opacity-xl-0 { opacity: 0 !important; }
  .opacity-xl-25 { opacity: .25 !important; }
  .opacity-xl-50 { opacity: .5 !important; }
  .opacity-xl-75 { opacity: .75 !important; }
  .opacity-xl-100 { opacity: 1 !important; }
}

@media (min-width: 1400px) {
  .opacity-xxl-0 { opacity: 0 !important; }
  .opacity-xxl-25 { opacity: .25 !important; }
  .opacity-xxl-50 { opacity: .5 !important; }
  .opacity-xxl-75 { opacity: .75 !important; }
  .opacity-xxl-100 { opacity: 1 !important; }
}
```

### Print

Habilitar la opción `print` **también** generará clases de utilidad para imprimir, que solo se aplican dentro de la media query `@media print { ... }`.

```scss
$utilities: (
  "opacity": (
    property: opacity,
    print: true,
    values: (
      0: 0,
      25: .25,
      50: .5,
      75: .75,
      100: 1,
    )
  )
);
```

Salida:

```css
.opacity-0 { opacity: 0 !important; }
.opacity-25 { opacity: .25 !important; }
.opacity-50 { opacity: .5 !important; }
.opacity-75 { opacity: .75 !important; }
.opacity-100 { opacity: 1 !important; }

@media print {
  .opacity-print-0 { opacity: 0 !important; }
  .opacity-print-25 { opacity: .25 !important; }
  .opacity-print-50 { opacity: .5 !important; }
  .opacity-print-75 { opacity: .75 !important; }
  .opacity-print-100 { opacity: 1 !important; }
}
```

## Importancia

Todas las utilidades generadas por la API incluyen `!important` para garantizar que sobrescriben los componentes y las clases modificadoras según lo previsto. Puedes alternar esta configuración globalmente con la variable `$enable-important-utilities` (predeterminado en `true`).

## Uso de la API

Ahora que estás familiarizado con el funcionamiento de la API de utilidades, aprende cómo agregar tus propias clases personalizadas y modificar nuestras utilidades predeterminadas.

{{< callout info >}}
{{< partial "maybe-interested-2.md" >}}
{{< /callout >}}

### Sobrescribir utilidades

Sobrescribe las utilidades existentes utilizando la misma clave. Por ejemplo, si deseas clases de utilidad de desbordamiento responsive adicionales, puedes hacer esto:

```scss
$utilities: (
  "overflow": (
    responsive: true,
    property: overflow,
    values: visible hidden scroll auto,
  ),
);
```

### Agregar utilidades

Se pueden agregar nuevas utilidades al mapa `$utilities` predeterminado con un `map-merge`. Asegúrate de que nuestros archivos Sass requeridos y `_utilities.scss` se importen primero, luego usa `map-merge` para agregar tus utilidades adicionales. Por ejemplo, aquí se explica cómo agregar una utilidad responsive de `cursor` con tres valores.

```scss
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";
@import "bootstrap/scss/utilities/api";

$utilities: map-merge(
  $utilities,
  (
    "cursor": (
      property: cursor,
      class: cursor,
      responsive: true,
      values: auto pointer grab,
    )
  )
);
```

### Modificar utilidades

Modifica las utilidades existentes en el mapa `$utilities` predeterminado con las funciones `map-get` y `map-merge`. En el siguiente ejemplo, estamos agregando un valor adicional a las utilidades `width`. Comienza con un `map-merge` inicial y luego especifica qué utilidad deseas modificar. A partir de ahí, busca el mapa `"width"` anidado con `map-get` para acceder y modificar las opciones y valores de la utilidad.

```scss
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";
@import "bootstrap/scss/utilities/api";

$utilities: map-merge(
  $utilities,
  (
    "width": map-merge(
      map-get($utilities, "width"),
      (
        values: map-merge(
          map-get(map-get($utilities, "width"), "values"),
          (10: 10%),
        ),
      ),
    ),
  )
);
```

#### Habilitar responsive

Puedes habilitar clases responsive para un conjunto existente de utilidades que actualmente no sean responsive de forma predeterminada. Por ejemplo, para hacer que las clases `border` sean responsive:

```scss
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";
@import "bootstrap/scss/utilities/api";

$utilities: map-merge(
  $utilities, (
    "border": map-merge(
      map-get($utilities, "border"),
      ( responsive: true ),
    ),
  )
);
```

Esto ahora generará variaciones responsive de `.border` y `.border-0` para cada breakpoint. Tu CSS generado se verá así:

```css
.border { ... }
.border-0 { ... }

@media (min-width: 576px) {
  .border-sm { ... }
  .border-sm-0 { ... }
}

@media (min-width: 768px) {
  .border-md { ... }
  .border-md-0 { ... }
}

@media (min-width: 992px) {
  .border-lg { ... }
  .border-lg-0 { ... }
}

@media (min-width: 1200px) {
  .border-xl { ... }
  .border-xl-0 { ... }
}

@media (min-width: 1400px) {
  .border-xxl { ... }
  .border-xxl-0 { ... }
}
```

#### Renombrar utilidades

¿Extrañas las utilidades v4 o estás acostumbrado a otra convención de nomenclatura? La API de utilidades se puede usar para sobrescribir la `class` resultante de una utilidad determinada, por ejemplo, para cambiar el nombre de las utilidades `.ms-*` al  antiguo `.ml-*`:

```scss
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";
@import "bootstrap/scss/utilities/api";

$utilities: map-merge(
  $utilities, (
    "margin-start": map-merge(
      map-get($utilities, "margin-start"),
      ( class: ml ),
    ),
  )
);
```

### Eliminar utilidades

Elimina cualquiera de las utilidades predeterminadas configurando la clave de grupo en `null`. Por ejemplo, para eliminar todas nuestras utilidades `width`, crea `$utilities` `map-merge` y agrega `"width": null` dentro.

```scss
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";
@import "bootstrap/scss/utilities/api";

$utilities: map-merge(
  $utilities,
  (
    "width": null
  )
);
```

{{< callout info >}}
{{< partial "maybe-interested-3.md" >}}
{{< /callout >}}

#### Eliminar utilidad en RTL

Algunos casos extremos dificultan [el estilo RTL](https://rtlstyling.com/posts/rtl-styling#common-things-that-might-not-work-for-rtl), como los saltos de línea en árabe. Por lo tanto, las utilidades se pueden eliminar de la salida RTL configurando la opción `rtl` en `false`:

```scss
$utilities: (
  "word-wrap": (
    property: word-wrap word-break,
    class: text,
    values: (break: break-word),
    rtl: false
  ),
);
```

Salida:

```css
/* rtl:begin:remove */
.text-break {
  word-wrap: break-word !important;
  word-break: break-word !important;
}
/* rtl:end:remove */
```

Esto no genera nada en RTL, gracias a [la directiva de control `remove` de RTLCSS](https://rtlcss.com/learn/usage-guide/control-directives/#remove).
