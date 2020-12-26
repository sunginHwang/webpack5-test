
module.exports = {
  entry: {
    // filename 속성에 해당 entry 가 output 될 위치 및 파일이름을 구성해 적습니다.
    math: { import: './src/math.js', filename: 'pages/math/[name].js' },  // dist/pages/math/math.js
    inner: { import: './src/inner.js', filename: 'pages/inner/[name]-2.js' } // dist/pages/inner/inner-2.js
  },
  mode: 'production',
  optimization:{
    minimize: true,
  }
};
