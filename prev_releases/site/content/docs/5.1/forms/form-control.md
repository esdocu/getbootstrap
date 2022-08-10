---
layout: docs
title: Controles de formulario
description: Proporciona a controles de formulario como `<input>`s y `<textarea>`s una actualización con estilos personalizados, tamaño, estados de enfoque y más.
group: forms
toc: true
---

## Ejemplo

{{< example >}}
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Correo electrónico</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Ejemplo de textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
{{< /example >}}

## Dimensionamiento

Establece alturas usando clases como `.form-control-lg` y `.form-control-sm`.

{{< example >}}
<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example">
<input class="form-control" type="text" placeholder="Default input" aria-label="default input example">
<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example">
{{< /example >}}

## Deshabilitado

Agrega el atributo booleano `disabled` en un input para darle una apariencia atenuada y eliminar los eventos de puntero.

{{< example >}}
<input class="form-control" type="text" placeholder="Input deshabilitado" aria-label="Ejemplo de input deshabilitado" disabled>
<input class="form-control" type="text" value="Input deshabilitado de solo lectura" aria-label="Ejemplo de input deshabilitado" disabled readonly>
{{< /example >}}

## Solo lectura

Agrega el atributo booleano `readonly` en un input para evitar la modificación de su valor.

{{< example >}}
<input class="form-control" type="text" value="Input de solo lectura..." aria-label="Ejemplo de input de solo lectura" readonly>
{{< /example >}}

## Solo lectura como texto plano

Si deseas tener elementos `<input readonly>` en tu formulario con estilo de texto sin formato, usa la clase `.form-control-plaintext` para eliminar el estilo de campo de formulario predeterminado y conservar el margen y padding correctos.

{{< example >}}
  <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Contraseña</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword">
    </div>
  </div>
{{< /example >}}

{{< example >}}
<form class="row g-3">
  <div class="col-auto">
    <label for="staticEmail2" class="visually-hidden">Email</label>
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
  </div>
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Contraseña</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Contraseña">
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Confirmar identidad</button>
  </div>
</form>
{{< /example >}}

## File input

{{< example >}}
<div class="mb-3">
  <label for="formFile" class="form-label">Ejemplo de entrada de archivo predeterminado</label>
  <input class="form-control" type="file" id="formFile">
</div>
<div class="mb-3">
  <label for="formFileMultiple" class="form-label">Ejemplo de entrada de varios archivos</label>
  <input class="form-control" type="file" id="formFileMultiple" multiple>
</div>
<div class="mb-3">
  <label for="formFileDisabled" class="form-label">Ejemplo de entrada de archivo deshabilitado</label>
  <input class="form-control" type="file" id="formFileDisabled" disabled>
</div>
<div class="mb-3">
  <label for="formFileSm" class="form-label">Ejemplo de entrada de archivo pequeño</label>
  <input class="form-control form-control-sm" id="formFileSm" type="file">
</div>
<div>
  <label for="formFileLg" class="form-label">Ejemplo de entrada de archivos grandes</label>
  <input class="form-control form-control-lg" id="formFileLg" type="file">
</div>
{{< /example >}}

## Color

{{< example >}}
<label for="exampleColorInput" class="form-label">Selector de color</label>
<input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color">
{{< /example >}}

## Listas de datos

Las listas de datos te permiten crear un grupo de `<option>`s a las que se puedes acceder (y autocompletar) desde un `<input>`. Estos son similares a los elementos `<select>`, pero vienen con más limitaciones y diferencias de estilo de menú. Si bien la mayoría de los navegadores y sistemas operativos incluyen cierto soporte para los elementos `<datalist>`, su estilo es inconsistente en el mejor de los casos.

Obtén más información sobre [soporte para elementos datalist](https://caniuse.com/datalist).

{{< example >}}
<label for="exampleDataList" class="form-label">Ejemplo de lista de datos</label>
<input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
<datalist id="datalistOptions">
  <option value="San Francisco">
  <option value="New York">
  <option value="Seattle">
  <option value="Los Angeles">
  <option value="Chicago">
</datalist>
{{< /example >}}

## Sass

### Variables

`$input-*` se comparten en la mayoría de nuestros controles de formulario (y no en los botones).

{{< scss-docs name="form-input-variables" file="scss/_variables.scss" >}}

`$form-label-*` y `$form-text-*` son para nuestros componentes `<label>` y `.form-text`.

{{< scss-docs name="form-label-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="form-text-variables" file="scss/_variables.scss" >}}

`$form-file-*` son para la entrada de archivos.

{{< scss-docs name="form-file-variables" file="scss/_variables.scss" >}}
