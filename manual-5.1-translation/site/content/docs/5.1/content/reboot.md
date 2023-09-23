---
layout: docs
title: Reboot
description: Reboot, una colección de cambios CSS a elementos específicos en un solo archivo, punto de partida de Bootstrap para proporcionar una base elegante, consistente y simple sobre la cual construir.
group: content
aliases: "/docs/5.1/content/"
toc: true
---

## Enfoque

Reboot se basa en Normalize, proporcionando muchos elementos HTML con estilos un tanto obstinados utilizando solo selectores de elementos. El estilo adicional se realiza solo con clases. Por ejemplo, reiniciamos algunos estilos `<table>` para una línea base más simple y luego proporcionamos `.table`, `.table-bordered` y más.

Estas son nuestras pautas y razones para elegir qué sobrescribir en Reboot:

- Actualizar algunos valores predeterminados del navegador para usar `rem`s en lugar de `em`s para el espaciado de componentes escalables.
- Evitar `margin-top`. Los márgenes verticales pueden contraerse y producir resultados inesperados. Sin embargo, lo que es más importante, una sola dirección de `margin` es un modelo mental más simple.
- Para escalar más fácilmente entre tamaños de dispositivos, los elementos de bloque deben usar `rem`s para `margin`s.
- Mantener al mínimo las declaraciones de propiedades relacionadas con `font`, usando `inherit` siempre que sea posible.

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

## Variables CSS

<small class="d-inline-flex px-2 py-1 font-monospace text-muted border rounded-3">Añadido en v5.1.1</small>

Con v5.1.1, estandarizamos nuestros `@import`s requeridos en todos nuestros bundles de CSS (incluidos `bootstrap.css`, `bootstrap-reboot.css` y `bootstrap-grid.css` para incluir `_root.scss`. Esto agrega variables CSS de nivel `:root` a todos los bundles, independientemente de cuántas de ellas se usen en ese bundle. En última instancia, Bootstrap 5 seguirá teniendo más [variables CSS]({{< docsref "/customize/css-variables" >}}) agregadas con el tiempo, para proporcionar más personalización en tiempo real sin la necesidad de volver a compilar siempre Sass. Nuestro enfoque es tomar nuestras variables fuente Sass y transformarlas en variables CSS. De esa manera, incluso si no usas variables CSS, todavía tienes todo el poder de Sass. **Esto aún está en progreso y llevará tiempo implementarlo por completo.**

Por ejemplo, considera estas variables CSS `:root` para los estilos comunes `<body>`:

{{< scss-docs name="root-body-variables" file="scss/_root.scss" >}}

En la práctica, esas variables se aplican en Reboot así:

{{< scss-docs name="reboot-body-rules" file="scss/_reboot.scss" >}}

Lo que te permite hacer personalizaciones en tiempo real como quieras:

```html
<body style="--bs-body-color: #333;">
  <!-- ... -->
</body>
```

## Valores de página predeterminados

Los elementos `<html>` y `<body>` se actualizan para proporcionar mejores valores predeterminados para toda la página. Más específicamente:

- El `box-sizing` se establece globalmente en cada elemento, incluidos `*::before` y `*::after`, en `border-box`. Esto asegura que nunca se exceda el ancho declarado del elemento debido al padding o al borde.
   - No se declara `font-size` base en `<html>`, pero se asume `16px` (el valor predeterminado del navegador). `font-size: 1rem` se aplica en el `<body>` para facilitar el escalado de tipos responsive a través de media queries, respetando las preferencias del usuario y asegurando un enfoque más accesible. Este valor predeterminado del navegador se puede sobrescribir modificando la variable `$font-size-root`.
- El `<body>` también establece de forma global `font-family`, `font-weight`, `line-height` y `color`. Esto lo heredan más adelante algunos elementos de formulario para evitar inconsistencias en las fuentes.
- Por seguridad, `<body>` tiene un `background-color` declarado, por defecto es `#fff`.

## Pila de fuentes nativas

Bootstrap utiliza una "pila de fuentes nativa" o "pila de fuentes del sistema" para una reproducción de texto óptima en todos los dispositivos y sistemas operativos. Estas fuentes del sistema se han diseñado específicamente teniendo en cuenta los dispositivos actuales, con una representación mejorada en las pantallas, compatibilidad con fuentes variables y más. Lee más sobre [pilas de fuentes nativas en este artículo de *Smashing Magazine*](https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/).

```scss
$font-family-sans-serif:
  // Familia de fuentes genéricas multiplataforma (fuente de interfaz de usuario predeterminada)
  system-ui,
  // Safari para macOS y iOS (San Francisco)
  -apple-system,
  // Windows
  "Segoe UI",
  // Android
  Roboto,
  // Basic web fallback
  "Helvetica Neue", Arial,
  // Linux
  "Noto Sans",
  "Liberation Sans",
  // Sans serif fallback
  sans-serif,
  // Emoji fonts
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default;
```

Ten en cuenta que debido a que la pila de fuentes incluye fuentes emoji, muchos caracteres unicode comunes símbolos/dingbat, se representarán como pictogramas de varios colores. Su apariencia variará, según el estilo utilizado en la fuente emoji nativa del navegador/plataforma, y no se verán afectados por ningún estilo de `color` de CSS.

Esta `font-family` se aplica al `<body>` y se hereda automáticamente de forma global a través de Bootstrap. Para cambiar la `font-family` global, actualiza `$font-family-base` y vuelve a compilar Bootstrap.

## Títulos y párrafos

Todos los elementos de encabezado, por ejemplo `<h1>`, y párrafos `<p>` se restablecen para eliminar su `margin-top`. Los encabezados tienen `margin-bottom: .5rem` agregado y los párrafos `margin-bottom: 1rem` para facilitar el espaciado.

<table class="table">
  <thead>
    <tr>
      <th>Título</th>
      <th>Ejemplo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{< markdown >}}`<h1></h1>`{{< /markdown >}}
      </td>
      <td><span class="h1">h1. Encabezado Bootstrap</span></td>
    </tr>
    <tr>
      <td>
        {{< markdown >}}`<h2></h2>`{{< /markdown >}}
      </td>
      <td><span class="h2">h2. Encabezado Bootstrap</span></td>
    </tr>
    <tr>
      <td>
        {{< markdown >}}`<h3></h3>`{{< /markdown >}}
      </td>
      <td><span class="h3">h3. Encabezado Bootstrap</span></td>
    </tr>
    <tr>
      <td>
        {{< markdown >}}`<h4></h4>`{{< /markdown >}}
      </td>
      <td><span class="h4">h4. Encabezado Bootstrap</span></td>
    </tr>
    <tr>
      <td>
        {{< markdown >}}`<h5></h5>`{{< /markdown >}}
      </td>
      <td><span class="h5">h5. Encabezado Bootstrap</span></td>
    </tr>
    <tr>
      <td>
        {{< markdown >}}`<h6></h6>`{{< /markdown >}}
      </td>
      <td><span class="h6">h6. Encabezado Bootstrap</span></td>
    </tr>
  </tbody>
