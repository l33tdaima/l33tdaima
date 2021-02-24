/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let [row, col, n] = [matrix.length - 1, 0, matrix[0].length];
  while (row >= 0 && col < n) {
    let cv = matrix[row][col];
    if (cv === target) return true;
    if (cv > target) row--;
    else col++;
  }
  return false;
};
// TESTS
const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
[
  [0, false],
  [1, true],
  [5, true],
  [16, true],
  [20, false],
  [99, false],
].forEach(([target, expected]) => {
  const actual = searchMatrix(matrix, target);
  console.log('Search target', target, 'in matrix ->', actual);
  console.assert(actual === expected);
});
