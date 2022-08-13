---
layout: docs
title: Webpack y bundlers
description: Aprende a incluir Bootstrap en tu proyecto usando Webpack u otros paquetes.
group: getting-started
toc: true
---

## Instalación de Bootstrap

[Instala bootstrap]({{< docsref "/getting-started/download#npm" >}}) como un módulo Node.js usando npm.

## Importación de JavaScript

Importa el [JavaScript de Bootstrap]({{< docsref "/getting-started/javascript" >}}) agregando esta línea al punto de entrada de tu aplicación (normalmente `index.js` o `app.js`):

```js
import 'bootstrap';

// u obtén todas las exportaciones nombradas para su uso posterior
import * as bootstrap from 'bootstrap';
```

Alternativamente, si solo necesitas algunos de nuestros plugins, puedes **importar plugins individualmente** según sea necesario:

```js
import Alert from 'bootstrap/js/dist/alert';

// o especifica qué plugins necesitas:
import { Tooltip, Toast, Popover } from 'bootstrap';
```

Bootstrap depende de [Popper](https://popper.js.org/), que se especifica en la propiedad `peerDependencies`.
Esto significa que deberás asegurarte de agregarlo a tu `package.json` usando `npm install @popperjs/core`.

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

## Importación de estilos

### Importación de Sass precompilado

Para disfrutar de todo el potencial de Bootstrap y personalizarlo según tus necesidades, utiliza los archivos fuente como parte del proceso de bundling (agrupación de todos los archivos) de tu proyecto.

Primero, crea tu propio `_custom.scss` y utilízalo para sobreescribir las [variables personalizadas integradas]({{< docsref "/customize/sass" >}}). Luego, usa tu archivo Sass principal para importar tus variables personalizadas, seguido de Bootstrap:

```scss
@import "custom";
@import "~bootstrap/scss/bootstrap";
```

Para que Bootstrap compile, asegúrate de instalar y usar los cargadores necesarios: [sass-loader](https://github.com/webpack-contrib/sass-loader), [postcss-loader](https://github.com/webpack-contrib/postcss-loader) con [Autoprefixer](https://github.com/postcss/autoprefixer#webpack). Con una configuración mínima, la configuración de tu webpack debe incluir esta regla o similar:


```js
// ...
{
  test: /\.(scss)$/,
  use: [{
    // inyectar CSS a la página
    loader: 'style-loader'
  }, {
    // traduce CSS a módulos CommonJS
    loader: 'css-loader'
  }, {
    // Ejecutar acciones postcss
    loader: 'postcss-loader',
    options: {
      // `postcssOptions` es necesario para postcss 8.x;
      // si usas postcss 7.x omite la clave
      postcssOptions: {
        // Plugins postcss, se pueden exportar a postcss.config.js
        plugins: function () {
          return [
            require('autoprefixer')
          ];
        }
      }
    }
  }, {
    // compilar Sass a CSS
    loader: 'sass-loader'
  }]
}
// ...
```

### Importación de CSS compilado

Alternativamente, puedes usar el CSS listo para usar de Bootstrap simplemente agregando esta línea al punto de entrada de tu proyecto:

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

En este caso, puedes usar tu regla existente para `css` sin ninguna modificación especial en la configuración de webpack, excepto que no necesitas `sass-loader` solo [style-loader](https://github.com/webpack-contrib/style-loader) y [css-loader](https://github.com/webpack-contrib/css-loader).

```js
// ...
module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }
  ]
}
// ...
```
