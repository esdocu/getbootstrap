---
layout: docs
title: Layout
description: Proporciona cierta estructura a tus formularios, desde implementaciones en línea hasta horizontales y cuadrículas personalizadas, con nuestras opciones de diseño de formularios.
group: forms
toc: true
---

## Formularios

Cada grupo de campos de formulario debe residir en un elemento `<form>`. Bootstrap no proporciona un estilo predeterminado para el elemento `<form>`, pero hay algunas características potentes del navegador que se proporcionan de forma predeterminada.

- ¿Nuevo en los formularios del navegador? Considera revisar [los documentos del formulario MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) para obtener una descripción general y una lista completa de los atributos disponibles.
- `<button>` está dentro de un `<form>` por defecto a `type="submit"`, así que esfuértate por ser específico e incluir siempre un `type`.
- Puedes deshabilitar cada elemento de formulario dentro de un formulario con el atributo `disabled` en `<form>`.

Dado que Bootstrap aplica `display: block` y `width: 100%` a casi todos nuestros controles de formulario, los formularios se apilarán verticalmente de manera predeterminada. Se pueden usar clases adicionales para variar este diseño según el formulario.

## Utilidades

Las [utilidades de margen]({{< docsref "/utilities/spacing" >}}) son la forma más fácil de agregar algo de estructura a los formularios. Proporcionan una agrupación básica de etiquetas, controles, texto de formulario opcional y mensajes de validación de formulario. Recomendamos apegarse a las utilidades de `margin-bottom` y usar una sola dirección en todo el formulario para mantener la coherencia.

Siéntete libre de construir tus formularios como quieras, con `<fieldset>`s, `<div>`s, o casi cualquier otro elemento.

{{< example >}}
<div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Etiqueta de ejemplo</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Ejemplo de input placeholder">
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Otra etiqueta</label>
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Otro input placeholder">
</div>
{{< /example >}}

## Cuadrícula de formulario

Se pueden construir formularios más complejos utilizando nuestras clases de cuadrícula. Utilízalos para diseños de formularios que requieran varias columnas, anchos variados y opciones de alineación adicionales. **Requiere que la variable Sass `$enable-grid-classes` esté habilitada** (activada de forma predeterminada).

{{< example >}}
<div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="Nombre" aria-label="Nombre">
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Apellido" aria-label="Apellido">
  </div>
</div>
{{< /example >}}

## Gutters

Al agregar [clases de modificador de gutter]({{< docsref "/layout/gutters" >}}), puede tener control sobre el ancho del gutter, así como la dirección en línea y del bloque. **También requiere que la variable Sass `$enable-grid-classes` esté habilitada** (activada de manera predeterminada).

{{< example >}}
<div class="row g-3">
  <div class="col">
    <input type="text" class="form-control" placeholder="Nombre" aria-label="Nombre">
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Apellido" aria-label="Apellido">
  </div>
</div>
{{< /example >}}

También se pueden crear diseños más complejos con el sistema de cuadrícula.

{{< example >}}
<form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4">
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Contraseña</label>
    <input type="password" class="form-control" id="inputPassword4">
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Dirección</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Dirección 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Ciudad</label>
    <input type="text" class="form-control" id="inputCity">
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">Estado</label>
    <select id="inputState" class="form-select">
      <option selected>Elige...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Código postal</label>
    <input type="text" class="form-control" id="inputZip">
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Verifícame
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Ingresar</button>
  </div>
</form>
{{< /example >}}

## Formularios horizontales

Crea formularios horizontales con la cuadrícula agregando la clase `.row` para formar grupos y usando las clases `.col-*-*` para especificar el ancho de tus etiquetas y controles. Asegúrate de agregar `.col-form-label` a tus `<label>`s también para que estén centrados verticalmente con tus controles de formulario asociados.

A veces, es posible que necesites utilizar utilidades de margen o padding para crear la alineación perfecta que necesitas. Por ejemplo, hemos eliminado el `padding-top` en nuestra etiqueta de entradas de radio apiladas para alinear mejor la línea de base del texto.

{{< example >}}
<form>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3">
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Contraseña</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3">
    </div>
  </div>
  <fieldset class="row mb-3">
    <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
        <label class="form-check-label" for="gridRadios1">
          Primer radio
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
        <label class="form-check-label" for="gridRadios2">
          Segundo radio
        </label>
      </div>
      <div class="form-check disabled">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
        <label class="form-check-label" for="gridRadios3">
          Tercer radio desactivado
        </label>
      </div>
    </div>
  </fieldset>
  <div class="row mb-3">
    <div class="col-sm-10 offset-sm-2">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1">
        <label class="form-check-label" for="gridCheck1">
          Ejemplo de checkbox
        </label>
      </div>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Ingresar</button>
</form>
{{< /example >}}

### Tamaño de etiqueta de formulario horizontal

Asegúrate de usar `.col-form-label-sm` o `.col-form-label-lg` en tus `<label>`s o `<legend>`s para seguir correctamente el tamaño de `.form-control-lg` y `.form-control-sm`.

{{< example >}}
<div class="row mb-3">
  <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
  <div class="col-sm-10">
    <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm">
  </div>
