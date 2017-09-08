const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  devServer: {
    host: 'localhost',
    port: '3000',
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  entry: [
    './src/style.scss',
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract([
          {
            loader: 'css-loader',
            options: {
              minimize: true,
              precision: 10,
            },
          },
          'sass-loader',
        ]),
      },
    ],
  },
  output: {
    path: path.join(__dirname, './lib/'),
    filename: 'index.css'
  },
  plugins: [new ExtractTextPlugin('index.css')]
};
