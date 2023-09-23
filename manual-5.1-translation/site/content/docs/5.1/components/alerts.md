---
layout: docs
title: Alerts
description: Proporciona mensajes de retroalimentación contextuales para las acciones típicas de los usuarios con mensajes de alerta disponibles y flexibles.
group: components
toc: true
---

## Ejemplos

Las alertas están disponibles para cualquier longitud de texto, así como un botón de cierre opcional. Para un estilo adecuado, usa una de las ocho clases contextuales **obligatorias** (por ejemplo, `.alert-success`). Para el botón de cierre en línea, usa el [complemento JavaScript de alertas](#dismissing).

{{< example >}}
{{< alerts.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="alert alert-{{ .name }}" role="alert">
  Una simple alerta {{ .name }}: ¡échale un vistazo!
</div>{{- end -}}
{{< /alerts.inline >}}
{{< /example >}}

{{< callout info >}}
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}}

### Ejemplo en vivo

Haz clic en el botón a continuación para mostrar una alerta (oculta con estilos en línea para comenzar), luego deséchela (y destrúyala) con el botón de cierre incorporado.

{{< example >}}
<div id="liveAlertPlaceholder"></div>
<button type="button" class="btn btn-primary" id="liveAlertBtn">Mostrar alerta en vivo</button>
{{< /example >}}

Usamos el siguiente JavaScript para activar nuestra demostración de alerta en vivo:

```js
var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('Genial, activaste este mensaje de alerta.', 'success')
  })
}
```

### Color de enlace

Utiliza la clase de utilidad `.alert-link` para proporcionar rápidamente enlaces de colores coincidentes dentro de cualquier alerta.

{{< example >}}
{{< alerts.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="alert alert-{{ .name }}" role="alert">
  Una simple alerta {{ .name }} con <a href="#" class="alert-link">un enlace de ejemplo</a>. Dale un clic si quieres.
</div>{{ end -}}
{{< /alerts.inline >}}
{{< /example >}}

### Contenido adicional

Las alertas también pueden contener elementos HTML adicionales como encabezados, párrafos y divisores.

{{< example >}}
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">¡Bien hecho!</h4>
  <p>Oh, sí, leísto con éxito este importante mensaje de alerta. Este texto de ejemplo se extenderá un poco más para que puedas ver cómo funciona el espaciado dentro de una alerta con este tipo de contenido.</p>
  <hr>
  <p class="mb-0">Siempre que lo necesites, asegúrate de usar utilidades de margen para mantener las cosas ordenadas y ordenadas.</p>
</div>
{{< /example >}}

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

### Iconos

De manera similar, puedes usar [utilidades flexbox]({{< docsref "/utilities/flex" >}}) y [Bootstrap Icons]({{< param icons >}}) para crear alertas con íconos. Dependiendo de tus íconos y contenido, es posible que desees agregar más utilidades o estilos personalizados.

{{< example >}}
<div class="alert alert-primary d-flex align-items-center" role="alert">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg>
  <div>
    Un ejemplo de alerta con un icono
  </div>
</div>
{{< /example >}}

¿Necesitas más de un ícono para tus alertas? Considera usar más íconos de Bootstrap y hacer un sprite SVG local para hacer referencia fácilmente a los mismos íconos repetidamente.

{{< example >}}
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </symbol>
  <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>

<div class="alert alert-primary d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>
  <div>
    Un ejemplo de alerta con un icono
  </div>
</div>
<div class="alert alert-success d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
  <div>
    Un ejemplo de alerta success con un icono
  </div>
</div>
<div class="alert alert-warning d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
  <div>
    Un ejemplo de alerta warning con un icono
  </div>
</div>
<div class="alert alert-danger d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
  <div>
    Un ejemplo de alerta danger con un icono
  </div>
</div>
{{< /example >}}

### Descartar

Con el complemento JavaScript de alerta, es posible descartar cualquier alerta. Así es cómo:

- Asegúrate de haber cargado el complemento de alerta o el JavaScript de Bootstrap compilado.
- Agrega un [botón de cierre]({{< docsref "/components/close-button" >}}) y la clase `.alert-dismissible`, que agrega padding adicional a la derecha de la alerta y posiciona el botón de cierre.
- En el botón de cerrar, agrega el atributo `data-bs-dismiss="alert"`, que activa la funcionalidad de JavaScript. Asegúrate de usar el elemento `<button>` para un comportamiento adecuado en todos los dispositivos.
- Para animar alertas al descartarlas, asegúrate de agregar las clases `.fade` y `.show`.

Puedes ver esto en acción con una demostración en vivo:

{{< example >}}
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> Debes verificar algunos de esos campos a continuación.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
{{< /example >}}

{{< callout warning >}}
Cuando se descarta una alerta, el elemento se elimina por completo de la estructura de la página. Si un usuario desde el teclado descarta la alerta usando el botón de cerrar, su enfoque se perderá repentinamente y, según el navegador, se restablecerá al inicio de la página/documento. Por este motivo, recomendamos incluir JavaScript adicional que detecte el evento `closed.bs.alert` y programáticamente establecer `focus()` en la ubicación más adecuada de la página. Si planeas mover el foco a un elemento no interactivo que normalmente no recibe el foco, asegúrate de agregar `tabindex="-1"` al elemento.
{{< /callout >}}

## CSS

### Variables

<small class="d-inline-flex px-2 py-1 font-monospace text-muted border rounded-3">Added in v5.2.0</small>

Como parte del enfoque de variables CSS en evolución de Bootstrap, las alertas ahora usan variables CSS locales en `.alert` para mejorar la personalización en tiempo real. Los valores para las variables CSS se establecen a través de Sass, por lo que también se admite la personalización de Sass.

{{< scss-docs name="alert-css-vars" file="scss/_alert.scss" >}}

### Sass variables

{{< scss-docs name="alert-variables" file="scss/_variables.scss" >}}

### Sass mixin

Se usa en combinación con `$theme-colors` para crear clases de modificadores contextuales para nuestras alertas.

{{< scss-docs name="alert-variant-mixin" file="scss/mixins/_alert.scss" >}}

### Sass loop

Bucle que genera las clases modificadoras con el mixin `alert-variant()`.

{{< scss-docs name="alert-modifiers" file="scss/_alert.scss" >}}

{{< callout info >}}
{{< partial "maybe-interested-2.md" >}}
{{< /callout >}}

## Comportamiento de JavaScript

### Inicializar

Inicializar elementos como alertas

```js
var alertList = document.querySelectorAll('.alert')
var alerts = Array.prototype.slice.call(alertList).map(function (element) {
  return new bootstrap.Alert(element)
})
```

{{< callout info >}}
Con el único propósito de descartar una alerta, no es necesario inicializar el componente manualmente a través de la API de JS. Al hacer uso de `data-bs-dismiss="alert"`, el componente se inicializará automáticamente y se descartará correctamente.

Consulta la sección [triggers](#triggers) para obtener más detalles.
{{< /callout >}}

### Triggers

{{% js-dismiss "alert" %}}

**Ten en cuenta que cerrar una alerta la eliminará del DOM.**

### Métodos

<table class="table">
  <thead>
    <tr>
      <th>Método</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>close</code>
      </td>
      <td>
        Cierra una alerta eliminándola del DOM. Si las clases <code>.fade</code> y <code>.show</code> están presentes en el elemento, la alerta se desvanecerá antes de que se elimine.
      </td>
    </tr>
    <tr>
      <td>
        <code>dispose</code>
      </td>
      <td>
        Destruye la alerta de un elemento. (Elimina los datos almacenados en el elemento DOM)
      </td>
    </tr>
    <tr>
      <td>
        <code>getInstance</code>
      </td>
      <td>
        Método estático que te permite obtener la instancia de alerta asociada a un elemento DOM, puedes usarlo así: <code>bootstrap.Alert.getInstance(alert)</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>getOrCreateInstance</code>
      </td>
      <td>
        Método estático que devuelve una instancia de alerta asociada a un elemento DOM o crea una nueva en caso de que no haya sido inicializado.
        Puedes usarlo así: <code>bootstrap.Alert.getOrCreateInstance(element)</code>
      </td>
    </tr>
  </tbody>
</table>

```js
var alertNode = document.querySelector('.alert')
var alert = bootstrap.Alert.getInstance(alertNode)
alert.close()
```

{{< callout info >}}
{{< partial "maybe-interested-3.md" >}}
{{< /callout >}}

### Eventos

El complemento de alerta de Bootstrap expone algunos eventos para conectarse a la funcionalidad de alerta.

<table class="table">
  <thead>
    <tr>
      <th>Evento</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>close.bs.alert</code></td>
      <td>
        Se activa inmediatamente cuando se llama al método de instancia <code>close</code>.
      </td>
    </tr>
    <tr>
      <td><code>closed.bs.alert</code></td>
      <td>
        Se activa cuando se ha cerrado la alerta y se han completado las transiciones de CSS.
      </td>
    </tr>
  </tbody>
</table>

```js
var myAlert = document.getElementById('myAlert')
myAlert.addEventListener('closed.bs.alert', function () {
  // hacer algo, por ejemplo, mover explícitamente el foco al elemento más apropiado,
  // para que no se pierda/restablezca al inicio de la página
  // document.getElementById('...').focus()
})
```
