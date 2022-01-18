---
layout: docs
title: Columnas
description: Aprende a modificar columnas con un puñado de opciones de alineación, orden y compensación gracias a nuestro sistema de cuadrícula flexbox. Además, conoce cómo usar clases de columna para administrar anchos de elementos que no son de cuadrícula.
group: layout
toc: true
---

{{< callout info >}}
**Importante!** Asegúrate de [leer la página de cuadrícula]({{< docsref "/layout/grid" >}}) antes de sumergirte en cómo modificar y personalizar las columnas de tu cuadrícula.
{{< /callout >}}

## Cómo funcionan

- **Las columnas se basan en la arquitectura flexbox de la cuadrícula.** Flexbox significa que tenemos opciones para cambiar columnas individuales y [modificar grupos de columnas en el nivel de fila]({{< docsref "/layout/grid#row-columns" >}}). Tú eliges cómo crecen, se reducen o cambian las columnas.

- **Al crear diseños de cuadrícula, todo el contenido va en columnas.** La jerarquía de la cuadrícula de Bootstrap va desde [container]({{< docsref "/layout/containers" >}}) de fila a columna hasta tu contenido. En raras ocasiones, puedes combinar contenido y columna, pero ten en cuenta que puede haber consecuencias no deseadas.

- **Bootstrap incluye clases predefinidas para crear diseños rápidos y responsive.** Con [seis breakpoints]({{< docsref "/layout/breakpoints" >}}) y una docena de columnas en cada nivel de cuadrícula, tenemos docenas de clases ya construidas para que puedas crear tus diseños deseados. Esto se puede desactivar a través de Sass si lo deseas.

## Alineación

Usa las utilidades de alineación de flexbox para alinear columnas vertical y horizontalmente.

### Alineamiento vertical

{{< example class="bd-example-row bd-example-row-flex-cols" >}}
<div class="container">
  <div class="row align-items-start">
    <div class="col">
      Una de tres columnas
    </div>
    <div class="col">
      Una de tres columnas
    </div>
    <div class="col">
      Una de tres columnas
    </div>
  </div>
  <div class="row align-items-center">
    <div class="col">
      Una de tres columnas
    </div>
    <div class="col">
      Una de tres columnas
    </div>
    <div class="col">
      Una de tres columnas
    </div>
  </div>
  <div class="row align-items-end">
    <div class="col">
      Una de tres columnas
    </div>
    <div class="col">
      Una de tres columnas
    </div>
    <div class="col">
      Una de tres columnas
    </div>
  </div>
</div>
{{< /example >}}

{{< example class="bd-example-row bd-example-row-flex-cols" >}}
<div class="container">
  <div class="row">
    <div class="col align-self-start">
      Una de tres columnas
    </div>
    <div class="col align-self-center">
      Una de tres columnas
    </div>
    <div class="col align-self-end">
      Una de tres columnas
    </div>
  </div>
</div>
{{< /example >}}

### Horizontal alignment

{{< example class="bd-example-row" >}}
<div class="container">
  <div class="row justify-content-start">
    <div class="col-4">
      Una de dos columnas
    </div>
    <div class="col-4">
      Una de dos columnas
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-4">
      Una de dos columnas
    </div>
    <div class="col-4">
      Una de dos columnas
    </div>
  </div>
  <div class="row justify-content-end">
    <div class="col-4">
      Una de dos columnas
    </div>
    <div class="col-4">
      Una de dos columnas
    </div>
  </div>
  <div class="row justify-content-around">
    <div class="col-4">
      Una de dos columnas
    </div>
    <div class="col-4">
      Una de dos columnas
    </div>
  </div>
  <div class="row justify-content-between">
    <div class="col-4">
      Una de dos columnas
    </div>
    <div class="col-4">
      Una de dos columnas
    </div>
  </div>
  <div class="row justify-content-evenly">
    <div class="col-4">
      Una de dos columnas
    </div>
    <div class="col-4">
      Una de dos columnas
    </div>
  </div>
</div>
{{< /example >}}

### Envoltura de columna

Si se colocan más de 12 columnas dentro de una sola fila, cada grupo de columnas adicionales se ajustará, como una unidad, a una nueva línea.

{{< example class="bd-example-row" >}}
<div class="container">
  <div class="row">
    <div class="col-9">.col-9</div>
    <div class="col-4">.col-4<br>Ya que 9 + 4 = 13 &gt; 12, este div 4-column-wide se envuelve en una nueva línea como una unidad contigua.</div>
    <div class="col-6">.col-6<br>Subsequent columns continue along the new line.</div>
  </div>
</div>
{{< /example >}}

### Saltos de columna

Dividir columnas en una nueva línea en flexbox requiere un pequeño truco: agrega un elemento con `width: 100%` donde quieras envolver tus columnas en una nueva línea. Normalmente esto se logra con múltiples `.row`s, pero no todos los métodos de implementación pueden dar cuenta de esto.

{{< example class="bd-example-row" >}}
<div class="container">
  <div class="row">
    <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
    <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>

    <!-- Obligar a las siguientes columnas a pasar a una nueva línea -->
    <div class="w-100"></div>

    <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
    <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
  </div>
</div>
{{< /example >}}

También puedes aplicar esta interrupción en breakpoints específicos con nuestras [utilidades de visualización responsive]({{< docsref "/utilities/display" >}}).

