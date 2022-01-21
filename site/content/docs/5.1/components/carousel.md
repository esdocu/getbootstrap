---
layout: docs
title: Carousel
description: Un componente de presentación de diapositivas para recorrer elementos (imágenes o diapositivas de texto) como un carrusel.
group: components
toc: true
---

## Cómo funciona

El carrusel es una presentación de diapositivas para recorrer una serie de contenido, creado con transformaciones CSS 3D y un poco de JavaScript. Funciona con una serie de imágenes, texto o marcas personalizadas. También incluye soporte para controles e indicadores anteriores/siguientes.

En los navegadores donde la [API de visibilidad de página](https://www.w3.org/TR/page-visibility/) es compatible, el carrusel evitará el deslizamiento cuando la página web no esté visible para el usuario (como cuando la pestaña del navegador está inactiva, la ventana del navegador está minimizada, etc.).

{{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}}

Ten en cuenta que los carruseles anidados no son compatibles y, por lo general, los carruseles no cumplen con los estándares de accesibilidad.

## Ejemplo

Los carruseles no normalizan automáticamente las dimensiones de las diapositivas. Como tal, es posible que debas usar utilidades adicionales o estilos personalizados para dimensionar el contenido de manera adecuada. Si bien los carruseles admiten controles e indicadores anteriores/siguientes, no se requieren explícitamente. Agrega y personaliza como mejor te parezca.

**La clase `.active` debe agregarse a una de las diapositivas**, de lo contrario, el carrusel no será visible. También asegúrate de configurar un `id` único en el `.carrusel` para controles opcionales, especialmente si estás utilizando varios carruseles en una sola página. Los elementos de control e indicadores deben tener un atributo `data-bs-target` (o `href` para enlaces) que coincida con el `id` del elemento `.carousel`.

### Solo slides

Aquí hay un carrusel solo con diapositivas. Ten en cuenta la presencia de `.d-block` y `.w-100` en las imágenes del carrusel para evitar la alineación de imágenes predeterminada del navegador.

{{< example >}}
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="Primer slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Segundo slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Tercer slide" >}}
    </div>
  </div>
</div>
{{< /example >}}

### Con controles

Agreguemos los controles anterior y siguiente. Recomendamos usar elementos `<button>`, pero también puedes usar elementos `<a>` con `role="button"`.

{{< example >}}
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="Primer slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Segundo slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Tercer slide" >}}
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Anterior</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Siguiente</span>
  </button>
</div>
{{< /example >}}

### Con indicadores

También puedes agregar los indicadores al carrusel, junto con los controles.

{{< example >}}
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="Primer slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Segundo slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Tercer slide" >}}
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Anterior</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Siguiente</span>
  </button>
</div>
{{< /example >}}

### Con subtítulos

Agrega subtítulos a tus diapositivas fácilmente con el elemento `.carousel-caption` dentro de cualquier `.carousel-item`. Se pueden ocultar fácilmente en viewports más pequeños, como se muestra a continuación, con las [utilidades de visualización]({{< docsref "/utilities/display" >}}) opcionales. Los ocultamos inicialmente con `.d-none` y los recuperamos en dispositivos de tamaño mediano con `.d-md-block`.

{{< example >}}
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="Primer slide" >}}
      <div class="carousel-caption d-none d-md-block">
        <h5>Etiqueta de la primera diapositiva</h5>
        <p>Algún contenido placeholder representativo para la primera diapositiva.</p>
      </div>
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Segundo slide" >}}
      <div class="carousel-caption d-none d-md-block">
        <h5>Etiqueta de la segunda diapositiva</h5>
        <p>Algún contenido placeholder representativo para la segunda diapositiva.</p>
      </div>
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Tercer slide" >}}
      <div class="carousel-caption d-none d-md-block">
        <h5>Etiqueta de la tercera diapositiva</h5>
        <p>Algún contenido placeholder representativo para la tercera diapositiva.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Anterior</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Siguiente</span>
  </button>
</div>
{{< /example >}}

### Transición de fundido

Agrega `.carousel-fade` a tu carrusel para animar las diapositivas con una transición de fundido en lugar de una diapositiva. Dependiendo del contenido de tu carrusel (por ejemplo, diapositivas de solo texto), es posible que desees agregar `.bg-body` o algún CSS personalizado a los `.carousel-item`s para un fundido cruzado adecuado.

{{< example >}}
<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="Primer slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Segundo slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Tercer slide" >}}
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Anterior</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Siguiente</span>
  </button>
</div>
{{< /example >}}

### Intervalo `.carousel-item` individual

Agrega `data-bs-interval=""` a `.carousel-item` para cambiar la cantidad de tiempo de retraso entre el ciclo automático al siguiente elemento.

