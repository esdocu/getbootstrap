---
layout: docs
title: Formularios
description: Ejemplos y pautas de uso para los estilos de controles de formulario, opciones de diseño y componentes personalizados para crear una amplia variedad de formularios.
group: forms
toc: true
aliases: "/docs/5.1/forms/"
sections:
  - title: Form control
    es_title: Controles de Formulario
    description: Estiliza entradas de texto y áreas de texto con soporte para múltiples estados.    
  - title: Select
    es_title: Select    
    description: Mejora los elementos select predeterminados del navegador con una apariencia inicial personalizada.
  - title: Checks & radios
    es_title: Checks & radios    
    description: Utiliza nuestros botones de radio personalizados y casillas de verificación en formularios para seleccionar opciones de entrada.
  - title: Range
    es_title: Rangos
    description: Reemplaza las entradas de rango predeterminadas del navegador con nuestra versión personalizada.
  - title: Input group
    es_title: Input group
    description: Adjunta etiquetas y botones a sus inputs para aumentar el valor semántico.
  - title: Floating labels
    es_title: Etiquetas flotantes
    description: Crea etiquetas de formulario hermosamente simples que floten sobre tus campos de entrada.
  - title: Layout
    es_title: Layout    
    description: Crea diseños en línea, horizontales o basados en cuadrículas complejas con tus formularios.
  - title: Validation
    es_title: Validación
    description: Valida tus formularios con estilos y comportamientos de validación nativos o personalizados.
---

## Descripción general

Los controles de formulario de Bootstrap se expanden en [nuestros estilos de formulario reiniciados]({{< docsref "/content/reboot#forms" >}}) con clases. Usa estas clases para optar por tus pantallas personalizadas para una representación más consistente en todos los navegadores y dispositivos.

Asegúrate de utilizar un atributo `type` apropiado en todas las entradas (por ejemplo, `email` para las direcciones de correo electrónico o `number` para información numérica) para aprovechar los controles de entrada más nuevos, como la verificación de correo electrónico, la selección de números y más.

Aquí hay un ejemplo rápido para demostrar los estilos de formulario de Bootstrap. Sigue leyendo para obtener documentación sobre las clases requeridas, el diseño de formularios y más.

{{< example >}}
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Correo electrónico</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Verificado</label>
  </div>
  <button type="submit" class="btn btn-primary">Enviar</button>
</form>
{{< /example >}}

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

## Textos de formulario

Textos de formulario a nivel de bloque o en línea se pueden crear usando `.form-text`.

{{< callout warning >}}
##### Asociación de textos de formulario con controles de formulario

Los textos de formulario deben asociarse explícitamente con el control del formulario al que se relacionan mediante el atributo `aria-describedby`. Esto garantizará que las tecnologías de asistencia, como los lectores de pantalla, anuncien el texto de este formulario cuando el usuario lo enfoca o ingresa al control.
{{< /callout >}}

El texto debajo de los inputs se puede estilizar con `.form-text`. Si se utiliza un elemento a nivel de bloque, se agrega un margen superior para facilitar el espaciado de los imputs anteriores.

{{< example >}}
<label for="inputPassword5" class="form-label">Contraseña</label>
<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
<div id="passwordHelpBlock" class="form-text">
  Tu contraseña debe tener entre 8 y 20 caracteres, contener letras y números, y no debe contener espacios, caracteres especiales ni emoji.
</div>
{{< /example >}}

Textos en línea pueden usar cualquier elemento HTML en línea típico (ya sea `<span>`, `<small>` o cualquier otro) con nada más que la clase `.form-text`.

{{< example >}}
<div class="row g-3 align-items-center">
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label">Contraseña</label>
  </div>
  <div class="col-auto">
    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
  </div>
  <div class="col-auto">
    <span id="passwordHelpInline" class="form-text">
      Debe tener entre 8 y 20 caracteres.
    </span>
  </div>
</div>
{{< /example >}}

