---
layout: docs
title: Toasts
description: Envía notificaciones a tus visitantes con un toast, un mensaje de alerta ligero y fácilmente personalizable.
group: components
toc: true
---

## ¿Qué es toast?

Los toasts son notificaciones livianas diseñadas para imitar las notificaciones automáticas que se han popularizado en los sistemas operativos móviles y de escritorio. Están construidos con flexbox, por lo que son fáciles de alinear y colocar.

## Descripción general

Cosas que debes saber al usar el complemento de toast:

- Los toasts son opcionales por motivos de rendimiento, por lo que **debes inicializarlos tú mismo**.
- Los toasts se ocultarán automáticamente si no especificas `autohide: false`.

{{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}}

## Ejemplos

### Básico

Para fomentar los toasts extensibles y predecibles, recomendamos un encabezado y un cuerpo. Los encabezados de toasts usan `display: flex`, lo que permite una fácil alineación del contenido gracias a nuestras utilidades margin y flexbox.

Los toasts son tan flexibles como necesites y requieren muy poco marcado. Como mínimo, requerimos que un solo elemento contenga tu contenido "toasted" y recomendamos enfáticamente un botón para descartar (cerrar).

{{< example class="bg-light" >}}
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    {{< placeholder width="20" height="20" background="#007aff" class="rounded me-2" text="false" title="false" >}}
    <strong class="me-auto">Bootstrap</strong>
    <small>Hace 11 minutos</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    ¡Hola Mundo! Este es un mensaje de toast.
  </div>
</div>
{{< /example >}}

{{< callout warning >}}
Anteriormente, nuestros scripts agregaban dinámicamente la clase `.hide` para ocultar completamente un toast (con `display:none`, en lugar de solo con `opacity:0`). Esto ya no es necesario. Sin embargo, para compatibilidad con versiones anteriores, nuestro script continuará alternando la clase (aunque no haya una necesidad práctica de hacerlo) hasta la próxima versión major.
{{< /callout >}}

### Ejemplo en vivo

Haz clic en el botón a continuación para mostrar un toast (ubicado con nuestras utilidades en la esquina inferior derecha) que se ha ocultado de forma predeterminada.

<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
  <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      {{< placeholder width="20" height="20" background="#007aff" class="rounded me-2" text="false" title="false" >}}
      <strong class="me-auto">Bootstrap</strong>
      <small>Hace 11 minutos</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      ¡Hola Mundo! Este es un mensaje de toast.
    </div>
  </div>
</div>

<div class="bd-example">
  <button type="button" class="btn btn-primary" id="liveToastBtn">Mostrar el toast en vivo</button>
</div>

```html
<button type="button" class="btn btn-primary" id="liveToastBtn">Mostrar el toast en vivo</button>

<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
  <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <img src="..." class="rounded me-2" alt="...">
      <strong class="me-auto">Bootstrap</strong>
      <small>Hace 11 minutos</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      ¡Hola Mundo! Este es un mensaje de toast.
    </div>
  </div>
</div>
```

Usamos el siguiente JavaScript para activar nuestra demostración de toast en vivo:

```js
var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}
```
### Translúcido

Los toasts son ligeramente translúcidos para mezclarse con lo que hay debajo de ellos.

{{< example class="bg-dark" >}}
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    {{< placeholder width="20" height="20" background="#007aff" class="rounded me-2" text="false" title="false" >}}
    <strong class="me-auto">Bootstrap</strong>
    <small class="text-muted">Hace 11 minutos</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    ¡Hola Mundo! Este es un mensaje de toast.
  </div>
</div>
{{< /example >}}

### Apilamiento

Puedes apilar toasts envolviéndolas en un recipiente para toasts, lo que agregará algo de espacio verticalmente.

{{< example class="bg-light" >}}
<div class="toast-container">
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      {{< placeholder width="20" height="20" background="#007aff" class="rounded me-2" text="false" title="false" >}}
      <strong class="me-auto">Bootstrap</strong>
      <small class="text-muted">justo ahora</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      ¿Ves? Justo como esto
    </div>
  </div>

  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      {{< placeholder width="20" height="20" background="#007aff" class="rounded me-2" text="false" title="false" >}}
      <strong class="me-auto">Bootstrap</strong>
      <small class="text-muted">2 seconds ago</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Atención, los toasts se apilarán automáticamente
    </div>
  </div>
