/**
 * @file webpack 配置文件
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist')
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new ModuleFederationPlugin({
            name: 'nav',
            filename: 'remoteEntry.js',
            remotes: {},
            exposes: {
                './Header': './src/Header.js'
            },
            shared: {}
        })
    ],
};
