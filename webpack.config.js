let webpack = require('webpack');
let path = require('path');
//extract bundled css into separate bundle css file
let ExtractTextPlugin = require('extract-text-webpack-plugin');
//remove dist folder if it exists before creating new bundle
let CleanWebpackPlugin = require('clean-webpack-plugin');

let extractPlugin = new ExtractTextPlugin({
	filename: '[name].bundle.css'
})

module.exports = {
  watch: true,
  watchOptions: {
	ignored: /node_modules/
  },
  entry: {
	vendor: ["jquery"],
    main: './public/js/main.js',
	index: './public/js/index.js'
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
        test: /\.scss$/, //possibly include css as well?
        use: extractPlugin.extract({ use: ['css-loader', 'sass-loader']})
      }
    ]
  },
  plugins: [
  	new webpack.ProvidePlugin({
		//map variables to functions
		$: 'jquery',
		jQuery: 'jquery'
	}),
	new webpack.optimize.CommonsChunkPlugin({
		name: 'vendor',
		filename: 'vendor.bundle.js',
		minChunks: Infinity //ensure no other modules put in here, just vendor modules
	}),
	extractPlugin,
    new CleanWebpackPlugin(['dist'])
  ]
};
