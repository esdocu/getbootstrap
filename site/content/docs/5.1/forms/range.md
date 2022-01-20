---
layout: docs
title: Rango
description: Utiliza nuestras entradas de rango personalizadas para obtener un estilo coherente entre navegadores y una personalización integrada.
group: forms
toc: true
---

## Overview

Crea controles `<input type="range">` personalizados con `.form-range`. La pista (el fondo) y el thumb (el valor) están diseñados para que aparezcan iguales en todos los navegadores. Como solo Firefox admite "llenar" la pista desde la izquierda o la derecha del thumb como un medio para indicar visualmente el progreso, actualmente no lo admitimos.

{{< example >}}
<label for="customRange1" class="form-label">Ejemplo de rango</label>
<input type="range" class="form-range" id="customRange1">
{{< /example >}}

## Deshabilitado

Agrega el atributo booleano `disabled` en un input para darle una apariencia atenuada y eliminar los eventos de puntero.

{{< example >}}
<label for="disabledRange" class="form-label">Rango deshabilitado</label>
<input type="range" class="form-range" id="disabledRange" disabled>
{{< /example >}}

## Min y max

Las entradas de rango tienen valores implícitos para `min` y `max`—`0` y `100`, respectivamente. Puedes especificar nuevos valores utilizando los atributos `min` y `max`.

{{< example >}}
<label for="customRange2" class="form-label">Ejemplo de rango</label>
<input type="range" class="form-range" min="0" max="5" id="customRange2">
{{< /example >}}

## Pasos

De forma predeterminada, las entradas de rango se "ajustan" a valores enteros. Para cambiar esto, puedes especificar un valor de `step`. En el siguiente ejemplo, duplicamos el número de pasos usando `step="0.5"`.

{{< example >}}
<label for="customRange3" class="form-label">Ejemplo de rango</label>
<input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3">
{{< /example >}}

## Sass

### Variables

{{< scss-docs name="form-range-variables" file="scss/_variables.scss" >}}
