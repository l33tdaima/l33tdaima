/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let [count, xor] = [0, x ^ y];
  while (xor) {
    count++;
    xor &= xor - 1;
  }
  return count;
};
// TEST
[
  [1, 1, 0],
  [2, 3, 1],
  [1, 4, 2],
  [4, 8, 2],
  [4, 9, 3],
  [4, 10, 3],
  [1, 19091801, 10],
].forEach(([x, y, expected]) => {
  actual = hammingDistance(x, y);
  console.log('Hamming distance of', x, y, '->', actual);
  console.assert(actual === expected);
});
