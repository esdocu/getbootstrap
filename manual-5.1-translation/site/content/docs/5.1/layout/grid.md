---
layout: docs
title: Sistema de cuadrícula (Grid)
description: Utiliza nuestra potente cuadrícula flexbox mobile-first para crear diseños de todas las formas y tamaños gracias a un sistema de doce columnas, seis niveles responsive (breakpoints) predeterminados, variables Sass y mixins, y docenas de clases predefinidas.
group: layout
toc: true
---

## Ejemplo

El sistema de cuadrícula (grid) de Bootstrap utiliza una serie de contenedores, filas y columnas para diseñar y alinear el contenido. Está construido con [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) y es completamente responsive. A continuación se muestra un ejemplo y una explicación detallada de cómo se compone el sistema de cuadrículo.

{{< callout info >}}
**¿Eres nuevo o no estás familiarizado con flexbox?** [Lee esta guía de flexbox de CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background) para conocer los antecedentes, terminología, directrices y fragmentos de código.
{{< /callout >}}

{{< example class="bd-example-row" >}}
<div class="container">
  <div class="row">
    <div class="col">
      Columna
    </div>
    <div class="col">
      Columna
    </div>
    <div class="col">
      Columna
    </div>
  </div>
</div>
{{< /example >}}

El ejemplo anterior crea tres columnas de igual ancho en todos los dispositivos y viewports utilizando nuestras clases de cuadrícula predefinidas. Esas columnas están centradas en la página con el `.container` principal.

## ¿Cómo funciona el sistema de cuadrícula (Grid)?

Desglosándolo, así es como se compone el sistema de cuadrícula:

- **Nuestra cuadrícula admite [seis breakpoints responsive]({{< docsref "/layout/breakpoints" >}}).** Los breakpoints se basan en media queries `min-width`, lo que significa que afectan ese breakpoint y todos los anteriores (por ejemplo, `.col-sm-4` se aplica a `sm`, `md`, `lg`, `xl` y `xxl`). Esto significa que puedes controlar el tamaño y el comportamiento del contenedor y la columna en cada breakpoint.

- **Los contenedores centran y rellenan horizontalmente su contenido.** Usa `.container` para un ancho de píxel responsive, `.container-fluid` para `width: 100%` en todos los viewports y dispositivos, o un contenedor responsive (p. ej., `.container-md`) para una combinación entre fluido y anchos en píxeles.