</table>

## Listas

Todas las listas, `<ul>`, `<ol>` y `<dl>`, tienen su `margin-top` eliminado y un `margin-bottom: 1rem`. Las listas anidadas no tienen un `margin-bottom`. También hemos reiniciado el `padding-left` en los elementos `<ul>` y `<ol>`.

<div class="bd-example">
{{< markdown >}}
* Todas las listas tienen su margen superior eliminado
* Y su margen inferior normalizado
* Las listas anidadas no tienen margen inferior
   * Así tienen una apariencia más pareja
   * Particularmente cuando le siguen más elementos de la lista
* El padding izquierdo también se ha restablecido

1. Aquí hay una lista ordenada
2. Con algunos elementos de la lista
3. Tiene el mismo aspecto general
4. Como la lista desordenada anterior
{{< /markdown >}}
</div>

Para un estilo más simple, una jerarquía clara y un mejor espaciado, las listas de descripción han actualizado sus `margin`s. `<dd>`s restablece `margin-left` a `0` y agrega `margin-bottom: .5rem`. Los `<dt>` están **en negrita**.

<div class="bd-example">
  <dl>
    <dt>Listas de descripción</dt>
    <dd>Una lista de descripción es perfecta para definir términos.</dd>
    <dt>Plazo</dt>
    <dd>Definición del término.</dd>
    <dd>Una segunda definición para el mismo término.</dd>
    <dt>Otro término</dt>
    <dd>Definición de este otro término.</dd>
  </dl>
</div>

## Código en línea

Envuelve fragmentos de código en línea con `<code>`. Asegúrate de escapar los corchetes angulares de HTML.

{{< example >}}
Por ejemplo, <code>&lt;section&gt;</code> debe ajustarse en línea.
{{< /example >}}

## Bloques de código

Usa `<pre>`s para múltiples líneas de código. Una vez más, asegúrate de escapar los corchetes angulares en el código para una representación adecuada. El elemento `<pre>` se restablece para eliminar su `margin-top` y usar unidades `rem` para su `margin-bottom`.

{{< example >}}
<pre><code>&lt;p&gt;Texto de ejemplo...&lt;/p&gt;
&lt;p&gt;Y otra línea de ejemplo...&lt;/p&gt;
</code></pre>
{{< /example >}}

## Variables

Para indicar variables usa la etiqueta `<var>`.

{{< example >}}
<var>y</var> = <var>m</var><var>x</var> + <var>b</var>
{{< /example >}}

## Entradas de usuario

