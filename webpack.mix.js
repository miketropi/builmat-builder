const mix = require('laravel-mix');

mix.autoload({
  jquery: ['$', 'window.jQuery']
});

mix
  .js('./src/main.js', 'assets/buildmat-builder.bundle.js')
  .react()
  .sass('./src/scss/main.scss', 'buildmat-builder.bundle.css')
  .setPublicPath('assets')