---
layout: docs
title: Tipografía
description: Documentación y ejemplos de tipografía Bootstrap, incluidos ajustes globales, encabezados, texto del body, listas y más.
group: content
toc: true
---

## Ajustes globales

Bootstrap establece estilos básicos de visualización, tipografía y enlaces globales. Cuando se necesita más control, consulta las [clases de utilidades textuales]({{< docsref "/utilities/text" >}}).

- Utiliza una [pila de fuentes nativas]({{< docsref "/content/reboot#native-font-stack" >}}) que seleccione la mejor `font-family` para cada sistema operativo y dispositivo.
- Para una escala de tipos más inclusiva y accesible, utilizamos el `font-size` raíz predeterminado del navegador (normalmente 16x) para que los visitantes puedan personalizar los valores predeterminados de su navegador según sea necesario.
- Usa los atributos `$font-family-base`, `$font-size-base` y `$line-height-base` como nuestra base tipográfica aplicada al `<body>`.
- Establece el color global de enlaces a través de `$link-color`.
- Usa `$body-bg` para establecer un `background-color` en `<body>` (`#fff` por defecto).

Estos estilos se pueden encontrar dentro de `_reboot.scss`, y las variables globales se definen en `_variables.scss`. Asegúrate de configurar `$font-size-base` en `rem`.

## Encabezados

Todos los encabezados HTML, `<h1>` a `<h6>`, están disponibles.

<table class="table">
  <thead>
    <tr>
      <th>Encabezado</th>
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

```html
<h1>h1. Encabezado Bootstrap</h1>
<h2>h2. Encabezado Bootstrap</h2>
<h3>h3. Encabezado Bootstrap</h3>
<h4>h4. Encabezado Bootstrap</h4>
<h5>h5. Encabezado Bootstrap</h5>
<h6>h6. Encabezado Bootstrap</h6>
```

Las clases `.h1` a `.h6` también están disponibles, para cuando deseas hacer coincidir el estilo de fuentes de un encabezado pero no puedes usar el elemento HTML asociado.

{{< example >}}
<p class="h1">h1. Encabezado Bootstrap</p>
<p class="h2">h2. Encabezado Bootstrap</p>
<p class="h3">h3. Encabezado Bootstrap</p>
<p class="h4">h4. Encabezado Bootstrap</p>
<p class="h5">h5. Encabezado Bootstrap</p>
<p class="h6">h6. Encabezado Bootstrap</p>
{{< /example >}}

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

### Personalizar los encabezados

Utiliza las clases de utilidad incluidas para recrear el pequeño texto de encabezado secundario de Bootstrap 3.

{{< example >}}
<h3>
  Encabezado de visualización elegante
  <small class="text-muted">Con texto secundario desvanecido</small>
</h3>
{{< /example >}}

## Display headings

Los elementos de encabezado tradicionales están diseñados para funcionar mejor en el cuerpo del contenido de tu página. Cuando necesites que un título destaque, considera usar un **display heading**, un estilo de título más grande y un poco más obstinado.

<div class="bd-example">
  <div class="display-1 pb-3 mb-3 border-bottom">Display 1</div>
  <div class="display-2 pb-3 mb-3 border-bottom">Display 2</div>
  <div class="display-3 pb-3 mb-3 border-bottom">Display 3</div>
  <div class="display-4 pb-3 mb-3 border-bottom">Display 4</div>
  <div class="display-5 pb-3 mb-3 border-bottom">Display 5</div>
  <div class="display-6">Display 6</div>
</div>

```html
<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3">Display 3</h1>
<h1 class="display-4">Display 4</h1>
<h1 class="display-5">Display 5</h1>
<h1 class="display-6">Display 6</h1>
```

Estos encabezados de visualización se configuran mediante el mapa Sass `$display-font-sizes` y dos variables, `$display-font-weight` y `$display-line-height`.

{{< scss-docs name="display-headings" file="scss/_variables.scss" >}}

## Lead

Haz que un párrafo se destaque agregando `.lead`.

{{< example >}}
<p class="lead">
  Este es un párrafo principal. Se destaca de los párrafos regulares.
</p>
{{< /example >}}

## Elementos de texto en línea

