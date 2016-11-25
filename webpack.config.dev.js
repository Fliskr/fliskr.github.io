var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client',
        './client/index'
    ],
    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            // js
            {
                test: /\.js$/,
                loaders: ['babel'],
                include: path.join(process.cwd(), 'client'),
                exclude: /node_modules/
            },
            // CSS
            {
                test: /\.styl$/,
                include: path.join(process.cwd(), 'client'),
                loader: 'style-loader!css-loader!stylus-loader'
            }
        ]
    },
    resolve: {
        modules: ['client', 'node_modules'],
        extensions: ['', '.js', '.jsx']
    }
};