## Formularios deshabilitados

Agrega el atributo booleano `disabled` en un input para evitar interacciones del usuario y hacer que parezca más claro.

```html
<input class="form-control" id="disabledInput" type="text" placeholder="Entrada deshabilitada..." disabled>
```

Agrega el atributo `disabled` a un `<fieldset>` para deshabilitar todos los controles en su interior. Los navegadores tratan todos los controles de formulario nativos (elementos `<input>`, `<select>` y `<button>`) dentro de un `<fieldset disabled>` como deshabilitados, lo que impide que interactúen con ellos tanto con el teclado como con el mouse.

Sin embargo, si tu formulario también incluye elementos personalizados similares a botones como `<a class="btn btn-*">...</a>`, estos solo tendrán un estilo de `pointer-events: none` , lo que significa que aún se podrán enfocar y operar con el teclado. En este caso, debes modificar manualmente estos controles agregando `tabindex="-1"` para evitar que reciban atención y `aria-disabled="disabled"` para señalar su estado a las tecnologías de asistencia.

{{< example >}}
<form>
  <fieldset disabled>
    <legend>Ejemplo de fieldset deshabilitado</legend>
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Input deshabilitado</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Input deshabilitado">
    </div>
    <div class="mb-3">
      <label for="disabledSelect" class="form-label">Select menu deshabilitado</label>
      <select id="disabledSelect" class="form-select">
        <option>Select deshabilitado</option>
      </select>
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled>
        <label class="form-check-label" for="disabledFieldsetCheck">
          No puedes verificar esto
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Enviar</button>
  </fieldset>
</form>
{{< /example >}}

{{< callout info >}}
{{< partial "maybe-interested-2.md" >}}
{{< /callout >}}

## Accesibilidad

Asegúrate de que todos los controles de formulario tengan un nombre accesible adecuado para que su propósito pueda transmitirse a los usuarios de tecnologías de asistencia. La forma más sencilla de lograr esto es usar un elemento `<label>` o, en el caso de los botones, incluir texto suficientemente descriptivo como parte del contenido `<button>...</button>`.

Para situaciones en las que no es posible incluir una `<label>` visible o contenido de texto apropiado, existen formas alternativas de proporcionar un nombre accesible, como:

- Elementos `<label>` ocultos usando la clase `.visually-hidden`
- Apuntando a un elemento existente que puede actuar como una etiqueta usando `aria-labelledby`
- Proporcionar un atributo `title`
- Establecer explícitamente el nombre accesible en un elemento usando `aria-label`

Si ninguno de estos están presentes, las tecnologías de asistencia pueden recurrir al uso del atributo `placeholder` como respaldo para el nombre accesible en los elementos `<input>` y `<textarea>`. Los ejemplos de esta sección proporcionan algunos enfoques sugeridos para casos específicos.

Si bien el uso de contenido visualmente oculto (`.visually-hidden`, `aria-label` e incluso `placeholder`, que desaparece una vez que un campo de formulario tiene contenido) beneficiará a los usuarios de tecnología de asistencia, la falta de texto de etiqueta visible aún puede ser un problema. problemático para ciertos usuarios. Alguna forma de etiqueta visible es generalmente el mejor enfoque, tanto para la accesibilidad como para la usabilidad.

{{< callout info >}}
{{< partial "maybe-interested-3.md" >}}
{{< /callout >}}

## Sass

Muchas variables de formulario se establecen en un nivel general para ser reutilizadas y ampliadas por componentes de formulario individuales. Las verás con más frecuencia como variables `$input-btn-*` y `$input-*`.

### Variables

Las variables `$input-btn-*` son variables globales compartidas entre nuestros [botones]({{< docsref "/components/buttons" >}}) y nuestros componentes de formulario. Encontrarás que estos se reasignan con frecuencia como valores a otras variables específicas de componentes.

{{< scss-docs name="input-btn-variables" file="scss/_variables.scss" >}}
