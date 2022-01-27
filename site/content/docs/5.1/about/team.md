---
layout: docs
title: Equipo
description: Una descripción general del equipo fundador y los principales contribuyentes de Bootstrap.
group: about
---

Bootstrap es mantenido por el equipo fundador y un pequeño grupo de valiosos colaboradores principales, con el apoyo masivo y la participación de nuestra comunidad.

{{< team.inline >}}
<div class="list-group mb-3">
  {{- range (index $.Site.Data "core-team") }}
    <a class="list-group-item list-group-item-action d-flex align-items-center" href="https://github.com/{{ .user }}">
      <img src="https://github.com/{{ .user }}.png" alt="@{{ .user }}" width="32" height="32" class="rounded me-2" loading="lazy">
      <span>
        <strong>{{ .name }}</strong> @{{ .user }}
      </span>
    </a>
  {{ end -}}
</div>
{{< /team.inline >}}

Participa en el desarrollo de Bootstrap [abriendo un issue]({{< param repo >}}/issues/new) o enviando un pull request. Lee nuestras [directrices de contribución]({{< param repo >}}/blob/v{{< param current_version >}}/.github/CONTRIBUTING.md) para obtener información sobre cómo desarrollamos.