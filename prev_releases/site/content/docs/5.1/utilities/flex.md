---
layout: docs
title: Flex
description: Administra rápidamente el diseño, la alineación y el tamaño de las columnas de la cuadrícula, la navegación, los componentes y más con un conjunto completo de utilidades flexibles responsive. Para implementaciones más complejas, puede ser necesario un CSS personalizado.
group: utilities
toc: true
---

## Habilitar comportamientos flexibles

Aplica utilidades `display` para crear un contenedor flexbox y transformar **elementos hijos directos** en elementos flexibles. Los contenedores y elementos flexibles se pueden modificar aún más con propiedades flexibles adicionales.

{{< example >}}
<div class="d-flex p-2 bd-highlight">¡Soy un contenedor flexbox!</div>
{{< /example >}}

{{< example >}}
<div class="d-inline-flex p-2 bd-highlight">¡Soy un contenedor flexbox en línea!</div>
{{< /example >}}

También existen variaciones responsive para `.d-flex` y `.d-inline-flex`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.d{{ .abbr }}-flex`
- `.d{{ .abbr }}-inline-flex`
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

## Direcciones

Establece la dirección de los elementos flexibles en un contenedor flexible con utilidades de dirección. En la mayoría de los casos, puedes omitir la clase horizontal aquí, ya que el valor predeterminado del navegador es `row`. Sin embargo, puedes encontrar situaciones en las que necesites establecer explícitamente este valor (como diseños responsive).

Usa `.flex-row` para establecer una dirección horizontal (el valor predeterminado del navegador), o `.flex-row-reverse` para comenzar la dirección horizontal desde el lado opuesto.

{{< example >}}
<div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight">Elemento flex 1</div>
  <div class="p-2 bd-highlight">Elemento flex 2</div>
  <div class="p-2 bd-highlight">Elemento flex 3</div>
</div>
<div class="d-flex flex-row-reverse bd-highlight">
  <div class="p-2 bd-highlight">Elemento flex 1</div>
  <div class="p-2 bd-highlight">Elemento flex 2</div>
  <div class="p-2 bd-highlight">Elemento flex 3</div>
</div>
{{< /example >}}

Utiliza `.flex-column` para establecer una dirección vertical, o `.flex-column-reverse` para iniciar la dirección vertical desde el lado opuesto.

{{< example >}}
<div class="d-flex flex-column bd-highlight mb-3">
  <div class="p-2 bd-highlight">Elemento flex 1</div>
  <div class="p-2 bd-highlight">Elemento flex 2</div>
  <div class="p-2 bd-highlight">Elemento flex 3</div>
</div>
<div class="d-flex flex-column-reverse bd-highlight">
  <div class="p-2 bd-highlight">Elemento flex 1</div>
  <div class="p-2 bd-highlight">Elemento flex 2</div>
  <div class="p-2 bd-highlight">Elemento flex 3</div>
</div>
{{< /example >}}

También existen variaciones responsive para `flex-direction`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.flex{{ .abbr }}-row`
- `.flex{{ .abbr }}-row-reverse`
- `.flex{{ .abbr }}-column`
- `.flex{{ .abbr }}-column-reverse`
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

## Justificar el contenido

Usa las utilidades `justify-content` en los contenedores de flexbox para cambiar la alineación de los elementos flexibles en el eje principal (el eje x para start, el eje y si es `flex-direction: column`). Elije entre `start` (predeterminado del navegador), `end`, `center`, `between`, `around`, o `evenly`.

<div class="bd-example">
  <div class="d-flex justify-content-start bd-highlight mb-3">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
  <div class="d-flex justify-content-end bd-highlight mb-3">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
  <div class="d-flex justify-content-center bd-highlight mb-3">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
  <div class="d-flex justify-content-between bd-highlight mb-3">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
  <div class="d-flex justify-content-around bd-highlight mb-3">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
  <div class="d-flex justify-content-evenly bd-highlight">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
</div>

```html
<div class="d-flex justify-content-start">...</div>
<div class="d-flex justify-content-end">...</div>
<div class="d-flex justify-content-center">...</div>
<div class="d-flex justify-content-between">...</div>
<div class="d-flex justify-content-around">...</div>
<div class="d-flex justify-content-evenly">...</div>
```

