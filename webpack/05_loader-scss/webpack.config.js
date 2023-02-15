const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist', // path应该设置成绝对路径
        clean: true, // 每次打包前清除上一次的文件
    },
    mode: 'development',
    plugins: [
        new MiniCssExtractPlugin(),
    ],
    // 解析不同的类型文件
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader", "sass-loader"
                ]
            }

        ]
    },
};
