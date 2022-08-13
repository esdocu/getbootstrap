---
layout: docs
title: Scrollspy
description: Actualiza automáticamente la navegación de Bootstrap o enumera los componentes de un grupo en función de la posición de desplazamiento para indicar qué enlace está actualmente activo en el viewport.
group: components
toc: true
---

## ¿Cómo funciona Scrollspy?

Scrollspy tiene algunos requisitos para funcionar correctamente:

- Debe usarse en un [componente de navegación]({{< docsref "/components/navs-tabs" >}}) o [list group]({{< docsref "/components/list-group" >}}) de Bootstrap.
- Scrollspy requiere `position: relative;` en el elemento que estás espiando, generalmente el `<body>`.
- Se requieren enlaces (`<a>`) y deben apuntar a un elemento con ese `id`.

Cuando se implemente con éxito, tu grupo de navegación o lista se actualizará en consecuencia, moviendo la clase `.active` de un elemento al siguiente en función de tus objetivos asociados.

{{< callout >}}
### Contenedores desplazables y acceso mediante teclado

Si estás creando un contenedor desplazable (que no sea `<body>`), asegúrate de tener un `height` y `overflow-y: scroll;` aplicado, junto con `tabindex="0"` para garantizar el acceso al teclado.
{{< /callout >}}

## Ejemplo en navbar

Desplázate por el área debajo de la barra de navegación y observa cómo cambia la clase activa. Los elementos desplegables también se resaltarán.

<div class="bd-example">
  <nav id="navbar-example2" class="navbar navbar-light bg-light px-3">
    <a class="navbar-brand" href="#">Navbar</a>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <a class="nav-link" href="#scrollspyHeading1">Primero</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#scrollspyHeading2">Segundo</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#scrollspyHeading3">Tercero</a></li>
          <li><a class="dropdown-item" href="#scrollspyHeading4">Cuarto</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#scrollspyHeading5">Quinto</a></li>
        </ul>
      </li>
    </ul>
  </nav>
  <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
    <h4 id="scrollspyHeading1">Primer encabezado</h4>
    <p>Este es un contenido placeholder para la página Scrollspy. Ten en cuenta que a medida que te desplazas hacia abajo en la página, se resalta el enlace de navegación correspondiente. Se repite en todo el ejemplo del componente. Seguimos agregando más copias de ejemplo aquí para enfatizar el desplazamiento y el resaltado.</p>
    <h4 id="scrollspyHeading2">Segundo encabezado</h4>
    <p>Este es un contenido placeholder para la página Scrollspy. Ten en cuenta que a medida que te desplazas hacia abajo en la página, se resalta el enlace de navegación correspondiente. Se repite en todo el ejemplo del componente. Seguimos agregando más copias de ejemplo aquí para enfatizar el desplazamiento y el resaltado.</p>
    <h4 id="scrollspyHeading3">Tercer encabezado</h4>
    <p>Este es un contenido placeholder para la página Scrollspy. Ten en cuenta que a medida que te desplazas hacia abajo en la página, se resalta el enlace de navegación correspondiente. Se repite en todo el ejemplo del componente. Seguimos agregando más copias de ejemplo aquí para enfatizar el desplazamiento y el resaltado.</p>
    <h4 id="scrollspyHeading4">Cuarto encabezado</h4>
    <p>Este es un contenido placeholder para la página Scrollspy. Ten en cuenta que a medida que te desplazas hacia abajo en la página, se resalta el enlace de navegación correspondiente. Se repite en todo el ejemplo del componente. Seguimos agregando más copias de ejemplo aquí para enfatizar el desplazamiento y el resaltado.</p>
    <h4 id="scrollspyHeading5">Quinto encabezado</h4>
    <p>Este es un contenido placeholder para la página Scrollspy. Ten en cuenta que a medida que te desplazas hacia abajo en la página, se resalta el enlace de navegación correspondiente. Se repite en todo el ejemplo del componente. Seguimos agregando más copias de ejemplo aquí para enfatizar el desplazamiento y el resaltado.</p>
  </div>
</div>

