const {resolve} = require('path');

module.exports = {
    entry: {
      one: './src/index.js',
<<<<<<< HEAD
      two: './src/app.js',
      three: './src/home.js'
    },
    output: {
      path: __dirname + '/dist',
      filename: '[name]/[id].bundle.js'
=======
      two: './src/app.js'
    },
    output: {
      path: resolve(__dirname, 'dist'),
      filename: '[name].[id].bundle.js'
>>>>>>> develop
    }
  };