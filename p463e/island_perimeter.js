/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  const [rows, cols] = [grid.length, grid[0].length];
  let ans = 0;
  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      if (grid[i][j] === 1) {
        ans += 4;
        if (i < rows - 1 && grid[i + 1][j] === 1) ans -= 2;
        if (j < cols - 1 && grid[i][j + 1] === 1) ans -= 2;
      }
    }
  }
  return ans;
};
// TEST
[
  [[1]],

  [
    [0, 0],
    [1, 1],
  ],

  [
    [0, 1],
    [1, 1],
  ],

  [
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ],
].forEach((t) => {
  console.log('Perimeter of the island ->', islandPerimeter(t));
});
