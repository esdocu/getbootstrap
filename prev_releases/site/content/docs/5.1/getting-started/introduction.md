---
layout: docs
title: Introducción
description: Comienza con Bootstrap, el framework más popular del mundo para crear sitios adaptables para dispositivos móviles, con jsDelivr y con una plantilla como página de inicio.
group: getting-started
aliases:
  - "/docs/5.1/getting-started/"
  - "/docs/getting-started/"
  - "/getting-started/"
toc: true
---

## Inicio rápido

¿Estás buscando agregar rápidamente Bootstrap a tu proyecto? Usa jsDelivr, un CDN gratuito de código abierto. ¿Utilizas un administrador de paquetes o necesitas descargar los archivos fuente? [Dirígete a la página de descargas]({{< docsref "/getting-started/download" >}}).

### CSS

Para cargar nuestro CSS, copia y pega el `<link>` a la hoja de estilo en tu `<head>`, justo antes que todas las demás hojas de estilo.

```html
<link href="{{< param "cdn.css" >}}" rel="stylesheet" integrity="{{< param "cdn.css_hash" >}}" crossorigin="anonymous">
```

### JS

Muchos de nuestros componentes requieren el uso de JavaScript para funcionar. Específicamente, requieren nuestros propios complementos de JavaScript y [Popper](https://popper.js.org/). Coloca **uno de los siguientes `<script>`s** cerca del final de tus páginas, justo antes de la etiqueta de cierre `</body>`, para habilitarlos.

#### Bundle

Puedes añadir cada complemento y dependencia de JavaScript de Bootstrap con uno de nuestros dos paquetes. Tanto `bootstrap.bundle.js` como `bootstrap.bundle.min.js` incluyen [Popper](https://popper.js.org/) para nuestros tooltips (información emergente) y popovers (ventanas emergentes). Para obtener más información sobre lo que se incluye en Bootstrap, consulta nuestra sección [contenidos]({{< docsref "/getting-started/contents#precompiled-bootstrap" >}}).

```html
<script src="{{< param "cdn.js_bundle" >}}" integrity="{{< param "cdn.js_bundle_hash" >}}" crossorigin="anonymous"></script>
```

#### Separado

Si decides optar por la solución de scripts separados, Popper debe ser lo primero (si estás utilizando tooltips o popovers) y luego nuestros complementos de JavaScript.

```html
<script src="{{< param "cdn.popper" >}}" integrity="{{< param "cdn.popper_hash" >}}" crossorigin="anonymous"></script>
<script src="{{< param "cdn.js" >}}" integrity="{{< param "cdn.js_hash" >}}" crossorigin="anonymous"></script>
```

#### Módulos

Si usas `<script type="module">`, consulta nuestra sección [usando Bootstrap como módulo]({{< docsref "/getting-started/javascript#using-bootstrap-as-a-module" >}}).

#### Componentes

¿Tienes curiosidad por saber qué componentes requieren explícitamente nuestro JavaScript y Popper? Haz clic en el enlace Mostrar componentes a continuación. Si no estás seguro acerca de la estructura general de la página, sigue leyendo para ver una plantilla de página de ejemplo.

<details>
<summary class="text-primary mb-3">Mostrar componentes que requieren JavaScript</summary>
{{< markdown >}}
- *Alerts*, para ocultarlas
- *Buttons*, para alternar sus estados y funcionalidad de *checkbox*/*radio*
- *Carousel*, para todos los comportamientos de diapositivas, controles e indicadores
- *Collapse*, para alternar la visibilidad del contenido
- *Dropdowns*, para mostrar y posicionar (también requiere [Popper](https://popper.js.org/))
- *Modals*, para mostrar, posicionar y comportamiento de desplazamiento
- *Navbar*, para extender nuestro complemento Collapse para implementar un comportamiento responsive
- *Offcanvases*, para visualización, posicionamiento y comportamiento de desplazamiento
- *Toasts*, para mostrar y ocultar
- *Tooltips* y *popovers*, para mostrar y posicionar (también requiere [Popper](https://popper.js.org/))
- *Scrollspy*, para el comportamiento de desplazamiento y actualizaciones de navegación
{{< /markdown >}}
</details>

## Plantilla de inicio

Asegúrate de configurar tus páginas con los últimos estándares de diseño y desarrollo. Eso significa usar un HTML5 doctype e incluir una metaetiqueta viewport para comportamientos responsive adecuados. Pon todo junto y tus páginas deberían verse así:

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="{{< param "cdn.css" >}}" rel="stylesheet" integrity="{{< param "cdn.css_hash" >}}" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

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

Para conocer los próximos pasos, visita [Layout docs]({{< docsref "/layout/grid" >}}) o [nuestros ejemplos oficiales]({{< docsref "/examples" >}}) para comenzar a crear el contenido y componentes de tu sitio web.

## Globales importantes

Bootstrap emplea un puñado de estilos y configuraciones globales importantes que deberás tener en cuenta al usarlo, todos los cuales están orientados casi exclusivamente a la *normalización* de estilos entre navegadores. Veámoslo.

### HTML5 doctype

Bootstrap requiere el uso del HTML5 doctype. Sin él, verás un estilo incompleto, pero incluirlo no debería causar contratiempos considerables.

```html
<!doctype html>
<html lang="en">
  ...
</html>
```

### Responsive meta tag

Bootstrap se desarrolla *mobile first*, una estrategia en la que primero optimizamos el código para dispositivos móviles y luego escalamos los componentes según sea necesario utilizando media queries CSS. Para garantizar una representación adecuada y el zoom táctil para todos los dispositivos, **agrega la metaetiqueta responsive viewport** a tu `<head>`.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```
Puedes ver un ejemplo de esto en acción en la [plantilla de inicio](#starter-template).

### Box-sizing

Para un dimensionamiento más sencillo en CSS, cambiamos el valor global `box-sizing` de `content-box` a `border-box`. Esto garantiza que el `padding` no afecte el ancho calculado final de un elemento, pero puede causar problemas con algunos software de terceros como Google Maps y Google Custom Search Engine.

En las raras ocasiones en que necesites anularlo, utiliza algo como lo siguiente:

```css
.selector-for-some-widget {
  box-sizing: content-box;
}
```
Con el fragmento anterior, los elementos anidados, incluido el contenido generado a través de `::before` y `::after`, heredarán el `box-sizing` especificado para ese `.selector-for-some-widget`.

Obtén más información sobre el [modelo de caja y tamaño en CSS Tricks](https://css-tricks.com/box-sizing/).

### Reboot

Para mejorar la compatibilidad entre navegadores, usamos [Reboot]({{< docsref "/content/reboot" >}}) para corregir las incoherencias entre navegadores.

## Comunidad

Mantente actualizado sobre el desarrollo de Bootstrap y comunícate con la comunidad con estos útiles recursos.

- Lee y suscríbete al [Blog oficial de Bootstrap]({{< param blog >}}).
- Únete a [la sala oficial de Slack]({{< param slack >}}).
- Chatea con compañeros Bootstrappers en IRC. En el servidor `irc.libera.chat`, en el canal `#bootstrap`.
- Puedes encontrar ayuda para la implementación en Stack Overflow (etiquetado [`bootstrap-5`](https://stackoverflow.com/questions/tagged/bootstrap-5)).
- Los desarrolladores deben usar la palabra clave `bootstrap` en los paquetes que modifican o agregan funcionalidad a Bootstrap cuando se distribuyen a través de [npm](https://www.npmjs.com/search?q=keywords:bootstrap) o mecanismos de entrega similares para máxima capacidad de descubrimiento.

También puedes seguir a [@getbootstrap en Twitter](https://twitter.com/{{< param twitter >}}) para conocer los últimos chismes y videos musicales increíbles.