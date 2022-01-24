---
layout: docs
title: Modal
description: Usa el complemento modal de JavaScript de Bootstrap para agregar cuadros de diálogo a tu sitio para lightboxes, notificaciones de usuario o contenido completamente personalizado.
group: components
toc: true
---

## ¿Cómo funcionan los modals?

Antes de comenzar con el componente modal de Bootstrap, asegúrate de leer lo siguiente, ya que nuestras opciones de menú han cambiado recientemente.

- Los modales se construyen con HTML, CSS y JavaScript. Se colocan sobre todo lo demás en el documento y eliminan el desplazamiento del `<body>` para que el contenido modal se desplace en su lugar.
- Al hacer clic en el "backdrop (telón de fondo)", el modal se cerrará automáticamente.
- Bootstrap solo admite una ventana modal a la vez. Los modales anidados no son compatibles porque creemos que son experiencias de usuario deficientes.
- Los modales usan `position: fixed`, que a veces puede ser un poco particular sobre su representación. Siempre que sea posible, coloca tu HTML modal en una posición de nivel superior para evitar posibles interferencias de otros elementos. Es probable que tengas problemas al anidar un `.modal` dentro de otro elemento fixed.
- Una vez más, debido al `position: fixed`, existen algunas advertencias con el uso de modales en dispositivos móviles. [Consulta nuestros documentos de soporte del navegador]({{< docsref "/getting-started/browsers-devices#modals-and-dropdowns-on-mobile" >}}) para obtener más información.
- Debido a cómo HTML5 define su semántica, [el atributo HTML `autofocus`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autofocus) no tiene ningún efecto en modales Bootstrap. Para lograr el mismo efecto, usa JavaScript personalizado:

```js
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
```

{{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}}

Sigue leyendo para obtener demostraciones y pautas de uso.

## Ejemplos

### Componentes de modals

A continuación se muestra un ejemplo modal _static_ (lo que significa que su `position` y `display` han sido sobrescritas). Se incluyen el encabezado modal, el cuerpo modal (requerido para `padding`) y el pie de página modal (opcional). Te pedimos que incluyas encabezados modales con acciones de descarte (cierre) siempre que sea posible, o proporciones otra acción de descarte explícita.

<div class="bd-example bd-example-modal">
  <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Título del modal</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>El texto del cuerpo modal va aquí.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary">Guardar cambios</button>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Título del modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>El texto del cuerpo modal va aquí.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Guardar cambios</button>
      </div>
    </div>
  </div>
</div>
```

### Demostración en vivo

Lanza una demostración modal funcional haciendo clic en el botón a continuación. Se deslizará hacia abajo y se desvanecerá desde la parte superior de la página.

<div class="modal fade" id="exampleModalLive" tabindex="-1" aria-labelledby="exampleModalLiveLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLiveLabel">Título del modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Woo-hoo, ¡estás leyendo este texto en un modal!</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Guardar cambios</button>
      </div>
    </div>
  </div>
</div>

<div class="bd-example">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLive">
    Lanzar demo de modal
  </button>
</div>

```html
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Lanzar demo de modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Título del modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Guardar cambios</button>
      </div>
    </div>
  </div>
</div>
```

### Backdrop estático

Cuando el fondo se establece en *static*, el modal no se cerrará al hacer clic fuera de él. Haz clic en el botón de abajo para probarlo.

<div class="modal fade" id="staticBackdropLive" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLiveLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLiveLabel">Título del modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>No cerraré si haces clic fuera de mí. Ni siquiera intentes presionar la tecla de escape.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Comprendido</button>
      </div>
    </div>
  </div>
</div>

<div class="bd-example">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdropLive">
    Lanzar modal de fondo estático
  </button>
</div>

```html
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Lanzar modal de fondo estático
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Título del modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Comprendido</button>
      </div>
    </div>
  </div>