{{< example >}}
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="Primer slide" >}}
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Segundo slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Tercer slide" >}}
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Anterior</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Siguiente</span>
  </button>
</div>
{{< /example >}}

### Desactivar deslizamiento táctil

Los carruseles admiten deslizar hacia la izquierda o hacia la derecha en dispositivos con pantalla táctil para moverse entre diapositivas. Esto se puede deshabilitar usando el atributo `data-bs-touch`. El siguiente ejemplo tampoco incluye el atributo `data-bs-ride` y tiene `data-bs-interval="false"`, por lo que no se reproduce automáticamente.

{{< example >}}
<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="Primer slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Segundo slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Tercer slide" >}}
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Anterior</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Siguiente</span>
  </button>
</div>
{{< /example >}}

## Variante dark

Agrega `.carousel-dark` a `.carousel` para obtener controles, indicadores y subtítulos más oscuros. Los controles se han invertido de su relleno blanco predeterminado con la propiedad CSS `filter`. Los subtítulos y los controles tienen variables Sass adicionales que personalizan el `color` y el `background-color`.

{{< example >}}
<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#aaa" background="#f5f5f5" text="Primer slide" >}}
      <div class="carousel-caption d-none d-md-block">
        <h5>Etiqueta de la primera diapositiva</h5>
        <p>Algún contenido placeholder representativo para la primera diapositiva.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#bbb" background="#eee" text="Segundo slide" >}}
      <div class="carousel-caption d-none d-md-block">
        <h5>Etiqueta de la segunda diapositiva</h5>
        <p>Algún contenido placeholder representativo para la segunda diapositiva.</p>
      </div>
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#999" background="#e5e5e5" text="Tercer slide" >}}
      <div class="carousel-caption d-none d-md-block">
        <h5>Etiqueta de la tercera diapositiva</h5>
        <p>Algún contenido placeholder representativo para la tercera diapositiva.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Anterior</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Siguiente</span>
  </button>
</div>
{{< /example >}}

## Transición personalizada

La duración de la transición de `.carousel-item` se puede cambiar con la variable Sass `$carousel-transition-duration` antes de compilar o estilos personalizados si estás utilizando el CSS compilado. Si se aplican varias transiciones, asegúrate de definir primero la transición de transformación (p. ej., `transition: transform 2s ease, opacity .5s ease-out`).

## Sass

### Variables

{{< scss-docs name="carousel-variables" file="scss/_variables.scss" >}}

## Uso

### A través de atributos de datos

Utiliza atributos de datos para controlar fácilmente la posición del carrusel. `data-bs-slide` acepta las palabras clave `prev` o `next`, que altera la posición de la diapositiva en relación con su posición actual. Alternativamente, usa `data-bs-slide-to` para pasar un índice de diapositiva al carrusel `data-bs-slide-to="2"`, que cambia la posición de la diapositiva a un índice particular que comienza con `0`.

El atributo `data-bs-ride="carousel"` se utiliza para marcar un carrusel como animado a partir de la carga de la página. Si no usas `data-bs-ride="carousel"` para inicializar tu carrusel, debes inicializarlo tú mismo. **No se puede usar en combinación con la inicialización explícita de JavaScript (redundante e innecesaria) del mismo carrusel.**

### A través de JavaScript

Llama al carousel manualmente con:

```js
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)
```

### Opciones

Las opciones se pueden pasar a través de atributos de datos o JavaScript. Para los atributos de datos, agrega el nombre de la opción a `data-bs-`, como en `data-bs-interval=""`.

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
      <td><code>interval</code></td>
      <td>number</td>
      <td><code>5000</code></td>
      <td>La cantidad de tiempo de retraso entre el ciclo automático de un elemento. Si es <code>false</code>, el carrusel no realizará un ciclo automáticamente.</td>
    </tr>
    <tr>
      <td><code>keyboard</code></td>
      <td>boolean</td>
      <td><code>true</code></td>
      <td>Si el carrusel debe reaccionar a los eventos del teclado.</td>
    </tr>
    <tr>
      <td><code>pause</code></td>
      <td>string | boolean</td>
      <td><code>'hover'</code></td>
      <td><p>Si se establece en <code>'hover'</code>, detiene el ciclo del carrusel en <code>mouseenter</code> y reanuda el ciclo del carrusel en <code>mouseleave</code>. Si se establece en <code>false</code>, pasar el cursor sobre el carrusel no lo pausará.</p>
      <p>En dispositivos táctiles, cuando se establece en <code>'hover'</code>, el ciclo se detendrá en <code>touchend</code> durante dos intervalos (una vez que el usuario termine de interactuar con el carrusel), antes reanudarse automáticamente. Ten en cuenta que esto se suma al comportamiento del mouse anterior.</p></td>
    </tr>
    <tr>
      <td><code>ride</code></td>
      <td>string | boolean</td>
      <td><code>false</code></td>
      <td>Reproduce automáticamente el carrusel después de que el usuario cicla manualmente el primer elemento. Si se establece en <code>'carousel'</code>, se reproduce automáticamente el carrusel al cargar.</td>
    </tr>
    <tr>
      <td><code>wrap</code></td>
      <td>boolean</td>
      <td><code>true</code></td>
      <td>Si el carrusel debe circular continuamente o tener paradas bruscas.</td>
    </tr>
    <tr>
      <td><code>touch</code></td>
      <td>boolean</td>
      <td><code>true</code></td>
      <td>Si el carrusel debe admitir interacciones de deslizamiento hacia la izquierda/derecha en dispositivos con pantalla táctil.</td>
    </tr>
  </tbody>
