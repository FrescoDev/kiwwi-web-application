var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    postcss: function() {
        return [
            require('postcss-import')({
                onImport: function(files) {
                    files.forEach(this.addDependency)
                }.bind(this)
            }),
            require('postcss-simple-vars')(),
            require('postcss-focus')(),
            require('autoprefixer')({
                browsers: ['last 2 versions', 'IE > 8']
            }),
            require('postcss-reporter')({
                clearMessages: true
            })
        ]
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/,
            include: __dirname
        }, {
            test: /\.css$/, // Transform all .css files required somewhere within an entry point...
            loaders: ['style-loader', 'css-loader', 'postcss-loader'] // ...with PostCSS
        }]
    }
}