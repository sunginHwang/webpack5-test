/*
import * as module from './module';
const get = require('lodash').get();
const sum = require('./commonJs').sum;
const test = { a: 1};
console.log(module.inner.a);
sum(1,2);
console.log(get(test, 'a'));
*/

import { test } from './innerModule';
console.log(test());
