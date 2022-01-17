---
layout: docs
title: Contribuir
description: Ayuda a desarrollar Bootstrap con nuestros scripts y pruebas de compilación de documentación.
group: getting-started
toc: true
aliases: "/docs/5.1/getting-started/build-tools/"
---

## Configuración de herramientas

Bootstrap usa [scripts npm](https://docs.npmjs.com/misc/scripts/) para crear la documentación y compilar los archivos fuente. Nuestro [package.json]({{< param repo >}}/blob/v{{< param current_version >}}/package.json) alberga estos scripts para compilar código, ejecutar pruebas y más. Estos no están destinados para su uso fuera de nuestro repositorio y documentación.

Para usar nuestro sistema de compilación y ejecutar nuestra documentación localmente, necesitarás una copia de los archivos fuente de Bootstrap y Node. Sigue estos pasos y deberías estar listo para rockear:

1. [Descarga e instala Node.js](https://nodejs.org/en/download/), que usamos para administrar nuestras dependencias.
2. [Descarga las fuentes de Bootstrap]({{< param "download.source" >}}) o haz fork a [el repositorio de Bootstrap]({{< param repo >}}).
3. Navega al directorio raíz `/bootstrap` y ejecuta `npm install` para instalar nuestras dependencias locales enumeradas en [package.json]({{< param repo >}}/blob/v{{< param current_version >}}/package.json).

Cuando hayas terminado, podrás ejecutar los diversos comandos proporcionados desde la línea de comandos.

## Uso de los scripts npm

Nuestro [package.json]({{< param repo >}}/blob/v{{< param current_version >}}/package.json) incluye numerosas tareas para desarrollar el proyecto. Ejecuta `npm run` para ver todos los scripts de npm en tu terminal. **Las tareas principales incluyen:**

<table class="table">
  <thead>
    <tr>
      <th>Tarea</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>npm start</code>
      </td>
      <td>
        Compila CSS y JavaScript, crea la documentación e inicia un servidor local.
      </td>
    </tr>
    <tr>
      <td>
        <code>npm run dist</code>
      </td>
      <td>
        Crea el directorio <code>dist/</code> con archivos compilados. Requiere <a href="https://sass-lang.com/">Sass</a>, <a href="https://github.com/postcss/autoprefixer">Autoprefixer</a> y <a href="https://github.com/terser/terser">terser</a>.
      </td>
    </tr>
    <tr>
      <td>
        <code>npm test</code>
      </td>
      <td>
        Ejecuta tests localmente después de ejecutar <code>npm run dist</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>npm run docs-serve</code>
      </td>
      <td>
        Construye y ejecuta la documentación localmente.
      </td>
    </tr>
  </tbody>
</table>

{{< callout info >}}
{{< partial "callout-info-npm-starter.md" >}}
{{< /callout >}}

## Sass

Bootstrap usa [Dart Sass](https://sass-lang.com/dart-sass) para compilar nuestros archivos fuente Sass en archivos CSS (incluidos en nuestro proceso de compilación), y te recomendamos que hagas lo mismo si estás compilando Sass utilizando tus propios assets. Anteriormente usábamos Node Sass para Bootstrap v4, pero LibSass y los paquetes integrados, incluido Node Sass, ahora están [obsoletos](https://sass-lang.com/blog/libsass-is-deprecated).

Dart Sass utiliza una precisión de redondeo de 10 y por razones de eficiencia no permite el ajuste de este valor. No bajamos esta precisión durante el procesamiento posterior de nuestro CSS generado, como durante la minificación, pero si eliges hacerlo, te recomendamos mantener una precisión de al menos 6 para evitar problemas con el redondeo del navegador.

## Autoprefixer

Bootstrap usa [Autoprefixer][autoprefixer] (incluido en nuestro proceso de compilación) para agregar automáticamente prefijos de proveedores a algunas propiedades de CSS en el momento de la compilación. Hacerlo nos ahorra tiempo y código al permitirnos escribir partes clave de nuestro CSS una sola vez y eliminar la necesidad de combinaciones de proveedores como las que se encuentran en v3.

Mantenemos la lista de navegadores admitidos a través de Autoprefixer en un archivo separado dentro de nuestro repositorio de GitHub. Consulta [.browserslistrc]({{< param repo >}}/blob/v{{< param current_version >}}/.browserslistrc) para obtener detalles.

## RTLCSS

Bootstrap usa [RTLCSS](https://rtlcss.com/) para procesar CSS compilado y convertirlo a RTL, básicamente reemplazando las propiedades conscientes de la dirección horizontal (por ejemplo, `padding-left`) con su opuesto. Nos permite escribir nuestro CSS una sola vez y hacer ajustes menores usando las directivas RTLCSS [control](https://rtlcss.com/learn/usage-guide/control-directives/) y [value](https://rtlcss.com/learn/usage-guide/value-directives/).

## Documentación local

Ejecutar nuestra documentación localmente requiere el uso de Hugo, que se instala a través del paquete [hugo-bin](https://www.npmjs.com/package/hugo-bin) de npm. Hugo es un generador de sitios estáticos increíblemente rápido y bastante extensible que nos proporciona: inclusiones básicas, archivos basados en Markdown, plantillas y más. Así es como se pone en marcha:

1. Ejecuta la [configuración de herramientas](#tooling-setup) anterior para instalar todas las dependencias.
2. Desde el directorio raíz `/bootstrap`, ejecuta `npm run docs-serve` en la línea de comandos.
3. Abre `http://localhost:9001/` en tu navegador y listo.

Obtén más información sobre el uso de Hugo leyendo su [documentación](https://gohugo.io/documentation/).

## Solución de problemas

Si encuentras problemas con la instalación de dependencias, desinstala todas las versiones de dependencia anteriores (globales y locales). Luego, vuelve a ejecutar `npm install`.

[autoprefixer]: https://github.com/postcss/autoprefixer