También existen variaciones responsive para `justify-content`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.justify-content{{ .abbr }}-start`
- `.justify-content{{ .abbr }}-end`
- `.justify-content{{ .abbr }}-center`
- `.justify-content{{ .abbr }}-between`
- `.justify-content{{ .abbr }}-around`
- `.justify-content{{ .abbr }}-evenly`
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

## Alinear elementos

Usa las utilidades `align-items` en los contenedores de flexbox para cambiar la alineación de los elementos flexibles en el eje transversal (el eje y para start, el eje x si es `flex-direction: column`). Elije entre `start`, `end`, `center`, `baseline`, or `stretch` (predeterminado del navegador).

<div class="bd-example">
  <div class="d-flex align-items-start bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
  <div class="d-flex align-items-end bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
  <div class="d-flex align-items-center bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
  <div class="d-flex align-items-baseline bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
  <div class="d-flex align-items-stretch bd-highlight" style="height: 100px">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
</div>

```html
<div class="d-flex align-items-start">...</div>
<div class="d-flex align-items-end">...</div>
<div class="d-flex align-items-center">...</div>
<div class="d-flex align-items-baseline">...</div>
<div class="d-flex align-items-stretch">...</div>
```

También existen variaciones responsive para `align-items`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.align-items{{ .abbr }}-start`
- `.align-items{{ .abbr }}-end`
- `.align-items{{ .abbr }}-center`
- `.align-items{{ .abbr }}-baseline`
- `.align-items{{ .abbr }}-stretch`
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

## Alinearse uno mismo

Usa las utilidades `align-self` en elementos de flexbox para cambiar individualmente su alineación en el eje transversal (el eje y para start, el eje x si es `flex-direction: column`). Elije entre las mismas opciones que `align-items`: `start`, `end`, `center`, `baseline`, o `stretch` (predeterminado del navegador).

<div class="bd-example">
  <div class="d-flex bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="align-self-start p-2 bd-highlight">Elemento flex alineado</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
  <div class="d-flex bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="align-self-end p-2 bd-highlight">Elemento flex alineado</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
  <div class="d-flex bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="align-self-center p-2 bd-highlight">Elemento flex alineado</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
  <div class="d-flex bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="align-self-baseline p-2 bd-highlight">Elemento flex alineado</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
  <div class="d-flex bd-highlight" style="height: 100px">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="align-self-stretch p-2 bd-highlight">Elemento flex alineado</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
</div>

```html
<div class="align-self-start">Elemento flex alineado</div>
<div class="align-self-end">Elemento flex alineado</div>
<div class="align-self-center">Elemento flex alineado</div>
<div class="align-self-baseline">Elemento flex alineado</div>
<div class="align-self-stretch">Elemento flex alineado</div>
```

También existen variaciones responsive para `align-self`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.align-self{{ .abbr }}-start`
- `.align-self{{ .abbr }}-end`
- `.align-self{{ .abbr }}-center`
- `.align-self{{ .abbr }}-baseline`
- `.align-self{{ .abbr }}-stretch`
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

## Llenar

Utiliza la clase `.flex-fill` en una serie de elementos hermanos para obligarlos a tener anchos iguales a su contenido (o anchos iguales si su contenido no supera sus border-boxes) mientras ocupa todo el espacio horizontal disponible.

{{< example >}}
<div class="d-flex bd-highlight">
  <div class="p-2 flex-fill bd-highlight">Elemento flex con mucho contenido</div>
  <div class="p-2 flex-fill bd-highlight">Elemento flex</div>
  <div class="p-2 flex-fill bd-highlight">Elemento flex</div>
</div>
{{< /example >}}

También existen variaciones responsive para `flex-fill`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.flex{{ .abbr }}-fill`
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

## Crecer y encogerse

Usa las utilidades `.flex-grow-*` para alternar la capacidad de crecimiento de un elemento flexible para llenar el espacio disponible. En el ejemplo a continuación, los elementos `.flex-grow-1` usan todo el espacio disponible que pueden, mientras permiten que los dos elementos flexibles restantes tengan el espacio necesario.

{{< example >}}
<div class="d-flex bd-highlight">
  <div class="p-2 flex-grow-1 bd-highlight">Elemento flex</div>
  <div class="p-2 bd-highlight">Elemento flex</div>
  <div class="p-2 bd-highlight">Tercer elemento flex</div>
