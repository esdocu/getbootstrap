---
layout: docs
title: Sass
description: Utiliza nuestros archivos fuente Sass para aprovechar variables, mapas, mixins y funciones para ayudarte a construir más rápido y personalizar tu proyecto.
group: customize
toc: true
---

Utiliza nuestros archivos fuente Sasspara aprovechar variables, mapas, mixins y más.

## Estructura de archivos

Siempre que sea posible, evita modificar los archivos del núcleo de Bootstrap. Para Sass, eso significa crear tu propia hoja de estilos que importe Bootstrap para que puedas modificarla y ampliarla. Suponiendo que estás utilizando un administrador de paquetes como npm, tendrás una estructura de archivos que se ve así:

```text
your-project/
├── scss
│   └── custom.scss
└── node_modules/
    └── bootstrap
        ├── js
        └── scss
```

Si descargaste nuestros archivos fuente y no estás utilizando un administrador de paquetes, querrás configurar manualmente algo similar a esa estructura, manteniendo los archivos fuente de Bootstrap separados de los tuyos.

```text
your-project/
├── scss
│   └── custom.scss
└── bootstrap/
    ├── js
    └── scss
```

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

## Importación

En tu `custom.scss`, importarás los archivos fuente Sass de Bootstrap. Tienes dos opciones: incluir todo Bootstrap o elegir las partes que necesitas. Recomendamos lo último, aunque ten en cuenta que existen algunos requisitos y dependencias entre nuestros componentes. También deberás incluir algo de JavaScript para nuestros complementos.

```scss
// Custom.scss
// Opción A: Incluir todo Bootstrap

// Incluye cualquier sobrescritura de variable predeterminada aquí (aunque las funciones no estarán disponibles)

@import "../node_modules/bootstrap/scss/bootstrap";

// Luego agrega código personalizado adicional aquí
```

```scss
// Custom.scss
// Opción B: Incluir partes de Bootstrap

// 1. Incluye las funciones primero (para que puedas manipular colores, SVG, calc, etc.)
@import "../node_modules/bootstrap/scss/functions";

// 2. Incluye cualquier sobrescritura de variable predeterminada aquí

// 3. Incluye el resto de las hojas de estilo Bootstrap requeridas
@import "../node_modules/bootstrap/scss/variables";

// 4. Incluye cualquier sobrescritura de mapa predeterminado aquí

// 5. Incluye el resto de las partes requeridas
@import "../node_modules/bootstrap/scss/maps";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/root";

// 6. Opcionalmente, incluye otras partes según sea necesario
@import "../node_modules/bootstrap/scss/utilities";
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
@import "../node_modules/bootstrap/scss/images";
@import "../node_modules/bootstrap/scss/containers";
@import "../node_modules/bootstrap/scss/grid";
@import "../node_modules/bootstrap/scss/helpers";

// 7. Opcionalmente, incluye la API de utilidades en último lugar para generar clases basadas en el mapa Sass en `_utilities.scss`
@import "../node_modules/bootstrap/scss/utilities/api";

// 8. Agrega código personalizado adicional aquí
```

Con esta configuración, puedes comenzar a modificar cualquiera de las variables y mapas de Sass en tu `custom.scss`. También puedes comenzar a agregar partes de Bootstrap en las secciones `// Opcionalmente` según sea necesario. Sugerimos usar la pila de importación completa de nuestro archivo `bootstrap.scss` como punto de partida.

## Valores predeterminados de variables

Cada variable de Sass en Bootstrap incluye el indicador `!default` que te permite sobrescribir el valor predeterminado de la variable en tu propio Sass sin modificar el código fuente de Bootstrap. Copia y pega las variables según sea necesario, modifica tus valores y elimina el indicador `!default`. Si ya se asignó una variable, no se reasignará con los valores predeterminados en Bootstrap.

Encontrarás la lista completa de variables de Bootstrap en `scss/_variables.scss`. Algunas variables se establecen en `null`, estas variables no generan la propiedad a menos que se sobrescriban en tu configuración.

