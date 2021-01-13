const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/js/index.js',
    print: './src/js/print.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    writeToDisk: true,
  },
  target: 'web',
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      title: 'Home',
      template: 'src/templates/index.pug'
    }),
    new HtmlWebpackPlugin({
      title: 'Product',
      filename: 'product.html',
      template: 'src/templates/product.pug'
    }),
    new HtmlWebpackPlugin({
      title: 'Access',
      filename: 'access.html',
      template: 'src/templates/access.pug'
    }),
    new HtmlWebpackPlugin({
      title: 'Contact',
      filename: 'contact.html',
      template: 'src/templates/contact.pug'
    }),
    new MiniCssExtractPlugin({
      filename: 'stylesheets/[name].css'
    }),
  ],
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name].[contenthash].[ext]'
            }
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              name: '[name].[ext]',
            }
          }
        ]
      },
      {
        test: /\.pug$/,
        use: {
            loader: 'pug-loader',
            options: {
              pretty: true
          }
        }
      },
    ],
  },
};
