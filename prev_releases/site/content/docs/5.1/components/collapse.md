---
layout: docs
title: Collapse
description: Alterna la visibilidad del contenido en tu proyecto con algunas clases y nuestros complementos de JavaScript.
group: components
toc: true
---

## ¿Qué es Collapse?

El complemento JavaScript Collapse se utiliza para mostrar y ocultar contenido. Los botones o enlaces se utilizan como disparadores que se asignan a elementos específicos que alternan. Colapsar un elemento animará la `height` desde su valor actual hasta `0`. Dada la forma en que CSS maneja las animaciones, no puedes usar `padding` en un elemento `.collapse`. En su lugar, utiliza la clase como un elemento envolvente independiente.

{{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}}

## Ejemplo de Collapse

Haz clic en los botones de abajo para mostrar y ocultar otro elemento a través de cambios de clase:

- `.collapse` oculta el contenido
- `.collapsing` se aplica durante las transiciones
- `.collapse.show` muestra el contenido

Generalmente, recomendamos usar un botón con el atributo `data-bs-target`. Si bien no se recomienda desde un punto de vista semántico, también puedes usar un enlace con el atributo `href` (y un `role="button"`). En ambos casos, se requiere `data-bs-toggle="collapse"`.

{{< example >}}
<p>
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Enlace con href
  </a>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Botón con data-bs-target
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Algún contenido placeholder para el componente de contracción. Este panel está oculto de forma predeterminada, pero se revela cuando el usuario activa el disparador correspondiente.
  </div>
</div>
{{< /example >}}

## Horizontal

El complemento de Collapse también admite el colapso horizontal. Agrega la clase modificadora `.collapse-horizontal` para cambiar el `width` en lugar de `height` y establece un `width` en el elemento secundario inmediato. Siéntete libre de escribir tu propio Sass personalizado, usar estilos en línea o usar nuestras [utilidades de ancho]({{< docsref "/utilities/sizing" >}}).

{{< callout info >}}
Ten en cuenta que, si bien el siguiente ejemplo tiene un conjunto de `min-height` para evitar repintados excesivos en nuestros documentos, esto no es un requisito explícito. **Solo se requiere el `width` en el elemento secundario.**
{{< /callout >}}

{{< example >}}
<p>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
    Toggle con collapse
  </button>
</p>
<div style="min-height: 120px;">
  <div class="collapse collapse-horizontal" id="collapseWidthExample">
    <div class="card card-body" style="width: 300px;">
      Este es un contenido placeholder para un colapso horizontal. Está oculto de forma predeterminada y se muestra cuando se activa.
    </div>
  </div>
</div>
{{< /example >}}

## Múltiples objetivos

Un `<button>` o `<a>` puede mostrar y ocultar varios elementos al hacer referencia a ellos con un selector en su atributo `href` o `data-bs-target`.
Múltiples `<button>` o `<a>` pueden mostrar y ocultar un elemento si cada uno hace referencia a él con su atributo `href` o `data-bs-target`

{{< example >}}
<p>
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Alternar el primer elemento</a>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Alternar el segundo elemento</button>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Alternar ambos elementos</button>
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body">
        Algún contenido placeholder para el primer componente de colapso de este ejemplo de colapso múltiple. Este panel está oculto de forma predeterminada, pero se revela cuando el usuario activa el disparador correspondiente.

      </div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body">
        Parte del contenido placeholder para el segundo componente de contracción de este ejemplo de contracción múltiple. Este panel está oculto de forma predeterminada, pero se revela cuando el usuario activa el disparador correspondiente.
      </div>
    </div>
  </div>
</div>
{{< /example >}}

## Accesibilidad

Asegúrate de agregar `aria-expanded` al elemento de control. Este atributo transmite explícitamente el estado actual del elemento plegable vinculado al control a los lectores de pantalla y tecnologías de asistencia similares. Si el elemento contraíble está cerrado de forma predeterminada, el atributo del elemento de control debe tener un valor de `aria-expanded="false"`. Si configuraste el elemento contraíble para que se abra de manera predeterminada mediante la clase `show`, configura `aria-expanded="true"` en el control. El complemento alternará automáticamente este atributo en el control en función de si el elemento plegable se ha abierto o cerrado (a través de JavaScript, o porque el usuario activó otro elemento de control también vinculado al mismo elemento plegable). Si el elemento HTML del elemento de control no es un botón (por ejemplo, un `<a>` o `<div>`), se debes agregar el atributo `role="button"` al elemento.

Si tu elemento de control apunta a un solo elemento contraíble, es decir, el atributo `data-bs-target` apunta a un selector `id`, debes agregar el atributo `aria-controls` al elemento de control, que contiene el `id` del elemento plegable. Los lectores de pantalla modernos y las tecnologías de asistencia similares hacen uso de este atributo para proporcionar a los usuarios accesos directos adicionales para navegar directamente al propio elemento contraíble.

