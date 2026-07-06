// Archivo de metadatos de paquete para Meteor.js

/* eslint-env meteor */

Package.describe({
  name: 'twbs:bootstrap', // https://atmospherejs.com/twbs/bootstrap
  summary: 'El framework front-end más popular para desarrollar proyectos responsivos y orientados a dispositivos móviles en la web.',
  version: '5.3.8',
  git: 'https://github.com/twbs/bootstrap.git'
})

Package.onUse(api => {
  api.versionsFrom('METEOR@1.0')
  api.addFiles([
    'dist/css/bootstrap.css',
    'dist/js/bootstrap.js'
  ], 'client')
})
