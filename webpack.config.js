const {resolve} = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: {
      index: './src/index.js',
      app: './src/app.js'
    },
    output: {
      path: resolve(__dirname, 'dist'),
      filename: '[name].bundle.js'
    },
    // watch: true,
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.css$/,
          // use: ['style-loader', 'css-loader', 'sass-loader'],
          use: ExtractTextPlugin.extract({
            use: ['css-loader', 'sass-loader'],
            fallback: "style-loader",
          })
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin("./styles.css")
      // new LiveReloadPlugin()
    ]
  };