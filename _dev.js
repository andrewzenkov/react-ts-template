const path = require('path');

const webpackBaseConfig = require('./conf');

module.exports = {
    mode: 'development',
    ...webpackBaseConfig,

    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        host: 'localhost',
        port: 3333,
        disableHostCheck: true,
        hot: true,
        historyApiFallback: true
    }
};
