---
layout: docs
title: List group
description: Los grupos de listas son un componente flexible y potente para mostrar una serie de contenidos. Modifícalos y amplíalos para que admitan prácticamente cualquier contenido.
group: components
toc: true
---

## Ejemplo básico

El grupo de lista más básico es una lista desordenada con elementos de lista y las clases adecuadas. Construye sobre él con las opciones que siguen, o con tu propio CSS según sea necesario.

{{< example >}}
<ul class="list-group">
  <li class="list-group-item">Un elemento</li>
  <li class="list-group-item">Un segundo elemento</li>
  <li class="list-group-item">Un tercer elemento</li>
  <li class="list-group-item">Un cuarto elemento</li>
  <li class="list-group-item">Y un quinto elemento</li>
</ul>
{{< /example >}}

## Elementos activos

Agrega `.active` a `.list-group-item` para indicar la selección activa actual.

{{< example >}}
<ul class="list-group">
  <li class="list-group-item active" aria-current="true">Un elemento activo</li>
  <li class="list-group-item">Un segundo elemento</li>
  <li class="list-group-item">Un tercer elemento</li>
  <li class="list-group-item">Un cuarto elemento</li>
  <li class="list-group-item">Y un quinto elemento</li>
</ul>
{{< /example >}}

## Elementos deshabilitados

Agrega `.disabled` a un `.list-group-item` para que _aparezca_ deshabilitado. Ten en cuenta que algunos elementos con `.disabled` también requerirán JavaScript personalizado para deshabilitar por completo sus eventos de clic (por ejemplo, enlaces).

{{< example >}}
<ul class="list-group">
  <li class="list-group-item disabled" aria-disabled="true">Un elemento deshabilitado</li>
  <li class="list-group-item">Un segundo elemento</li>
  <li class="list-group-item">Un tercer elemento</li>
  <li class="list-group-item">Un cuarto elemento</li>
  <li class="list-group-item">Y un quinto elemento</li>
</ul>
{{< /example >}}

## Enlaces y botones

Usa `<a>`s o `<button>`s para crear elementos de grupo de listas _accionables_ con estados *hover*, *disabled* y *active* agregando `.list-group-item-action`. Separamos estas pseudoclases para garantizar que los grupos de listas hechos de elementos no interactivos (como `<li>`s o `<div>`s) no proporcionen la posibilidad de hacer clic o tocar.

Asegúrate de **no usar las clases `.btn` estándar aquí**.

{{< example >}}
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    El elemento de enlace actual
  </a>
  <a href="#" class="list-group-item list-group-item-action">Un segundo elemento de enlace</a>
  <a href="#" class="list-group-item list-group-item-action">Un tercer elemento de enlace</a>
  <a href="#" class="list-group-item list-group-item-action">Un cuarto elemento de enlace</a>
  <a class="list-group-item list-group-item-action disabled">Un elemento de enlace desactivado</a>
</div>
{{< /example >}}

Con `<button>`s, también puedes utilizar el atributo `disabled` en lugar de la clase `.disabled`. Lamentablemente, `<a>`s no admite este atributo.

{{< example >}}
<div class="list-group">
  <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
    El elemento botón actual
  </button>
  <button type="button" class="list-group-item list-group-item-action">Un segundo elemento botón</button>
  <button type="button" class="list-group-item list-group-item-action">Un tercer elemento botón</button>
  <button type="button" class="list-group-item list-group-item-action">Un cuarto elemento botón</button>
  <button type="button" class="list-group-item list-group-item-action" disabled>Un elemento botón deshabilitado</button>
</div>
{{< /example >}}

## Flush

Agrega `.list-group-flush` para eliminar algunos bordes y esquinas redondeadas para representar los elementos del grupo de listas de borde a borde en un contenedor padre (por ejemplo, tarjetas).

{{< example >}}
<ul class="list-group list-group-flush">
  <li class="list-group-item">Un elemento</li>
  <li class="list-group-item">Un segundo elemento</li>
  <li class="list-group-item">Un tercer elemento</li>
  <li class="list-group-item">Un cuarto elemento</li>
  <li class="list-group-item">Y un quinto elemento</li>
