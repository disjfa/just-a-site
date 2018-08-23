// webpack.config.js
const Encore = require('@symfony/webpack-encore');

Encore
  .setOutputPath('site/static/')
  .setPublicPath('/just-a-site/static')
  .setManifestKeyPrefix('/just-a-site')
  .cleanupOutputBeforeBuild()
  .addEntry('just-a-site', './js/just-a-site.js')
  .addStyleEntry('layout', './scss/layout.scss')
  .enableSassLoader()
  .enableVueLoader()
  .autoProvidejQuery()
  .enableSourceMaps(!Encore.isProduction())
;

// export the final configuration
const config = Encore.getWebpackConfig();
config.node = {
  fs: 'empty',
  net: 'empty',
  tls: 'empty',
};
module.exports = config;
