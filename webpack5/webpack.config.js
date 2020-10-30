const path = require('path');

module.exports = {
  entry: {
    math: { import: './src/math.js', filename: 'pages/math/[name].js' },
    inner: { import: './src/inner.js', filename: 'pages/inner/[name]-2.js' }
  },
  output: { filename: '[name].js', path: __dirname + '/dist' },
  mode: 'production',
  optimization:{
    minimize: true,
  }
};
/*
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  optimization:{
    minimize: true,
  }
};
*/
