var Encore = require('@symfony/webpack-encore');
const CopyWebpackPlugin = require('copy-webpack-plugin');

Encore
// the project directory where all compiled assets will be stored
    .setOutputPath('public/build/')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')

    // will create public/build/app.js and public/build/app.css
    .createSharedEntry('layout', './assets/js/layout.js')

    .addEntry('website_main', './assets/website/js/website_main.js')
    .addEntry('homepage', './assets/website/js/homepage.js')

    .addEntry('app_main', './assets/app/js/app_main.js')
    .enableSingleRuntimeChunk()
    .enableBuildNotifications()
    .autoProvidejQuery()
    .addPlugin(new CopyWebpackPlugin([
        {from: './assets/website/static', to: 'website/static'},
        /*{from: './assets/app/static', to: 'app/static'}*/
    ]))
    .enableSassLoader()
    .enableSourceMaps(!Encore.isProduction())
    .cleanupOutputBeforeBuild()
    .enableVersioning()
;

// export the final configuration
module.exports = Encore.getWebpackConfig();