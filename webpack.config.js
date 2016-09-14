module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist/',
    filename: 'index.js',
    publicPath: '/dist/'
  },
  devtool: '#source-map',
  devServer: {
    contentBase: './',
    port:3000
  },
  module: {
    preloaders: [
      {
        teset: /\.js$/,
        exclue: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        teset: /\.js$/,
        exclue: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  eslint: {
    configFile: './.eslintrc'
  }
};
