---
layout: docs
title: Validación
description: Proporciona comentarios valiosos a tus usuarios con la validación de formularios HTML5, a través de comportamientos predeterminados del navegador o estilos personalizados y JavaScript.
group: forms
toc: true
extra_js:
  - src: "/docs/5.1/assets/js/validate-forms.js"
    async: true
---

{{< callout warning >}}
Somos conscientes de que actualmente los estilos de validación personalizados del lado del cliente y la información sobre herramientas no son accesibles, ya que no están expuestos a tecnologías de asistencia. Mientras trabajamos en una solución, recomendamos usar la opción del lado del servidor o el método de validación predeterminado del navegador.
{{< /callout >}}

## Cómo funciona

Así es como funciona la validación de formularios con Bootstrap:

- La validación de formularios HTML se aplica a través de dos pseudoclases de CSS, `:invalid` y `:valid`. Se aplica a los elementos `<input>`, `<select>` y `<textarea>`.
- Bootstrap aplica los estilos `:invalid` y `:valid` a la clase padre `.was-validated`, generalmente aplicada a `<form>`. De lo contrario, cualquier campo obligatorio sin valor aparecerá como no válido al cargar la página. De esta forma, puedes elegir cuándo activarlos (por lo general, después de intentar enviar el formulario).
- Para restablecer la apariencia del formulario (por ejemplo, en el caso de envíos de formularios dinámicos usando AJAX), elimina la clase `.was-validated` del `<form>` nuevamente después del envío.
- Como alternativa, las clases `.is-invalid` y `.is-valid` se pueden usar en lugar de las pseudoclases para [validación del lado del servidor](#server-side). No requieren una clase padre `.was-validated`.
- Debido a restricciones en el funcionamiento de CSS, no podemos (en este momento) aplicar estilos a una `<label>` que se encuentra antes de un control de formulario en el DOM sin la ayuda de JavaScript personalizado.
- Todos los navegadores modernos admiten la [API de validación de restricciones](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-constraint-validation-api), una serie de métodos de JavaScript para validar controles de formulario.
- Los mensajes de feedback pueden utilizar los [predeterminados del navegador](#browser-defaults) (diferentes para cada navegador y sin estilo a través de CSS) o nuestros estilos personalizados de feedback con HTML y CSS adicionales.
- Puedes proporcionar mensajes de validez personalizados con `setCustomValidity` en JavaScript.

Con esto en mente, considera las siguientes demostraciones para nuestros estilos de validación de formularios personalizados, clases opcionales del lado del servidor y valores predeterminados del navegador.

## Estilos personalizados

Para los mensajes de validación de formulario Bootstrap personalizados, deberás agregar el atributo booleano `novalidate` a tu `<form>`. Esto deshabilita los tooltips de feedback predeterminados del navegador, pero aún proporciona acceso a las API de validación de formularios en JavaScript. Intenta enviar el siguiente formulario; nuestro JavaScript interceptará el botón de enviar y te transmitirá sus comentarios. Cuando intentes enviar, verás los estilos `:invalid` y `:valid` aplicados a los controles de tu formulario.

Los estilos de feedbacks personalizados aplican colores, bordes, estilos de enfoque e iconos de fondo personalizados para comunicar mejor los feedbacks. Los iconos de fondo para `<select>` solo están disponibles con `.form-select`, y no con `.form-control`.

{{< example >}}
<form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="validationCustom01" value="Mark" required>
    <div class="valid-feedback">
      ¡Se ve bien!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Apellido</label>
    <input type="text" class="form-control" id="validationCustom02" value="Otto" required>
    <div class="valid-feedback">
      ¡Se ve bien!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Nombre de usuario</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
      <div class="invalid-feedback">
        Por favor, elije un nombre de usuario.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">Ciudad</label>
    <input type="text" class="form-control" id="validationCustom03" required>
    <div class="invalid-feedback">
      Proporciona una ciudad válida.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom04" class="form-label">Estado</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Elige...</option>
      <option>...</option>
    </select>
    <div class="invalid-feedback">
      Selecciona un estado válido.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom05" class="form-label">Código postal</label>
    <input type="text" class="form-control" id="validationCustom05" required>
    <div class="invalid-feedback">
      Proporciona un código postal válido.
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
      <label class="form-check-label" for="invalidCheck">
        Acepta los términos y condiciones
      </label>
      <div class="invalid-feedback">
        Debe estar de acuerdo antes de enviar.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Enviar formulario</button>
  </div>
</form>
{{< /example >}}

{{< example lang="js" show_preview="false" >}}
{{< js.inline >}}
{{- readFile (path.Join "site/static/docs" .Site.Params.docs_version "assets/js/validate-forms.js") -}}
{{< /js.inline >}}
{{< /example >}}

## Valores predeterminados del navegador

¿No te interesan los mensajes feedback de validación personalizados o escribir JavaScript para cambiar los comportamientos de los formularios? Todo bien, puedes usar los valores predeterminados del navegador. Intenta enviar el formulario a continuación. Dependiendo de tu navegador y sistema operativo, verás un estilo de retroalimentación ligeramente diferente.

Si bien estos estilos de comentarios no se pueden diseñar con CSS, aún puedes personalizar el texto de comentarios a través de JavaScript.

{{< example >}}
<form class="row g-3">
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="validationDefault01" value="Mark" required>
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">Apellido</label>
    <input type="text" class="form-control" id="validationDefault02" value="Otto" required>
  </div>
  <div class="col-md-4">
    <label for="validationDefaultUsername" class="form-label">Nombre de usuario</label>
    <div class="input-group">
      <span class="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationDefault03" class="form-label">Ciudad</label>
    <input type="text" class="form-control" id="validationDefault03" required>
  </div>
  <div class="col-md-3">
    <label for="validationDefault04" class="form-label">Estado</label>
    <select class="form-select" id="validationDefault04" required>
      <option selected disabled value="">Elige...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-3">
    <label for="validationDefault05" class="form-label">Código postal</label>
    <input type="text" class="form-control" id="validationDefault05" required>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
      <label class="form-check-label" for="invalidCheck2">
        Acepta los términos y condiciones
      </label>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Enviar formulario</button>
  </div>
</form>
{{< /example >}}

## Lado del servidor

Recomendamos utilizar la validación del lado del cliente, pero en caso de que necesites la validación del lado del servidor, puedes indicar campos de formulario válidos y no válidos con `.is-invalid` y `.is-valid`. Ten en cuenta que `.invalid-feedback` también es compatible con estas clases.

Para los campos no válidos, asegúrate de que el mensaje de error/feedback no válido esté asociado con el campo de formulario relevante utilizando `aria-describedby` (ten en cuenta que este atributo permite hacer referencia a más de un `id`, en caso de que el campo ya apunte a un texto de formulario adicional).

Para solucionar [problemas con los radios de los bordes](https://github.com/twbs/bootstrap/issues/25110), los grupos de inputs requieren una clase `.has-validation` adicional.

{{< example >}}
<form class="row g-3">
  <div class="col-md-4">
    <label for="validationServer01" class="form-label">Nombre</label>
    <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required>
    <div class="valid-feedback">
      ¡Se ve bien!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationServer02" class="form-label">Apellido</label>
    <input type="text" class="form-control is-valid" id="validationServer02" value="Otto" required>
    <div class="valid-feedback">
      ¡Se ve bien!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationServerUsername" class="form-label">Nombre de usuario</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend3">@</span>
      <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required>
      <div id="validationServerUsernameFeedback" class="invalid-feedback">
        Por favor, elije un nombre de usuario.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationServer03" class="form-label">Ciudad</label>
    <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required>
    <div id="validationServer03Feedback" class="invalid-feedback">
      Proporciona una ciudad válida.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationServer04" class="form-label">Estado</label>
    <select class="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
      <option selected disabled value="">Elige...</option>
      <option>...</option>
    </select>
    <div id="validationServer04Feedback" class="invalid-feedback">
      Selecciona un estado válido.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationServer05" class="form-label">Código postal</label>
    <input type="text" class="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required>
    <div id="validationServer05Feedback" class="invalid-feedback">
      Proporciona un código postal válido.
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required>
      <label class="form-check-label" for="invalidCheck3">
        Acepta los términos y condiciones
      </label>
      <div id="invalidCheck3Feedback" class="invalid-feedback">
        Debe estar de acuerdo antes de enviar.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Enviar formulario</button>
  </div>
</form>
{{< /example >}}

## Elementos compatibles

Los estilos de validación están disponibles para los siguientes controles y componentes de formulario:

- `<input>`s y `<textarea>`s con `.form-control` (incluyendo hasta un `.form-control` en grupos de inputs)
- `<select>`s con `.form-select`
- `.form-check`s

{{< example >}}
<form class="was-validated">
  <div class="mb-3">
    <label for="validationTextarea" class="form-label">Textarea</label>
    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
    <div class="invalid-feedback">
      Por favor ingresa un mensaje en el área de texto.
    </div>
  </div>

  <div class="form-check mb-3">
    <input type="checkbox" class="form-check-input" id="validationFormCheck1" required>
    <label class="form-check-label" for="validationFormCheck1">Marca este checkbox</label>
    <div class="invalid-feedback">Ejemplo de texto de feedback no válido</div>
  </div>

  <div class="form-check">
    <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required>
    <label class="form-check-label" for="validationFormCheck2">Toggle este radio</label>
  </div>
  <div class="form-check mb-3">
    <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required>
    <label class="form-check-label" for="validationFormCheck3">O toggle este otro radio</label>
    <div class="invalid-feedback">Otro ejemplo de texto de feedback no válido</div>
  </div>

  <div class="mb-3">
    <select class="form-select" required aria-label="select example">
      <option value="">Abre este menú</option>
      <option value="1">Uno</option>
      <option value="2">Dos</option>
      <option value="3">Tres</option>
    </select>
    <div class="invalid-feedback">Ejemplo de select feedback no válido</div>
  </div>

  <div class="mb-3">
    <input type="file" class="form-control" aria-label="file example" required>
    <div class="invalid-feedback">Ejemplo de form file feedback no válido</div>
  </div>

  <div class="mb-3">
    <button class="btn btn-primary" type="submit" disabled>Enviar formulario</button>
  </div>
</form>
{{< /example >}}

## Tooltips

Si el diseño de tu formulario lo permite, puedes intercambiar las clases `.{valid|invalid}-feedback` por clases `.{valid|invalid}-tooltip` para mostrar comentarios de validación en un tooltip con estilo. Asegúrate de tener un padre con `position: relative` en él para el posicionamiento del tooltip. En el siguiente ejemplo, nuestras clases de columnas ya tienen esto, pero tu proyecto puede requerir una configuración alternativa.

{{< example >}}
<form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4 position-relative">
    <label for="validationTooltip01" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="validationTooltip01" value="Mark" required>
    <div class="valid-tooltip">
      ¡Se ve bien!
    </div>
  </div>
  <div class="col-md-4 position-relative">
    <label for="validationTooltip02" class="form-label">Apellido</label>
    <input type="text" class="form-control" id="validationTooltip02" value="Otto" required>
    <div class="valid-tooltip">
      ¡Se ve bien!
    </div>
  </div>
  <div class="col-md-4 position-relative">
    <label for="validationTooltipUsername" class="form-label">Nombre de usuario</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
      <input type="text" class="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required>
      <div class="invalid-tooltip">
        Elije un nombre de usuario único y válido.
      </div>
    </div>
  </div>
  <div class="col-md-6 position-relative">
    <label for="validationTooltip03" class="form-label">Ciudad</label>
    <input type="text" class="form-control" id="validationTooltip03" required>
    <div class="invalid-tooltip">
      Proporciona una ciudad válida.
    </div>
  </div>
  <div class="col-md-3 position-relative">
    <label for="validationTooltip04" class="form-label">Estado</label>
    <select class="form-select" id="validationTooltip04" required>
      <option selected disabled value="">Elige...</option>
      <option>...</option>
    </select>
    <div class="invalid-tooltip">
      Selecciona un estado válido.
    </div>
  </div>
  <div class="col-md-3 position-relative">
    <label for="validationTooltip05" class="form-label">Código postal</label>
    <input type="text" class="form-control" id="validationTooltip05" required>
    <div class="invalid-tooltip">
      Proporciona un código postal válido.
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Enviar formulario</button>
  </div>
</form>
{{< /example >}}

## Sass

### Variables

{{< scss-docs name="form-feedback-variables" file="scss/_variables.scss" >}}

### Mixins

Dos mixins se combinan juntos, a través de nuestro [loop](#loop), para generar nuestros estilos de feedback de validación de formularios.

{{< scss-docs name="form-validation-mixins" file="scss/mixins/_forms.scss" >}}

### Mapa

Este es el mapa Sass de validación de `_variables.scss`. Sobrescribe o amplía esto para generar estados diferentes o adicionales.

{{< scss-docs name="form-validation-states" file="scss/_variables.scss" >}}

Los mapas de `$form-validation-states` pueden contener tres parámetros opcionales para sobrescribir los estilos de tooltips y de enfoque.

### Loop

Se utiliza para iterar sobre los valores del mapa `$form-validation-states` para generar nuestros estilos de validación. Cualquier modificación al mapa de Sass anterior se reflejará en tu CSS compilado a través de este ciclo.

{{< scss-docs name="form-validation-states-loop" file="scss/forms/_validation.scss" >}}

### Personalización

Los estados de validación se pueden personalizar a través de Sass con el mapa `$form-validation-states`. Ubicado en nuestro archivo `_variables.scss`, este mapa de Sass es cómo generamos los estados de validación predeterminados `valid`/`invalid`. Se incluye un mapa anidado para personalizar el color, el ícono, el color de tooltips y la sombra de enfoque de cada estado. Si bien los navegadores no admiten otros estados, aquellos que usan estilos personalizados pueden agregar fácilmente feedbacks de formularios más complejos.

Ten en cuenta que **no recomendamos personalizar los valores de `$form-validation-states` sin modificar también el mixin `form-validation-state`**.