</div>
{{< /example >}}

### Contenido personalizado

Personaliza tus toasts eliminando subcomponentes, ajustándolos con [utilidades]({{< docsref "/utilities/api" >}}), o agregando tu propio marcado. Aquí hemos creado un toast más simple eliminando el `.toast-header` predeterminado, agregando un ícono de ocultación personalizado de [Iconos de Bootstrap]({{< param icons >}}), y usando algunas [utilidades de flexbox]({{< docsref "/utilities/flex" >}}) para ajustar el diseño.

{{< example class="bg-light" >}}
<div class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">
    ¡Hola Mundo! Este es un mensaje de toast.
   </div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
{{< /example >}}

Alternativamente, también puedes agregar controles y componentes adicionales a los toasts.

{{< example class="bg-light" >}}
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-body">
    ¡Hola Mundo! Este es un mensaje de toast.
    <div class="mt-2 pt-2 border-top">
      <button type="button" class="btn btn-primary btn-sm">Tomar acción</button>
      <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Cerrar</button>
    </div>
  </div>
</div>
{{< /example >}}

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

### Esquemas de color

Sobre la base del ejemplo anterior, puedes crear diferentes esquemas de colores con nuestras utilidades de [color]({{< docsref "/utilities/colors" >}}) y [background]({{< docsref "/utilities/background" >}}). Aquí hemos agregado `.bg-primary` y `.text-white` a `.toast`, y luego agregamos `.btn-close-white` a nuestro botón de cierre. Para un borde nítido, eliminamos el borde predeterminado con `.border-0`.

{{< example class="bg-light" >}}
<div class="toast align-items-center text-white bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">
      ¡Hola Mundo! Este es un mensaje de toast.
    </div>
    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
{{< /example >}}

## Colocación

Coloca toast con CSS personalizado a medida que los necesites. La parte superior derecha se usa a menudo para notificaciones, al igual que la parte superior central. Si solo vas a mostrar un toast a la vez, coloca los estilos de posicionamiento justo en `.toast`.

{{< example >}}
<form>
  <div class="mb-3">
    <label for="selectToastPlacement">Colocación del toast</label>
    <select class="form-select mt-2" id="selectToastPlacement">
      <option value="" selected>Selecciona una posición...</option>
      <option value="top-0 start-0">Superior izquierda</option>
      <option value="top-0 start-50 translate-middle-x">Superior central</option>
      <option value="top-0 end-0">Superior derecha</option>
      <option value="top-50 start-0 translate-middle-y">Medio izquierda</option>
      <option value="top-50 start-50 translate-middle">Medio central</option>
      <option value="top-50 end-0 translate-middle-y">Medio derecha</option>
      <option value="bottom-0 start-0">Inferior izquierda</option>
      <option value="bottom-0 start-50 translate-middle-x">Inferior central</option>
      <option value="bottom-0 end-0">Inferior derecha</option>
    </select>
  </div>
</form>
<div aria-live="polite" aria-atomic="true" class="bg-dark position-relative bd-example-toasts">
  <div class="toast-container position-absolute p-3" id="toastPlacement">
    <div class="toast">
      <div class="toast-header">
        {{< placeholder width="20" height="20" background="#007aff" class="rounded me-2" text="false" title="false" >}}
        <strong class="me-auto">Bootstrap</strong>
        <small>Hace 11 minutos</small>
      </div>
      <div class="toast-body">
        ¡Hola Mundo! Este es un mensaje de toast.
      </div>
    </div>
  </div>
</div>
{{< /example >}}

Para los sistemas que generan más notificaciones, considera usar un elemento envolvente para que puedan apilarse fácilmente.

