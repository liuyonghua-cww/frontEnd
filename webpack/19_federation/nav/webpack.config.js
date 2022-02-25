/**
 * @file webpack 配置文件
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist')
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
};
