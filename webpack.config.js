path = require('path');

module.exports = {
       progress: true,
       context: path.resolve(__dirname, './scripts'),
       entry: path.resolve(__dirname, './scripts/init.js'),
       output: {
         path: path.resolve(__dirname, './assets/js/'),
         filename: 'bundle.js' },
         module: {
         loaders: [
         {
            test: /modernizr/,
            loader: "imports?this=>window"
         },
         {
            test: /mobileMenu/,
            loader: "imports?this=>window"
         }
         ]
         }};

