const webpack = require('webpack');

module.exports = {
    entry: './client/main.js',
    output: {
        path: __dirname + 'public/build/bundle.js',
        publicPath: 'build/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader',
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.jsx$/,
                loader: 'react-hot-loader!babel-loader',
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
}