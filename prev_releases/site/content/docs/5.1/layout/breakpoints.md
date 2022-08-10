---
layout: docs
title: Breakpoints
description: Los breakpoints son anchos personalizables que determinan cómo se comporta tu diseño responsive en los tamaños de dispositivo o viewport en Bootstrap.
group: layout
aliases: "/docs/5.1/layout/"
toc: true
---

## Conceptos básicos

- **Los breakpoints son los componentes básicos del diseño responsive.** Úsalos para controlar cuándo se puede adaptar tu diseño a un viewport particular o tamaño de dispositivo.

- **Utiliza media queries para diseñar tu CSS por breakpoint.** Las media queries son una función de CSS que te permite aplicar estilos de forma condicional en función de un conjunto de parámetros del navegador y del sistema operativo. Comúnmente usamos `min-width` en nuestras media queries.

- **Mobile first, el diseño responsive es el objetivo.** El CSS de Bootstrap tiene como objetivo aplicar el mínimo de estilos para hacer que un diseño funcione en el breakpoint más pequeño, y luego capas de estilos para ajustar ese diseño para dispositivos más grandes. Esto optimiza tu CSS, mejora el tiempo de renderizado y proporciona una gran experiencia para tus visitantes.

## Breakpoints disponibles

Bootstrap incluye seis breakpoints predeterminados, a veces denominados _niveles de cuadrícula_, para compilar de forma responsive. Estos breakpoints se pueden personalizar si estás utilizando nuestros archivos fuente Sass.

<table class="table">
  <thead>
    <tr>
      <th>Breakpoint</th>
      <th>Infijo de clase</th>
      <th>Dimensiones</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>X-Small</td>
      <td><em>None</em></td>
      <td>&lt;576px</td>
    </tr>
    <tr>
      <td>Small</td>
      <td><code>sm</code></td>
      <td>&ge;576px</td>
    </tr>
    <tr>
      <td>Medium</td>
      <td><code>md</code></td>
      <td>&ge;768px</td>
    </tr>
    <tr>
      <td>Large</td>
      <td><code>lg</code></td>
      <td>&ge;992px</td>
    </tr>
    <tr>
      <td>Extra large</td>
      <td><code>xl</code></td>
      <td>&ge;1200px</td>
    </tr>
    <tr>
      <td>Extra extra large</td>
      <td><code>xxl</code></td>
      <td>&ge;1400px</td>
    </tr>
  </tbody>
</table>

Cada breakpoint se eligió para contener cómodamente contenedores cuyos anchos son múltiplos de 12. Los breakpoints también son representativos de un subconjunto de tamaños de dispositivos comunes y dimensiones de viewports; no se dirigen específicamente a cada caso de uso o dispositivo. En cambio, los rangos brindan una base sólida y consistente para desarrollar casi cualquier dispositivo.

Estos breakpoints se pueden personalizar a través de Sass; los encontrarás en un mapa de Sass en nuestra hoja de estilo `_variables.scss`.

{{< scss-docs name="grid-breakpoints" file="scss/_variables.scss" >}}

Para obtener más información y ejemplos sobre cómo modificar nuestros mapas y variables Sass, consulta la sección Sass de la [documentación de Grid]({{< docsref "/layout/grid#sass" >}}).

## Media queries

Dado que Bootstrap está desarrollado para ser Mobile first, usamos un puñado de [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) para crear breakpoints sensibles para nuestros diseños e interfaces. Estos breakpoints se basan principalmente en anchos mínimos de viewports y nos permiten aumentar la escala de los elementos a medida que cambia la ventana gráfica.

### Min-width

Bootstrap utiliza principalmente los siguientes rangos de media queries, o breakpoints, en nuestros archivos fuente Sass para nuestro diseño, sistema de cuadrícula y componentes.

