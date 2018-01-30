const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: ['angular', 'bootstrap', '@uirouter/angularjs'],
    bundle: __dirname + '/public/app/app.module.js'
  },
  output: {
    path: __dirname + '/dist', // Folder to store generated bundle
    filename: 'bundle.js', // Name of generated bundle after build
    publicPath: '/' // public URL of the output directory when referenced in a browser
  },
  module: {
    // where we defined file patterns and their loaders
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: [/node_modules/]
      },
      {
        test: /\.html/,
        loader: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({  
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader'}
          ],
        })
      }
    ]
  },
  plugins: [
    // Array of plugins to apply to build chunk
    new HtmlWebpackPlugin({
      template: __dirname + '/public/index.html',
      inject: 'body'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks: Infinity
    }),
    new ExtractTextPlugin("styles.css")
  ]
};
