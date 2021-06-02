/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let [rows, cols] = [grid.length, grid[0].length];

  // DFS measure function with closure of grid
  const dfs = (i, j) => {
    // mark this point counted by changing from 1 to 2
    if (i >= 0 && i < rows && j >= 0 && j < cols && grid[i][j] == 1) {
      grid[i][j]++;
      return 1 + dfs(i - 1, j) + dfs(i, j - 1) + dfs(i + 1, j) + dfs(i, j + 1);
    } else return 0;
  };
  let maxArea = 0;
  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      if (grid[i][j] === 1) maxArea = Math.max(maxArea, dfs(i, j));
    }
  }
  return maxArea;
};
// TEST
[
  [
    [
      [0, 1],
      [1, 1],
    ],
    3,
  ],

  [
    [
      [0, 0],
      [1, 1],
    ],
    2,
  ],

  [[[0, 0, 0, 0, 0, 0, 0, 0]], 0],

  [[[0, 0, 1, 0, 0, 1, 1, 0]], 2],

  [
    [
      [0, 0, 1, 0],
      [0, 1, 1, 0],
      [1, 0, 0, 0],
      [1, 0, 1, 0],
    ],
    3,
  ],

  [
    [
      [0, 1, 1, 1, 0],
      [0, 1, 0, 1, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
    ],
    8,
  ],

  [
    [
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    ],
    6,
  ],
].forEach(([grid, expected]) => {
  const actual = maxAreaOfIsland(grid);
  console.log('Max area of island ->', actual);
  console.assert(expected === actual);
});
