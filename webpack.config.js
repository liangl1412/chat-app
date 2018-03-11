const path = require('path');


module.exports = {

  entry: './app/script/index.js',
  output: {
     path: __dirname + '/dist',
     publicPath: '/',
     filename: 'app.bundle.js'
  },
  watch: true,
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: [/server/, /node_modules/] },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: [/server/, /node_modules/] },
      {
        test: /\.scss$/,
        loaders: [ 'style-loader', 'css-loader?sourceMap', 'postcss-loader?sourceMap','resolve-url-loader','sass-loader?sourceMap' ]
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  }
};
