---
layout: docs
title: Enlace estirado
description: Haz que se pueda hacer clic en cualquier elemento HTML o componente de Bootstrap "estirando" un enlace anidado usando CSS.
group: helpers
---

Agrega `.stretched-link` a un enlace para hacer que se pueda hacer clic en su [bloque contenedor](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block) a través de un pseudo elemento `::after`. En la mayoría de los casos, esto significa que se puede hacer clic en un elemento con `position: relative;` que contiene un enlace con la clase `.stretched-link`. Ten en cuenta [cómo funciona `position` de CSS](https://www.w3.org/TR/CSS21/visuren.html#propdef-position), `.stretched-link` no se puede mezclar con la mayoría de los elementos de tabla.

Las Cards tienen `position: relative` de forma predeterminada en Bootstrap, por lo que en este caso puedes agregar de forma segura la clase `.stretched-link` a un enlace en la Card sin ningún otro cambio de HTML.

No se recomiendan múltiples enlaces y objetivos táctiles con enlaces extendidos. Sin embargo, algunos estilos de `position` y `z-index` pueden ayudar en caso de que sea necesario.

{{< example >}}
<div class="card" style="width: 18rem;">
  {{< placeholder width="100%" height="180" class="card-img-top" text="false" title="Card image cap" >}}
  <div class="card-body">
    <h5 class="card-title">Card con enlace estirado</h5>
    <p class="card-text">Un texto de ejemplo rápido para colocar próximo al título de la card y componer la mayor parte del contenido de la card.</p>
    <a href="#" class="btn btn-primary stretched-link">Ir a algún lugar</a>
  </div>
</div>
{{< /example >}}

La mayoría de los componentes personalizados no tienen `position: relative` de forma predeterminada, por lo que debemos agregar `.position-relative` aquí para evitar que el enlace se extienda fuera del elemento padre.

{{< example >}}
<div class="d-flex position-relative">
  {{< placeholder width="144" height="144" class="flex-shrink-0 me-3" text="false" title="Generic placeholder image" >}}
  <div>
    <h5 class="mt-0">Componente personalizado con enlace estirado</h5>
    <p>Este es un contenido placeholder para el componente personalizado. Tiene la intención de imitar el aspecto que tendría cierto contenido del mundo real, y lo estamos usando aquí para darle al componente un poco de cuerpo y tamaño.</p>
    <a href="#" class="stretched-link">Ir a algún lugar</a>
  </div>
</div>
{{< /example >}}

{{< example >}}
<div class="row g-0 bg-light position-relative">
  <div class="col-md-6 mb-md-0 p-md-4">
    {{< placeholder width="100%" height="200" class="w-100" text="false" title="Generic placeholder image" >}}
  </div>
  <div class="col-md-6 p-4 ps-md-0">
    <h5 class="mt-0">Columnas con enlace estirado</h5>
    <p>Otra instancia de contenido placeholder para este otro componente personalizado. Tiene la intención de imitar el aspecto que tendría cierto contenido del mundo real, y lo estamos usando aquí para darle al componente un poco de cuerpo y tamaño.</p>
    <a href="#" class="stretched-link">Ir a algún lugar</a>
  </div>
</div>
{{< /example >}}

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

## Identificando el bloque contenedor

Si el enlace ampliado no parece funcionar, el [bloque contenedor](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block) probablemente sea la causa. Las siguientes propiedades CSS harán que un elemento sea el bloque contenedor:

- Un valor de `position` que no sea `static`
- Un valor de `transform` o `perspective` que no sea `none`
- Un valor `will-change` de `transform` o `perspective`
- Un valor de `filter` que no sea `none` o un valor `will-change` de `filter` (solo funciona en Firefox)

{{< example >}}
<div class="card" style="width: 18rem;">
  {{< placeholder width="100%" height="180" class="card-img-top" text="false" title="Card image cap" >}}
  <div class="card-body">
    <h5 class="card-title">Card con enlaces estirados</h5>
    <p class="card-text">Un texto de ejemplo rápido para colocar próximo al título de la card y componer la mayor parte del contenido de la card.</p>
    <p class="card-text">
      <a href="#" class="stretched-link text-danger" style="position: relative;">El enlace estirado no funcionará aquí, porque <code>position: relative</code> se agrega al enlace</a>
    </p>
    <p class="card-text bg-light" style="transform: rotate(0);">
      Este <a href="#" class="text-warning stretched-link">enlace estirado</a> solo se extenderá sobre la etiqueta <code>p</code>, porque se le aplica una transformación.
    </p>
  </div>
</div>
{{< /example >}}