</div>
{{< /example >}}

Usa las utilidades `.flex-shrink-*` para alternar la capacidad de encoger un elemento flexible si es necesario. En el siguiente ejemplo, el segundo elemento flexible con `.flex-shrink-1` se ve obligado a envolver su contenido en una nueva línea, "reduciéndose" para dejar más espacio para el elemento flexible anterior con `.w-100`.

{{< example >}}
<div class="d-flex bd-highlight">
  <div class="p-2 w-100 bd-highlight">Elemento flex</div>
  <div class="p-2 flex-shrink-1 bd-highlight">Elemento flex</div>
</div>
{{< /example >}}

También existen variaciones responsive para `flex-grow` y `flex-shrink`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.flex{{ .abbr }}-{grow|shrink}-0`
- `.flex{{ .abbr }}-{grow|shrink}-1`
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

## Márgenes automáticos

Flexbox puede hacer cosas asombrosas cuando combinas alineaciones flexibles con márgenes automáticos. A continuación se muestran tres ejemplos de control de elementos flexibles a través de márgenes automáticos: predeterminado (sin margen automático), empujando dos elementos a la derecha (`.me-auto`) y empujando dos elementos a la izquierda (`.ms-auto`) .

{{< example >}}
<div class="d-flex bd-highlight mb-3">
  <div class="p-2 bd-highlight">Elemento flex</div>
  <div class="p-2 bd-highlight">Elemento flex</div>
  <div class="p-2 bd-highlight">Elemento flex</div>
</div>

<div class="d-flex bd-highlight mb-3">
  <div class="me-auto p-2 bd-highlight">Elemento flex</div>
  <div class="p-2 bd-highlight">Elemento flex</div>
  <div class="p-2 bd-highlight">Elemento flex</div>
</div>

<div class="d-flex bd-highlight mb-3">
  <div class="p-2 bd-highlight">Elemento flex</div>
  <div class="p-2 bd-highlight">Elemento flex</div>
  <div class="ms-auto p-2 bd-highlight">Elemento flex</div>
</div>
{{< /example >}}

### Con elementos alineados

Mueve verticalmente un elemento flexible a la parte superior o inferior de un contenedor mezclando `align-items`, `flex-direction: column`, y `margin-top: auto` o `margin-bottom: auto`.

{{< example >}}
<div class="d-flex align-items-start flex-column bd-highlight mb-3" style="height: 200px;">
  <div class="mb-auto p-2 bd-highlight">Elemento flex</div>
  <div class="p-2 bd-highlight">Elemento flex</div>
  <div class="p-2 bd-highlight">Elemento flex</div>
</div>

<div class="d-flex align-items-end flex-column bd-highlight mb-3" style="height: 200px;">
  <div class="p-2 bd-highlight">Elemento flex</div>
  <div class="p-2 bd-highlight">Elemento flex</div>
  <div class="mt-auto p-2 bd-highlight">Elemento flex</div>
</div>
{{< /example >}}

## Envoltura

Cambia la forma en que los elementos flexibles se envuelven en un contenedor flexible. Elije entre no envolver en absoluto (el valor predeterminado del navegador) con `.flex-nowrap`, envolver con `.flex-wrap` o envolver en reversa con `.flex-wrap-reverse`.

<div class="bd-example">
  <div class="d-flex flex-nowrap bd-highlight" style="width: 8rem;">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
</div>

```html
<div class="d-flex flex-nowrap">
  ...
</div>
```

<div class="bd-example">
  <div class="d-flex flex-wrap bd-highlight">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
</div>

```html
<div class="d-flex flex-wrap">
  ...
</div>
```

<div class="bd-example">
  <div class="d-flex flex-wrap-reverse bd-highlight">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
</div>

```html
<div class="d-flex flex-wrap-reverse">
  ...
</div>
```

También existen variaciones responsive para `flex-wrap`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.flex{{ .abbr }}-nowrap`
- `.flex{{ .abbr }}-wrap`
- `.flex{{ .abbr }}-wrap-reverse`
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

## Orden

Cambia el orden _visual_ de elementos flexibles específicos con un puñado de utilidades de `order`. Solo proporcionamos opciones para hacer que un artículo sea el primero o el último, así como un reinicio para usar el orden del DOM. Como `order` toma cualquier valor entero de 0 a 5, agrega CSS personalizado para cualquier valor adicional necesario.

