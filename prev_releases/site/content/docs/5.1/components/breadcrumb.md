---
layout: docs
title: Breadcrumb
description: Indica la ubicación de la página actual dentro de una jerarquía de navegación que agrega automáticamente separadores a través de CSS.
group: components
toc: true
---

## Ejemplo

Usa una lista ordenada o desordenada con elementos de lista vinculados para crear una ruta de navegación con un estilo mínimo. Utiliza nuestras utilidades para agregar estilos adicionales según lo desees.

{{< example >}}
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Inicio</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Inicio</a></li>
    <li class="breadcrumb-item active" aria-current="page">Biblioteca</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Inicio</a></li>
    <li class="breadcrumb-item"><a href="#">Biblioteca</a></li>
    <li class="breadcrumb-item active" aria-current="page">Datos</li>
  </ol>
</nav>
{{< /example >}}

## Divisores

Los divisores se agregan automáticamente en CSS a través de [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) y [`content`](https://developer.mozilla.org/en-US/docs/Web/CSS/content). Se pueden cambiar modificando una propiedad personalizada CSS local `--bs-breadcrumb-divider`, o a través de la variable Sass `$breadcrumb-divider` y `$breadcrumb-divider-flipped` para su contraparte RTL, si es necesario. Usamos de forma predeterminada nuestra variable Sass, que se establece como una alternativa (fallback) a la propiedad personalizada. De esta manera, obtienes un divisor global que puedes sobrescribir sin volver a compilar CSS en ningún momento.

{{< example >}}
<nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Inicio</a></li>
    <li class="breadcrumb-item active" aria-current="page">Biblioteca</li>
  </ol>
</nav>
{{< /example >}}

Al modificar a través de Sass, se requiere la función [quote](https://sass-lang.com/documentation/modules/string#quote) para generar las comillas alrededor de una cadena. Por ejemplo, usando `>` como divisor, puedes usar esto:

```scss
$breadcrumb-divider: quote(">");
```

También es posible usar un **icono SVG incrustado**. Aplícalo a través de nuestra propiedad personalizada CSS, o usa la variable Sass.

{{< example >}}
<nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Inicio</a></li>
    <li class="breadcrumb-item active" aria-current="page">Biblioteca</li>
  </ol>
</nav>
{{< /example >}}

```scss
$breadcrumb-divider: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E");
```

También puede eliminar la configuración del divisor `--bs-breadcrumb-divider: '';` (las cadenas vacías en las propiedades personalizadas de CSS cuentan como un valor), o configurar la variable Sass en `$breadcrumb-divider: none;`.

{{< example >}}
<nav style="--bs-breadcrumb-divider: '';" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Inicio</a></li>
    <li class="breadcrumb-item active" aria-current="page">Biblioteca</li>
  </ol>
</nav>
{{< /example >}}


```scss
$breadcrumb-divider: none;
```

## Accesibilidad

Dado que breadcrumbs proporciona una navegación, es una buena idea agregar una etiqueta significativa como `aria-label="breadcrumb"` para describir el tipo de navegación proporcionada en el elemento `<nav>`, así como aplicar un `aria-current="page"` al último elemento del conjunto para indicar que representa la página actual.

Para obtener más información, consulta las [Prácticas de creación de WAI-ARIA para el patrón de ruta de navegación](https://www.w3.org/TR/wai-aria-practices/#breadcrumb).

## Sass

### Variables

{{< scss-docs name="breadcrumb-variables" file="scss/_variables.scss" >}}
