const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    generate: './src/generatePage.js',
    },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
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