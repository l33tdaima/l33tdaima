/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const ans = [0];
  for (let i = 1; i <= n; ++i) {
    let least = Number.MAX_SAFE_INTEGER;
    for (let k = 1; k * k <= i; ++k)
      least = Math.min(least, ans[i - k * k] + 1);
    ans.push(least);
  }
  return ans[n];
};
// TESTS
[
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 1],
  [5, 2],
  [6, 3],
  [7, 4],
  [8, 2],
  [12, 3],
  [13, 2],
].forEach(([n, expected]) => {
  const actual = numSquares(n);
  console.log('The least # of squares sum to', n, '->', actual);
  console.assert(actual === expected);
});
