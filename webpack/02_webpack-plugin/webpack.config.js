const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist', // path应该设置成绝对路径
        clean: true, // 每次打包前清除上一次的文件
    },
    mode: 'none',
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // 模板
            filename: 'app.html', // 生成的文件的名称
            inject: 'body' // 将 script 标签插入到 body 中
        })
    ]
}