</ul>
{{< /example >}}

## Numerado

Agrega la clase modificadora `.list-group-numbered` (y, opcionalmente, usa un elemento `<ol>`) para optar por elementos del grupo de listas numeradas. Los números se generan a través de CSS (a diferencia del estilo de navegador predeterminado para `<ol>`) para una mejor ubicación dentro de los elementos del grupo de listas y para permitir una mejor personalización.

Los números son generados por `counter-reset` en `<ol>`, y luego se les da estilo y se colocan con un pseudo-elemento `::before` en `<li>` con `counter-increment` y `content`.

{{< example >}}
<ol class="list-group list-group-numbered">
  <li class="list-group-item">Un elemento de lista</li>
  <li class="list-group-item">Un elemento de lista</li>
  <li class="list-group-item">Un elemento de lista</li>
</ol>
{{< /example >}}

Estos también funcionan muy bien con contenido personalizado.

{{< example >}}
<ol class="list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subencabezado</div>
      Contenido para el elemento de la lista
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subencabezado</div>
      Contenido para el elemento de la lista
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subencabezado</div>
      Contenido para el elemento de la lista
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
</ol>
{{< /example >}}

## Horizontal

Agrega `.list-group-horizontal` para cambiar el diseño de los elementos del grupo de listas de vertical a horizontal en todos los breakpoints. Alternativamente, elije una variante responsive `.list-group-horizontal-{sm|md|lg|xl|xxl}` para hacer que un grupo de listas sea horizontal comenzando en el `min-width` de ese breakpoint. Actualmente, **los grupos de listas horizontales no se pueden combinar con grupos de listas flush.**

**ProTip:** ¿Quieres elementos de grupo de lista de igual ancho en posición horizontal? Agrega `.flex-fill` a cada elemento del grupo de listas.

{{< example >}}
{{< list-group.inline >}}
{{- range $.Site.Data.breakpoints }}
<ul class="list-group list-group-horizontal{{ .abbr }}">
  <li class="list-group-item">Un elemento</li>
  <li class="list-group-item">Un segundo elemento</li>
  <li class="list-group-item">Un tercer elemento</li>
</ul>
{{- end -}}
{{< /list-group.inline >}}
{{< /example >}}

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

## Clases contextuales

Utiliza clases contextuales para aplicar estilo a los elementos de la lista con un color de fondo y de texto.

