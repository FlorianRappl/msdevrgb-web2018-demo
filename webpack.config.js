module.exports = {
  entry: [
    './src/app',
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'app.js',
  },
  devServer: {
    contentBase: './dist',
  },
};