Ten en cuenta que la implementación actual de Bootstrap no cubre las diversas interacciones de teclado *opcionales* descritas en el patrón de acordeón [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices-1.1/#accordion), deberás incluirlos tú mismo con JavaScript personalizado.

## Sass

### Variables

{{< scss-docs name="collapse-transition" file="scss/_variables.scss" >}}

### Clases

Las clases de transición de Collapse se pueden encontrar en `scss/_transitions.scss`, ya que se comparten entre varios componentes (collapse y accordion).

{{< scss-docs name="collapse-classes" file="scss/_transitions.scss" >}}

## Uso

El complemento Collapse utiliza algunas clases para manejar el trabajo pesado:

- `.collapse` oculta el contenido
- `.collapse.show` muestra el contenido
- `.collapsing` se agrega cuando comienza la transición y se elimina cuando finaliza

Estas clases se pueden encontrar en `_transitions.scss`.

### A través de atributos de datos

Simplemente agrega `data-bs-toggle="collapse"` y `data-bs-target` al elemento para asignar automáticamente el control de uno o más elementos colapsables. El atributo `data-bs-target` acepta un selector CSS para aplicar el colapso. Asegúrate de agregar la clase `collapse` al elemento colapsable. Si deseas que se abra por defecto, agrega la clase adicional `show`.

Para agregar una gestión de grupos similar a un acordeón a un área contraíble, agrega el atributo de datos `data-bs-parent="#selector"`. Consulta la [página de Accordion]({{< docsref "/components/accordion" >}}) para obtener más información.

### A través de JavaScript

Habilitar manualmente con:

```js
var collapseElementList = Array.prototype.slice.call(document.querySelectorAll('.collapse'))
var collapseList = collapseElementList.map(function (collapseEl) {
  return new bootstrap.Collapse(collapseEl)
})
```

### Opciones

Las opciones se pueden pasar a través de atributos de datos o JavaScript. Para los atributos de datos, agrega el nombre de la opción a `data-bs-`, como en `data-bs-parent=""`.

<table class="table">
  <thead>
    <tr>
      <th style="width: 100px;">Nombre</th>
      <th style="width: 50px;">Tipo</th>
      <th style="width: 50px;">Por defecto</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>parent</code></td>
      <td>selector | jQuery object | DOM element </td>
      <td><code>false</code></td>
      <td>Si se proporciona el padre, todos los elementos contraíbles bajo el padre especificado se cerrarán cuando se muestre este elemento contraíble. (similar al comportamiento tradicional del acordeón; esto depende de la clase <code>card</code>). El atributo debe establecerse en el área contraíble de destino.</td>
    </tr>
    <tr>
      <td><code>toggle</code></td>
      <td>boolean</td>
      <td><code>true</code></td>
      <td>Alterna el elemento contraíble en la invocación</td>
    </tr>
  </tbody>
</table>

### Métodos

{{< callout danger >}}
{{< partial "callout-danger-async-methods.md" >}}
{{< /callout >}}

Activa tu contenido como un elemento colapsable. Acepta un `object` de opciones opcionales.

Puedes crear una instancia de Collapse con el constructor, por ejemplo:

```js
var myCollapse = document.getElementById('myCollapse')
var bsCollapse = new bootstrap.Collapse(myCollapse, {
  toggle: false
})
```

<table class="table">
  <thead>
    <tr>
      <th>Método</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>toggle</code></td>
      <td>Alterna un elemento colapsable para mostrarlo u ocultarlo. <strong>Regresa al punto de la llamada antes de que el elemento contraíble se haya mostrado u ocultado</strong> (es decir, antes de que ocurra un evento <code>shown.bs.collapse</code> o <code>hidden.bs.collapse</code>).</td>
    </tr>
    <tr>
      <td><code>show</code></td>
      <td>Muestra un elemento colapsable. <strong>Regresa al punto de la llamada antes de que se haya mostrado realmente el elemento contraíble</strong> (por ejemplo, antes de que ocurra el evento <code>shown.bs.collapse</code>). </td>      
    </tr>
    <tr>
      <td><code>hide</code></td>
      <td>Oculta un elemento contraíble. <strong>Vuelve al punto de la llamada antes de que el elemento contraíble se haya ocultado</strong> (por ejemplo, antes de que ocurra el evento <code>hidden.bs.collapse</code>).</td>
    </tr>
    <tr>
      <td><code>dispose</code></td>
      <td>Destruye el colapso de un elemento. (Elimina los datos almacenados en el elemento DOM)</td>
    </tr>
    <tr>
      <td>
        <code>getInstance</code>
      </td>
      <td>
        Método estático que te permite obtener la instancia del Collapse asociada a un elemento DOM, puedes usarlo así: <code>bootstrap.Collapse.getInstance(element)</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>getOrCreateInstance</code>
      </td>
      <td>
        Método estático que devuelve una instancia del Collapse asociada a un elemento DOM o crea una nueva en caso de que no se haya inicializado.
        Puedes usarlo así: <code>bootstrap.Collapse.getOrCreateInstance(element)</code>
      </td>
    </tr>
  </tbody>
</table>

### Eventos

La clase Collapse de Bootstrap expone algunos eventos para conectarse a la funcionalidad de Collapse.

<table class="table">
  <thead>
    <tr>
      <th style="width: 150px;">Tipo de evento</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>show.bs.collapse</code></td>
      <td>Este evento se activa inmediatamente cuando se llama al método de instancia <code>show</code>.</td>
    </tr>
    <tr>
      <td><code>shown.bs.collapse</code></td>
      <td>Este evento se activa cuando un elemento collapse se hace visible para el usuario (esperará a que se completen las transiciones CSS).</td>
    </tr>
    <tr>
      <td><code>hide.bs.collapse</code></td>
      <td>Este evento se activa inmediatamente cuando se llama al método <code>hide</code>.</td>
    </tr>
    <tr>
      <td><code>hidden.bs.collapse</code></td>
      <td>Este evento se activa cuando un elemento collapse se ha ocultado al usuario (esperará a que se completen las transiciones CSS).</td>
    </tr>
  </tbody>
</table>

```js
var myCollapsible = document.getElementById('myCollapsible')
myCollapsible.addEventListener('hidden.bs.collapse', function () {
  // hacer algo...
})
```
