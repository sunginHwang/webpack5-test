// const { sum }  = require('./commonJs'); 방식으로 가져오게 되면 webpack5 에서도 트리쉐이킹을 지원하지 않습니다.
const sum = require('./commonJs').sum;
sum(1,2);
