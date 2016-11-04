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
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    }
};