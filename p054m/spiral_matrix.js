/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const ans = [];
  let [rowBegin, rowEnd, colBegin, colEnd] = [
    0,
    matrix.length - 1,
    0,
    matrix[0].length - 1,
  ];
  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    for (let j = colBegin; j <= colEnd; ++j) ans.push(matrix[rowBegin][j]);
    rowBegin++;
    for (let i = rowBegin; i <= rowEnd; ++i) ans.push(matrix[i][colEnd]);
    colEnd--;
    if (rowBegin <= rowEnd) {
      for (let j = colEnd; j >= colBegin; --j) ans.push(matrix[rowEnd][j]);
      rowEnd--;
    }
    if (colBegin <= colEnd) {
      for (let i = rowEnd; i >= rowBegin; --i) ans.push(matrix[i][colBegin]);
      colBegin++;
    }
  }
  return ans;
};
// TEST
[
  [
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [1, 2, 3, 6, 9, 8, 7, 4, 5],
  ],
  [
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ],
    [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7],
  ],
].forEach(([matrix, expected]) => {
  const actual = spiralOrder(matrix);
  console.log('Spiral order of', matrix, '->', actual);
  console.assert(actual.toString() === expected.toString());
});
