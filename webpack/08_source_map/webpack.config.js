const path = require("path")
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './app.js',
    plugins: [
        new htmlWebpackPlugin()
    ],
    mode: 'development',
    devtool: 'source-map',
}
