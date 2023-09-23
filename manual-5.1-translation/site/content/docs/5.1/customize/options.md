---
layout: docs
title: Opciones
description: Personaliza rápidamente Bootstrap con variables integradas para alternar fácilmente las preferencias globales de CSS para controlar el estilo y el comportamiento.
group: customize
---

Personaliza Bootstrap con nuestro archivo de variables personalizadas incorporado y alterna fácilmente las preferencias globales de CSS con las nuevas variables `$enable-*` Sass. Sobrescribe el valor de una variable y vuelve a compilar con `npm run test` según sea necesario.

Puedes encontrar y personalizar estas variables para opciones globales clave en el archivo `scss/_variables.scss` de Bootstrap.

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

{{< bs-table "table text-start" >}}
| Variable                       | Values                             | Description                                                                            |
| ------------------------------ | ---------------------------------- | -------------------------------------------------------------------------------------- |
| `$spacer`                      | `1rem` (default), o cualquier valor > 0 | Especifica el valor de espaciador predeterminado para generar mediante programación nuestras [utilidades de espaciador]({{< docsref "/utilities/spacing" >}}). |
| `$enable-rounded`              | `true` (default) o `false`        | Habilita estilos `border-radius` predefinidos en varios componentes. |
| `$enable-shadows`              | `true` o `false` (default)        | Habilita estilos decorativos predefinidos de `box-shadow` en varios componentes. No afecta a los `box-shadow` que se utilizan para los estados de enfoque. |
| `$enable-gradients`            | `true` o `false` (default)        | Habilita gradientes predefinidos a través de estilos de `background-image` en varios componentes. |
| `$enable-transitions`          | `true` (default) o `false`        | Habilita `transition`s predefinidas en varios componentes. |
| `$enable-reduced-motion`       | `true` (default) o `false`        | Habilita las [`prefers-reduced-motion` media query]({{< docsref "/getting-started/accessibility#reduced-motion" >}}), que suprime ciertas animaciones/transiciones basadas en las preferencias del usuario en el navegador/sistema operativo. |
| `$enable-grid-classes`         | `true` (default) o `false`        | Habilita la generación de clases CSS para el sistema de cuadrícula (por ejemplo, `.row`, `.col-md-1`, etc.). |
| `$enable-container-classes`    | `true` (default) o `false`        | Habilita la generación de clases CSS para contenedores de diseño. (Nuevo en v5.2.0) |
| `$enable-caret`                | `true` (default) o `false`        | Habilita el icono caret del pseudo elemento en `.dropdown-toggle`. |
| `$enable-button-pointers`      | `true` (default) o `false`        | Agregue el cursor de "mano" a los elementos de botón no deshabilitados. |
| `$enable-rfs`                  | `true` (default) o `false`        | Habilita globalmente [RFS]({{< docsref "/getting-started/rfs" >}}). |
| `$enable-validation-icons`     | `true` (default) o `false`        | Habilita los íconos de `background-image` dentro de los inputs de texto y algunos formularios personalizados para los estados de validación. |
| `$enable-negative-margins`     | `true` o `false` (default)        | Habilita la generación de [utilidades de margen negativo]({{< docsref "/utilities/spacing#negative-margin" >}}). |
| `$enable-deprecation-messages` | `true` (default) o `false`        | Establécelo en `false` para ocultar las advertencias al usar cualquiera de los mixins y funciones en desuso que se planea eliminar en `v6`. |
| `$enable-important-utilities`  | `true` (default) o `false`        | Habilita el sufijo `!important` en las clases de utilidad. |
| `$enable-smooth-scroll`        | `true` (default) o `false`        | Aplica `scroll-behavior: smooth` globalmente, excepto para los usuarios que solicitan un movimiento reducido a través de la [media query `prefers-reduced-motion`]({{< docsref "/getting-started/accessibility#reduced-motion" >}}) |
{{< /bs-table >}}
