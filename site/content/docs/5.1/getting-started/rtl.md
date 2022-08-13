---
layout: docs
title: RTL
description: Aprende a habilitar la compatibilidad con texto de derecha a izquierda en Bootstrap en nuestro diseño, componentes y utilidades.
group: getting-started
toc: true
---

## Familiarizarse

Recomendamos familiarizarse con Bootstrap primero leyendo nuestra [Página de introducción]({{< docsref "/getting-started/introduction" >}}). Una vez que lo hayas leído, sigue leyendo aquí para saber cómo habilitar RTL.

También puedes leer sobre [el proyecto RTLCSS](https://rtlcss.com/), ya que impulsa nuestro enfoque de RTL.

{{< callout warning >}}
### Característica experimental

La función RTL todavía es **experimental** y probablemente evolucionará según los comentarios de los usuarios. ¿Detectáste algo o tienes alguna mejora que sugerir? [Abre un issue]({{< param repo >}}/issues/new), nos encantaría conocer sus ideas.

{{< /callout >}}

## HTML requerido

Hay dos requisitos estrictos para habilitar RTL en páginas con tecnología Bootstrap.

1. Configura `dir="rtl"` en el elemento `<html>`.
2. Agrega un atributo `lang` apropiado, como `lang="ar"`, en el elemento `<html>`.

A partir de ahí, deberás incluir una versión RTL de nuestro CSS. Por ejemplo, aquí está la hoja de estilo para nuestro CSS compilado y minimizado con RTL habilitado:

```html
<link rel="stylesheet" href="{{< param "cdn.css_rtl" >}}" integrity="{{< param "cdn.css_rtl_hash" >}}" crossorigin="anonymous">
```

### Plantilla de inicio

Puedes ver los requisitos anteriores reflejados en esta plantilla de inicio de RTL modificada.

```html
<!doctype html>
<html lang="ar" dir="rtl">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{< param "cdn.css_rtl" >}}" integrity="{{< param "cdn.css_rtl_hash" >}}" crossorigin="anonymous">

    <title>مرحبًا بالعالم!</title>
  </head>
  <body>
    <h1>مرحبًا بالعالم!</h1>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="{{< param "cdn.js_bundle" >}}" integrity="{{< param "cdn.js_bundle_hash" >}}" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="{{< param "cdn.popper" >}}" integrity="{{< param "cdn.popper_hash" >}}" crossorigin="anonymous"></script>
    <script src="{{< param "cdn.js" >}}" integrity="{{< param "cdn.js_hash" >}}" crossorigin="anonymous"></script>
    -->
  </body>
</html>
```

### Ejemplos RTL

Comienza con uno de nuestros varios [ejemplos de RTL]({{< docsref "/examples/#rtl" >}}).

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

## Enfoque

Nuestro enfoque para incorporar la compatibilidad con RTL en Bootstrap viene con dos decisiones importantes que afectan la forma en que escribimos y usamos nuestro CSS:

1. **Primero, decidimos construirlo con el proyecto [RTLCSS](https://rtlcss.com/).** Esto nos brinda algunas características poderosas para administrar cambios y sobrescrituras al pasar de LTR a RTL. También nos permite crear dos versiones de Bootstrap a partir de un código base.

2. **En segundo lugar, hemos cambiado el nombre de un puñado de clases direccionales para adoptar un enfoque de propiedades lógicas.** La mayoría de ustedes ya ha interactuado con propiedades lógicas gracias a nuestras utilidades flexibles: reemplazan propiedades de dirección como `left` y `right` a favor `start` y `end`. Eso hace que los nombres y valores de clase sean apropiados para LTR y RTL sin sobrecarga.

   Por ejemplo, en lugar de `.ml-3` para `margin-left`, use `.ms-3`.

Sin embargo, trabajar con RTL, a través de nuestro código fuente Sass o CSS compilado, no debería ser muy diferente de nuestro LTR predeterminado.

## Personalizar desde la fuente

Cuando se trata de [personalización]({{< docsref "/customize/sass" >}}), la forma preferida es aprovechar las variables, los mapas y los mixins. Este enfoque funciona igual para RTL, incluso si se procesa posteriormente a partir de los archivos compilados, gracias a [cómo funciona RTLCSS](https://rtlcss.com/learn/getting-started/why-rtlcss/).

### Valores RTL personalizados

Usando [directivas de valor RTLCSS](https://rtlcss.com/learn/usage-guide/value-directives/), puedes hacer que una variable genere un valor diferente para RTL. Por ejemplo, para disminuir el peso de `$font-weight-bold` en todo el código base, puedes usar la sintaxis `/*rtl: {value}*/`:

```scss
$font-weight-bold: 700 #{/* rtl:600 */} !default;
```

Lo que daría como resultado lo siguiente para nuestro CSS y RTL CSS predeterminados:

```css
/* bootstrap.css */
dt {
  font-weight: 700 /* rtl:600 */;
}

/* bootstrap.rtl.css */
dt {
  font-weight: 600;
}
```

### Pila de fuentes alternativas

En caso de que utilices una fuente personalizada, ten en cuenta que no todas las fuentes admiten el alfabeto no latino. Para cambiar de la familia paneuropea a la árabe, es posible que debas usar `/*rtl:insert: {value}*/` en tu pila de fuentes para modificar los nombres de las familias de fuentes.

Por ejemplo, para cambiar de la fuente `Helvetica Neue` para LTR a `Helvetica Neue Arabic` para RTL, tu código Sass podría verse así:

```scss
$font-family-sans-serif:
  Helvetica Neue #{"/* rtl:insert:Arabic */"},
  // Cross-platform generic font family (default user interface font)
  system-ui,
  // Safari for macOS and iOS (San Francisco)
  -apple-system,
  // Chrome < 56 for macOS (San Francisco)
  BlinkMacSystemFont,
  // Windows
  "Segoe UI",
  // Android
  Roboto,
  // Basic web fallback
  Arial,
  // Linux
  "Noto Sans",
  // Sans serif fallback
  sans-serif,
  // Emoji fonts
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default;
```

### LTR y RTL al mismo tiempo

¿Necesitas LTR y RTL en la misma página? Gracias a [RTLCSS String Maps](https://rtlcss.com/learn/usage-guide/string-map/), esto es bastante sencillo. Envuelve tus `@import`s con una clase y establece una regla de cambio de nombre personalizada para RTLCSS:

```scss
/* rtl:begin:options: {
  "autoRename": true,
  "stringMap":[ {
    "name": "ltr-rtl",
    "priority": 100,
    "search": ["ltr"],
    "replace": ["rtl"],
    "options": {
      "scope": "*",
      "ignoreCase": false
    }
  } ]
} */
.ltr {
  @import "../node_modules/bootstrap/scss/bootstrap";
}
/*rtl:end:options*/
```

Después de ejecutar Sass y luego RTLCSS, cada selector en tus archivos CSS estará precedido por `.ltr` y `.rtl` para archivos RTL. Ahora puedes usar ambos archivos en la misma página y simplemente usar `.ltr` o `.rtl` en los contenedores de tus componentes para usar una u otra dirección.

{{< callout warning >}}
#### Casos extremos y limitaciones conocidas

Si bien este enfoque es comprensible, presta atención a lo siguiente:

1. Al cambiar `.ltr` y `.rtl`, asegúrate de agregar los atributos `dir` y `lang` en consecuencia.
2. Cargar ambos archivos puede ser un cuello de botella de rendimiento real: considera alguna [optimización]({{< docsref "/customize/optimize" >}}), y tal vez intenta [cargar uno de esos archivos de forma asíncrona](https://www.filamentgroup.com/lab/load-css-simpler/).
3. Anidar estilos de esta manera evitará que nuestro mixin `form-validation-state()` funcione según lo previsto, por lo que deberá modificarlo un poco usted mismo. [Ver #31223](https://github.com/twbs/bootstrap/issues/31223).
{{< /callout >}}

## El caso de la miga de pan

El [separador de migas de pan]({{< docsref "/components/breadcrumb" >}}/#changing-the-separator) es el único caso que requiere tu propia variable nueva, a saber, `$breadcrumb-divider-flipped`, que por defecto es `$breadcrumb-divider`.

{{< callout info >}}
{{< partial "maybe-interested-2.md" >}}
{{< /callout >}}

## Recursos adicionales

- [RTLCSS](https://rtlcss.com/)
- [RTL Styling 101](https://rtlstyling.com/posts/rtl-styling)
