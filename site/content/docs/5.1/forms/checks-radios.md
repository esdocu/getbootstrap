---
layout: docs
title: Checks y radios
description: Crea casillas de verificación y radios consistentes entre navegadores y dispositivos con nuestro componente de checks completamente reescrito.
group: forms
aliases: "/docs/5.1/forms/checks/"
toc: true
---

## Enfoque

Las casillas de verificación y radios predeterminadas del navegador se reemplazan con la ayuda de `.form-check`, una serie de clases para ambos tipos de entrada que mejoran el diseño y el comportamiento de tus elementos HTML, que brindan una mayor personalización y consistencia entre navegadores. Las casillas de verificación son para seleccionar una o varias opciones en una lista, mientras que los radios son para seleccionar una opción de muchas.

Estructuralmente, nuestros `<input>`s y `<label>`s son elementos hermanos a diferencia de una `<input>` dentro de una `<label>`. Esto es un poco más detallado ya que debes especificar los atributos `id` y `for` para relacionar `<input>` y `<label>`. Usamos el selector de hermanos (`~`) para todos nuestros estados `<input>`, como `:checked` o `:disabled`. Cuando se combina con la clase `.form-check-label`, podemos diseñar fácilmente el texto de cada elemento según el estado del `<input>`.

Nuestras checks utilizan iconos de Bootstrap personalizados para indicar estados *checked* o *indeterminate*.

## Checks

{{< example >}}
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    Casilla de verificación por defecto
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
  <label class="form-check-label" for="flexCheckChecked">
    Casilla de verificación marcada
  </label>
</div>
{{< /example >}}

### Indeterminado

Las casillas de verificación pueden utilizar la pseudoclase `:indeterminate` cuando se configuran manualmente a través de JavaScript (no hay un atributo HTML disponible para especificarlo).

{{< example class="bd-example-indeterminate">}}
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
  <label class="form-check-label" for="flexCheckIndeterminate">
    Casilla de verificación indeterminada
  </label>
</div>
{{< /example >}}

### Deshabilitado

Agrega el atributo `disabled` y las `<label>`s asociadas se diseñarán automáticamente para que coincidan con un color más claro para ayudar a indicar el estado de la entrada.

{{< example >}}
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled>
  <label class="form-check-label" for="flexCheckDisabled">
    Casilla de verificación deshabilitada
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled>
  <label class="form-check-label" for="flexCheckCheckedDisabled">
    Casilla de verificación marcada y deshabilitada
  </label>
</div>
{{< /example >}}

## Radios

{{< example >}}
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    Radio por defecto
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="form-check-label" for="flexRadioDefault2">
    Radio marcado por defecto
  </label>
</div>
{{< /example >}}

### Deshabilitado

Agrega el atributo `disabled` y las `<label>`s asociadas se diseñarán automáticamente para que coincidan con un color más claro para ayudar a indicar el estado de la entrada.

{{< example >}}
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled>
  <label class="form-check-label" for="flexRadioDisabled">
    Radio deshabilitado
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked disabled>
  <label class="form-check-label" for="flexRadioCheckedDisabled">
    Radio marcado y deshabilitado
  </label>
</div>
{{< /example >}}

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

## Switches

Un switch tiene el marcado de una casilla de verificación personalizada, pero usa la clase `.form-switch` para representar un interruptor de palanca. Considera usar `role="switch"` para transmitir con mayor precisión la naturaleza del control a las tecnologías de asistencia que respaldan este rol. En las tecnologías de asistencia más antiguas, simplemente se anunciará como una casilla de verificación normal como alternativa. Los switches también admiten el atributo `disabled`.

{{< example >}}
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
  <label class="form-check-label" for="flexSwitchCheckDefault">Switch checkbox input por defecto</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
  <label class="form-check-label" for="flexSwitchCheckChecked">Switch checkbox input marcado</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled>
  <label class="form-check-label" for="flexSwitchCheckDisabled">Switch checkbox input deshabilitado</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" checked disabled>
  <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Checked switch checkbox marcado y deshabilitado</label>
</div>
{{< /example >}}

## Apilado predeterminado

De forma predeterminada, cualquier número de casillas de verificación y radios que sean hermanos inmediatos se apilarán verticalmente y se espaciarán adecuadamente con `.form-check`.

{{< example >}}
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
  <label class="form-check-label" for="defaultCheck1">
    Checkbox por defecto
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
  <label class="form-check-label" for="defaultCheck2">
    Checkbox deshabilitado
  </label>
</div>
{{< /example >}}

