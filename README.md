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

Translate.

Build:

```text
npm run docs-build
```

Copy `site/dist` to `public`.

Clean:

```text
find . -name "node_modules" -type d -prune -exec rm -rf {} +
```
