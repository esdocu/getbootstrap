#### Transiciones y métodos asíncronos

Todos los métodos de la API son **asincrónicos** e inician una **transition**. Regresan al lugar donde se realizó la llamada tan pronto como se inicia la transición, pero **antes de que finalice**. Además, se ignorará una llamada de método en un **componente en medio de una transición**.

[Consulte nuestra documentación de JavaScript para obtener más información](/docs/{{ .Site.Params.docs_version }}/getting-started/javascript/#asynchronous-functions-and-transitions).