- **Las filas son envoltorios para las columnas.** Cada columna tiene un `padding` horizontal (llamado *gutter*) para controlar el espacio entre ellas. Este `padding` luego se contrarresta en las filas con márgenes negativos para garantizar que el contenido de tus columnas esté alineado visualmente en el lado izquierdo. Las filas también admiten clases modificadoras para [aplicar uniformemente el tamaño de columna](#row-columns) y [clases de *gutter*]({{< docsref "/layout/gutters" >}}) para cambiar el espaciado de tu contenido.

- **Las columnas son increíblemente flexibles.** Hay 12 columnas de plantilla disponibles por fila, lo que te permite crear diferentes combinaciones de elementos que abarcan cualquier número de columnas. Las clases de columna indican el número de columnas de plantilla que abarcan (por ejemplo, `col-4` abarca cuatro). `width`s se establecen en porcentajes para que siempre tengas el mismo tamaño relativo.


- **Los gutters también son responsive y personalizables.** [Las clases *Gutter* están disponibles]({{< docsref "/layout/gutters" >}}) en todos los breakpoints, con los mismos tamaños que nuestro [espaciado de margin y padding]({{< docsref "/utilities/spacing" >}}). Cambia los gutters horizontales con las clases `.gx-*`, los gutters verticales con `.gy-*` o todos los gutters con las clases `.g-*`. `.g-0` también está disponible para eliminar gutters.

- **Las variables Sass, los mapas y los mixins alimentan la cuadrícula.** Si no deseas usar las clases de cuadrícula predefinidas en Bootstrap, puedes usar nuestra [código fuente Sass de cuedrículas](#sass) para crear el tuyo propio con más marcado semántico. También incluimos algunas propiedades personalizadas de CSS para consumir estas variables de Sass para una mayor flexibilidad.

Ten en cuenta las limitaciones y los [errores relacionados con flexbox](https://github.com/philipwalton/flexbugs), como la [incapacidad de usar algunos elementos HTML como contenedores flexibles](https://github.com/philipwalton/flexbugs#flexbug-9).

## Opciones de cuadrícula

El sistema de cuadrícula de Bootstrap puede adaptarse a los seis breakpoints predeterminados y a cualquier breakpoint que personalices. Los seis niveles de cuadrícula predeterminados son los siguientes:

- Extra small (xs)
- Small (sm)
- Medium (md)
- Large (lg)
- Extra large (xl)
- Extra extra large (xxl)

Como se indicó anteriormente, cada uno de estos breakpoints tienen su propio contenedor, prefijo de clase único y modificadores. Así es como cambia la cuadrícula en estos breakpoints:

<table class="table mb-4">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">
        xs<br>
        <span class="fw-normal">&lt;576px</span>
      </th>
      <th scope="col">
        sm<br>
        <span class="fw-normal">&ge;576px</span>
      </th>
      <th scope="col">
        md<br>
        <span class="fw-normal">&ge;768px</span>
      </th>
      <th scope="col">
        lg<br>
        <span class="fw-normal">&ge;992px</span>
      </th>
      <th scope="col">
        xl<br>
        <span class="fw-normal">&ge;1200px</span>
      </th>
      <th scope="col">
        xxl<br>
        <span class="fw-normal">&ge;1400px</span>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="text-nowrap" scope="row">Contenedor <code class="fw-normal">max-width</code></th>
      <td>None (auto)</td>
      <td>540px</td>
      <td>720px</td>
      <td>960px</td>
      <td>1140px</td>
      <td>1320px</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Prefijo de clase</th>
      <td><code>.col-</code></td>
      <td><code>.col-sm-</code></td>
      <td><code>.col-md-</code></td>
      <td><code>.col-lg-</code></td>
      <td><code>.col-xl-</code></td>
      <td><code>.col-xxl-</code></td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row"># de columnas</th>
      <td colspan="6">12</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Ancho de gutter</th>
      <td colspan="6">1.5rem (.75rem a izquierda y derecha)</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Gutters personalizados</th>
      <td colspan="6"><a href="{{< docsref "/layout/gutters" >}}">Si</a></td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Anidable</th>
      <td colspan="6"><a href="#nesting">Si</a></td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Ordenamiento de columnas</th>
      <td colspan="6"><a href="{{< docsref "/layout/columns#reordering" >}}">Si</a></td>
    </tr>
  </tbody>
</table>

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

## Columnas con auto-layout

Utiliza clases de columnas de breakpoints específicos para facilitar la asignación de tamaño de las columnas sin una clase numerada explícita como `.col-sm-6`.

### Anchos iguales

Por ejemplo, aquí hay dos diseños de cuadrícula que se aplican a cada dispositivo y viewport, desde `xs` hasta `xxl`. Agrega cualquier número de clases sin unidades para cada breakpoint que necesites y cada columna tendrá el mismo ancho.

{{< example class="bd-example-row" >}}
<div class="container">
  <div class="row">
    <div class="col">
      1 de 2
    </div>
    <div class="col">
      2 de 2
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 de 3
    </div>
    <div class="col">
      2 de 3
    </div>
    <div class="col">
      3 de 3
    </div>
  </div>
</div>
{{< /example >}}

### Establecer un ancho de columna

El auto-layout para las columnas de cuadrícula de flexbox también significa que puedes establecer el ancho de una columna y hacer que las columnas hermanas cambien de tamaño automáticamente a su alrededor. Puedes usar clases de cuadrícula predefinidas (como se muestra a continuación), combinaciones de cuadrícula o anchos en línea. Ten en cuenta que las otras columnas cambiarán de tamaño sin importar el ancho de la columna central.

{{< example class="bd-example-row" >}}
<div class="container">
  <div class="row">
    <div class="col">
      1 de 3
    </div>
    <div class="col-6">
      2 de 3 (más ancho)
    </div>
    <div class="col">
      3 de 3
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 de 3
    </div>
    <div class="col-5">
      2 de 3 (más ancho)
    </div>
    <div class="col">
      3 de 3
    </div>
  </div>
</div>
{{< /example >}}

### Contenido de ancho variable

Usa las clases `col-{breakpoint}-auto` para dimensionar las columnas en función del ancho natural de su contenido.

{{< example class="bd-example-row" >}}
<div class="container">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2">
      1 de 3
    </div>
    <div class="col-md-auto">
      Contenido de ancho variable
    </div>
    <div class="col col-lg-2">
      3 de 3
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 de 3
    </div>
    <div class="col-md-auto">
      Contenido de ancho variable
    </div>
    <div class="col col-lg-2">
      3 de 3
    </div>
  </div>
</div>
{{< /example >}}

## Clases responsive

La cuadrícula de Bootstrap incluye seis niveles de clases predefinidas para crear diseños responsive complejos. Personaliza el tamaño de tus columnas en dispositivos extra pequeños, pequeños, medianos, grandes o extra grandes como mejor te parezca.

{{< callout info >}}
{{< partial "maybe-interested-2.md" >}}
{{< /callout >}}

### Todos los breakpoints

Para cuadrículas que son iguales desde el dispositivo más pequeño hasta el más grande, usa las clases `.col` y `.col-*`. Especifica una clase numerada cuando necesites una columna de tamaño particular; de lo contrario, siéntate libre de apegarte a `.col`.

{{< example class="bd-example-row" >}}
<div class="container">
  <div class="row">
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
  </div>
  <div class="row">
    <div class="col-8">col-8</div>
    <div class="col-4">col-4</div>
  </div>
</div>
{{< /example >}}

### De apilado a horizontal

Usando un solo conjunto de clases `.col-sm-*`, puedes crear un sistema de cuadrícula básico que comienza apilado y se vuelve horizontal en el breakpoint pequeño (`sm`).

{{< example class="bd-example-row" >}}
<div class="container">
  <div class="row">
    <div class="col-sm-8">col-sm-8</div>
    <div class="col-sm-4">col-sm-4</div>
  </div>
  <div class="row">
    <div class="col-sm">col-sm</div>
    <div class="col-sm">col-sm</div>
    <div class="col-sm">col-sm</div>
  </div>
</div>
{{< /example >}}

### Mezclar y combinar

¿No quieres que tus columnas simplemente se apilen en algunos niveles de cuadrícula? Usa una combinación de diferentes clases para cada nivel según sea necesario. Mira el ejemplo a continuación para tener una mejor idea de cómo funciona todo.

{{< example class="bd-example-row" >}}
<div class="container">
  <!-- Apila las columnas en dispositivos móviles haciendo una de ancho completo y la otra de ancho medio -->
  <div class="row">
    <div class="col-md-8">.col-md-8</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>

  <!-- Las columnas comienzan con un 50% de ancho en dispositivos móviles y cambian hasta un 33,3% de ancho en computadoras de escritorio -->
  <div class="row">
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>

  <!-- Las columnas siempre tienen un 50% de ancho, en dispositivos móviles y de escritorio -->
  <div class="row">
    <div class="col-6">.col-6</div>
    <div class="col-6">.col-6</div>
  </div>
</div>
{{< /example >}}

### Columnas de fila

Usa las clases responsive `.row-cols-*` para establecer rápidamente la cantidad de columnas que mejor representen tu contenido y diseño. Mientras que las clases `.col-*` normales se aplican a las columnas individuales (p. ej., `.col-md-4`), las clases de *columnas de fila* se establecen en el `.row` principal como acceso directo. Con `.row-cols-auto` puedes dar a las columnas su ancho natural.

Utiliza estas clases de filas y columnas para crear rápidamente diseños de cuadrícula básicos o para controlar los diseños de tus tarjetas.

{{< example class="bd-example-row" >}}
<div class="container">
  <div class="row row-cols-2">
    <div class="col">Columna</div>
    <div class="col">Columna</div>
    <div class="col">Columna</div>
    <div class="col">Columna</div>
  </div>
</div>
{{< /example >}}

{{< example class="bd-example-row" >}}
<div class="container">
  <div class="row row-cols-3">
    <div class="col">Columna</div>
    <div class="col">Columna</div>
    <div class="col">Columna</div>
    <div class="col">Columna</div>
  </div>
</div>
{{< /example >}}

{{< example class="bd-example-row" >}}
<div class="container">
  <div class="row row-cols-auto">
    <div class="col">Columna</div>
    <div class="col">Columna</div>
    <div class="col">Columna</div>
    <div class="col">Columna</div>
  </div>
</div>
{{< /example >}}

{{< example class="bd-example-row" >}}
<div class="container">
  <div class="row row-cols-4">
    <div class="col">Columna</div>
    <div class="col">Columna</div>
    <div class="col">Columna</div>
    <div class="col">Columna</div>
  </div>
</div>
{{< /example >}}

{{< example class="bd-example-row" >}}
<div class="container">
  <div class="row row-cols-4">
    <div class="col">Columna</div>
    <div class="col">Columna</div>
    <div class="col-6">Columna</div>
    <div class="col">Columna</div>
  </div>
</div>
{{< /example >}}

{{< example class="bd-example-row" >}}
<div class="container">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div class="col">Columna</div>
    <div class="col">Columna</div>
    <div class="col">Columna</div>
    <div class="col">Columna</div>
  </div>
</div>
{{< /example >}}

También puedes usar el mixin de Sass que lo acompaña, `row-cols()`:

```scss
.element {
  // Tres columnas al inicio
  @include row-cols(3);

  // Cinco columnas desde el breakpoint medium hacia arriba
  @include media-breakpoint-up(md) {
    @include row-cols(5);
  }
}
```

## Anidamiento

Para anidar tu contenido con la cuadrícula predeterminada, agrega un nuevo `.row` y un conjunto de columnas `.col-sm-*` dentro de una columna `.col-sm-*` existente. Las filas anidadas deben incluir un conjunto de columnas que suman 12 o menos (no es necesario que uses las 12 columnas disponibles).

{{< example class="bd-example-row" >}}
<div class="container">
  <div class="row">
    <div class="col-sm-3">
      Nivel 1: .col-sm-3
    </div>
    <div class="col-sm-9">
      <div class="row">
        <div class="col-8 col-sm-6">
          Nivel 2: .col-8 .col-sm-6
        </div>
        <div class="col-4 col-sm-6">
          Nivel 2: .col-4 .col-sm-6
        </div>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

## Sass

Al usar los archivos fuente Sass de Bootstrap, tienes la opción de usar variables Sass y mixins para crear diseños de página personalizados, semánticos y responsive. Nuestras clases de cuadrícula predefinidas utilizan estas mismas variables y mixins para proporcionar un conjunto completo de clases listas para usar para rápidos diseños responsive.

{{< callout info >}}
{{< partial "maybe-interested-3.md" >}}
{{< /callout >}}

### Variables

Las variables y los mapas determinan el número de columnas, el ancho del gutter y el punto de media query en el que comienzan las columnas flotantes. Los usamos para generar las clases de cuadrícula predefinidas documentadas anteriormente, así como para los mixins personalizados que se enumeran a continuación.

```scss
$grid-columns:      12;
$grid-gutter-width: 1.5rem;
```

{{< scss-docs name="grid-breakpoints" file="scss/_variables.scss" >}}

{{< scss-docs name="container-max-widths" file="scss/_variables.scss" >}}

### Mixins

Los mixins se utilizan junto con las variables de cuadrícula para generar CSS semántico para columnas de cuadrícula individuales.

```scss
// Crea un contenedor para una serie de columnas
@include make-row();

// Hacer que el elemento esté listo para la cuadrícula (aplicando todo menos el ancho)
@include make-col-ready();

// Sin valores de tamaño opcionales, el mixin creará columnas iguales (similar a usar .col)
@include make-col();
@include make-col($size, $columns: $grid-columns);

// Compensar con márgenes
@include make-col-offset($size, $columns: $grid-columns);
```

### Ejemplo de uso

Puedes modificar las variables a tus propios valores personalizados, o simplemente usar los mixins con sus valores predeterminados. Este es un ejemplo del uso de la configuración predeterminada para crear un diseño de dos columnas con un espacio entre ellas.

```scss
.example-container {
  @include make-container();
  // Asegúrate de definir este ancho después del mixin para sobrescribir
  // `width: 100%` generado por `make-container()`
  width: 800px;
}

.example-row {
  @include make-row();
}

.example-content-main {
  @include make-col-ready();

  @include media-breakpoint-up(sm) {
    @include make-col(6);
  }
  @include media-breakpoint-up(lg) {
    @include make-col(8);
  }
}

.example-content-secondary {
  @include make-col-ready();

  @include media-breakpoint-up(sm) {
    @include make-col(6);
  }
  @include media-breakpoint-up(lg) {
    @include make-col(4);
  }
}
```

{{< example >}}
<div class="example-container">
  <div class="example-row">
    <div class="example-content-main">Contenido principal</div>
    <div class="example-content-secondary">Contenido secundario</div>
  </div>
</div>
{{< /example >}}

## Personalización de la cuadrícula

Utilizando nuestras variables y mapas Sass de cuadrícula incorporados, es posible personalizar completamente las clases de cuadrícula predefinidas. Cambia la cantidad de niveles, las dimensiones de las media queries y los anchos de los contenedores, luego vuelve a compilar.

### Columnas y gutters

El número de columnas de la cuadrícula se puede modificar mediante variables Sass. `$grid-columns` se utiliza para generar los anchos (en porcentaje) de cada columna individual, mientras que `$grid-gutter-width` establece el ancho de los gutters (espacios de separación) de las columnas.

```scss
$grid-columns: 12 !default;
$grid-gutter-width: 1.5rem !default;
```

### Niveles de cuadrícula

Yendo más allá de las columnas en sí, también puedes personalizar la cantidad de niveles de cuadrícula. Si quisieras solo cuatro niveles de cuadrícula, actualizarías `$grid-breakpoints` y `$container-max-widths` a algo como esto:

```scss
$grid-breakpoints: (
  xs: 0,
  sm: 480px,
  md: 768px,
  lg: 1024px
);

$container-max-widths: (
  sm: 420px,
  md: 720px,
  lg: 960px
);
```

Al realizar cambios en las variables o mapas de Sass, deberás guardar los cambios y volver a compilar. Al hacerlo, se generará un nuevo conjunto de clases de cuadrícula predefinidas para anchos de columna, compensaciones y ordenación. Las utilidades de visibilidad responsive también se actualizarán para usar los breakpoints personalizados. Asegúrate de establecer los valores de cuadrícula en `px` (no en `rem`, `em` o `%`).