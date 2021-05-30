const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const webpackDevConfig = require("./_dev");

module.exports = {
	mode: "development",
	...webpackDevConfig,
	plugins: [...webpackDevConfig.plugins, new BundleAnalyzerPlugin()],
};


