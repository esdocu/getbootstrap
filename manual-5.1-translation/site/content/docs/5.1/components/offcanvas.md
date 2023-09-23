---
layout: docs
title: Offcanvas
description: Crea barras de navegación laterales ocultas en tu proyecto, carritos de compras y más con algunas clases y nuestro complemento de JavaScript.
group: components
toc: true
---

## ¿Cómo funciona Offcanvas?

Offcanvas es un componente de barra lateral que se puede alternar usando JavaScript para que aparezca desde el borde izquierdo, derecho, superior o inferior del viewport. Los botones o enlaces se usan como activadores con atributos `data` que se usan para invocar nuestro JavaScript.

- Offcanvas comparte parte del mismo código JavaScript que los modals. Conceptualmente, son bastante similares, pero son complementos separados.
- Del mismo modo, algunas variables [source Sass](#sass) para estilos y dimensiones de offcanvas se heredan de las variables de modal.
- Cuando se muestra, offcanvas incluye un fondo predeterminado en el que se puede hacer clic para ocultar el offcanvas.
- Similar a los modals, solo se puede mostrar un lienzo a la vez.

**¡Cuidado!** Dada la forma en que CSS maneja las animaciones, no puedes usar `margin` o `translate` en un elemento `.offcanvas`. En su lugar, utiliza la clase como un elemento envolvente independiente.

{{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}}

## Ejemplos

### Componentes Offcanvas

A continuación se encuentra un ejemplo de offcanvas que se muestra de forma predeterminada (a través de `.show` en `.offcanvas`). Offcanvas incluye soporte para un encabezado con un botón de cierre y una clase *body* opcional para un `padding` inicial. Te sugerimos que incluyas encabezados con acciones de descarte (cierre) siempre que sea posible en tus offcanvas, o proporciona una acción de descarte explícita.

{{< example class="bd-example-offcanvas p-0 bg-light overflow-hidden" >}}
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    El contenido del offcanvas va aquí. Puedes colocar casi cualquier componente de Bootstrap o elementos personalizados.
  </div>
</div>
{{< /example >}}

### Demo en vivo

Usa los botones a continuación para mostrar y ocultar un elemento offcanvas a través de JavaScript que alterna la clase `.show` en un elemento con la clase `.offcanvas`.

- `.offcanvas` oculta el contenido (predeterminado)
- `.offcanvas.show` muestra el contenido

Puedes usar un enlace con el atributo `href` o un botón con el atributo `data-bs-target`. En ambos casos, se requiere `data-bs-toggle="offcanvas"`.

{{< example >}}
<a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  Enlace con href
</a>
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  Botón con data-bs-target
</button>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div class="">
      Algo de texto placeholder. En la vida real puedes tener los elementos que hayas elegido. Como texto, imágenes, listas, etc.
    </div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        Botón dropdown
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">Acción</a></li>
        <li><a class="dropdown-item" href="#">Otra acción</a></li>
        <li><a class="dropdown-item" href="#">Algo más aquí</a></li>
      </ul>
    </div>
  </div>
</div>
{{< /example >}}

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

## Colocación

No hay una ubicación predeterminada para los componentes offcanvas, por lo que debes agregar una de las clases modificadoras a continuación;

- `.offcanvas-start` coloca offcanvas a la izquierda del viewport (como se muestra arriba)
- `.offcanvas-end` coloca offcanvas a la derecha del viewport
- `.offcanvas-top` coloca offcanvas en la parte superior del viewport
- `.offcanvas-bottom` coloca offcanvas en la parte inferior del viewport

Prueba los ejemplos superior, derecho e inferior a continuación.

{{< example >}}
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle offcanvas superior</button>

<div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasTopLabel">Offcanvas superior</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</div>
{{< /example >}}

{{< example >}}
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle offcanvas derecho</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas derecho</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</div>
{{< /example >}}

{{< example >}}
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Toggle offcanvas inferior</button>

<div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas inferior</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body small">
    ...
  </div>
</div>
{{< /example >}}

## Backdrop

Desplazar el elemento `<body>` está deshabilitado cuando un offcanvas y su fondo están visibles. Utiliza el atributo `data-bs-scroll` para alternar el desplazamiento `<body>` y `data-bs-backdrop` para alternar el fondo.

{{< example >}}
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Habilitar el scrolling del body</button>
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">Habilitar backdrop (default)</button>
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Habilitar ambos scrolling & backdrop</button>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas con body scrolling</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Intenta desplazarte por el resto de la página para ver esta opción en acción.</p>
  </div>
</div>
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBackdropLabel">Offcanvas con backdrop</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>.....</p>
  </div>
</div>
<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop con scrolling</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Intenta desplazarte por el resto de la página para ver esta opción en acción.</p>
  </div>
</div>
{{< /example >}}

## Accesibilidad

Dado que el panel offcanvas es conceptualmente un cuadro de diálogo modal, asegúrate de agregar `aria-labelledby="..."`, que hace referencia al título offcanvas, a `.offcanvas`. Ten en cuenta que no necesitas agregar `role="dialog"` ya que ya lo agregamos a través de JavaScript.

{{< callout info >}}
{{< partial "maybe-interested-2.md" >}}
{{< /callout >}}

## Sass

### Variables

{{< scss-docs name="offcanvas-variables" file="scss/_variables.scss" >}}

## Uso

El complemento offcanvas utiliza algunas clases y atributos para manejar el trabajo pesado:

- `.offcanvas` oculta el contenido
- `.offcanvas.show` muestra el contenido
- `.offcanvas-start` oculta el offcanvas a la izquierda
- `.offcanvas-end` oculta el offcanvas a la derecha
- `.offcanvas-top` oculta el offcanvas en la parte superior
- `.offcanvas-bottom` oculta el offcanvas en la parte inferior

Agrega un botón de cierre con el atributo `data-bs-dismiss="offcanvas"`, que activa la funcionalidad de JavaScript. Asegúrate de usar el elemento `<button>` para un comportamiento adecuado en todos los dispositivos.

### A través de atributos de datos

#### Toggle

Agrega `data-bs-toggle="offcanvas"` y `data-bs-target` o `href` al elemento para asignar automáticamente el control de un elemento offcanvas. El atributo `data-bs-target` acepta un selector de CSS para aplicar el offcanvas. Asegúrate de agregar la clase `offcanvas` al elemento offcanvas. Si deseas que se abra por defecto, agrega la clase adicional `show`.

#### Descartar (cerrar)

{{% js-dismiss "offcanvas" %}}

{{< callout warning >}}
Si bien se admiten ambas formas de descartar un lienzo externo, ten en cuenta que descartar un lienzo externo desde fuera no coincide con [el patrón de diseño de diálogo modal WAI-ARIA](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal). Haz esto bajo tu propio riesgo.
{{< /callout >}}

### A través de JavaScript

Habilitar manualmente con:

```js
var offcanvasElementList = Array.prototype.slice.call(document.querySelectorAll('.offcanvas'))
var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
  return new bootstrap.Offcanvas(offcanvasEl)
})
```

### Opciones

Las opciones se pueden pasar a través de atributos de datos o JavaScript. Para los atributos de datos, agrega el nombre de la opción a `data-bs-`, como en `data-bs-backdrop=""`.

{{< bs-table "table" >}}
| Nombre | Tipo | Por defecto | Descripción |
| --- | --- | --- | --- |
| `backdrop` | boolean | `true` | Aplicar un fondo en el cuerpo mientras offcanvas está abierto |
| `keyboard` | boolean | `true` | Cierra el offcanvas cuando se presiona la tecla Escape. |
| `scroll` | boolean | `false` | Permitir el body scrolling mientras offcanvas está abierto |
{{< /bs-table >}}

### Métodos

{{< callout danger >}}
{{< partial "callout-danger-async-methods.md" >}}
{{< /callout >}}

Activa tu contenido como un elemento offcanvas. Acepta un `object` de opciones opcionales.

Puedes crear una instancia offcanvas con el constructor, por ejemplo:

```js
var myOffcanvas = document.getElementById('myOffcanvas')
var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas)
```



{{< bs-table "table" >}}
| Método | Descripción |
| --- | --- |
| `toggle` | Alterna un elemento offcanvas para que se muestre u oculte. **Regresa al punto de la llamada antes de que el elemento offcanvas se haya mostrado u ocultado** (es decir, antes de que ocurra el evento `shown.bs.offcanvas` o `hidden.bs.offcanvas`). |
| `show` | Muestra un elemento offcanvas. **Regresa al punto de la llamada antes de que se haya mostrado realmente el elemento offcanvas** (es decir, antes de que ocurra el evento `shown.bs.offcanvas`).|
| `hide` | Oculta un elemento offcanvas. **Regresa al punto de la llamada antes de que el elemento offcanvas se haya ocultado** (es decir, antes de que ocurra el evento `hidden.bs.offcanvas`).|
| `getInstance` | Método *estático* que te permite obtener la instancia del offcanvas asociado con un elemento DOM |
| `getOrCreateInstance` | Método *estático* que te permite obtener la instancia del offcanvas asociado con un elemento DOM, o crear una nueva en caso de que no se haya inicializado |
{{< /bs-table >}}

{{< callout info >}}
{{< partial "maybe-interested-3.md" >}}
{{< /callout >}}

### Eventos

La clase Bootstrap offcanvas expone algunos eventos para conectarse a la funcionalidad offcanvas.

{{< bs-table "table" >}}
| Tipo de evento | Descripción |
| --- | --- |
| `show.bs.offcanvas` | Este evento se activa inmediatamente cuando se llama al método de instancia `show`. |
| `shown.bs.offcanvas` | Este evento se activa cuando un elemento offcanvas se hace visible para el usuario (esperará a que se completen las transiciones de CSS). |
| `hide.bs.offcanvas` | Este evento se dispara inmediatamente cuando se llama al método `hide`. |
| `hidden.bs.offcanvas` | Este evento se activa cuando un elemento offcanvas se ha ocultado al usuario (esperará a que se completen las transiciones de CSS). |
{{< /bs-table >}}

```js
var myOffcanvas = document.getElementById('myOffcanvas')
myOffcanvas.addEventListener('hidden.bs.offcanvas', function () {
  // hacer algo...
})
```
