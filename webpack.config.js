const HTMLWebpackPlugin = require('html-webpack-plugin');
const { join } = require('path');
const { HotModuleReplacementPlugin } = require('webpack');

const mode = process.env.ENV || 'development';

module.exports = {
  mode,
  entry: join(__dirname, 'index.js'),
  output: {
    path: join(__dirname, 'build'),
    filename: 'index.bundled.js'
  },
  devServer: {
    port: 1000,
    hot: true,
    open: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      favicon: false,
      showErrors: true,
      cache: true,
      template: join(__dirname, 'index.html')
    })
  ]
}