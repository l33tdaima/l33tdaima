var findDiagonalOrder = function (matrix) {
  const ans = [];
  let maxRow = matrix.length - 1;
  let maxCol = matrix[0] && matrix[0].length - 1;

  for (let order = 0; order <= maxRow + maxCol; ++order) {
    for (let i = 0; i <= order; ++i) {
      if (order % 2 === 0) {
        if (order - i <= maxRow && i < matrix[order - i].length)
          ans.push(matrix[order - i][i]);
      } else {
        if (i <= maxRow && order - i < matrix[i].length)
          ans.push(matrix[i][order - i]);
      }
    }
  }
  return ans;
};

[
  [[], []],
  [
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [1, 2, 4, 7, 5, 3, 6, 8, 9],
  ],
  [
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ],
    [1, 2, 5, 9, 6, 3, 4, 7, 10, 11, 8, 12],
  ],
].forEach(([matrix, expected]) => {
  const actual = findDiagonalOrder(matrix);
  console.log('Diagonal order of', matrix, '->', actual);
  console.assert(actual.toString() === expected.toString());
});
