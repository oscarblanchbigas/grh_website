// https://jonathanmh.com/webpack-sass-scss-compiling-separate-file/
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./js/app.js', './sass/main.scss'],
  output: {
    filename: '../static/js/bundle.js'
  },
  module: {
    rules: [
      /*
      your other rules for JavaScript transpiling go in here
      */
      { // css / sass / scss loader for webpack
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
        })
      },
      {//png /jpg loader for webpack
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader'
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: '../static/css/[name].bundle.css',
      allChunks: true,
    }),
  ],
};
