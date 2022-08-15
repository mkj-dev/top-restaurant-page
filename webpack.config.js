const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
  },
 devServer: {
   static: './dist',
 },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
 optimization: {
   runtimeChunk: 'single',
 },
};