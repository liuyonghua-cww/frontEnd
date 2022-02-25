const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        clean: true
    },
    mode: 'production',
    // devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin()
    ],
    optimization: {
        usedExports: true
    }
}
