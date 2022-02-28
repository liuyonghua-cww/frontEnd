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
        path: path.resolve(__dirname, './dist'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new ModuleFederationPlugin({
            name: 'home',
            filename: 'remoteEntry.js',
            remotes: {
                nav: 'nav@http://localhost:8080/remoteEntry.js'
            },
            exposes: {
                './HomeList': './src/HomeList.js'
            },
            shared: {

            }
        })
    ],
};
