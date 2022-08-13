---
layout: docs
title: Personalizar
description: Aprende a crear temas, personalizar y ampliar Bootstrap con Sass, un montón de opciones globales, un amplio sistema de colores y más.
group: customize
toc: false
aliases: "/docs/5.1/customize/"
sections:
  - title: Sass
    es_title: Sass
    description: Utiliza nuestros archivos fuente Sass para aprovechar variables, mapas, mixins y funciones.
  - title: Options
    es_title: Opciones
    description: Personaliza Bootstrap con variables integradas para alternar fácilmente las preferencias globales de CSS.
  - title: Color
    es_title: Color
    description: Conoce y personaliza los sistemas de colores utilizados en todo el toolkit.
  - title: Components
    es_title: Componentes
    description: Aprende cómo construimos casi todos nuestros componentes de manera responsive y con clases y modificadoras base.
  - title: CSS variables
    es_title: Variables CSS
    description: Utiliza las propiedades personalizadas de CSS de Bootstrap para un diseño y desarrollo rápidos y con visión de futuro.
  - title: Optimize
    es_title: Optimizar
    description: Manten tus proyectos ágiles, responsive y fáciles de mantener para que puedas ofrecer la mejor experiencia.
---

## Descripción general

Hay varias formas de personalizar Bootstrap. Tu mejor camino puede depender de tu proyecto, la complejidad de tus herramientas de compilación, la versión de Bootstrap que estás usando, la compatibilidad con el navegador y más.

Nuestros dos métodos preferidos son:

1. Usar Bootstrap a través del [administrador de paquetes]({{< docsref "/getting-started/download#package-managers" >}}) para que puedas usar y ampliar nuestros archivos fuente.
2. Usar los archivos de distribución compilados de Bootstrap o [jsDelivr]({{< docsref "/getting-started/download#cdn-via-jsdelivr" >}}) para que puedas agregar o sobrescribir los estilos de Bootstrap.

Si bien no podemos entrar en detalles aquí sobre cómo usar cada administrador de paquetes, podemos brindarte orientación sobre [el uso de Bootstrap con su propio compilador Sass]({{< docsref "/customize/sass" >}}).

Para aquellos que quieran usar los archivos de distribución, revisen la [página de inicio]({{< docsref "/getting-started/introduction" >}}) para saber cómo incluir esos archivos y una página HTML de ejemplo. A partir de ahí, consulta los documentos para conocer el diseño, los componentes y los comportamientos que te gustaría usar.

A medida que te familiarices con Bootstrap, continúa explorando esta sección para obtener más detalles sobre cómo utilizar nuestras opciones globales, cómo cambiar nuestro sistema de color, cómo construimos nuestros componentes, cómo usar nuestra creciente lista de propiedades personalizadas de CSS y cómo optimizar tu código al construir con Bootstrap.

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

## CSP y SVG integrados

Varios componentes de Bootstrap incluyen SVG incrustados en nuestro CSS para diseñar componentes de manera consistente y sencilla en todos los navegadores y dispositivos. **Para organizaciones con configuraciones de <abbr title="Content Security Policy">CSP</abbr> más estrictas**, hemos documentado todas las instancias de nuestros SVG integrados (todos los cuales se aplican a través de `background-image`) para que puedas revisar más a fondo sus opciones.

- [Accordion]({{< docsref "/components/accordion" >}})
- [Botón de cierre]({{< docsref "/components/close-button" >}}) (usado en alerts y modals)
- [Checkboxes y botones radio de formulario]({{< docsref "/forms/checks-radios" >}})
- [Switches de formulario]({{< docsref "/forms/checks-radios#switches" >}})
- [Iconos de validación de formulario]({{< docsref "/forms/validation#server-side" >}})
- [Menús de selección]({{< docsref "/forms/select" >}})
- [Controles de Carousel]({{< docsref "/components/carousel#with-controls" >}})
- [Botones de Navbar]({{< docsref "/components/navbar#responsive-behaviors" >}})

Según la [conversación de la comunidad](https://github.com/twbs/bootstrap/issues/25394), algunas opciones para abordar esto en tu propio código base incluyen reemplazar las URL con assets alojados localmente, eliminar las imágenes y usar imágenes en línea (no es posible en todos los componentes), y modificando tu CSP. Nuestra recomendación es revisar cuidadosamente tus propias políticas de seguridad y decidir cuál es el mejor camino a seguir, si es necesario.
