const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    global: './client/assets/global.js',
    app: './client/app/index.container.jsx'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx']
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
