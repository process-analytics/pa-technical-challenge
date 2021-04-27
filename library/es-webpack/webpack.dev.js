const HtmlWebpackPlugin = require('html-webpack-plugin');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
    mode: 'development',
    entry: './dev/index.js',
    devtool: 'eval-cheap-source-map',
    devServer: {
        contentBase: './dist',
        open: true,
        host: 'localhost',
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './dev/index.html',
            inject: 'body',
        }),
    ]
});
