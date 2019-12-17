const { environment } = require('@rails/webpacker')
const webpack = require('webpack')
const {resolve} = require('path');

environment.plugins.append('Provide', new webpack.ProvidePlugin({
  Datepicker: [resolve('app/javascript/application/datepicker'), 'default']
}))

module.exports = environment
