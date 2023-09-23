---
layout: docs
title: Accesibilidad
description: Una breve descripción de las características y limitaciones de Bootstrap para la creación de contenido accesible.
group: getting-started
toc: true
---

Bootstrap proporciona un marco sencillo de estilos listos para usar, herramientas de diseño y componentes interactivos, lo que permite a los desarrolladores crear sitios web y aplicaciones visualmente atractivos, funcionalmente ricos y accesibles desde el primer momento.

## Resumen y limitaciones

La accesibilidad general de cualquier proyecto creado con Bootstrap depende en gran medida del marcado del autor, el estilo adicional y las secuencias de comandos que haya incluido. Sin embargo, siempre que se hayan implementado correctamente, debería ser perfectamente posible crear sitios web y aplicaciones con Bootstrap que cumplan con las [<abbr title="Pautas de accesibilidad al contenido web">WCAG</abbr> 2.1](https://www.w3.org/TR/WCAG/) (A/AA/AAA), [Sección 508](https://www.section508.gov/), y estándares de requisitos de accesibilidad similares.

### Marcado estructural

El estilo y el diseño de Bootstrap se pueden aplicar a una amplia gama de estructuras de marcado. Esta documentación tiene como objetivo proporcionar a los desarrolladores ejemplos de mejores prácticas para demostrar el uso de Bootstrap e ilustrar el marcado semántico apropiado, incluidas las formas en que se pueden abordar los posibles problemas de accesibilidad.

### Componentes interactivos

Los componentes interactivos de Bootstrap, como los cuadros de diálogo modales, los menús desplegables y los tooltips personalizados, están diseñados para funcionar con usuarios táctiles, de mouse y de teclado. A través del uso de [<abbr title="Iniciativa de Accesibilidad Web">WAI</abbr>-<abbr title="Accessible Rich Internet Applications">ARIA</abbr>](https://www.w3.org/WAI/standards-guidelines/aria/) funciones y atributos, estos componentes también deben ser comprensibles y operables utilizando tecnologías de asistencia (como lectores de pantalla).

Debido a que los componentes de Bootstrap están diseñados a propósito para ser bastante genéricos, es posible que los autores deban incluir más funciones y atributos de <abbr title="Accessible Rich Internet Applications">ARIA</abbr>, así como el comportamiento de JavaScript, para transmitir con mayor precisión la naturaleza precisa y funcionalidad de su componente. Esto generalmente se indica en la documentación.

{{< callout info >}}
{{< partial "maybe-interested-1.md" >}}
{{< /callout >}}

### Contraste de color

Algunas combinaciones de colores que actualmente conforman la paleta predeterminada de Bootstrap, que se utilizan en todo el marco para cosas como variaciones de botones, variaciones de alertas, indicadores de validación de formularios, pueden dar lugar a un contraste de color *insuficiente* (por debajo de la relación de contraste de color de texto recomendada [WCAG 2.1 de 4.5:1](https://www.w3.org/TR/WCAG/#contrast-minimum) y la [relación de contraste de color sin texto WCAG 2.1 de 3:1](https://www.w3.org/TR/WCAG/#non-text-contrast)), especialmente cuando se utiliza contra un fondo claro. Se alienta a los autores a probar sus usos específicos del color y, cuando sea necesario, modificar/ampliar manualmente estos colores predeterminados para garantizar proporciones de contraste de color adecuadas.

### Contenido oculto visualmente

El contenido que debería ocultarse visualmente, pero permanecer accesible para las tecnologías de asistencia, como los lectores de pantalla, se puede diseñar con la clase `.visually-hidden`. Esto puede ser útil en situaciones en las que también es necesario transmitir información o pistas visuales adicionales (como el significado denotado mediante el uso de colores) a usuarios no visuales.

```html
<p class="text-danger">
  <span class="visually-hidden">Peligro: </span>
  Esta acción no es reversible
</p>
```

Para los controles interactivos ocultos visualmente, como los enlaces "saltar" tradicionales, usa la clase `.visually-hidden-focusable`. Esto asegurará que el control sea visible una vez enfocado (para usuarios de teclado videntes). **Cuidado, en comparación con las clases equivalentes `.sr-only` y `.sr-only-focusable` en versiones anteriores, `.visually-hidden-focusable` de Bootstrap 5 es una clase independiente y no debe usarse en combinación con la clase `.visually-hidden`.**

```html
<a class="visually-hidden-focusable" href="#content">Saltar al contenido principal</a>
```

### Movimiento reducido

Bootstrap incluye soporte para la función de medios [`prefers-reduced-motion`](https://www.w3.org/TR/mediaqueries-5/#prefers-reduced-motion). En los navegadores/entornos que permiten al usuario especificar su preferencia por el movimiento reducido, la mayoría de los efectos de transición CSS en Bootstrap (por ejemplo, cuando se abre o cierra un cuadro de diálogo modal, o la animación deslizante en carruseles) se desactivarán y las animaciones significativas ( como los hilanderos) se ralentizarán.

En los navegadores que admiten `prefers-reduced-motion`, y donde el usuario *no* ha señalado explícitamente que preferiría un movimiento reducido (es decir, donde `prefers-reduced-motion: no-preference`), Bootstrap permite un desplazamiento suave usando la propiedad `scroll-behavior`.

## Recursos adicionales

- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG/)
- [The A11Y Project](https://www.a11yproject.com/)
- [MDN accessibility documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Tenon.io Accessibility Checker](https://tenon.io/)
- [Color Contrast Analyser (CCA)](https://www.tpgi.com/color-contrast-checker/)
- ["HTML Codesniffer" bookmarklet for identifying accessibility issues](https://github.com/squizlabs/HTML_CodeSniffer)
- [Microsoft Accessibility Insights](https://accessibilityinsights.io/)
- [Deque Axe testing tools](https://www.deque.com/axe/)
- [Introduction to Web Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
