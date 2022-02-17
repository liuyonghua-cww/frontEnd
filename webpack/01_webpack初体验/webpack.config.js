/**
 * @file webpack 配置文件
 */
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist' // path应该设置成绝对路径
    },
    mode: 'none'
}