Estilo para elementos HTML5 en línea comunes.

{{< example >}}
<p>Puedes usar la etiqueta mark para <mark>resaltar</mark> texto.</p>
<p><del>Esta línea de texto debe tratarse como texto eliminado.</del></p>
<p><s>Esta línea de texto debe tratarse como si ya no fuera precisa.</s></p>
<p><ins>Esta línea de texto debe tratarse como una adición al documento.</ins></p>
<p><u>Esta línea de texto aparecerá subrayada.</u></p>
<p><small>Esta línea de texto debe tratarse como letra pequeña.</small></p>
<p><strong>Esta línea aparece en negrita.</strong></p>
<p><em>Esta línea aparece como texto en cursiva.</em></p>
{{< /example >}}

Ten en cuenta que estas etiquetas deben usarse con fines semánticos:

- `<mark>` representa texto que está marcado o resaltado para fines de referencia o notación.
- `<small>` representa comentarios secundarios y letra pequeña, como derechos de autor y texto legal.
- `<s>` representa elementos que ya no son relevantes o ya no son precisos.
- `<u>` representa un tramo de texto en línea que debe presentarse de manera que indique que tiene una anotación no textual.

Si deseas aplicar estilo a tu texto, debes usar las siguientes clases en su lugar:

- `.mark` aplicará los mismos estilos que `<mark>`.
- `.small` aplicará los mismos estilos que `<small>`.
- `.text-decoration-underline` aplicará los mismos estilos que `<u>`.
- `.text-decoration-line-through` aplicará los mismos estilos que `<s>`.

Si bien no se muestra arriba, siéntete libre de usar `<b>` y `<i>` en HTML5. `<b>` está destinado a resaltar palabras o frases sin transmitir una importancia adicional, mientras que `<i>` es principalmente para voz, términos técnicos, etc.

## Utilidades de texto

Cambia la alineación, transformación, estilo, grosor, altura de línea, decoración y color del texto con nuestras [utilidades de texto]({{< docsref "/utilities/text" >}}) y [utilidades de color]({{< docsref "/utilities/colors" >}}).

## Abreviaturas

Implementación estilizada del elemento `<abbr>` de HTML para abreviaturas y acrónimos para mostrar la versión ampliada al pasar el mouse. Las abreviaturas tienen un subrayado predeterminado y obtienen un cursor de ayuda para proporcionar contexto adicional al pasar el mouse por encima y para los usuarios de tecnologías de asistencia.

Agrega `.initialism` a una abreviatura para un tamaño de fuente ligeramente más pequeño.

{{< example >}}
<p><abbr title="attribute">attr</abbr></p>
<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
{{< /example >}}

## Blockquotes

Para citar bloques de contenido de otra fuente dentro de tu documento. Envuelve con `<blockquote class="blockquote">` cualquier HTML como cita.

{{< example >}}
<blockquote class="blockquote">
  <p>Una cita conocida, contenida en un elemento blockquote.</p>
</blockquote>
{{< /example >}}

### Nombrar una fuente

La especificación HTML requiere que la atribución de comillas en bloque se coloque fuera de `<blockquote>`. Al proporcionar la atribución, envuelve tu `<blockquote>` en una `<figure>` y usa un `<figcaption>` o un elemento de nivel de bloque (por ejemplo, `<p>`) con la clase `.blockquote-footer`. Asegúrate de envolver el nombre del trabajo fuente en `<cite>` también.

{{< example >}}
<figure>
  <blockquote class="blockquote">
    <p>Una cita conocida, contenida en un elemento blockquote.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Alguien fomoso en <cite title="Título fuente">Título fuente</cite>
  </figcaption>
</figure>
{{< /example >}}

{{< callout info >}}
{{< partial "maybe-interested-2.md" >}}
{{< /callout >}}

### Alineación

Use las utilidades de texto según sea necesario para cambiar la alineación de tu blockquote.

{{< example >}}
<figure class="text-center">
  <blockquote class="blockquote">
    <p>Una cita conocida, contenida en un elemento blockquote.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Alguien fomoso en <cite title="Título fuente">Título fuente</cite>
  </figcaption>
</figure>
{{< /example >}}

