---
layout: docs
title: Navbar
description: Documentación y ejemplos para el potente encabezado de navegación sensible de Bootstrap, la barra de navegación. Incluye soporte para marca, navegación y más, incluido soporte para nuestro complemento Collapse.
group: components
toc: true
---

## ¿Cómo funciona en Navbar?

Esto es lo que necesitas saber antes de comenzar con la barra de navegación:

- Las barras de navegación requieren un contenedor `.navbar` con `.navbar-expand{-sm|-md|-lg|-xl|-xxl}` para colapsar con capacidad responsive y clases de [esquema de color](#color-schemes).
- Las barras de navegación y su contenido son fluidos por defecto. Cambia el [contenedor](#containers) para limitar su ancho horizontal de diferentes maneras.
- Usa nuestras clases de utilidad [spacing]({{< docsref "/utilities/spacing" >}}) y [flex]({{< docsref "/utilities/flex" >}}) para controlar el espaciado y la alineación dentro de las barras de navegación.
- Las barras de navegación responden de manera predeterminada, pero puedes modificarlas fácilmente para cambiar eso. El comportamiento responsive depende de nuestro complemento JavaScript Collapse.
- Asegura la accesibilidad usando un elemento `<nav>` o, si usas un elemento más genérico como `<div>`, agrega un `role="navigation"` a cada barra de navegación para identificarla explícitamente como una región de referencia para usuarios de tecnologías de asistencia.
- Indica el elemento actual usando `aria-current="page"` para la página actual o `aria-current="true"` para el elemento actual en un conjunto.
 
{{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}}

## Contenido compatible

Las barras de navegación vienen con soporte integrado para un puñado de subcomponentes. Elije entre los siguientes según sea necesario:

- `.navbar-brand` para el nombre de tu empresa, producto o proyecto.
- `.navbar-nav` para una navegación ligera y de altura completa (incluido soporte para menús desplegables).
- `.navbar-toggler` para usar con nuestro complemento Collapse y otros comportamientos de [cambio de navegación](#responsive-behaviors).
- Utilidades flex y de espaciado para controles y acciones de formularios.
- `.navbar-text` para agregar cadenas de texto centradas verticalmente.
- `.collapse.navbar-collapse` para agrupar y ocultar el contenido de la barra de navegación pora breakpoint determinado.
- Agrega un `.navbar-scroll` opcional para establecer una `max-height` y [desplazar el contenido de la barra de navegación expandida](#scrolling).

Este es un ejemplo de todos los subcomponentes incluidos en una barra de navegación responsive que colapsa automáticamente en el breakpoint `lg` (large) (grande).

{{< example >}}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Enlace</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Acción</a></li>
            <li><a class="dropdown-item" href="#">Otra acción</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Algo más aquí</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Deshabilitado</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar">
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
{{< /example >}}

Este ejemplo usa las clases de utilidad de [background]({{< docsref "/utilities/background" >}}) (`bg-light`) y de [spacing]({{< docsref "/utilities/spacing" >}}) (`me-auto`, `mb-2`, `mb-lg-0`, `me-2`).

### Tu marca

El `.navbar-brand` se puede aplicar a la mayoría de los elementos, pero un enlace funciona mejor, ya que algunos elementos pueden requerir clases de utilidad o estilos personalizados.

#### Texto

Agrega tu texto dentro de un elemento con la clase `.navbar-brand`.

{{< example >}}
<!-- Como un enlace -->
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
  </div>
</nav>

<!-- Como un encabezado -->
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Navbar</span>
  </div>
</nav>
{{< /example >}}

#### Imagen

Puedes reemplazar el texto dentro de `.navbar-brand` con `<img>`.

{{< example >}}
<nav class="navbar navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="/docs/{{< param docs_version >}}/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24">
    </a>
  </div>
</nav>
{{< /example >}}

#### Imagen y texto

También puedes hacer uso de algunas utilidades adicionales para agregar una imagen y texto al mismo tiempo. Ten en cuenta la adición de `.d-inline-block` y `.align-text-top` en `<img>`.

{{< example >}}
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="/docs/{{< param docs_version >}}/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
      Bootstrap
    </a>
  </div>
</nav>
{{< /example >}}

### Nav

Los enlaces de navegación de Navbar se basan en nuestras opciones `.nav` con su propia clase modificadora y requieren el uso de [toggler classes](#toggler) para un estilo responsive adecuado. **La navegación en las navbars también crecerá para ocupar tanto espacio horizontal como sea posible** para mantener el contenido de la barra de navegación alineado de forma segura.

Agrega la clase `.active` en `.nav-link` para indicar la página actual.

Ten en cuenta que también debes agregar el atributo `aria-current` en el `.nav-link` activo.

{{< example >}}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Características</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Precios</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Deshabilitado</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{{< /example >}}

Y debido a que usamos clases para nuestra navegación, puedes evitar por completo el uso de listas si lo deseas.

{{< example >}}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        <a class="nav-link" href="#">Características</a>
        <a class="nav-link" href="#">Precios</a>
        <a class="nav-link disabled">Deshabilitado</a>
      </div>
    </div>
  </div>
</nav>
{{< /example >}}

También puedes usar menús desplegables en tu barra de navegación. Los menús desplegables requieren un elemento envolvente para el posicionamiento, así que asegúrate de usar elementos separados y anidados para `.nav-item` y `.nav-link` como se muestra a continuación.

{{< example >}}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Características</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Precios</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Enlace dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Acción</a></li>
            <li><a class="dropdown-item" href="#">Otra acción</a></li>
            <li><a class="dropdown-item" href="#">Algo más aquí</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
{{< /example >}}

### Formularios

Coloca varios controles de formulario y componentes dentro de una barra de navegación:

{{< example >}}
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar">
      <button class="btn btn-outline-success" type="submit">Buscar</button>
    </form>
  </div>
</nav>
{{< /example >}}

Los elementos secundarios inmediatos de `.navbar` usan un diseño *flex* y tendrán por defecto `justify-content: space-between`. Usa [utilidades flex]({{< docsref "/utilities/flex" >}}) adicionales según sea necesario para ajustar este comportamiento.

{{< example >}}
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar">
      <button class="btn btn-outline-success" type="submit">Buscar</button>
    </form>
  </div>
</nav>
{{< /example >}}

Los input groups también funcionan. Si tu barra de navegación es un formulario completo, o principalmente un formulario, puedes usar el elemento `<form>` como contenedor y ahorrar algo de HTML.

{{< example >}}
<nav class="navbar navbar-light bg-light">
  <form class="container-fluid">
    <div class="input-group">
      <span class="input-group-text" id="basic-addon1">@</span>
      <input type="text" class="form-control" placeholder="Nombre de usuario" aria-label="Nombre de usuario" aria-describedby="basic-addon1">
    </div>
  </form>
</nav>
{{< /example >}}

También se admiten varios botones como parte de estos formularios de barra de navegación. Este también es un gran recordatorio de que las utilidades de alineación vertical se pueden usar para alinear elementos de diferentes tamaños.

{{< example >}}
<nav class="navbar navbar-light bg-light">
  <form class="container-fluid justify-content-start">
    <button class="btn btn-outline-success me-2" type="button">Botón principal</button>
    <button class="btn btn-sm btn-outline-secondary" type="button">Botón más pequeño</button>
  </form>
</nav>
{{< /example >}}

### Texto

Las barras de navegación pueden contener fragmentos de texto con la ayuda de `.navbar-text`. Esta clase ajusta la alineación vertical y el espaciado horizontal para cadenas de texto.

{{< example >}}
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-text">
      Texto de Navbar con un elemento en línea
    </span>
  </div>
</nav>
{{< /example >}}

Mezcla y combina con otros componentes y utilidades según sea necesario.

{{< example >}}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar con texto</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Características</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Precios</a>
        </li>
      </ul>
      <span class="navbar-text">
        Texto con un elemento en línea
      </span>
    </div>
  </div>
</nav>
{{< /example >}}

## Esquemas de color

Tematizar la barra de navegación nunca ha sido tan fácil gracias a la combinación de clases de temas y utilidades de `background-color`. Elije entre `.navbar-light` para usar con colores de fondo claros o `.navbar-dark` para colores de fondo oscuros. Luego, personaliza con las utilidades `.bg-*`.

<div class="bd-example">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Características</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Precios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Acerca</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar">
          <button class="btn btn-outline-light" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>

  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Características</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Precios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Acerca</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar">
          <button class="btn btn-outline-light" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>

  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Características</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Precios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Acerca</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar">
          <button class="btn btn-outline-primary" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>
</div>

```html
<nav class="navbar navbar-dark bg-dark">
  <!-- Navbar content -->
</nav>

<nav class="navbar navbar-dark bg-primary">
  <!-- Navbar content -->
</nav>

<nav class="navbar navbar-light" style="background-color: #e3f2fd;">
  <!-- Navbar content -->
</nav>
```

## Contenedores

Aunque no es obligatorio, puedes envolver una barra de navegación en un `.container` para centrarla en una página, aunque ten en cuenta que aún se requiere un contenedor interno. O puedes agregar un contenedor dentro de `.navbar` para centrar solo el contenido de una [barra de navegación superior fija o estática](#placement).

{{< example >}}
<div class="container">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
    </div>
  </nav>
</div>
{{< /example >}}

Usa cualquiera de los contenedores responsive para cambiar la amplitud de presentación del contenido en tu barra de navegación.

{{< example >}}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-md">
    <a class="navbar-brand" href="#">Navbar</a>
  </div>
</nav>
{{< /example >}}

## Colocación

Utiliza nuestras [utilidades de posición]({{< docsref "/utilities/position" >}}) para colocar barras de navegación en posiciones no estáticas. Elije entre fijo en la parte superior, fijo en la parte inferior, fijo en la parte superior (se desplaza con la página hasta que llega a la parte superior y luego permanece allí) o fijo en la parte inferior (se desplaza con la página hasta que llega al final y luego permanece allí).

Las barras de navegación fijas usan `position: fixed`, lo que significa que se extraen del flujo normal del DOM y pueden requerir CSS personalizado (por ejemplo, `padding-top` en el `<body>`) para evitar la superposición con otros elementos.

{{< example >}}
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Por defecto</a>
  </div>
</nav>
{{< /example >}}

{{< example >}}
<nav class="navbar fixed-top navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Fija en la parte superior</a>
  </div>
</nav>
{{< /example >}}

{{< example >}}
<nav class="navbar fixed-bottom navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Fija en la parte inferior</a>
  </div>
</nav>
{{< /example >}}

{{< example >}}
<nav class="navbar sticky-top navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Pegajosa en la parte superior</a>
  </div>
</nav>
{{< /example >}}

{{< example >}}
<nav class="navbar sticky-bottom navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Pegajosa en la parte inferior</a>
  </div>
</nav>
{{< /example >}}

## Scrolling

Agrega `.navbar-nav-scroll` a `.navbar-nav` (u otro subcomponente de la barra de navegación) para habilitar el desplazamiento vertical dentro del contenido toggle y collapse de una barra de navegación. De forma predeterminada, el desplazamiento se inicia en `75vh` (o el 75% de la altura del viewport), pero puedes sobrescribirlo con la propiedad personalizada CSS local `--bs-navbar-height` o estilos personalizados. En viewports más grandes, cuando se expande la barra de navegación, el contenido aparecerá como en una barra de navegación predeterminada.

Ten en cuenta que este comportamiento viene con un inconveniente potencial de `overflow`: al configurar `overflow-y: auto` (requerido para desplazar el contenido aquí), `overflow-x` es el equivalente de `auto`, que recortará algo de contenido horizontal.

Aquí hay un ejemplo de barra de navegación que usa `.navbar-nav-scroll` con `style="--bs-scroll-height: 100px;"`, con algunas utilidades de margen adicionales para un espacio óptimo.

{{< example >}}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar scroll</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Enlace</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="#">Acción</a></li>
            <li><a class="dropdown-item" href="#">Otra acción</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Algo más aquí</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Enlace</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar">
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
{{< /example >}}

## Comportamiento responsive

Las barras de navegación pueden usar las clases `.navbar-toggler`, `.navbar-collapse` y `.navbar-expand{-sm|-md|-lg|-xl|-xxl}` para determinar cuándo su contenido colapsa detrás de un botón. En combinación con otras utilidades, puedes elegir fácilmente cuándo mostrar u ocultar elementos particulares.

Para las barras de navegación que nunca colapsan, agrega la clase `.navbar-expand` en la barra de navegación. Para las barras de navegación que siempre colapsan, no agregues ninguna clase `.navbar-expand`.

### Toggler

Los togglers de la barra de navegación están alineados a la izquierda de forma predeterminada, pero si siguen a un elemento hermano como `.navbar-brand`, se alinearán automáticamente en el extremo derecho. Al invertir el marcado, se invertirá la ubicación del toggler. A continuación se muestran ejemplos de diferentes estilos de toggle.

Sin mostrar `.navbar-brand` en el breakpoint más pequeño:

{{< example >}}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">Marca oculta</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Enlace</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Deshabilitado</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar">
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
{{< /example >}}

Con un nombre de marca que se muestra a la izquierda y un toggler a la derecha:

{{< example >}}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Enlace</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Deshabilitado</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar">
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
{{< /example >}}

Con un toggler a la izquierda y el nombre de la marca a la derecha:

{{< example >}}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Enlace</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Deshabilitado</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar">
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
{{< /example >}}

### Contenido externo

En ocasiones, podrías desear utilizar el complemento Collapse para activar un elemento contenedor para el contenido que se encuentra estructuralmente fuera de `.navbar`. Debido a que nuestro complemento funciona en la coincidencia del `id` y `data-bs-target`, ¡eso es fácil de hacer!

{{< example >}}
<div class="collapse" id="navbarToggleExternalContent">
  <div class="bg-dark p-4">
    <h5 class="text-white h4">Contenido que colapsa</h5>
    <span class="text-muted">Conmutable a través de navbar brand.</span>
  </div>
</div>
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
{{< /example >}}

Cuando hagas esto, te recomendamos que incluyas JavaScript adicional para mover el foco mediante programación al contenedor cuando se abre. De lo contrario, es probable que los usuarios de teclados y de tecnologías de asistencia tengan dificultades para encontrar el contenido recién revelado, especialmente si el contenedor que se abrió viene *antes* del toggler en la estructura del documento. También recomendamos asegurarse de que el toggler tenga el atributo `aria-controls`, apuntando al `id` del contenedor de contenido. En teoría, esto permite a los usuarios de tecnología de asistencia saltar directamente del toggler al contenedor que controla, pero el soporte para esto actualmente es bastante irregular.

### Offcanvas

Transforma tu barra de navegación que se expande y contrae en un cajón fuera del lienzo con el complemento Offcanvas. Extendemos los estilos predeterminados de offcanvas y usamos nuestras clases `.navbar-expand-*` para crear una barra lateral de navegación dinámica y flexible.

En el siguiente ejemplo, para crear una barra de navegación Offcanvas que siempre está colapsada en todos los brakpoints, omite por completo la clase `.navbar-expand-*`.

{{< example >}}
<nav class="navbar navbar-light bg-light fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Offcanvas navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Enlace</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
              <li><a class="dropdown-item" href="#">Acción</a></li>
              <li><a class="dropdown-item" href="#">Otra acción</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Algo más aquí</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar">
          <button class="btn btn-outline-success" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </div>
</nav>
{{< /example >}}

Para crear una barra de navegación fuera del lienzo que se expanda a una barra de navegación normal en un breakpoint específico como `lg`, usa `.navbar-expand-lg`.

```html
<nav class="navbar navbar-light navbar-expand-lg bg-light fixed-top">
  <a class="navbar-brand" href="#">Offcanvas navbar</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
    ...
  </div>
</nav>
```

## Sass

### Variables

{{< scss-docs name="navbar-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="navbar-theme-variables" file="scss/_variables.scss" >}}

### Loop

[Las clases de expansión/colapso de la barra de navegación responsive](#responsive-behaviors) (p. ej., `.navbar-expand-lg`) se combinan con el mapa `$breakpoints` y se generan a través de un bucle en `scss/_navbar.scss`.

{{< scss-docs name="navbar-expand-loop" file="scss/_navbar.scss" >}}
