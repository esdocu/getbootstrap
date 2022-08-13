---
layout: docs
title: Enlaces de colores
description: Enlaces de colores con estados flotantes
group: helpers
toc: false
---

Puedes usar las clases `.link-*` para colorear los enlaces. A diferencia de las [clases `.text-*`]({{< docsref "/utilities/colors" >}}), estas clases tienen un estado `:hover` y `:focus`.

{{< example >}}
{{< colored-links.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<a href="#" class="link-{{ .name }}">Enlace {{ .name | title }}</a> 
{{- end -}}
{{< /colored-links.inline >}}
{{< /example >}}

{{< callout info >}}
Algunos de los estilos de enlace usan un color de primer plano relativamente claro y solo deben usarse sobre un fondo oscuro para tener suficiente contraste.
{{< /callout >}}

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}