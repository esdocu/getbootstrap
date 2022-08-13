---
layout: docs
title: RFS
description: El motor de cambio de tamaño de Bootstrap escala de manera responsive las propiedades CSS comunes para utilizar mejor el espacio disponible en viewports y los dispositivos.
group: getting-started
toc: true
---

## ¿Qué es RFS?

El proyecto paralelo de Bootstrap [RFS](https://github.com/twbs/rfs/tree/{{< param "rfs_version" >}}) es un motor de cambio de tamaño de unidades que se desarrolló inicialmente para cambiar el tamaño de las fuentes (de ahí su abreviatura de Responsive Font Sizes). Hoy en día, RFS es capaz de cambiar la escala de la mayoría de las propiedades CSS con valores unitarios como `margin`, `padding`, `border-radius` o incluso `box-shadow`.

El mecanismo calcula automáticamente los valores apropiados en función de las dimensiones del viewport del navegador. Se compilará en funciones `calc()` con una combinación de `rem` y unidades de viewport para habilitar el comportamiento de escalado responsive.

## Uso de RFS

Los mixins están incluidos en Bootstrap y están disponibles una vez que incluyes `scss` de Bootstrap. RFS también se puede [instalar de forma independiente](https://github.com/twbs/rfs/tree/{{< param "rfs_version" >}}#installation) si es necesario.

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

### Uso de los mixins

El mixin `rfs()` tiene abreviaturas para `font-size`, `margin`, `margin-top`, `margin-right`, `margin-bottom`, `margin-left`, `padding`, `padding-top`, `padding-right`, `padding-bottom`, y `padding-left`. Mira el ejemplo a continuación de la fuente Sass y el CSS compilado.

```scss
.title {
  @include font-size(4rem);
}
```

```css
.title {
  font-size: calc(1.525rem + 3.3vw);
}

@media (min-width: 1200px) {
  .title {
    font-size: 4rem;
  }
}
```
Cualquier otra propiedad se puede pasar al mixin `rfs()` de esta manera:

```scss
.selector {
  @include rfs(4rem, border-radius);
}
```

`!important` también se puede agregar a cualquier valor que desees:

```scss
.selector {
  @include padding(2.5rem !important);
}
```

### Uso de las funciones

Cuando no deseas utilizar los incluidos, también hay dos funciones:

- `rfs-value()` convierte un valor en un valor `rem` si se pasa un valor `px`, en otros casos devuelve el mismo resultado.
- `rfs-fluid-value()` devuelve la versión fluida de un valor si la propiedad necesita un cambio de escala.

En este ejemplo, usamos uno de los [mixins de breakpoint responsive]({{< docsref "/layout/breakpoints" >}}) integrados de Bootstrap para aplicar solo estilo debajo del breakpoint `lg`.

```scss
.selector {
  @include media-breakpoint-down(lg) {
    padding: rfs-fluid-value(2rem);
    font-size: rfs-fluid-value(1.125rem);
  }
}
```

```css
@media (max-width: 991.98px) {
  .selector {
    padding: calc(1.325rem + 0.9vw);
    font-size: 1.125rem; /* 1.125rem es lo suficientemente pequeño, por lo que RFS no reescalará esto */
  }
}
```

{{< callout info >}}
{{< partial "maybe-interested-2.md" >}}
{{< /callout >}}

## Documentación extendida

RFS es un proyecto separado bajo la organización Bootstrap. Puedes encontrar más información sobre RFS y su configuración en su [repositorio de GitHub](https://github.com/twbs/rfs/tree/{{< param "rfs_version" >}}).