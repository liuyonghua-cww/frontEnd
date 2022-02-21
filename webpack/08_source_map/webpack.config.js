const path = require("path")
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './app.js',
    output: {
        clean: true
    },
    plugins: [
        new htmlWebpackPlugin()
    ],
    mode: 'development',
    devtool: 'source-map',
}
