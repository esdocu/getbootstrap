---
layout: docs
title: Dropdowns
description: Alterna la visibilidad de superposiciones contextuales para mostrar listas de enlaces y más con el complemento desplegable Bootstrap.
group: components
toc: true
---

## ¿Qué es Dropdown?

Los menús desplegables son superposiciones contextuales que se pueden alternar (su visibilidad) para mostrar listas de enlaces y más. Se hacen interactivos con  dropdown, el complemento JavaScript incluido de Bootstrap. Se alternan al hacer clic, no al pasar el mouse; esta es [una decisión de diseño intencional](https://markdotto.com/2012/02/27/bootstrap-explained-dropdowns/).

Los menús desplegables se basan en una biblioteca de terceros, [Popper](https://popper.js.org/), que proporciona posicionamiento dinámico y detección de viewport. Asegúrate de incluir [popper.min.js]({{< param "cdn.popper" >}}) antes del JavaScript de Bootstrap o usa `bootstrap.bundle.min.js` / `bootstrap.bundle.js` que contiene Popper. Popper no se usa para posicionar los menús desplegables en las barras de navegación, ya que no se requiere un posicionamiento dinámico.

## Accesibilidad

El estándar [<abbr title="Iniciativa de Accesibilidad Web">WAI</abbr> <abbr title="Aplicaciones Accesibles de Internet Enriquecidas">ARIA</abbr>](https://www.w3.org/TR/wai-aria/) define un [`role="menu"` widget](https://www.w3.org/WAI/PF/aria/roles#menu) actual, pero esto es específico para menús similares a aplicaciones que activan acciones o funciones. Los menús <abbr title="Accessible Rich Internet Applications">ARIA</abbr> solo pueden contener elementos de menú, elementos de menú de casillas de verificación, elementos de menú de botones radio, grupos de botones radio y submenús.

Los menús desplegables de Bootstrap, por otro lado, están diseñados para ser genéricos y aplicables a una variedad de situaciones y estructuras de marcado. Por ejemplo, es posible crear menús desplegables que contengan entradas adicionales y controles de formulario, como campos de búsqueda o formularios de inicio de sesión. Por esta razón, Bootstrap no espera (ni agrega automáticamente) ninguno de los atributos `role` y `aria-` requeridos para los verdaderos menús <abbr title="Accessible Rich Internet Applications">ARIA</abbr>. Los autores tendrán que incluir ellos mismos estos atributos más específicos.

Sin embargo, Bootstrap agrega soporte incorporado para la mayoría de las interacciones estándar del menú del teclado, como la capacidad de moverse a través de elementos individuales `.dropdown-item` usando las teclas de flecha del teclado y cerrar el menú con la tecla <kbd>ESC</kbd> .

## Ejemplos

Envuelve el elemento conmutador del menú desplegable (tu botón o enlace) y el menú desplegable dentro de `.dropdown`, u otro elemento que declare `position: relative;`. Los menús desplegables se pueden activar desde los elementos `<a>` o `<button>` para adaptarse mejor a tus necesidades potenciales. Los ejemplos que se muestran aquí usan elementos semánticos `<ul>` cuando corresponde, pero se admite el marcado personalizado.

### Botón único

Cualquier `.btn` individual se puede convertir en un menú desplegable con algunos cambios de marcado. Así es como puedes ponerlos a trabajar con cualquiera de los elementos `<button>`:

{{< example >}}
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Botón Dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Acción</a></li>
    <li><a class="dropdown-item" href="#">Otra acción</a></li>
    <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
  </ul>
</div>
{{< /example >}}

Y con elementos `<a>`:

{{< example >}}
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Enlace Dropdown
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Acción</a></li>
    <li><a class="dropdown-item" href="#">Otra acción</a></li>
    <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
  </ul>
</div>
{{< /example >}}

La mejor parte es que también puedes hacer esto con cualquier variante de botón:

<div class="bd-example">
  <div class="btn-group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Primary</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Acción</a></li>
      <li><a class="dropdown-item" href="#">Otra acción</a></li>
      <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Enlace separado</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Secondary</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Acción</a></li>
      <li><a class="dropdown-item" href="#">Otra acción</a></li>
      <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Enlace separado</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Success</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Acción</a></li>
      <li><a class="dropdown-item" href="#">Otra acción</a></li>
      <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Enlace separado</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Info</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Acción</a></li>
      <li><a class="dropdown-item" href="#">Otra acción</a></li>
      <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Enlace separado</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Warning</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Acción</a></li>
      <li><a class="dropdown-item" href="#">Otra acción</a></li>
      <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Enlace separado</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Danger</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Acción</a></li>
      <li><a class="dropdown-item" href="#">Otra acción</a></li>
      <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Enlace separado</a></li>
    </ul>
  </div><!-- /btn-group -->
</div>

```html
<!-- Example single danger button -->
<div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Acción
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Acción</a></li>
    <li><a class="dropdown-item" href="#">Otra acción</a></li>
    <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Enlace separado</a></li>
  </ul>
</div>
```

### Botón dividido

Del mismo modo, crea menús desplegables de botones divididos con prácticamente el mismo marcado que los menús desplegables de un solo botón, pero con la adición de `.dropdown-toggle-split` en el lado del botón de despliegue.

Usamos esta clase adicional para reducir el `padding` horizontal a cada lado del símbolo de despliegue (flecha hacia abajo) en un 25% y eliminamos el `margin-left` que se agrega para los menús desplegables de botones normales. Esos cambios adicionales mantienen el símbolo de despliegue centrado en el botón de división y brindan un área de impacto de tamaño más apropiado al lado del botón principal.

<div class="bd-example">
  <div class="btn-group">
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Acción</a></li>
      <li><a class="dropdown-item" href="#">Otra acción</a></li>
      <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Enlace separado</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Acción</a></li>
      <li><a class="dropdown-item" href="#">Otra acción</a></li>
      <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Enlace separado</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Acción</a></li>
      <li><a class="dropdown-item" href="#">Otra acción</a></li>
      <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Enlace separado</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Acción</a></li>
      <li><a class="dropdown-item" href="#">Otra acción</a></li>
      <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Enlace separado</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Acción</a></li>
      <li><a class="dropdown-item" href="#">Otra acción</a></li>
      <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Enlace separado</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Acción</a></li>
      <li><a class="dropdown-item" href="#">Otra acción</a></li>
      <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Enlace separado</a></li>
    </ul>
  </div><!-- /btn-group -->
</div>

```html
<!-- Example split danger button -->
<div class="btn-group">
  <button type="button" class="btn btn-danger">Acción</button>
  <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Acción</a></li>
    <li><a class="dropdown-item" href="#">Otra acción</a></li>
    <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Enlace separado</a></li>
  </ul>
</div>
```

## Dimensionamiento

Los menús desplegables de botones funcionan con botones de todos los tamaños, incluidos los botones desplegables predeterminados y divididos.

<div class="bd-example">
  <div class="btn-group">
    <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Botón grande
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Acción</a></li>
      <li><a class="dropdown-item" href="#">Otra acción</a></li>
      <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Enlace separado</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-lg btn-secondary">Botón grande dividido</button>
    <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Acción</a></li>
      <li><a class="dropdown-item" href="#">Otra acción</a></li>
      <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Enlace separado</a></li>
    </ul>
  </div>
</div>

```html
<!-- Large button groups (default and split) -->
<div class="btn-group">
  <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Botón grande
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
<div class="btn-group">
  <button class="btn btn-secondary btn-lg" type="button">
    Botón grande dividido
  </button>
  <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
```

<div class="bd-example">
  <div class="btn-group">
    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Botón pequeño
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Acción</a></li>
      <li><a class="dropdown-item" href="#">Otra acción</a></li>
      <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Enlace separado</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-sm btn-secondary">Botón pequeño dividido</button>
    <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Acción</a></li>
      <li><a class="dropdown-item" href="#">Otra acción</a></li>
      <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Enlace separado</a></li>
    </ul>
  </div>
</div>

```html
<div class="btn-group">
  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Botón pequeño
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
<div class="btn-group">
  <button class="btn btn-secondary btn-sm" type="button">
    Botón pequeño dividido
  </button>
  <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
```

## Dark dropdowns

Opta por menús desplegables más oscuros para que coincidan con una barra de navegación oscura o un estilo personalizado agregando `.dropdown-menu-dark` en un `.dropdown-menu` existente. No se requieren cambios en los elementos desplegables.

{{< example >}}
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
    Botón Dropdown
  </button>
  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
    <li><a class="dropdown-item active" href="#">Acción</a></li>
    <li><a class="dropdown-item" href="#">Otra acción</a></li>
    <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Enlace separado</a></li>
  </ul>
</div>
{{< /example >}}

Y ponlo en uso en una barra de navegación:

{{< example >}}
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Acción</a></li>
            <li><a class="dropdown-item" href="#">Otra acción</a></li>
            <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
{{< /example >}}

## Direcciones

{{< callout info >}}
#### RTL
Las direcciones se reflejan cuando se usa Bootstrap en RTL, lo que significa que `.dropstart` aparecerá en el lado derecho.
{{< /callout >}}

### Dropup

Activa los menús desplegables sobre los elementos agregando `.dropup` al elemento padre.

<div class="bd-example">
  <div class="btn-group dropup">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropup
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Acción</a></li>
      <li><a class="dropdown-item" href="#">Otra acción</a></li>
      <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Enlace separado</a></li>
    </ul>
  </div>
  <div class="btn-group dropup">
    <button type="button" class="btn btn-secondary">
      Dropup dividido
    </button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Acción</a></li>
      <li><a class="dropdown-item" href="#">Otra acción</a></li>
      <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Enlace separado</a></li>
    </ul>
  </div>
</div>

```html
<!-- Default dropup button -->
<div class="btn-group dropup">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Dropup
  </button>
  <ul class="dropdown-menu">
    <!-- Dropdown menu links -->
  </ul>
</div>

<!-- Split dropup button -->
<div class="btn-group dropup">
  <button type="button" class="btn btn-secondary">
    Dropup dividido
  </button>
  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <!-- Dropdown menu links -->
  </ul>
</div>
```

### Dropend

Activa los menús desplegables a la derecha de los elementos agregando `.dropend` al elemento padre.

<div class="bd-example">
  <div class="btn-group dropend">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropend
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Acción</a></li>
      <li><a class="dropdown-item" href="#">Otra acción</a></li>
      <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Enlace separado</a></li>
    </ul>
  </div>
  <div class="btn-group dropend">
    <button type="button" class="btn btn-secondary">
      Dropend dividido
    </button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropend</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Acción</a></li>
      <li><a class="dropdown-item" href="#">Otra acción</a></li>
      <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Enlace separado</a></li>
    </ul>
  </div>
</div>

```html
<!-- Default dropend button -->
<div class="btn-group dropend">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Dropend
  </button>
  <ul class="dropdown-menu">
    <!-- Dropdown menu links -->
  </ul>
</div>

<!-- Split dropend button -->
<div class="btn-group dropend">
  <button type="button" class="btn btn-secondary">
    Dropend dividido
  </button>
  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropend</span>
  </button>
  <ul class="dropdown-menu">
    <!-- Dropdown menu links -->
  </ul>
</div>
```

### Dropstart

Activa los menús desplegables a la izquierda de los elementos agregando `.dropstart` al elemento padre.

<div class="bd-example">
  <div class="btn-group dropstart">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropstart
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Acción</a></li>
      <li><a class="dropdown-item" href="#">Otra acción</a></li>
      <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Enlace separado</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <div class="btn-group dropstart" role="group">
      <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="visually-hidden">Toggle Dropstart</span>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Acción</a></li>
        <li><a class="dropdown-item" href="#">Otra acción</a></li>
        <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Enlace separado</a></li>
      </ul>
    </div>
    <button type="button" class="btn btn-secondary">
      Dropstart dividido
    </button>
  </div>
</div>

```html
<!-- Default dropstart button -->
<div class="btn-group dropstart">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Dropstart
  </button>
  <ul class="dropdown-menu">
    <!-- Dropdown menu links -->
  </ul>
</div>

<!-- Split dropstart button -->
<div class="btn-group">
  <div class="btn-group dropstart" role="group">
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropstart</span>
    </button>
    <ul class="dropdown-menu">
      <!-- Dropdown menu links -->
    </ul>
  </div>
  <button type="button" class="btn btn-secondary">
    Dropstart dividido
  </button>
</div>
```

## Elementos de menú

Puedes usar los elementos `<a>` o `<button>` como elementos desplegables.

{{< example >}}
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button class="dropdown-item" type="button">Acción</button></li>
    <li><button class="dropdown-item" type="button">Otra acción</button></li>
    <li><button class="dropdown-item" type="button">Algo más aqui</button></li>
  </ul>
</div>
{{< /example >}}

También puedes crear elementos desplegables no interactivos con `.dropdown-item-text`. Siéntete libre de diseñar más con CSS personalizado o utilidades de texto.

{{< example >}}
<ul class="dropdown-menu">
  <li><span class="dropdown-item-text">Texto del elemento Dropdown</span></li>
  <li><a class="dropdown-item" href="#">Acción</a></li>
  <li><a class="dropdown-item" href="#">Otra acción</a></li>
  <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
</ul>
{{< /example >}}

### Active

Agrega `.active` a los elementos en el menú desplegable para **mostrarlos como activos**. Para transmitir el estado active a las tecnologías de asistencia, usa el atributo `aria-current` — usando el valor `page` para la página actual, o `true` para el elemento actual en un conjunto.

{{< example >}}
<ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Enlace regular</a></li>
  <li><a class="dropdown-item active" href="#" aria-current="true">Enlace activo</a></li>
  <li><a class="dropdown-item" href="#">Otro enlace</a></li>
</ul>
{{< /example >}}

### Deshabilitado

Agrega `.disabled` a los elementos en el menú desplegable para **mostrarlos como deshabilitados**.

{{< example >}}
<ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Enlace regular</a></li>
  <li><a class="dropdown-item disabled">Enlace deshabilitado</a></li>
  <li><a class="dropdown-item" href="#">Otro enlace</a></li>
</ul>
{{< /example >}}

## Alineación del menú

De forma predeterminada, un menú desplegable se coloca automáticamente al 100% desde la parte superior y a lo largo del lado izquierdo de su elemento padre. Puedes cambiar esto con las clases direccionales `.drop*`, pero también puedes controlarlas con clases modificadoras adicionales.

Agrega `.dropdown-menu-end` a un `.dropdown-menu` para alinear a la derecha el menú desplegable. Las direcciones se reflejan cuando se usa Bootstrap en RTL, lo que significa que `.dropdown-menu-end` aparecerá en el lado izquierdo.

{{< callout info >}}
**¡Cuidado!** Los menús desplegables se posicionan gracias a Popper, excepto cuando están contenidos en una barra de navegación.
{{< /callout >}}

{{< example >}}
<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Ejemplo de menú alineado a la derecha
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><button class="dropdown-item" type="button">Acción</button></li>
    <li><button class="dropdown-item" type="button">Otra acción</button></li>
    <li><button class="dropdown-item" type="button">Algo más aqui</button></li>
  </ul>
</div>
{{< /example >}}

### Alineación responsive

Si deseas utilizar la alineación responsive, deshabilita el posicionamiento dinámico agregando el atributo `data-bs-display="static"` y usa las clases de variación responsive.

Para alinear **a la derecha** el menú desplegable con el breakpoint dado o más grande, agrea `.dropdown-menu{-sm|-md|-lg|-xl|-xxl}-end`.

{{< example >}}
<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    Alineado a la izquierda pero alineado a la derecha cuando la pantalla es grande
  </button>
  <ul class="dropdown-menu dropdown-menu-lg-end">
    <li><button class="dropdown-item" type="button">Acción</button></li>
    <li><button class="dropdown-item" type="button">Otra acción</button></li>
    <li><button class="dropdown-item" type="button">Algo más aqui</button></li>
  </ul>
</div>
{{< /example >}}

Para alinear **a la izquierda** el menú desplegable con el breakpoint dado o más grande, agrega `.dropdown-menu-end` y `.dropdown-menu{-sm|-md|-lg|-xl|-xxl}-start`.

{{< example >}}
<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    Alineado a la derecha pero alineado a la izquierda cuando la pantalla es grande
  </button>
  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
    <li><button class="dropdown-item" type="button">Acción</button></li>
    <li><button class="dropdown-item" type="button">Otra acción</button></li>
    <li><button class="dropdown-item" type="button">Algo más aqui</button></li>
  </ul>
</div>
{{< /example >}}

Ten en cuenta que no necesitas agregar un atributo `data-bs-display="static"` a los botones desplegables en las barras de navegación, ya que Popper no se usa en las barras de navegación.

### Opciones de alineación

Tomando la mayoría de las opciones que se muestran arriba, aquí hay una pequeña demostración de varias opciones de alineación de dropdown en un solo lugar.

{{< example >}}
<div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
  </ul>
</div>

<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Menú alineado a la derecha
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
  </ul>
</div>

<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    Alineado a la izquierda, alineado a la derecha lg
  </button>
  <ul class="dropdown-menu dropdown-menu-lg-end">
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
  </ul>
</div>

<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    Alineado a la derecha, alineado a la izquierda lg
  </button>
  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
  </ul>
</div>

<div class="btn-group dropstart">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Dropstart
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
  </ul>
</div>

<div class="btn-group dropend">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Dropend
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
  </ul>
</div>

<div class="btn-group dropup">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Dropup
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
  </ul>
</div>
{{< /example >}}

## Contenido del menú

### Encabezados

Agrega un encabezado para etiquetar secciones de acciones en cualquier menú desplegable.

{{< example >}}
<ul class="dropdown-menu">
  <li><h6 class="dropdown-header">Encabezado del dropdown</h6></li>
  <li><a class="dropdown-item" href="#">Acción</a></li>
  <li><a class="dropdown-item" href="#">Otra acción</a></li>
</ul>
{{< /example >}}

### Divisores

Separa los grupos de elementos de menú relacionados con un divisor.

{{< example >}}
<ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Acción</a></li>
  <li><a class="dropdown-item" href="#">Otra acción</a></li>
  <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
  <li><hr class="dropdown-divider"></li>
  <li><a class="dropdown-item" href="#">Enlace separado</a></li>
</ul>
{{< /example >}}

### Texto

Coloca cualquier texto de forma libre dentro de un menú desplegable con texto y usa las [utilidades de espaciado]({{< docsref "/utilities/spacing" >}}). Ten en cuenta que probablemente necesitarás estilos de tamaño adicionales para restringir el ancho del menú.

{{< example >}}
<div class="dropdown-menu p-4 text-muted" style="max-width: 200px;">
  <p>
    Algunos ejemplos de texto que fluyen libremente dentro del menú desplegable.
  </p>
  <p class="mb-0">
    Y esto es más texto de ejemplo.
  </p>
</div>
{{< /example >}}

### Formularios

Coloca un formulario dentro de un menú desplegable, o conviértelo en un menú desplegable, y usa las [utilidades de margen o padding]({{< docsref "/utilities/spacing" >}}) para darle el espacio negativo que necesitas.

{{< example >}}
<div class="dropdown-menu">
  <form class="px-4 py-3">
    <div class="mb-3">
      <label for="exampleDropdownFormEmail1" class="form-label">Correo electrónico</label>
      <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
    </div>
    <div class="mb-3">
      <label for="exampleDropdownFormPassword1" class="form-label">Contraseña</label>
      <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Contraseña">
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="dropdownCheck">
        <label class="form-check-label" for="dropdownCheck">
          Recuérdame
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Ingresar</button>
  </form>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#">¿Nuevo por aquí? Regístrate</a>
  <a class="dropdown-item" href="#">¿Se te olvidó tu contraseña?</a>
</div>
{{< /example >}}

{{< example >}}
<form class="dropdown-menu p-4">
  <div class="mb-3">
    <label for="exampleDropdownFormEmail2" class="form-label">Correo electrónico</label>
    <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com">
  </div>
  <div class="mb-3">
    <label for="exampleDropdownFormPassword2" class="form-label">Contraseña</label>
    <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Contraseña">
  </div>
  <div class="mb-3">
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="dropdownCheck2">
      <label class="form-check-label" for="dropdownCheck2">
        Recuérdame
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Ingresar</button>
</form>
{{< /example >}}

## Opciones de dropdown

Usa `data-bs-offset` o `data-bs-reference` para cambiar la ubicación del menú desplegable.

{{< example >}}
<div class="d-flex">
  <div class="dropdown me-1">
    <button type="button" class="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
      Offset
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
      <li><a class="dropdown-item" href="#">Acción</a></li>
      <li><a class="dropdown-item" href="#">Otra acción</a></li>
      <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-secondary">Referencia</button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuReference">
      <li><a class="dropdown-item" href="#">Acción</a></li>
      <li><a class="dropdown-item" href="#">Otra acción</a></li>
      <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Enlace separado</a></li>
    </ul>
  </div>
</div>
{{< /example >}}

### Comportamiento de cierre automático

De forma predeterminada, el menú desplegable se cierra al hacer clic dentro o fuera del menú desplegable. Puedes usar la opción `autoClose` para cambiar este comportamiento del menú desplegable.

{{< example >}}
<div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
    Default dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="defaultDropdown">
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
  </ul>
</div>

<div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuClickableOutside" data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false">
    Se puede hacer clic afuera
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableOutside">
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
  </ul>
</div>

<div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
    Se puede hacer clic en el interior
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableInside">
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
  </ul>
</div>

<div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuClickable" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
    Cierre manual
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickable">
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
    <li><a class="dropdown-item" href="#">Opción del menú</a></li>
  </ul>
</div>
{{< /example >}}

## Sass

### Variables

Variables para todos los menús desplegables:

{{< scss-docs name="dropdown-variables" file="scss/_variables.scss" >}}

Variables para el [dark dropdown](#dark-dropdowns):

{{< scss-docs name="dropdown-dark-variables" file="scss/_variables.scss" >}}

Variables para los símbolos de despliegue (flecha) basados en CSS que indican la interactividad de un menú desplegable:

{{< scss-docs name="caret-variables" file="scss/_variables.scss" >}}

### Mixins

Los mixins se utilizan para generar los símbolos de despliegue basados en CSS y se pueden encontrar en `scss/mixins/_caret.scss`.

{{< scss-docs name="caret-mixins" file="scss/mixins/_caret.scss" >}}

## Uso

A través de atributos de datos o JavaScript, el complemento dropdown alterna el contenido oculto (menús desplegables) al alternar la clase `.show` en el `.dropdown-menu` padre. Se confía en el atributo `data-bs-toggle="dropdown"` para cerrar los menús desplegables a nivel de aplicación, por lo que es una buena idea usarlo siempre.

{{< callout info >}}
En los dispositivos táctiles, al abrir un menú desplegable se agregan controladores vacíos `mouseover` a los elementos secundarios inmediatos del elemento `<body>`. Este truco ciertamente feo es necesario para evitar una [peculiaridad en la delegación de eventos de iOS](https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html), que de otro modo evitaría un toque en cualquier lugar fuera del menú desplegable active el código que cierra el menú desplegable. Una vez que se cierra el menú desplegable, se eliminan estos controladores "mouseover" vacíos adicionales.
{{< /callout >}}

### A través de atributos de datos

Agrega `data-bs-toggle="dropdown"` a un enlace o botón para alternar un menú desplegable.

```html
<div class="dropdown">
  <button id="dLabel" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown trigger
  </button>
  <ul class="dropdown-menu" aria-labelledby="dLabel">
    ...
  </ul>
</div>
```

### A través de JavaScript

Llama a los menús desplegables a través de JavaScript:

```js
var dropdownElementList = Array.prototype.slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})
```

{{< callout info >}}
##### `data-bs-toggle="dropdown"` todavía se requiere

Independientemente de si llamas a tu menú desplegable a través de JavaScript o en su lugar utilizas la API de datos, `data-bs-toggle="dropdown"` siempre debe estar presente en el elemento desencadenante del menú desplegable.
{{< /callout >}}

### Opciones

Las opciones se pueden pasar a través de atributos de datos o JavaScript. Para los atributos de datos, agrega el nombre de la opción a `data-bs-`, como en `data-bs-offset=""`. Asegúrate de cambiar el tipo de caso del nombre de la opción de camelCase a kebab-case al pasar las opciones a través de atributos de datos. Por ejemplo, en lugar de usar `data-bs-autoClose="false"`, usa `data-bs-auto-close="false"`.

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
      <td><code>boundary</code></td>
      <td>string | element</td>
      <td><code>'clippingParents'</code></td>
      <td>Límite de restricción de desbordamiento del menú desplegable (se aplica solo al modificador preventOverflow de Popper). De forma predeterminada, es <code>'clippingParents'</code> y puede aceptar una referencia HTMLElement (solo a través de JavaScript). Para obtener más información, consulta las <a href="https://popper.js.org/docs/v2/utils/detect-overflow/#boundary">detectOverflow docs</a> de Popper.</td>
    </tr>
    <tr>
      <td><code>reference</code></td>
      <td>string | element | object</td>
      <td><code>'toggle'</code></td>
      <td>Elemento de referencia del menú desplegable. Acepta los valores de <code>'toggle'</code>, <code>'parent'</code>, una referencia HTMLElement o un objeto que proporciona <code>getBoundingClientRect</code>. Para obtener más información, consulta las <a href="https://popper.js.org/docs/v2/constructors/#createpopper">documentos de construcción</a> y <a href="https://popper.js.org/docs/v2/virtual-elements/">documentos de elementos virtuales</a>.</td>    
    </tr>
    <tr>
      <td><code>display</code></td>
      <td>string</td>
      <td><code>'dynamic'</code></td>
      <td>Por defecto, usamos Popper para el posicionamiento dinámico. Deshabilita esto con <code>static</code>.</td>
    </tr>
    <tr>
      <td><code>offset</code></td>
      <td>array | string | function</td>
      <td><code>[0, 2]</code></td>
      <td>
        <p>Desplazamiento del menú desplegable en relación con su objetivo. Puedes pasar una cadena en atributos de datos con valores separados por comas como: <code>data-bs-offset="10,20"</code></p>
        <p>Cuando se usa una función para determinar el desplazamiento, se llama con un objeto que contiene la ubicación del popper, la referencia y los rects del popper como su primer argumento. El nodo DOM del elemento desencadenante se pasa como segundo argumento. La función debe devolver una matriz con dos números: <code>[<a href="https://popper.js.org/docs/v2/modifiers/offset/#skidding-1">skidding</a>, <a href="https://popper.js.org/docs/v2/modifiers/offset/#distance-1">distance</a>]</code>.</p>
        <p>Para obtener más información, consulta las <a href="https://popper.js.org/docs/v2/modifiers/offset/#options">documentos de compensación</a> de Popper.</p>
      </td>
    </tr>
    <tr>
      <td><code>autoClose</code></td>
      <td>boolean | string</td>
      <td><code>true</code></td>
      <td>
        <p>Configura el comportamiento de cierre automático del menú desplegable:</p>
        <ul>
          <li><code>true</code>: el menú desplegable se cerrará haciendo clic fuera o dentro del menú desplegable.</li>
          <li><code>false</code>: el menú desplegable se cerrará haciendo clic en el botón de alternancia y llamando manualmente al método <code>hide</code> o <code>toggle</code>. (Tampoco se cerrará presionando la tecla <kbd>esc</kbd>)</li>
          <li><code>'inside'</code>: el menú desplegable se cerrará (solo) al hacer clic dentro del menú desplegable.</li>
          <li><code>'outside'</code>: el menú desplegable se cerrará (solo) al hacer clic fuera del menú desplegable.</li>
        </ul>
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

#### Usando la función con `popperConfig`

```js
var dropdown = new bootstrap.Dropdown(element, {
  popperConfig: function (defaultBsPopperConfig) {
    // var newPopperConfig = {...}
    // usa defaultBsPopperConfig si es necesario...
    // devuelve newPopperConfig
  }
})
```

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
      <td><code>toggle</code></td>
      <td>
        Alterna el menú desplegable de una barra de navegación determinada o navegación con pestañas.
      </td>
    </tr>
    <tr>
      <td><code>show</code></td>
      <td>
        Muestra el menú desplegable de una barra de navegación determinada o navegación con pestañas.
      </td>
    </tr>
    <tr>
      <td><code>hide</code></td>
      <td>
        Oculta el menú desplegable de una barra de navegación determinada o navegación con pestañas.
      </td>
    </tr>
    <tr>
      <td><code>update</code></td>
      <td>
        Actualiza la posición del menú desplegable de un elemento.
      </td>
    </tr>
    <tr>
      <td><code>dispose</code></td>
      <td>
        Destruye el menú desplegable de un elemento. (Elimina los datos almacenados en el elemento DOM)
      </td>
    </tr>
    <tr>
      <td>
        <code>getInstance</code>
      </td>
      <td>
        Método estático que te permite obtener la instancia desplegable asociada a un elemento DOM, puedes usarlo así: <code>bootstrap.Dropdown.getInstance(element)</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>getOrCreateInstance</code>
      </td>
      <td>
        Método estático que devuelve una instancia desplegable asociada a un elemento DOM o crea una nueva en caso de que no se haya inicializado.
        Puedes usarlo así: <code>bootstrap.Dropdown.getOrCreateInstance(element)</code>
      </td>
    </tr>
  </tbody>
</table>

### Eventos

Todos los eventos desplegables se activan en el elemento de alternancia y luego se expanden. Por lo tanto, también puedes agregar detectores de eventos en el elemento padre `.dropdown-menu`. Los eventos `hide.bs.dropdown` y `hidden.bs.dropdown` tienen una propiedad `clickEvent` (solo cuando el tipo de evento original es `click`) que contiene un objeto *Event* para el evento de clic.

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
        <code>show.bs.dropdown</code>
      </td>
      <td>
        Se activa inmediatamente cuando se llama al método de instancia show.
      </td>
    </tr>
    <tr>
      <td>
        <code>shown.bs.dropdown</code>
      </td>
      <td>
        Se activa cuando el menú desplegable se ha hecho visible para el usuario y se han completado las transiciones de CSS.
      </td>
    </tr>
    <tr>
      <td>
        <code>hide.bs.dropdown</code>
      </td>
      <td>
        Se activa inmediatamente cuando se llama al método de instancia hide.
      </td>
    </tr>
    <tr>
      <td>
        <code>hidden.bs.dropdown</code>
      </td>
      <td>
        Se activa cuando el menú desplegable ha terminado de ocultarse para el usuario y se han completado las transiciones de CSS.
      </td>
    </tr>
  </tbody>
</table>

```js
var myDropdown = document.getElementById('myDropdown')
myDropdown.addEventListener('show.bs.dropdown', function () {
  // hacer algo...
})
```
