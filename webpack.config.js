const path = require('path');

module.exports = {
  entry: './src/index.js',  // your main JS file
  output: {
    filename: 'bundle.js',  // bundled JS output file
    path: path.resolve(__dirname, 'public'), // output directory to serve from
    publicPath: '/', // public URL of the output directory when referenced in a browser
  },
  module: {
    rules: [
      {
        test: /\.css$/i,  // for CSS files
        use: ['style-loader', 'css-loader'], // load and inject CSS
      },
      {
        test: /\.js$/,  // for JS files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // optional: if you want to transpile ES6+
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,  // for images or favicon
        type: 'asset/resource',
        generator: {
          filename: 'assets/[hash][ext][query]'
        }
      }
    ],
  },
  devtool: 'source-map',  // optional: for easier debugging
  mode: 'development', // or 'production' before deploying
};