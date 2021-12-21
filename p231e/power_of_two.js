/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  return n > 0 && n - (n & -n) === 0;
};
// TEST
[
  [0, false],
  [1, true],
  [2, true],
  [5, false],
  [10, false],
  [16, true],
  [218, false],
].forEach(([n, expected]) => {
  const actual = isPowerOfTwo(n);
  console.log('Is', n, 'power of 2? ->', actual);
  console.assert(actual == expected);
});
