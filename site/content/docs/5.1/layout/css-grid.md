---
layout: docs
title: Cuadrícula CSS
description: Aprende a habilitar, usar y personalizar nuestro sistema de diseño alternativo basado en CSS Grid con ejemplos y fragmentos de código.
group: layout
toc: true
---

El sistema de cuadrícula predeterminado de Bootstrap representa la culminación de más de una década de técnicas de diseño de CSS, probadas por millones de personas. Pero también se creó sin muchas de las funciones y técnicas modernas de CSS que vemos en navegadores como el nuevo CSS Grid.

{{< callout warning >}}
**Aviso: ¡nuestro sistema CSS Grid es experimental y está habilitado a partir de la versión 5.1.0!** Lo incluimos en el CSS de nuestra documentación para demostrártelo, pero está deshabilitado de manera predeterminada. Sigue leyendo para aprender cómo habilitarlo en tus proyectos.
{{< /callout >}}

## Cómo funciona

Con Bootstrap 5, agregamos la opción para habilitar un sistema de cuadrícula separado que se basa en CSS Grid, pero con un toque de Bootstrap. Todavía recibe clases que puedes aplicar por capricho para crear diseños responsive, pero con un enfoque diferente bajo el capó.

- **CSS Grid es opcional.** Desactiva el sistema de cuadrícula predeterminado configurando `$enable-grid-classes: false` y habilita CSS Grid configurando `$enable-cssgrid: true`. Luego, vuelve a compilar tu Sass.


- **Reemplaza las instancias de `.row` con `.grid`.** La clase `.grid` establece `display: grid` y crea un `grid-template` que se construye con tu HTML.

- **Reemplaza las clases `.col-*` con las clases `.g-col-*`.** Esto se debe a que nuestras columnas CSS Grid usan la propiedad `grid-column` en lugar de `width`.

- **Los tamaños de columnas y gutters se establecen a través de variables CSS.** Establécelos en el `.grid` principal y personalízalos como lo desees, en línea o en una hoja de estilo, con `--bs-columns` y `--bs-gap`.

En el futuro, es probable que Bootstrap cambie a una solución híbrida, ya que la propiedad `gap` ha logrado una compatibilidad casi completa del navegador con flexbox.

## Diferencias clave

En comparación con el sistema de cuadrícula predeterminado:

- Las utilidades de Flex no afectan las columnas de CSS Grid de la misma manera.

- Los huecos (gaps) reemplazan a los gutters. La propiedad `gap` reemplaza el `padding` horizontal de nuestro sistema de cuadrícula predeterminado y funciona más como `margin`.

