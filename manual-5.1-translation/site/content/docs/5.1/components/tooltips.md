---
layout: docs
title: Tooltips
description: Documentación y ejemplos para agregar tooltips de Bootstrap personalizados con CSS y JavaScript usando CSS3 para animaciones y data-bs-attributes para el almacenamiento local de títulos.
group: components
toc: true
---

## Descripción general

Cosas que debes saber al usar el complemento de tooltip:

- Los tooltips se basan en la biblioteca de terceros [Popper](https://popper.js.org/) para el posicionamiento. Debes incluir [popper.min.js]({{< param "cdn.popper" >}}) antes de bootstrap.js o usar `bootstrap.bundle.min.js` / `bootstrap.bundle.js` que contiene Popper para que los tooltips funcionen!
- Los tooltips no están habilitados por motivos de rendimiento, por lo que **debes inicializarlos tú mismo**.
- Los tooltips con títulos de longitud cero nunca se muestran.
- Especifica `container: 'body'` para evitar problemas de representación en componentes más complejos (como nuestros input groups, button groups, etc.).
- La activación de tooltips en elementos ocultos no funcionará.
- Los tooltips para los elementos `.disabled` o `disabled` deben activarse en un elemento contenedor.
- Cuando se activa desde hipervínculos que abarcan varias líneas, el tooltip se centrará. Usa `white-space: nowrap;` en tus `<a>`s para evitar este comportamiento.
- Los tooltips deben ocultarse antes de que sus elementos correspondientes se eliminen del DOM.
- Los tooltips se puede activar gracias a un elemento dentro del shadow DOM.

{{< callout info >}}
{{< partial "callout-info-sanitizer.md" >}}
{{< /callout >}}

{{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}}

¿Lo tienes? Genial, veamos cómo funcionan con algunos ejemplos.

## Ejemplo: habilita los tooltips en todas partes

Una forma de inicializar todos los tooltips en una página sería seleccionarlos por su atributo `data-bs-toggle`:

```js
var tooltipTriggerList = Array.prototype.slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
```

## Ejemplos

Pasa el cursor sobre los enlaces a continuación para ver sus tooltips:

<div class="bd-example tooltip-demo">
  <p class="muted">Texto placeholder para demostrar algunos <a href="#" data-bs-toggle="tooltip" title="Tooltip predeterminada">enlaces en línea</a> con tooltips. Esto ahora es solo un relleno. Contenido colocado aquí solo para imitar la presencia de <a href="#" data-bs-toggle="tooltip" title="Otro tooltip">texto real</a>. Y todo eso solo para darte una idea de cómo se vería el tooltip cuando se usa en situaciones del mundo real. Espero que ahora hayas visto cómo <a href="#" data-bs-toggle="tooltip" title="Otro aquí también">este tooltip en los enlaces</a> puede funcionar en la práctica, una vez que los uses en <a href="#" data-bs-toggle="tooltip" title="¡El último consejo!">tu propio</a> sitio web o proyecto.
  </p>
</div>

Pasa el cursor sobre los botones a continuación para ver las cuatro direcciones de tooltips: top, right, bottom, y left. Las direcciones se reflejan cuando se usa Bootstrap en RTL.

<div class="bd-example tooltip-demo">
  <div class="bd-example-tooltips">
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip superior">Tooltip superior</button>
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip derecho">Tooltip derecho</button>
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip inferior">Tooltip inferior</button>
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip izquierdo">Tooltip izquierdo</button>
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-html="true" title="<em>Tooltip</em> <u>con</u> <b>HTML</b>">Tooltip con HTML</button>
  </div>
</div>

```html
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip superior">
  Tooltip superior
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip derecho">
  Tooltip derecho
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip inferior">
  Tooltip inferior
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip izquierdo">
  Tooltip izquierdo
</button>
```

Y con HTML personalizado:

```html
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-html="true" title="<em>Tooltip</em> <u>con</u> <b>HTML</b>">
  Tooltip con HTML
</button>
```

Con un SVG:

<div class="bd-example tooltip-demo">
  <a href="#" class="d-inline-block" data-bs-toggle="tooltip" title="Tooltip por defecto">
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
      <rect width="100%" height="100%" fill="#563d7c"/>
      <circle cx="50" cy="50" r="30" fill="#007bff"/>
    </svg>
  </a>
</div>

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

## Sass

### Variables

{{< scss-docs name="tooltip-variables" file="scss/_variables.scss" >}}

## Uso

El complemento de tooltip genera contenido y marcado a pedido y, de forma predeterminada, coloca tooltips después de tu elemento desencadenante.

Activa el tooltip a través de JavaScript:

```js
var exampleEl = document.getElementById('example')
var tooltip = new bootstrap.Tooltip(exampleEl, options)
```

{{< callout warning >}}
##### Desbordamiento `auto` y `scroll`

La posición del tooltip intenta cambiar automáticamente cuando un **contenedor padre** tiene `overflow: auto` o `overflow: scroll` como nuestro `.table-responsive`, pero aún mantiene el posicionamiento de la ubicación original. Para resolver esto, establece la [opción `boundary`](https://popper.js.org/docs/v2/modifiers/flip/#boundary) (para el modificador flip usando la opción `popperConfig`) a cualquier HTMLElement para sobrescribir el valor predeterminado, `'clippingParents'`, como `document.body`:

```js
var exampleEl = document.getElementById('example')
var tooltip = new bootstrap.Tooltip(exampleEl, {
  boundary: document.body // o document.querySelector('#boundary')
})
```
{{< /callout >}}

### Marcado

El marcado requerido para un tooltip es solo un atributo `data` y un `title` en el elemento HTML que deseas tener un tooltip. El marcado generado de un tooltip es bastante simple, aunque requiere una posición (de forma predeterminada, establecida en `top` por el complemento).

{{< callout warning >}}
##### Hacer que el tooltip funcione para los usuarios de teclados y tecnología de asistencia

Solo debes agregar el tooltip a los elementos HTML que tradicionalmente se pueden enfocar con el teclado y son interactivos (como enlaces o controles de formulario). Aunque los elementos HTML arbitrarios (como `<span>`s) se pueden enfocar agregando el atributo `tabindex="0"`, esto agregará tabulaciones potencialmente molestas y confusas en elementos no interactivos para usuarios de teclado, y actualmente la mayoría de las tecnologías de asistencia no anuncian el tooltip en esta situación. Además, no confíes únicamente en `hover` como el disparador de tu tooltip, ya que esto hará que tu tooltip sea imposible de activar para los usuarios del teclado.
{{< /callout >}}

```html
<!-- HTML a escribir -->
<a href="#" data-bs-toggle="tooltip" title="Algo de texto tooltip!">Pasa el puntero de mouse aquí</a>

<!-- Marcado generado por el complemento -->
<div class="tooltip bs-tooltip-top" role="tooltip">
  <div class="tooltip-arrow"></div>
  <div class="tooltip-inner">
    Algo de texto tooltip!
  </div>
</div>
```

### Elementos deshabilitados

Los elementos con el atributo `disabled` no son interactivos, lo que significa que los usuarios no pueden enfocarlos, desplazarlos o hacer clic en ellos para activar un tooltip (o un popover). Como solución alternativa, querrás activar el tooltip desde un contenedor `<div>` o `<span>`, idealmente enfocable desde el teclado usando `tabindex="0"`.

<div class="tooltip-demo">
{{< example >}}
<span class="d-inline-block" tabindex="0" data-bs-toggle="tooltip" title="Tooltip deshabilitado">
  <button class="btn btn-primary" type="button" disabled>Botón deshabilitado</button>
</span>
{{< /example >}}
</div>

{{< callout info >}}
{{< partial "maybe-interested-2.md" >}}
{{< /callout >}}

### Opciones

Las opciones se pueden pasar a través de atributos de datos o JavaScript. Para los atributos de datos, agrega el nombre de la opción a `data-bs-`, como en `data-bs-animation=""`. Asegúrate de cambiar el tipo de caso del nombre de la opción de camelCase a kebab-case al pasar las opciones a través de atributos de datos. Por ejemplo, en lugar de usar `data-bs-customClass="beautifier"`, usa `data-bs-custom-class="beautifier"`.

{{< callout warning >}}
Ten en cuenta que, por razones de seguridad, las opciones `sanitize`, `sanitizeFn` y `allowList` no se pueden proporcionar mediante atributos de datos.
{{< /callout >}}

<table class="table">
  <thead>
    <tr>
      <th style="width: 100px;">Nombre</th>
      <th style="width: 100px;">Tipo</th>
      <th style="width: 50px;">Por defecto</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>animation</code></td>
      <td>boolean</td>
      <td><code>true</code></td>
      <td>Aplicar una transición de fundido CSS al tooltip</td>
    </tr>
    <tr>
      <td><code>container</code></td>
      <td>string | element | false</td>
      <td><code>false</code></td>
      <td>
        <p>Agrega el tooltip a un elemento específico. Ejemplo: <code>container: 'body'</code>. Esta opción es particularmente útil porque te permite colocar el tooltip en el flujo del documento cerca del elemento de activación, lo que evitará que el tooltip se aleje del elemento de activación durante el cambio de tamaño de la ventana.</p>
      </td>
    </tr>
    <tr>
      <td><code>delay</code></td>
      <td>number | object</td>
      <td><code>0</code></td>
      <td>
        <p>Retraso en mostrar y ocultar el tooltip (ms): no se aplica al tipo de activación manual</p>
        <p>Si se proporciona un número, se aplica un retraso tanto para ocultar como para mostrar</p>
        <p>La estructura del objeto es: <code>delay: { "show": 500, "hide": 100 }</code></p>
      </td>
    </tr>
    <tr>
      <td><code>html</code></td>
      <td>boolean</td>
      <td><code>false</code></td>
      <td>
        <p>Permitir HTML en el tooltip.</p>
        <p>Si es true, las etiquetas HTML en el <code>title</code> del tooltip se renderizarán en el tooltip. Si es false, la propiedad <code>innerText</code> se usará para insertar contenido en el DOM.</p>
        <p>Usa texto si te preocupan los ataques XSS.</p>
      </td>
    </tr>
    <tr>
      <td><code>placement</code></td>
      <td>string | function</td>
      <td><code>'top'</code></td>
      <td>
        <p>Cómo colocar el tooltip - auto | top | bottom | left | right.<br>Cuando se especifica <code>auto</code>, reorientará dinámicamente el tooltip.</p>
        <p>Cuando se usa una función para determinar la ubicación, se llama con el nodo DOM del tooltip como primer argumento y el nodo DOM del elemento desencadenante como segundo. El contexto <code>this</code> se establece en la instancia del tooltip.</p>
      </td>
    </tr>
    <tr>
      <td><code>selector</code></td>
      <td>string | false</td>
      <td><code>false</code></td>
      <td>Si se proporciona un selector, los objetos de tooltips se delegarán a los objetivos especificados. En la práctica, esto también se usa para aplicar tooltips a elementos DOM agregados dinámicamente (compatible con <code>jQuery.on</code>). Consulta <a href="{{< param repo >}}/issues/4215">this</a> y <a href="https://codepen.io/team/bootstrap/pen/zYBXGwX?editors=1010">un ejemplo informativo</a>.</td>
    </tr>
    <tr>
      <td><code>template</code></td>
      <td>string</td>
      <td><code>'&lt;div class="tooltip" role="tooltip"&gt;&lt;div class="tooltip-arrow"&gt;&lt;/div&gt;&lt;div class="tooltip-inner"&gt;&lt;/div&gt;&lt;/div&gt;'</code></td>
      <td>
        <p>HTML base para usar al crear el tooltip.</p>
        <p>El <code>title</code> del tooltip se insertará en <code>.tooltip-inner</code>.</p>
        <p><code>.tooltip-arrow</code> se convertirá en la flecha del tooltip.</p>
        <p>El elemento envolvente más externo debe tener la clase <code>.tooltip</code> y <code>role="tooltip"</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>title</code></td>
      <td>string | element | function</td>
      <td><code>''</code></td>
      <td>
        <p>Valor de título predeterminado si el atributo <code>title</code> no está presente.</p>
        <p>Si se proporciona una función, se llamará con su referencia <code>this</code> establecida en el elemento al que se adjunta el tooltip.</p>
      </td>
    </tr>
    <tr>
      <td><code>trigger</code></td>
      <td>string</td>
      <td><code>'hover focus'</code></td>
      <td>
        <p>Cómo se activa el tooltip: click | hover | focus | manual. Puedes pasar varios disparadores; sepáralas con un espacio.</p>
        <p><code>'manual'</code> indica que el tooltip se activará mediante programación a través de los métodos <code>.show()</code>, <code>.hide()</code> y <code>.toggle()</code>; este valor no se puede combinar con ningún otro disparador.</p>
        <p><code>'hover'</code> por sí solo, dará como resultado un tooltip que no se puede activar a través del teclado, y solo debe usarse si existen métodos alternativos para transmitir la misma información a los usuarios del teclado.</p >
      </td>
    </tr>
    <tr>
      <td><code>fallbackPlacements</code></td>
      <td>array</td>
      <td><code>['top', 'right', 'bottom', 'left']</code></td>
      <td>Define las ubicaciones de respaldo proporcionando una lista de ubicaciones en un array (en orden de preferencia). Para obtener más información, consulta <a href="https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements">documentos de comportamiento</a> de Popper</td>
    </tr>
    <tr>
      <td><code>boundary</code></td>
      <td>string | element</td>
      <td><code>'clippingParents'</code></td>
      <td>Límite de restricción de desbordamiento del tooltip (se aplica solo al modificador preventOverflow de Popper). De forma predeterminada, es <code>'clippingParents'</code> y puede aceptar una referencia HTMLElement (solo a través de JavaScript). Para obtener más información, consulta los <a href="https://popper.js.org/docs/v2/utils/detect-overflow/#boundary">detectOverflow docs</a> de Popper.</td>
    </tr>
    <tr>
      <td><code>customClass</code></td>
      <td>string | function</td>
      <td><code>''</code></td>
      <td>
        <p>Agrega clases al tooltip cuando se muestre. Ten en cuenta que estas clases se agregarán además de las clases especificadas en el template. Para agregar varias clases, sepáralas con espacios: <code>'class-1 class-2'</code>.</p>
        <p>También puedes pasar una función que debería devolver una sola cadena que contenga nombres de clases adicionales.</p>
      </td>
    </tr>
    <tr>
      <td><code>sanitize</code></td>
      <td>boolean</td>
      <td><code>true</code></td>
      <td>Habilita o deshabilita la desinfección. Si está activado, las opciones <code>'template'</code> y <code>'title'</code> se desinfectarán. Consulta la <a href="{{< docsref "/getting-started/javascript#sanitizer" >}}">sección de desinfección en nuestra documentación de JavaScript</a>.</td>
    </tr>
    <tr>
      <td><code>allowList</code></td>
      <td>object</td>
      <td><a href="{{< docsref "/getting-started/javascript#sanitizer" >}}">Default value</a></td>
      <td>Objeto que contiene atributos y etiquetas permitidas</td>
    </tr>
    <tr>
      <td><code>sanitizeFn</code></td>
      <td>null | function</td>
      <td><code>null</code></td>
      <td>Aquí puedes proporcionar tu propia función de desinfección. Esto puede ser útil si prefieres usar una biblioteca dedicada para realizar la desinfección.</td>
    </tr>
    <tr>
      <td><code>offset</code></td>
      <td>array | string | function</td>
      <td><code>[0, 0]</code></td>
      <td>
        <p>Desplazamiento del tooltip en relación con su destino. Puedes pasar una cadena en atributos de datos con valores separados por comas como: <code>data-bs-offset="10,20"</code></p>
        <p>Cuando se usa una función para determinar el desplazamiento, se llama con un objeto que contiene la ubicación del popper, la referencia y los rects del popper como su primer argumento. El nodo DOM del elemento desencadenante se pasa como segundo argumento. La función debe devolver un array con dos números: <code>[<a href="https://popper.js.org/docs/v2/modifiers/offset/#skidding-1">skidding</a>, <a href="https://popper.js.org/docs/v2/modifiers/offset/#distance-1">distance</a>]</code>.</p>
        <p>Para obtener más información, consulta los <a href="https://popper.js.org/docs/v2/modifiers/offset/#options">documentos de compensación</a> de Popper.</p>
      </td>
    </tr>
    <tr>
      <td><code>popperConfig</code></td>
      <td>null | object | function</td>
      <td><code>null</code></td>
      <td>
        <p>Para cambiar la configuración predeterminada de Popper de Bootstrap, consulta <a href="https://popper.js.org/docs/v2/constructors/#options">Configuración de Popper</a>.</p>
        <p>Cuando se usa una función para crear la configuración Popper, se llama con un objeto que contiene la configuración Popper predeterminada de Bootstrap. Te ayuda a usar y fusionar el valor predeterminado con tu propia configuración. La función debe devolver un objeto de configuración para Popper.</p>
      </td>
    </tr>
  </tbody>
</table>

{{< callout info >}}
#### Atributos de datos para tooltips individuales

Las opciones para tooltips individuales se pueden especificar alternativamente mediante el uso de atributos de datos, como se explicó anteriormente.
{{< /callout >}}

#### Uso de la función con `popperConfig`

```js
var tooltip = new bootstrap.Tooltip(element, {
  popperConfig: function (defaultBsPopperConfig) {
    // var newPopperConfig = {...}
    // usa defaultBsPopperConfig si es necesario...
    // return newPopperConfig
  }
})
```

### Métodos

{{< callout danger >}}
{{< partial "callout-danger-async-methods.md" >}}
{{< /callout >}}

#### show

Revela el tooltip de un elemento. **Regresa al punto de la llamada antes de que se haya mostrado realmente la tooltip** (es decir, antes de que ocurra el evento `shown.bs.tooltip`). Esto se considera una activación "manual" del tooltip. El tooltip con títulos de longitud cero nunca se muestra.

```js
tooltip.show()
```

#### hide

Oculta el tooltip de un elemento. **Regresa al punto de la llamada antes de que la tooltip se haya ocultado** (es decir, antes de que ocurra el evento `hidden.bs.tooltip`). Esto se considera una activación "manual" del tooltip.

```js
tooltip.hide()
```

#### toggle

Alterna el tooltip de un elemento. **Regresa al punto de la llamada antes de que la tooltip se haya mostrado u ocultado** (es decir, antes de que ocurra el evento `shown.bs.tooltip` o `hidden.bs.tooltip`). Esto se considera una activación "manual" del tooltip.

```js
tooltip.toggle()
```

#### dispose

Oculta y destruye el tooltip de un elemento (elimina los datos almacenados en el elemento DOM). El tooltip que utiliza la delegación (que se crea mediante [la opción `selector`](#options)) no se puede destruir individualmente en los elementos desencadenantes descendientes.

```js
tooltip.dispose()
```

#### enable

Le da al tooltip de un elemento la capacidad de mostrarse. **El tooltip está habilitada de forma predeterminada.**

```js
tooltip.enable()
```

#### disable

Elimina la capacidad de mostrar el tooltip de un elemento. El tooltip solo se podrá mostrar si se vuelve a habilitar.

```js
tooltip.disable()
```

#### setContent

Brinda una forma de cambiar el contenido del tooltip después de su inicialización.

```js
tooltip.setContent({ '.tooltip-inner': 'another title' })
```
{{< callout info >}}
El método `setContent` acepta un argumento `object`, donde cada clave de propiedad es un selector de `string` válido dentro de la plantilla emergente, y cada valor de propiedad relacionado puede ser `string` | `element` | `function` | `null`
{{< /callout >}}

#### toggleEnabled

Alterna la capacidad de mostrar u ocultar el tooltip de un elemento.

```js
tooltip.toggleEnabled()
```

#### update

Actualiza la posición del tooltip de un elemento.

```js
tooltip.update()
```

#### getInstance

Método *estático* que te permite obtener la instancia del tooltip asociado con un elemento DOM

```js
var exampleTriggerEl = document.getElementById('example')
var tooltip = bootstrap.Tooltip.getInstance(exampleTriggerEl) // Devuelve una instancia del tooltip de Bootstrap
```

#### getOrCreateInstance

Método *estático* que te permite obtener la instancia de tooltip asociado con un elemento DOM, o crear uno nuevo en caso de que no se haya inicializado

```js
var exampleTriggerEl = document.getElementById('example')
var tooltip = bootstrap.Tooltip.getOrCreateInstance(exampleTriggerEl) // Devuelve una instancia del tooltip de Bootstrap
```

{{< callout info >}}
{{< partial "maybe-interested-3.md" >}}
{{< /callout >}}

### Eventos

<table class="table">
  <thead>
    <tr>
      <th style="width: 150px;">Tipo de evento</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>show.bs.tooltip</code></td>
      <td>Este evento se activa inmediatamente cuando se llama al método de instancia <code>show</code>.</td>
    </tr>
    <tr>
      <td><code>shown.bs.tooltip</code></td>
      <td>Este evento se activa cuando el tooltip se hace visible para el usuario (esperará a que se completen las transiciones CSS).</td>
    </tr>
    <tr>
      <td><code>hide.bs.tooltip</code></td>
      <td>Este evento se activa inmediatamente cuando se llama al método de instancia <code>hide</code>.</td>
    </tr>
    <tr>
      <td><code>hidden.bs.tooltip</code></td>
      <td>Este evento se activa cuando el tooltip ha terminado de ocultarse para el usuario (esperará a que se completen las transiciones CSS).</td>
    </tr>
    <tr>
      <td><code>inserted.bs.tooltip</code></td>
      <td>Este evento se activa después del evento <code>show.bs.tooltip</code> cuando el template de tooltip se ha agregado al DOM.</td>
    </tr>
  </tbody>
</table>

```js
var myTooltipEl = document.getElementById('myTooltip')
var tooltip = new bootstrap.Tooltip(myTooltipEl)

myTooltipEl.addEventListener('hidden.bs.tooltip', function () {
  // hacer algo...
})

tooltip.hide()
```
