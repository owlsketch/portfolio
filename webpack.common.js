const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    main: './public/js/main.js',
    projects: './public/js/projects.js',
    about: './public/js/about.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['react', 'env'] }
          }
        ]
      },
      {
        test: /\.s?css$/,
        use: [
          { loader: MiniCSSExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ] 
      }
    ]
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: '[name].bundle.css',
      chunkFilename: '[id].bundle.css'
    }),
    new CleanWebpackPlugin(['dist'])
  ]
}
