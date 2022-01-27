---
layout: docs
title: Enfoque
description: Conoce las principales directrices, las estrategias y las técnicas utilizadas para crear y mantener Bootstrap para que puedas personalizarlo y ampliarlo más fácilmente.
group: extend
aliases:
  - "/docs/5.1/extend/"
---

Si bien las páginas de inicio brindan un recorrido introductorio del proyecto y lo que ofrece, este documento se enfoca en _por qué_ hacemos las cosas que hacemos en Bootstrap. Explica nuestra filosofía de construir en la web para que otros puedan aprender de nosotros, contribuir con nosotros y ayudarnos a mejorar.

¿Ves algo que no suena bien, o quizás se podría hacer mejor? [Abre un issue]({{< param repo >}}/issues/new): nos encantaría que lo discutamos.

## Resumen

Nos sumergiremos más a fondo en cada uno de estos puntos, pero en general, esto es lo que guía nuestro enfoque.

- Los componentes deben ser responsive y mobile-first
- Los componentes deben construirse con una clase base y extenderse a través de clases modificadoras
- Los estados de los componentes deben obedecer a una escala de z-index común
- Siempre que sea posible, se prefiere una implementación de HTML y CSS sobre JavaScript
- Siempre que sea posible, se usan utilidades sobre estilos personalizados
- Siempre que sea posible, se evita aplicar requisitos HTML estrictos (selectores hijos)

## Responsive

Los estilos responsive de Bootstrap están diseñados para ser responsive, un enfoque que a menudo se denomina _mobile-first_. Usamos este término en nuestros documentos y en gran parte estamos de acuerdo con él, pero a veces puede ser demasiado amplio. Si bien no todos los componentes _deben_ ser completamente responsive en Bootstrap, este enfoque responsive trata de reducir las sobrescrituras de CSS al presionarlo para agregar estilos a medida que el viewport se vuelve más grande.

En Bootstrap, verás esto más claramente en nuestras media queries. En la mayoría de los casos, usamos consultas `min-width` que comienzan a aplicarse en un breakpoint específico y continúan a través de los breakpoints más altos. Por ejemplo, un `.d-none` se aplica desde `min-width: 0` hasta el infinito. Por otro lado, un `.d-md-none` se aplica desde el breakpoint medium y hacia arriba.

A veces usaremos `max-width` cuando la complejidad inherente de un componente lo requiere. A veces, estas sobrescrituras son funcional y mentalmente más claras de implementar y admitir que reescribir la funcionalidad principal de nuestros componentes. Nos esforzamos por limitar este enfoque, pero lo usaremos de vez en cuando.

## Clases

Además de nuestro Reboot, una hoja de estilo de normalización entre navegadores, todos nuestros estilos apuntan a usar clases como selectores. Esto significa evitar los selectores de tipo (p. ej., `input[type="text"]`) y las clases primarias extrañas (p. ej., `.parent .child`) que hacen que los estilos sean demasiado específicos para ser sobrescritos fácilmente.

Como tales, los componentes deben construirse con una clase base que albergue pares de valor de propiedad comunes, que no deben sobrescribirse. Por ejemplo, `.btn` y `.btn-primary`. Usamos `.btn` para todos los estilos comunes como `display`, `padding` y `border-width`. Luego usamos modificadores como `.btn-primary` para agregar el color, color de fondo, color de borde, etc.

Las clases modificadoras solo deben usarse cuando hay múltiples propiedades o valores para cambiar en múltiples variantes. Los modificadores no siempre son necesarios, así que asegúrate de ahorrar líneas de código y evitar sobrescrituras innecesarias al crearlas. Buenos ejemplos de modificadores son nuestras clases de colores temáticos y variantes de tamaño.

## Escalas z-index

Hay dos escalas de `z-index` en Bootstrap: elementos dentro de un componente y componentes superpuestos.

### Elementos de componentes

- Algunos componentes en Bootstrap están construidos con elementos superpuestos para evitar bordes dobles sin modificar la propiedad `border`. Por ejemplo, grupos de botones, grupos de inputs y paginación.
- Estos componentes comparten una escala de `z-index` estándar de `0` a `3`.
- `0` es el predeterminado (inicial), `1` es `:hover`, `2` es `:active`/`.active`, y `3` es `:focus`.
- Este enfoque coincide con nuestras expectativas de máxima prioridad de usuario. Si un elemento está enfocado, está a la vista y a la atención del usuario. Los elementos activos son los segundos más altos porque indican estado. El desplazamiento es el tercero más alto porque indica la intención del usuario, pero se puede desplazar casi cualquier cosa.

