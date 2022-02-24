const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/app.js',
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin()
    ],
    externalsType: 'script', // 创建一个script标签加载脚本  完事后删除
    externals: {
        jquery: [ // 模块名 import $ from 'jquery';
            'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
            'jQuery'
        ]
    }
}
