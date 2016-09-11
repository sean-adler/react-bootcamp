'use strict';

var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'index': './src/index.jsx',
        'vendor': ['react', 'react-dom', 'whatwg-fetch']
    },
    module: {
        loaders: [{
            include: path.join(__dirname, 'src'),
            loaders: ['babel'],
            test: /\.(js|jsx)$/
        }, {
            include: path.join(__dirname, 'src'),
            loader: ExtractTextPlugin.extract('style', 'css'),
            test: /\.css$/
        }]
    },
    output: {
        filename: 'scripts/bundle.js',
        path: path.join(__dirname, 'static')
    },
    plugins: [
        new ExtractTextPlugin('styles/bundle.css'),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'scripts/vendor.bundle.js')
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
