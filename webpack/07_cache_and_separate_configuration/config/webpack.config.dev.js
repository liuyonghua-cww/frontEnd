module.exports = {
        output: {
            filename: '[name].js',
        },
        mode: 'development',
        devtool: 'inline-source-map',
        devServer: {
            static: './dist'
        }
}