</div>
```

### Desplazamiento de contenido largo

Cuando los modales se vuelven demasiado largos para el viewport o el dispositivo del usuario, se desplazan independientemente de la página misma. Prueba la demostración a continuación para ver a qué nos referimos.

<div class="modal fade" id="exampleModalLong" tabindex="-1" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Título del modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style="min-height: 1500px">
        <p>Este es un contenido placeholder para mostrar el comportamiento de desplazamiento de los modales. En lugar de repetir el texto del modal, usamos un estilo en línea que establece una altura mínima, lo que extiende la longitud del modal general y demuestra el desplazamiento de desbordamiento. Cuando el contenido se vuelve más largo que la altura del viewport, el desplazamiento moverá el modal según sea necesario.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Guardar cambios</button>
      </div>
    </div>
  </div>
</div>

<div class="bd-example">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLong">
    Lanzar demo de modal
  </button>
</div>

También puedes crear un modal desplazable que permita desplazar el cuerpo modal agregando `.modal-dialog-scrollable` a `.modal-dialog`.

<div class="modal fade" id="exampleModalScrollable" tabindex="-1" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalScrollableTitle">Título del modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Este es un contenido placeholder para mostrar el comportamiento de desplazamiento de los modales. Usamos saltos de línea repetidos para demostrar cómo el contenido puede exceder la altura interna mínima, mostrando así el desplazamiento interno. Cuando el contenido se vuelve más largo que la altura máxima predefinida del modal, el contenido se recortará y te podrás desplazar dentro del modal.</p>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <p>Este contenido debería aparecer en la parte inferior después de desplazarte.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Guardar cambios</button>
      </div>
    </div>
  </div>
</div>

<div class="bd-example">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalScrollable">
    Lanzar demo de modal
  </button>
</div>

```html
<!-- Scrollable modal -->
<div class="modal-dialog modal-dialog-scrollable">
  ...
</div>
```

### Centrado verticalmente

Agrega `.modal-dialog-centered` a `.modal-dialog` para centrar verticalmente el modal.

<div class="modal fade" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Título del modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Este es un modal centrado verticalmente.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Guardar cambios</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalCenteredScrollable" tabindex="-1" aria-labelledby="exampleModalCenteredScrollableTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenteredScrollableTitle">Título del modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Este es un contenido placeholder para mostrar un modal centrado verticalmente. Hemos agregado una copia adicional aquí para mostrar cómo funciona el centrado vertical del modal cuando se combina con modales desplazables. También usamos algunos saltos de línea repetidos para extender rápidamente la altura del contenido, lo que activa el desplazamiento. Cuando el contenido se vuelve más largo que la altura máxima predefinida de modal, el contenido se recortará y se podrá desplazar dentro del modal.</p>
        <br><br><br><br><br><br><br><br><br><br>
        <p>Justo así.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Guardar cambios</button>
      </div>
    </div>
  </div>
</div>

<div class="bd-example">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
    Modal centrado verticalmente
  </button>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable">
    Modal desplazable centrado verticalmente
  </button>
</div>

```html
<!-- Modal centrado verticalmente -->
<div class="modal-dialog modal-dialog-centered">
  ...
</div>

<!-- Modal desplazable centrado verticalmente -->
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
  ...
</div>
```

### Tooltips y popovers

[Tooltips]({{< docsref "/components/tooltips" >}}) y [popovers]({{< docsref "/components/popovers" >}}) se pueden colocar dentro de los modales según sea necesario. Cuando los modales se cierran, todos los tooltips y popovers también se descartan automáticamente.

<div class="modal fade" id="exampleModalPopovers" tabindex="-1" aria-labelledby="exampleModalPopoversLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalPopoversLabel">Título del modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5>Popover en un modal</h5>
        <p>Este <a href="#" role="button" class="btn btn-secondary popover-test" title="Popover title" data-bs-content="El contenido del cuerpo del  popover se establece en este atributo." data-bs-container="#exampleModalPopovers">botón</a> muestra un popover al hacer clic en él.</p>
        <hr>
        <h5>Tooltips en un modal</h5>
        <p><a href="#" class="tooltip-test" title="Tooltip" data-bs-container="#exampleModalPopovers">Este enlace</a> y <a href="#" class="tooltip-test" title="Tooltip" data-bs-container="#exampleModalPopovers">este enlace</a> tienen tooltips en su estado hover.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Guardar cambios</button>
      </div>
    </div>
  </div>
</div>

<div class="bd-example">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalPopovers">
    Lanzar demo de modal
  </button>
</div>

```html
<div class="modal-body">
  <h5>Popover en un modal</h5>
  <p>Este <a href="#" role="button" class="btn btn-secondary popover-test" title="Popover title" data-bs-content="El contenido del cuerpo del  popover se establece en este atributo." data-bs-container="#exampleModalPopovers">botón</a> muestra un popover al hacer clic en él.</p>
  <hr>
  <h5>Tooltips en un modal</h5>
  <p><a href="#" class="tooltip-test" title="Tooltip" data-bs-container="#exampleModalPopovers">Este enlace</a> y <a href="#" class="tooltip-test" title="Tooltip" data-bs-container="#exampleModalPopovers">este enlace</a> tienen tooltips en su estado hover.</p>
