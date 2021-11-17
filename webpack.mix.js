"use strict";
const mix = require('laravel-mix');
// mix.setPublicPath('http://54.189.211.217/komyt/public');
//mix.setResourceRoot("http://54.189.211.217/komyt/publi
mix.js('resources/js/main.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css/app.css', {
        implementation: require('node-sass')
    })
    .webpackConfig({
        resolve: {
            alias: {
                "@assets": path.resolve(__dirname, "resources/sass"),
                "@": path.resolve(__dirname, "resources/js"),
            }                  
        },
        node: {
            fs: 'empty',
        },
        output: {
            // publicPath:'http://54.189.211.217/komyt/public/',
            chunkFilename: '[name].js?id=[chunkhash]',
        }
    })
    .disableNotifications();

if (mix.inProduction()) {
    mix.version();
}






// const mix = require('laravel-mix');
//
// // mix.browserSync('127.0.0.1:8000');
// // mix.sass('resources/assets/app/app.scss', 'public/css')
// //     .options({
// //         processCssUrls: false
// //     });
//
// mix.js('resources/js/main.js', 'public/js')
//     .sass('resources/sass/app.scss', 'public/css/app.css', {
//         implementation: require('node-sass')
//     })
//     .webpackConfig({
//
//         resolve: {
//             alias: {
//                 "@assets": path.resolve(__dirname, "resources/sass"),
//                 "@": path.resolve(__dirname, "resources/js"),
//             }
//         },
//         node: {
//             fs: "empty"
//         },
//         output: {
//             chunkFilename: '[name].js?id=[chunkhash]',
//         }
//     })
//     .disableNotifications();
//
// if (mix.inProduction()) {
//     mix.version();
// }
