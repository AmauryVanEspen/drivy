var path = require('path')
var webpack = require('webpack')

var staticDirectory = './flaskapp/static/'

var jsMainFile = staticDirectory + 'js/main.js'
var jsBuildPath = staticDirectory + '_build/js'
var jsBundleFile = 'build.js'

var plugins = [
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /fr/)
]

module.exports = {
    devtool: 'eval',
    entry: jsMainFile,
    output: {path: jsBuildPath, filename: jsBundleFile},
    plugins: plugins,
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /plugin\.css$/,
                loaders: [
                    'style', 'css'
                ]
            }
        ]
    }
}
