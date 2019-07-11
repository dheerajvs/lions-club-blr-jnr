const path = require('path');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      inline: false, // see: https://stackoverflow.com/a/41492420/165674
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
      new StaticSiteGeneratorPlugin({
        entry: 'build',
        globals: {
          window: {},
        },
        paths: ['/', '/about/', '/stories/', '/asha-deep/'],
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
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
    },
    module: {
      rules: [rules.js, rules.sass, rules.fonts],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    ],
  },
];
