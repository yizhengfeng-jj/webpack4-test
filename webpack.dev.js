const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const developConfig = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    port: 8001,
    open: true,
    hot: true,
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};

module.exports = merge(developConfig, baseConfig);
