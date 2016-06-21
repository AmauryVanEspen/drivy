const path = require('path')
const webpack = require('webpack')

const staticDirectory = path.resolve(__dirname, 'flaskapp/static'); 
const __PRODUCTION__ = process.env.NODE_ENV === 'production';

const jsMainPath = staticDirectory + '/js/App.js'
const jsBuildPath = staticDirectory + '/_build'
const jsBundleFile = 'bundle.js'

const entry = [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    jsMainPath
  ];

const outputDev = {
    path: path.join(__dirname, 'dist'),
    filename: jsBundleFile,
    publicPath: '/flaskapp/static/_build/'
};

const outputBuild = {
    path: jsBuildPath,
    filename: jsBundleFile
};

let output = outputDev;
if (__PRODUCTION__) {
    output = outputBuild;
}

const plugins = [ 
    new webpack.HotModuleReplacementPlugin() 
];

const loaders = [
    {
        test: /.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/,
        include: __dirname
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

module.exports = {
    devtool: 'eval',
    entry: entry,
    output: output,
    plugins: plugins,
    module: {
        loaders: loaders
    }
}
