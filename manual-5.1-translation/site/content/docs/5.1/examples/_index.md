---
layout: single
title: Ejemplos
description: Comienza rápidamente un proyecto con cualquiera de nuestros ejemplos que van desde el uso de partes del framework hasta componentes y diseños personalizados.
aliases: "/examples/"
---

{{< list-examples.inline >}}
{{ range $entry := $.Site.Data.examples -}}
  <h2 id="{{ $entry.category | urlize }}">{{ $entry.category }}</h2>
  <p>{{ $entry.description }}</p>
  {{ if eq $entry.category "RTL" -}}
    <div class="bd-callout bd-callout-warning">
      <p>La función RTL todavía es <strong>experimental</strong> y probablemente evolucionará según los comentarios de los usuarios. ¿Detectáste algo o tienes alguna mejora que sugerir? <a href="{{ $.Site.Params.repo }}/issues/new">Abre una incidencia</a>, nos encantaría recibir tu información.</p>
    </div>
  {{ end -}}

  {{ range $i, $example := $entry.examples -}}
    {{- $len := len $entry.examples -}}
    {{ if (eq $i 0) }}<div class="row">{{ end }}
      <div class="col-sm-6 col-md-4 col-xl-3 mb-3">
        <a class="d-block" href="/docs/{{ $.Site.Params.docs_version }}/examples/{{ $example.name | urlize }}/"{{ if in $example.name "RTL" }} hreflang="ar"{{ end }}>
          <img class="img-thumbnail mb-3" srcset="/docs/{{ $.Site.Params.docs_version }}/assets/img/examples/{{ $example.name | urlize }}.png,
                                                  /docs/{{ $.Site.Params.docs_version }}/assets/img/examples/{{ $example.name | urlize }}@2x.png 2x"
                                          src="/docs/{{ $.Site.Params.docs_version }}/assets/img/examples/{{ $example.name | urlize }}.png"
                                          alt=""
                                          width="480" height="300"
                                          loading="lazy">
          <h3 class="h5 mb-1">{{ $example.name }}</h3>
        </a>
        <p class="text-muted">{{ $example.description }}</p>
      </div>
    {{ if (eq (add $i 1) $len) }}</div>{{ end }}
  {{ end -}}
{{ end -}}
{{< /list-examples.inline >}}
