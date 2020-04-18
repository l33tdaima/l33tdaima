/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // Walk one island
  var recWalkIsland = function (i, j) {
    grid[i][j] = 'x'; // mark this cell
    if (i > 0 && grid[i - 1][j] === '1') recWalkIsland(i - 1, j);
    if (j > 0 && grid[i][j - 1] === '1') recWalkIsland(i, j - 1);
    if (i < rows - 1 && grid[i + 1][j] === '1') recWalkIsland(i + 1, j);
    if (j < cols - 1 && grid[i][j + 1] === '1') recWalkIsland(i, j + 1);
  };

  const rows = grid.length;
  if (rows === 0) return 0;
  const cols = grid[0].length;
  let ans = 0;
  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      if (grid[i][j] === '1') {
        recWalkIsland(i, j);
        ans++;
      }
    }
  }
  return ans;
};
// TEST
[
  [['1']],

  [
    ['0', '0'],
    ['1', '1'],
  ],

  [
    ['0', '1'],
    ['1', '0'],
  ],

  [
    ['0', '1', '0', '0'],
    ['1', '1', '1', '0'],
    ['0', '1', '0', '0'],
    ['1', '1', '0', '0'],
  ],

  [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ],
].forEach((t) => {
  console.log('Numbers of islands ->', numIslands(t));
});
