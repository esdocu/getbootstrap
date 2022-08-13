---
layout: docs
title: Navegadores y dispositivos
description: Obtén información sobre los navegadores y dispositivos, desde modernos hasta antiguos, que son compatibles con Bootstrap, incluidas las peculiaridades y los errores conocidos de cada uno.
group: getting-started
toc: true
---

## Navegadores compatibles

Bootstrap es compatible con las **últimas versiones estables** de todos los principales navegadores y plataformas.

Los navegadores alternativos que utilizan la última versión de WebKit, Blink o Gecko, ya sea directamente o mediante la API de vista web de la plataforma, no son compatibles explícitamente. Sin embargo, Bootstrap debería (en la mayoría de los casos) mostrarse y funcionar correctamente en estos navegadores también. A continuación se proporciona información de soporte más específica.

Puedes encontrar nuestra gama de navegadores compatibles y sus versiones [en nuestro archivo `.browserslistrc`]({{< param repo >}}/blob/v{{< param current_version >}}/.browserslistrc):


```text
{{< rf.inline >}}
{{- readFile ".browserslistrc" | chomp | htmlEscape -}}
{{< /rf.inline >}}
```

Usamos [Autoprefixer](https://github.com/postcss/autoprefixer) para manejar la compatibilidad prevista del navegador a través de prefijos CSS, que usa [Browserslist](https://github.com/browserslist/browserslist) para administrar estas versiones del navegador. Consulta su documentación para saber cómo integrar estas herramientas en tus proyectos.

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

### Dispositivos móviles

En términos generales, Bootstrap admite las últimas versiones de los navegadores predeterminados de cada plataforma. Ten en cuenta que los navegadores proxy (como Opera Mini, el modo Turbo de Opera Mobile, UC Browser Mini, Amazon Silk) no son compatibles.

<table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Chrome</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
      <th scope="col">Android Browser &amp; WebView</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Android</th>
      <td>Soportado</td>
      <td>Soportado</td>
      <td class="text-muted">&mdash;</td>
      <td>v6.0+</td>
    </tr>
    <tr>
      <th scope="row">iOS</th>
      <td>Soportado</td>
      <td>Soportado</td>
      <td>Soportado</td>
      <td class="text-muted">&mdash;</td>
    </tr>
  </tbody>
</table>

### Navegadores de escritorio

Del mismo modo, se admiten las últimas versiones de la mayoría de los navegadores de escritorio.

<table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Chrome</th>
      <th scope="col">Firefox</th>
      <th scope="col">Microsoft Edge</th>
      <th scope="col">Opera</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Mac</th>
      <td>Soportado</td>
      <td>Soportado</td>
      <td>Soportado</td>
      <td>Soportado</td>
      <td>Soportado</td>
    </tr>
    <tr>
      <th scope="row">Windows</th>
      <td>Soportado</td>
      <td>Soportado</td>
      <td>Soportado</td>
      <td>Soportado</td>
      <td class="text-muted">&mdash;</td>
    </tr>
  </tbody>
</table>

Para Firefox, además de la versión estable normal más reciente, también admitimos la última versión de [Extended Support Release (ESR)](https://www.mozilla.org/en-US/firefox/enterprise/) de Firefox.

Extraoficialmente, Bootstrap debería verse y comportarse lo suficientemente bien en Chromium y Chrome para Linux y Firefox para Linux, aunque oficialmente no son compatibles.

## Internet Explorer

Internet Explorer no es compatible. **Si necesitas compatibilidad con Internet Explorer, usa Bootstrap v4.**

## Modals y dropdowns en móviles

### Overflow y scrolling

El soporte para `overflow: hidden;` en el elemento `<body>` es bastante limitado en iOS y Android. Con ese fin, cuando te desplazas más allá de la parte superior o inferior de un modal en cualquiera de los navegadores de esos dispositivos, el contenido `<body>` comenzará a desplazarse. Consulta [Error de Chrome n.° 175502](https://bugs.chromium.org/p/chromium/issues/detail?id=175502) (corregido en Chrome v40) y [Error de WebKit n.° 153852](https://bugs.webkit.org/show_bug.cgi?id=153852).

### iOS text fields y scrolling

A partir de iOS 9.2, mientras un modal está abierto, si el toque inicial de un gesto de desplazamiento está dentro de los límites de un textual `<input>` o un `<textarea>`, el contenido `<body>` debajo del modal se desplazará en lugar del propio modal. Consulta el [error de WebKit n.° 153856](https://bugs.webkit.org/show_bug.cgi?id=153856).

### Navbar Dropdowns

El elemento `.dropdown-backdrop` no se usa en iOS en la navegación debido a la complejidad de z-index. Por lo tanto, para cerrar los menús desplegables en las barras de navegación, debes hacer clic directamente en el elemento desplegable (o [cualquier otro elemento que active un evento de clic en iOS](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event#Safari_Mobile)).

## Browser zooming

El zoom de página inevitablemente presenta artefactos de representación en algunos componentes, tanto en Bootstrap como en el resto de la web. Dependiendo del problema, es posible que podamos solucionarlo (busca primero y luego abre un problema si es necesario). Sin embargo, tendemos a ignorarlos, ya que a menudo no tienen una solución directa más que soluciones alternativas.

{{< callout info >}}
{{< partial "maybe-interested-2.md" >}}
{{< /callout >}}

## Validadores

Para brindar la mejor experiencia posible a los navegadores antiguos y con errores, Bootstrap utiliza [hacks de navegador CSS](http://browserhacks.com/) en varios lugares para orientar CSS especial a ciertas versiones del navegador para evitar errores en el los propios navegadores. Es comprensible que estos hacks hagan que los validadores de CSS se quejen de que no son válidos. En un par de lugares, también utilizamos características de CSS de última generación que aún no están completamente estandarizadas, pero se utilizan únicamente para la mejora progresiva.

Estas advertencias de validación no importan en la práctica, ya que la parte no pirateada de nuestro CSS se valida completamente y las porciones pirateadas no interfieren con el funcionamiento adecuado de la porción no pirateada, por lo que ignoramos deliberadamente estas advertencias en particular.

Nuestros documentos HTML también tienen algunas advertencias de validación de HTML triviales e intrascendentes debido a nuestra inclusión de una solución para [cierto error de Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=654072).