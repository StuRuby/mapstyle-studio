const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const progressBarWebpackPlugin = require('progress-bar-webpack-plugin');
const visualizer = require('webpack-visualizer-plugin');
const compressionPlugin = require('compression-webpack-plugin');
const commonWebpackconfig = require('./webpack.config.common');

const cleanOptions = {
    root: path.resolve(__dirname, '../dist'),
    verbose: true,
    dry: false
};

module.exports = merge(commonWebpackconfig, {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('prod')
            }
        }),
        new cleanWebpackPlugin(cleanOptions),
        new progressBarWebpackPlugin(),
        new visualizer({
            filename: './statistics.html'
        }),
        new compressionPlugin({
            test: /\.(js|css)$/,
            algorithm: 'gzip',
            filename: '[path].gz[query]',
            threshold: 8192,
            minRatio: 0.8
        })
    ]
});
