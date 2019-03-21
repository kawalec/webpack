const {resolve} = require('path');

module.exports = {
    entry: {
      one: './src/index.js',
      two: './src/app.js'
    },
    output: {
      path: resolve(__dirname, 'dist'),
      filename: '[name].[id].bundle.js'
    }
  };