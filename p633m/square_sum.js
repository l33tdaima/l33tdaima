/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let [a, b] = [0, ~~Math.sqrt(c)];
  while (a <= b) {
    let p = a * a + b * b;
    if (p === c) {
      return true;
    } else if (p < c) {
      a++;
    } else {
      b--;
    }
  }
  return false;
};
// TEST
[
  [5, true],
  [3, false],
  [4, true],
  [2, true],
  [1, true],
].forEach(([c, expected]) => {
  let actual = judgeSquareSum(c);
  console.log('Is', c, 'a square sum? ->', actual);
  console.assert(actual === expected);
});
