const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const rules = {
  js: {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  },
  sass: {
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
  fonts: {
    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/',
        },
      },
    ],
  },
};

module.exports = [
  {
    entry: {
      build: './src/build.js',
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
      rules: [rules.js],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new StaticSiteGeneratorPlugin({
        entry: 'build',
        globals: {
          window: {},
        },
        paths: ['/', '/about/', '/stories/', '/asha-deep/'],
      }),
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 8080,
        server: { baseDir: ['dist'] },
      }),
    ],
  },
  {
    entry: {
      index: './src/index.js',
    },
    output: {
      filename: '[name].js',
    },
    module: {
      rules: [rules.js, rules.sass, rules.fonts],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new CopyPlugin([{ from: '**/*', to: '', context: 'src/static/' }]),
    ],
  },
];
