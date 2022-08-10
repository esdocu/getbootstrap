---
layout: docs
title: Navs and tabs
description: Documentación y ejemplos sobre cómo usar los componentes de navegación incluidos de Bootstrap.
group: components
aliases: "/docs/5.1/components/navs/"
toc: true
---

## Base nav

La navegación disponible en Bootstrap comparte marcas y estilos generales, desde la clase base `.nav` hasta los estados *active* y *disabled*. Cambia las clases modificadoras para cambiar entre cada estilo.

El componente base `.nav` está construido con flexbox y proporciona una base sólida para construir todo tipo de componentes de navegación. Incluyen algunas sobrescrituras de estilo (para trabajar con listas), algo de padding de enlaces para áreas de acceso más grandes y estilo básico para *disabled*.

{{< callout info >}}
El componente base `.nav` no incluye ningún estado `.active`. Los siguientes ejemplos incluyen la clase, principalmente para demostrar que esta clase en particular no activa ningún estilo especial.

Para transmitir el estado activo a las tecnologías de asistencia, usa el atributo `aria-current`, usando el valor `page` para la página actual, o `true` para el elemento actual en un conjunto.
{{< /callout >}}

{{< example >}}
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Activo</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Enlace</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Enlace</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Deshabilitado</a>
  </li>
</ul>
{{< /example >}}

Las clases se utilizan en todo momento, por lo que tu marcado puede ser súper flexible. Usa `<ul>`s como arriba, `<ol>` si el orden de tus elementos es importante, o lanza el tuyo propio con un elemento `<nav>`. Debido a que `.nav` usa `display: flex`, los enlaces de navegación se comportan igual que los elementos de navegación, pero sin el marcado adicional.

{{< example >}}
<nav class="nav">
  <a class="nav-link active" aria-current="page" href="#">Activo</a>
  <a class="nav-link" href="#">Enlace</a>
  <a class="nav-link" href="#">Enlace</a>
  <a class="nav-link disabled">Deshabilitado</a>
</nav>
{{< /example >}}

## Estilos disponibles

Cambia el estilo del componente `.nav` con modificadores y utilidades. Mezcla y combina según sea necesario, o construye el tuyo propio.

### Alineación horizontal

Cambia la alineación horizontal de tu navegación con [flexbox utility]({{< docsref "/layout/grid#horizontal-alignment" >}}). De forma predeterminada, los navegadores están alineados a la izquierda, pero puedes cambiarlos fácilmente para que estén alineados al centro o a la derecha.

Centrado con `.justify-content-center`:

{{< example >}}
<ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Activo</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Enlace</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Enlace</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Deshabilitado</a>
  </li>
</ul>
{{< /example >}}

Alineado a la derecha con `.justify-content-end`:

{{< example >}}
<ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Activo</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Enlace</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Enlace</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Deshabilitado</a>
  </li>
</ul>
{{< /example >}}

### Vertical

Apila tu navegación cambiando la dirección del elemento flex con la utilidad `.flex-column`. ¿Necesitas apilarlos en algos viewports pero no en otros? Usa las versiones responsive (por ejemplo, `.flex-sm-column`).

{{< example >}}
<ul class="nav flex-column">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Activo</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Enlace</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Enlace</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Deshabilitado</a>
  </li>
</ul>
{{< /example >}}

Como siempre, la navegación vertical también es posible sin `<ul>`s.

{{< example >}}
<nav class="nav flex-column">
  <a class="nav-link active" aria-current="page" href="#">Activo</a>
  <a class="nav-link" href="#">Enlace</a>
  <a class="nav-link" href="#">Enlace</a>
  <a class="nav-link disabled">Deshabilitado</a>
</nav>
{{< /example >}}

### Tabs