</div>
```

### Uso de la cuadrícula

Utiliza el sistema de cuadrícula Bootstrap dentro de un modal anidando `.container-fluid` dentro de `.modal-body`. Luego, usa las clases normales del sistema de cuadrícula como lo harías en cualquier otro lugar.

<div class="modal fade" id="gridSystemModal" tabindex="-1" aria-labelledby="gridModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="gridModalLabel">Cuadrícula en modals</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="container-fluid bd-example-row">
          <div class="row">
            <div class="col-md-4">.col-md-4</div>
            <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
          </div>
          <div class="row">
            <div class="col-md-3 ms-auto">.col-md-3 .ms-auto</div>
            <div class="col-md-2 ms-auto">.col-md-2 .ms-auto</div>
          </div>
          <div class="row">
            <div class="col-md-6 ms-auto">.col-md-6 .ms-auto</div>
          </div>
          <div class="row">
            <div class="col-sm-9">
              Nivel 1: .col-sm-9
              <div class="row">
                <div class="col-8 col-sm-6">
                  Nivel 2: .col-8 .col-sm-6
                </div>
                <div class="col-4 col-sm-6">
                  Nivel 2: .col-4 .col-sm-6
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Guardar cambios</button>
      </div>
    </div>
  </div>
</div>

<div class="bd-example">
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#gridSystemModal">
  Lanzar demo de modal
</button>
</div>

```html
<div class="modal-body">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4">.col-md-4</div>
      <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
    </div>
    <div class="row">
      <div class="col-md-3 ms-auto">.col-md-3 .ms-auto</div>
      <div class="col-md-2 ms-auto">.col-md-2 .ms-auto</div>
    </div>
    <div class="row">
      <div class="col-md-6 ms-auto">.col-md-6 .ms-auto</div>
    </div>
    <div class="row">
      <div class="col-sm-9">
        Nivel 1: .col-sm-9
        <div class="row">
          <div class="col-8 col-sm-6">
            Nivel 2: .col-8 .col-sm-6
          </div>
          <div class="col-4 col-sm-6">
            Nivel 2: .col-4 .col-sm-6
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Contenido modal variable

¿Tienes un montón de botones que activan el mismo modal con contenidos ligeramente diferentes? Usa `event.relatedTarget` y [atributos HTML `data-bs-*`](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) para variar el contenido del modal según en qué botón se hizo clic.

