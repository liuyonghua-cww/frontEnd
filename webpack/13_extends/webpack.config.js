const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin()
    ],
    module: {
        rules: [
            {test: /\.css/, use: ['style-loader', 'css-loader', 'postcss-loader']}
        ]
    }
}
