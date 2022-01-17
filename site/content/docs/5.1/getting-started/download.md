---
layout: docs
title: Descargar
description: Descarga Bootstrap para obtener el CSS y JavaScript compilados, el código fuente o inclúyelo con tus administradores de paquetes favoritos como npm, RubyGems y más.
group: getting-started
toc: true
---

## CSS y JS compilados

Descarga el código compilado listo para usar para **Bootstrap v{{< param current_version >}}** para colocarlo fácilmente en tu proyecto, que incluye:

- Paquetes CSS compilados y minificados (ver [Comparación de archivos CSS]({{< docsref "/getting-started/contents#css-files" >}}))
- Complementos de JavaScript compilados y minificados (consulta [Comparación de archivos JS]({{< docsref "/getting-started/contents#js-files" >}}))

Esto no incluye documentación, archivos fuente ni dependencias de JavaScript opcionales como Popper.

<a href="{{< param "download.dist" >}}" class="btn btn-bd-primary" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download Bootstrap');">Descargar</a>

## Archivos fuente

Compila Bootstrap con tus propios assets descargando nuestros archivos fuente Sass, JavaScript y de documentación. Esta opción requiere algunas herramientas adicionales:

- [Compilador Sass]({{< docsref "/getting-started/contribute#sass" >}}) para compilar archivos fuente Sass en archivos CSS
- [Autoprefixer](https://github.com/postcss/autoprefixer) para prefijos CSS

Si necesitas nuestro conjunto completo de [herramientas de compilación]({{< docsref "/getting-started/contribute#tooling-setup" >}}), estas se incluyen para desarrollar Bootstrap junto a su documentación, pero es probable que no sean adecuadas para tus propósitos, tus proyectos.

<a href="{{< param "download.source" >}}" class="btn btn-bd-primary" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download source');">Descargar archivos fuente</a>

## Ejemplos

Si deseas descargar y examinar nuestros [ejemplos]({{< docsref "/examples" >}}), puedes obtener los ejemplos ya creados:

<a href="{{< param "download.dist_examples" >}}" class="btn btn-bd-primary" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download Examples');">Descargar ejemplos</a>

## CDN via jsDelivr

Omite la descarga con [jsDelivr](https://www.jsdelivr.com/) para entregar la versión en caché del CSS y JS compilados de Bootstrap a tu proyecto.

```html
<link href="{{< param "cdn.css" >}}" rel="stylesheet" integrity="{{< param "cdn.css_hash" >}}" crossorigin="anonymous">
<script src="{{< param "cdn.js_bundle" >}}" integrity="{{< param "cdn.js_bundle_hash" >}}" crossorigin="anonymous"></script>
```

Si estás utilizando nuestro JavaScript compilado y prefieres incluir Popper por separado, agrega Popper antes de nuestro JS, preferiblemente a través de un CDN.

```html
<script src="{{< param "cdn.popper" >}}" integrity="{{< param "cdn.popper_hash" >}}" crossorigin="anonymous"></script>
<script src="{{< param "cdn.js" >}}" integrity="{{< param "cdn.js_hash" >}}" crossorigin="anonymous"></script>
```

## Administradores de paquetes

Incorpora los **archivos fuente** de Bootstrap en casi cualquier proyecto con algunos de los administradores de paquetes más populares. Independientemente del administrador de paquetes, Bootstrap **requerirá un [compilador Sass]({{< docsref "/getting-started/contribute#sass" >}}) y [Autoprefixer](https://github.com/postcss/autoprefixer)** para una configuración que coincida con nuestras versiones compiladas oficiales.

### npm

Instala Bootstrap en tus aplicaciones Node.js con [el paquete npm](https://www.npmjs.com/package/bootstrap):

```sh
npm install bootstrap
```

`const bootstrap = require('bootstrap')` o `import bootstrap from 'bootstrap'` cargarán todos los complementos de Bootstrap en un objeto `bootstrap`.
El propio módulo `bootstrap` exporta todos nuestros complementos. Puedes cargar manualmente los complementos de Bootstrap individualmente cargando los archivos `/js/dist/*.js` en el directorio de nivel superior del paquete.

El `package.json` de Bootstrap contiene algunos metadatos adicionales bajo las siguientes claves:

- `sass` - ruta al archivo fuente principal [Sass](https://sass-lang.com/) de Bootstrap
- `style` - ruta al CSS no minimizado de Bootstrap que se ha precompilado con la configuración predeterminada (sin personalización)

{{< callout info >}}
{{< partial "callout-info-npm-starter.md" >}}
{{< /callout >}}

### yarn

Instala Bootstrap en tus aplicaciones de Node.js con [el paquete yarn](https://yarnpkg.com/en/package/bootstrap):

```sh
yarn add bootstrap
```

### RubyGems

Instala Bootstrap en tus aplicaciones Ruby usando [Bundler](https://bundler.io/) (**recomendado**) y [RubyGems](https://rubygems.org/) agregando la siguiente línea a tu [`Gemfile`](https://bundler.io/gemfile.html):

```ruby
gem 'bootstrap', '~> {{< param current_ruby_version >}}'
```

Alternativamente, si no estás utilizando Bundler, puedes instalar la gema ejecutando este comando:

```sh
gem install bootstrap -v {{< param current_ruby_version >}}
```

[Consulta el README de la gema](https://github.com/twbs/bootstrap-rubygem/blob/master/README.md) para obtener más detalles.

### Composer

También puedes instalar y administrar Sass y JavaScript de Bootstrap usando [Composer](https://getcomposer.org/):

```sh
composer require twbs/bootstrap:{{< param current_version >}}
```

### NuGet

Si desarrollas en .NET Framework, también puedes instalar y administrar [CSS](https://www.nuget.org/packages/bootstrap/) de Bootstrap o [Sass](https://www.nuget.org/packages/bootstrap.sass/) y JavaScript mediante [NuGet](https://www.nuget.org/). Los proyectos más nuevos deben usar [libman](https://docs.microsoft.com/en-us/aspnet/core/client-side/libman/) u otro método, ya que NuGet está diseñado para código compilado, no para recursos de interfaz.

```powershell
Install-Package bootstrap
```

```powershell
Install-Package bootstrap.sass
```
