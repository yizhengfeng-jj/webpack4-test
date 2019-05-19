
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const productionConfig = {
  mode: 'production',
  devtool: 'cheap-source-map'
};

module.exports = merge(baseConfig, productionConfig);
