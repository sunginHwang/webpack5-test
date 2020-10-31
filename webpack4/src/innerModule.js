import { sum } from './math';

function usingSomething() {
  return sum(1,2);
}

export function test() {
  return usingSomething();
}
