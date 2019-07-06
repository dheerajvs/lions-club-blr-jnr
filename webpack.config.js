const path = require('path');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    build: './src/build.js',
    index: './src/index.js',
  },
  output: {
    filename: 'js/[name].js',
    libraryTarget: 'umd',
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      pages: path.resolve(__dirname, 'src/pages/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new StaticSiteGeneratorPlugin({
      entry: 'build',
      globals: {
        window: {},
      },
      paths: ['/', '/about/', '/stories/', '/asha-deep/'],
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
};
