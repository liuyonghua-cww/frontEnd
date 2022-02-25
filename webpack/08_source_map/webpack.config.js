const path = require("path")
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './index.js',
    output: {
        clean: true
    },
    plugins: [
        new htmlWebpackPlugin()
    ],
    mode: 'development',
    devtool: 'source-map',
}
