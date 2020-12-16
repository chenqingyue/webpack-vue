const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {
  // 入口
  entry: path.join(__dirname, './src/main.js'),
  // 出口
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  devServer: {
    open: false,
    port: '3000',
    contentBase: 'src',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|bmp|svg)$/,
        use: 'url-loader?limit=10000&name=[hash:8]-[name].[ext]'
      },
      {
        test: /\.(ttf|otf|svg|eot|woff|woff2)$/,
        use: 'url-loader?limit=10000&name=[hash:8]-[name].[ext]'
      },
      {
        test: /\.(mp3|mp4|ogg|webm|wav|flac|aac)$/,
        use: 'url-loader?limit=10000&name=[hash:8]-[name].[ext]'
      }
    ]
  }
}