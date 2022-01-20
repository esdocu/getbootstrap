---
layout: docs
title: Badges
description: Documentación y ejemplos para insignias, nuestro pequeño componente de conteo y etiquetado.
group: components
toc: true
---

## Ejemplos

Las insignias se escalan para coincidir con el tamaño del elemento padre inmediato mediante el uso de tamaños de fuente relativos y unidades `em`. A partir de la v5, las insignias ya no tienen estilos de focus o de hover para los enlaces.

### Encabezados

{{< example >}}
<h1>Encabezado de ejemplo <span class="badge bg-secondary">Nuevo</span></h1>
<h2>Encabezado de ejemplo <span class="badge bg-secondary">Nuevo</span></h2>
<h3>Encabezado de ejemplo <span class="badge bg-secondary">Nuevo</span></h3>
<h4>Encabezado de ejemplo <span class="badge bg-secondary">Nuevo</span></h4>
<h5>Encabezado de ejemplo <span class="badge bg-secondary">Nuevo</span></h5>
<h6>Encabezado de ejemplo <span class="badge bg-secondary">Nuevo</span></h6>
{{< /example >}}

### Botones

Las insignias se pueden usar como parte de enlaces o botones para proporcionar un contador.

{{< example >}}
<button type="button" class="btn btn-primary">
  Notificaciones <span class="badge bg-secondary">4</span>
</button>
{{< /example >}}

Ten en cuenta que, dependiendo de cómo se utilicen, las insignias pueden resultar confusas para los usuarios de lectores de pantalla y tecnologías de asistencia similares. Si bien el estilo de las insignias proporciona una indicación visual de su propósito, a estos usuarios simplemente se les presentará el contenido de la insignia. Dependiendo de la situación específica, estas insignias pueden parecer palabras o números adicionales aleatorios al final de una oración, enlace o botón.

A menos que el contexto sea claro (como en el ejemplo de "Notificaciones", donde se entiende que el "4" es el número de notificaciones), considera incluir un contexto adicional con un texto adicional oculto visualmente.

### Posicionado

Usa las utilidades para modificar un `.badge` y colócalo en la esquina de un enlace o botón.

{{< example >}}
<button type="button" class="btn btn-primary position-relative">
  Inbox
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span class="visually-hidden">mensajes no leídos</span>
  </span>
</button>
{{< /example >}}

También puedes reemplazar la clase `.badge` con algunas utilidades más sin contar para un indicador más genérico.

{{< example >}}
<button type="button" class="btn btn-primary position-relative">
  Perfil
  <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
    <span class="visually-hidden">Nuevas alertas</span>
  </span>
</button>
{{< /example >}}

## Colores de fondo

Utiliza nuestras clases de utilidad de fondo para cambiar rápidamente la apariencia de una insignia. Ten en cuenta que cuando usas el `.bg-light` predeterminado de Bootstrap, es probable que necesites una utilidad de color de texto como `.text-dark` para un estilo adecuado. Esto se debe a que las utilidades de fondo no configuran nada más que `background-color`.

{{< example >}}
{{< badge.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<span class="badge bg-{{ .name }}{{ with .contrast_color }} text-{{ . }}{{ end }}">{{ .name | title }}</span>{{- end -}}
{{< /badge.inline >}}
{{< /example >}}

{{< callout info >}}
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## Insignias de píldora

Usa la clase de utilidad `.rounded-pill` para hacer que las insignias sean más redondeadas con un `border-radius` más grande.

{{< example >}}
{{< badge.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<span class="badge rounded-pill bg-{{ .name }}{{ with .contrast_color }} text-{{ . }}{{ end }}">{{ .name | title }}</span>{{- end -}}
{{< /badge.inline >}}
{{< /example >}}

## Sass

### Variables

{{< scss-docs name="badge-variables" file="scss/_variables.scss" >}}