Toma la navegación básica de arriba y agrega la clase `.nav-tabs` para generar una interfaz con pestañas. Úsalos para crear regiones tabulables con nuestro [complemento de JavaScript para pestañas](#javascript-behavior).

{{< example >}}
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Activo</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Enlace</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Enlace</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Deshabilitado</a>
  </li>
</ul>
{{< /example >}}

### Pills

Toma ese mismo HTML, pero usa `.nav-pills` en su lugar:

{{< example >}}
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Activo</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Enlace</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Enlace</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Deshabilitado</a>
  </li>
</ul>
{{< /example >}}

### Llena y justifica

Fuerza el contenido de tu `.nav` para extender el ancho completo disponible en una de las dos clases modificadoras. Para llenar proporcionalmente todo el espacio disponible con tus `.nav-item`s, usa `.nav-fill`. Observa que todo el espacio horizontal está ocupado, pero no todos los elementos de navegación tienen el mismo ancho.

{{< example >}}
<ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Activo</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Enlace de navegación mucho más largo</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Enlace</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Deshabilitado</a>
  </li>
</ul>
{{< /example >}}

Al usar una navegación basada en `<nav>`, puedes omitir con seguridad `.nav-item` ya que solo se requiere `.nav-link` para diseñar los elementos `<a>`.

{{< example >}}
<nav class="nav nav-pills nav-fill">
  <a class="nav-link active" aria-current="page" href="#">Activo</a>
  <a class="nav-link" href="#">Enlace de navegación mucho más largo</a>
  <a class="nav-link" href="#">Enlace</a>
  <a class="nav-link disabled">Deshabilitado</a>
</nav>
{{< /example >}}

Para elementos de igual ancho, usa `.nav-justified`. Todo el espacio horizontal estará ocupado por enlaces de navegación, pero a diferencia del `.nav-fill` anterior, cada elemento de navegación tendrá el mismo ancho.

{{< example >}}
<ul class="nav nav-pills nav-justified">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Activo</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Enlace de navegación mucho más largo</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Enlace</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Deshabilitado</a>
  </li>
</ul>
{{< /example >}}

Similar al ejemplo `.nav-fill` usando una navegación basada en `<nav>`.

{{< example >}}
<nav class="nav nav-pills nav-justified">
  <a class="nav-link active" aria-current="page" href="#">Activo</a>
  <a class="nav-link" href="#">Enlace de navegación mucho más largo</a>
  <a class="nav-link" href="#">Enlace</a>
  <a class="nav-link disabled">Deshabilitado</a>
</nav>
{{< /example >}}

## Trabajar con utilidades flex

Si necesitas variaciones de navegación responsive, considera usar una serie de [utilidades flexbox]({{< docsref "/utilities/flex" >}}). Si bien son más detalladas, estas utilidades ofrecen una mayor personalización en los breakpoints responsive. En el ejemplo a continuación, nuestra navegación se apilará en el breakpoint más bajo, luego se adaptará a un diseño horizontal que llena el ancho disponible a partir del breakpoint pequeño (small).

{{< example >}}
<nav class="nav nav-pills flex-column flex-sm-row">
  <a class="flex-sm-fill text-sm-center nav-link active" aria-current="page" href="#">Activo</a>
  <a class="flex-sm-fill text-sm-center nav-link" href="#">Enlace nav más largo</a>
  <a class="flex-sm-fill text-sm-center nav-link" href="#">Enlace</a>
  <a class="flex-sm-fill text-sm-center nav-link disabled">Deshabilitado</a>
</nav>
{{< /example >}}

## En cuanto a la accesibilidad

Si estás utilizando navs para proporcionar una barra de navegación, asegúrate de agregar `role="navigation"` al contenedor principal más lógico de `<ul>`, o ajusta un elemento `<nav>` alrededor de toda la navegación. No agregues el rol al propio `<ul>`, ya que esto evitaría que las tecnologías de asistencia lo anuncien como una lista real.

Ten en cuenta que las barras de navegación, incluso si tienen un estilo visual como pestañas con la clase `.nav-tabs`, **no** deben recibir atributos `role="tablist"`, `role="tab"` o `role="tabpanel"`. Estos solo son apropiados para interfaces con pestañas dinámicas, como se describe en las [Prácticas de creación <abbr title="Iniciativa de accesibilidad web">WAI</abbr> <abbr title="Aplicaciones de Internet enriquecidas accesibles">ARIA</abbr>](https://www.w3.org/TR/wai-aria-practices/#tabpanel). Consulta [Comportamiento de JavaScript](#javascript-behavior) para conocer las interfaces con pestañas dinámicas en esta sección para ver un ejemplo. El atributo `aria-current` no es necesario en las interfaces con pestañas dinámicas ya que nuestro JavaScript maneja el estado seleccionado agregando `aria-selected="true"` en la pestaña activa.

## Uso de dropdowns

Agrega menús desplegables con un poco de HTML adicional y el [complemento JavaScript de menús desplegables]({{< docsref "/components/dropdowns#usage" >}}).

### Tabs con dropdowns

{{< example >}}
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Activo</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Acción</a></li>
      <li><a class="dropdown-item" href="#">Otra acción</a></li>
      <li><a class="dropdown-item" href="#">Algo más aquí</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Enlace separado</a></li>
    </ul>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Enlace</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Deshabilitado</a>
  </li>
</ul>
{{< /example >}}

### Pills con dropdowns

{{< example >}}
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Activo</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Acción</a></li>
      <li><a class="dropdown-item" href="#">Otra acción</a></li>
      <li><a class="dropdown-item" href="#">Algo más aquí</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Enlace separado</a></li>
    </ul>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Enlace</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Deshabilitado</a>
  </li>
</ul>
{{< /example >}}

## Sass

### Variables

{{< scss-docs name="nav-variables" file="scss/_variables.scss" >}}

## Comportamiento de JavaScript

Usa el complemento JavaScript de pestañas, inclúyelo individualmente o a través del archivo `bootstrap.js` compilado, para ampliar nuestras pestañas (tabs) y píldoras (pills) de navegación para crear paneles tabulados de contenido local.

Interfaces con pestañas dinámicas, como se describe en las [Prácticas de creación <abbr title="Iniciativa de accesibilidad web">WAI</abbr> <abbr title="Aplicaciones de Internet enriquecidas accesibles">ARIA</abbr>](https://www.w3.org/TR/wai-aria-practices/#tabpanel), requieren `role="tablist"`, `role="tab"`, `role="tabpanel"` y atributos `aria-` adicionales en orden para transmitir su estructura, funcionalidad y estado actual a los usuarios de tecnologías de asistencia (como los lectores de pantalla). Como práctica recomendada, recomendamos usar elementos `<button>` para las pestañas, ya que estos son controles que activan un cambio dinámico, en lugar de enlaces que navegan a una nueva página o ubicación.

{{< callout danger >}}
Ten en cuenta que el complemento JavaScript de pestaña **no** admite interfaces con pestañas que contienen menús desplegables, ya que estos causan problemas de usabilidad y accesibilidad. Desde una perspectiva de usabilidad, el hecho de que el elemento activador de la pestaña que se muestra actualmente no sea visible de inmediato (ya que está dentro del menú desplegable cerrado) puede causar confusión. Desde el punto de vista de la accesibilidad, actualmente no existe una forma sensata de asignar este tipo de construcción a un patrón WAI ARIA estándar, lo que significa que no se puede hacer fácilmente comprensible para los usuarios de tecnologías de asistencia.
{{< /callout >}}

<div class="bd-example">
  <ul class="nav nav-tabs mb-3" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Inicio</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Perfil</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contacto</button>
    </li>
  </ul>
  <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
      <p><strong>Este es un contenido placeholder asociado a la pestaña Inicio.</strong> Al hacer clic en otra pestaña, se cambiará la visibilidad de esta para la siguiente. La pestaña JavaScript intercambia clases para controlar la visibilidad y el estilo del contenido. Puedes usarlo con pestañas, píldoras y cualquier otra navegación basada en <code>.nav</code>.</p>
    </div>
    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
      <p><strong>Este es un contenido placeholder asociado a la pestaña Perfil.</strong> Al hacer clic en otra pestaña, se cambiará la visibilidad de esta para la siguiente. La pestaña JavaScript intercambia clases para controlar la visibilidad y el estilo del contenido. Puedes usarlo con pestañas, píldoras y cualquier otra navegación basada en <code>.nav</code>.</p>
    </div>
    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
      <p><strong>Este es un contenido placeholder asociado a la pestaña Contacto.</strong> Al hacer clic en otra pestaña, se cambiará la visibilidad de esta para la siguiente. La pestaña JavaScript intercambia clases para controlar la visibilidad y el estilo del contenido. Puedes usarlo con pestañas, píldoras y cualquier otra navegación basada en <code>.nav</code>.</p>
    </div>
  </div>
</div>

```html
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Inicio</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Perfil</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contacto</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>
```

Para ayudar a satisfacer tus necesidades, esto funciona con el marcado basado en `<ul>`, como se muestra arriba, o con cualquier marcado arbitrario "Lanza el tuyo propio". Ten en cuenta que si estás utilizando `<nav>`, no debes agregar `role="tablist"` directamente, ya que esto sobrescribiría el rol nativo del elemento como punto de referencia de navegación. En su lugar, cambia a un elemento alternativo (en el ejemplo a continuación, un simple `<div>`) y envuélvelo con `<nav>`.

<div class="bd-example">
  <nav>
    <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
      <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Inicio</button>
      <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Perfil</button>
      <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contacto</button>
    </div>
  </nav>
  <div class="tab-content" id="nav-tabContent">
    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
      <p><strong>Este es un contenido placeholder asociado a la pestaña Inicio.</strong> Al hacer clic en otra pestaña, se cambiará la visibilidad de esta para la siguiente. La pestaña JavaScript intercambia clases para controlar la visibilidad y el estilo del contenido. Puedes usarlo con pestañas, píldoras y cualquier otra navegación basada en <code>.nav</code>.</p>
    </div>
    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
      <p><strong>Este es un contenido placeholder asociado a la pestaña Perfil.</strong> Al hacer clic en otra pestaña, se cambiará la visibilidad de esta para la siguiente. La pestaña JavaScript intercambia clases para controlar la visibilidad y el estilo del contenido. Puedes usarlo con pestañas, píldoras y cualquier otra navegación basada en <code>.nav</code>.</p>
    </div>
    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
      <p><strong>Este es un contenido placeholder asociado a la pestaña Contacto.</strong> Al hacer clic en otra pestaña, se cambiará la visibilidad de esta para la siguiente. La pestaña JavaScript intercambia clases para controlar la visibilidad y el estilo del contenido. Puedes usarlo con pestañas, píldoras y cualquier otra navegación basada en <code>.nav</code>.</p>
    </div>
  </div>
</div>

```html
<nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Inicio</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Perfil</button>
    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contacto</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">...</div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
</div>
```

El complemento de pestañas (tabs) también funciona con pastillas (pills).

<div class="bd-example">
  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Inicio</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Perfil</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contacto</button>
    </li>
  </ul>
  <div class="tab-content" id="pills-tabContent">
    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
      <p><strong>Este es un contenido placeholder asociado a la pestaña Inicio.</strong> Al hacer clic en otra pestaña, se cambiará la visibilidad de esta para la siguiente. La pestaña JavaScript intercambia clases para controlar la visibilidad y el estilo del contenido. Puedes usarlo con pestañas, píldoras y cualquier otra navegación basada en <code>.nav</code>.</p>
    </div>
    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
      <p><strong>Este es un contenido placeholder asociado a la pestaña Perfil.</strong> Al hacer clic en otra pestaña, se cambiará la visibilidad de esta para la siguiente. La pestaña JavaScript intercambia clases para controlar la visibilidad y el estilo del contenido. Puedes usarlo con pestañas, píldoras y cualquier otra navegación basada en <code>.nav</code>.</p>
    </div>
    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
      <p><strong>Este es un contenido placeholder asociado a la pestaña Contacto.</strong> Al hacer clic en otra pestaña, se cambiará la visibilidad de esta para la siguiente. La pestaña JavaScript intercambia clases para controlar la visibilidad y el estilo del contenido. Puedes usarlo con pestañas, píldoras y cualquier otra navegación basada en <code>.nav</code>.</p>
    </div>
  </div>
</div>

```html
<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Inicio</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Perfil</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contacto</button>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...</div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
</div>
```

Y con pastillas verticales.

<div class="bd-example">
  <div class="d-flex align-items-start">
    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Inicio</button>
      <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Perfil</button>
      <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Mensajes</button>
      <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Configuración</button>
    </div>
    <div class="tab-content" id="v-pills-tabContent">
      <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
      <p><strong>Este es un contenido placeholder asociado a la pestaña Inicio.</strong> Al hacer clic en otra pestaña, se cambiará la visibilidad de esta para la siguiente. La pestaña JavaScript intercambia clases para controlar la visibilidad y el estilo del contenido. Puedes usarlo con pestañas, píldoras y cualquier otra navegación basada en <code>.nav</code>.</p>
      </div>
      <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
      <p><strong>Este es un contenido placeholder asociado a la pestaña Perfil.</strong> Al hacer clic en otra pestaña, se cambiará la visibilidad de esta para la siguiente. La pestaña JavaScript intercambia clases para controlar la visibilidad y el estilo del contenido. Puedes usarlo con pestañas, píldoras y cualquier otra navegación basada en <code>.nav</code>.</p>
      </div>
      <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
      <p><strong>Este es un contenido placeholder asociado a la pestaña Mensajes.</strong> Al hacer clic en otra pestaña, se cambiará la visibilidad de esta para la siguiente. La pestaña JavaScript intercambia clases para controlar la visibilidad y el estilo del contenido. Puedes usarlo con pestañas, píldoras y cualquier otra navegación basada en <code>.nav</code>.</p>
      </div>
      <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
      <p><strong>Este es un contenido placeholder asociado a la pestaña Configuración.</strong> Al hacer clic en otra pestaña, se cambiará la visibilidad de esta para la siguiente. La pestaña JavaScript intercambia clases para controlar la visibilidad y el estilo del contenido. Puedes usarlo con pestañas, píldoras y cualquier otra navegación basada en <code>.nav</code>.</p>
      </div>
    </div>
  </div>
</div>

```html
<div class="d-flex align-items-start">
  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Inicio</button>
    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Perfil</button>
    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Mensajes</button>
    <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Configuración</button>
  </div>
  <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
  </div>
</div>
```

### Uso de atributos de datos

Puedes activar la navegación por pestañas o píldoras sin escribir JavaScript simplemente especificando `data-bs-toggle="tab"` o `data-bs-toggle="pill"` en un elemento. Utiliza estos atributos de datos en `.nav-tabs` o `.nav-pills`.

```html
<!-- Nav tabs -->
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Inicio</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Perfil</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">Mensajes</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="settings-tab" data-bs-toggle="tab" data-bs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Configuración</button>
  </li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
  <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">...</div>
  <div class="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab">...</div>
</div>
```

### A través de JavaScript

Habilita las pestañas que se pueden tabular a través de JavaScript (cada pestaña debe activarse individualmente):

```js
var triggerTabList = Array.prototype.slice.call(document.querySelectorAll('#myTab button'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})
```

Puedes activar pestañas individuales de varias maneras:

```js
var triggerEl = document.querySelector('#myTab button[data-bs-target="#profile"]')
bootstrap.Tab.getInstance(triggerEl).show() // Seleccionar pestaña por nombre

var triggerFirstTabEl = document.querySelector('#myTab li:first-child button')
bootstrap.Tab.getInstance(triggerFirstTabEl).show() // Seleccionar la primera pestaña
```

### Efecto fade

Para hacer que las pestañas aparezcan gradualmente, agrega `.fade` a cada `.tab-pane`. El primer panel de pestañas también debe tener `.show` para que el contenido inicial sea visible.

```html
<div class="tab-content">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane fade" id="messages" role="tabpanel" aria-labelledby="messages-tab">...</div>
  <div class="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">...</div>
</div>
```

### Métodos

{{< callout danger >}}
{{< partial "callout-danger-async-methods.md" >}}
{{< /callout >}}

#### constructor

Activa un elemento de pestaña y un contenedor de contenido. La pestaña debe tener un `data-bs-target` o, si usa un enlace, un atributo `href`, apuntando a un nodo contenedor en el DOM.

```html
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Inicio</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Perfil</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">Mensajes</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="settings-tab" data-bs-toggle="tab" data-bs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Configuración</button>
  </li>
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
  <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">...</div>
  <div class="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab">...</div>
</div>

<script>
  var firstTabEl = document.querySelector('#myTab li:last-child button')
  var firstTab = new bootstrap.Tab(firstTabEl)

  firstTab.show()
</script>
```

#### show

Selecciona la pestaña dada y muestra su panel asociado. Cualquier otra pestaña que se haya seleccionado previamente se deselecciona y su panel asociado se oculta. **Regresa a la persona que llama antes de que se muestre realmente el panel de pestañas** (es decir, antes de que ocurra el evento `shown.bs.tab`).

```js
  var someTabTriggerEl = document.querySelector('#someTabTrigger')
  var tab = new bootstrap.Tab(someTabTriggerEl)

  tab.show()
```

#### dispose

Destruye la pestaña de un elemento.

#### getInstance

Método *estático* que te permite obtener la instancia de pestaña asociada con un elemento DOM

```js
var triggerEl = document.querySelector('#trigger')
var tab = bootstrap.Tab.getInstance(triggerEl) // Devuelve una instancia de pestaña Bootstrap
```

#### getOrCreateInstance

Método *estático* que te permite obtener la instancia de pestaña asociada con un elemento DOM, o crear una nueva en caso de que no se haya inicializado

```js
var triggerEl = document.querySelector('#trigger')
var tab = bootstrap.Tab.getOrCreateInstance(triggerEl) // Devuelve una instancia de pestaña Bootstrap
```

### Eventos

Al mostrar una nueva pestaña, los eventos se activan en el siguiente orden:

1. `hide.bs.tab` (en la pestaña activa actual)
2. `show.bs.tab` (en la pestaña que se mostrará)
3. `hidden.bs.tab` (en la pestaña activa anterior, la misma que para el evento `hide.bs.tab`)
4. `shown.bs.tab` (en la pestaña recientemente activa recién mostrada, la misma que para el evento `show.bs.tab`)

Si ninguna pestaña estaba activa, los eventos `hide.bs.tab` y `hidden.bs.tab` no se activarán.

<table class="table">
  <thead>
    <tr>
      <th style="width: 150px;">Tipo de evento</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>show.bs.tab</code></td>
      <td>Este evento se activa al mostrar la pestaña, pero antes de que se muestre la nueva pestaña. Usa <code>event.target</code> y <code>event.relatedTarget</code> para referenciar la pestaña activa y la pestaña activa anterior (si está disponible) respectivamente.</td>
    </tr>
    <tr>
      <td><code>shown.bs.tab</code></td>
      <td>Este evento se activa en la presentación de pestañas después de que se haya mostrado una pestaña. Usa <code>event.target</code> y <code>event.relatedTarget</code> para referenciar la pestaña activa y la pestaña activa anterior (si está disponible) respectivamente.</td>
    </tr>
    <tr>
      <td><code>hide.bs.tab</code></td>
      <td>Este evento se activa cuando se debe mostrar una nueva pestaña (y, por lo tanto, se debe ocultar la pestaña activa anterior). Utiliza <code>event.target</code> y <code>event.relatedTarget</code> para referenciar la pestaña activa actual y la nueva pestaña que pronto estará activa, respectivamente.</td>
    </tr>
    <tr>
      <td><code>hidden.bs.tab</code></td>
      <td>Este evento se activa después de que se muestra una nueva pestaña (y, por lo tanto, la pestaña activa anterior está oculta). Utiliza <code>event.target</code> y <code>event.relatedTarget</code> para referenciar la pestaña activa anterior y la pestaña activa nueva, respectivamente.</td>
    </tr>
  </tbody>
</table>

```js
var tabEl = document.querySelector('button[data-bs-toggle="tab"]')
tabEl.addEventListener('shown.bs.tab', function (event) {
  event.target // pestaña recién activada
  event.relatedTarget // pestaña activa anterior
})
```
