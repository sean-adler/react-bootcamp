'use strict';

var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        'index': './src/index.js',
        'vendor': ['react', 'react-dom', 'whatwg-fetch']
    },
    module: {
        loaders: [{
            include: path.join(__dirname, 'src'),
            loaders: ['babel'],
            test: /\.(js|jsx)$/
        }, {
            include: path.join(__dirname, 'src'),
            loader: ExtractTextPlugin.extract('style', [
                'css',
                'postcss',
                'sass?sourceMap'
            ]),
            test: /\.s?css$/
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
    postcss: function() {
        return [
            autoprefixer({
                browsers: ['ios >= 6']
            })
        ];
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
};