{{< example class="bg-dark bd-example-toasts p-0" >}}
<div aria-live="polite" aria-atomic="true" class="position-relative">
  <!-- Posicionarlo: -->
  <!-- - `.toast-container` para espaciado entre toasts -->
  <!-- - `.position-absolute`, `top-0` & `end-0` para posicionar el toasts en la esquina superior izquierda -->
  <!-- - `.p-3` para evitar que los toasts se peguen al borde del container  -->
  <div class="toast-container position-absolute top-0 end-0 p-3">

    <!-- Then put toasts within -->
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        {{< placeholder width="20" height="20" background="#007aff" class="rounded me-2" text="false" title="false" >}}
        <strong class="me-auto">Bootstrap</strong>
        <small class="text-muted">justo ahora</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        ¿Ves? Justo como esto
      </div>
    </div>

    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        {{< placeholder width="20" height="20" background="#007aff" class="rounded me-2" text="false" title="false" >}}
        <strong class="me-auto">Bootstrap</strong>
        <small class="text-muted">2 seconds ago</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        Atención, los toasts se apilarán automáticamente
      </div>
    </div>
  </div>
</div>
{{< /example >}}

También pueden utilizarse las utilidades de flexbox para alinear los toasts horizontal y/o verticalmente.

{{< example class="bg-dark bd-example-toasts d-flex" >}}
<!-- Flexbox container para el alineamiento de toasts -->
<div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center w-100">

  <!-- Then put toasts within -->
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      {{< placeholder width="20" height="20" background="#007aff" class="rounded me-2" text="false" title="false" >}}
      <strong class="me-auto">Bootstrap</strong>
      <small>Hace 11 minutos</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      ¡Hola Mundo! Este es un mensaje de toast.
    </div>
  </div>
</div>
{{< /example >}}

## Accesibilidad

Los toasts están destinados a ser pequeñas interrupciones para tus visitantes o usuarios, por lo que para ayudar a aquellos con lectores de pantalla y tecnologías de asistencia similares, debes envolver tus toasts en una [región `aria-live`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). Los lectores de pantalla anuncian automáticamente los cambios en las regiones activas (como inyectar/actualizar un componente del sistema) sin necesidad de mover el foco del usuario o interrumpirlo de otra manera. Además, incluye `aria-atomic="true"` para asegurarte de que todo los toasts se anuncien siempre como una sola unidad (atómica), en lugar de simplemente anunciar lo que se cambió (lo que podría ocasionar problemas si solo actualizas parte del contenido del toasts, o si muestras el mismo contenido de toast en un momento posterior). Si la información necesaria es importante para el proceso, p.e. para obtener una lista de errores en un formulario, utiliza el [componente de alerta]({{< docsref "/components/alerts" >}}) en lugar de toasts.

Ten en cuenta que la región en vivo debe estar presente en el marcado *antes* de que se genere o actualice el toasts. Si generas dinámicamente ambos al mismo tiempo y los insertas en la página, generalmente no serán anunciados por tecnologías de asistencia.

También necesitas adaptar el nivel de `role` y `aria-live` dependiendo del contenido. Si es un mensaje importante como un error, usa `role="alert" aria-live="assertive"`, de lo contrario, use los atributos `role="status" aria-live="polite"`.

