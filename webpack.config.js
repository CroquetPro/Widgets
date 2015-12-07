var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/widget.jsx",
  output: {
    path: "./",
    filename: "bundle.js"
    // devtoolModuleFilenameTemplate: '[resourcePath]',
    // devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react']
        }
      }
    ]
  },

  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js", '.jsx']
  }

};
