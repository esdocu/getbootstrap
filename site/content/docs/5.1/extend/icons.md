---
layout: docs
title: Iconos
description: Orientación y sugerencias para el uso de bibliotecas de iconos externos con Bootstrap.
group: extend
---

Si bien Bootstrap no incluye un conjunto de íconos predeterminado, tenemos nuestra propia biblioteca de íconos integral llamada Bootstrap Icons. Siéntete libre de usarlos o cualquier otro conjunto de iconos en tu proyecto. Hemos incluido detalles para los íconos de Bootstrap y otros conjuntos de íconos preferidos a continuación.

Si bien la mayoría de los conjuntos de íconos incluyen múltiples formatos de archivo, preferimos las implementaciones SVG por su mejor accesibilidad y compatibilidad con vectores.

## Bootstrap Icons

Bootstrap Icons es una biblioteca en crecimiento de íconos SVG diseñados por [@mdo](https://github.com/mdo) y mantenidos por [el equipo de Bootstrap](https://github.com/orgs/twbs/people). Los inicios de este conjunto de íconos provienen de los propios componentes de Bootstrap: nuestros formularios, carruseles y más. Bootstrap tiene muy pocas necesidades de íconos listas para usar, por lo que no necesitábamos mucho. Sin embargo, una vez que nos pusimos en marcha, no pudimos dejar de hacer más.

Ah, ¿y mencionamos que son completamente de código abierto? Con licencia del MIT, al igual que Bootstrap, nuestro conjunto de iconos está disponible para todos.

[Obtén más información sobre los íconos de Bootstrap]({{< param icons >}}), incluido cómo instalarlos y el uso recomendado.

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

## Alternativas

Hemos probado y utilizado estos conjuntos de iconos como alternativas preferidas a los iconos de Bootstrap.

{{< markdown >}}
{{< icons.inline >}}
{{- $type := .Get "type" | default "preferred" -}}

{{- range (index .Site.Data.icons $type) }}
- [{{ .name }}]({{ .website }})
{{- end }}
{{< /icons.inline >}}
{{< /markdown >}}

## Mas opciones

Si bien no los hemos probado nosotros mismos, parecen prometedores y brindan múltiples formatos, incluido SVG.

{{< markdown >}}
{{< icons.inline type="more" />}}
{{< /markdown >}}
