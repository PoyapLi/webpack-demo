const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const base = require('./webpack.config.base.js')

module.exports = {
    ...base, // 把 base 所有属性抄过来
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                //开发环境用这个use
                use: ["style-loader", "css-loader"],
            }
        ]
    }
};
