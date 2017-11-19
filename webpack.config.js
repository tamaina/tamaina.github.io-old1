const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './theme/js/main.js',
  output: {
    path: __dirname + '/docs/assets',
    filename: 'main.min.js'
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true
    })
  ]
}