---
layout: docs
title: Parcel
description: Aprende a incluir Bootstrap en tu proyecto usando Parcel.
group: getting-started
toc: true
---

## Instalación de Parcel

Instala [Parcel Bundler](https://en.parceljs.org/getting_started.html).

## Instalación de Bootstrap

[Instala bootstrap]({{< docsref "/getting-started/download#npm" >}}) como un módulo Node.js usando npm.

Bootstrap depende de [Popper](https://popper.js.org/), que se especifica en la propiedad `peerDependencies`.
Esto significa que deberás asegurarte de agregarlo a tu `package.json` usando `npm install @popperjs/core`.

Cuando todo esté completo, tu proyecto se estructurará de la siguiente manera:

```text
project-name/
├── build/
├── node_modules/
│   └── bootstrap/
│   └── popper.js/
├── scss/
│   └── custom.scss
├── src/
│   └── index.html
│   └── index.js
└── package.json
```

## Importación de JavaScript

Importa el [JavaScript de Bootstrap]({{< docsref "/getting-started/javascript" >}}) en el punto de entrada de su aplicación (generalmente `src/index.js`). Puedes importar todos nuestros plugins en un archivo o por separado si necesitas solo un subconjunto de ellos.

```js
// Importar todos los plugins
import * as bootstrap from 'bootstrap';

// O importar solo los plugins necesarios
import { Tooltip as Tooltip, Toast as Toast, Popover as Popover } from 'bootstrap';

// O importar solo uno
import Alert as Alert from '../node_modules/bootstrap/js/dist/alert';
```

## Importación de CSS

Para utilizar todo el potencial de Bootstrap y personalizarlo según tus necesidades, utiliza los archivos fuente como parte del proceso bundling (agrupación de todos los archivos) de tu proyecto.

Crea tu propio `scss/custom.scss` para [importar archivos Sass de Bootstrap]({{< docsref "/customize/sass#importing" >}}) y luego sobrescribe las [variables personalizadas integradas]({{< docsref "/customize/sass#variable-defaults" >}}).

## Crear la aplicación

Incluye `src/index.js` antes de la etiqueta de cierre `</body>`.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <script src="./index.js"></script>
  </body>
</html>
```

### Edita `package.json`

Agrega los scripts `dev` y `build` en tu archivo `package.json`.

```json
"scripts": {
  "dev": "parcel ./src/index.html",
  "prebuild": "npx rimraf build",
  "build": "parcel build --public-url ./ ./src/index.html --experimental-scope-hoisting --out-dir build"
}
```

### Ejecuta el script dev

Se podrá acceder a tu aplicación en `http://127.0.0.1:1234`.

```sh
npm run dev
```

### Construye los archivos de la aplicaciones

Los archivos construidos están en la carpeta `build/`.

```sh
npm run build
```
