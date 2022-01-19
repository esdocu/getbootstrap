---
layout: docs
title: Tablas
description: Documentación y ejemplos para el estilo opcional de tablas (dado su uso frecuente en los complementos de JavaScript) con Bootstrap.
group: content
toc: true
---

## Descripción general

Debido al uso generalizado de elementos `<table>` en widgets de terceros como calendarios y selectores de fechas, las tablas de Bootstrap son **opt-in**. Agrega la clase base `.table` a cualquier `<table>`, luego amplía con nuestras clases de modificadores opcionales o estilos personalizados. No todos los estilos de tabla se heredan en Bootstrap, lo que significa que cualquier tabla anidada se puede diseñar independientemente del padre.

Usando el marcado de tabla más básico, así es como se ven las tablas basadas en `.table` en Bootstrap.

{{< table class="table" simplified="false" >}}

## Variantes

Usa clases contextuales para colorear tablas, filas de tablas o celdas individuales.

<div class="bd-example">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Clase</th>
        <th scope="col">Encabezado</th>
        <th scope="col">Encabezado</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Default</th>
        <td>Celda</td>
        <td>Celda</td>
      </tr>
      {{< table.inline >}}
      {{- range (index $.Site.Data "theme-colors") }}
        <tr class="table-{{ .name }}">
          <th scope="row">{{ .name | title }}</th>
          <td>Celda</td>
          <td>Celda</td>
        </tr>
      {{- end -}}
      {{< /table.inline >}}
    </tbody>
  </table>
</div>