Usa `<kbd>` para indicar la entrada que normalmente se ingresa a través del teclado.

{{< example >}}
Para cambiar de directorio, escribe <kbd>cd</kbd> seguido del nombre del directorio.<br>
Para editar la configuración, presiona <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
{{< /example >}}

## Salida de muestra

Para indicar la salida de texto de un programa, usa la etiqueta `<samp>`.

{{< example >}}
<samp>Este texto está destinado a ser tratado como resultado de muestra de un programa de computadora.</samp>
{{< /example >}}

## Tablas

Las tablas se ajustan ligeramente al estilo `<caption>`s, colapsan los bordes y aseguran una `text-align` consistente en todas partes. Los cambios adicionales para bordes, padding y más vienen con [la clase `.table`]({{< docsref "/content/tables" >}}).

<div class="bd-example">
  <table>
    <caption>
      Esta es una tabla de ejemplo, y este es su título para describir el contenido.
    </caption>
    <thead>
      <tr>
        <th>Título de tabla</th>
        <th>Título de tabla</th>
        <th>Título de tabla</th>
        <th>Título de tabla</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Celda de tabla</td>
        <td>Celda de tabla</td>
        <td>Celda de tabla</td>
        <td>Celda de tabla</td>
      </tr>
      <tr>
        <td>Celda de tabla</td>
        <td>Celda de tabla</td>
        <td>Celda de tabla</td>
        <td>Celda de tabla</td>
      </tr>
      <tr>
        <td>Celda de tabla</td>
        <td>Celda de tabla</td>
        <td>Celda de tabla</td>
        <td>Celda de tabla</td>
      </tr>
    </tbody>
  </table>
</div>

{{< callout info >}}
{{< partial "maybe-interested-2.md" >}}
{{< /callout >}}

## Formularios

Se han reiniciado varios elementos de formulario para estilos básicos más simples. Estos son algunos de los cambios más notables:

- `<fieldset>`s no tienen bordes, padding o margen, por lo que pueden usarse fácilmente como contenedores para inputs individuales o grupos de inputs.
- Los `<legend>`s, como los fieldsets, también se han rediseñado para que se muestren como una especie de encabezado.
- `<label>`s se establecen en `display: inline-block` para permitir que se aplique `margin`.
- Los `<input>`s, `<select>`s, `<textarea>`s y `<button>`s son abordados principalmente por Normalize, pero Reboot elimina su `margin` y establece `line-height: inherit` también.
- `<textarea>`s se modifican para que solo se pueda cambiar el tamaño verticalmente, ya que el cambio de tamaño horizontal a menudo "rompe" el diseño de la página.
- Los elementos de botón `<button>`s y `<input>` tienen `cursor: pointer` cuando `:not(:disabled)`.

Estos cambios, y más, se muestran a continuación.

<form class="bd-example">
  <fieldset>
    <legend>Ejemplo de legend</legend>
    <p>
      <label for="input">Ejemplo de input</label>
      <input type="text" id="input" placeholder="Ejemplo de input">
    </p>
    <p>
      <label for="email">Ejemplo de email</label>
      <input type="email" id="email" placeholder="test@example.com">
    </p>
    <p>
      <label for="tel">Ejemplo de telephone</label>
      <input type="tel" id="tel">
    </p>
    <p>
      <label for="url">Ejemplo de url</label>
      <input type="url" id="url">
    </p>
    <p>
      <label for="number">Ejemplo de number</label>
      <input type="number" id="number">
    </p>
    <p>
      <label for="search">Ejemplo de search</label>
      <input type="search" id="search">
    </p>
    <p>
      <label for="range">Ejemplo de range</label>
      <input type="range" id="range" min="0" max="10">
    </p>
    <p>
      <label for="file">Ejemplo de file input</label>
      <input type="file" id="file">
    </p>
    <p>
      <label for="select">Ejemplo de select</label>
      <select id="select">
        <option value="">Elige...</option>
        <optgroup label="Option group 1">
          <option value="">Option 1</option>
          <option value="">Option 2</option>
          <option value="">Option 3</option>
        </optgroup>
        <optgroup label="Option group 2">
          <option value="">Option 4</option>
          <option value="">Option 5</option>
          <option value="">Option 6</option>
        </optgroup>
      </select>
    </p>
    <p>
      <label>
        <input type="checkbox" value="">
        Check this checkbox
      </label>
    </p>
    <p>
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
        Option one is this and that
      </label>
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
        Option two is something else that's also super long to demonstrate the wrapping of these fancy form controls.
      </label>
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
        Option three is disabled
      </label>
    </p>
    <p>
      <label for="textarea">Ejemplo de textarea</label>
      <textarea id="textarea" rows="3"></textarea>
    </p>
    <p>
      <label for="date">Ejemplo de date</label>
      <input type="date" id="date">
    </p>
    <p>
      <label for="time">Ejemplo de time</label>
      <input type="time" id="time">
    </p>
    <p>
      <label for="password">Ejemplo de password</label>
      <input type="password" id="password">
    </p>
    <p>
      <label for="datetime-local">Ejemplo de datetime-local</label>
      <input type="datetime-local" id="datetime-local">
    </p>
    <p>
      <label for="week">Ejemplo de week</label>
      <input type="week" id="week">
    </p>
    <p>
      <label for="month">Ejemplo de month</label>
      <input type="month" id="month">
    </p>
    <p>
      <label for="color">Ejemplo de color</label>
      <input type="color" id="color">
    </p>
    <p>
      <label for="output">Ejemplo de output</label>
      <output name="result" id="output">100</output>
    </p>
    <p>
      <button type="submit">Button submit</button>
      <input type="submit" value="Input submit button">
      <input type="reset" value="Input reset button">
      <input type="button" value="Input button">
    </p>
    <p>
      <button type="submit" disabled>Button submit</button>
      <input type="submit" value="Input submit button" disabled>
      <input type="reset" value="Input reset button" disabled>
      <input type="button" value="Input button" disabled>
    </p>
  </fieldset>
