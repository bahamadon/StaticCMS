axis         = require 'axis'
rupture      = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
contentful   = require 'roots-contentful'
config       = require './contentful'
marked       = require 'marked'
webpack      = require 'roots-webpack'
wbpkconfig  = require './webpack.config.js'
path         = require 'path'

module.exports =
  ignores: [
    'readme.md', '**/layout.*', '**/_*', '.gitignore', 'contentful.coffee',
    'Makefile', 'ship*'
  ]

  stylus:
    use: [axis(), rupture(), autoprefixer()]

  locals:
    marked: marked

  extensions: [
               contentful(config)
              ]

  jade:
    pretty: true
