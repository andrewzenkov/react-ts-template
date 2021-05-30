const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const webpackProdConfig = require("./_prod");

module.exports = {
	...webpackProdConfig,

	plugins: [
		...webpackProdConfig.plugins,
		new BundleAnalyzerPlugin()
	]
};