{{< example >}}
<ul class="list-group">
  <li class="list-group-item">Un elemento de grupo de lista predeterminado</li>
{{< list.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
  <li class="list-group-item list-group-item-{{ .name }}">Un elemento {{ .name }} de grupo de lista</li>
{{- end -}}
{{< /list.inline >}}
</ul>
{{< /example >}}

Las clases contextuales también funcionan con `.list-group-item-action`. Ten en cuenta la adición de los estilos *hover* aquí que no están presentes en el ejemplo anterior. También se admite el estado `.active`; aplícalo para indicar una selección activa en un elemento de grupo de lista contextual.

{{< example >}}
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action">Un elemento de grupo de lista predeterminado</a>
{{< list.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
  <a href="#" class="list-group-item list-group-item-action list-group-item-{{ .name }}">Un elemento {{ .name }} de grupo de lista</a>
{{- end -}}
{{< /list.inline >}}
</div>
{{< /example >}}

{{< callout info >}}
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## Con badges (insignias)

Agrega insignias a cualquier elemento del grupo de listas para mostrar recuentos no leídos, actividad y más con la ayuda de algunas [utilidades]({{< docsref "/utilities/flex" >}}).

{{< example >}}
<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Un elemento de lista
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Un segundo elemento de lista
    <span class="badge bg-primary rounded-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Un tercer elemento de lista
    <span class="badge bg-primary rounded-pill">1</span>
  </li>
</ul>
{{< /example >}}

## Contenido personalizado

Agrega casi cualquier código HTML, incluso para grupos de listas vinculadas como el que se muestra a continuación, con la ayuda de las [utilidades flexbox]({{< docsref "/utilities/flex" >}}).

{{< example >}}
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Encabezado de elemento de grupo de lista</h5>
      <small>Hace 3 días</small>
    </div>
    <p class="mb-1">Algo de contenido placeholder en un párrafo.</p>
    <small>Y alguna letra pequeña.</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Encabezado de elemento de grupo de lista</h5>
      <small class="text-muted">Hace 3 días</small>
    </div>
    <p class="mb-1">Algo de contenido placeholder en un párrafo.</p>
    <small class="text-muted">Y alguna letra pequeña muted.</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Encabezado de elemento de grupo de lista</h5>
      <small class="text-muted">Hace 3 días</small>
    </div>
    <p class="mb-1">Algo de contenido placeholder en un párrafo.</p>
    <small class="text-muted">Y alguna letra pequeña muted.</small>
  </a>
</div>
{{< /example >}}

## Checkboxes y radios

Coloca las casillas de verificación y radios de Bootstrap dentro de los elementos del grupo de listas y personalízalos según sea necesario. Puedes usarlos sin `<label>`s, pero recuerda incluir un atributo `aria-label` y un valor para la accesibilidad.

{{< example >}}
<ul class="list-group">
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Primer checkbox
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Segundo checkbox
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Tercer checkbox
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Cuarto checkbox
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Quinto checkbox
  </li>
</ul>
{{< /example >}}

Y si deseas usar `<label>`s como `.list-group-item` para un mayor área de acción, también puedes hacerlo.

{{< example >}}
<div class="list-group">
  <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="">
    Primer checkbox
  </label>
  <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="">
    Segundo checkbox
  </label>
  <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="">
    Tercer checkbox
  </label>
  <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="">
    Cuarto checkbox
  </label>
  <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="">
    Quinto checkbox
  </label>
</div>
{{< /example >}}

## Sass

### Variables

{{< scss-docs name="list-group-variables" file="scss/_variables.scss" >}}

### Mixins

Usado en combinación con `$theme-colors` para generar las [clases variantes contextuales](#contextual-classes) para `.list-group-item`s.

{{< scss-docs name="list-group-mixin" file="scss/mixins/_list-group.scss" >}}

### Loop

Bucle que genera las clases modificadoras con el mixin `list-group-item-variant()`.

{{< scss-docs name="list-group-modifiers" file="scss/_list-group.scss" >}}

## Comportamiento de JavaScript

Usa el complemento JavaScript, inclúyelo individualmente o a través del archivo `bootstrap.js` compilado, para ampliar nuestro grupo de listas y crear paneles con pestañas de contenido local.

<div class="bd-example" role="tabpanel">
  <div class="row">
    <div class="col-4">
      <div class="list-group" id="list-tab" role="tablist">
        <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="tab" href="#list-home" role="tab" aria-controls="list-home">Inicio</a>
        <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="tab" href="#list-profile" role="tab" aria-controls="list-profile">Perfil</a>
        <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="tab" href="#list-messages" role="tab" aria-controls="list-messages">Mensajes</a>
        <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="tab" href="#list-settings" role="tab" aria-controls="list-settings">Configuración</a>
      </div>
    </div>
    <div class="col-8">
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
          <p>Algo de contenido placeholder en un párrafo relacionado con "Inicio". Y algo más de contenido, usado aquí solo para rellenar y llenar este panel de pestañas. En producción, obviamente tendrías más contenido real aquí. Y no solo texto. Podría ser cualquier cosa, de verdad. Texto, imágenes, formularios.</p>
        </div>
        <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
          <p>Algo de contenido placeholder en un párrafo relacionado con "Perfil". Y algo más de contenido, usado aquí solo para rellenar y llenar este panel de pestañas. En producción, obviamente tendrías más contenido real aquí. Y no solo texto. Podría ser cualquier cosa, de verdad. Texto, imágenes, formularios.</p>
        </div>
        <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
          <p>Algo de contenido placeholder en un párrafo relacionado con "Mensajes". Y algo más de contenido, usado aquí solo para rellenar y llenar este panel de pestañas. En producción, obviamente tendrías más contenido real aquí. Y no solo texto. Podría ser cualquier cosa, de verdad. Texto, imágenes, formularios.</p>
        </div>
        <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
          <p>Algo de contenido placeholder en un párrafo relacionado con "Configuración". Y algo más de contenido, usado aquí solo para rellenar y llenar este panel de pestañas. En producción, obviamente tendrías más contenido real aquí. Y no solo texto. Podría ser cualquier cosa, de verdad. Texto, imágenes, formularios.</p>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="row">
  <div class="col-4">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Inicio</a>
      <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Perfil</a>
      <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Mensajes</a>
      <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Configuración</a>
    </div>
  </div>
  <div class="col-8">
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">...</div>
      <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
      <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
      <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
    </div>
  </div>
</div>
```

### Uso de atributos de datos

Puedes activar la navegación de un grupo de listas sin escribir JavaScript simplemente especificando `data-bs-toggle="list"` o en un elemento. Utiliza estos atributos de datos en `.list-group-item`.

```html
<div role="tabpanel">
  <!-- List group -->
  <div class="list-group" id="myList" role="tablist">
    <a class="list-group-item list-group-item-action active" data-bs-toggle="list" href="#home" role="tab">Inicio</a>
    <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#profile" role="tab">Perfil</a>
    <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#messages" role="tab">Mensajes</a>
    <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#settings" role="tab">Configuración</a>
  </div>

  <!-- Tab panes -->
  <div class="tab-content">
    <div class="tab-pane active" id="home" role="tabpanel">...</div>
    <div class="tab-pane" id="profile" role="tabpanel">...</div>
    <div class="tab-pane" id="messages" role="tabpanel">...</div>
    <div class="tab-pane" id="settings" role="tabpanel">...</div>
  </div>
</div>
```

{{< callout info >}}
{{< partial "maybe-interested-2.md" >}}
{{< /callout >}}

### A través de JavaScript

Habilita el elemento de la lista con pestañas a través de JavaScript (cada elemento de la lista debe activarse individualmente):

```js
var triggerTabList = Array.prototype.slice.call(document.querySelectorAll('#myTab a'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})
```

Puedes activar elementos de lista individuales de varias maneras:

```js
var triggerEl = document.querySelector('#myTab a[href="#profile"]')
bootstrap.Tab.getInstance(triggerEl).show() // Seleccionar pestaña por nombre

var triggerFirstTabEl = document.querySelector('#myTab li:first-child a')
bootstrap.Tab.getInstance(triggerFirstTabEl).show() // Seleccionar primera pestaña
```

### Efecto fade

Para hacer que el panel de pestañas se desvanezca, agrega `.fade` a cada `.tab-pane`. El primer panel de pestañas también debe tener `.show` para que el contenido inicial sea visible.

```html
<div class="tab-content">
  <div class="tab-pane fade show active" id="home" role="tabpanel">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel">...</div>
  <div class="tab-pane fade" id="messages" role="tabpanel">...</div>
  <div class="tab-pane fade" id="settings" role="tabpanel">...</div>
</div>
```

### Métodos

#### constructor

Activa un elemento de lista y un contenedor de contenido. La pestaña debe tener un `data-bs-target` o un `href` dirigido a un nodo contenedor en el DOM.

```html
<div class="list-group" id="myList" role="tablist">
  <a class="list-group-item list-group-item-action active" data-bs-toggle="list" href="#home" role="tab">Inicio</a>
  <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#profile" role="tab">Perfil</a>
  <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#messages" role="tab">Mensajes</a>
  <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#settings" role="tab">Configuración</a>
</div>

<div class="tab-content">
  <div class="tab-pane active" id="home" role="tabpanel">...</div>
  <div class="tab-pane" id="profile" role="tabpanel">...</div>
  <div class="tab-pane" id="messages" role="tabpanel">...</div>
  <div class="tab-pane" id="settings" role="tabpanel">...</div>
</div>

<script>
  var firstTabEl = document.querySelector('#myTab a:last-child')
  var firstTab = new bootstrap.Tab(firstTabEl)

  firstTab.show()
</script>
```

#### show

Selecciona el elemento de la lista dada y muestra su panel asociado. Cualquier otro elemento de la lista que se seleccionó previamente se deselecciona y su panel asociado se oculta. **Regresa al punto de la llamada antes de que se haya mostrado realmente el panel de pestañas** (por ejemplo, antes de que ocurra el evento `shown.bs.tab`).

```js
  var someListItemEl = document.querySelector('#someListItem')
  var tab = new bootstrap.Tab(someListItemEl)

  tab.show()
```

#### dispose

Destruye la pestaña de un elemento.

#### getInstance

Método *estático* que te permite obtener la instancia de pestaña asociada con un elemento DOM

```js
var triggerEl = document.querySelector('#trigger')
var tab = bootstrap.Tab.getInstance(triggerEl) // Devuelve una instancia de pestaña Bootstrap
```

#### getOrCreateInstance

Método *estático* que te permite obtener la instancia de pestaña asociada con un elemento DOM, o crear una nueva en caso de que no se haya inicializado

```js
var triggerEl = document.querySelector('#trigger')
var tab = bootstrap.Tab.getOrCreateInstance(triggerEl) // Devuelve una instancia de pestaña Bootstrap
```

{{< callout info >}}
{{< partial "maybe-interested-3.md" >}}
{{< /callout >}}

### Eventos

Al mostrar una nueva pestaña, los eventos se activan en el siguiente orden:

1. `hide.bs.tab` (en la pestaña activa actual)
2. `show.bs.tab` (en la pestaña que se mostrará)
3. `hidden.bs.tab` (en la pestaña activa anterior, la misma que para el evento `hide.bs.tab`)
4. `shown.bs.tab` (en la pestaña recién activa recién mostrada, la misma que para el evento `show.bs.tab`)

Si ninguna pestaña estaba activa, los eventos `hide.bs.tab` y `hidden.bs.tab` no se activarán.

<table class="table">
  <thead>
    <tr>
      <th style="width: 150px;">Tipo de evento</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>show.bs.tab</code></td>
      <td>Este evento se activa al mostrar la pestaña, pero antes de que se muestre la nueva pestaña. Usa <code>event.target</code> y <code>event.relatedTarget</code> para referenciar la pestaña activa y la pestaña activa anterior (si está disponible) respectivamente.</td>
    </tr>
    <tr>
      <td><code>shown.bs.tab</code></td>
      <td>Este evento se activa en la presentación de pestañas después de que se haya mostrado una pestaña. Usa <code>event.target</code> y <code>event.relatedTarget</code> para referenciar la pestaña activa y la pestaña activa anterior (si está disponible) respectivamente.</td>
    </tr>
    <tr>
      <td><code>hide.bs.tab</code></td>
      <td>Este evento se activa cuando se va a mostrar una nueva pestaña (y, por lo tanto, se va a ocultar la pestaña activa anterior). Utiliza <code>event.target</code> y <code>event.relatedTarget</code> para referenciar la pestaña activa actual y la nueva pestaña que pronto estará activa, respectivamente.</td>
    </tr>
    <tr>
      <td><code>hidden.bs.tab</code></td>
      <td>Este evento se activa después de que se muestra una nueva pestaña (y, por lo tanto, la pestaña activa anterior está oculta). Utiliza <code>event.target</code> y <code>event.relatedTarget</code> para referenciar la pestaña activa anterior y la pestaña activa nueva, respectivamente.</td>
    </tr>
  </tbody>
</table>

```js
var tabElms = document.querySelectorAll('a[data-bs-toggle="list"]')
tabElms.forEach(function(tabElm) {
  tabElm.addEventListener('shown.bs.tab', function (event) {
    event.target // pestaña recién activada
    event.relatedTarget // pestaña activa anterior
  })
}
```
