const path = require('path');
/*// multui entry
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
};*/
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

module.exports = {
  entry: {
    commonjs: {
      import: './src/math.js',
      library: {
        type: 'commonjs-module'
      }
    },
    amd: {
      import: './src/math.js',
      library: {
        type: 'amd'
      }
    },
    umd: {
      import: './src/math.js',
      library: {
        type: 'umd'
      }
    }
  },
  output: { filename: '[name].js', path: __dirname + '/dist' },
  mode: 'production',
  optimization:{
    minimize: true,
  }
};


