---
layout: docs
title: Popovers
description: Documentación y ejemplos para agregar popovers de Bootstrap, como los que se encuentran en iOS, a cualquier elemento de tu sitio.
group: components
toc: true
---

## Descripción general

Cosas que debes saber al usar el complemento popover:

- Los popovers se basan en la biblioteca de terceros [Popper](https://popper.js.org/) para el posicionamiento. Debes incluir [popper.min.js]({{< param "cdn.popper" >}}) antes de bootstrap.js o usar `bootstrap.bundle.min.js` / `bootstrap.bundle.js` que contiene Popper para que los popovers funcionen!
- Los popovers requieren el [complemento tooltip]({{< docsref "/components/tooltips" >}}) como una dependencia.
- Los popovers son opcionales por motivos de rendimiento, por lo que **debes inicializarlos tú mismo**.
- Valores de longitud cero en `title` y `content` nunca mostrarán un popover.
- Especifica `container: 'body'` para evitar problemas de representación en componentes más complejos (como nuestros input groups, button groups, etc.).
- La activación de popovers en elementos ocultos no funcionará.
- Los popovers para los elementos `.disabled` o `disabled` deben activarse en un elemento padre contenedor.
- Cuando se activan desde enlaces que se envuelven en varias líneas, los popovers se centrarán entre el ancho total de los enlaces. Usa `.text-nowrap` en tus `<a>`s para evitar este comportamiento.
- Los popovers deben estar ocultos antes de que sus elementos correspondientes hayan sido eliminados del DOM.
- Los popovers se pueden activar gracias a un elemento dentro del shadow DOM.

{{< callout info >}}
{{< partial "callout-info-sanitizer.md" >}}
{{< /callout >}}

{{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}}

Sigue leyendo para ver cómo funcionan los popovers con algunos ejemplos.

## Ejemplo: habilitar popovers en todas partes

Una forma de inicializar todos los popovers en una página sería seleccionarlos por su atributo `data-bs-toggle`:

```js
var popoverTriggerList = Array.prototype.slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
```

## Ejemplo: Uso de la opción `container`

Cuando tienes algunos estilos en un elemento padre que interfieren con un popover, querrás especificar un `container` personalizado para que el HTML del popover aparezca dentro de ese elemento.

```js
var popover = new bootstrap.Popover(document.querySelector('.example-popover'), {
  container: 'body'
})
```

## Ejemplo

{{< example >}}
<button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Clic para alternar el popover</button>
{{< /example >}}

### Cuatro direcciones

Hay cuatro opciones disponibles: alineación superior, derecha, inferior e izquierda. Las direcciones se reflejan cuando se usa Bootstrap en RTL.

{{< example >}}
<button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">
  Popover superior
</button>
<button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Right popover">
  Popover derecho
</button>
<button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
  Popover inferior
</button>
<button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Left popover">
  Popover izquierdo
</button>
{{< /example >}}

### Descartar (cerrar) en el siguiente clic

Usa el disparador `focus` para descartar popovers en el siguiente clic del usuario en un elemento diferente al elemento de alternancia.

{{< callout danger >}}
#### Marcado específico requerido para descartar al siguiente clic

Para un comportamiento adecuado entre navegadores y plataformas, debes usar la etiqueta `<a>`, _no_ la etiqueta `<button>`, y también debes incluir un atributo [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex).
{{< /callout >}}

{{< example >}}
<a tabindex="0" class="btn btn-lg btn-danger" role="button" data-bs-toggle="popover" data-bs-trigger="focus" title="Dismissible popover" data-bs-content="And here's some amazing content. It's very engaging. Right?">Descartar popover</a>
{{< /example >}}

```js
var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
  trigger: 'focus'
})
```

### Elementos deshabilitados

Los elementos con el atributo `disabled` no son interactivos, lo que significa que los usuarios no pueden pasar el cursor por encima o hacer clic en ellos para activar un popover (o tooltip). Como solución alternativa, puedes activar el popover desde un contenedor `<div>` o `<span>`, idealmente enfocable desde el teclado usando `tabindex="0"`.

Para activadores de popovers deshabilitados, también puedes preferir `data-bs-trigger="hover focus"` para que el popover aparezca como una respuesta visual inmediata a tus usuarios, ya que es posible que no esperen hacer _clic_ en un elemento deshabilitado.

{{< example >}}
<span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Disabled popover">
  <button class="btn btn-primary" type="button" disabled>Botón deshabilitado</button>
</span>
{{< /example >}}

## Sass

### Variables

{{< scss-docs name="popover-variables" file="scss/_variables.scss" >}}

## Uso

Habilitar popovers a través de JavaScript:

```js
var exampleEl = document.getElementById('example')
var popover = new bootstrap.Popover(exampleEl, options)
```

{{< callout warning >}}
### Cómo hacer que los popovers funcionen para los usuarios de teclados y tecnología de asistencia

Para permitir que los usuarios del teclado activen sus ventanas emergentes, solo debes agregarlas a los elementos HTML que tradicionalmente se pueden enfocar con el teclado e interactivos (como enlaces o controles de formulario). Aunque los elementos HTML arbitrarios (como `<span>`s) se pueden enfocar agregando el atributo `tabindex="0"`, esto agregará tabulaciones potencialmente molestas y confusas en elementos no interactivos para usuarios de teclado, y actualmente la mayoría de las tecnologías de asistencia no anuncian el contenido del popover en esta situación. Además, no confíes únicamente en `hover` como disparador de tus popovers, ya que esto hará que sea imposible que los usuarios del teclado los activen.

Si bien puedes insertar HTML enriquecido y estructurado en popovers con la opción `html`, te recomendamos enfáticamente que evites agregar una cantidad excesiva de contenido. La forma en que funcionan actualmente los popovers es que, una vez que se muestran, su contenido está vinculado al elemento activador con el atributo `aria-describedby`. Como resultado, la totalidad del contenido de la ventana emergente se anunciará a los usuarios de tecnología de asistencia como una secuencia larga e ininterrumpida.

Además, si bien también es posible incluir controles interactivos (como elementos de formulario o enlaces) en tu ventana emergente (agregando estos elementos a la `allowList` de atributos y etiquetas permitidas), ten en cuenta que actualmente la ventana emergente no administra el enfoque del teclado. Cuando un usuario del teclado abre una ventana emergente, el foco permanece en el elemento activador y, como la ventana emergente generalmente no sigue inmediatamente al activador en la estructura del documento, no hay garantía de que presionando <kbd>TAB</kbd> se moverá un usuario de teclado en el propio popover. En resumen, es probable que el simple hecho de agregar controles interactivos a una ventana emergente haga que estos controles sean inalcanzables o inutilizables para los usuarios de teclados y usuarios de tecnologías de asistencia, o al menos generar un orden de enfoque general ilógico. En estos casos, considera usar un diálogo modal en su lugar.
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
      <td>Aplicar una transición de fundido CSS al popover</td>
    </tr>
    <tr>
      <td><code>container</code></td>
      <td>string | element | false</td>
      <td><code>false</code></td>
      <td>
        <p>Agrega el popover a un elemento específico. Ejemplo: <code>container: 'body'</code>. Esta opción es especialmente útil porque te permite colocar la ventana emergente en el flujo del documento cerca del elemento activador, lo que evitará que la ventana emergente se aleje flotando del elemento activador durante el cambio de tamaño de la ventana.</p>
      </td>
    </tr>
    <tr>
      <td><code>content</code></td>
      <td>string | element | function</td>
      <td><code>''</code></td>
      <td>
        <p>Valor de contenido predeterminado si el atributo <code>data-bs-content</code> no está presente.</p>
        <p>Si se proporciona una función, se llamará con su referencia <code>this</code> establecida en el elemento al que se adjunta la ventana emergente.</p>
      </td>
    </tr>
    <tr>
      <td><code>delay</code></td>
      <td>number | object</td>
      <td><code>0</code></td>
      <td>
        <p>Retraso en mostrar y ocultar el popover (ms) - no se aplica al tipo de activación manual</p>
        <p>Si se proporciona un número, se aplica un retraso tanto para ocultar como para mostrar</p>
        <p>La estructura del objeto es: <code>delay: { "show": 500, "hide": 100 }</code></p>
      </td>
    </tr>
    <tr>
      <td><code>html</code></td>
      <td>boolean</td>
      <td><code>false</code></td>
      <td>Inserta HTML en la ventana emergente. Si es falso, la propiedad <code>innerText</code> se usará para insertar contenido en el DOM. Usa texto si te preocupan los ataques XSS.</td>
    </tr>
    <tr>
      <td><code>placement</code></td>
      <td>string | function</td>
      <td><code>'right'</code></td>
      <td>
        <p>Cómo colocar el popover - auto | top | bottom | left | right.<br>Cuando se especifica <code>auto</code>, reorientará dinámicamente la ventana emergente.</p>
        <p>Cuando se usa una función para determinar la ubicación, se la llama con el nodo DOM emergente como primer argumento y el nodo DOM del elemento activador como segundo. El contexto <code>this</code> se establece en la instancia emergente.</p>
      </td>
    </tr>
    <tr>
      <td><code>selector</code></td>
      <td>string | false</td>
      <td><code>false</code></td>
      <td>Si se proporciona un selector, los objetos emergentes se delegarán a los destinos especificados. En la práctica, esto se usa para permitir que se agreguen popovers a contenido HTML dinámico. Consulta <a href="{{< param repo >}}/issues/4215">this</a> y <a href="https://codepen.io/team/bootstrap/pen/zYBXGwX?editors=1010">un ejemplo informativo</a>.</td>
    </tr>
    <tr>
      <td><code>template</code></td>
      <td>string</td>
      <td><code>'&lt;div class="popover" role="tooltip"&gt;&lt;div class="popover-arrow"&gt;&lt;/div&gt;&lt;h3 class="popover-header"&gt;&lt;/h3&gt;&lt;div class="popover-body"&gt;&lt;/div&gt;&lt;/div&gt;'</code></td>
      <td>
        <p>HTML base para usar al crear el popover.</p>
        <p>El <code>title</code> del popover se insertará en <code>.popover-header</code>.</p>
        <p>El <code>content</code> del popover se inyectará en el <code>.popover-body</code>.</p>
        <p><code>.popover-arrow</code> se convertirá en la flecha del popover.</p>
        <p>El elemento contenedor más externo debe tener la clase <code>.popover</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>title</code></td>
      <td>string | element | function</td>
      <td><code>''</code></td>
      <td>
        <p>Valor de título predeterminado si el atributo <code>title</code> no está presente.</p>
        <p>Si se proporciona una función, se llamará con su referencia <code>this</code> establecida en el elemento al que se adjunta la ventana emergente.</p>
      </td>
    </tr>
    <tr>
      <td><code>trigger</code></td>
      <td>string</td>
      <td><code>'click'</code></td>
      <td>Cómo se activa el popover: click | hover | focus | manual. Puedes pasar varios disparadores; sepáralos con un espacio. <code>manual</code> no se puede combinar con ningún otro disparador.</td>
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
      <td>Límite de restricción de desbordamiento del popover (se aplica solo al modificador preventOverflow de Popper). De forma predeterminada, es <code>'clippingParents'</code> y puede aceptar una referencia HTMLElement (solo a través de JavaScript). Para obtener más información, consulta los <a href="https://popper.js.org/docs/v2/utils/detect-overflow/#boundary">detectOverflow docs</a> de Popper.</td>
    </tr>
    <tr>
      <td><code>customClass</code></td>
      <td>string | function</td>
      <td><code>''</code></td>
      <td>
        <p>Agrega clases al popover cuando se muestre. Ten en cuenta que estas clases se agregarán además de las clases especificadas enl template. Para agregar varias clases, sepáralas con espacios: <code>'class-1 class-2'</code>.</p>
        <p>También puedes pasar una función que debería devolver una sola cadena que contenga nombres de clases adicionales.</p>
      </td>
    </tr>
    <tr>
      <td><code>sanitize</code></td>
      <td>boolean</td>
      <td><code>true</code></td>
      <td>Habilita o deshabilita la desinfección. Si se activan las opciones <code>'template'</code>, <code>'content'</code> y <code>'title'</code>, serán desinfectadas. Consulta la <a href="{{< docsref "/getting-started/javascript#sanitizer" >}}">sección de desinfección en nuestra documentación de JavaScript</a>.</td>
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
      <td><code>[0, 8]</code></td>
      <td>
        <p>Desplazamiento del popover relativo a su destino. Puedes pasar una cadena en atributos de datos con valores separados por comas como: <code>data-bs-offset="10,20"</code></p>
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
#### Atributos de datos para popovers individuales

Las opciones para popovers individuales se pueden especificar alternativamente mediante el uso de atributos de datos, como se explicó anteriormente.
{{< /callout >}}

#### Uso de la función con `popperConfig`

```js
var popover = new bootstrap.Popover(element, {
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

Revela el popover de un elemento. **Regresa al punte de la llamada antes de que se haya mostrado realmente el popover** (es decir, antes de que ocurra el evento `shown.bs.popover`). Esto se considera una activación "manual" del popover. Los popovers cuyo título y contenido son ambos de longitud cero nunca se muestran.

```js
myPopover.show()
```

#### hide

Oculta el popover de un elemento. **Regresa al punte de la llamada antes de que se haya ocultado realmente el popover** (es decir, antes de que ocurra el evento `hidden.bs.popover`). Esto se considera una activación "manual" del popover.

```js
myPopover.hide()
```

#### toggle

Alterna el popover de un elemento. **Regresa al punte de la llamada antes de que se muestre u oculte el popover** (es decir, antes de que ocurra el evento `shown.bs.popover` o `hidden.bs.popover`). Esto se considera una activación "manual" del popover.

```js
myPopover.toggle()
```

#### dispose

Oculta y destruye el popover de un elemento (elimina los datos almacenados en el elemento DOM). Los popovers que usan delegación (que se crean usando [la opción `selector`](#options)) no se pueden destruir individualmente en elementos desencadenantes descendientes.

```js
myPopover.dispose()
```

#### enable

Le da al popover de un elemento la capacidad de mostrarse. **Las ventanas emergentes están habilitadas de manera predeterminada.**

```js
myPopover.enable()
```

#### disable

Elimina la capacidad de mostrar el popover de un elemento. El popover solo se podrá mostrar si se vuelve a habilitar.

```js
myPopover.disable()
```

#### setContent

Brinda una forma de cambiar el contenido del popover después de su inicialización.

```js
myPopover.setContent({
  '.popover-header': 'another title',
  '.popover-body': 'another content'
})
```

{{< callout info >}}
El método `setContent` acepta un argumento `object`, donde cada clave de propiedad es un selector de `string` válido dentro del popover template, y cada valor de propiedad relacionado puede ser `string` | `element` | `function` | `null`
{{< /callout >}}

#### toggleEnabled

Alterna la capacidad de mostrar u ocultar el popover de un elemento.

```js
myPopover.toggleEnabled()
```

#### update

Actualiza la posición del popover de un elemento.

```js
myPopover.update()
```

#### getInstance

Método *estático* que te permite obtener la instancia de popover asociada con un elemento DOM

```js
var exampleTriggerEl = document.getElementById('example')
var popover = bootstrap.Popover.getInstance(exampleTriggerEl) // Devuelve una instancia del popover de Bootstrap
```

#### getOrCreateInstance

Método *estático* que te permite obtener la instancia emergente asociada con un elemento DOM, o crear uno nuevo en caso de que no se haya inicializado

```js
var exampleTriggerEl = document.getElementById('example')
var popover = bootstrap.Popover.getOrCreateInstance(exampleTriggerEl) // Devuelve una instancia del popover de Bootstrap
```

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
      <td>show.bs.popover</td>
      <td>Este evento se activa inmediatamente cuando se llama al método de instancia <code>show</code>.</td>
    </tr>
    <tr>
      <td>shown.bs.popover</td>
      <td>Este evento se activa cuando el popover se hace visible para el usuario (esperará a que se completen las transiciones CSS).</td>
    </tr>
    <tr>
      <td>hide.bs.popover</td>
      <td>Este evento se activa inmediatamente cuando se llama al método de instancia <code>hide</code>.</td>
    </tr>
    <tr>
      <td>hidden.bs.popover</td>
      <td>Este evento se activa cuando el popover ha terminado de ocultarse al usuario (esperará a que se completen las transiciones CSS).</td>
    </tr>
    <tr>
      <td>inserted.bs.popover</td>
      <td>Este evento se activa después del evento <code>show.bs.popover</code> cuando el template de popover se ha agregado al DOM.</td>
    </tr>
  </tbody>
</table>

```js
var myPopoverTrigger = document.getElementById('myPopover')
myPopoverTrigger.addEventListener('hidden.bs.popover', function () {
  // hacer algo...
})
```
