const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const autoprefixer = require("autoprefixer");

const webpackBaseConfig = require("./conf");

module.exports = {
  mode: "production",
  ...webpackBaseConfig,

  plugins: [
    ...webpackBaseConfig.plugins,
    new MiniCssExtractPlugin({
      filename: "styles.[hash].css",
    }),
  ],
};
