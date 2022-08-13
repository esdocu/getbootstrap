---
layout: docs
title: Select
description: Personaliza los `<select>` nativos con CSS personalizado que cambia la apariencia inicial del elemento.
group: forms
toc: true
---

## Por defecto

Los menús `<select>` personalizados solo necesitan una clase personalizada, `.form-select` para activar los estilos personalizados. Los estilos personalizados están limitados a la apariencia inicial de `<select>` y no pueden modificar `<option>` debido a las limitaciones del navegador.

{{< example >}}
<select class="form-select" aria-label="Default select example">
  <option selected>Abre este menú select</option>
  <option value="1">Uno</option>
  <option value="2">Dos</option>
  <option value="3">Tres</option>
</select>
{{< /example >}}

## Dimensionamiento

También puedes elegir entre selects pequeñas y grandes para que coincidan con nuestras entradas de texto de tamaño similar.

{{< example >}}
<select class="form-select form-select-lg mb-3" aria-label="Ejemplo de .form-select-lg">
  <option selected>Abre este menú select</option>
  <option value="1">Uno</option>
  <option value="2">Dos</option>
  <option value="3">Tres</option>
</select>

<select class="form-select form-select-sm" aria-label="Ejemplo de .form-select-sm">
  <option selected>Abre este menú select</option>
  <option value="1">Uno</option>
  <option value="2">Dos</option>
  <option value="3">Tres</option>
</select>
{{< /example >}}

El atributo `multiple` también es compatible:

{{< example >}}
<select class="form-select" multiple aria-label="Ejemplo de multiple select">
  <option selected>Abre este menú select</option>
  <option value="1">Uno</option>
  <option value="2">Dos</option>
  <option value="3">Tres</option>
</select>
{{< /example >}}

Al igual que el atributo `size`:

{{< example >}}
<select class="form-select" size="3" aria-label="Ejemplo de select de tamaño 3">
  <option selected>Abre este menú select</option>
  <option value="1">Uno</option>
  <option value="2">Dos</option>
  <option value="3">Tres</option>
</select>
{{< /example >}}

## Deshabilitado

Agrega el atributo booleano `disabled` en un select para darle una apariencia atenuada y eliminar los eventos de puntero.

{{< example >}}
<select class="form-select" aria-label="Ejemplo de select deshabilitado" disabled>
  <option selected>Abre este menú select</option>
  <option value="1">Uno</option>
  <option value="2">Dos</option>
  <option value="3">Tres</option>
</select>
{{< /example >}}

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

## Sass

### Variables

{{< scss-docs name="form-select-variables" file="scss/_variables.scss" >}}