</table>

### Métodos

{{< callout danger >}}
{{< partial "callout-danger-async-methods.md" >}}
{{< /callout >}}

Puedes crear una instancia de carrusel con el constructor de carrusel, por ejemplo, para inicializar con opciones adicionales y comenzar a recorrer elementos:

```js
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
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
      <td><code>cycle</code></td>
      <td>Recorre los elementos del carrusel de izquierda a derecha.</td>
    </tr>
    <tr>
      <td><code>pause</code></td>
      <td>Evita que el carrusel recorra los elementos.</td>
    </tr>
    <tr>
      <td><code>prev</code></td>
      <td>Cicla al elemento anterior. <strong>Vuelve al punto de la llamada antes de que se haya mostrado el elemento anterior</strong> (por ejemplo, antes de que ocurra el evento <code>slid.bs.carousel</code>).</td>
    </tr>
    <tr>
      <td><code>next</code></td>
      <td>Cicla al siguiente elemento. <strong>Regresa al punto de la llamada antes de que se muestre el siguiente elemento</strong> (por ejemplo, antes de que ocurra el evento <code>slid.bs.carousel</code>).</td>
    </tr>
    <tr>
      <td><code>nextWhenVisible</code></td>
      <td>No cambia el carrusel al siguiente cuando la página no esté visible o el carrusel o su elemento padre no estén visibles. <strong>Vuelve al punto de la llamada antes de que se haya mostrado el elemento de destino</strong>
    </tr>
    <tr>
      <td><code>to</code></td>
      <td>Cicla el carrusel a un frame particular (iniciando en 0, similar a una matriz). <strong>Regresa al punto de la llamada antes de que se haya mostrado el elemento de destino</strong> (por ejemplo, antes de que ocurra el evento <code>slid.bs.carousel</code>).</td>
    </tr>
    <tr>
      <td><code>dispose</code></td>
      <td>Destruye el carrusel de un elemento. (Elimina los datos almacenados en el elemento DOM)</td>
    </tr>
    <tr>
      <td>
        <code>getInstance</code>
      </td>
      <td>
        Método estático que te permite obtener la instancia de carrusel asociada a un elemento DOM, puedes usarlo así: <code>bootstrap.Carousel.getInstance(element)</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>getOrCreateInstance</code>
      </td>
      <td>
        Método estático que devuelve una instancia de carrusel asociada a un elemento DOM o crea una nueva en caso de que no se haya inicializado.
        Puedes usarlo así: <code>bootstrap.Carousel.getOrCreateInstance(element)</code>
      </td>
    </tr>
  </tbody>
</table>

### Eventos

La clase de carrusel de Bootstrap expone dos eventos para conectarse a la funcionalidad del carrusel. Ambos eventos tienen las siguientes propiedades adicionales:

- `direction`: La dirección en la que se desliza el carrusel (ya sea `"left"` o `"right"`).
- `relatedTarget`: el elemento DOM que se desliza en su lugar como el elemento activo.
- `from`: el índice del elemento actual
- `to`: el índice del siguiente elemento

Todos los eventos del carrusel se activan en el propio carrusel (es decir, en `<div class="carousel">`).

<table class="table">
  <thead>
    <tr>
      <th style="width: 150px;">Tipo de evento</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>slide.bs.carousel</code></td>
      <td>Se activa inmediatamente cuando se invoca el método de instancia <code>slide</code>.</td>
    </tr>
    <tr>
      <td><code>slid.bs.carousel</code></td>
      <td>Se activa cuando el carrusel ha completado su transición de diapositivas.</td>
    </tr>
  </tbody>
</table>

```js
var myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.bs.carousel', function () {
  // hacer algo...
})
```
