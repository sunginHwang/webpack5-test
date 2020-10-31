const path = require('path');

/* 다중 파일 dynamic 아웃풋 추출
const config = {
  module: {},
  mode: 'production',
  optimization:{
    minimize: true, // <---- disables uglify.
  }
};

const mathConfig = Object.assign({}, config, {
  name: 'math',
  entry: './src/math.js',
  output: {
    path: path.resolve(__dirname, 'dist/math'),
    filename: 'math-2.js',
  },
});
const innerConfig = Object.assign({}, config,{
  name: 'inner',
  entry: './src/inner.js',
  output: {
    path: path.resolve(__dirname, 'dist/page'),
    filename: 'inner-3.js',
  },
});

// Return Array of Configurations
module.exports = [
  mathConfig, innerConfig,
];*/

// 네이밍 패턴을 통한 multi entry 처리
module.exports = {
  entry: {
    'module/math/index': './src/math.js',
    'module/inner/index': './src/inner.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  mode: 'production',
  optimization:{
    minimize: true, // <---- disables uglify.
  }
};

/*
default
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  optimization:{
    minimize: true, // <---- disables uglify.
  }
};*/
