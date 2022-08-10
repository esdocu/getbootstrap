---
layout: docs
title: Migración a v5
description: Realiza un seguimiento y revisa los cambios en los archivos fuente, la documentación y los componentes de Bootstrap para ayudarte a migrar de la v4 a v5.
group: migration
aliases: "/migration/"
toc: true
---

## v5.2.0

### Nuevo `_maps.scss`

Bootstrap v5.2.0 introdujo un nuevo archivo Sass, `_maps.scss`, que sacó varios mapas Sass de `_variables.scss` para solucionar un problema donde las actualizaciones de un mapa original no se aplicaban a los mapas secundarios que los amplían. Por ejemplo, las actualizaciones de `$theme-colors` no se aplicaban a otros mapas temáticos que dependían de `$theme-colors`, lo que interrumpía los flujos de trabajo de personalización clave. En resumen, Sass tiene una limitación en la que una vez que se ha _usado_ una variable o mapa predeterminado, no se puede actualizar.

Esta es la razón por la cual las personalizaciones de variables en Bootstrap tienen que venir después de `@import "functions"`, pero antes de `@import "variables"` y el resto de nuestra pila de importación. Lo mismo se aplica a los mapas de Sass: debes sobrescribir los valores predeterminados antes de que se utilicen los valores predeterminados. Los siguientes mapas se han movido al nuevo `_maps.scss`:

- `$theme-colors-rgb`
- `$utilities-colors`
- `$utilities-text`
- `$utilities-text-colors`
- `$utilities-bg`
- `$utilities-bg-colors`
- `$negative-spacers`
- `$gutters`

Tus compilaciones personalizadas de Bootstrap CSS ahora deberían verse así con una importación de mapas separada.

```diff
  // Functions come first
  @import "functions";

  // Optional variable overrides here
+ $custom-color: #df711b;
+ $custom-theme-colors: (
+   "custom": $custom-color
+ );

  // Variables come next
  @import "variables";

+ // Optional Sass map overrides here
+ $theme-colors: map-merge($theme-colors, $custom-theme-colors);
+
+ // Followed by our default maps
+ @import "maps";
+
  // Rest of our imports
  @import "mixins";
  @import "utilities";
  @import "root";
  @import "reboot";
  // etc
```

### Cambios clave

- **Se introdujo la nueva opción `$enable-container-classes`.** Ahora, al optar por el diseño experimental de CSS Grid, las clases `.container-*` aún se compilarán, a menos que esta opción se establezca en `false`.

## Dependencias

- Se eliminó jQuery.
- Se actualizó de Popper v1.x a Popper v2.x.
- Se reemplazó Libsass con Dart Sass ya que nuestro compilador de Sass, Libsass estaba obsoleto.
- Se migró de Jekyll a Hugo para construir nuestra documentación.

## Compatibilidad con navegador

- Se eliminó Internet Explorer 10 y 11
- Se eliminó Microsoft Edge <16 (Legacy Edge)
- Se eliminó Firefox < 60
- Se eliminó Safari < 12
- Se eliminó iOS Safari < 12
- Se eliminó Chrome < 60

<hr class="my-5">

## Cambios en la documentación

