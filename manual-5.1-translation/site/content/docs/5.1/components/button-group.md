---
layout: docs
title: Button group
description: Agrupa una serie de botones en una sola línea o apílalos en una columna vertical.
group: components
toc: true
---

## Ejemplo básico

Envuelve una serie de botones con `.btn` en `.btn-group`.

{{< example >}}
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Izquierdo</button>
  <button type="button" class="btn btn-primary">Medio</button>
  <button type="button" class="btn btn-primary">Derecho</button>
</div>
{{< /example >}}

{{< callout warning >}}
##### Asegurar el `role` correcto y proporcionar una etiqueta

Para que las tecnologías de asistencia (como los lectores de pantalla) transmitan que una serie de botones está agrupada, se debe proporcionar un atributo `role` apropiado. Para los grupos de botones, sería `role="group"`, mientras que las barras de herramientas deberían tener `role="toolbar"`.

Además, los grupos y las barras de herramientas deben recibir una etiqueta explícita, ya que, de lo contrario, la mayoría de las tecnologías de asistencia no los anunciarán, a pesar de la presencia del atributo de rol correcto. En los ejemplos proporcionados aquí, usamos `aria-label`, pero también se pueden usar alternativas como `aria-labelledby`.
{{< /callout >}}

Estas clases también se pueden agregar a grupos de enlaces, como alternativa a los [componentes de navegación `.nav`]({{< docsref "/components/navs-tabs" >}}).

{{< example >}}
<div class="btn-group">
  <a href="#" class="btn btn-primary active" aria-current="page">Enlace activo</a>
  <a href="#" class="btn btn-primary">Enlace</a>
  <a href="#" class="btn btn-primary">Enlace</a>
</div>
{{< /example >}}

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

## Estilos mixtos

{{< example >}}
<div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-danger">Izquierda</button>
  <button type="button" class="btn btn-warning">Medio</button>
  <button type="button" class="btn btn-success">Derecha</button>
</div>
{{< /example >}}

## Estilos de contorno

{{< example >}}
<div class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary">Izquierda</button>
  <button type="button" class="btn btn-outline-primary">Medio</button>
  <button type="button" class="btn btn-outline-primary">Derecha</button>
</div>
{{< /example >}}

## Gropos de botones checkbox y radio

Combina botones similares a casillas de verificación y botones radio [botones toggle]({{< docsref "/forms/checks-radios" >}}) en un grupo de botones de apariencia perfecta.

{{< example >}}
<div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
  <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck1">Checkbox 1</label>

  <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck2">Checkbox 2</label>

  <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck3">Checkbox 3</label>
</div>
{{< /example >}}

{{< example >}}
<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
</div>
{{< /example >}}

## Botones toolbar

Combina conjuntos de grupos de botones en barras de herramientas de botones para componentes más complejos. Usa clases de utilidad según sea necesario para espaciar grupos, botones y más.

{{< example >}}
<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group me-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-primary">1</button>
    <button type="button" class="btn btn-primary">2</button>
    <button type="button" class="btn btn-primary">3</button>
    <button type="button" class="btn btn-primary">4</button>
  </div>
  <div class="btn-group me-2" role="group" aria-label="Second group">
    <button type="button" class="btn btn-secondary">5</button>
    <button type="button" class="btn btn-secondary">6</button>
    <button type="button" class="btn btn-secondary">7</button>
  </div>
  <div class="btn-group" role="group" aria-label="Third group">
    <button type="button" class="btn btn-info">8</button>
  </div>
</div>
{{< /example >}}

Siéntete libre de mezclar grupos de inputs con grupos de botones en tus barras de herramientas. Similar al ejemplo anterior, es probable que necesites algunas utilidades para espaciar las cosas correctamente.

{{< example >}}
<div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group me-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-outline-secondary">1</button>
    <button type="button" class="btn btn-outline-secondary">2</button>
    <button type="button" class="btn btn-outline-secondary">3</button>
    <button type="button" class="btn btn-outline-secondary">4</button>
  </div>
  <div class="input-group">
    <div class="input-group-text" id="btnGroupAddon">@</div>
    <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon">
  </div>
</div>

<div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group" role="group" aria-label="First group">
    <button type="button" class="btn btn-outline-secondary">1</button>
    <button type="button" class="btn btn-outline-secondary">2</button>
    <button type="button" class="btn btn-outline-secondary">3</button>
    <button type="button" class="btn btn-outline-secondary">4</button>
  </div>
  <div class="input-group">
    <div class="input-group-text" id="btnGroupAddon2">@</div>
    <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon2">
  </div>
</div>
{{< /example >}}

{{< callout info >}}
{{< partial "maybe-interested-2.md" >}}
{{< /callout >}}

