Package.describe({
  name: '3stack:template-hooks',
  version: '0.1.0',
  summary: 'A safe way to add the created/rendered/destroyed hooks to your templates.',
  git: 'https://github.com/3stack-software/meteor-template-hooks',
  documentation: 'README.md'
});

Package.onUse(function(api){
  api.versionsFrom('METEOR@0.9.2');
  api.use('underscore', 'client');
  api.export('TemplateHooks', 'client');
  api.addFiles('template-hooks.js', 'client');
});