{{< example >}}
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
  <label class="form-check-label" for="exampleRadios1">
    Radio por defecto
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">
    Segundo radio por defecto
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
  <label class="form-check-label" for="exampleRadios3">
    Radio deshabilitado
  </label>
</div>
{{< /example >}}

{{< callout info >}}
{{< partial "maybe-interested-2.md" >}}
{{< /callout >}}

## En línea

Agrupa casillas de verificación o radios en la misma fila horizontal agregando `.form-check-inline` a cualquier `.form-check`.

{{< example >}}
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
  <label class="form-check-label" for="inlineCheckbox1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
  <label class="form-check-label" for="inlineCheckbox2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
  <label class="form-check-label" for="inlineCheckbox3">3 (deshabilitado)</label>
</div>
{{< /example >}}

{{< example >}}
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
  <label class="form-check-label" for="inlineRadio1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
  <label class="form-check-label" for="inlineRadio2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>
  <label class="form-check-label" for="inlineRadio3">3 (deshabilitado)</label>
</div>
{{< /example >}}

## Sin etiquetas

Omite el envoltorio `.form-check` para casillas de verificación y radios que no tienen texto de etiqueta. Recuerda proporcionar algún tipo de nombre accesible para las tecnologías de asistencia (por ejemplo, usando `aria-label`). Consulta la sección [accesibilidad general de formularios]({{< docsref "/forms/overview#accessibility" >}}) para obtener más detalles.

{{< example >}}
<div>
  <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
</div>

<div>
  <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="...">
</div>
{{< /example >}}

## Botones Toggle

Crea casillas de verificación y botones de radio similares a botones usando estilos `.btn` en lugar de `.form-check-label` en los elementos `<label>`. Estos botones toggle se pueden agrupar aún más en un [grupo de botones]({{< docsref "/components/button-group" >}}) si es necesario.

### Casilla de verificación con botones toggle

{{< example >}}
<input type="checkbox" class="btn-check" id="btn-check" autocomplete="off">
<label class="btn btn-primary" for="btn-check">Toggle único</label>
{{< /example >}}

{{< example >}}
<input type="checkbox" class="btn-check" id="btn-check-2" checked autocomplete="off">
<label class="btn btn-primary" for="btn-check-2">Marcado</label>
{{< /example >}}

{{< example >}}
<input type="checkbox" class="btn-check" id="btn-check-3" autocomplete="off" disabled>
<label class="btn btn-primary" for="btn-check-3">Deshabilitado</label>
{{< /example >}}

{{< callout info >}}
Visualmente, estos botones toggle de casilla de verificación son idénticos a los [botones toggle del complemento de botón]({{< docsref "/components/buttons#button-plugin" >}}). Sin embargo, las tecnologías de asistencia los transmiten de manera diferente: los lectores de pantalla anunciarán las casillas de verificación como "marcadas"/"no marcadas" (ya que, a pesar de su apariencia, siguen siendo fundamentalmente casillas de verificación), mientras que los botones toggle del complemento de botón serán anunciados como "botón"/"botón presionado". La elección entre estos dos enfoques dependerá del tipo de toggle que estés creando y de si la alternancia tendrá o no sentido para los usuarios cuando se anuncie como una casilla de verificación o como un botón real.
{{< /callout >}}

### Botones radio toggle

{{< example >}}
<input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked>
<label class="btn btn-secondary" for="option1">Marcado</label>

<input type="radio" class="btn-check" name="options" id="option2" autocomplete="off">
<label class="btn btn-secondary" for="option2">Radio</label>

<input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" disabled>
<label class="btn btn-secondary" for="option3">Deshabilitado</label>

<input type="radio" class="btn-check" name="options" id="option4" autocomplete="off">
<label class="btn btn-secondary" for="option4">Radio</label>
{{< /example >}}

### Outlined styles

Se admiten diferentes variantes de `.btn`, como los diversos estilos descritos.

{{< example >}}
<input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off">
<label class="btn btn-outline-primary" for="btn-check-outlined">Toggle único</label><br>

<input type="checkbox" class="btn-check" id="btn-check-2-outlined" checked autocomplete="off">
<label class="btn btn-outline-secondary" for="btn-check-2-outlined">Marcado</label><br>

<input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" checked>
<label class="btn btn-outline-success" for="success-outlined">Success radio marcado</label>

<input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off">
<label class="btn btn-outline-danger" for="danger-outlined">Danger radio</label>
{{< /example >}}

{{< callout info >}}
{{< partial "maybe-interested-3.md" >}}
{{< /callout >}}

## Sass

### Variables

{{< scss-docs name="form-check-variables" file="scss/_variables.scss" >}}
