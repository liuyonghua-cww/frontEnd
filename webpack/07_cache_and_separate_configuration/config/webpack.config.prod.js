const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin'); // 压缩js代码
module.exports = {

    output: {
        filename: '[name].[contenthash].js',
        publicPath: './'
    },
    mode: 'production',
    plugins: [
        new CssMinimizerPlugin()
    ],

    optimization: {
        minimizer: [
            new CssMinimizerPlugin(), new TerserPlugin()
        ]

    }

};
