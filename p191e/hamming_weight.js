/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let ans = 0;
  while (n) {
    n &= n - 1;
    ans++;
  }
  return ans;
};
// TEST
[
  [0b00000000000000000000000000001011, 3],
  [0b00000000000000000000000010000000, 1],
  [0b11111111111111111111111111111101, 31],
].forEach(([n, expected]) => {
  const actual = hammingWeight(n);
  console.log('Hamming weight of', n.toString(2), '->', actual);
  console.assert(actual === expected);
});
