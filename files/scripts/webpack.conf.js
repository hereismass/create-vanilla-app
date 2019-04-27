var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = () => {
  const NODE_ENV = process.env.NODE_ENV;

  let _mode = 'production';
  let _output = null;


  switch (NODE_ENV) {
    case 'development':
      _mode = 'development';
      break;
    case 'staging':
      break;
    case 'production':
      break;
    default:
      break;
  }

  const _entry = path.join(__dirname, '../src/javascripts/index.js');

  const _devtool = 'source-map';

  const _target = 'web';

  const _context = __dirname;

  const _resolve = {
    modules: ['node_modules'],
    extensions: ['.js']
  };

  const _plugins = [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: path.join(__dirname, '../src/views/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new webpack.DefinePlugin({
      ENV: JSON.stringify(NODE_ENV)
    })
  ];

  _output = {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  };

  return {
    entry: _entry,
    output: _output,
    resolve: _resolve,
    devtool: _devtool,
    plugins: _plugins,
    mode: _mode,
    target: _target,
    context: _context
  };
};
