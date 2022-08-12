---
layout: docs
title: JavaScript
description: Dale vida a Bootstrap con nuestros complementos de JavaScript opcionales. Obtén información sobre cada complemento, nuestras opciones de API programáticas y de datos, y más.
group: getting-started
toc: true
---

## Individual o compilado

Los complementos se pueden incluir individualmente (usando `js/dist/*.js`), o todos a la vez usando `bootstrap.js` o `bootstrap.min.js` minimizado (no incluyas ambos).

Si usas un paquete (Webpack, Parcel, Vite...), puedes usar los archivos `/js/dist/*.js` que están preparados para UMD.

## Uso con frameworks de JavaScript

Si bien Bootstrap CSS se puede usar con cualquier framework, **Bootstrap JavaScript no es totalmente compatible con frameworks de JavaScript como React, Vue y Angular** que asumen un conocimiento completo del DOM. Tanto Bootstrap como el framework pueden intentar mutar el mismo elemento DOM, lo que genera errores como menús desplegables que se atascan en la posición "abierta".

Una mejor alternativa para aquellos que usan este tipo de frameworks es usar un paquete específico del framework **en lugar de** el JavaScript de Bootstrap. Estas son algunas de las opciones más populares:

- React: [React Bootstrap](https://react-bootstrap.github.io/)
- Vue: [BootstrapVue](https://bootstrap-vue.org/) (actualmente solo es compatible con Vue 2 y Bootstrap 4)
- Angular: [ng-bootstrap](https://ng-bootstrap.github.io/)

## Usar Bootstrap como módulo

{{< callout >}}
**¡Pruébalo tú mismo!** Descarga el código fuente y la demostración de trabajo para usar Bootstrap como un módulo ES del [repositorio twbs/examples](https://github.com/twbs/examples/tree/main/sass-js-esm). También puedes [abrir el ejemplo en StackBlitz](https://stackblitz.com/github/twbs/examples/tree/main/sass-js-esm?file=index.html).
{{< /callout >}}

Proporcionamos una versión de Bootstrap creada como `ESM` (`bootstrap.esm.js` y `bootstrap.esm.min.js`) que te permite usar Bootstrap como un módulo en el navegador, si tus [navegadores específicos lo admiten](https://caniuse.com/es6-module).

```html
<script type="module">
  import { Toast } from 'bootstrap.esm.min.js'

  Array.from(document.querySelectorAll('.toast'))
    .forEach(toastNode => new Toast(toastNode))
</script>
```

En comparación con los paquetes de JS, el uso de ESM en el navegador requiere que uses la ruta completa y el nombre de archivo en lugar del nombre del módulo. [Lee más sobre los módulos JS en el navegador.](https://v8.dev/features/modules#specifiers) Es por eso que usamos `'bootstrap.esm.min.js'` en lugar de `'bootstrap'` anterior. Sin embargo, esto se complica aún más por nuestra dependencia de Popper, que importa Popper a nuestro JavaScript de la siguiente manera:

<!-- eslint-skip -->
```js
import * as Popper from "@popperjs/core"
```

Si intentas esto tal como está, verás un error en la consola como el siguiente:

```text
Uncaught TypeError: Failed to resolve module specifier "@popperjs/core". Relative references must start with either "/", "./", or "../".
```

Para solucionar esto, puedeS usar un `importmap` para resolver los nombres de módulos arbitrarios para completar las rutas. Si tus [navegadores de destino](https://caniuse.com/?search=importmap) no son compatibles con `importmap`, deberás usar [es-module-shims]([https://github.com/ proyecto guybedford/es-module-shims](https://github.com/guybedford/es-module-shims). Así es como funciona para Bootstrap y Popper:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="{{< param "cdn.css" >}}" rel="stylesheet" integrity="{{< param "cdn.css_hash" >}}" crossorigin="anonymous">
    <title>¡Hola, modularidad!</title>
  </head>
  <body>
    <h1>¡Hola, modularidad!</h1>
    <button id="popoverButton" type="button" class="btn btn-primary btn-lg" class="btn btn-lg btn-danger" data-bs-toggle="popover" title="ESM in Browser" data-bs-content="Bang!">Custom popover</button>

    <script async src="https://cdn.jsdelivr.net/npm/es-module-shims@1/dist/es-module-shims.min.js" crossorigin="anonymous"></script>
    <script type="importmap">
    {
      "imports": {
        "@popperjs/core": "{{< param "cdn.popper" >}}",
        "bootstrap": "https://cdn.jsdelivr.net/npm/bootstrap@{{< param "current_version" >}}/dist/js/bootstrap.esm.min.js"
      }
    }
    </script>
    <script type="module">
      import * as bootstrap from 'bootstrap'

      new bootstrap.Popover(document.getElementById('popoverButton'))
    </script>
  </body>
</html>
```

## Dependencias

Algunos complementos y componentes CSS dependen de otros complementos. Si incluyes plugins individualmente, asegúrate de comprobar si existen estas dependencias en los documentos.

Nuestros dropdowns, popovers y tooltips también dependen de [Popper](https://popper.js.org/).

## Atributos de datos

Casi todos los complementos de Bootstrap se pueden habilitar y configurar solo a través de HTML con atributos de datos (nuestra forma preferida de usar la funcionalidad de JavaScript). Asegúrate de **solo usar un conjunto de atributos de datos en un solo elemento** (por ejemplo, no puedes activar un tooltip y un modal desde el mismo botón).

{{< markdown >}}
{{< partial "js-data-attributes.md" >}}
{{< /markdown >}}

## Selectores

Usamos los métodos nativos `querySelector` y `querySelectorAll` para consultar elementos DOM por motivos de rendimiento, por lo que debes usar [selectores válidos](https://www.w3.org/TR/CSS21/syndata.html#value-def-identifier). Si usas selectores especiales como `collapse:Example`, asegúrate de escaparlos.

## Eventos

Bootstrap proporciona eventos personalizados para la mayoría de las acciones únicas de los complementos. En general, estos vienen en forma de infinitivo y participio pasado, donde el infinitivo (p. ej., `show`) se activa al comienzo de un evento, y su forma de participio pasado (p. ej., `shown`) se activa al finalizar un evento.

Todos los eventos en infinitivo proporcionan la funcionalidad [`preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault). Esto proporciona la capacidad de detener la ejecución de una acción antes de que comience. Devolver falso desde un controlador de eventos también llamará automáticamente a `preventDefault()`.

```js
const myModal = document.querySelector('#myModal')

myModal.addEventListener('show.bs.modal', event => {
  if (!data) {
    return event.preventDefault() // evita que se muestre el modal
  }
})
```

## API programática

Todos los constructores aceptan un objeto de opciones opcionales o nada (que inicia un complemento con su comportamiento predeterminado):

```js
const myModalEl = document.querySelector('#myModal')

const modal = new bootstrap.Modal(myModalEl) // inicializado con valores predeterminados

const configObject = { keyboard: false }
const modal1 = new bootstrap.Modal(myModalEl, configObject) // inicializado sin teclado
```

Si deseas obtener una instancia de complemento en particular, cada complemento expone un método `getInstance`. Por ejemplo, para recuperar una instancia directamente de un elemento:

```js
bootstrap.Popover.getInstance(myPopoverEl)
```

Este método devolverá `null` si no se inicia una instancia sobre el elemento solicitado.

Alternativamente, se puede usar `getOrCreateInstance` para obtener la instancia asociada con un elemento DOM, o crear una nueva en caso de que no se haya inicializado.

```js
bootstrap.Popover.getOrCreateInstance(myPopoverEl, configObject)
```

En caso de que una instancia no se haya inicializado, puedes aceptar y usar un objeto de configuración opcional como segundo argumento.

### Selectores CSS en constructores

Además de los métodos `getInstance` y `getOrCreateInstance`, todos los constructores de complementos pueden aceptar un elemento DOM o un [selector CSS](#selectores) válido como primer argumento. Los elementos del complemento se encuentran con el método `querySelector` ya que nuestros complementos solo admiten un único elemento.

```js
const modal = new bootstrap.Modal('#myModal')
const dropdown = new bootstrap.Dropdown('[data-bs-toggle="dropdown"]')
const offcanvas = bootstrap.Offcanvas.getInstance('#myOffcanvas')
const alert = bootstrap.Alert.getOrCreateInstance('#myAlert')
```

### Funciones asíncronas y transiciones

Todos los métodos programáticos de la API son **asíncronos** y regresan al punto de la llamada una vez que se inicia la transición, pero **antes de que finalice**. Para ejecutar una acción una vez completada la transición, puedes escuchar el evento correspondiente.

```js
const myCollapseEl = document.querySelector('#myCollapse')

myCollapseEl.addEventListener('shown.bs.collapse', event => {
  // Acción a ejecutar una vez que se expande el área colapsable
})
```

Además, se ignorará una llamada de método en un **componente en transición**.

```js
const myCarouselEl = document.querySelector('#myCarousel')
const carousel = bootstrap.Carousel.getInstance(myCarouselEl) // Devuelve una instancia Carousel

myCarouselEl.addEventListener('slid.bs.carousel', event => {
  carousel.to('2') // Se deslizará a la diapositiva 2 tan pronto como finalice la transición a la diapositiva 1
})

carousel.to('1') // Comenzará a deslizarse a la diapositiva 1 y volverá al punto de la llamada
carousel.to('2') // !! Se ignorará, ya que la transición a la diapositiva 1 no ha finalizado. !!
```

#### Método `dispose`

Si bien puede parecer correcto usar el método `dispose` inmediatamente después de `hide()`, conducirá a resultados incorrectos. He aquí un ejemplo del problema de uso:

```js
const myModal = document.querySelector('#myModal')
myModal.hide() // esto es asincrónico

myModal.addEventListener('shown.bs.hidden', event => {
  myModal.dispose()
})
```

### Configuración por defecto

Puedes cambiar la configuración predeterminada de un complemento modificando el objeto `Constructor.Default` del complemento:

```js
// cambia el valor predeterminado de la opción `keyboard` del complemento modal a false
bootstrap.Modal.Default.keyboard = false
```

## Métodos y propiedades

Cada complemento de Bootstrap expone los siguientes métodos y propiedades estáticas.

{{< bs-table "table" >}}
| Method | Description |
| --- | --- |
| `dispose` | Destruye el modal de un elemento. (Elimina los datos almacenados en el elemento DOM) |
| `getInstance` | Método *estático* que te permite obtener la instancia modal asociada con un elemento DOM. |
| `getOrCreateInstance` | Método *estático* que te permite obtener la instancia modal asociada con un elemento DOM, o crear una nueva en caso de que no lo fuera inicializada. |
{{< /bs-table >}}

{{< bs-table "table" >}}
| Static property | Description |
| --- | --- |
| `NAME`  | Devuelve el nombre del complemento. (Ejemplo: `bootstrap.Tooltip.NAME`) |
| `VERSION`  | Se puede acceder a la versión de cada uno de los complementos de Bootstrap a través de la propiedad `VERSION` del constructor del complemento (Ejemplo: `bootstrap.Tooltip.VERSION`) |
{{< /bs-table >}}

## Sanitizer

Tooltips y popovers utilizan nuestro desinfectante incorporado para desinfectar las opciones que aceptan HTML.

El valor predeterminado de `allowList` es el siguiente:

```js
const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i
const DefaultAllowlist = {
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
const myDefaultAllowList = bootstrap.Tooltip.Default.allowList

// Para permitir elementos de la tabla
myDefaultAllowList.table = []

// Para permitir elementos td y atributos data-bs-option en elementos td
myDefaultAllowList.td = ['data-bs-option']

// Puedes enviar tu expresión regular personalizada para validar sus atributos.
// Ten cuidado de que tus expresiones regulares sean demasiado laxas
const myCustomRegex = /^data-my-app-[\w-]+/
myDefaultAllowList['*'].push(myCustomRegex)
```

Si deseas omitir nuestro desinfectante porque prefieres usar una biblioteca dedicada, por ejemplo [DOMPurify](https://www.npmjs.com/package/dompurify), debes hacer lo siguiente:

```js
const yourTooltipEl = document.querySelector('#yourTooltip')
const tooltip = new bootstrap.Tooltip(yourTooltipEl, {
  sanitizeFn(content) {
    return DOMPurify.sanitize(content)
  }
})
```

## Opcionalmente uso de jQuery

**No necesitas jQuery en Bootstrap 5**, pero aún es posible usar nuestros componentes con jQuery. Si Bootstrap detecta `jQuery` en el objeto `window`, agregará todos nuestros componentes en el sistema de complementos de jQuery. Esto te permite hacer lo siguiente:

```js
$('[data-bs-toggle="tooltip"]').tooltip() // para habilitar tooltips, con la configuración predeterminada

$('[data-bs-toggle="tooltip"]').tooltip({ boundary: 'clippingParents', customClass: 'myClass' }) // para inicializar tooltips con la configuración dada

$('#myTooltip').tooltip('show') // para activar el método `show`
```

Lo mismo ocurre con nuestros otros componentes.

### Sin conflicto

A veces es necesario usar complementos de Bootstrap con otros frameworks de interfaz de usuario. En estas circunstancias, ocasionalmente pueden ocurrir colisiones de espacios de nombres. Si esto sucede, puedes llamar a `.noConflict` en el complemento cuyo valor deseas revertir.

```js
const bootstrapButton = $.fn.button.noConflict() // devuelve $.fn.button al valor previamente asignado
$.fn.bootstrapBtn = bootstrapButton // da a $().bootstrapBtn la funcionalidad Bootstrap
```

Bootstrap no admite oficialmente bibliotecas de JavaScript de terceros como Prototype o jQuery UI. A pesar de `.noConflict` y los eventos de espacio de nombres, puede haber problemas de compatibilidad que debas solucionar por tu cuenta.

### Eventos jQuery

Bootstrap detectará jQuery si `jQuery` está presente en el objeto `window` y no hay ningún atributo `data-bs-no-jquery` establecido en `<body>`. Si se encuentra jQuery, Bootstrap emitirá eventos gracias al sistema de eventos de jQuery. Entonces, si deseas escuchar los eventos de Bootstrap, deberás usar los métodos jQuery (`.on`, `.one`) en lugar de `addEventListener`.

```js
$('#myTab a').on('shown.bs.tab', () => {
  // hacer algo...
})
```

## JavaScript deshabilitado

Los complementos de Bootstrap no tienen un respaldo especial cuando JavaScript está deshabilitado. Si te importa la experiencia del usuario en este caso, usa [`<noscript>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript) para explicar la situación (y cómo volver a habilitar JavaScript) para tus usuarios y/o agrega tus propios recursos alternativos personalizados.
