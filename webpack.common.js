const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

// css should exist in its own bundled file
let extractPlugin = new ExtractTextPlugin({
  filename: '[name].bundle.css'
})

module.exports = {
  entry: {
    main: './public/js/main.js',
    projects: './public/js/projects.js',
    about: './public/js/about.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist') // need absolute path
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['env'] }
          }
        ]
      },
      {
        test: /\.css$/,
        use: extractPlugin.extract({ use: ['css-loader'] })
      },
      {
        test: /\.scss$/, // possibly include css as well?
        use: extractPlugin.extract({ use: ['css-loader', 'sass-loader'] })
      }
    ]
  },
  plugins: [
    extractPlugin,
    new CleanWebpackPlugin(['dist'])
  ]
}