## Dimensionamiento

En lugar de aplicar clases de tamaño de botón a cada botón en un grupo, simplemente agrega `.btn-group-*` a cada `.btn-group`, incluyendo a cada uno al anidar varios grupos.

<div class="bd-example">
  <div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
    <button type="button" class="btn btn-outline-dark">Izquierda</button>
    <button type="button" class="btn btn-outline-dark">Medio</button>
    <button type="button" class="btn btn-outline-dark">Derecha</button>
  </div>
  <br>
  <div class="btn-group" role="group" aria-label="Default button group">
    <button type="button" class="btn btn-outline-dark">Izquierda</button>
    <button type="button" class="btn btn-outline-dark">Medio</button>
    <button type="button" class="btn btn-outline-dark">Derecha</button>
  </div>
  <br>
  <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
    <button type="button" class="btn btn-outline-dark">Izquierda</button>
    <button type="button" class="btn btn-outline-dark">Medio</button>
    <button type="button" class="btn btn-outline-dark">Derecha</button>
  </div>
</div>

```html
<div class="btn-group btn-group-lg" role="group" aria-label="...">...</div>
<div class="btn-group" role="group" aria-label="...">...</div>
<div class="btn-group btn-group-sm" role="group" aria-label="...">...</div>
```

## Anidamiento

Coloca un `.btn-group` dentro de otro `.btn-group` cuando desees que los menús desplegables se mezclen con una serie de botones.

{{< example >}}
<div class="btn-group" role="group" aria-label="Button group with nested dropdown">
  <button type="button" class="btn btn-primary">1</button>
  <button type="button" class="btn btn-primary">2</button>

  <div class="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown
    </button>
    <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <li><a class="dropdown-item" href="#">Enlace dropdown</a></li>
      <li><a class="dropdown-item" href="#">Enlace dropdown</a></li>
    </ul>
  </div>
</div>
{{< /example >}}

{{< callout info >}}
{{< partial "maybe-interested-3.md" >}}
{{< /callout >}}

## Variación vertical

Haz que un conjunto de botones aparezcan apilados verticalmente en lugar de horizontalmente. **Los menús desplegables de botones divididos no son compatibles aquí.**

<div class="bd-example">
  <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
    <button type="button" class="btn btn-dark">Botón</button>
    <button type="button" class="btn btn-dark">Botón</button>
    <button type="button" class="btn btn-dark">Botón</button>
    <button type="button" class="btn btn-dark">Botón</button>
    <button type="button" class="btn btn-dark">Botón</button>
    <button type="button" class="btn btn-dark">Botón</button>
  </div>
</div>

<div class="bd-example">
  <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
    <button type="button" class="btn btn-primary">Botón</button>
    <button type="button" class="btn btn-primary">Botón</button>
    <div class="btn-group" role="group">
      <button id="btnGroupVerticalDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
      </button>
      <ul class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop1">
        <li><a class="dropdown-item" href="#">Enlace dropdown</a></li>
        <li><a class="dropdown-item" href="#">Enlace dropdown</a></li>
      </ul>
    </div>
    <button type="button" class="btn btn-primary">Botón</button>
    <button type="button" class="btn btn-primary">Botón</button>
    <div class="btn-group" role="group">
      <button id="btnGroupVerticalDrop2" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
      </button>
      <ul class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop2">
        <li><a class="dropdown-item" href="#">Enlace dropdown</a></li>
        <li><a class="dropdown-item" href="#">Enlace dropdown</a></li>
      </ul>
    </div>
    <div class="btn-group" role="group">
      <button id="btnGroupVerticalDrop3" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
      </button>
      <ul class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop3">
        <li><a class="dropdown-item" href="#">Enlace dropdown</a></li>
        <li><a class="dropdown-item" href="#">Enlace dropdown</a></li>
      </ul>
    </div>
    <div class="btn-group" role="group">
      <button id="btnGroupVerticalDrop4" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
      </button>
      <ul class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop4">
        <li><a class="dropdown-item" href="#">Enlace dropdown</a></li>
        <li><a class="dropdown-item" href="#">Enlace dropdown</a></li>
      </ul>
    </div>
  </div>
</div>

<div class="bd-example">
  <div class="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
    <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio1" autocomplete="off" checked>
    <label class="btn btn-outline-danger" for="vbtn-radio1">Radio 1</label>
    <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio2" autocomplete="off">
    <label class="btn btn-outline-danger" for="vbtn-radio2">Radio 2</label>
    <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio3" autocomplete="off">
    <label class="btn btn-outline-danger" for="vbtn-radio3">Radio 3</label>
  </div>
</div>

```html
<div class="btn-group-vertical">
  ...
</div>
```
