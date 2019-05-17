const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const prodCfg = require('./webpack.common.prod');

// const buildPath = '../../cw-release/pc/'
const buildPath = '../dist'

// 删除CleanWebpackPlugin包
// https://www.npmjs.com/package/webpack-merge
const config = merge(prodCfg, {
    output: {
        path: path.join(__dirname, buildPath),
        publicPath: './',
    },
    plugins: [
        new CleanWebpackPlugin(path.join(__dirname, buildPath), {
            root: path.join(__dirname, buildPath),
        }),
    ],
});

module.exports = config;
