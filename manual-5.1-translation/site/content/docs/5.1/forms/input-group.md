---
layout: docs
title: Input group
description: Amplía fácilmente los controles de formulario agregando texto, botones o grupos de botones a ambos lados de las entradas de texto, selecciones personalizadas y entradas de archivos personalizados.
group: forms
toc: true
---

## Ejemplos básicos

Coloca un complemento o botón a cada lado de un input. Recuerda colocar `<label>`s fuera del grupo de entrada.

{{< example >}}
<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Nombre de usuario" aria-label="Nombre de usuario" aria-describedby="basic-addon1">
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Nombre de usuario del destinatario" aria-label="Nombre de usuario del destinatario" aria-describedby="basic-addon2">
  <span class="input-group-text" id="basic-addon2">@example.com</span>
</div>

<label for="basic-url" class="form-label">Tu URL</label>
<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
</div>

<div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <input type="text" class="form-control" aria-label="Cantidad (al dólar más cercano)">
  <span class="input-group-text">.00</span>
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Nombre de usuario" aria-label="Nombre de usuario">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Servidor" aria-label="Servidor">
</div>

<div class="input-group">
  <span class="input-group-text">Con textarea</span>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>
{{< /example >}}

## Wrapping

Los grupos de inputs se ajustan de forma predeterminada a través de `flex-wrap: wrap` para acomodar la validación de campos de formulario personalizados dentro de un grupo de entrada. Puedes deshabilitar esto con `.flex-nowrap`.

{{< example >}}
<div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">@</span>
  <input type="text" class="form-control" placeholder="Nombre de usuario" aria-label="Nombre de usuario" aria-describedby="addon-wrapping">
</div>
{{< /example >}}

## Dimensionamiento

Agrega las clases de tamaño de formulario relativo al propio `.input-group` y el contenido en su interior cambiará de tamaño automáticamente, sin necesidad de repetir las clases de tamaño de control de formulario en cada elemento.

**No se admite el dimensionado de los elementos individuales del grupo de inputs.**

{{< example >}}
<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-sm">Pequeño</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
</div>

<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Por defecto</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>

<div class="input-group input-group-lg">
  <span class="input-group-text" id="inputGroup-sizing-lg">Grande</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
</div>
{{< /example >}}

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

## Checkboxes y radios

Coloca cualquier casilla de verificación u opción de radio dentro de un complemento de grupo de inputs en lugar de texto. Recomendamos agregar `.mt-0` a `.form-check-input` cuando no haya texto visible junto a la entrada.

{{< example >}}
<div class="input-group mb-3">
  <div class="input-group-text">
    <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">
  </div>
  <input type="text" class="form-control" aria-label="Text input with checkbox">
</div>

<div class="input-group">
  <div class="input-group-text">
    <input class="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input">
  </div>
  <input type="text" class="form-control" aria-label="Text input with radio button">
</div>
{{< /example >}}

## Múltiples inputs

Si bien se admiten visualmente varios `<input>`, los estilos de validación solo están disponibles para grupos de entrada con un solo `<input>`.

{{< example >}}
<div class="input-group">
  <span class="input-group-text">Nombre y apellido</span>
  <input type="text" aria-label="First name" class="form-control">
  <input type="text" aria-label="Last name" class="form-control">
</div>
{{< /example >}}

## Múltiples complementos

Se admiten múltiples complementos y se pueden combinar con versiones de casilla de verificación y radio.

{{< example >}}
<div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <span class="input-group-text">0.00</span>
  <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
</div>

<div class="input-group">
  <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
  <span class="input-group-text">$</span>
  <span class="input-group-text">0.00</span>
</div>
{{< /example >}}

## Complementos de botón

{{< example >}}
<div class="input-group mb-3">
  <button class="btn btn-outline-secondary" type="button" id="button-addon1">Botón</button>
  <input type="text" class="form-control" placeholder="" aria-label="Texto de ejemplo con complemento de botón" aria-describedby="button-addon1">
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Nombre de usuario del destinatario" aria-label="Nombre de usuario del destinatario" aria-describedby="button-addon2">
  <button class="btn btn-outline-secondary" type="button" id="button-addon2">Botón</button>
</div>

<div class="input-group mb-3">
  <button class="btn btn-outline-secondary" type="button">Botón</button>
  <button class="btn btn-outline-secondary" type="button">Botón</button>
  <input type="text" class="form-control" placeholder="" aria-label="Texto de ejemplo con complementos de dos botones">
</div>