A medida que cambias el contenido que estás mostrando, asegúrate de actualizar el [tiempo de espera de `delay`](#options) para que los usuarios tengan tiempo suficiente para leer el toasts.

```html
<div class="toast" role="alert" aria-live="polite" aria-atomic="true" data-bs-delay="10000">
  <div role="alert" aria-live="assertive" aria-atomic="true">...</div>
</div>
```
Al usar `autohide: false`, debes agregar un botón de cierre para permitir que los usuarios descarten el toast.

{{< example class="bg-light" >}}
<div role="alert" aria-live="assertive" aria-atomic="true" class="toast" data-bs-autohide="false">
  <div class="toast-header">
    {{< placeholder width="20" height="20" background="#007aff" class="rounded me-2" text="false" title="false" >}}
    <strong class="me-auto">Bootstrap</strong>
    <small>Hace 11 minutos</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    ¡Hola Mundo! Este es un mensaje de toast.
  </div>
</div>
{{< /example >}}

Si bien técnicamente es posible agregar controles enfocables/accionables (como botones o enlaces adicionales) en tu toast, debes evitar hacer esto para ocultar automáticamente los toasts. Incluso si das al toast un largo [tiempo de espera `delay`](#options), los usuarios de tecnología de asistencia y teclado pueden tener dificultades para llegar al toast a tiempo para tomar medidas (ya que los toasts no reciben atención cuando se muestran) . Si es absolutamente necesario tener controles adicionales, te recomendamos usar un toast con `autohide: false`.

{{< callout info >}}
{{< partial "maybe-interested-2.md" >}}
{{< /callout >}}

## Sass

### Variables

{{< scss-docs name="toast-variables" file="scss/_variables.scss" >}}

## Uso

Inicializa los toasts a través de JavaScript:

```js
var toastElList = Array.prototype.slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl, option)
})
```

### Triggers

{{% js-dismiss "toast" %}}

### Opciones

Las opciones se pueden pasar a través de atributos de datos o JavaScript. Para los atributos de datos, agrega el nombre de la opción a `data-bs-`, como en `data-bs-animation=""`.

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
      <td>Aplicar una transición de fundido CSS al toast</td>
    </tr>
    <tr>
      <td><code>autohide</code></td>
      <td>boolean</td>
      <td><code>true</code></td>
      <td>Ocultar automáticamente el toast</td>
    </tr>
    <tr>
      <td><code>delay</code></td>
      <td>number</td>
      <td>
        <code>5000</code>
      </td>
      <td>Retraso en ocultar el toast (ms)</td>
    </tr>
  </tbody>
</table>

### Métodos

{{< callout danger >}}
{{< partial "callout-danger-async-methods.md" >}}
{{< /callout >}}

#### show

Revela el toast de un elemento. **Regresa al punto de la llamada antes de que se muestre realmente el toast** (es decir, antes de que ocurra el evento `shown.bs.toast`).
Debes llamar manualmente a este método, caso contrario tu toast no se mostrará.

```js
toast.show()
```

#### hide

Oculta el toast de un elemento. **Regresa al punto de la llamada antes de que se haya ocultado realmente el toast** (es decir, antes de que ocurra el evento `hidden.bs.toast`). Tienes que llamar manualmente a este método si asignaste `autohide` en `false`.

```js
toast.hide()
```

#### dispose

Oculta el toast de un elemento. Tu toast permanecerá en el DOM pero ya no se mostrará.

```js
toast.dispose()
```

#### getInstance

Método *estático* que te permite obtener la instancia de toast asociada con un elemento DOM

```js
var myToastEl = document.getElementById('myToastEl')
var myToast = bootstrap.Toast.getInstance(myToastEl) // Devuelve una instancia de toast Bootstrap
```

#### getOrCreateInstance

Método *estático* que te permite obtener la instancia de toast asociada con un elemento DOM, o crear uno nuevo en caso de que no se haya inicializado

```js
var myToastEl = document.getElementById('myToastEl')
var myToast = bootstrap.Toast.getOrCreateInstance(myToastEl) // Devuelve una instancia de toast Bootstrap
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
      <td><code>show.bs.toast</code></td>
      <td>Este evento se activa inmediatamente cuando se llama al método de instancia <code>show</code>.</td>
    </tr>
    <tr>
      <td><code>shown.bs.toast</code></td>
      <td>Este evento se activa cuando el usuario ya puede ver el toast.</td>
    </tr>
    <tr>
      <td><code>hide.bs.toast</code></td>
      <td>Este evento se activa inmediatamente cuando se llama al método de instancia <code>hide</code>.</td>
    </tr>
    <tr>
      <td><code>hidden.bs.toast</code></td>
      <td>Este evento se activa cuando el toast ha terminado de ocultarse al usuario.</td>
    </tr>
  </tbody>
</table>

```js
var myToastEl = document.getElementById('myToast')
myToastEl.addEventListener('hidden.bs.toast', function () {
  // hacer algo...
})
```
