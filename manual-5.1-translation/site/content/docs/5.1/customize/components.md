---
layout: docs
title: Componentes
description: Aprende cómo y por qué construimos casi todos nuestros componentes de forma responsive y con clases y modificadoras base.
group: customize
toc: true
---

## Clases base

Los componentes de Bootstrap se construyen en gran medida con una nomenclatura de modificador base. Agrupamos tantas propiedades compartidas como sea posible en una clase base, como `.btn`, y luego agrupamos estilos individuales para cada variante en clases de modificadores, como `.btn-primary` o `.btn-success`.

Para construir nuestras clases de modificadores, usamos los bucles `@each` de Sass para iterar sobre un mapa de Sass. Esto es especialmente útil para generar variantes de un componente mediante nuestros `$theme-colors` y crear variantes responsive para cada breakpoint. A medida que personalizas estos mapas de Sass y los vuelves a compilar, verás automáticamente tus cambios reflejados en estos bucles.

Consulta nuestros documentos de [mapas y bucles de Sass]({{< docsref "/customize/sass#maps-and-loops" >}}) para saber cómo personalizar estos bucles y extender el enfoque modificador base de Bootstrap a tu propio código.

## Modificadores

Muchos de los componentes de Bootstrap están construidos con un enfoque de clase de modificador base. Esto significa que la mayor parte del estilo está contenido en una clase base (p. ej., `.btn`), mientras que las variaciones de estilo se limitan a las clases de modificadores (p. ej., `.btn-danger`). Estas clases de modificadores se crean a partir del mapa `$theme-colors` para personalizar el número y el nombre de nuestras clases de modificadores.

Aquí hay dos ejemplos de cómo recorremos el mapa `$theme-colors` para generar modificadores para los componentes `.alert` y `.list-group`.

{{< scss-docs name="alert-modifiers" file="scss/_alert.scss" >}}

{{< scss-docs name="list-group-modifiers" file="scss/_list-group.scss" >}}

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

## Responsive

Estos bucles de Sass tampoco se limitan a mapas de colores. También puedes generar variaciones sensibles de tus componentes. Tomemos como ejemplo nuestra alineación responsive de los menús desplegables donde mezclamos un bucle `@each` para el mapa Sass `$grid-breakpoints` con una media query incluida.

{{< scss-docs name="responsive-breakpoints" file="scss/_dropdown.scss" >}}

Si modificas tus `$grid-breakpoints`, tus cambios se aplicarán a todos los bucles que iteren sobre ese mapa.

{{< scss-docs name="grid-breakpoints" file="scss/_variables.scss" >}}

Para obtener más información y ejemplos sobre cómo modificar nuestros mapas y variables Sass, consulta [la sección Sass de la documentación de Grid]({{< docsref "/layout/grid#sass" >}}).

{{< callout info >}}
{{< partial "maybe-interested-2.md" >}}
{{< /callout >}}

## Creando el tuyo propio

Te alentamos a que adoptes estas pautas cuando construya con Bootstrap para crear tus propios componentes. Nosotros mismos hemos ampliado este enfoque a los componentes personalizados en nuestra documentación y ejemplos. Los componentes como nuestros *callouts* se construyen al igual que nuestros componentes provistos con clases base y modificadoras.

<div class="bd-example">
  <div class="bd-callout my-0">
    <strong>Esto es un callout (texto destacado).</strong> Lo creamos personalizado para nuestros documentos para que nuestros mensajes se destaquen. Tiene tres variantes a través de clases de modificadoras.
  </div>
</div>

```html
<div class="callout">...</div>
```

En tu CSS, tendrías algo como lo siguiente, donde la mayor parte del estilo se realiza a través de `.callout`. Luego, los estilos únicos entre cada variante se controlan a través de la clase modificadora.

```scss
// Clase base
.callout {}

// Clases modificadoras
.callout-info {}
.callout-warning {}
.callout-danger {}
```

Para los *callouts*, ese estilo único es simplemente un `border-left-color`. Cuando combinas esa clase base con una de las clases modificadoras, obtienes tu familia de componentes completa:

{{< callout info >}}
**Esto es un info callout.** Texto de ejemplo para mostrarlo en acción.
{{< /callout >}}

{{< callout warning >}}
**Esto es un warning callout.** Texto de ejemplo para mostrarlo en acción.
{{< /callout >}}

{{< callout danger >}}
**Esto es un danger callout.** Texto de ejemplo para mostrarlo en acción.
{{< /callout >}}