<div class="input-group">
  <input type="text" class="form-control" placeholder="Nombre de usuario del destinatario" aria-label="Nombre de usuario del destinatario con complementos de dos botones">
  <button class="btn btn-outline-secondary" type="button">Botón</button>
  <button class="btn btn-outline-secondary" type="button">Botón</button>
</div>
{{< /example >}}

## Botones con menús desplegables

{{< example >}}
<div class="input-group mb-3">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Acción</a></li>
    <li><a class="dropdown-item" href="#">Otra acción</a></li>
    <li><a class="dropdown-item" href="#">Algo más aquí</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Enlace separado</a></li>
  </ul>
  <input type="text" class="form-control" aria-label="Text input with dropdown button">
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" aria-label="Text input with dropdown button">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Acción</a></li>
    <li><a class="dropdown-item" href="#">Otra acción</a></li>
    <li><a class="dropdown-item" href="#">Algo más aquí</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Enlace separado</a></li>
  </ul>
</div>

<div class="input-group">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Acción antes del input</a></li>
    <li><a class="dropdown-item" href="#">Otra acción antes</a></li>
    <li><a class="dropdown-item" href="#">Algo más aquí</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Enlace separado</a></li>
  </ul>
  <input type="text" class="form-control" aria-label="Text input with 2 dropdown buttons">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Acción</a></li>
    <li><a class="dropdown-item" href="#">Otra acción</a></li>
    <li><a class="dropdown-item" href="#">Algo más aquí</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Enlace separado</a></li>
  </ul>
</div>
{{< /example >}}

{{< callout info >}}
{{< partial "maybe-interested-2.md" >}}
{{< /callout >}}

## Botones segmentados

{{< example >}}
<div class="input-group mb-3">
  <button type="button" class="btn btn-outline-secondary">Acción</button>
  <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Acción</a></li>
    <li><a class="dropdown-item" href="#">Otra acción</a></li>
    <li><a class="dropdown-item" href="#">Algo más aquí</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Enlace separado</a></li>
  </ul>
  <input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
</div>

<div class="input-group">
  <input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
  <button type="button" class="btn btn-outline-secondary">Acción</button>
  <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Acción</a></li>
    <li><a class="dropdown-item" href="#">Otra acción</a></li>
    <li><a class="dropdown-item" href="#">Algo más aquí</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Enlace separado</a></li>
  </ul>
</div>
{{< /example >}}

## Formularios personalizados

Los grupos de inputs incluyen soporte para selects personalizadas y entradas de archivos personalizados. Las versiones predeterminadas del navegador de estos no son compatibles.

### Custom select

{{< example >}}
<div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupSelect01">Opciones</label>
  <select class="form-select" id="inputGroupSelect01">
    <option selected>Seleccionar...</option>
    <option value="1">Uno</option>
    <option value="2">Dos</option>
    <option value="3">Tres</option>
  </select>
</div>

<div class="input-group mb-3">
  <select class="form-select" id="inputGroupSelect02">
    <option selected>Seleccionar...</option>
    <option value="1">Uno</option>
    <option value="2">Dos</option>
    <option value="3">Tres</option>
  </select>
  <label class="input-group-text" for="inputGroupSelect02">Opciones</label>
</div>

<div class="input-group mb-3">
  <button class="btn btn-outline-secondary" type="button">Botón</button>
  <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
    <option selected>Seleccionar...</option>
    <option value="1">Uno</option>
    <option value="2">Dos</option>
    <option value="3">Tres</option>
  </select>
</div>

<div class="input-group">
  <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
    <option selected>Seleccionar...</option>
    <option value="1">Uno</option>
    <option value="2">Dos</option>
    <option value="3">Tres</option>
  </select>
  <button class="btn btn-outline-secondary" type="button">Botón</button>
</div>
{{< /example >}}

### Entrada de archivo personalizado

{{< example >}}
<div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupFile01">Subir</label>
  <input type="file" class="form-control" id="inputGroupFile01">
</div>

<div class="input-group mb-3">
  <input type="file" class="form-control" id="inputGroupFile02">
  <label class="input-group-text" for="inputGroupFile02">Subir</label>
</div>

<div class="input-group mb-3">
  <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03">Botón</button>
  <input type="file" class="form-control" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload">
</div>

<div class="input-group">
  <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
  <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Botón</button>
</div>
{{< /example >}}

{{< callout info >}}
{{< partial "maybe-interested-3.md" >}}
{{< /callout >}}

## Sass

### Variables

{{< scss-docs name="input-group-variables" file="scss/_variables.scss" >}}
