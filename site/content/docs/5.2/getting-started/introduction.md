---
layout: docs
title: Comenzando con Bootstrap
description: Bootstrap es un potente conjunto de herramientas de front-end repleto de funciones. Crea cualquier cosa, desde el prototipo hasta la producción, en minutos.
group: getting-started
aliases:
  - "/docs/5.2/getting-started/"
  - "/docs/getting-started/"
  - "/getting-started/"
toc: true
---

## Inicio rápido

Comienza incluyendo el CSS y JavaScript listos para producción de Bootstrap a través de CDN sin necesidad de realizar ningún paso de compilación. Velo en la práctica con esta [demostración de Bootstrap en CodePen](https://codepen.io/team/bootstrap/pen/qBamdLj).

<br>

1. **Crea un nuevo archivo `index.html` en la raíz de tu proyecto.** Incluye también la etiqueta `<meta name="viewport">` para el [comportamiento responsive adecuado](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag) en dispositivos móviles.

   ```html
   <!doctype html>
   <html lang="en">
     <head>
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <title>Demo Bootstrap</title>
     </head>
     <body>
       <h1>¡Hola Mundo!</h1>
     </body>
   </html>
   ```

2. **Incluye CSS y JS de Bootstrap.** Coloca la etiqueta `<link>` en `<head>` para nuestro CSS, y la etiqueta `<script>` para nuestro paquete de JavaScript (incluido Popper para posicionar menús desplegables, poppers y tooltips) antes del `</body>` de cierre. Obtén más información sobre nuestros [enlaces CDN](#cdn-links).
  
   ```html
   <!doctype html>
   <html lang="en">
     <head>
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <title>Demo Bootstrap</title>
       <link href="{{< param "cdn.css" >}}" rel="stylesheet" integrity="{{< param "cdn.css_hash" >}}" crossorigin="anonymous">
     </head>
     <body>
       <h1>¡Hola Mundo!</h1>
       <script src="{{< param "cdn.js_bundle" >}}" integrity="{{< param "cdn.js_bundle_hash" >}}" crossorigin="anonymous"></script>
     </body>
   </html>
   ```

   También puedes incluir [Popper](https://popper.js.org/) y nuestro JS por separado. Si no planeas usar menús desplegables, ventanas emergentes (popovers) o tooltips, ahorra algunos kilobytes al no incluir Popper.

   ```html
   <script src="{{< param "cdn.popper" >}}" integrity="{{< param "cdn.popper_hash" >}}" crossorigin="anonymous"></script>
   <script src="{{< param "cdn.js" >}}" integrity="{{< param "cdn.js_hash" >}}" crossorigin="anonymous"></script>
   ```

4. **¡Hola, mundo!** Abre la página en el navegador que prefieras para ver tu página Bootstrapped. Ahora puedes comenzar a construir con Bootstrap creando tu propio [diseño]({{< docsref "/layout/grid" >}}), agregando docenas de [componentes]({{< docsref "/components/buttons" >}}) y utilizando [nuestros ejemplos oficiales]({{< docsref "/examples" >}}).

## Enlaces CDN

Como referencia, aquí están nuestros enlaces principales de CDN.

{{< bs-table >}}
| Description | URL |
| --- | --- |
| CSS | `{{< param "cdn.css" >}}` |
| JS | `{{< param "cdn.js_bundle" >}}` |
{{< /bs-table >}}

También puedes usar el CDN para obtener cualquiera de nuestras [compilaciones adicionales enumeradas en la página de contenido]({{< docsref "/getting-started/contents" >}}).

## Próximos pasos

- Lee un poco más sobre algunas [configuraciones de entorno global importantes](#important-globals) que utiliza Bootstrap.

- Lee sobre lo que se incluye en Bootstrap en nuestra [sección de contenido]({{< docsref "/getting-started/contents#precompiled-bootstrap" >}}) y la lista de [componentes que requieren JavaScript](#js-components) abajo.

- ¿Necesitas un poco más de potencia? Considera construir con Bootstrap [incluyendo los archivos fuente a través del administrador de paquetes]({{< docsref "/getting-started/download#package-managers" >}}).

- ¿Estás buscando usar Bootstrap como un módulo con `<script type="module">`? Consulta nuestra sección [Uso de Bootstrap como módulo]({{< docsref "/getting-started/javascript#using-bootstrap-as-a-module" >}}).

## Componentes JS

¿Tienes curiosidad por saber qué componentes requieren explícitamente nuestro JavaScript y Popper? Haz clic en el enlace Mostrar componentes a continuación. Si no estás seguro acerca de la estructura general de la página, sigue leyendo para ver una plantilla de página de ejemplo.

<details>
<summary class="text-primary mb-3">Mostrar componentes que requieren JavaScript</summary>
{{< markdown >}}
- Alerts para poder ocultarlas
- Buttons para alternar estados y funcionalidad de casilla de verificación/radio
- Carrusel para todos los comportamientos de diapositivas, controles e indicadores
- Collapse para alternar la visibilidad del contenido
- Dropdown para mostrar y posicionar (también requiere [Popper](https://popper.js.org/))
- Modals para mostrar, posicionar y comportamiento de desplazamiento
- Navbar para extender nuestros complementos Collapse y Offcanvas para implementar comportamientos responsive
- Navs con el complemento Tab para alternar paneles de contenido
- Offcanvas para visualización, posicionamiento y comportamiento de desplazamiento
- Scrollspy para el comportamiento de desplazamiento y actualizaciones de navegación
- Toasts para mostrar y ocultar
- Tooltips y popovers para mostrar y posicionar (también requiere [Popper](https://popper.js.org/))
{{< /markdown >}}
</details>

## Globales importantes

Bootstrap emplea un puñado de estilos y configuraciones globales importantes, todos los cuales están orientados casi exclusivamente hacia la *normalización* de estilos entre navegadores. Sumerjámonos.

### HTML5 doctype

Bootstrap requiere el uso del HTML5 doctype. Sin él, verás un estilo funky e incompleto.

```html
<!doctype html>
<html lang="en">
  ...
</html>
```

### Metaetiqueta responsive

Bootstrap se desarrolla *mobile first*, una estrategia en la que primero optimizamos el código para dispositivos móviles y luego escalamos los componentes según sea necesario utilizando media queries CSS. Para garantizar una representación adecuada y el zoom táctil para todos los dispositivos, agrega la etiqueta meta de viewport responsive a tu `<head>`.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Puedes ver un ejemplo de esto en acción en el [inicio rápido](#quick-start).

### Box-sizing

Para un dimensionamiento más sencillo en CSS, cambiamos el valor global de `box-sizing` de `content-box` a `border-box`. Esto asegura que el `padding` no afecte el ancho calculado final de un elemento, pero puede causar problemas con algún software de terceros como Google Maps y Google Custom Search Engine.

En las raras ocasiones en que necesites anularlo, usa algo como lo siguiente:

```css
.selector-for-some-widget {
  box-sizing: content-box;
}
```

Con el fragmento anterior, los elementos anidados, incluido el contenido generado a través de `::before` y `::after`, heredarán el `box-sizing` especificado para ese `.selector-for-some-widget`.

Obtén más información sobre [box model y sizing en CSS Tricks](https://css-tricks.com/box-sizing/).

### Reboot

Para mejorar el renderizado entre navegadores, usamos [Reboot]({{< docsref "/content/reboot" >}}) para corregir las incoherencias entre navegadores y dispositivos al tiempo que proporcionamos reinicios ligeramente más obstinados a los elementos HTML comunes.

## Comunidad

Manténte actualizado sobre el desarrollo de Bootstrap y comunícate con la comunidad con estos útiles recursos.

- Lee y suscríbete al [Blog oficial de Bootstrap]({{< param blog >}}).
- Únete a la [sala oficial de Slack]({{< param slack >}}).
- Chatea con compañeros Bootstrappers en IRC. En el servidor `irc.libera.chat`, en el canal `#bootstrap`.
- La ayuda para la implementación se puede encontrar en Stack Overflow (etiquetado [`bootstrap-5`](https://stackoverflow.com/questions/tagged/bootstrap-5)).
- Los desarrolladores deben usar la palabra clave `bootstrap` en los paquetes que modifican o agregan funcionalidad a Bootstrap cuando se distribuyen a través de [npm](https://www.npmjs.com/search?q=keywords:bootstrap) o mecanismos de entrega similares para máxima capacidad de descubrimiento.

También puedes seguir a [@getbootstrap en Twitter](https://twitter.com/{{< param twitter >}}) para conocer los últimos chismes y videos musicales increíbles.
