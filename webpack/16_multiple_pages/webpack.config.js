const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:{
        main: {
            import: ['./src/app.js', './src/app1.js'],
            dependOn: 'lodash'
        },
        main2: {
            import: ['./src/app3.js'],
            dependOn: 'lodash'
        },
        lodash: 'lodash'
    },
    output: {
        clean: true
    },
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: '多页面应用',
            template: './index.html',
            chunks: ['main', 'lodash'], // 指定引入哪些打包出来的文件
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            title: '多页面应用2',
            template: './index.html',
            chunks: ['main2', 'lodash'], // 指定引入哪些打包出来的文件
            filename: 'index2.html'
        })
    ]
}
