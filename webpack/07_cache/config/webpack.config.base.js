const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

// webpack-dev-server --env development --env lyh_name='liuyonghua'  还可携带其他参数
module.exports = {
        // 多入口
        entry: {
            index: './src/index.js',
            another: './src/another-module.js'
        },
        output: {
            path: path.resolve(__dirname, '../dist'),// path应该设置成绝对路径
            clean: true, // 每次打包前清除上一次的文件
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html', // 模板
                filename: 'app.html', // 生成的文件的名称
                inject: 'body' // 将 script 标签插入到 body 中
            }),
            new MiniCssExtractPlugin()
        ],

        // 解析不同的类型文件
        module: {
            generator: {
                'asset/resource': {
                    publicPath: 'img/', // 打包后的图片通过 img 文件夹访问
                    outputPath: 'img/', // asset/resource 的资源打包的时候输出到 img 文件夹中
                },
            },
            rules: [
                {test: /\.jpg$/, type: 'asset/resource'}, // 资源的url
                {test: /\.svg$/, type: 'asset/inline'}, // 资源的dataURI（base64）
                {test: /\.txt$/, type: 'asset/source'}, // 资源的源代码
                {test: /\.png$/, type: 'asset'}, // 在 asset/resource、asset/inline 中进行切换
                {test: /\.(css|less)$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']},
                {
                    test: /\.js$/,
                    exclude: /node_modules/, // 排除
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: [
                                [
                                    '@babel/plugin-transform-runtime'
                                ]
                            ]
                        }
                    }
                }

            ]
        },
        performance: {
            hints: false
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    }
                }
            }
        }
}
