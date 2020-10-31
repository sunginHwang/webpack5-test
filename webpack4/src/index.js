import * as module from './module';
const sum = require('./commonJs').sum;

console.log(module.inner.a);
sum(1,2);

import { test } from './innerModule';
console.log(test());
