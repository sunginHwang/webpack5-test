import { sum } from './math';

function usingSomething() {
  console.log('usingSomething');
  return sum(1,2);
}

export function test() {
  console.log('test');
  return usingSomething();
}
