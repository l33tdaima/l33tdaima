/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwoV1 = function (n) {
  if (n <= 0) return false;
  let ones = 0;
  while (n !== 0) {
    if ((n & 1) === 1 && ++ones > 1) return false;
    n = n >> 1;
  }
  return ones === 1;
};
var isPowerOfTwoV2 = function (n) {
  return n > 0 && (n & (n - 1)) === 0;
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
].forEach((t) => {
  const actual = isPowerOfTwoV1(t[0]);
  console.log('Is', t[0], 'power of 2? ->', actual);
  console.assert(actual == t[1]);
  console.assert(t[1] == isPowerOfTwoV2(t[0]));
});
