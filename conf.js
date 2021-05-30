const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = {
	mode: "none",
	target: "web",
	entry: {
		app: path.join(__dirname, "index.tsx"),
	},
	resolve: {
		modules: [path.resolve(__dirname, "./src"), "node_modules"],
		extensions: [".ts", ".tsx", ".js", ".scss"],
		alias: {
			services: path.resolve(__dirname, "src/services"),
			routes: path.resolve(__dirname, "src/routes"),
			constants: path.resolve(__dirname, "src/constants"),
			view: path.resolve(__dirname, "src/view"),
		},
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].[contenthash].js",
		publicPath: "/",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "public", "index.html"),
			filename: "index.html",
			hash: true,
		}),
		new webpack.ProvidePlugin({
			process: "process/browser",
		}),
		new Dotenv({
			path: "./.env", // Path to .env file (this is the default)
			safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe)
		}),
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: "/node_modules/",
			},
			{
				test: /\.(PNG|JPG|png|jpg|woff|woff2|eot|ttf|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: [{ loader: "url-loader" }],
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
						options: {
							modules: {
								localIdentName: "[local]--[hash:base64:5]",
							},
						},
					},
					{
						loader: "css-modules-typescript-loader",
					},
					{
						loader: "sass-loader",
						options: {
							sassOptions: {
								includePaths: [path.resolve(__dirname, "./src/app/view/scss")],
							},
						},
					},
				],
			},
			// {
			// 	test: /\.css$/,
			// 	use: [
			// 		{
			// 			loader: "style-loader",
			// 		},
			// 		{
			// 			loader: "css-loader",
			// 			options: { importLoaders: 1 },
			// 		},
			// 	],
			// },
		],
	},
};
