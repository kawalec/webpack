module.exports = {
    entry: {
      one: './src/index.js',
      two: './src/app.js',
      three: './src/home.js'
    },
    output: {
      path: __dirname + '/dist',
      filename: '[name]/[id].bundle.js'
    }
  };