/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let n = matrix.length;
  // Round 1: swap up down
  for (let i = 0; i < ~~(n / 2); ++i)
    [matrix[i], matrix[n - 1 - i]] = [matrix[n - 1 - i], matrix[i]];
  // Round 2: swap diagonally
  for (let i = 0; i < n; ++i)
    for (let j = i + 1; j < n; ++j)
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
};
// TEST
const f = (x, y) => [x, y];
[
  f(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]
  ),
  f(
    [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ],
    [
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ]
  ),
  f([[1]], [[1]]),
  f(
    [
      [1, 2],
      [3, 4],
    ],
    [
      [3, 1],
      [4, 2],
    ]
  ),
].forEach(([matrix, expected]) => {
  rotate(matrix);
  console.assert(matrix.toString() === expected.toString());
});
