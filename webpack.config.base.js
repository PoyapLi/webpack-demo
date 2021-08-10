const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.[contenthash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'poyapli',
            template: 'src/assets/index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    { //此 loader 作用：把文件变成文件路径
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.styl$/,
                loader:['style-loader','css-loader','stylus-loader']
            },
            {
                test: /\.less$/i,
                loader: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ],
            },
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {implementation: require('dart-sass')}
                    },
                ],
            },
        ],
    },
};