Las sobrescrituras de variables deben realizarse después de importar nuestras funciones, pero antes del resto de las importaciones.

Aquí hay un ejemplo que cambia `background-color` y `color` para `<body>` al importar y compilar Bootstrap a través de npm:

```scss
// Requerido
@import "../node_modules/bootstrap/scss/functions";

// Sobrescritura del valor por defecto de las variables
$body-bg: #000;
$body-color: #111;

// Requerido
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/maps";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/root";

// Componentes opcionales de Bootstrap aquí
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
// etc
```

Repite según sea necesario para cualquier variable en Bootstrap, incluidas las opciones globales a continuación.

{{< callout info >}}
{{< partial "callout-info-npm-starter.md" >}}
{{< /callout >}}

## Mapas y bucles

Bootstrap incluye un puñado de mapas Sass, pares de clave valor que facilitan la generación de familias de CSS relacionadas. Usamos mapas Sass para nuestros colores, breakpoints de cuadrícula (grid) y más. Al igual que las variables de Sass, todos los mapas de Sass incluyen el indicador `!default` y se pueden sobrescribir y ampliar.

Algunos de nuestros mapas Sass se fusionan en mapas vacíos de forma predeterminada. Esto se hace para permitir una fácil expansión de un mapa Sass determinado, pero tiene el costo de hacer _removing_ de elementos de un mapa sea un poco más difícil.

{{< callout info >}}
{{< partial "maybe-interested-2.md" >}}
{{< /callout >}}

### Modificar mapa

Todas las variables en el mapa `$theme-colors` se definen como variables independientes. Para modificar un color existente en nuestro mapa `$theme-colors`, agrega lo siguiente a tu archivo Sass personalizado:

```scss
$primary: #0074d9;
$danger: #ff4136;
```

Posteriormente, estas variables se configuran en el mapa `$theme-colors` de Bootstrap:

```scss
$theme-colors: (
  "primary": $primary,
  "danger": $danger
);
```

### Añadir al mapa

Agrega nuevos colores a `$theme-colors`, o cualquier otro mapa, creando un nuevo mapa Sass con sus valores personalizados y combinándolo con el mapa original. En este caso, crearemos un nuevo mapa `$custom-colors` y lo fusionaremos con `$theme-colors`.

```scss
// Crea tu propio mapa
$custom-colors: (
  "custom-color": #900
);

// Fusionar los mapas
$theme-colors: map-merge($theme-colors, $custom-colors);
```

### Quitar del mapa

Para eliminar colores de `$theme-colors`, o cualquier otro mapa, usa `map-remove`. Ten en cuenta que debes insertarlo entre nuestros requisitos y opciones:

```scss
// Requerido
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/maps";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/root";

$theme-colors: map-remove($theme-colors, "info", "light", "dark");

// Opcional
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
// etc
```

## Claves requeridas

Bootstrap asume la presencia de algunas claves específicas dentro de los mapas de Sass tal como las usamos y las ampliamos nosotros mismos. A medida que personalizas los mapas incluidos, es posible que encuentres errores cuando se utiliza la clave de un mapa Sass específico.

Por ejemplo, usamos las teclas `primary`, `success` y `danger` de `$theme-colors` para enlaces, botones y estados de formulario. Reemplazar los valores de estas claves no debería presentar problemas, pero eliminarlas puede causar problemas de compilación de Sass. En estos casos, deberás modificar el código Sass que utiliza esos valores.

## Funciones

### Colores

Además de los [mapas Sass]({{< docsref "/customize/color#color-sass-maps" >}}) que tenemos, los colores del tema también se pueden usar como variables independientes, como `$primary`.

```scss
.custom-element {
  color: $gray-100;
  background-color: $dark;
}
```

Puedes aclarar u oscurecer los colores con las funciones `tint-color()` y `shade-color()` de Bootstrap. Estas funciones mezclarán colores con negro o blanco, a diferencia de las funciones `lighten()` y `darken()` nativas de Sass, que cambiarán la luminosidad en una cantidad fija, lo que a menudo no produce el efecto deseado.

