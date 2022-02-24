const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/app.js',
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin()
    ]
}
