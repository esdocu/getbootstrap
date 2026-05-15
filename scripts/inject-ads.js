const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const adScript = '<script src="https://static-ads.xeost.com/ads.js" async></script>';

function injectAds(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      injectAds(filePath);
    } else if (filePath.endsWith('.html')) {
      let content = fs.readFileSync(filePath, 'utf8');

      if (!content.includes('https://static-ads.xeost.com/ads.js')) {
        const bodyMatches = [...content.matchAll(/<\/body\s*>/gi)];
        if (bodyMatches.length > 0) {
          const lastMatch = bodyMatches[bodyMatches.length - 1];
          const lastBodyIndex = lastMatch.index;
          content = content.slice(0, lastBodyIndex) + adScript + '\n' + content.slice(lastBodyIndex);
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Inyectado en: ${filePath}`);
        } else {
          console.warn(`No se encontró </body> en: ${filePath}`);
        }
      }
    }
  }
}

console.log(`Iniciando inyección de script en: ${publicDir}`);
if (!fs.existsSync(publicDir)) {
  console.error(`El directorio public no existe: ${publicDir}`);
  process.exit(1);
}

injectAds(publicDir);
console.log('Proceso completado.');