{{< example >}}
<div class="d-flex flex-nowrap bd-highlight">
  <div class="order-3 p-2 bd-highlight">Primer elemento flex</div>
  <div class="order-2 p-2 bd-highlight">Segundo elemento flex</div>
  <div class="order-1 p-2 bd-highlight">Tercer elemento flex</div>
</div>
{{< /example >}}

También existen variaciones responsive para `order`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $bp := $.Site.Data.breakpoints -}}
{{- range (seq 0 5) }}
- `.order{{ $bp.abbr }}-{{ . }}`
{{- end -}}
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

Además, también hay clases responsive `.order-first` y `.order-last` que cambian el `order` de un elemento aplicando `order: -1` y `order: 6`, respectivamente.

{{< markdown >}}
{{< flex.inline >}}
{{- range $bp := $.Site.Data.breakpoints -}}
{{- range (slice "first" "last") }}
- `.order{{ $bp.abbr }}-{{ . }}`
{{- end -}}
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

## Alinear contenido

Usa las utilidades `align-content` en contenedores flexbox para alinear los elementos flexibles *juntos* en el eje transversal. Elija entre `start` (predeterminado del navegador), `end`, `center`, `between`, `around` o `stretch`. Para demostrar estas utilidades, aplicamos `flex-wrap: wrap` y aumentamos la cantidad de elementos flexibles.

**¡Cuidado!** Esta propiedad no tiene efecto en filas individuales de elementos flexibles.

<div class="bd-example">
  <div class="d-flex align-content-start flex-wrap bd-highlight mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
</div>

```html
<div class="d-flex align-content-start flex-wrap">
  ...
</div>
```

<div class="bd-example">
  <div class="d-flex align-content-end flex-wrap bd-highlight mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
</div>

```html
<div class="d-flex align-content-end flex-wrap">...</div>
```

<div class="bd-example">
  <div class="d-flex align-content-center flex-wrap bd-highlight mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
</div>

```html
<div class="d-flex align-content-center flex-wrap">...</div>
```

<div class="bd-example">
  <div class="d-flex align-content-between flex-wrap bd-highlight mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
</div>

```html
<div class="d-flex align-content-between flex-wrap">...</div>
```

<div class="bd-example">
  <div class="d-flex align-content-around flex-wrap bd-highlight mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
</div>

```html
<div class="d-flex align-content-around flex-wrap">...</div>
```

<div class="bd-example">
  <div class="d-flex align-content-stretch flex-wrap bd-highlight mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
</div>

```html
<div class="d-flex align-content-stretch flex-wrap">...</div>
```

También existen variaciones responsive para `align-content`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.align-content{{ .abbr }}-start`
- `.align-content{{ .abbr }}-end`
- `.align-content{{ .abbr }}-center`
- `.align-content{{ .abbr }}-between`
- `.align-content{{ .abbr }}-around`
- `.align-content{{ .abbr }}-stretch`
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

## Objeto multimedia

¿Buscas replicar el [componente de objeto de medios](https://getbootstrap.com/docs/4.6/components/media-object/) de Bootstrap 4? Recréalo en poco tiempo con algunas utilidades flexibles que permiten aún más flexibilidad y personalización que antes.

{{< example >}}
<div class="d-flex">
  <div class="flex-shrink-0">
    {{< placeholder width="100" height="100" color="#999" background="#e5e5e5" text="Image" >}}
  </div>
  <div class="flex-grow-1 ms-3">
    Este es el contenido de un componente multimedia. Puedes reemplazar esto con cualquier contenido y ajustarlo según sea necesario.
  </div>
</div>
{{< /example >}}

Y digamos que quieres centrar verticalmente el contenido al lado de la imagen:

{{< example >}}
<div class="d-flex align-items-center">
  <div class="flex-shrink-0">
    {{< placeholder width="100" height="100" color="#999" background="#e5e5e5" text="Image" >}}
  </div>
  <div class="flex-grow-1 ms-3">
    Este es un contenido de componente multimedia. Puedes reemplazar esto con cualquier contenido y ajustarlo según sea necesario.
  </div>
</div>
{{< /example >}}

## Sass

### API de utilidades

Las utilidades de Flexbox se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a usar la API de utilidades.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-flex" file="scss/_utilities.scss" >}}
