---
layout: docs
title: Optimizar
description: Mantén tus proyectos ágiles, responsive y mantenibles para que puedas brindar la mejor experiencia y concentrarte en trabajos más importantes.
group: customize
toc: true
---

## Importaciones Sass ligeras

Cuando utilices Sass en tus assets, asegúrate de optimizar Bootstrap solo importando (`@import`) los componentes que necesitas. Tus optimizaciones más grandes probablemente provendrán de la sección `Layout & Components` de nuestro `bootstrap.scss`.

{{< scss-docs name="import-stack" file="scss/bootstrap.scss" >}}

Si no estás utilizando un componente, coméntalo o elimínalo por completo. Por ejemplo, si no estás utilizando el *carousel*, elimina esa importación para ahorrar algo de tamaño de archivo en tu CSS compilado. Ten en cuenta que existen algunas dependencias en las importaciones de Sass que pueden dificultar la omisión de un archivo.

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

## JavaScript ligero

El JavaScript de Bootstrap incluye todos los componentes de nuestros archivos de distribución principales (`bootstrap.js` y `bootstrap.min.js`), e incluso nuestra dependencia principal (Popper) con nuestros archivos de paquete (`bootstrap.bundle.js` y `bootstrap.bundle.min.js`). Mientras personalizas a través de Sass, asegúrate de eliminar el JavaScript relacionado.

Por ejemplo, suponiendo que estás usando tu propio paquete de JavaScript como Webpack o Rollup, solo importarás el JavaScript que planeas usar. En el siguiente ejemplo, mostramos cómo incluir solamente nuestro JavaScript modal:

```js
// Import just what we need

// import 'bootstrap/js/dist/alert';
// import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/carousel';
// import 'bootstrap/js/dist/collapse';
// import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/offcanvas';
// import 'bootstrap/js/dist/popover';
// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/toast';
// import 'bootstrap/js/dist/tooltip';
```

De esta forma, no incluyes ningún JavaScript que no pretendas utilizar para componentes como botones, carruseles e tooltips. Si estás importando menús desplegables, tooltips o ventanas emergentes (popovers), asegúrate de incluir la dependencia de Popper en tu archivo `package.json`.

{{< callout info >}}
### Default Exports

Los archivos en `bootstrap/js/dist` usan **default export** (exportación predeterminada), por lo que si deseas usar uno de ellos, debes hacer lo siguiente:

```js
import Modal from 'bootstrap/js/dist/modal'

const modal = new Modal(document.getElementById('myModal'))
```
{{< /callout >}}

## Autoprefixer .browserslistrc

Bootstrap depende de Autoprefixer para agregar automáticamente prefijos de navegador a ciertas propiedades de CSS. Los prefijos están dictados por nuestro archivo `.browserslistrc`, que se encuentra en la raíz del repositorio de Bootstrap. Personalizar esta lista de navegadores y volver a compilar el Sass eliminará automáticamente algunos CSS de tu CSS compilado si hay prefijos de proveedores exclusivos para ese navegador o versión.

## CSS sin usar

_Se necesita ayuda con esta sección, considere abrir un PR. ¡Gracias!_

Si bien no tenemos un ejemplo preconstruido para usar [PurgeCSS](https://github.com/FullHuman/purgecss) con Bootstrap, hay algunos artículos y tutoriales útiles que ha escrito la comunidad. Aquí hay algunas opciones:

- <https://medium.com/dwarves-foundation/remove-unused-css-styles-from-bootstrap-using-purgecss-88395a2c5772>
- <https://lukelowrey.com/automatically-removeunused-css-from-bootstrap-or-other-frameworks/>

Por último, este artículo de [CSS Tricks sobre CSS sin usar](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/) muestra cómo usar PurgeCSS y otras herramientas similares.

## Minificar y gzip

Siempre que sea posible, asegúrate de comprimir todo el código que ofreces a tus visitantes. Si estás utilizando archivos dist de Bootstrap, intenta inclinarte por las versiones minificadas (indicadas por las extensiones `.min.css` y `.min.js`). Si estás compilando Bootstrap desde la fuente con tu propio sistema de compilación, asegúrate de implementar tus propios minificadores para HTML, CSS y JS.

{{< callout info >}}
{{< partial "maybe-interested-2.md" >}}
{{< /callout >}}

## Archivos sin bloqueo

Si bien minimizar y usar la compresión puede parecer suficiente, hacer que tus archivos no bloqueen también es un gran paso para que tu sitio esté bien optimizado y sea lo suficientemente rápido.

Si estás utilizando un complemento [Lighthouse](https://developers.google.com/web/tools/lighthouse/) en Google Chrome, es posible que hayas tropezado con FCP. La métrica [The First Contentful Paint](https://web.dev/fcp/) mide el tiempo desde que la página comienza a cargarse hasta que cualquier parte del contenido de la página se representa en la pantalla.

Puedes mejorar FCP aplazando JavaScript o CSS no críticos. ¿Qué significa eso? Simplemente, JavaScript o las hojas de estilo que no necesitan estar presentes en la primera pintura de tu página deben marcarse con los atributos `async` o `defer`.

Esto asegura que los recursos menos importantes se carguen más tarde y no bloqueen la primera pintura. Por otro lado, los recursos críticos se pueden incluir como scripts o estilos en línea.

Si deseas obtener más información sobre esto, ya hay muchos artículos excelentes al respecto:

- <https://web.dev/render-blocking-resources/>
- <https://web.dev/defer-non-critical-css/>

## Utiliza siempre HTTPS

Tu sitio web solo debe estar disponible a través de conexiones HTTPS en producción. HTTPS mejora la seguridad, la privacidad y la disponibilidad de todos los sitios, y [no existe el tráfico web no confidencial](https://https.cio.gov/everything/). Los pasos para configurar tu sitio web para que se sirva exclusivamente a través de HTTPS varían ampliamente según tu arquitectura y proveedor de alojamiento web y, por lo tanto, están más allá del alcance de estos documentos.

Los sitios servidos a través de HTTPS también deben acceder a todas las hojas de estilo, scripts y otros activos a través de conexiones HTTPS. De lo contrario, enviarás a los usuarios [contenido activo mixto](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content), lo que generará vulnerabilidades potenciales en las que un sitio puede verse comprometido al alterar una dependencia. Esto puede generar problemas de seguridad y advertencias en el navegador que se muestran a los usuarios. Ya sea que estés obteniendo Bootstrap de un CDN o sirviéndolo tú mismo, asegúrate de acceder solo a través de conexiones HTTPS.