</form>

{{< callout warning >}}
{{< partial "callout-warning-input-support.md" >}}
{{< /callout >}}

### Pointers en botones

Reboot incluye una mejora para `role="button"` para cambiar el cursor predeterminado a `pointer`. Agrega este atributo a los elementos para ayudar a indicar que los elementos son interactivos. Este rol no es necesario para los elementos `<button>`, que obtienen su propio cambio de `cursor`.

{{< example >}}
<span role="button" tabindex="0">Botón que no es un elemento button</span>
{{< /example >}}

## Elementos misceláneos

### Direcciones

El elemento `<address>` se actualiza para restablecer el `font-style` predeterminado del navegador de `italic` a `normal`. `line-height` ahora también se hereda, y se ha agregado `margin-bottom: 1rem`. Las `<address>` son para presentar la información de contacto. Preserva el formato terminando las líneas con `<br>`.

<div class="bd-example">
  <address>
    <strong>Twitter, Inc.</strong><br>
    1355 Market St, Suite 900<br>
    San Francisco, CA 94103<br>
    <abbr title="Phone">P:</abbr> (123) 456-7890
  </address>

  <address>
    <strong>Nombre completo</strong><br>
    <a href="mailto:first.last@example.com">first.last@example.com</a>
  </address>
</div>

### Blockquote

El `margin` predeterminado en las blockquotes (comillas en bloque) es `1em 40px`, por lo que lo restablecemos a `0 0 1rem` para que sea algo más consistente con otros elementos.

<div class="bd-example">
  <blockquote class="blockquote">
    <p>Una cita conocida, contenida en un elemento blockquote.</p>
  </blockquote>
  <p>Alguien famoso en <cite title="Source Title">Source Title</cite></p>
</div>

### Elementos en línea

El elemento `<abbr>` recibe un estilo básico para que se destaque entre el texto del párrafo.

<div class="bd-example">
  El elemento de abreviatura <abbr title="HyperText Markup Language">HTML</abbr>.
</div>

### Resumen

El `cursor` predeterminado en `<summary>` es `text`, por lo que lo restablecemos a `pointer` para transmitir que se puede interactuar con el elemento haciendo clic en él.

<div class="bd-example">
  <details>
    <summary>Algunos detalles</summary>
    <p>Más información sobre los detalles.</p>
  </details>

  <details open>
    <summary>Aún más detalles</summary>
    <p>Aquí hay aún más detalles sobre los detalles.</p>
  </details>
</div>

{{< callout info >}}
{{< partial "maybe-interested-3.md" >}}
{{< /callout >}}

## Atributo HTML5 `[hidden]`

HTML5 agrega [un nuevo atributo global llamado `[hidden]`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden), que tiene el estilo `display: none` por defecto. Tomando prestada una idea de [PureCSS](https://purecss.io/), mejoramos este valor predeterminado haciendo `[hidden] { display: none !important; }` para ayudar a evitar que su `display` se sobrescriba accidentalmente.


```html
<input type="text" hidden>
```

{{< callout warning >}}
##### Incompatibilidad jQuery

`[hidden]` no es compatible con los métodos `$(...).hide()` y `$(...).show()` de jQuery. Por lo tanto, actualmente no respaldamos especialmente `[hidden]` sobre otras técnicas para administrar la propiedad `display` de elementos.
{{< /callout >}}

Para alternar simplemente la visibilidad de un elemento, lo que significa que su `display` no se modifica y el elemento aún puede afectar el flujo del documento, usa [la clase `.invisible`]({{< docsref "/utilities/visibility" >}}).