- Página de inicio, diseño de documentos y pie de página rediseñados.
- Se agregó [nueva guía de paquetes]({{< docsref "/getting-started/parcel" >}}).
- Se agregó [nueva sección Personalizar]({{< docsref "/customize/overview" >}}), reemplazando [página de temas de v4](https://getbootstrap.com/docs/4.6/getting-started/theming/), con nuevos detalles sobre Sass, opciones de configuración global, esquemas de color, variables CSS y más.
- Se reorganizó toda la documentación de los formularios en [nueva sección de formularios]({{< docsref "/forms/overview" >}}), dividiendo el contenido en páginas más enfocadas.
- Del mismo modo, se actualizó [la sección Diseño]({{< docsref "/layout/breakpoints" >}}), para desarrollar el contenido de la cuadrícula con mayor claridad.
- Cambió el nombre de la página del componente "Navs" a "Navs & Tabs".
- Cambió el nombre de la página "Checks" a "Checks & radios".
- Se rediseñó la barra de navegación y se agregó una nueva subnavegación para facilitar la navegación por nuestros sitios y versiones de documentos.
- Se agregó un nuevo método abreviado de teclado para el campo de búsqueda: <kbd>Ctrl + /</kbd>.

## Sass

- Hemos eliminado las fusiones de mapas de Sass predeterminadas para facilitar la eliminación de valores redundantes. Ten en cuenta que ahora debes definir todos los valores en los mapas de Sass como `$theme-colors`. Mira cómo lidiar con [Mapas Sass]({{< docsref "/customize/sass#maps-and-loops" >}}).

- <span class="badge bg-danger">Breaking</span> Se cambió el nombre de la función `color-yiq()` y las variables relacionadas a `color-contrast()` ya que ya no está relacionado con el espacio de color YIQ. [Ver #30168.](https://github.com/twbs/bootstrap/pull/30168/)
  - Se cambia el nombre de `$yiq-contrasted-threshold` a `$min-contrast-ratio`.
  - `$yiq-text-dark` y `$yiq-text-light` se renombran respectivamente a `$color-contrast-dark` y `$color-contrast-light`.

- <span class="badge bg-danger">Breaking</span> Los parámetros mixins de media queries han cambiado para un enfoque más lógico.
  - `media-breakpoint-down()` usa el propio breakpoint en lugar del siguiente breakpoint (p. ej., `media-breakpoint-down(lg)` en lugar de `media-breakpoint-down(md)` apunta a viewports más pequeños que `lg `).
  - De manera similar, el segundo parámetro en `media-breakpoint-between()` también usa el breakpoint en sí mismo en lugar del siguiente breakpoint (por ejemplo, `media-between(sm, lg)` en lugar de `media-breakpoint-between(sm, md)` apunta a viewports entre `sm` y `lg`).

- <span class="badge bg-danger">Breaking</span> Se eliminaron los estilos de impresión y la variable `$enable-print-styles`. Las clases de visualización de impresión todavía existen. [Ver #28339](https://github.com/twbs/bootstrap/pull/28339).

- <span class="badge bg-danger">Breaking</span> Se eliminaron las funciones `color()`, `theme-color()` y `gray()` en favor de las variables. [Ver #29083](https://github.com/twbs/bootstrap/pull/29083).

- <span class="badge bg-danger">Breaking</span> Se renombró la función `theme-color-level()` a `color-level()` y ahora acepta cualquier color que desees en lugar de solo colores `$theme-color`. [Ver #29083](https://github.com/twbs/bootstrap/pull/29083) **Cuidado:** `color-level()` se eliminó más tarde en `v5.0.0-alpha3`.

- <span class="badge bg-danger">Breaking</span> Renombrado `$enable-prefers-reduced-motion-media-query` y `$enable-pointer-cursor-for-buttons` a `$enable-reduced-motion` y `$enable-button-pointers` por brevedad.

- <span class="badge bg-danger">Breaking</span> Eliminado el mixin `bg-gradient-variant()`. Utiliza la clase `.bg-gradient` para agregar degradados a los elementos en lugar de las clases `.bg-gradient-*` generadas.

- <span class="badge bg-danger">Breaking</span> **Se eliminaron los mixins anteriormente obsoletos:**
  - `hover`, `hover-focus`, `plain-hover-focus`, and `hover-focus-active`
  - `float()`
  - `form-control-mixin()`
  - `nav-divider()`
  - `retina-img()`
  - `text-hide()` (también eliminó la clase de utilidad asociada, `.text-hide`)
  - `visibility()`
  - `form-control-focus()`

- <span class="badge bg-danger">Breaking</span> Se cambió el nombre de la función `scale-color()` a `shift-color()` para evitar la colisión con la propia función de escalado de color de Sass.

- Los mixins `box-shadow` ahora permiten valores `null` y eliminan `none` de múltiples argumentos. [Ver #30394](https://github.com/twbs/bootstrap/pull/30394).

- El mixin `border-radius()` ahora tiene un valor predeterminado.

## Sistema de colores

- El sistema de color que funcionaba con `color-level()` y `$theme-color-interval` se eliminó en favor de un nuevo sistema de color. Todas las funciones `lighten()` y `darken()` en nuestro código base se reemplazan por `tint-color()` y `shade-color()`. Estas funciones mezclarán el color con blanco o negro en lugar de cambiar su luminosidad en una cantidad fija. El `shift-color()` teñirá o sombreará un color dependiendo de si su parámetro de peso es positivo o negativo. [Ver #30622](https://github.com/twbs/bootstrap/pull/30622) para más detalles.

- Se agregaron nuevos tintes y sombras para cada color, proporcionando nueve colores separados para cada color base, como nuevas variables de Sass.

- Mejora del contraste de color. Relación de contraste de color mejorada de 3:1 a 4.5:1 y colores azul, verde, cian y rosa actualizados para garantizar el contraste WCAG 2.1 AA. También cambiamos nuestro color de contraste de `$gray-900` a `$black`.

- Para soportar nuestro sistema de color, hemos agregamos nuevas funciones personalizadas `tint-color()` y `shade-color()` para mezclar nuestros colores apropiadamente.

## Actualizaciones de cuadrícula

- **¡Nuevo breakpoint!** Se agregó un nuevo breakpoint `xxl` para `1400px` y superiores. No hay cambios en todos los demás breakpoints.

- **Gutters mejorados.** Los gutters ahora se configuran en rems, y son más angostas que v4 (`1.5rem`, o alrededor de `24px`, menos que `30px`). Esto alinea las gutters de nuestro sistema de cuadrícula con nuestras utilidades de espaciado.
  - Se agregó una nueva [clase de gutter]({{< docsref "/layout/gutters" >}}) (`.g-*`, `.gx-*` y `.gy-*`) para controlar gutters horizontal/vertical, gutters horizontales y gutters verticales.
  - <span class="badge bg-danger">Breaking</span> Se cambió el nombre de `.no-gutters` a `.g-0` para que coincida con las nuevas utilidades de gutters.

- Las columnas ya no tienen aplicada `position: relative`, por lo que es posible que debas agregar `position: relative` a algunos elementos para restaurar ese comportamiento.

- <span class="badge bg-danger">Breaking</span> Se eliminaron varias clases `.order-*` que a menudo no se usaban. Ahora solo proporcionamos `.order-1` a `.order-5`.

- <span class="badge bg-danger">Breaking</span> Se eliminó el componente `.media` ya que se puede replicar fácilmente con utilidades. [Consulta #28265](https://github.com/twbs/bootstrap/pull/28265) y la [página de utilidades flexibles para ver un ejemplo]({{< docsref "/utilities/flex#media-object" >}}).

- <span class="badge bg-danger">Breaking</span> `bootstrap-grid.css` ahora solo aplica `box-sizing: border-box` a la columna en lugar de restablecer el box-sizing global. De esta manera, nuestros estilos de cuadrícula se pueden usar en más lugares sin interferencias.

- `$enable-grid-classes` ya no deshabilita la generación de clases contenedoras. [Ver #29146.](https://github.com/twbs/bootstrap/pull/29146)

- Se actualizó el mixin `make-col` por defecto a columnas iguales sin un tamaño específico.

## Contenido, Reboot, etc.

- **[RFS]({{< docsref "/getting-started/rfs" >}}) ahora está habilitado de manera predeterminada.** Los encabezados que usan el mixin `font-size()` ajustarán automáticamente su `font-size` para escalar con el viewport. _Esta característica se incorporó previamente con v4._

- <span class="badge bg-danger">Breaking</span> Revisamos nuestra tipografía de visualización para reemplazar nuestras variables `$display-*` y con un mapa Sass `$display-font-sizes`. También se eliminaron las variables `$display-*-weight` individuales para un único `$display-font-weight` y se ajustó el `font-size`s.

- Se agregaron dos nuevos tamaños de encabezado `.display-*`, `.display-5` y `.display-6`.

- **Los enlaces están subrayados de manera predeterminada** (no solo al pasar el mouse), a menos que formen parte de componentes específicos.

- **Tablas rediseñadas** para actualizar sus estilos y reconstruirlas con variables CSS para un mayor control sobre el estilo.

- <span class="badge bg-danger">Breaking</span> Las tablas anidadas ya no heredan estilos.

- <span class="badge bg-danger">Breaking</span> `.thead-light` y `.thead-dark` se eliminan en favor de las clases variantes `.table-*` que se pueden usar para todos elementos de la tabla (`thead`, `tbody`, `tfoot`, `tr`, `th` y `td`).

- <span class="badge bg-danger">Breaking</span> El mixin `table-row-variant()` se renombra a `table-variant()` y acepta solo 2 parámetros: `$color` (color nombre) y `$value` (código de color). El color del borde y los colores de énfasis se calculan automáticamente en función de las variables de factor de la tabla.

- Dividimos las variables de padding de las celdas de la tabla en `-y` y `-x`.

- <span class="badge bg-danger">Breaking</span> Se eliminó la clase `.pre-scrollable`. [Ver #29135](https://github.com/twbs/bootstrap/pull/29135)

- <span class="badge bg-danger">Breaking</span> Las utilidades `.text-*` ya no agregan estados focus y hover a los enlaces. En su lugar, se pueden usar las clases auxiliares `.link-*`. [Ver #29267](https://github.com/twbs/bootstrap/pull/29267)

- <span class="badge bg-danger">Breaking</span> Se eliminó la clase `.text-justify`. [Ver #29793](https://github.com/twbs/bootstrap/pull/29793)

- <span class="badge bg-danger">Breaking</span> Los elementos `<hr>` ahora usan `height` en lugar de `border` para admitir mejor el atributo `size`. Esto también permite el uso de utilidades de relleno para crear divisores más gruesos (por ejemplo, `<hr class="py-1">`).

- Se restablece el `padding-left` horizontal predeterminado en los elementos `<ul>` y `<ol>` del valor predeterminado del navegador `40px` a `2rem`.

- Se agregó `$enable-smooth-scroll`, que aplica `scroll-behavior: smooth` globalmente, excepto para los usuarios que solicitan movimiento reducido a través de la media query `prefers-reduced-motion`. [Ver #31877](https://github.com/twbs/bootstrap/pull/31877)

## RTL

- Las variables específicas de dirección horizontal, las utilidades y los mixins se han renombrado para usar propiedades lógicas como las que se encuentran en los diseños de flexbox, por ejemplo, `start` y `end` en lugar de `left` y `right`.

## Formularios

- **¡Se agregaron nuevos formularios flotantes!** Hemos promovido el ejemplo de etiquetas flotantes a componentes de formulario totalmente compatibles. [Vea la nueva página de etiquetas flotantes.]({{< docsref "/forms/floating-labels" >}})

- <span class="badge bg-danger">Breaking</span> **Elementos de formulario nativos y personalizados consolidados.** Se han consolidado casillas de verificación, radios, selecciones y otras entradas que tenían clases nativas y personalizadas en v4. Ahora, casi todos nuestros elementos de formulario son totalmente personalizados, la mayoría sin necesidad de HTML personalizado.
  - `.custom-control.custom-checkbox` ahora es `.form-check`.
  - `.custom-control.custom-custom-radio` ahora es `.form-check`.
  - `.custom-control.custom-switch` ahora es `.form-check.form-switch`.
  - `.custom-select` ahora es `.form-select`.
  - `.custom-file` y `.form-file` han sido reemplazados por estilos personalizados encima de `.form-control`.
  - `.custom-range` ahora es `.form-range`.
  - Se eliminaron `.form-control-file` y `.form-control-range` nativos.

- <span class="badge bg-danger">Breaking</span> Eliminado `.input-group-append` y `.input-group-prepend`. Ahora puede simplemente agregar botones y `.input-group-text` como elementos secundarios directos de los grupos de entrada.

- El antiguo [Falta el radio del borde en el grupo de entrada con el error de retroalimentación de validación](https://github.com/twbs/bootstrap/issues/25110) finalmente se corrige al agregar una clase adicional `.has-validation` a los grupos de entrada con validación.

- <span class="badge bg-danger">Breaking</span> **Clases de diseño específicas de formulario eliminadas para nuestro sistema de cuadrícula.** Use nuestra cuadrícula y utilidades en lugar de `.form-group`, `.form-row`, o `.form-inline`.

- <span class="badge bg-danger">Breaking</span> Las etiquetas de formulario ahora requieren `.form-label`.

- <span class="badge bg-danger">Breaking</span> `.form-text` ya no establece `display`, lo que le permite crear texto de ayuda en línea o en bloque como desee simplemente cambiando el elemento HTML.

- Los íconos de validación ya no se aplican a `<select>`s con `multiple`.

- Archivos Sass de origen reorganizados en `scss/forms/`, incluidos los estilos de grupo de entrada.

<hr class="my-5">

## Componentes

- Los valores de `padding` unificados para alertas, breadcrumbs, tarjetas, menús desplegables, grupos de listas, modales, popovers y tooltips se basarán en nuestra variable `$spacer`. [Ver #30564](https://github.com/twbs/bootstrap/pull/30564).

### Accordion

- Se agregó [nuevo componente de acordeón]({{< docsref "/components/accordion" >}}).

### Alerts

- Las alertas ahora tienen [ejemplos con íconos]({{< docsref "/components/alerts#icons" >}}).

- Se eliminaron los estilos personalizados para `<hr>`s en cada alerta, ya que ya usan `currentColor`.

### Badges

- <span class="badge bg-danger">Breaking</span> Se eliminaron todas las clases de color `.badge-*` para las utilidades de fondo (por ejemplo, use `.bg-primary` en lugar de `.badge-primary`).

- <span class="badge bg-danger">Breaking</span> Se eliminó `.badge-pill`: use la utilidad `.rounded-pill` en su lugar.

- <span class="badge bg-danger">Breaking</span> Se eliminaron los estilos de hover y focus para los elementos `<a>` y `<button>`.

- Se aumentó el padding predeterminado para las insignias de `.25em`/`.5em` a `.35em`/`.65em`.

### Breadcrumbs

- Simplificó la apariencia predeterminada de las migas de pan eliminando `padding`, `background-color` y `border-radius`.

- Se agregó una nueva propiedad personalizada de CSS `--bs-breadcrumb-divider` para una fácil personalización sin necesidad de volver a compilar CSS.

### Buttons

- <span class="badge bg-danger">Breaking</span> **[Botones de alternar]({{< docsref "/forms/checks-radios#toggle-buttons" >}}), con casillas de verificación o radios, ya no requiere JavaScript y tiene un nuevo marcado.** Ya no requerimos un elemento de ajuste, agregue `.btn-check` a `<input>` y empareje con cualquier clase `.btn` en `<label>`. [Ver #30650](https://github.com/twbs/bootstrap/pull/30650). _Los documentos para esto se han movido de nuestra página de Botones a la nueva sección de Formularios._

- <span class="badge bg-danger">Breaking</span> **Eliminó `.btn-block` para utilidades.** En lugar de usar `.btn-block` en `.btn`, ajuste sus botones con `.d-grid` y una utilidad `.gap-*` para espaciarlos según sea necesario. Cambie a clases receptivas para tener aún más control sobre ellas. [Lea los documentos para ver algunos ejemplos.]({{< docsref "/components/buttons#block-buttons" >}})

- Se actualizaron nuestros mixins `button-variant()` y `button-outline-variant()` para admitir parámetros adicionales.

- Botones actualizados para garantizar un mayor contraste en los estados active y hover.

- Los botones deshabilitados ahora tienen `pointer-events: none;`.

### Card

- <span class="badge bg-danger">Breaking</span> Se eliminó `.card-deck` a favor de nuestra cuadrícula. Envuelva sus cartas en clases de columnas y agregue un contenedor principal `.row-cols-*` para recrear mazos de cartas (pero con más control sobre la alineación responsive).

- <span class="badge bg-danger">Breaking</span> Se eliminó `.card-columns` a favor de Masonry. [Ver #28922](https://github.com/twbs/bootstrap/pull/28922).

- <span class="badge bg-danger">Breaking</span> Se reemplazó el acordeón basado en `.card` con un [nuevo componente Accordion]({{< docsref "/components/accordion" >}}).

### Carousel

- Se agregó una nueva [variante `.carousel-dark`]({{< docsref "/components/carousel#dark-variant" >}}) para texto, controles e indicadores oscuros (ideal para fondos más claros).

- Se reemplazaron los íconos de chevron para los controles de carrusel con nuevos SVG de [Iconos de Bootstrap] ({{< param "icons" >}}).

### Close button

- <span class="badge bg-danger">Breaking</span> Renombrado `.close` a `.btn-close` para un nombre menos genérico.

- Los botones de cierre ahora usan una `background-image` (SVG incrustado) en lugar de `&times;` en el HTML, lo que permite una personalización más sencilla sin necesidad de tocar el marcado.

- Se agregó la nueva variante `.btn-close-white` que usa `filter: invert(1)` para habilitar íconos de descarte de mayor contraste contra fondos más oscuros.

### Collapse

- Se eliminó el anclaje de scroll para acordeones.

### Dropdowns

- Se agregó la nueva variante `.dropdown-menu-dark` y las variables asociadas para los menús desplegables oscuros bajo demanda.

- Se agregó una nueva variable para `$dropdown-padding-x`.

- Se oscureció el divisor desplegable para mejorar el contraste.

- <span class="badge bg-danger">Breaking</span> Todos los eventos del menú desplegable ahora se activan en el botón de alternancia del menú desplegable y luego se expanden al elemento principal.

- Los menús desplegables ahora tienen un atributo `data-bs-popper="static"` establecido cuando el posicionamiento del menú desplegable es estático, o el menú desplegable está en la barra de navegación. Esto lo agrega nuestro JavaScript y nos ayuda a usar estilos de posición personalizados sin interferir con el posicionamiento de Popper.

- <span class="badge bg-danger">Breaking</span> Se eliminó la opción `flip` para el complemento desplegable a favor de la configuración nativa de Popper. Ahora puede deshabilitar el comportamiento de volteo pasando una matriz vacía para la opción [`fallbackPlacements`](https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements) en [flip](https:// popper.js.org/docs/v2/modifiers/flip/) modificador.

- Ahora se puede hacer clic en los menús desplegables con una nueva opción `autoClose` para manejar el [comportamiento de cierre automático]({{< docsref "/components/dropdowns#auto-close-behavior" >}}). Puede usar esta opción para aceptar el clic dentro o fuera del menú desplegable para hacerlo interactivo.

- Los menús desplegables ahora admiten `.dropdown-item`s envueltos en `<li>`s.

### Jumbotron

- <span class="badge bg-danger">Breaking</span> Se eliminó el componente jumbotron, ya que se puede replicar con utilidades. [Vea nuestro nuevo ejemplo de Jumbotron para ver una demostración.]({{< docsref "/examples/jumbotron" >}})

### List group

- Se agregó el nuevo [modificador `.list-group-numbered`]({{< docsref "/components/list-group#numbered" >}}) para enumerar grupos.

### Navs and tabs

- Se agregaron nuevas variables `null` para `font-size`, `font-weight`, `color` y `:hover` `color` a la clase `.nav-link`.

### Navbars

- <span class="badge bg-danger">Breaking</span> Las barras de navegación ahora requieren un contenedor dentro (para simplificar drásticamente los requisitos de espacio y CSS requerido).

### Offcanvas

- Se agregó el nuevo [componente offcanvas]({{< docsref "/components/offcanvas" >}}).

### Pagination

- Los enlaces de paginación ahora tienen un `margin-left` personalizable que se redondea dinámicamente en todas las esquinas cuando se separan entre sí.

- Se agregaron `transition`s a los enlaces de paginación.

### Popovers

- <span class="badge bg-danger">Breaking</span> Renombrado `.arrow` a `.popover-arrow` en nuestra plantilla de popover predeterminada.

- Se renombró la opción `whiteList` a `allowList`.

### Spinners

- Los giradores ahora respetan `preferers-reduced-motion: reduce` al ralentizar las animaciones. [Ver #31882](https://github.com/twbs/bootstrap/pull/31882).

- Alineación vertical de la ruleta mejorada.

### Toasts

- Los toast ahora se pueden posicionar [positioned]({{< docsref "/components/toasts#placement" >}}) en un `.toast-container` con la ayuda de [posicionamiento de utilidades]({{< docsref "/utilities/position" >}}).

- Se cambió la duración predeterminada del toast a 5 segundos.

- Se eliminó `overflow: hidden` de los toasts y se reemplazó con `border-radius`s apropiados con funciones `calc()`.

### Tooltips

- <span class="badge bg-danger">Breaking</span> Renombrado `.arrow` a `.tooltip-arrow` en nuestra plantilla de tooltips predeterminada.

- <span class="badge bg-danger">Breaking</span> El valor predeterminado para `fallbackPlacements` se cambió a `['top', 'right', 'bottom', 'left']` para una mejor ubicación de elementos popper.

- <span class="badge bg-danger">Breaking</span> Se cambió el nombre de la opción `whiteList` a `allowList`.

## Utilidades

- <span class="badge bg-danger">Breaking</span> Se cambiaron los nombres de varias utilidades para usar nombres de propiedades lógicas en lugar de nombres direccionales con la adición de compatibilidad con RTL:
  - Renombrado `.left-*` y `.right-*` a `.start-*` y `.end-*`.
  - Renombrado `.float-left` y `.float-right` a `.float-start` y `.float-end`.
  - Renombrado `.border-left` y `.border-right` a `.border-start` y `.border-end`.
  - Renombrado `.rounded-left` y `.rounded-right` a `.rounded-start` y `.rounded-end`.
  - Renombrado `.ml-*` y `.mr-*` a `.ms-*` y `.me-*`.
  - Renombrado `.pl-*` y `.pr-*` a `.ps-*` y `.pe-*`.
  - Renombrado `.text-left` y `.text-right` a `.text-start` y `.text-end`.

- <span class="badge bg-danger">Breaking</span> Márgenes negativos deshabilitados de forma predeterminada.

- Se agregó una nueva clase `.bg-body` para configurar rápidamente el fondo `<body>` en elementos adicionales.

- Se agregaron nuevas [utilidades de posición]({{< docsref "/utilities/position#arrange-elements" >}}) para `top`, `right`, `bottom`, y `left`. Los valores incluyen `0`, `50%` y `100%` para cada propiedad.

- Se agregaron nuevas utilidades `.translate-middle-x` y `.translate-middle-y` para centrar horizontal o verticalmente elementos de posición absoluta/fija.

- Se agregaron nuevas [utilidades `border-width`]({{< docsref "/utilities/borders#border-width" >}}).

- <span class="badge bg-danger">Breaking</span> Renombrado `.text-monospace` a `.font-monospace`.

- <span class="badge bg-danger">Breaking</span> Se eliminó `.text-hide` ya que es un método anticuado para ocultar texto que ya no debería usarse.

- Se agregaron las utilidades `.fs-*` para las utilidades `font-size` (con RFS habilitado). Estos usan la misma escala que los encabezados predeterminados de HTML (1-6, de grande a pequeño) y se pueden modificar a través del mapa de Sass.

- <span class="badge bg-danger">Breaking</span> Se cambió el nombre de las utilidades `.font-weight-*` a `.fw-*` por brevedad y consistencia.

- <span class="badge bg-danger">Breaking</span> Renombradas utilidades `.font-style-*` como `.fst-*` por brevedad y consistencia.

- Se agregó `.d-grid` para mostrar las utilidades y nuevas utilidades `gap` (`.gap`) para diseños CSS Grid y flexbox.

- <span class="badge bg-danger">Breaking</span> Se eliminaron `.rounded-sm` y `rounded-lg`, y se introdujo una nueva escala de clases, `.rounded-0` a `.rounded- 3`. [Ver #31687](https://github.com/twbs/bootstrap/pull/31687).

- Se agregaron nuevas utilidades `line-height`: `.lh-1`, `.lh-sm`, `.lh-base` y `.lh-lg`. Consulta [aquí]({{< docsref "/utilities/text#line-height" >}}).

- Se movió la utilidad `.d-none` en nuestro CSS para darle más peso sobre otras utilidades de visualización.

- Extendido el ayudante `.visually-hidden-focusable` para que también funcione en contenedores, usando `:focus-within`.

## Helpers

- <span class="badge bg-danger">Breaking</span> **Se ha cambiado el nombre de los asistentes integrados responsive a [ayudantes de relación]({{< docsref "/helpers/ratio" >}})** con una nueva clase nombres y comportamientos mejorados, así como una útil variable CSS.
  - Se ha cambiado el nombre de las clases para cambiar `by` a `x` en la relación de aspecto. Por ejemplo, `.ratio-16by9` ahora es `.ratio-16x9`.
  - Eliminamos el selector `.embed-responsive-item` y el grupo de elementos en favor de un selector `.ratio > *` más simple. No se necesita más clase, y el ayudante de relación ahora funciona con cualquier elemento HTML.
  - Se cambió el nombre del mapa Sass `$embed-responsive-aspect-ratios` a `$aspect-ratios` y sus valores se simplificaron para incluir el nombre de la clase y el porcentaje como el par `key: value`.
  - Las variables CSS ahora se generan e incluyen para cada valor en el mapa Sass. Modifique la variable `--bs-aspect-ratio` en `.ratio` para crear cualquier [relación de aspecto personalizada]({{< docsref "/helpers/ratio#custom-ratios" >}}).

- <span class="badge bg-danger">Breaking</span> **Las clases de "lector de pantalla" ahora son [clases "visualmente ocultas"]({{< docsref "/helpers/visually-hidden" >}}) .**
  - Se cambió el archivo Sass de `scss/helpers/_screenreaders.scss` a `scss/helpers/_visually-hidden.scss`
  - Renombrado `.sr-only` y `.sr-only-focusable` a `.visually-hidden` y `.visually-hidden-focusable`
  - Se cambió el nombre de los mixins `sr-only()` y `sr-only-focusable()` a `visually-hidden()` y `visually-hidden-focusable()`.

- `bootstrap-utilities.css` ahora también incluye nuestros ayudantes. Ya no es necesario importar ayudantes en compilaciones personalizadas.

## JavaScript

- **Se eliminó la dependencia de jQuery** y se reescribieron los complementos para que estén en JavaScript normal.

- <span class="badge bg-danger">Breaking</span> Los atributos de datos para todos los complementos de JavaScript ahora tienen un espacio de nombres para ayudar a distinguir la funcionalidad de Bootstrap de terceros y de su propio código. Por ejemplo, usamos `data-bs-toggle` en lugar de `data-toggle`.

- **Todos los complementos ahora pueden aceptar un selector CSS como primer argumento.** Puede pasar un elemento DOM o cualquier selector CSS válido para crear una nueva instancia del complemento:

  ```js
  var modal = new bootstrap.Modal('#myModal')
  var dropdown = new bootstrap.Dropdown('[data-bs-toggle="dropdown"]')
  ```

- `popperConfig` se puede pasar como una función que acepta la configuración predeterminada de Popper de Bootstrap como argumento, para que pueda fusionar esta configuración predeterminada a su manera. **Se aplica a los menús desplegables, popovers y tooltips.**

- El valor predeterminado para `fallbackPlacements` se cambia a `['top', 'right', 'bottom', 'left']` para una mejor ubicación de los elementos Popper. **Se aplica a los menús desplegables, popovers y tooltips.**

- Se eliminó el guión bajo de los métodos estáticos públicos como `_getInstance()` → `getInstance()`.