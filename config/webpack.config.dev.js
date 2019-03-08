const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const TslintWebpackPlugin = require('tslint-webpack-plugin');
const commonWebpackConfig = require('./webpack.config.common');

module.exports = merge(commonWebpackConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 8080,
        noInfo: true,
        contentBase: path.resolve(__dirname, '../dist'),
        compress: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(ts?x)$/,
                exclude: /node_modules/,
                enforce: 'pre',
                loader: 'tslint-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('dev')
            }
        }),
        new TslintWebpackPlugin({
            files: ['../src/**/*.ts']
        })
    ]
});
