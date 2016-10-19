
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {

	// define entry point
	entry: "./resources/js/add.js",

	//define output point
	output: {
		path: "./public/js/min",
		filename: "main.js"
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.scss$/,
				exclude: /(node_modules)/,
				//loader: 'style-loader!css-loader!sass-loader'
				loader: ExtractTextPlugin.extract('style-loader!css-loader!sass-loader')
			}

		]
	},
	plugins: [
	new ExtractTextPlugin('./public/css/min/screen.css', {
		allChunks: true
	})
	]
}