{{< example class="bd-example-row" >}}
<div class="container">
  <div class="row">
    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>

    <!-- Obligar a las siguientes columnas a pasar a una nueva línea en el breakpoint md y hacia arriba -->
    <div class="w-100 d-none d-md-block"></div>

    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
  </div>
</div>
{{< /example >}}

## Reordenando

### Ordenar clases

Usa las clases `.order-` para controlar el **orden visual** de tu contenido. Estas clases son responsive, por lo que puedes establecer el `order` por breakpoint (por ejemplo, `.order-1.order-md-2`). Incluye soporte para `1` a `5` en los seis niveles de cuadrícula.

{{< example class="bd-example-row" >}}
<div class="container">
  <div class="row">
    <div class="col">
      Primero en el DOM, sin ordenamiento aplicado
    </div>
    <div class="col order-5">
      Segundo en el DOM, con un orden más grande
    </div>
    <div class="col order-1">
      Tercero en el DOM, con un orden de 1
    </div>
  </div>
</div>
{{< /example >}}

También hay clases responsive `.order-first` y `.order-last` que cambian el `order` de un elemento aplicando `order: -1` y `order: 6`, respectivamente. Estas clases también se pueden mezclar con las clases numeradas `.order-*` según sea necesario.

{{< example class="bd-example-row" >}}
<div class="container">
  <div class="row">
    <div class="col order-last">
      Primero en el DOM, ordenado último
    </div>
    <div class="col">
      Segundo en el DOM, sin ordenamiento
    </div>
    <div class="col order-first">
      Tercero en el DOM, ordenado primero
    </div>
  </div>
</div>
{{< /example >}}

### Columnas de compensación

Puedes compensar las columnas de la cuadrícula de dos maneras: nuestras clases responsive de cuadrícula `.offset-` y nuestras [utilidades de margen]({{< docsref "/utilities/spacing" >}}). Las clases de cuadrícula se dimensionan para que coincidan con las columnas, mientras que los márgenes son más útiles para diseños rápidos donde el ancho del desplazamiento es variable.

#### Clases de compensación

Mueve las columnas a la derecha usando las clases `.offset-md-*`. Estas clases aumentan el margen izquierdo de una columna en columnas `*`. Por ejemplo, `.offset-md-4` mueve `.col-md-4` cuatro columnas.

{{< example class="bd-example-row" >}}
<div class="container">
  <div class="row">
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
  </div>
  <div class="row">
    <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
    <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
  </div>
  <div class="row">
    <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
  </div>
</div>
{{< /example >}}

Además de borrar las columnas en los breakpoints responsive, es posible que debas restablecer las compensaciones. Observa esto en acción en [el ejemplo de cuadrícula]({{< docsref "/examples/grid" >}}).

{{< example class="bd-example-row" >}}
<div class="container">
  <div class="row">
    <div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
    <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0</div>
  </div>
  <div class="row">
    <div class="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div>
    <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0</div>
  </div>
</div>
{{< /example >}}

#### Utilidades de margen

Con el cambio a flexbox en v4, puedes usar utilidades de margen como `.me-auto` para forzar que las columnas hermanas se separen entre sí.

{{< example class="bd-example-row" >}}
<div class="container">
  <div class="row">
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
  </div>
  <div class="row">
    <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
    <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
  </div>
  <div class="row">
    <div class="col-auto me-auto">.col-auto .me-auto</div>
    <div class="col-auto">.col-auto</div>
  </div>
</div>
{{< /example >}}

## Clases de columna independientes

Las clases `.col-*` también se pueden usar fuera de una `.row` para dar a un elemento un ancho específico. Siempre que las clases de columna se utilicen como elementos hijos no directos de una fila, se omiten los rellenos.

{{< example >}}
<div class="col-3 bg-light p-3 border">
  .col-3: width of 25%
</div>
<div class="col-sm-9 bg-light p-3 border">
  .col-sm-9: ancho de 75% por encima del breakpoint sm
</div>
{{< /example >}}

Las clases se pueden usar junto con las utilidades para crear imágenes flotantes responsive. Asegúrate de envolver el contenido en un envoltorio [`.clearfix`]({{< docsref "/helpers/clearfix" >}}) para borrar el flotante si el texto es más corto.

{{< example >}}
<div class="clearfix">
  {{< placeholder width="100%" height="210" class="col-md-6 float-md-end mb-3 ms-md-3" text="Responsive floated image" >}}

  <p>
    Un párrafo de texto de marcador de posición. Lo estamos usando aquí para mostrar el uso de la clase clearfix. Estamos agregando bastantes frases sin sentido aquí para demostrar cómo las columnas interactúan aquí con la imagen flotante.
  </p>

  <p>
    Como puedes ver, los párrafos se envuelven con gracia alrededor de la imagen flotante. Ahora imaginate cómo se vería esto con algún contenido real aquí, en lugar de solo este aburrido texto de marcador de posición que sigue y sigue, pero que en realidad no transmite información tangible. Simplemente ocupa espacio y en realidad no debe leerse.
  </p>

  <p>
    Y, sin embargo, aquí estás, aún perseverando en la lectura de este texto de marcador de posición, con la esperanza de obtener más información o algún huevo de pascua oculto de contenido. Una broma, tal vez. Desafortunadamente, no hay nada de eso aquí.
  </p>
</div>
{{< /example >}}
