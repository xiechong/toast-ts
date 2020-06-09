const path = require('path')
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, './src/component/Toast/index.ts'),
    output: {
        path: path.join(__dirname, 'lib'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                loader: 'ts-loader',
            },
            {
                // pre/nomal/post - loader的执行顺序 - 前/中/后
                enforce: 'pre',
                test: /\.tsx?/,
                loader: 'source-map-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif|mp4)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 20,
                    },
                },
            },
        ],
    },
    //映射工具
    // devtool: 'source-map',
    //处理路径解析
    resolve: {
        //extensions 拓展名
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                from: path.join(__dirname, '/src/types/index.d.ts'),
                to: path.join(__dirname, '/lib'),
                force: true,
                flatten: false
            }],
        }),
    ],
    devServer: {
        port: 3005,
    },
}
