const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/js/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      favicon: "./src/favicon.ico",
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  output: {
    filename: 'js/index.js',
    path: path.resolve(__dirname, 'dist')
  }
};