{{< highlight html >}}
<!-- En tablas -->{{< table.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<table class="table-{{ .name }}">...</table>
{{- end -}}
{{< /table.inline >}}

<!-- En filas -->{{< table.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<tr class="table-{{ .name }}">...</tr>
{{- end -}}
{{< /table.inline >}}

<!-- En celdas (`td` or `th`) -->
<tr>{{< table.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
  <td class="table-{{ .name }}">...</td>
{{- end -}}
{{< /table.inline >}}
</tr>
{{< /highlight >}}

{{< callout info >}}
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## Tablas acentuadas

### Filas de rayas

Usa `.table-striped` para agregar rayas de cebra a cualquier fila de la tabla dentro de `<tbody>`.

{{< table class="table table-striped" >}}

Estas clases también se pueden agregar a las variantes de la tabla:

{{< table class="table table-dark table-striped" >}}

{{< table class="table table-success table-striped" >}}

### Filas con estado *hover*

Agrega `.table-hover` para habilitar un estado *hover* en las filas de la tabla dentro de `<tbody>`.

{{< table class="table table-hover" >}}

{{< table class="table table-dark table-hover" >}}

Estas filas hover también se pueden combinar con la variante a rayas (`.table-striped`):

{{< table class="table table-striped table-hover" >}}

### Filas y celdas *active*

Resalta una fila o celda de la tabla agregando una clase `.table-active`.

<div class="bd-example">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Apellido</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-active">
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2" class="table-active">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<table class="table">
  <thead>
    ...
  </thead>
  <tbody>
    <tr class="table-active">
      ...
    </tr>
    <tr>
      ...
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2" class="table-active">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
```

<div class="bd-example">
  <table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Apellido</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-active">
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2" class="table-active">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<table class="table table-dark">
  <thead>
    ...
  </thead>
  <tbody>
    <tr class="table-active">
      ...
    </tr>
    <tr>
      ...
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2" class="table-active">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
```

## ¿Cómo funcionan las variantes y las tablas acentuadas?

Para las tablas acentuadas ([filas rayadas](#striped-rows), [filas hover](#hoverable-rows) y [tablas activas](#active-tables)), usamos algunas técnicas para hacer que estos efectos funcionen para todas nuestras [variantes de tabla](#variants):

- Comenzamos configurando el fondo de una celda de tabla con la propiedad personalizada `--bs-table-bg`. Todas las variantes de la tabla establecen esa propiedad personalizada para colorear las celdas de la tabla. De esta forma, no nos meteremos en problemas si se utilizan colores semitransparentes como fondos de tablas.
- Luego agregamos una sombra en las celdas de la tabla con `box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);` para superponer cualquier `background-color` especificado. Debido a que usamos una gran extensión y sin desenfoque, el color será monótono. Dado que `--bs-table-accent-bg` no está configurado de forma predeterminada, no tenemos una sombra predeterminada.
- Cuando se agregan las clases `.table-striped`, `.table-hover` o `.table-active`, `--bs-table-accent-bg` se establece en un color semitransparente para colorear el fondo.
- Para cada variante de tabla, generamos un color `--bs-table-accent-bg` con el mayor contraste según ese color. Por ejemplo, el accent color para `.table-primary` es más oscuro mientras que `.table-dark` tiene un accent color más claro.
- Los colores del texto y del borde se generan de la misma manera y sus colores se heredan de forma predeterminada.

Detrás de escena se ve así:

{{< scss-docs name="table-variant" file="scss/mixins/_table-variants.scss" >}}

## Bordes de la tabla

### Tablas bordeadas

Agrega `.table-bordered` para mostrar bordes en todos los lados de la tabla y las celdas.

{{< table class="table table-bordered" >}}

Se pueden agregar [utilidades de color de borde]({{< docsref "/utilities/borders#border-color" >}}) para cambiar los colores:

{{< table class="table table-bordered border-primary" >}}

### Tablas sin bordes

Agrega `.table-borderless` para una tabla sin bordes.

{{< table class="table table-borderless" >}}

{{< table class="table table-dark table-borderless" >}}

## Tablas compactas

Agrega `.table-sm` para hacer que cualquier `.table` sea más compacta cortando todo el `padding` de las celdas por la mitad.

{{< table class="table table-sm" >}}

{{< table class="table table-dark table-sm" >}}

## Alineamiento vertical

Las celdas de la tabla de `<thead>` siempre están alineadas verticalmente hacia abajo. Las celdas de la tabla en `<tbody>` heredan su alineación de `<table>` y están alineadas en la parte superior por defecto. Usa las clases [vertical align]({{< docsref "/utilities/vertical-align" >}}) para volver a alinear donde sea necesario.

<div class="bd-example">
  <div class="table-responsive">
    <table class="table align-middle">
      <thead>
        <tr>
          <th scope="col" class="w-25">Encabezado 1</th>
          <th scope="col" class="w-25">Encabezado 2</th>
          <th scope="col" class="w-25">Encabezado 3</th>
          <th scope="col" class="w-25">Encabezado 4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Esta celda hereda <code>vertical-align: middle;</code> de la tabla</td>
          <td>Esta celda hereda <code>vertical-align: middle;</code> de la tabla</td>
          <td>Esta celda hereda <code>vertical-align: middle;</code> de la tabla</td>
          <td>Este es un texto de marcador de posición, destinado a ocupar bastante espacio vertical, para demostrar cómo funciona la alineación vertical en las celdas anteriores.</td>
        </tr>
        <tr class="align-bottom">
          <td>Esta celda hereda <code>vertical-align: bottom;</code> de la fila de la tabla</td>
          <td>Esta celda hereda <code>vertical-align: bottom;</code> de la fila de la tabla</td>
          <td>Esta celda hereda <code>vertical-align: bottom;</code> de la fila de la tabla</td>
          <td>Este es un texto de marcador de posición, destinado a ocupar bastante espacio vertical, para demostrar cómo funciona la alineación vertical en las celdas anteriores.</td>
        </tr>
        <tr>
          <td>Esta celda hereda <code>vertical-align: middle;</code> de la tabla</td>
          <td>Esta celda hereda <code>vertical-align: middle;</code> de la tabla</td>
          <td class="align-top">Esta celda está alineada en la parte superior.</td>
          <td>Este es un texto de marcador de posición, destinado a ocupar bastante espacio vertical, para demostrar cómo funciona la alineación vertical en las celdas anteriores.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```html
<div class="table-responsive">
  <table class="table align-middle">
    <thead>
      <tr>
        ...
      </tr>
    </thead>
    <tbody>
      <tr>
        ...
      </tr>
      <tr class="align-bottom">
        ...
      </tr>
      <tr>
        <td>...</td>
        <td>...</td>
        <td class="align-top">Esta celda está alineada en la parte superior.</td>
        <td>...</td>
      </tr>
    </tbody>
  </table>
</div>
```

## Anidamiento

Las tablas anidadas no heredan los estilos de borde, los estilos *active* y las variantes de tabla.

<div class="bd-example">
<table class="table table-striped table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td colspan="4">
        <table class="table mb-0">
          <thead>
            <tr>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">A</th>
              <td>Nombre</td>
              <td>Apellido</td>
            </tr>
            <tr>
              <th scope="row">B</th>
              <td>Nombre</td>
              <td>Apellido</td>
            </tr>
            <tr>
              <th scope="row">C</th>
              <td>Nombre</td>
              <td>Apellido</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>

```html
<table class="table table-striped">
  <thead>
    ...
  </thead>
  <tbody>
    ...
    <tr>
      <td colspan="4">
        <table class="table mb-0">
          ...
        </table>
      </td>
    </tr>
    ...
  </tbody>
</table>
```

## Cómo funciona el anidamiento

Para evitar que _cualquier_ estilo se filtre a las tablas anidadas, usamos el selector combinador secundario (`>`) en nuestro CSS. Dado que necesitamos apuntar a todos los `td`s y `th`s en `thead`, `tbody` y `tfoot`, nuestro selector se vería bastante largo sin él. Como tal, usamos el selector `.table > :not(caption) > * > *` de aspecto bastante extraño para apuntar a todos los `td`s y `th`s de `.table`, pero no a ninguna de las posibles tablas anidadas.

Ten en cuenta que si agregas `<tr>`s como elementos secundarios directos de una tabla, esos `<tr>` se incluirán en un `<tbody>` de forma predeterminada, lo que hará que nuestros selectores funcionen según lo previsto.

## Anatomía

### Encabezado de tabla

De manera similar a las tablas y las tablas oscuras, usa las clases de modificadores `.table-light` o `.table-dark` para hacer que `<thead>`s aparezca gris claro u oscuro.

<div class="bd-example">
<table class="table">
  <thead class="table-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>

```html
<table class="table">
  <thead class="table-light">
    ...
  </thead>
  <tbody>
    ...
  </tbody>
</table>
```

<div class="bd-example">
<table class="table">
  <thead class="table-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>

```html
<table class="table">
  <thead class="table-dark">
    ...
  </thead>
  <tbody>
    ...
  </tbody>
</table>
```

### Pie de tabla

<div class="bd-example">
<table class="table">
  <thead class="table-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Footer</td>
      <td>Footer</td>
      <td>Footer</td>
      <td>Footer</td>
    </tr>
  </tfoot>
</table>
</div>

```html
<table class="table">
  <thead>
    ...
  </thead>
  <tbody>
    ...
  </tbody>
  <tfoot>
    ...
  </tfoot>
</table>
```

### Captions

Un `<caption>` funciona como un encabezado para una tabla. Ayuda a los usuarios con lectores de pantalla a encontrar una tabla y entender de qué se trata y decidir si quieren leerla.

<div class="bd-example">
  <table class="table">
    <caption>Lista de usuarios</caption>
    {{< partial "table-content" >}}
  </table>
</div>

```html
<table class="table table-sm">
  <caption>Lista de usuarios</caption>
  <thead>
    ...
  </thead>
  <tbody>
    ...
  </tbody>
</table>
```

También puedes colocar `<caption>` en la parte superior de la tabla con `.caption-top`.

{{< example >}}
<table class="table caption-top">
  <caption>Lista de usuarios</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
{{< /example >}}

## Tablas responsive

Las tablas responsive permiten que las tablas se desplacen horizontalmente con facilidad. Haz que cualquier tabla responda en todas los viewports envolviendo una `.table` con `.table-responsive`. O elije un breakpoint máximo con el que tener una tabla responsive usando `.table-responsive{-sm|-md|-lg|-xl|-xxl}`.

{{< callout warning >}}
##### Recorte/truncamiento vertical

Las tablas responsive utilizan `overflow-y: hidden`, que recorta cualquier contenido que vaya más allá de los bordes inferior o superior de la tabla. En particular, esto puede recortar menús desplegables y otros widgets de terceros.
{{< /callout >}}

### Siempre responsive

En cada breakpoint, usa `.table-responsive` para tablas de desplazamiento horizontal.

<div class="bd-example">
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Encabezado</th>
          <th scope="col">Encabezado</th>
          <th scope="col">Encabezado</th>
          <th scope="col">Encabezado</th>
          <th scope="col">Encabezado</th>
          <th scope="col">Encabezado</th>
          <th scope="col">Encabezado</th>
          <th scope="col">Encabezado</th>
          <th scope="col">Encabezado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```html
<div class="table-responsive">
  <table class="table">
    ...
  </table>
</div>
```

### Breakpoint specifico

Usa `.table-responsive{-sm|-md|-lg|-xl|-xxl}` según sea necesario para crear tablas responsive hasta un breakpoint particular. A partir de ese breakpoint, la tabla se comportará normalmente y no se desplazará horizontalmente.

**Estas tablas pueden aparecer rotas hasta que sus estilos responsive se apliquen a anchos de viewports específicos.**

{{< tables.inline >}}
{{ range $.Site.Data.breakpoints }}
{{ if not (eq . "xs") }}
<div class="bd-example">
  <div class="table-responsive{{ .abbr }}">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Encabezado</th>
          <th scope="col">Encabezado</th>
          <th scope="col">Encabezado</th>
          <th scope="col">Encabezado</th>
          <th scope="col">Encabezado</th>
          <th scope="col">Encabezado</th>
          <th scope="col">Encabezado</th>
          <th scope="col">Encabezado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
{{ end -}}
{{- end -}}
{{< /tables.inline >}}

{{< highlight html >}}
{{< tables.inline >}}
{{- range $.Site.Data.breakpoints -}}
{{- if not (eq . "xs") }}
<div class="table-responsive{{ .abbr }}">
  <table class="table">
    ...
  </table>
</div>
{{ end -}}
{{- end -}}
{{< /tables.inline >}}
{{< /highlight >}}

## Sass

### Variables

{{< scss-docs name="table-variables" file="scss/_variables.scss" >}}

### Loop

{{< scss-docs name="table-loop" file="scss/_variables.scss" >}}

### Personalización

- Las variables de factor (`$table-striped-bg-factor`, `$table-active-bg-factor` & `$table-hover-bg-factor`) se utilizan para determinar el contraste en las variantes de la tabla.
- Además de las variantes de tablas claras y oscuras, los colores del tema se aclaran con la variable `$table-bg-scale`.