```scss
// Source mixins

// No es necesaria una media query para el breakpoint xs, ya que es efectivamente `@media (min-width: 0) { ... }`
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }
@include media-breakpoint-up(xxl) { ... }

// Uso

// Ejemplo: Ocultar comenzando en `min-width: 0`, y luego mostrar en el breakpoint `sm`
.custom-class {
  display: none;
}
@include media-breakpoint-up(sm) {
  .custom-class {
    display: block;
  }
}
```

Estos mixins de Sass se traducen en nuestro CSS compilado utilizando los valores declarados en nuestras variables de Sass. Por ejemplo:

```scss
// Dispositivos X-Small (teléfonos verticales, menos de 576px)
// No hay media queries para `xs` ya que este es el valor predeterminado en Bootstrap

// Dispositivos pequeños (teléfonos horizontales, 576px y más)
@media (min-width: 576px) { ... }

// Dispositivos medianos (tabletas, 768px y más)
@media (min-width: 768px) { ... }

// Dispositivos grandes (escritorios, 992px y más)
@media (min-width: 992px) { ... }

// Dispositivos X-Large (escritorios grandes, 1200px y más)
@media (min-width: 1200px) { ... }

// Dispositivos XX-Large (escritorios más grandes, 1400px y más)
@media (min-width: 1400px) { ... }
```

### Max-width

Ocasionalmente usamos media queries que van en la otra dirección (el tamaño de pantalla dado *o más pequeño*):

```scss
// No es necesaria una media query para el punto de interrupción xs, ya que es efectivamente `@media (max-width: 0) { ... }`
@include media-breakpoint-down(sm) { ... }
@include media-breakpoint-down(md) { ... }
@include media-breakpoint-down(lg) { ... }
@include media-breakpoint-down(xl) { ... }
@include media-breakpoint-down(xxl) { ... }

// Ejemplo: Estilo desde el breakpoint medium y hacia abajo
@include media-breakpoint-down(md) {
  .custom-class {
    display: block;
  }
}
```

Estos mixins toman esos breakpoints declarados, restan `.02px` de ellos y los usan como nuestros valores de `max-width`. Por ejemplo:

```scss
// `xs` devuelve solo un conjunto de reglas y ninguna media query
// ... { ... }

// `sm` se aplica a dispositivos x-small (teléfonos verticales, menos de 576px)
@media (max-width: 575.98px) { ... }

// `md` se aplica a dispositivos small (teléfonos horizontales, menos de 768px)
@media (max-width: 767.98px) { ... }

// `lg` se aplica a dispositivos medium (tabletas, menos de 992px)
@media (max-width: 991.98px) { ... }

// `xl` se aplica a dispositivos large (escritorios, menos de 1200px)
@media (max-width: 1199.98px) { ... }

// `xxl` se aplica a dispositivos x-large (escritorios grandes, menos de 1400px)
@media (max-width: 1399.98px) { ... }
```

{{< callout warning >}}
{{< partial "callout-info-mediaqueries-breakpoints.md" >}}
{{< /callout >}}

### Single breakpoint

También hay media queries y mixins para apuntar a un solo segmento de tamaños de pantalla utilizando los anchos de breakpoint mínimo y máximo.

```scss
@include media-breakpoint-only(xs) { ... }
@include media-breakpoint-only(sm) { ... }
@include media-breakpoint-only(md) { ... }
@include media-breakpoint-only(lg) { ... }
@include media-breakpoint-only(xl) { ... }
@include media-breakpoint-only(xxl) { ... }
```

Por ejemplo, `@include media-breakpoint-only(md) { ... }` dará como resultado:

```scss
@media (min-width: 768px) and (max-width: 991.98px) { ... }
```

### Entre breakpoints

De manera similar, las media queries pueden abarcar múltiples anchos de breakpoint:

```scss
@include media-breakpoint-between(md, xl) { ... }
```

Lo que resulta en:

```scss
// Ejemplo
// Aplicar estilos a partir de dispositivos medianos y hasta dispositivos extra grandes
@media (min-width: 768px) and (max-width: 1199.98px) { ... }
```
