/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const dp = Array.from({ length: matrix.length + 1 }, (r) =>
    Array.from({ length: matrix[0].length + 1 }, (c) => 0)
  );
  let maxsqlen = 0;
  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[0].length; ++j) {
      if (matrix[i][j] === '1') {
        dp[i + 1][j + 1] = Math.min(dp[i][j], dp[i + 1][j], dp[i][j + 1]) + 1;
        maxsqlen = Math.max(maxsqlen, dp[i + 1][j + 1]);
      }
    }
  }
  return maxsqlen * maxsqlen;
};
// TEST
[
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
].forEach(([matrix, expected]) => {
  const actual = maximalSquare(matrix);
  console.log('Maximum of square area in', matrix, '->', actual);
  console.assert(actual === expected);
});
