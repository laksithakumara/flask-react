var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode:'production',
  context: __dirname,
  entry: {
    style: './src/scss/app.scss',
    app: './src/js/index',
  },
  output: {
    path: __dirname + "/static/bundles/",
    publicPath: './static/bundles/',
    filename: "js/[name]-[hash].js",
    chunkFilename: 'js/[name].[contenthash].js'
  },
  plugins: [
    new BundleTracker({ filename: './webpack-stats.json' }),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name]-[hash].css",
      allChunks: true,
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial",
          enforce: true
        },
      },
    },
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},
      {
        test: /(\.scss$)|(\.css$)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
              sourceMap: true
            },
          },
          'css-loader',
          "resolve-url-loader",
          'sass-loader',
        ],
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: ['url-loader?limit=100000'] }
    ],
  },

  resolve: {
    modules: ['node_modules', 'bower_components'],
    extensions: [ '.jsx', '.js', '.json' ]
  },
}