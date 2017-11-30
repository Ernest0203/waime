const webpack = require('webpack');

let config = {
	devtool: 'cheap-module-eval-source-map',
	entry:   __dirname + '/src/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		// rules: [
		// 	{
		// 		enforce: 'pre',
		// 		test: /\.js$/,
		// 		exclude: /node_modules/,
		// 		loader: 'eslint-loader',
		// 	},
		// 	{
		// 		test: /\.js$/,
		// 		exclude: /node_modules/,
		// 		loader: 'babel-loader',
		// 	},
		// ],
  	loaders: [
			{
      	test: /\.(js|jsx)$/,
      	exclude: /node_modules/,
      	loader: 'babel-loader',
      	query: {
        	presets: ['es2015', 'react', 'stage-0']
      	}
    	},
			{
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
			{
        test: /\.(jpg|jpeg|gif|png|svg)$/,
        loader: 'url-loader?name=[path][name].[ext]',
      },
			{
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'url-loader?name=[path][name].[ext]',
      }
    ]
  },
	devServer: {
		contentBase: './dist',
		inline: true
	}
}

module.exports = config;