const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');

const plugins = {
  common: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new CopyPlugin([{ from: '**/*', to: '', context: 'src/static/' }]),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new StaticSiteGeneratorPlugin({
      entry: 'build',
      globals: {
        window: {},
      },
      paths: ['/', '/about/', '/stories/', '/asha-deep/', '/404.html'],
    }),
  ],
  development: [
    new BrowserSyncPlugin({
      host: 'localhost',
      open: false,
      port: 8080,
      server: { baseDir: ['dist'] },
    }),
  ],
  production: [
    new GenerateSW({
      exclude: [/\.map$/, /^manifest.*\.js$/, 'build.js', /\.jpg$/, /fonts\/*/],
      importWorkboxFrom: 'local',
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
};

module.exports = (env, argv) => ({
  entry: {
    build: './src/build.js',
    index: './src/index.js',
  },
  output: {
    filename: '[name].js',
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
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /(\.png|_url\.svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              name: '[name].[ext]',
              outputPath: 'img/',
            },
          },
        ],
      },
      {
        test: /\.jpe?g$/i,
        use: [
          {
            loader: 'lqip-loader',
            options: {
              base64: true,
              palette: false,
            },
          },
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              name: '[name].[ext]',
              outputPath: 'img/',
            },
          },
        ],
      },
    ],
  },
  plugins: plugins.common.concat(
    argv.mode === 'development'
      ? plugins.development
      : argv.mode === 'production'
      ? plugins.production
      : []
  ),
});
