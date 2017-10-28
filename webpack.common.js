const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let extractPlugin = new ExtractTextPlugin({
    filename: '[name].bundle.css'
})

module.exports = {
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
                    options: { presets: ['env'] }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: extractPlugin.extract({ use: ['css-loader'] })
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
