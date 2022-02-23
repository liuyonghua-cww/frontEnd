const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css']
module.exports = {
    devServer: {
        proxy: {
            '/page': {
                target: 'http://localhost:8081',
                changeOrigin: true,

            }
        }
    },
    configureWebpack: config => {
        return {
            plugins: [
                // 配置压缩
                new CompressionWebpackPlugin({
                    algorithm: 'gzip',
                    test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                    threshold: 10240,
                    minRatio: 0.8
                }),
            ]
        }
    }
}
