const {resolve} = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

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
          // use: ['style-loader', 'css-loader', 'sass-loader'],
          use: ExtractTextPlugin.extract({
            use: ['css-loader', 'sass-loader'],
            fallback: "style-loader",
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin("./styles.css"),
    ]
  };