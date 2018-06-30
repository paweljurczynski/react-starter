const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const webpack = require('webpack');
const env = process.env.NODE_ENV || 'development';

module.exports = {
    context: path.resolve(__dirname, 'src/'),
    entry: './index.tsx',
    devtool: env === 'development' ? 'cheap-module-source-map' : undefined,
    output: {
        path: path.resolve(__dirname, 'build/'),
        filename: 'main.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'static/'),
        hot: true,
        hotOnly: true,
        inline: true,
        port: 8080,
        clientLogLevel: 'warning'
    },
    mode: env,
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.json', '.css' ],
        modules: [
            path.resolve(__dirname, './src'),
            path.resolve(__dirname, './node_modules')
        ]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'build')
                ],
                use: [
                    { loader: 'awesome-typescript-loader' }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: { modules: true } },
                    { loader: 'postcss-loader' }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'head'
        }),
        new ScriptExtHtmlWebpackPlugin({
            defer: 'main.js'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
};