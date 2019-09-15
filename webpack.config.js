const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let cfg = {
  entry: path.join(__dirname,'src','index.js'),
  output: {
    path: path.join(__dirname,'build'),
    filename: 'index.bundle.js'
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: ['@babel/env', '@babel/react'],
              plugins: ['@babel/plugin-proposal-class-properties']
            }
          }
          // {loader: 'eslint-loader'}
        ]
      },
      {
        test: /\.s?css$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader", // compiles Sass to CSS, using Node Sass by default          }
          "resolve-url-loader" // url-rewrite for sass
        ]
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {limit: 4000}
          }
        ]
      },
      {
        test: /index.ejs$/,
        loader: 'ejs-loader',
        query: {

        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'src','index.ejs'),
      title: 'ShowTime'
    })
  ]
};

cfg = merge(cfg, process.env.NODE_ENV === 'production' ?
  {

  } :
  {
    devtool: 'source-map',
    devServer: {
      contentBase: path.join(__dirname,'src'),
      host: "0.0.0.0",
      port: 8090,
      hot: true
    },
  });

module.exports = cfg;
