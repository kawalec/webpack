const {resolve} = require('path');

module.exports = {
    entry: {
      index: './src/index.js',
      app: './src/app.js'
    },
    output: {
      path: resolve(__dirname, 'dist'),
      filename: '[name].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        }
      ]
    },
  };