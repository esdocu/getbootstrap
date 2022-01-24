---
layout: docs
title: Placeholders
description: Usa marcadores de posición (placeholders) de carga para tus componentes o páginas para indicar que algo aún se puede estar cargando.
group: components
toc: true
---

## ¿Qué es placeholder?

Los marcadores de posición se pueden utilizar para mejorar la experiencia de tu aplicación. Están construidos solo con HTML y CSS, lo que significa que no necesitas JavaScript para crearlos. Sin embargo, necesitarás JavaScript personalizado para alternar su visibilidad. Su apariencia, color y tamaño se pueden personalizar fácilmente con nuestras clases de utilidad.

## Ejemplo

En el siguiente ejemplo, tomamos un componente de tarjeta típico y lo recreamos con marcadores de posición aplicados para crear una "tarjeta de carga". El tamaño y las proporciones son los mismos entre los dos.

<div class="bd-example bd-example-placeholder-cards d-flex justify-content-around">
<div class="card">
  {{< placeholder width="100%" height="180" class="card-img-top" text="false" background="#20c997" >}}
  <div class="card-body">
    <h5 class="card-title">Título de la tarjeta</h5>
    <p class="card-text">Un texto de ejemplo rápido para colocar próximo al título de la tarjeta y componer la mayor parte del contenido de la tarjeta.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" aria-hidden="true">
  {{< placeholder width="100%" height="180" class="card-img-top" text="false" >}}
  <div class="card-body">
    <div class="h5 card-title placeholder-glow">
      <span class="placeholder col-6"></span>
    </div>
    <p class="card-text placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
      <span class="placeholder col-8"></span>
    </p>
    <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
  </div>
</div>
</div>

```html
<div class="card">
  <img src="..." class="card-img-top" alt="...">

  <div class="card-body">
    <h5 class="card-title">Título de la tarjeta</h5>
    <p class="card-text">Un texto de ejemplo rápido para colocar próximo al título de la tarjeta y componer la mayor parte del contenido de la tarjeta.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" aria-hidden="true">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title placeholder-glow">
      <span class="placeholder col-6"></span>
    </h5>
    <p class="card-text placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
      <span class="placeholder col-8"></span>
    </p>
    <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
  </div>
</div>
```

## ¿Cómo funciona un placeholder?

Crea marcadores de posición con la clase `.placeholder` y una clase de columna de cuadrícula (por ejemplo, `.col-6`) para establecer el `width`. Pueden reemplazar el texto dentro de un elemento o agregarse como una clase modificadora a un componente existente.

Aplicamos estilos adicionales a `.btn`s a través de `::before` para garantizar que se respete la altura `height`. Puedes extender este patrón para otras situaciones según sea necesario, o agregar un `&nbsp;` dentro del elemento para reflejar la altura cuando el texto real se represente en su lugar.

{{< example >}}
<p aria-hidden="true">
  <span class="placeholder col-6"></span>
</p>

<a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-4" aria-hidden="true"></a>
{{< /example >}}

{{< callout info >}}
El uso de `aria-hidden="true"` solo indica que el elemento debe estar oculto para los lectores de pantalla. El comportamiento de *carga* del marcador de posición depende de cómo los autores realmente usarán los estilos de marcador de posición, cómo planean actualizar las cosas, etc. Es posible que se necesite algún código JavaScript para *cambiar* el estado del marcador de posición e informar a los usuarios de AT sobre la actualización .
{{< /callout >}}

### Ancho

Puedes cambiar el `width` a través de clases de columna de cuadrícula, utilidades de ancho o estilos en línea.

{{< example >}}
<span class="placeholder col-6"></span>
<span class="placeholder w-75"></span>
<span class="placeholder" style="width: 25%;"></span>
{{< /example >}}

### Color

De forma predeterminada, el `placeholder` usa `currentColor`. Esto se puede sobrescribir con un color personalizado o una clase de utilidad.

{{< example >}}
<span class="placeholder col-12"></span>
{{< placeholders.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<span class="placeholder col-12 bg-{{ .name }}"></span>
{{- end -}}
{{< /placeholders.inline >}}
{{< /example >}}

### Dimensionamiento

El tamaño de `.placeholder`s se basa en el estilo tipográfico del elemento principal. Personalízalos con modificadores de tamaño: `.placeholder-lg`, `.placeholder-sm` o `.placeholder-xs`.

{{< example >}}
<span class="placeholder col-12 placeholder-lg"></span>
<span class="placeholder col-12"></span>
<span class="placeholder col-12 placeholder-sm"></span>
<span class="placeholder col-12 placeholder-xs"></span>
{{< /example >}}

### Animaciones

Anima marcadores de posición con `.placeholder-glow` o `.placeholder-wave` para transmitir mejor la percepción de que algo se está cargando _activamente_.

{{< example >}}
<p class="placeholder-glow">
  <span class="placeholder col-12"></span>
</p>

<p class="placeholder-wave">
  <span class="placeholder col-12"></span>
</p>
{{< /example >}}

## Sass

### Variables

{{< scss-docs name="placeholders" file="scss/_variables.scss" >}}
