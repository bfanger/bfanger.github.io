var path = require('path')
var webpack = require('webpack')
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

if (typeof process.env.NODE_ENV === 'undefined') {
    process.env.NODE_ENV = (process.argv.indexOf('-p') !== -1) ? 'production' : 'development'
}

module.exports = {
    entry: {
        bfanger: './src/bootstrap.js',
        common: './src/common.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, '/jekyll'),
        publicPath: '/'
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.min.js'
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.join(__dirname, 'src'),
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [['env', { modules: false }]],
                    plugins: ['transform-vue-jsx']
                }
            }]
        }, {
            test: /\.scss$/,
            include: path.join(__dirname, 'src'),
            use: [{
                loader: 'sass-loader'
            }]
        }, {
            test: /\.vue$/,
            include: path.join(__dirname, 'src'),
            use: [{
                loader: 'vue-loader'
            }]
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.CommonsChunkPlugin({ name: "common" }),
        new FriendlyErrorsWebpackPlugin()
    ],
    devServer: {
        quiet: true,
        proxy: {
            '/': {
                target: 'http://localhost:4000'
            }
        }
    }
}