A continuación se muestra una demostración en vivo seguida de un ejemplo de HTML y JavaScript. Para obtener más información, [lee los documentos de eventos modales](#events) para obtener detalles sobre `relatedTarget`.

{{< example >}}
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Abrir modal para @mdo</button>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Abrir modal para @fat</button>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Abrir modal para @getbootstrap</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Nuevo mensaje</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Destinatario:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Mensaje:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Enviar mensaje</button>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

```js
var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Botón que activó el modal
  var button = event.relatedTarget
  // Extraer información de los atributos data-bs-*
  var recipient = button.getAttribute('data-bs-whatever')
  // Si es necesario, puedes iniciar una solicitud AJAX aquí
  // y luego realiza la actualización en una devolución de llamada.
  //
  // Actualizar el contenido del modal.
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = 'Nuevo mensaje para ' + recipient
  modalBodyInput.value = recipient
})
```

### Alternar entre modals

Alterna entre múltiples modales con una colocación inteligente de los atributos `data-bs-target` y `data-bs-toggle`. Por ejemplo, podrías alternar un modal de restablecimiento de contraseña desde un modal de inicio de sesión ya abierto. **Ten en cuenta que no se pueden abrir múltiples modales al mismo tiempo**; este método simplemente alterna entre dos modales separados.

{{< example >}}
<div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Muestra un segundo modal y oculta este con el botón de abajo.
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Abrir segundo modal</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Oculta este modal y muestra el primero con el botón de abajo.
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Volver al primero</button>
      </div>
    </div>
  </div>
</div>
<a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Abrir el primer modal</a>
{{< /example >}}

### Cambiar la animación

La variable `$modal-fade-transform` determina el estado de transformación de `.modal-dialog` antes de la animación de aparición gradual del modal, la variable `$modal-show-transform` determina la transformación de `.modal-dialog` en el final de la animación fade-in del modal.

Si deseas, por ejemplo, una animación de acercamiento, puede establecer `$modal-fade-transform: scale(.8)`.

### Eliminar la animación

Para modales que simplemente aparecen en lugar de aparecer gradualmente, elimina la clase `.fade` de tu marcado modal.

```html
<div class="modal" tabindex="-1" aria-labelledby="..." aria-hidden="true">
  ...
</div>
```

### Alturas dinámicas

Si la altura de un modal cambia mientras está abierto, debes llamar a `myModal.handleUpdate()` para reajustar la posición del modal en caso de que aparezca una barra de desplazamiento.

### Accesibilidad

Asegúrate de agregar `aria-labelledby="..."` a `.modal`, haciendo referencia al título modal. Además, puedes dar una descripción de tu diálogo modal con `aria-describedby` en `.modal`. Ten en cuenta que no necesitas agregar `role="dialog"` ya que ya lo agregamos a través de JavaScript.

### Incrustación de videos de YouTube

Incrustar videos de YouTube en modales requiere JavaScript adicional que no está en Bootstrap para detener automáticamente la reproducción y más. [Lee esta útil publicación de Stack Overflow](https://stackoverflow.com/questions/18622508/bootstrap-3-and-youtube-in-modal) para obtener más información.

## Tamaños opcionales

Los modales tienen tres tamaños opcionales, disponibles a través de clases de modificadores que se colocarán en un `.modal-dialog`. Estos tamaños se activan en ciertos breakpoints para evitar las barras de desplazamiento horizontales en viewports más estrechos.

<table class="table">
  <thead>
    <tr>
      <th>Tamaño</th>
      <th>Clase</th>
      <th>Modal max-width</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Small</td>
      <td><code>.modal-sm</code></td>
      <td><code>300px</code></td>
    </tr>
    <tr>
      <td>Por defecto</td>
      <td class="text-muted">None</td>
      <td><code>500px</code></td>
    </tr>
    <tr>
      <td>Large</td>
      <td><code>.modal-lg</code></td>
      <td><code>800px</code></td>
    </tr>
    <tr>
      <td>Extra large</td>
      <td><code>.modal-xl</code></td>
      <td><code>1140px</code></td>
    </tr>
  </tbody>
</table>

Nuestro modal predeterminado sin clase modificadora constituye el modal de tamaño "medium".

<div class="bd-example">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalXl">Extra large modal</button>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLg">Large modal</button>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalSm">Small modal</button>
</div>

```html
<div class="modal-dialog modal-xl">...</div>
<div class="modal-dialog modal-lg">...</div>
<div class="modal-dialog modal-sm">...</div>
```

<div class="modal fade" id="exampleModalXl" tabindex="-1" aria-labelledby="exampleModalXlLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title h4" id="exampleModalXlLabel">Extra large modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalLg" tabindex="-1" aria-labelledby="exampleModalLgLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title h4" id="exampleModalLgLabel">Large modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalSm" tabindex="-1" aria-labelledby="exampleModalSmLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title h4" id="exampleModalSmLabel">Small modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
    </div>
  </div>
</div>

## Modals de pantalla completa

Otra posible sobrescritura es la opción de mostrar un modal que cubra el viewport del usuario, disponible a través de clases modificadoras que se colocan en un `.modal-dialog`.

<table class="table">
  <thead>
    <tr>
      <th>Clase</th>
      <th>Disponibilidad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.modal-fullscreen</code></td>
      <td>Siempre</td>
    </tr>
    <tr>
      <td><code>.modal-fullscreen-sm-down</code></td>
      <td>Debajo de <code>576px</code></td>
    </tr>
    <tr>
      <td><code>.modal-fullscreen-md-down</code></td>
      <td>Debajo de <code>768px</code></td>
    </tr>
    <tr>
      <td><code>.modal-fullscreen-lg-down</code></td>
      <td>Debajo de <code>992px</code></td>
    </tr>
    <tr>
      <td><code>.modal-fullscreen-xl-down</code></td>
      <td>Debajo de <code>1200px</code></td>
    </tr>
    <tr>
      <td><code>.modal-fullscreen-xxl-down</code></td>
      <td>Debajo de <code>1400px</code></td>
    </tr>
  </tbody>
</table>

<div class="bd-example">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreen">Full screen</button>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreenSm">Full screen debajo de sm</button>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreenMd">Full screen debajo de md</button>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreenLg">Full screen debajo de lg</button>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreenXl">Full screen debajo de xl</button>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreenXxl">Full screen debajo de xxl</button>
</div>

```html
<!-- Full screen modal -->
<div class="modal-dialog modal-fullscreen-sm-down">
  ...
</div>
```

<div class="modal fade" id="exampleModalFullscreen" tabindex="-1" aria-labelledby="exampleModalFullscreenLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title h4" id="exampleModalFullscreenLabel">Full screen modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalFullscreenSm" tabindex="-1" aria-labelledby="exampleModalFullscreenSmLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen-sm-down">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title h4" id="exampleModalFullscreenSmLabel">Full screen debajo de sm</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalFullscreenMd" tabindex="-1" aria-labelledby="exampleModalFullscreenMdLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen-md-down">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title h4" id="exampleModalFullscreenMdLabel">Full screen debajo de md</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalFullscreenLg" tabindex="-1" aria-labelledby="exampleModalFullscreenLgLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen-lg-down">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title h4" id="exampleModalFullscreenLgLabel">Full screen debajo de lg</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalFullscreenXl" tabindex="-1" aria-labelledby="exampleModalFullscreenXlLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen-xl-down">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title h4" id="exampleModalFullscreenXlLabel">Full screen debajo de xl</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalFullscreenXxl" tabindex="-1" aria-labelledby="exampleModalFullscreenXxlLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen-xxl-down">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title h4" id="exampleModalFullscreenXxlLabel">Full screen debajo de xxl</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>

## Sass

### Variables

{{< scss-docs name="modal-variables" file="scss/_variables.scss" >}}

### Loop

[Los modales de pantalla completa responsive](#fullscreen-modal) se generan a través del mapa `$breakpoints` y un bucle en `scss/_modal.scss`.

{{< scss-docs name="modal-fullscreen-loop" file="scss/_modal.scss" >}}

## Uso

El complemento modal alterna su contenido oculto a pedido, a través de atributos de datos o JavaScript. También sobrescribe el comportamiento **hover** predeterminado y genera un `.modal-backdrop` para proporcionar un área de clic para descartar los modales mostrados al hacer clic fuera del modal.

### A través de atributos de datos

#### Toggle

Activa un modal sin escribir JavaScript. Establece `data-bs-toggle="modal"` en un elemento controlador, como un botón, junto con `data-bs-target="#foo"` o `href="#foo"` para apuntar a un modal específico para alternar.

```html
<button type="button" data-bs-toggle="modal" data-bs-target="#myModal">Lanzar modal</button>
```

#### Descartar (cerrar)

{{% js-dismiss "modal" %}}

{{< callout warning >}}
Si bien se admiten ambas formas de descartar un modal, ten en cuenta que descartar un modal desde fuera no coincide con [el patrón de diseño de diálogo modal WAI-ARIA](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal). Haz esto bajo tu propio riesgo.
{{< /callout >}}

### A través de JavaScript

Crea un modal con una sola línea de JavaScript:

```js
var myModal = new bootstrap.Modal(document.getElementById('myModal'), options)
```

### Opciones

Las opciones se pueden pasar a través de atributos de datos o JavaScript. Para los atributos de datos, agrega el nombre de la opción a `data-bs-`, como en `data-bs-backdrop=""`.

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
      <td><code>backdrop</code></td>
      <td>boolean o el string <code>'static'</code></td>
      <td><code>true</code></td>
      <td>Incluye un telón de fondo modal. Alternativamente, especifica <code>static</code> para un fondo que no cierre el modal al hacer clic.</td>
    </tr>
    <tr>
      <td><code>keyboard</code></td>
      <td>boolean</td>
      <td><code>true</code></td>
      <td>Cierra el modal cuando se presiona la tecla escape</td>
    </tr>
    <tr>
      <td><code>focus</code></td>
      <td>boolean</td>
      <td><code>true</code></td>
      <td>Pone el foco en el modal cuando se inicializa.</td>
    </tr>
  </tbody>
</table>

### Métodos

{{< callout danger >}}
{{< partial "callout-danger-async-methods.md" >}}
{{< /callout >}}

#### Opciones de entrada

Activa tu contenido como modal. Acepta un `object` de opciones opcionales.

```js
var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
  keyboard: false
})
```

#### toggle

Cambia manualmente un modal. **Regresa al punto de la llamada antes de que el modal se haya mostrado u ocultado** (es decir, antes de que ocurra el evento `shown.bs.modal` o `hidden.bs.modal`).

```js
myModal.toggle()
```

#### show

Abre manualmente un modal. **Regresa al punto de la llamada antes de que se haya mostrado realmente el modal** (es decir, antes de que ocurra el evento `shown.bs.modal`).

```js
myModal.show()
```

Además, puedes pasar un elemento DOM como un argumento que se puede recibir en los eventos modales (como la propiedad `relatedTarget`).

```js
var modalToggle = document.getElementById('toggleMyModal') // relatedTarget
myModal.show(modalToggle)
```

#### hide

Oculta manualmente un modal. **Regresa al punto de la llamada antes de que se haya ocultado realmente el modal** (es decir, antes de que ocurra el evento `hidden.bs.modal`).

```js
myModal.hide()
```

#### handleUpdate

Reajusta manualmente la posición del modal si la altura de un modal cambia mientras está abierto (es decir, en caso de que aparezca una barra de desplazamiento).

```js
myModal.handleUpdate()
```

#### dispose

Destruye el modal de un elemento. (Elimina los datos almacenados en el elemento DOM)

```js
myModal.dispose()
```

#### getInstance

Método *estático* que te permite obtener la instancia modal asociada con un elemento DOM

```js
var myModalEl = document.getElementById('myModal')
var modal = bootstrap.Modal.getInstance(myModalEl) // Returns a Bootstrap modal instance
```

#### getOrCreateInstance

Método *estático* que te permite obtener la instancia modal asociada con un elemento DOM, o crear una nueva en caso de que no se haya inicializado

```js
var myModalEl = document.querySelector('#myModal')
var modal = bootstrap.Modal.getOrCreateInstance(myModalEl) // Returns a Bootstrap modal instance
```

### Eventos

La clase modal de Bootstrap expone algunos eventos para conectarse a la funcionalidad modal. Todos los eventos modales se activan en el propio modal (es decir, en `<div class="modal">`).


<table class="table">
  <thead>
    <tr>
      <th style="width: 150px;">Tipo de evento</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>show.bs.modal</code></td>
      <td>Este evento se activa inmediatamente cuando se llama al método de instancia <code>show</code>. Si es causado por un clic, el elemento en el que se hizo clic estará disponible como la propiedad <code>relatedTarget</code> del evento.</td>
    </tr>
    <tr>
      <td><code>shown.bs.modal</code></td>
      <td>Este evento se activa cuando el modal se ha hecho visible para el usuario (esperará a que se completen las transiciones de CSS). Si es causado por un clic, el elemento en el que se hizo clic estará disponible como la propiedad <code>relatedTarget</code> del evento.</td>
    </tr>
    <tr>
      <td><code>hide.bs.modal</code></td>
      <td>Este evento se activa inmediatamente cuando se llama al método de instancia <code>hide</code>.</td>
    </tr>
    <tr>
      <td><code>hidden.bs.modal</code></td>
      <td>Este evento se activa cuando el modal ha terminado de ocultarse para el usuario (esperará a que se completen las transiciones de CSS).</td>
    </tr>
    <tr>
      <td><code>hidePrevented.bs.modal</code></td>
      <td>Este evento se activa cuando se muestra el modal, su fondo es <code>static</code> y se hace clic fuera del modal o se presiona la tecla escape con la opción de teclado o <code>data-bs-keyboard</code> establecido en <code>false</code>.</td>
    </tr>
  </tbody>
</table>

```js
var myModalEl = document.getElementById('myModal')
myModalEl.addEventListener('hidden.bs.modal', function (event) {
  // hacer algo...
})
```