</div>
<div class="row mb-3">
  <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
  <div class="col-sm-10">
    <input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label">
  </div>
</div>
<div class="row">
  <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
  <div class="col-sm-10">
    <input type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg">
  </div>
</div>
{{< /example >}}

## Tamaño de columna

Como se muestra en los ejemplos anteriores, nuestro sistema de cuadrícula te permite colocar cualquier cantidad de `.col`s dentro de una `.row`. Dividirán el ancho disponible en partes iguales entre ellos. También puedes elegir un subconjunto de tus columnas para que ocupe más o menos espacio, mientras que los `.col`s restantes dividen el resto por igual, con clases de columnas específicas como `.col-sm-7`.

{{< example >}}
<div class="row g-3">
  <div class="col-sm-7">
    <input type="text" class="form-control" placeholder="Ciudad" aria-label="Ciudad">
  </div>
  <div class="col-sm">
    <input type="text" class="form-control" placeholder="Estado" aria-label="Estado">
  </div>
  <div class="col-sm">
    <input type="text" class="form-control" placeholder="Código postal" aria-label="Código postal">
  </div>
</div>
{{< /example >}}

## Auto-sizing

The example below uses a flexbox utility to vertically center the contents and changes `.col` to `.col-auto` so that your columns only take up as much space as needed. Put another way, the column sizes itself based on the contents.

{{< example >}}
<form class="row gy-2 gx-3 align-items-center">
  <div class="col-auto">
    <label class="visually-hidden" for="autoSizingInput">Nombre</label>
    <input type="text" class="form-control" id="autoSizingInput" placeholder="Jane Doe">
  </div>
  <div class="col-auto">
    <label class="visually-hidden" for="autoSizingInputGroup">Nombre de usuario</label>
    <div class="input-group">
      <div class="input-group-text">@</div>
      <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="Nombre de usuario">
    </div>
  </div>
  <div class="col-auto">
    <label class="visually-hidden" for="autoSizingSelect">Preferencia</label>
    <select class="form-select" id="autoSizingSelect">
      <option selected>Elige...</option>
      <option value="1">Uno</option>
      <option value="2">Dos</option>
      <option value="3">Tres</option>
    </select>
  </div>
  <div class="col-auto">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="autoSizingCheck">
      <label class="form-check-label" for="autoSizingCheck">
        Recuérdame
      </label>
    </div>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary">Enviar</button>
  </div>
</form>
{{< /example >}}

Luego puedes mezclar esto una vez más con clases de columna de tamaño específico.

{{< example >}}
<form class="row gx-3 gy-2 align-items-center">
  <div class="col-sm-3">
    <label class="visually-hidden" for="specificSizeInputName">Nombre</label>
    <input type="text" class="form-control" id="specificSizeInputName" placeholder="Jane Doe">
  </div>
  <div class="col-sm-3">
    <label class="visually-hidden" for="specificSizeInputGroupUsername">Nombre de usuario</label>
    <div class="input-group">
      <div class="input-group-text">@</div>
      <input type="text" class="form-control" id="specificSizeInputGroupUsername" placeholder="Nombre de usuario">
    </div>
  </div>
  <div class="col-sm-3">
    <label class="visually-hidden" for="specificSizeSelect">Preferencia</label>
    <select class="form-select" id="specificSizeSelect">
      <option selected>Elige...</option>
      <option value="1">Uno</option>
      <option value="2">Dos</option>
      <option value="3">Tres</option>
    </select>
  </div>
  <div class="col-auto">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="autoSizingCheck2">
      <label class="form-check-label" for="autoSizingCheck2">
        Recuérdame
      </label>
    </div>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary">Enviar</button>
  </div>
</form>
{{< /example >}}

## Formularios en línea

Usa las clases `.row-cols-*` para crear diseños horizontales responsive. Al agregar [clases de modificadores de gutters]({{< docsref "/layout/gutters" >}}), tendremos gutters en direcciones horizontales y verticales. En viewports móviles estrechos, `.col-12` ayuda a apilar los controles de formulario y más. `.align-items-center` alinea los elementos del formulario en el medio, haciendo que `.form-checkbox` se alinee correctamente.

{{< example >}}
<form class="row row-cols-lg-auto g-3 align-items-center">
  <div class="col-12">
    <label class="visually-hidden" for="inlineFormInputGroupUsername">Nombre de usuario</label>
    <div class="input-group">
      <div class="input-group-text">@</div>
      <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Nombre de usuario">
    </div>
  </div>

  <div class="col-12">
    <label class="visually-hidden" for="inlineFormSelectPref">Preferencia</label>
    <select class="form-select" id="inlineFormSelectPref">
      <option selected>Elige...</option>
      <option value="1">Uno</option>
      <option value="2">Dos</option>
      <option value="3">Tres</option>
    </select>
  </div>

  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="inlineFormCheck">
      <label class="form-check-label" for="inlineFormCheck">
        Recuérdame
      </label>
    </div>
  </div>

  <div class="col-12">
    <button type="submit" class="btn btn-primary">Enviar</button>
  </div>
</form>
{{< /example >}}