```html
<nav id="navbar-example2" class="navbar navbar-light bg-light px-3">
  <a class="navbar-brand" href="#">Navbar</a>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" href="#scrollspyHeading1">Primero</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#scrollspyHeading2">Segundo</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#scrollspyHeading3">Tercero</a></li>
        <li><a class="dropdown-item" href="#scrollspyHeading4">Cuarto</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#scrollspyHeading5">Quinto</a></li>
      </ul>
    </li>
  </ul>
</nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
  <h4 id="scrollspyHeading1">Primer encabezado</h4>
  <p>...</p>
  <h4 id="scrollspyHeading2">Segundo encabezado</h4>
  <p>...</p>
  <h4 id="scrollspyHeading3">Tercer encabezado</h4>
  <p>...</p>
  <h4 id="scrollspyHeading4">Cuarto encabezado</h4>
  <p>...</p>
  <h4 id="scrollspyHeading5">Quinto encabezado</h4>
  <p>...</p>
</div>
```

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

## Ejemplo con navegación anidada

Scrollspy también funciona con `.nav`s anidados. Si un `.nav` anidado es `.active`, sus padres también serán `.active`. Desplázate por el área junto a la barra de navegación y observa cómo cambia la clase activa.

<div class="bd-example">
  <div class="row">
    <div class="col-4">
      <nav id="navbar-example3" class="navbar navbar-light bg-light flex-column align-items-stretch p-3">
        <a class="navbar-brand" href="#">Navbar</a>
        <nav class="nav nav-pills flex-column">
          <a class="nav-link" href="#item-1">Elemento 1</a>
          <nav class="nav nav-pills flex-column">
            <a class="nav-link ms-3 my-1" href="#item-1-1">Elemento 1-1</a>
            <a class="nav-link ms-3 my-1" href="#item-1-2">Elemento 1-2</a>
          </nav>
          <a class="nav-link" href="#item-2">Elemento 2</a>
          <a class="nav-link" href="#item-3">Elemento 3</a>
          <nav class="nav nav-pills flex-column">
            <a class="nav-link ms-3 my-1" href="#item-3-1">Elemento 3-1</a>
            <a class="nav-link ms-3 my-1" href="#item-3-2">Elemento 3-2</a>
          </nav>
        </nav>
      </nav>
    </div>
    <div class="col-8">
      <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" class="scrollspy-example-2" tabindex="0">
        <h4 id="item-1">Elemento 1</h4>
        <p>Este es un contenido placeholder para la página Scrollspy. Ten en cuenta que a medida que te desplazas hacia abajo en la página, se resalta el enlace de navegación correspondiente. Se repite en todo el ejemplo del componente. Seguimos agregando más copias de ejemplo aquí para enfatizar el desplazamiento y el resaltado.</p>
        <h5 id="item-1-1">Elemento 1-1</h5>
        <p>Este es un contenido placeholder para la página Scrollspy. Ten en cuenta que a medida que te desplazas hacia abajo en la página, se resalta el enlace de navegación correspondiente. Se repite en todo el ejemplo del componente. Seguimos agregando más copias de ejemplo aquí para enfatizar el desplazamiento y el resaltado.</p>
        <h5 id="item-1-2">Elemento 1-2</h5>
        <p>Este es un contenido placeholder para la página Scrollspy. Ten en cuenta que a medida que te desplazas hacia abajo en la página, se resalta el enlace de navegación correspondiente. Se repite en todo el ejemplo del componente. Seguimos agregando más copias de ejemplo aquí para enfatizar el desplazamiento y el resaltado.</p>
        <h4 id="item-2">Elemento 2</h4>
        <p>Este es un contenido placeholder para la página Scrollspy. Ten en cuenta que a medida que te desplazas hacia abajo en la página, se resalta el enlace de navegación correspondiente. Se repite en todo el ejemplo del componente. Seguimos agregando más copias de ejemplo aquí para enfatizar el desplazamiento y el resaltado.</p>
        <h4 id="item-3">Elemento 3</h4>
        <p>Este es un contenido placeholder para la página Scrollspy. Ten en cuenta que a medida que te desplazas hacia abajo en la página, se resalta el enlace de navegación correspondiente. Se repite en todo el ejemplo del componente. Seguimos agregando más copias de ejemplo aquí para enfatizar el desplazamiento y el resaltado.</p>
        <h5 id="item-3-1">Elemento 3-1</h5>
        <p>Este es un contenido placeholder para la página Scrollspy. Ten en cuenta que a medida que te desplazas hacia abajo en la página, se resalta el enlace de navegación correspondiente. Se repite en todo el ejemplo del componente. Seguimos agregando más copias de ejemplo aquí para enfatizar el desplazamiento y el resaltado.</p>
        <h5 id="item-3-2">Elemento 3-2</h5>
        <p>Este es un contenido placeholder para la página Scrollspy. Ten en cuenta que a medida que te desplazas hacia abajo en la página, se resalta el enlace de navegación correspondiente. Se repite en todo el ejemplo del componente. Seguimos agregando más copias de ejemplo aquí para enfatizar el desplazamiento y el resaltado.</p>
      </div>
    </div>
  </div>
