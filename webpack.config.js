const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    generate: './src/generatePage.js',
    home: './src/home.js',
    about: './src/about.js',
    menu: './src/menu.js',
    clear: './src/clear.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Restaurant',
        template: "./src/index.html",
      }),
    ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        
      },
      {
        test: /\.png/,
        type: 'asset/resource'
      },
      {
        test: /\.jpg/,
        type: 'asset/resource'
      },
    ],
  },
};