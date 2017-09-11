let path = require('path');
//extract bundled css into separate bundle css file
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let extractPlugin = new ExtractTextPlugin({
  filename: 'main.bundle.css'
});

//remove dist folder if it exists before creating new bundle
let CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    setup: './public/js/setup.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist') //need absolute path
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['es2015'] }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({ use: ['css-loader', 'sass-loader']})
      }
    ]
  },
  plugins: [
    extractPlugin,
    new CleanWebpackPlugin(['dist'])
  ]
};
