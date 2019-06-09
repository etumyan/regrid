const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const sourcePath = path.resolve(__dirname, 'src');

module.exports = {
  context: sourcePath,
  entry: path.join(__dirname, 'sandbox'),
  output: {
    path: path.join(__dirname, 'sandbox'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [
      sourcePath,
      'node_modules'
    ]
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      use: 'source-map-loader'
    }, {
      test: /\.(ts|tsx)$/,
      exclude: [/node_modules/],
      use: 'awesome-typescript-loader'
    }, {
      test: /\.s(c|a)ss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'sandbox/index.html')
    })
  ],
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'sandbox')
  }
};