{{< scss-docs name="color-functions" file="scss/_functions.scss" >}}

En la práctica, llamarías a la función y pasarías los parámetros de color y peso.

```scss
.custom-element {
  color: tint-color($primary, 10%);
}

.custom-element-2 {
  color: shade-color($danger, 30%);
}
```

### Contraste de color

Para cumplir con los [estándares de accesibilidad WCAG 2.0 para contraste de color](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html), los autores **deben** proporcionar [una relación de contraste de al menos 4,5:1](https://www.w3.org/WAI/WCAG20/quickref/20160105/Overview.php#visual-audio-contrast-contrast), con muy pocas excepciones.

Una función adicional que incluimos en Bootstrap es la función de contraste de color, `color-contrast`. Utiliza el [algoritmo WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests) para calcular umbrales de contraste basados en [luminancia relativa](https://www.w3.org/WAI/GL/wiki/Relative_luminance) en un espacio de color `sRGB` para devolver automáticamente un color de contraste claro (`#fff`), oscuro (`#212529`) o negro (`#000`) basado en el color base especificado. Esta función es especialmente útil para mixins o bucles en los que generas varias clases.

Por ejemplo, para generar muestras de color a partir de nuestro mapa `$theme-colors`:

```scss
@each $color, $value in $theme-colors {
  .swatch-#{$color} {
    color: color-contrast($value);
  }
}
```

También se puede utilizar para necesidades puntuales de contraste:

```scss
.custom-element {
  color: color-contrast(#000); // Devuelve `color: #fff`
}
```

También puedes especificar un color base con nuestras funciones de mapa de colores:

```scss
.custom-element {
  color: color-contrast($dark); // Devuelve `color: #fff`
}
```

### Escapar SVG

Usamos la función `escape-svg` para escapar de los caracteres `<`, `>` y `#` para las imágenes de fondo SVG. Al usar la función `escape-svg`, se deben citar los URI de datos.

### Sumar y restar funciones

Usamos las funciones `add` y `subtract` para envolver la función `calc` de CSS. El objetivo principal de estas funciones es evitar errores cuando se pasa un valor `0` "sin unidades" a una expresión `calc`. Expresiones como `calc(10px - 0)` devolverán un error en todos los navegadores, a pesar de ser matemáticamente correctas.

Ejemplo donde el cálculo es válido:

```scss
$border-radius: .25rem;
$border-width: 1px;

.element {
  // El cálculo de salida (.25rem - 1px) es válido
  border-radius: calc($border-radius - $border-width);
}

.element {
  // Salida de la misma calc(.25rem - 1px) como arriba
  border-radius: subtract($border-radius, $border-width);
}
```

Ejemplo donde el cálculo no es válido:

```scss
$border-radius: .25rem;
$border-width: 0;

.element {
  // El cálculo de salida (.25rem - 0) no es válido
  border-radius: calc($border-radius - $border-width);
}

.element {
  // Salida .25rem
  border-radius: subtract($border-radius, $border-width);
}
```

## Mixins

Nuestro directorio `scss/mixins/` tiene una tonelada de mixins que potencian partes de Bootstrap y también se pueden usar en tu propio proyecto.

{{< callout info >}}
{{< partial "maybe-interested-3.md" >}}
{{< /callout >}}

### Esquemas de color

Un mixin de atajo para la media query `prefers-color-scheme` está disponible con soporte para esquemas de color `light`, `dark` y personalizado.

{{< scss-docs name="mixin-color-scheme" file="scss/mixins/_color-scheme.scss" >}}

```scss
.custom-element {
  @include color-scheme(dark) {
    // Inserta estilos de modo oscuro aquí
  }

  @include color-scheme(custom-named-scheme) {
    // Inserta estilos de esquemas de colores personalizados aquí
  }
}
```