</div>

```html
<nav id="navbar-example3" class="navbar navbar-light bg-light flex-column align-items-stretch p-3">
  <a class="navbar-brand" href="#">Navbar</a>
  <nav class="nav nav-pills flex-column">
    <a class="nav-link" href="#item-1">Elemento 1</a>
    <nav class="nav nav-pills flex-column">
      <a class="nav-link ms-3 my-1" href="#item-1-1">Elemento 1-1</a>
      <a class="nav-link ms-3 my-1" href="#item-1-2">Elemento 1-2</a>
    </nav>
    <a class="nav-link" href="#item-2">Elemento 2</a>
    <a class="nav-link" href="#item-3">Elemento 3</a>
    <nav class="nav nav-pills flex-column">
      <a class="nav-link ms-3 my-1" href="#item-3-1">Elemento 3-1</a>
      <a class="nav-link ms-3 my-1" href="#item-3-2">Elemento 3-2</a>
    </nav>
  </nav>
</nav>

<div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabindex="0">
  <h4 id="item-1">Elemento 1</h4>
  <p>...</p>
  <h5 id="item-1-1">Elemento 1-1</h5>
  <p>...</p>
  <h5 id="item-1-2">Elemento 1-2</h5>
  <p>...</p>
  <h4 id="item-2">Elemento 2</h4>
  <p>...</p>
  <h4 id="item-3">Elemento 3</h4>
  <p>...</p>
  <h5 id="item-3-1">Elemento 3-1</h5>
  <p>...</p>
  <h5 id="item-3-2">Elemento 3-2</h5>
  <p>...</p>
</div>
```

## Ejemplo con list-group

Scrollspy también funciona con `.list-group`s. Desplázate por el área junto al grupo de listas y observa cómo cambia la clase activa.

<div class="bd-example">
  <div class="row">
    <div class="col-4">
      <div id="list-example" class="list-group">
        <a class="list-group-item list-group-item-action" href="#list-item-1">Elemento 1</a>
        <a class="list-group-item list-group-item-action" href="#list-item-2">Elemento 2</a>
        <a class="list-group-item list-group-item-action" href="#list-item-3">Elemento 3</a>
        <a class="list-group-item list-group-item-action" href="#list-item-4">Elemento 4</a>
      </div>
    </div>
    <div class="col-8">
      <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
        <h4 id="list-item-1">Elemento 1</h4>
        <p>Este es un contenido placeholder para la página Scrollspy. Ten en cuenta que a medida que te desplazas hacia abajo en la página, se resalta el enlace de navegación correspondiente. Se repite en todo el ejemplo del componente. Seguimos agregando más copias de ejemplo aquí para enfatizar el desplazamiento y el resaltado.</p>
        <h4 id="list-item-2">Elemento 2</h4>
        <p>Este es un contenido placeholder para la página Scrollspy. Ten en cuenta que a medida que te desplazas hacia abajo en la página, se resalta el enlace de navegación correspondiente. Se repite en todo el ejemplo del componente. Seguimos agregando más copias de ejemplo aquí para enfatizar el desplazamiento y el resaltado.</p>
        <h4 id="list-item-3">Elemento 3</h4>
        <p>Este es un contenido placeholder para la página Scrollspy. Ten en cuenta que a medida que te desplazas hacia abajo en la página, se resalta el enlace de navegación correspondiente. Se repite en todo el ejemplo del componente. Seguimos agregando más copias de ejemplo aquí para enfatizar el desplazamiento y el resaltado.</p>
        <h4 id="list-item-4">Elemento 4</h4>
        <p>Este es un contenido placeholder para la página Scrollspy. Ten en cuenta que a medida que te desplazas hacia abajo en la página, se resalta el enlace de navegación correspondiente. Se repite en todo el ejemplo del componente. Seguimos agregando más copias de ejemplo aquí para enfatizar el desplazamiento y el resaltado.</p>
      </div>
    </div>
  </div>
</div>

```html
<div id="list-example" class="list-group">
  <a class="list-group-item list-group-item-action" href="#list-item-1">Elemento 1</a>
  <a class="list-group-item list-group-item-action" href="#list-item-2">Elemento 2</a>
  <a class="list-group-item list-group-item-action" href="#list-item-3">Elemento 3</a>
  <a class="list-group-item list-group-item-action" href="#list-item-4">Elemento 4</a>
</div>
<div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
  <h4 id="list-item-1">Elemento 1</h4>
  <p>...</p>
  <h4 id="list-item-2">Elemento 2</h4>
  <p>...</p>
  <h4 id="list-item-3">Elemento 3</h4>
  <p>...</p>
  <h4 id="list-item-4">Elemento 4</h4>
  <p>...</p>
</div>
```

