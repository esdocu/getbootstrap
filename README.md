# Notes

## Preview

```text
npx http-server public
```

## New version

Init:

```text
git clone --depth 1 --branch v5.3.8 git@github.com:twbs/bootstrap.git tags/v5-3-8
cd tags/v5-3-8
rm -rf .git
npm install
npm run test
npm run docs-serve
```

Preview:

```text
npm run docs-serve
```

Translate and customize.

Build:

```text
npm run docs-build
```

Copy `site/dist` to `public` and static previus version from the `static-tags` directory:

> Acciones Automatizadas del Script
>
> 1. Limpieza Completa del Directorio public: Borra todos los archivos y subdirectorios dentro de
`public` de manera recursiva, manteniendo la estructura de la carpeta limpia para el nuevo despliegue.
> 2. Detección Dinámica de la Última Versión: Analiza el directorio `tags` y utiliza un comparador semántico de versiones (por ejemplo, interpretando v5-3-8 como [5, 3, 8]) para identificar cuál es la última versión disponible de Bootstrap de forma robusta.
> 3. Copia de los Artefactos de Despliegue (site/dist): Copia todos los archivos compilados del subdirectorio site/dist de la última versión encontrada hacia el directorio public.
> 4. Despliegue de Tags Estáticos: Copia todas las carpetas que existan dentro de `static-tags` (como la versión 5.1) intactas directamente dentro del directorio public/docs.

```text
python3 ../../scripts/update-public-dir.py
```

Clean:

```text
find . -name "node_modules" -type d -prune -exec rm -rf {} +
```

Preview `public`:

```text
npx http-server ../../public
```
