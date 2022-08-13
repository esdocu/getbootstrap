---
layout: docs
title: Cards
description: Las tarjetas de Bootstrap brindan un contenedor de contenido flexible y extensible con múltiples variantes y opciones.
group: components
toc: true
---

## ¿Qué es una tarjeta?

Una **tarjeta** es un contenedor de contenido flexible y extensible. Incluye opciones para encabezados y pies de página, una amplia variedad de contenido, colores de fondo contextuales y potentes opciones de visualización. Si estás familiarizado con Bootstrap 3, las tarjetas reemplazan nuestros viejos panels, wells y thumbnails. Una funcionalidad similar a esos componentes está disponible como clases modificadoras para tarjetas.

## Ejemplo

Las tarjetas se construyen con la menor cantidad de marcado y estilos posible, pero aun así logran ofrecer una tonelada de control y personalización. Construidos con flexbox, ofrecen una fácil alineación y se combinan bien con otros componentes de Bootstrap. No tienen `margin` por defecto, así que usa [utilidades de espaciado]({{< docsref "/utilities/spacing" >}}) según sea necesario.

A continuación se muestra un ejemplo de una tarjeta básica con contenido mixto y un ancho fijo. Las tarjetas no tienen un ancho fijo para comenzar, por lo que naturalmente llenarán todo el ancho de su elemento padre. Esto se puede personalizar fácilmente con nuestras diversas [opciones de tamaño](#sizing).

{{< example >}}
<div class="card" style="width: 18rem;">
  {{< placeholder width="100%" height="180" class="card-img-top" text="Capa de imagen" >}}
  <div class="card-body">
    <h5 class="card-title">Título de la tarjeta</h5>
    <p class="card-text">Un texto de ejemplo rápido para colocal cerca del título de la tarjeta y componer la mayor parte del contenido de la tarjeta.</p>
    <a href="#" class="btn btn-primary">Ir a algún lugar</a>
  </div>
</div>
{{< /example >}}

## Tipos de contenido

Las tarjetas admiten una amplia variedad de contenido, incluidas imágenes, texto, grupos de listas, enlaces y más. A continuación se muestran ejemplos de lo que se admite.

### Cuerpo

El componente básico de una tarjeta es `.card-body`. Úsalo siempre que necesites una sección con padding dentro de una tarjeta.

{{< example >}}
<div class="card">
  <div class="card-body">
    Este es un texto dentro del cuerpo de una tarjeta.
  </div>
</div>
{{< /example >}}

### Títulos, texto y enlaces

Los títulos de las cartas se usan agregando `.card-title` a una etiqueta `<h*>`. De la misma manera, los enlaces se agregan y colocan uno al lado del otro agregando `.card-link` a una etiqueta `<a>`.

Los subtítulos se usan agregando un `.card-subtitle` a una etiqueta `<h*>`. Si los elementos `.card-title` y `.card-subtitle` se colocan en un elemento `.card-body`, el título y el subtítulo de la tarjeta se alinearán muy bien.

{{< example >}}
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Título de la tarjeta</h5>
    <h6 class="card-subtitle mb-2 text-muted">Subtítulo de la tarjeta</h6>
    <p class="card-text">Un texto de ejemplo rápido para colocal cerca del título de la tarjeta y componer la mayor parte del contenido de la tarjeta.</p>
    <a href="#" class="card-link">Enlace de tarjeta</a>
    <a href="#" class="card-link">Otro enlace</a>
  </div>
</div>
{{< /example >}}

### Imágenes

`.card-img-top` coloca una imagen en la parte superior de la tarjeta. Con `.card-text`, se puede agregar texto a la tarjeta. El texto dentro de `.card-text` también se puede diseñar con las etiquetas HTML estándar.

{{< example >}}
<div class="card" style="width: 18rem;">
  {{< placeholder width="100%" height="180" class="card-img-top" text="Capa de imagen" >}}
  <div class="card-body">
    <p class="card-text">Un texto de ejemplo rápido para colocal cerca del título de la tarjeta y componer la mayor parte del contenido de la tarjeta.</p>
  </div>
</div>
{{< /example >}}

### List groups

Crea listas de contenido en una tarjeta con un grupo de listas flush.

{{< example >}}
<div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Un elemento</li>
    <li class="list-group-item">Un segundo elemento<//li>
    <li class="list-group-item">Un tercer elemento<//li>
  </ul>
</div>
{{< /example >}}

{{< example >}}
<div class="card" style="width: 18rem;">
  <div class="card-header">
    Destacado
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Un elemento</li>
    <li class="list-group-item">Un segundo elemento<//li>
    <li class="list-group-item">Un tercer elemento<//li>
  </ul>
</div>
{{< /example >}}

{{< example >}}
<div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Un elemento</li>
    <li class="list-group-item">Un segundo elemento<//li>
    <li class="list-group-item">Un tercer elemento<//li>
  </ul>
  <div class="card-footer">
    Pie de tarjeta
  </div>
</div>
{{< /example >}}

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

### Kitchen sink

Mezcla y combina múltiples tipos de contenido para crear la tarjeta que necesitas, o coloca todo allí. A continuación se muestran estilos de imagen, bloques, estilos de texto y un grupo de listas, todo incluido en una tarjeta de ancho fijo.

{{< example >}}
<div class="card" style="width: 18rem;">
  {{< placeholder width="100%" height="180" class="card-img-top" text="Capa de imagen" >}}
  <div class="card-body">
    <h5 class="card-title">Título de la tarjeta</h5>
    <p class="card-text">Un texto de ejemplo rápido para colocal cerca del título de la tarjeta y componer la mayor parte del contenido de la tarjeta.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Un elemento</li>
    <li class="list-group-item">Un segundo elemento<//li>
    <li class="list-group-item">Un tercer elemento<//li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Enlace de tarjeta</a>
    <a href="#" class="card-link">Otro enlace</a>
  </div>
</div>
{{< /example >}}

### Encabezado y pié de página

Agrega un encabezado y/o pie de página opcional dentro de una tarjeta.

{{< example >}}
<div class="card">
  <div class="card-header">
    Destacado
  </div>
  <div class="card-body">
    <h5 class="card-title">Tratamiento especial del título</h5>
    <p class="card-text">Con texto de apoyo a continuación como introducción natural a contenido adicional.</p>
    <a href="#" class="btn btn-primary">Ir a algún lugar</a>
  </div>
</div>
{{< /example >}}

Los encabezados de las tarjetas se pueden diseñar agregando `.card-header` a los elementos `<h*>`.

{{< example >}}
<div class="card">
  <h5 class="card-header">Destacado</h5>
  <div class="card-body">
    <h5 class="card-title">Tratamiento especial del título</h5>
    <p class="card-text">Con texto de apoyo a continuación como introducción natural a contenido adicional.</p>
    <a href="#" class="btn btn-primary">Ir a algún lugar</a>
  </div>
</div>
{{< /example >}}

{{< example >}}
<div class="card">
  <div class="card-header">
    Cita
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>Una cita conocida, contenida en un elemento blockquote.</p>
      <footer class="blockquote-footer">Alguien famoso en <cite title="Título de la fuente">Título de la fuente</cite></footer>
    </blockquote>
  </div>
</div>
{{< /example >}}

{{< example >}}
<div class="card text-center">
  <div class="card-header">
    Destacado
  </div>
  <div class="card-body">
    <h5 class="card-title">Tratamiento especial del título</h5>
    <p class="card-text">Con texto de apoyo a continuación como introducción natural a contenido adicional.</p>
    <a href="#" class="btn btn-primary">Ir a algún lugar</a>
  </div>
  <div class="card-footer text-muted">
    Hace 2 días
  </div>
</div>
{{< /example >}}

## Dimensionamiento

Las tarjetas no asumen un `width` específico para comenzar, por lo que tendrán un 100% de ancho a menos que se indique lo contrario. Puedes cambiar esto según sea necesario con CSS personalizado, clases de cuadrícula, mixins Sass de cuadrícula o utilidades.

### Uso de marcado de cuadrícula

Usando la cuadrícula, envuelve las tarjetas en columnas y filas según sea necesario.

{{< example >}}
<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Tratamiento especial del título</h5>
        <p class="card-text">Con texto de apoyo a continuación como introducción natural a contenido adicional.</p>
        <a href="#" class="btn btn-primary">Ir a algún lugar</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Tratamiento especial del título</h5>
        <p class="card-text">Con texto de apoyo a continuación como introducción natural a contenido adicional.</p>
        <a href="#" class="btn btn-primary">Ir a algún lugar</a>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

### Uso de utilidades

Usa nuestro puñado de [utilidades de tamaño disponibles]({{< docsref "/utilities/sizing" >}}) para configurar rápidamente el ancho de una tarjeta.

{{< example >}}
<div class="card w-75">
  <div class="card-body">
    <h5 class="card-title">Título de la tarjeta</h5>
    <p class="card-text">Con texto de apoyo a continuación como introducción natural a contenido adicional.</p>
    <a href="#" class="btn btn-primary">Botón</a>
  </div>
</div>

<div class="card w-50">
  <div class="card-body">
    <h5 class="card-title">Título de la tarjeta</h5>
    <p class="card-text">Con texto de apoyo a continuación como introducción natural a contenido adicional.</p>
    <a href="#" class="btn btn-primary">Botón</a>
  </div>
</div>
{{< /example >}}

### Uso de CSS personalizado

Usa CSS personalizado en tus hojas de estilo o como estilos en línea para establecer un ancho.

{{< example >}}
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Tratamiento especial del título</h5>
    <p class="card-text">Con texto de apoyo a continuación como introducción natural a contenido adicional.</p>
    <a href="#" class="btn btn-primary">Ir a algún lugar</a>
  </div>
</div>
{{< /example >}}

## Alineación del texto

Puedes cambiar rápidamente la alineación del texto de cualquier tarjeta, en su totalidad o en partes específicas, con nuestras [clases de alineación de texto]({{< docsref "/utilities/text#text-alignment" >}}).

{{< example >}}
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Tratamiento especial del título</h5>
    <p class="card-text">Con texto de apoyo a continuación como introducción natural a contenido adicional.</p>
    <a href="#" class="btn btn-primary">Ir a algún lugar</a>
  </div>
</div>

<div class="card text-center" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Tratamiento especial del título</h5>
    <p class="card-text">Con texto de apoyo a continuación como introducción natural a contenido adicional.</p>
    <a href="#" class="btn btn-primary">Ir a algún lugar</a>
  </div>
</div>

<div class="card text-end" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Tratamiento especial del título</h5>
    <p class="card-text">Con texto de apoyo a continuación como introducción natural a contenido adicional.</p>
    <a href="#" class="btn btn-primary">Ir a algún lugar</a>
  </div>
</div>
{{< /example >}}

## Navegación

Agrega algo de navegación al encabezado (o bloque) de una tarjeta con los [componentes de navegación]({{< docsref "/components/navs-tabs" >}}) de Bootstrap.

{{< example >}}
<div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" aria-current="true" href="#">Activo</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Enlace</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Deshabilitado</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">Tratamiento especial del título</h5>
    <p class="card-text">Con texto de apoyo a continuación como introducción natural a contenido adicional.</p>
    <a href="#" class="btn btn-primary">Ir a algún lugar</a>
  </div>
</div>
{{< /example >}}

{{< example >}}
<div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-pills card-header-pills">
      <li class="nav-item">
        <a class="nav-link active" href="#">Activo</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Enlace</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Deshabilitado</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">Tratamiento especial del título</h5>
    <p class="card-text">Con texto de apoyo a continuación como introducción natural a contenido adicional.</p>
    <a href="#" class="btn btn-primary">Ir a algún lugar</a>
  </div>
</div>
{{< /example >}}

## Imágenes

Las tarjetas incluyen algunas opciones para trabajar con imágenes. Elije entre agregar "capas de imagen" en cualquiera de los extremos de una tarjeta, superponer imágenes con el contenido de la tarjeta o simplemente incrustar la imagen en una tarjeta.

### Capas de imágenes

De forma similar a los encabezados y pies de página, las tarjetas pueden incluir "capas de imágenes" en la parte superior e inferior: imágenes en la parte superior o inferior de una tarjeta.

{{< example >}}
<div class="card mb-3">
  {{< placeholder width="100%" height="180" class="card-img-top" text="Capa de imagen" >}}
  <div class="card-body">
    <h5 class="card-title">Título de la tarjeta</h5>
    <p class="card-text">Esta es una tarjeta más amplia con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
    <p class="card-text"><small class="text-muted">Última actualización hace 3 minutos</small></p>
  </div>
</div>
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Título de la tarjeta</h5>
    <p class="card-text">Esta es una tarjeta más amplia con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
    <p class="card-text"><small class="text-muted">Última actualización hace 3 minutos</small></p>
  </div>
  {{< placeholder width="100%" height="180" class="card-img-bottom" text="Capa de imagen" >}}
</div>
{{< /example >}}

### Superposición de imágenes

Convierte una imagen en un fondo de tarjeta y superpon el texto de tu tarjeta. Dependiendo de la imagen, es posible que necesites o no estilos o utilidades adicionales.

{{< example >}}
<div class="card bg-dark text-white">
  {{< placeholder width="100%" height="270" class="bd-placeholder-img-lg card-img" text="Card image" >}}
  <div class="card-img-overlay">
    <h5 class="card-title">Título de la tarjeta</h5>
    <p class="card-text">Esta es una tarjeta más amplia con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
    <p class="card-text">Última actualización hace 3 minutos</p>
  </div>
</div>
{{< /example >}}

{{< callout info >}}
Ten en cuenta que el contenido no debe ser más grande que la altura de la imagen. Si el contenido es más grande que la imagen, el contenido se mostrará fuera de la imagen.
{{< /callout >}}

{{< callout info >}}
{{< partial "maybe-interested-2.md" >}}
{{< /callout >}}

## Horizontal

Usando una combinación de cuadrícula y clases de utilidad, las tarjetas se pueden hacer horizontales de una manera responsive y compatible con dispositivos móviles. En el siguiente ejemplo, eliminamos los gutters de la cuadrícula con `.g-0` y usamos las clases `.col-md-*` para hacer que la tarjeta sea horizontal en el breakpoint `md`. Es posible que se necesiten más ajustes según el contenido de tu tarjeta.

{{< example >}}
<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      {{< placeholder width="100%" height="250" text="Image" class="img-fluid rounded-start" >}}
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Título de la tarjeta</h5>
        <p class="card-text">Esta es una tarjeta más amplia con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
        <p class="card-text"><small class="text-muted">Última actualización hace 3 minutos</small></p>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

## Estilos de tarjeta

Las tarjetas incluyen varias opciones para personalizar sus fondos, bordes y colores.

### Fondo y color

Utiliza [color de texto]({{< docsref "/utilities/colors" >}}) y [utilidades de fondo]({{< docsref "/utilities/background" >}}) para cambiar la apariencia de una tarjeta.

{{< example >}}
{{< card.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="card{{ if .contrast_color }} text-{{ .contrast_color }}{{ else }} text-white{{ end }} bg-{{ .name }} mb-3" style="max-width: 18rem;">
  <div class="card-header">Encabezado</div>
  <div class="card-body">
    <h5 class="card-title">Título de tarjeta {{ .name | title }}</h5>
    <p class="card-text">Un texto de ejemplo rápido para colocal cerca del título de la tarjeta y componer la mayor parte del contenido de la tarjeta.</p>
  </div>
</div>
{{- end -}}
{{< /card.inline >}}
{{< /example >}}

{{< callout info >}}
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}}

### Borde

Usa las [utilidades de border]({{< docsref "/utilities/borders" >}}) para cambiar solo el `borde-color` de una tarjeta. Ten en cuenta que puedes colocar las clases `.text-{color}` en la `.card` principal o en un subconjunto del contenido de la tarjeta, como se muestra a continuación.

{{< example >}}
{{< card.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="card border-{{ .name }} mb-3" style="max-width: 18rem;">
  <div class="card-header">Encabezado</div>
  <div class="card-body{{ if not .contrast_color }} text-{{ .name }}{{ end }}">
    <h5 class="card-title">Título de la tarjeta {{ .name | title }}</h5>
    <p class="card-text">Un texto de ejemplo rápido para colocal cerca del título de la tarjeta y componer la mayor parte del contenido de la tarjeta.</p>
  </div>
</div>
{{- end -}}
{{< /card.inline >}}
{{< /example >}}

### Utilidades mixins

También puedes cambiar los bordes en el encabezado y pie de página de la tarjeta según sea necesario, e incluso eliminar su `background-color` con `.bg-transparent`.

{{< example >}}
<div class="card border-success mb-3" style="max-width: 18rem;">
  <div class="card-header bg-transparent border-success">Encabezado</div>
  <div class="card-body text-success">
    <h5 class="card-title">Título de tarjeta Success</h5>
    <p class="card-text">Un texto de ejemplo rápido para colocal cerca del título de la tarjeta y componer la mayor parte del contenido de la tarjeta.</p>
  </div>
  <div class="card-footer bg-transparent border-success">Pie de tarjeta</div>
</div>
{{< /example >}}

## Layout de tarjeta

Además de diseñar el contenido dentro de las tarjetas, Bootstrap incluye algunas opciones para diseñar series de tarjetas. Por el momento, **estas opciones de diseño aún no son responsive**.

### Grupos de tarjetas

Usa grupos de tarjetas para representar tarjetas como un único elemento adjunto con columnas de igual ancho y alto. Los grupos de cartas comienzan apilados y usan `display: flex;` para unirse con dimensiones uniformes comenzando en el breakpoint `sm`.

{{< example >}}
<div class="card-group">
  <div class="card">
    {{< placeholder width="100%" height="180" class="card-img-top" text="Capa de imagen" >}}
    <div class="card-body">
      <h5 class="card-title">Título de la tarjeta</h5>
      <p class="card-text">Esta es una tarjeta más amplia con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
      <p class="card-text"><small class="text-muted">Última actualización hace 3 minutos</small></p>
    </div>
  </div>
  <div class="card">
    {{< placeholder width="100%" height="180" class="card-img-top" text="Capa de imagen" >}}
    <div class="card-body">
      <h5 class="card-title">Título de la tarjeta</h5>
      <p class="card-text">Esta tarjeta tiene texto de apoyo a continuación como una introducción natural a contenido adicional.</p>
      <p class="card-text"><small class="text-muted">Última actualización hace 3 minutos</small></p>
    </div>
  </div>
  <div class="card">
    {{< placeholder width="100%" height="180" class="card-img-top" text="Capa de imagen" >}}
    <div class="card-body">
      <h5 class="card-title">Título de la tarjeta</h5>
      <p class="card-text">Esta es una tarjeta más amplia con texto de apoyo a continuación como introducción natural a contenido adicional. Esta tarjeta tiene un contenido aún más largo que la primera para mostrar esa acción de igual altura.</p>
      <p class="card-text"><small class="text-muted">Última actualización hace 3 minutos</small></p>
    </div>
  </div>
</div>
{{< /example >}}

Al usar grupos de tarjetas con pies de página, su contenido se alineará automáticamente.

{{< example >}}
<div class="card-group">
  <div class="card">
    {{< placeholder width="100%" height="180" class="card-img-top" text="Capa de imagen" >}}
    <div class="card-body">
      <h5 class="card-title">Título de la tarjeta</h5>
      <p class="card-text">Esta es una tarjeta más amplia con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Última actualización hace 3 minutos</small>
    </div>
  </div>
  <div class="card">
    {{< placeholder width="100%" height="180" class="card-img-top" text="Capa de imagen" >}}
    <div class="card-body">
      <h5 class="card-title">Título de la tarjeta</h5>
      <p class="card-text">Esta tarjeta tiene texto de apoyo a continuación como una introducción natural a contenido adicional.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Última actualización hace 3 minutos</small>
    </div>
  </div>
  <div class="card">
    {{< placeholder width="100%" height="180" class="card-img-top" text="Capa de imagen" >}}
    <div class="card-body">
      <h5 class="card-title">Título de la tarjeta</h5>
      <p class="card-text">Esta es una tarjeta más amplia con texto de apoyo a continuación como introducción natural a contenido adicional. Esta tarjeta tiene un contenido aún más largo que la primera para mostrar esa acción de igual altura.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Última actualización hace 3 minutos</small>
    </div>
  </div>
</div>
{{< /example >}}

### Tarjetas de cuadrícula

Utiliza el sistema de cuadrícula Bootstrap y sus [clases `.row-cols`]({{< docsref "/layout/grid#row-columns" >}}) para controlar cuántas columnas de cuadrícula (envueltas alrededor de tus tarjetas) muestra por hilera. Por ejemplo, aquí está `.row-cols-1` colocando las tarjetas en una columna, y `.row-cols-md-2` dividiendo cuatro tarjetas al mismo ancho en varias filas, desde el breakpoint medium hacia arriba.

{{< example >}}
<div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      {{< placeholder width="100%" height="140" class="card-img-top" text="Capa de imagen" >}}
      <div class="card-body">
        <h5 class="card-title">Título de la tarjeta</h5>
        <p class="card-text">Esta es una tarjeta más larga con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {{< placeholder width="100%" height="140" class="card-img-top" text="Capa de imagen" >}}
      <div class="card-body">
        <h5 class="card-title">Título de la tarjeta</h5>
        <p class="card-text">Esta es una tarjeta más larga con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {{< placeholder width="100%" height="140" class="card-img-top" text="Capa de imagen" >}}
      <div class="card-body">
        <h5 class="card-title">Título de la tarjeta</h5>
        <p class="card-text">Esta es una tarjeta más larga con texto de apoyo a continuación como introducción natural a contenido adicional.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {{< placeholder width="100%" height="140" class="card-img-top" text="Capa de imagen" >}}
      <div class="card-body">
        <h5 class="card-title">Título de la tarjeta</h5>
        <p class="card-text">Esta es una tarjeta más larga con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

Cámbialo a `.row-cols-3` y verás el ajuste de la cuarta tarjeta.

{{< example >}}
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      {{< placeholder width="100%" height="140" class="card-img-top" text="Capa de imagen" >}}
      <div class="card-body">
        <h5 class="card-title">Título de la tarjeta</h5>
        <p class="card-text">Esta es una tarjeta más larga con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {{< placeholder width="100%" height="140" class="card-img-top" text="Capa de imagen" >}}
      <div class="card-body">
        <h5 class="card-title">Título de la tarjeta</h5>
        <p class="card-text">Esta es una tarjeta más larga con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {{< placeholder width="100%" height="140" class="card-img-top" text="Capa de imagen" >}}
      <div class="card-body">
        <h5 class="card-title">Título de la tarjeta</h5>
        <p class="card-text">Esta es una tarjeta más larga con texto de apoyo a continuación como introducción natural a contenido adicional.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {{< placeholder width="100%" height="140" class="card-img-top" text="Capa de imagen" >}}
      <div class="card-body">
        <h5 class="card-title">Título de la tarjeta</h5>
        <p class="card-text">Esta es una tarjeta más larga con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

Cuando necesites la misma altura, agrega `.h-100` a las tarjetas. Si deseas alturas iguales de forma predeterminada, puedes configurar `$card-height: 100%` en Sass.

{{< example >}}
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      {{< placeholder width="100%" height="140" class="card-img-top" text="Capa de imagen" >}}
      <div class="card-body">
        <h5 class="card-title">Título de la tarjeta</h5>
        <p class="card-text">Esta es una tarjeta más larga con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      {{< placeholder width="100%" height="140" class="card-img-top" text="Capa de imagen" >}}
      <div class="card-body">
        <h5 class="card-title">Título de la tarjeta</h5>
        <p class="card-text">Esta es una tarjeta corta.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      {{< placeholder width="100%" height="140" class="card-img-top" text="Capa de imagen" >}}
      <div class="card-body">
        <h5 class="card-title">Título de la tarjeta</h5>
        <p class="card-text">Esta es una tarjeta más larga con texto de apoyo a continuación como introducción natural a contenido adicional.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      {{< placeholder width="100%" height="140" class="card-img-top" text="Capa de imagen" >}}
      <div class="card-body">
        <h5 class="card-title">Título de la tarjeta</h5>
        <p class="card-text">Esta es una tarjeta más larga con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

Al igual que con los grupos de tarjetas, los pies de página de las tarjetas se alinearán automáticamente.

{{< example >}}
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      {{< placeholder width="100%" height="180" class="card-img-top" text="Capa de imagen" >}}
      <div class="card-body">
        <h5 class="card-title">Título de la tarjeta</h5>
        <p class="card-text">Esta es una tarjeta más amplia con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Última actualización hace 3 minutos</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      {{< placeholder width="100%" height="180" class="card-img-top" text="Capa de imagen" >}}
      <div class="card-body">
        <h5 class="card-title">Título de la tarjeta</h5>
        <p class="card-text">Esta tarjeta tiene texto de apoyo a continuación como una introducción natural a contenido adicional.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Última actualización hace 3 minutos</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      {{< placeholder width="100%" height="180" class="card-img-top" text="Capa de imagen" >}}
      <div class="card-body">
        <h5 class="card-title">Título de la tarjeta</h5>
        <p class="card-text">Esta es una tarjeta más amplia con texto de apoyo a continuación como introducción natural a contenido adicional. Esta tarjeta tiene un contenido aún más largo que la primera para mostrar esa acción de igual altura.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Última actualización hace 3 minutos</small>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

{{< callout info >}}
{{< partial "maybe-interested-3.md" >}}
{{< /callout >}}

### Masonry

En `v4` usamos una técnica solo de CSS para imitar el comportamiento de las columnas similares a [Masonry](https://masonry.desandro.com/), pero esta técnica vino con muchos [efectos secundarios](https://github.com/twbs/bootstrap/pull/28922) desagradables. Si deseas tener este tipo de diseño en `v5`, puedes usar el complemento Masonry. **Masonry no está incluida en Bootstrap**, pero creamos un [ejemplo de demostración]({{< docsref "/examples/masonry" >}}) para ayudarte a comenzar.

## Sass

### Variables

{{< scss-docs name="card-variables" file="scss/_variables.scss" >}}
