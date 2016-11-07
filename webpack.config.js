const webpack = require('webpack');
module.exports = {
	resolve: {
		extensions: ['', '.js'],
	},
    module: {
        loaders: [
            { test: /\.soy$/, loader: 'soy-loader' }
        ]
    },
    entry: './index.js',
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    }
};