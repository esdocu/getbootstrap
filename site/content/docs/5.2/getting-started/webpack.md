---
layout: docs
title: "Bootstrap & Webpack"
description: La guía oficial sobre cómo incluir y agrupar CSS y JavaScript de Bootstrap en tu proyecto usando Webpack.
group: getting-started
toc: true
---

<img class="mb-4 img-fluid rounded-3" srcset="/docs/{{< param docs_version >}}/assets/img/guides/bootstrap-webpack.png, /docs/{{< param docs_version >}}/assets/img/guides/bootstrap-webpack@2x.png 2x" src="/docs/{{< param docs_version >}}/assets/img/guides/bootstrap-webpack.png" width="2000" height="1000" alt="">

{{< callout >}}
**¿Quieres saltar hasta el final?** Descarga el código fuente y la demostración funcional de esta guía desde el [repositorio twbs/examples](https://github.com/twbs/examples/tree/main/webpack). También puedes [abrir el ejemplo en StackBlitz](https://stackblitz.com/github/twbs/examples/tree/main/webpack?file=index.html) para la edición en vivo.
{{< /callout >}}

## Configuración

Estamos creando un proyecto de paquete web con Bootstrap desde cero, por lo que hay algunos requisitos previos y pasos previos antes de que podamos comenzar realmente. Esta guía requiere que tengas instalado Node.js y cierta familiaridad con la terminal.

1. **Crea una carpeta de proyecto y configura npm.** Crearemos la carpeta `my-project` e inicializaremos npm con el argumento `-y` para evitar que nos haga todas las preguntas interactivas.

   ```sh
   mkdir my-project && cd my-project
   npm init -y
   ```

2. **Instalar Webpack.** A continuación, debemos instalar nuestras dependencias de desarrollo de Webpack: `webpack` para el núcleo de Webpack, `webpack-cli` para que podamos ejecutar los comandos de Webpack desde la terminal y `webpack-dev-server` para que podamos ejecutar un servidor de desarrollo local. Usamos `--save-dev` para indicar que estas dependencias son solo para uso de desarrollo y no para producción.

   ```sh
   npm i --save-dev webpack webpack-cli webpack-dev-server
   ```

3. **Instalar Bootstrap.** Ahora podemos instalar Bootstrap. También instalaremos Popper, ya que nuestros dropdowns, popovers y tooltips dependen de ello para su posicionamiento. Si no planeas usar esos componentes, puedes omitir Popper aquí.

   ```sh
   npm i --save bootstrap @popperjs/core
   ```

4. **Instala dependencias adicionales.** Además de Webpack y Bootstrap, necesitamos algunas dependencias más para importar y agrupar correctamente CSS y JS de Bootstrap con Webpack. Estos incluyen Sass, algunos cargadores y Autoprefixer.

   ```sh
   npm i --save-dev autoprefixer css-loader postcss-loader sass sass-loader style-loader
   ```

Ahora que tenemos todas las dependencias necesarias instaladas, podemos empezar a trabajar creando los archivos del proyecto e importando Bootstrap.

## Estructura del proyecto

Ya creamos la carpeta `my-project` e inicializamos npm. Ahora también crearemos nuestras carpetas `src` y `dist` para completar la estructura del proyecto. Ejecuta lo siguiente desde `my-project`, o crea manualmente la estructura de carpetas y archivos que se muestra a continuación.

```sh
mkdir {dist,src,src/js,src/scss}
touch dist/index.html src/js/main.js src/scss/styles.scss webpack.config.js
```

Cuando hayas terminado, tu proyecto completo debería verse así:

```text
my-project/
├── dist/
│   └── index.html
├── src/
│   ├── js/
│   │   └── main.js
│   └── scss/
│       └── styles.scss
├── package-lock.json
├── package.json
└── webpack.config.js
```

En este punto, todo está en el lugar correcto, pero Webpack no funcionará porque aún no hemos completado nuestro `webpack.config.js`.

## Configurar webpack

Con las dependencias instaladas y nuestra carpeta de proyecto lista para que comencemos a codificar, ahora podemos configurar Webpack y ejecutar nuestro proyecto localmente.

1. **Abre `webpack.config.js` en tu editor.** Dado que está en blanco, necesitaremos agregarle algunas configuraciones repetitivas para que podamos iniciar nuestro servidor. Esta parte de la configuración le dice a Webpack que debe buscar el JavaScript de nuestro proyecto, dónde generar el código compilado (`dist`) y cómo debe comportarse el servidor de desarrollo (extrayendo de la carpeta `dist` con recarga en caliente).

   ```js
   const path = require('path')

   module.exports = {
     entry: './src/js/main.js',
     output: {
       filename: 'main.js',
       path: path.resolve(__dirname, 'dist')
     },
     devServer: {
       static: path.resolve(__dirname, 'dist'),
       port: 8080,
       hot: true
     }
   }
   ```

2. **A continuación, completamos nuestro `dist/index.html`.** Esta es la página HTML que Webpack cargará en el navegador para utilizar el CSS y el JS incluidos que agregaremos en pasos posteriores. Antes de que podamos hacer eso, tenemos que darle algo para renderizar e incluir el JS de `salida` del paso anterior.

   ```html
   <!doctype html>
   <html lang="en">
     <head>
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <title>Bootstrap con Webpack</title>
     </head>
     <body>
       <div class="container py-4 px-3 mx-auto">
         <h1>Hola, Bootstrap y Webpack!</h1>
         <button class="btn btn-primary">Botón principal</button>
       </div>
       <script src="./main.js"></script>
     </body>
   </html>
   ```

   Estamos incluyendo un poco de estilo de Bootstrap aquí con `div class="container"` y `<button>` para que podamos ver cuándo Webpack carga el CSS de Bootstrap.

3. **Ahora necesitamos un script npm para ejecutar Webpack.** Abre `package.json` y agrega el script `start` que se muestra a continuación (ya deberías tener el script de prueba). Usaremos este script para iniciar nuestro servidor de desarrollo Webpack local.

   ```json
   {
     // ...
     "scripts": {
       "start": "webpack serve --mode development",
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     // ...
   }
   ```

4. **Y finalmente, podemos iniciar Webpack.** Desde la carpeta `my-project` en tu terminal, ejecuta el script npm recién agregado:

   ```sh
   npm start
   ```

   <img class="img-fluid" src="/docs/{{< param docs_version >}}/assets/img/guides/webpack-dev-server.png" alt="Webpack dev server running">

En la siguiente y última sección de esta guía, configuraremos los cargadores de paquetes web e importaremos todo el CSS y JavaScript de Bootstrap.

## Importar Bootstrap

La importación de Bootstrap a Webpack requiere los cargadores que instalamos en la primera sección. Los instalamos con npm, pero ahora se debe configurar Webpack para usarlos.

1. **Configura los cargadores en `webpack.config.js`.** Tu archivo de configuración ahora está completo y debe coincidir con el fragmento de código a continuación. La única parte nueva aquí es la sección `module`.

   ```js
   const path = require('path')

   module.exports = {
     entry: './src/js/main.js',
     output: {
       filename: 'main.js',
       path: path.resolve(__dirname, 'dist')
     },
     devServer: {
       static: path.resolve(__dirname, 'dist'),
       port: 8080,
       hot: true
     },
     module: {
       rules: [
         {
           test: /\.(scss)$/,
           use: [
             {
               loader: 'style-loader'
             },
             {
               loader: 'css-loader'
             },
             {
               loader: 'postcss-loader',
               options: {
                 postcssOptions: {
                   plugins: () => [
                     require('autoprefixer')
                   ]
                 }
               }
             },
             {
               loader: 'sass-loader'
             }
           ]
         }
       ]
     }
   }
   ```

   Aquí hay un resumen de por qué necesitamos todos estos cargadores. `style-loader` inyecta el CSS en un elemento `<style>` en `<head>` de la página HTML, `css-loader` ayuda con el uso de `@import` y `url()`, `postcss-loader` es necesario para Autoprefixer, y `sass-loader` nos permite usar Sass.

2. **Ahora, importemos el CSS de Bootstrap.** Agrega lo siguiente a `src/scss/styles.scss` para importar todo el Sass fuente de Bootstrap.

   ```scss
   // Importar todo el CSS de Bootstrap
   @import "~bootstrap/scss/bootstrap";
   ```

   *También puedes importar nuestras hojas de estilo individualmente si lo deseas. [Lee nuestros documentos de importación de Sass]({{< docsref "/customize/sass#importing" >}}) para obtener más detalles.*

3. **A continuación, cargamos el CSS e importamos el JavaScript de Bootstrap.** Agrega lo siguiente a `src/js/main.js` para cargar el CSS e importar todo el JS de Bootstrap. Popper se importará automáticamente a través de Bootstrap.

   <!-- eslint-skip -->
   ```js
   // Importa nuestro CSS personalizado
   import '../scss/styles.scss'

   // Importar todo el JS de Bootstrap
   import * as bootstrap from 'bootstrap'
   ```

   También puedes importar complementos de JavaScript individualmente según sea necesario para mantener bajos los tamaños de los paquetes:

   <!-- eslint-skip -->
   ```js
   import Alert from 'bootstrap/js/dist/alert'

   // o especifica qué complementos necesitas:
   import { Tooltip, Toast, Popover } from 'bootstrap'
   ```

   *[Lee nuestros documentos de JavaScript]({{< docsref "/getting-started/javascript/" >}}) para obtener más información sobre cómo usar los complementos de Bootstrap.*

4. **¡Y listo! 🎉** Con la fuente de Bootstrap Sass y JS completamente cargada, tu servidor de desarrollo local ahora debería verse así.

    <img class="img-fluid" src="/docs/{{< param docs_version >}}/assets/img/guides/webpack-dev-server-bootstrap.png" alt="Servidor de desarrollo Webpack ejecutándose con Bootstrap">

    Ahora puedes comenzar a agregar cualquier componente de Bootstrap que desees usar. Asegúrate de [ver el proyecto de ejemplo de Webpack completo](https://github.com/twbs/examples/tree/main/webpack) para saber cómo incluir Sass personalizado adicional y optimizar tu compilación importando solo las partes del CSS de Bootstrap y JS que necesitas.

{{< markdown >}}
{{< partial "guide-footer.md" >}}
{{< /markdown >}}
