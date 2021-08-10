const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const base = require('./webpack.config.base.js')

module.exports = {
    ...base, // 把 base 属性抄过来
    mode: 'production',
    plugins: [
        ...base.plugins,
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css",
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                // use: ["style-loader", "css-loader"],
                // 生产环境用这个use，因为可以做缓存
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: "../",
                    },
                },
                "css-loader",
                ],
            },
        ],
    },
};