{{< callout info >}}
{{< partial "maybe-interested-2.md" >}}
{{< /callout >}}

## Uso

### A través de atributos de datos

Para agregar fácilmente el comportamiento de scrollspy a la navegación de la barra superior, agrega `data-bs-spy="scroll"` al elemento que deseas espiar (por lo general, este sería el `<body>`). A continuación, agrega el atributo `data-bs-target` con el ID o la clase del elemento padre de cualquier componente `.nav` de Bootstrap.

```css
body {
  position: relative;
}
```

```html
<body data-bs-spy="scroll" data-bs-target="#navbar-example">
  ...
  <div id="navbar-example">
    <ul class="nav nav-tabs" role="tablist">
      ...
    </ul>
  </div>
  ...
</body>
```

### A través de JavaScript

Después de agregar `position: relative;` en tu CSS, llama a scrollspy a través de JavaScript:

```js
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-example'
})
```

{{< callout danger >}}
#### Se requieren objetivos de ID resolubles

Los enlaces de la barra de navegación deben tener IDs objetivos resolubles. Por ejemplo, `<a href="#home">home</a>` debe corresponder a algo en el DOM como `<div id="home"></div>`.
{{< /callout >}}

{{< callout info >}}
#### Se ignoran los elementos objetivos no visibles

Los elementos de destino que no sean visibles se ignorarán y sus elementos de navegación correspondientes nunca se resaltarán.
{{< /callout >}}

### Métodos

#### refresh

Cuando uses scrollspy junto con la adición o eliminación de elementos del DOM, deberás llamar al método de actualización de la siguiente manera:

```js
var dataSpyList = Array.prototype.slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
dataSpyList.forEach(function (dataSpyEl) {
  bootstrap.ScrollSpy.getInstance(dataSpyEl)
    .refresh()
})
```

#### dispose

Destruye el scrollspy de un elemento. (Elimina los datos almacenados en el elemento DOM)

#### getInstance

Método *estático* que te permite obtener la instancia de scrollspy asociada con un elemento DOM

```js
var scrollSpyContentEl = document.getElementById('content')
var scrollSpy = bootstrap.ScrollSpy.getInstance(scrollSpyContentEl) // Returns a Bootstrap scrollspy instance
```

#### getOrCreateInstance

Método *estático* que te permite obtener la instancia de scrollspy asociada con un elemento DOM, o crear una nueva en caso de que no se haya inicializado

```js
var scrollSpyContentEl = document.getElementById('content')
var scrollSpy = bootstrap.ScrollSpy.getOrCreateInstance(scrollSpyContentEl) // Returns a Bootstrap scrollspy instance
```

### Opciones

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-bs-`, as in `data-bs-offset=""`.

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
      <td><code>offset</code></td>
      <td>number</td>
      <td><code>10</code></td>
      <td>Píxeles para compensar desde la parte superior al calcular la posición de desplazamiento.</td>
    </tr>
    <tr>
      <td><code>method</code></td>
      <td>string</td>
      <td><code>auto</code></td>
      <td>Encuentra en qué sección se encuentra el elemento espiado. <code>auto</code> elegirá el mejor método para obtener las coordenadas de desplazamiento. <code>offset</code> utilizará el método <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect"><code>Element.getBoundingClientRect()</code></a> para obtener las coordenadas de desplazamiento. <code>position</code> usará las propiedades <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop"><code>HTMLElement.offsetTop</code></a> y <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetLeft"><code>HTMLElement.offsetLeft</code></a> para obtener las coordenadas de desplazamiento.</td>
    </tr>
    <tr>
      <td><code>target</code></td>
      <td>string | jQuery object | DOM element</td>
      <td></td>
      <td>Especifica el elemento para aplicar el complemento Scrollspy.</td>
    </tr>
  </tbody>
</table>

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
      <td><code>activate.bs.scrollspy</code></td>
      <td>Este evento se activa en el elemento de desplazamiento cada vez que el scrollspy activa un nuevo elemento.</td>
    </tr>
  </tbody>
</table>

```js
var firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]')
firstScrollSpyEl.addEventListener('activate.bs.scrollspy', function () {
  // hacer algo...
})
```
