var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/widget.jsx",
  output: {
    path: "./",
    filename: "bundle.js"
    
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


  resolve: {
    extensions: ["", ".js", '.jsx']
  }

};
