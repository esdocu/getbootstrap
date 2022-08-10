---
layout: docs
title: Z-index
description: Si bien no forman parte del sistema de cuadrícula de Bootstrap, los z-index juegan un papel importante en la forma en que nuestros componentes se superponen e interactúan entre sí.
group: layout
---

Varios componentes de Bootstrap utilizan `z-index`, la propiedad CSS que ayuda a controlar el diseño al proporcionar un tercer eje para organizar el contenido. Utilizamos una escala de z-index predeterminada en Bootstrap que ha sido diseñada para capas de navegación,tooltips y popovers, modals y más.

Estos valores más altos comienzan en un número arbitrario, lo suficientemente alto y específico para evitar idealmente conflictos. Necesitamos un conjunto estándar de estos en todos nuestros componentes en capas (tooltips, popovers, navbars, dropdowns, modals) para que podamos ser razonablemente consistentes en los comportamientos. No hay razón por la que no pudiéramos haber usado `100`+ o `500`+.

No fomentamos la personalización de estos valores individuales; si cambias uno, es probable que necesites cambiarlos todos.

{{< scss-docs name="zindex-stack" file="scss/_variables.scss" >}}

Para manejar los bordes superpuestos dentro de los componentes (por ejemplo, buttons e inputs en input groups), usamos valores bajos de z-index de un solo dígito de `1`, `2`, y `3` para default, hover, y estdos active. En hover/focus/active, traemos un elemento particular al frente con un valor de `z-index` más alto para mostrar su borde sobre los elementos hermanos.