
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
    },
    app: { import: './src/math.js', dependOn: 'react-vendors' },
    'react-vendors': ['react', 'react-dom', 'prop-types']
  },
  output: { filename: '[name].js', path: __dirname + '/dist' },
  mode: 'production',
  optimization:{
    minimize: true,
  }
};
