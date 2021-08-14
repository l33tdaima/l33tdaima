/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let [rows, cols] = [matrix.length, matrix[0].length];
  let c00 = 1;
  for (let i = 0; i < rows; ++i) {
    if (matrix[i][0] === 0) c00 = 0;
    for (let j = 1; j < cols; ++j) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  // scan from bottom-right to avoid setting the first row too soon
  for (let i = rows - 1; i >= 0; --i) {
    for (let j = cols - 1; j >= 1; --j) {
      if (matrix[i][j] !== 0 && (matrix[i][0] === 0 || matrix[0][j] === 0)) {
        matrix[i][j] = 0;
      }
    }
    if (c00 === 0) matrix[i][0] = 0;
  }
};
// TEST
[
  [
    [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ],
    [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ],
  ],
  [
    [
      [0, 1, 2, 0],
      [3, 4, 5, 2],
      [1, 3, 1, 5],
    ],
    [
      [0, 0, 0, 0],
      [0, 4, 5, 0],
      [0, 3, 1, 0],
    ],
  ],
  [
    [
      [1, 2, 3, 4],
      [5, 0, 7, 8],
      [0, 10, 11, 12],
      [13, 14, 15, 0],
    ],
    [
      [0, 0, 3, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  ],
].forEach(([matrix, expected]) => {
  console.log('Set matrix', matrix);
  setZeroes(matrix);
  console.log('  ', matrix);
  console.assert(matrix.toString() === expected.toString());
});