- Como tal, a diferencia de `.row`s, `.grid`s no tienen márgenes negativos y las utilidades de margen no se pueden usar para cambiar los gutters de la cuadrícula. Los espacios de cuadrícula (gaps) se aplican horizontal y verticalmente de forma predeterminada. Consulta la [sección de personalización](#customizing) para obtener más detalles.

- Los estilos en línea y personalizados deben verse como reemplazos de las clases de modificadores (por ejemplo, `style="--bs-columns: 3;"` vs `class="row-cols-3"`).

- El anidamiento funciona de manera similar, pero puede requerir que restablezcas los recuentos de columnas en cada instancia de un `.grid` anidado. Consulta la [sección de anidamiento](#nesting) para obtener más información.

## Ejemplos

### Tres columnas

Se pueden crear tres columnas de igual ancho en todas los viewports y dispositivos usando las clases `.g-col-4`. Agrega [clases responsive](#responsive) para cambiar el diseño según el tamaño del viewport.

{{< example class="bd-example-cssgrid" >}}
<div class="grid">
  <div class="g-col-4">.g-col-4</div>
  <div class="g-col-4">.g-col-4</div>
  <div class="g-col-4">.g-col-4</div>
</div>
{{< /example >}}

### Responsive

Usa clases responsive para ajustar tu diseño en los viewports. Aquí comenzamos con dos columnas en los viewports más estrechos y luego crecemos a tres columnas en los viewports medianos y superiores.

{{< example class="bd-example-cssgrid" >}}
<div class="grid">
  <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
  <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
  <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
</div>
{{< /example >}}

Compara eso con este diseño de dos columnas en todas los viewports.

{{< example class="bd-example-cssgrid" >}}
<div class="grid">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>
</div>
{{< /example >}}

## Wrapping

Los elementos de la cuadrícula se ajustan automáticamente a la siguiente línea cuando no hay más espacio horizontalmente. Ten en cuenta que el `gap` se aplica a los espacios horizontales y verticales entre los elementos de la cuadrícula.

{{< example class="bd-example-cssgrid" >}}
<div class="grid">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>

  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>
</div>
{{< /example >}}

## Starts

Las clases *start* tienen como objetivo reemplazar las clases de desplazamiento (offset) de nuestra cuadrícula predeterminada, pero no son del todo iguales. CSS Grid crea una plantilla de cuadrícula a través de estilos que le indican a los navegadores que "comiencen en esta columna" y "finalicen en esta columna". Esas propiedades son `grid-column-start` y `grid-column-end`. Las clases de inicio son una forma abreviada de lo primero. Combínalos con las clases de columnas para dimensionar y alinear tus columnas como lo necesites. Las clases de inicio comienzan en `1` ya que `0` es un valor no válido para estas propiedades.

{{< example class="bd-example-cssgrid" >}}
<div class="grid">
  <div class="g-col-3 g-start-2">.g-col-3 .g-start-2</div>
  <div class="g-col-4 g-start-6">.g-col-4 .g-start-6</div>
</div>
{{< /example >}}

## Auto columnas

Cuando no hay clases en los elementos de la cuadrícula (los elementos hijos inmediatos de un `.grid`), cada elemento de la cuadrícula se dimensionará automáticamente en una columna.

{{< example class="bd-example-cssgrid" >}}
<div class="grid">
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
</div>
{{< /example >}}

Este comportamiento se puede combinar con clases de columna de cuadrícula.

{{< example class="bd-example-cssgrid" >}}
<div class="grid">
  <div class="g-col-6">.g-col-6</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
</div>
{{< /example >}}

## Anidamiento

Similar a nuestro sistema de cuadrícula predeterminado, nuestra CSS Grid permite anidar fácilmente `.grid`s. Sin embargo, a diferencia de la predeterminada, esta cuadrícula hereda los cambios en las filas, columnas y espacios. Considera el siguiente ejemplo:

- Sobrescribimos el número predeterminado de columnas con una variable CSS local: `--bs-columns: 3`.
- En la primera columna automática, el recuento de columnas se hereda y cada columna es un tercio del ancho disponible.
- En la segunda columna automática, hemos restablecido el recuento de columnas en el `.grid` anidado a 12 (nuestro valor predeterminado).
- La tercera columna automática no tiene contenido anidado.

En la práctica, esto permite diseños más complejos y personalizados en comparación con nuestro sistema de cuadrícula predeterminado.

{{< example class="bd-example-cssgrid" >}}
<div class="grid" style="--bs-columns: 3;">
  <div>
    Primera columna automática
    <div class="grid">
      <div>Columna automática</div>
      <div>Columna automática</div>
    </div>
  </div>
  <div>
    Segunda columna automática
    <div class="grid" style="--bs-columns: 12;">
      <div class="g-col-6">6 de 12</div>
      <div class="g-col-4">4 de 12</div>
      <div class="g-col-2">2 de 12</div>
    </div>
  </div>
  <div>Tercera columna automática</div>
</div>
{{< /example >}}

## Personalización

Personaliza el número de columnas, el número de filas y el ancho de los espacios con variables CSS locales.

{{< bs-table "table" >}}
| Variable | Valor Fallback | Descripción |
| --- | --- | --- |
| `--bs-rows` | `1` | El número de filas en tu plantilla de cuadrícula |
| `--bs-columns` | `12` | El número de columnas en tu plantilla de cuadrícula |
| `--bs-gap` | `1.5rem` | El tamaño del espacio entre columnas (vertical y horizontal) |
{{< /bs-table >}}

Estas variables CSS no tienen un valor predeterminado; en su lugar, aplican valores alternativos (fallback) que se usan _hasta_ que se proporcione una instancia local. Por ejemplo, usamos `var(--bs-rows, 1)` para nuestras filas de CSS Grid, que ignora `--bs-rows` porque aún no se ha configurado en ninguna parte. Una vez que lo esté, la instancia `.grid` usará ese valor en lugar del valor alternativo de `1`.

### Sin clases de cuadrícula

Los elementos hijos inmediatos de `.grid` son elementos de cuadrícula, por lo que se dimensionarán sin agregar explícitamente una clase `.g-col`.

{{< example class="bd-example-cssgrid" >}}
<div class="grid" style="--bs-columns: 3;">
  <div>Columna automática</div>
  <div>Columna automática</div>
  <div>Columna automática</div>
</div>
{{< /example >}}

### Columnas y espacios (gaps) 

Ajusta el número de columnas y el espacio.

{{< example class="bd-example-cssgrid" >}}
<div class="grid" style="--bs-columns: 4; --bs-gap: 5rem;">
  <div class="g-col-2">.g-col-2</div>
  <div class="g-col-2">.g-col-2</div>
</div>
{{< /example >}}

{{< example class="bd-example-cssgrid" >}}
<div class="grid" style="--bs-columns: 10; --bs-gap: 1rem;">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-4">.g-col-4</div>
</div>
{{< /example >}}

### Agregar filas

Agregar más filas y cambiar la ubicación de las columnas:

{{< example class="bd-example-cssgrid" >}}
<div class="grid" style="--bs-rows: 3; --bs-columns: 3;">
  <div>Columna automática</div>
  <div class="g-start-2" style="grid-row: 2">Columna automática</div>
  <div class="g-start-3" style="grid-row: 3">Columna automática</div>
</div>
{{< /example >}}

### Gaps

Cambia los espacios verticales solo modificando `row-gap`. Ten en cuenta que usamos `gap` en `.grid`s, pero `row-gap` y `column-gap` se pueden modificar según sea necesario.

{{< example class="bd-example-cssgrid" >}}
<div class="grid" style="row-gap: 0;">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>

  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>
</div>
{{< /example >}}

Por eso, puedes tener diferentes `gap`s verticales y horizontales, que pueden tomar un solo valor (todos los lados) o un par de valores (vertical y horizontal). Esto se puede aplicar con un estilo en línea para `gap`, o con nuestra variable CSS `--bs-gap`.

{{< example class="bd-example-cssgrid" >}}
<div class="grid" style="--bs-gap: .25rem 1rem;">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>

  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>
</div>
{{< /example >}}

## Sass

Una limitación de CSS Grid es que nuestras clases predeterminadas aún son generadas por dos variables Sass, `$grid-columns` y `$grid-gutter-width`. Esto predetermina efectivamente el número de clases generadas en nuestro CSS compilado. Tienes dos opciones aquí:

- Modifica esas variables Sass predeterminadas y vuelve a compilar tu CSS.
- Usa estilos en línea o personalizados para aumentar las clases proporcionadas.

Por ejemplo, puedes aumentar el número de columnas y cambiar el tamaño del espacio, y luego dimensionar sus "columnas" con una combinación de estilos en línea y clases de columna de CSS Grid predefinidas (por ejemplo, `.g-col-4`).

{{< example class="bd-example-cssgrid" >}}
<div class="grid" style="--bs-columns: 18; --bs-gap: .5rem;">
  <div style="grid-column: span 14;">14 columnas</div>
  <div class="g-col-4">.g-col-4</div>
</div>
{{< /example >}}
