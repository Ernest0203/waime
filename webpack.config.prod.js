var webpack = require('webpack');

var config = {
	devtool: false,
	entry:   __dirname + '/src/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	plugins:[
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    }),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('production')}
    })
  ],
	module: {
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
        test: /\.(jpg|jpeg|gif|png)$/,
        loader: 'url?name=[path][name].[ext]',
      },
			{
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'url?name=[path][name].[ext]',
      }
    ]
  },
}

module.exports = config;