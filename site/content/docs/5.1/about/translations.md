---
layout: docs
title: Traducciones
description: Enlaces a sitios de documentación de Bootstrap traducidos por la comunidad.
group: about
---

Los miembros de la comunidad han traducido la documentación de Bootstrap a varios idiomas. Ninguno tiene soporte oficial y es posible que no siempre estén actualizados.

{{< translations.inline >}}
<ul>
{{ range .Site.Data.translations -}}
  <li><a href="{{ .url }}" hreflang="{{ .code }}">{{ .description }} ({{ .name }})</a></li>
{{ end -}}
</ul>
{{< /translations.inline >}}

**No ayudamos a organizar ni a alojar traducciones, solo las vinculamos.**

¿Terminaste una traducción nueva o mejor? Abre un pull request para agregarla a nuestra lista.