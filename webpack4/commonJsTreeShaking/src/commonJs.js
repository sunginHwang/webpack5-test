
module.exports.sum = function(a, b) {
  console.log('[CALL] sum function');
  return a + b;
}

module.exports.minus = function(a, b) {
  console.log('[CALL] minus function');
  return a - b
}

/* 미 지원 양식

function sum(a, b) {
  console.log('[CALL] sum function');
  return a + b;
}

function minus(a, b) {
  console.log('[CALL] minus function');
  return a - b
}

module.exports = {
  sum,
  minus,
}
*/

