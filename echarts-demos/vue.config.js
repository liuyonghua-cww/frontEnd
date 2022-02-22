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

        }
    }
}