{{< example >}}
<figure class="text-end">
  <blockquote class="blockquote">
    <p>Una cita conocida, contenida en un elemento blockquote.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Alguien fomoso en <cite title="Título fuente">Título fuente</cite>
  </figcaption>
</figure>
{{< /example >}}

## Listas

### Sin estilo

Elimina el `list-style` predeterminado y el margen izquierdo en los elementos de la lista (solo elementos secundarios inmediatos). **Esto solo se aplica a los elementos de la lista de elementos secundarios inmediatos**, lo que significa que también deberás agregar la clase para cualquier lista anidada.

{{< example >}}
<ul class="list-unstyled">
  <li>Esta es una lista.</li>
  <li>Parece completamente sin estilo.</li>
  <li>Estructuralmente, sigue siendo una lista.</li>
  <li>Sin embargo, este estilo solo se aplica a los elementos secundarios inmediatos.</li>
  <li>Listas anidadas:
    <ul>
      <li>no se ven afectados por este estilo</li>
      <li>seguirá mostrando una viñeta</li>
      <li>y tenedrá un margen izquierdo apropiado</li>
    </ul>
  </li>
  <li>Esto aún puede ser útil en algunas situaciones.</li>
</ul>
{{< /example >}}

### En línea

Elimina las viñetas de una lista y aplica un `margin` ligero con una combinación de dos clases, `.list-inline` y `.list-inline-item`.

{{< example >}}
<ul class="list-inline">
  <li class="list-inline-item">Este es un elemento de lista.</li>
  <li class="list-inline-item">Y otro.</li>
  <li class="list-inline-item">Pero se muestran en línea.</li>
</ul>
{{< /example >}}

### Alineación de la lista de descripciones

Alinea términos y descripciones horizontalmente utilizando las clases predefinidas de nuestro sistema de cuadrícula (o mixins semánticos). Para términos más largos, puedes agregar opcionalmente una clase `.text-truncate` para truncar el texto con puntos suspensivos.

{{< example >}}
<dl class="row">
  <dt class="col-sm-3">Listas de descripción</dt>
  <dd class="col-sm-9">Una lista de descripciones es perfecta para definir términos.</dd>

  <dt class="col-sm-3">Plazo</dt>
  <dd class="col-sm-9">
    <p>Definición del término.</p>
    <p>Y más texto de definición de marcador de posición.</p>
  </dd>

  <dt class="col-sm-3">Otro término</dt>
  <dd class="col-sm-9">Esta definición es corta, así que no hay párrafos adicionales ni nada.</dd>

  <dt class="col-sm-3 text-truncate">El término truncado está truncado</dt>
  <dd class="col-sm-9">Esto puede ser útil cuando el espacio es reducido. Añade puntos suspensivos al final.</dd>

  <dt class="col-sm-3">Anidamiento</dt>
  <dd class="col-sm-9">
    <dl class="row">
      <dt class="col-sm-4">Lista de definiciones anidadas</dt>
      <dd class="col-sm-8">Oí que te gustan las listas de definiciones. Déjame poner una lista de definiciones dentro de tu lista de definiciones.</dd>
    </dl>
  </dd>
</dl>
{{< /example >}}

## Responsive font sizes

En Bootstrap 5, habilitamos tamaños de fuente responsive de forma predeterminada, lo que permite que el texto se escale de forma más natural según los tamaños de dispositivos y viewports. Echa un vistazo a la [página RFS]({{< docsref "/getting-started/rfs" >}}) para averiguar cómo funciona.

## Sass

{{< callout info >}}
{{< partial "maybe-interested-3.md" >}}
{{< /callout >}}

### Variables

Los encabezados tienen algunas variables dedicadas para el tamaño y el espaciado.

{{< scss-docs name="headings-variables" file="scss/_variables.scss" >}}

Varios elementos tipográficos que se tratan aquí y en [Reboot]({{< docsref "/content/reboot" >}}) también tienen variables dedicadas.

{{< scss-docs name="type-variables" file="scss/_variables.scss" >}}

### Mixins

No hay mixins dedicados para la tipografía, pero Bootstrap usa [Tamaño de fuente responsive (RFS)]({{< docsref "/getting-started/rfs" >}}).
