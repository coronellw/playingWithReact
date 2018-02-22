var webpack = require("webpack")
var path = require('path')
module.exports = {
	entry: "./src/index.js",
	output: {	
		path: path.resolve(__dirname, "dist/assets"),
		filename: "bundle.js",
		publicPath: "/assets/"
	},
	devServer: {
		inline: true,
		contentBase: path.join(__dirname, "dist"),
		port: 3030,
		historyApiFallback: true
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node-modules)/,
				use:{
					loader: "babel-loader",
					options: {
						presets: ["env","react","stage-0"]
					}
				}

			},
			{
				test: /\.json$/,
				exclude: /(node-modules)/,
				use: {
					loader: "json-loader"
				}
			},
			{
				test: /\.css$/,
				exclude: /(node-modules)/,
				loader: 'style-loader!css-loader!autoprefixer-loader'
			},
		]
	}
}