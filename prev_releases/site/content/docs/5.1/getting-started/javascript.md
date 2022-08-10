---
layout: docs
title: JavaScript
description: Dale vida a Bootstrap con nuestros complementos de JavaScript opcionales. Obtén información sobre cada complemento, nuestras opciones de API programáticas y de datos, y más.
group: getting-started
toc: true
---

## Individual o compilado

Los complementos se pueden incluir individualmente (usando archivos `js/dist/*.js` individuales de Bootstrap), o todos a la vez usando `bootstrap.js` o `bootstrap.min.js` minimizado (no incluyas ambos).

Si usas un paquete (Webpack, Rollup...), puedes usar los archivos `/js/dist/*.js` que están preparados para UMD.

## Usando Bootstrap como un módulo

Proporcionamos una versión de Bootstrap creada como `ESM` (`bootstrap.esm.js` y `bootstrap.esm.min.js`) que te permite usar Bootstrap como un módulo en tu navegador, si tus [navegadores específicos lo admiten](https://caniuse.com/es6-module).

```html
<script type="module">
  import { Toast } from 'bootstrap.esm.min.js'

  Array.from(document.querySelectorAll('.toast'))
    .forEach(toastNode => new Toast(toastNode))
</script>
```

{{< callout warning >}}
## Plugins incompatibles

Debido a las limitaciones del navegador, algunos de nuestros complementos, a saber, los complementos Dropdown, Tooltip y Popover, no se pueden usar en una etiqueta `<script>` con el tipo `module` porque dependen de Popper. Para obtener más información sobre el problema, consulta [aquí](https://v8.dev/features/modules#specifiers).
{{< /callout >}}

## Dependencias

Algunos complementos y componentes CSS dependen de otros complementos. Si incluyes plugins individualmente, asegúrate de comprobar si existen estas dependencias en los documentos.

Nuestros menús desplegables (dropdowns), popovers y tooltips también dependen de [Popper](https://popper.js.org/).

## ¿Todavía quieres usar jQuery? ¡Es posible!

Bootstrap 5 está diseñado para usarse sin jQuery, pero aún es posible usar nuestros componentes con jQuery. **Si Bootstrap detecta `jQuery` en el objeto `window`** agregará todos nuestros componentes en el sistema de complementos de jQuery; esto significa que podrás hacer `$('[data-bs-toggle="tooltip"]').tooltip()` para habilitar tooltips. Lo mismo ocurre con nuestros otros componentes.

## Data attributes

Casi todos los complementos de Bootstrap se pueden habilitar y configurar solo a través de HTML con atributos de datos (nuestra forma preferida de usar la funcionalidad de JavaScript). Asegúrate de **solo usar un solo conjunto de atributos de datos (atributo data) en un elemento** (por ejemplo, no puedes activar un tooltip y un modal desde el mismo botón).

{{< callout warning >}}
## Selectores

Actualmente, para consultar elementos DOM, usamos los métodos nativos `querySelector` y `querySelectorAll` por razones de rendimiento, por lo que debes usar [selectores válidos](https://www.w3.org/TR/CSS21/syndata.html#value-def-identifier).
Si usas selectores especiales, por ejemplo: `collapse:Example`, asegúrate de escaparlos.
{{< /callout >}}

## Eventos

Bootstrap proporciona eventos personalizados para la mayoría de las acciones únicas de los plugins. Por lo general, estos vienen en forma de infinitivo y participio pasado, donde el infinitivo (p. ej., `show`) se activa al comienzo de un evento, y su forma de participio pasado (p. ej., `shown`) se activa al finalizar un evento.

Todos los eventos en infinitivo proporcionan la funcionalidad [`preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault). Esto proporciona la capacidad de detener la ejecución de una acción antes de que comience. Devolver `false` desde un controlador de eventos también llamará automáticamente a `preventDefault()`.

```js
var myModal = document.getElementById('myModal')

myModal.addEventListener('show.bs.modal', function (event) {
  if (!data) {
    return event.preventDefault() // evita que se muestre el modal
  }
})
```

{{< callout warning >}}
## Eventos jQuery

Bootstrap detectará jQuery si `jQuery` está presente en el objeto `window` y no hay ningún atributo `data-bs-no-jquery` establecido en `<body>`. Si se encuentra jQuery, Bootstrap emitirá eventos gracias al sistema de eventos de jQuery. Entonces, si deseas escuchar los eventos de Bootstrap, deberás usar los métodos jQuery (`.on`, `.one`) en lugar de `addEventListener`.

```js
$('#myTab a').on('shown.bs.tab', function () {
  // hacer algo...
})
```
{{< /callout >}}

## API programática

Todos los constructores aceptan un objeto de opciones opcionales o nada (lo cual inicia un complemento con su comportamiento predeterminado):

```js
var myModalEl = document.getElementById('myModal')

var modal = new bootstrap.Modal(myModalEl) // inicializado con valores predeterminados
var modal = new bootstrap.Modal(myModalEl, { keyboard: false }) // inicializado sin teclado
```

Si deseas obtener una instancia de complemento en particular, cada complemento expone un método `getInstance`. Para recuperarlo directamente de un elemento, haz lo siguiente: `bootstrap.Popover.getInstance(myPopoverEl)`.

### Selectores CSS en constructores

También puedes usar un selector CSS como primer argumento en lugar de un elemento DOM para inicializar el complemento. Actualmente, el elemento para el complemento se encuentra mediante el método `querySelector`, ya que nuestros complementos solo admiten un único elemento.

```js
var modal = new bootstrap.Modal('#myModal')
var dropdown = new bootstrap.Dropdown('[data-bs-toggle="dropdown"]')
```

### Funciones asíncronas y transiciones

Todos los métodos programáticos de la API son **asíncronos** y regresan al de la llamada una vez que se inicia la transición, pero **antes de que finalice**.

Para ejecutar una acción una vez completada la transición, puedes escuchar el evento correspondiente.

```js
var myCollapseEl = document.getElementById('myCollapse')

myCollapseEl.addEventListener('shown.bs.collapse', function (event) {
  // Acción a ejecutar una vez que se expande el área colapsable
})
```

Además, se ignorará una llamada de método en un **componente en transición**.

```js
var myCarouselEl = document.getElementById('myCarousel')
var carousel = bootstrap.Carousel.getInstance(myCarouselEl) // Obtiene una instancia de Carousel

myCarouselEl.addEventListener('slid.bs.carousel', function (event) {
  carousel.to('2') // Se deslizará a la diapositiva 2 tan pronto como finalice la transición a la diapositiva 1
})

carousel.to('1') // Comenzará a deslizarse a la diapositiva 1 y volverá al lugar de la llamada
carousel.to('2') // !! Se ignorará, ya que la transición a la diapositiva 1 no ha finalizado. !!
```

### Configuración por defecto

Puedes cambiar la configuración predeterminada de un complemento modificando el objeto `Constructor.Default` del complemento:

```js
// cambia el valor predeterminado para la opción `keyboard` del complemento modal a `false`
bootstrap.Modal.Default.keyboard = false
```

## Sin conflicto (solo si usas jQuery)

A veces es necesario usar complementos de Bootstrap con otros frameworks UI. En estas circunstancias, ocasionalmente pueden ocurrir colisiones de espacios de nombres. Si esto sucede, puedes llamar a `.noConflict` en el complemento cuyo valor deseas revertir.

```js
var bootstrapButton = $.fn.button.noConflict() // devolver $.fn.button al valor previamente asignado
$.fn.bootstrapBtn = bootstrapButton // dar $().bootstrapBtn la funcionalidad Bootstrap
```

## Números de versión

Se puede acceder a la versión de cada uno de los complementos de Bootstrap a través de la propiedad `VERSION` del constructor del complemento. Por ejemplo, para el complemento tooltip:

```js
bootstrap.Tooltip.VERSION // => "{{< param current_version >}}"
```

## No hay respaldos especiales cuando JavaScript está deshabilitado

Los complementos de Bootstrap no se recuperan de manera particularmente elegante cuando JavaScript está deshabilitado. Si te importa la experiencia del usuario en este caso, usa [`<noscript>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript) para explicar la situación (y cómo volver a habilitar JavaScript) a tus usuarios y/o agrega tus propios recursos alternativos personalizados.

{{< callout warning >}}
##### Bibliotecas de terceros

**Bootstrap no admite oficialmente bibliotecas de JavaScript de terceros** como Prototype o jQuery UI. A pesar de `.noConflict` y los eventos con espacio de nombres, puede haber problemas de compatibilidad que debas solucionar por su cuenta.
{{< /callout >}}

## Sanitizer

Tooltips y Popovers utilizan nuestro sanitizer (desinfectante) incorporado para desinfectar las opciones que aceptan HTML.

El valor predeterminado de `allowList` es el siguiente:

```js
var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i
var DefaultAllowlist = {
  // Atributos globales permitidos en cualquier elemento proporcionado a continuación.
  '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
  a: ['target', 'href', 'title', 'rel'],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
}
```

Si deseas agregar nuevos valores a esta `allowList` predeterminada, puedes hacer lo siguiente:

```js
var myDefaultAllowList = bootstrap.Tooltip.Default.allowList

// Para permitir elementos de tabla
myDefaultAllowList.table = []

// Para permitir elementos td y atributos data-bs-option en elementos td
myDefaultAllowList.td = ['data-bs-option']

// Puedes enviar su expresión regular personalizada para validar sus atributos.
// Ten cuidado con sus expresiones regulares que son demasiado laxas
var myCustomRegex = /^data-my-app-[\w-]+/
myDefaultAllowList['*'].push(myCustomRegex)
```

Si deseas omitir nuestro desinfectante porque prefieres usar una biblioteca dedicada, por ejemplo [DOMPurify](https://www.npmjs.com/package/dompurify), debes hacer lo siguiente:

```js
var yourTooltipEl = document.getElementById('yourTooltip')
var tooltip = new bootstrap.Tooltip(yourTooltipEl, {
  sanitizeFn: function (content) {
    return DOMPurify.sanitize(content)
  }
})
```
