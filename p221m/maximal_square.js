/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  if (matrix.length == 0) return 0;
  const dp = Array.from({ length: matrix.length + 1 }, (r) =>
    Array.from({ length: matrix[0].length + 1 }, (c) => 0)
  );
  let maxsqlen = 0;
  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[0].length; ++j) {
      if (matrix[i][j] === '1') {
        dp[i + 1][j + 1] = Math.min(dp[i][j], dp[i + 1][j], dp[i][j + 1]) + 1;
        if (dp[i + 1][j + 1] > maxsqlen) maxsqlen = dp[i + 1][j + 1];
      }
    }
  }
  return maxsqlen * maxsqlen;
};
// TEST
[
  [[], 0],
  [[['1']], 1],
  [
    [
      ['0', '1'],
      ['1', '0'],
    ],
    1,
  ],
  [
    [
      ['1', '0', '1', '0', '0'],
      ['1', '0', '1', '1', '1'],
      ['1', '1', '1', '1', '1'],
      ['1', '0', '0', '1', '0'],
    ],
    4,
  ],
].forEach((t) => {
  const actual = maximalSquare(t[0]);
  console.log('Maximum of square area ->', actual);
  console.assert(actual === t[1]);
});
