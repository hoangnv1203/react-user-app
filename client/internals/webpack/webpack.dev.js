const webpack = require('webpack')

module.exports = require('./webpack.common')({
  buildPath: 'build',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      PRODUCTION: JSON.stringify(false)
    })
  ]
})