### Componentes superpuestos

Bootstrap incluye varios componentes que funcionan como una superposición de algún tipo. Esto incluye, en orden de `z-index` más alto, menús desplegables, barras de navegación fijas y pegajosas, modales, tooltips y popovers. Estos componentes tienen su propia escala de `z-index` que comienza en `1000`. Este número inicial se eligió arbitrariamente y sirve como un pequeño búfer entre nuestros estilos y los estilos personalizados de tu proyecto.

Cada componente de superposición aumenta ligeramente su valor de `z-index` de tal manera que los principios comunes de la interfaz de usuario permiten que los elementos centrados o sobrevolados por el usuario permanezcan a la vista en todo momento. Por ejemplo, un modal es un bloqueo de documentos (por ejemplo, no puedes realizar ninguna otra acción excepto la acción del modal), por lo que lo colocamos encima de nuestras barras de navegación.

Obtén más información sobre esto en nuestra [página de diseño `z-index`]({{< docsref "/layout/z-index" >}}).

## HTML y CSS sobre JS

Siempre que sea posible, preferimos escribir HTML y CSS sobre JavaScript. En general, HTML y CSS son más prolíficos y accesibles para más personas de todos los niveles de experiencia. HTML y CSS también son más rápidos en tu navegador que JavaScript, y tu navegador generalmente te brinda una gran cantidad de funciones.

Este principio es nuestra API de JavaScript de primera clase que usa atributos `data`. No necesitas escribir casi nada de JavaScript para usar nuestros complementos de JavaScript; en su lugar, escribe HTML. Lee más sobre esto en [nuestra página de descripción general de JavaScript]({{< docsref "/getting-started/javascript#data-attributes" >}}).

Por último, nuestros estilos se basan en los comportamientos fundamentales de los elementos web comunes. Siempre que sea posible, preferimos utilizar lo que proporciona el navegador. Por ejemplo, puedes poner una clase `.btn` en casi cualquier elemento, pero la mayoría de los elementos no proporcionan ningún valor semántico o funcionalidad de navegador. Entonces, en su lugar, usamos `<button>`s y `<a>`s.

Lo mismo ocurre con los componentes más complejos. Si bien *podríamos* escribir nuestro propio complemento de validación de formularios para agregar clases a un elemento padre en función del estado de un input, lo que nos permite diseñar el texto como rojo, preferimos usar los pseudoelementos `:valid`/`:invalid` que cada navegador nos proporciona.

## Utilidades

Las clases de utilidad, anteriormente helpers en Bootstrap 3, son un poderoso aliado para combatir la sobrecarga de CSS y el bajo rendimiento de la página. Una clase de utilidad suele ser un par propiedad-valor único e inmutable expresado como una clase (por ejemplo, `.d-block` representa `display: block;`). Su atractivo principal es la velocidad de uso al escribir HTML y limitar la cantidad de CSS personalizado que tienes que escribir.

Específicamente en lo que respecta a CSS personalizado, las utilidades pueden ayudar a combatir el aumento del tamaño del archivo al reducir los pares de propiedad-valor que se repiten con más frecuencia en clases únicas. Esto puede tener un efecto dramático a escala en tus proyectos.

## HTML flexible

Si bien no siempre es posible, nos esforzamos por evitar ser demasiado dogmáticos en nuestros requisitos HTML para los componentes. Por lo tanto, nos enfocamos en clases individuales en nuestros selectores CSS y tratamos de evitar los selectores hijos inmediatos (`>`). Esto te brinda más flexibilidad en tu implementación y ayuda a mantener nuestro CSS más simple y menos específico.

## Convenciones de código

[Guía de código](https://codeguide.co/) (del cocreador de Bootstrap, @mdo) documenta cómo escribimos nuestro HTML y CSS en Bootstrap. Especifica pautas para formato general, valores predeterminados de sentido común, órdenes de propiedades y atributos, y más.

Usamos [Stylelint](https://stylelint.io/) para hacer cumplir estos estándares y más en nuestro Sass/CSS. [Nuestra configuración personalizada de Stylelint](https://github.com/twbs/stylelint-config-twbs-bootstrap) es de código abierto y está disponible para que otros la usen y amplíen.

Usamos [vnu-jar](https://www.npmjs.com/package/vnu-jar) para aplicar HTML estándar y semántico, así como para detectar errores comunes.