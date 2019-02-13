const path = require('path');

const config = {
  context: path.resolve(__dirname, '.'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, '.'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, '.'),
    port: 3000,
  },
};

module.exports = config;
