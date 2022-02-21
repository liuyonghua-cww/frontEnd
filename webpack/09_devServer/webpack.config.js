const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry: './app.js',
    output: {
        clean: true
    },
    devtool:'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, './dist'),
        compress: true, // 传输过程中开启gip压缩
        port: 8081
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    mode: 'development'
}
