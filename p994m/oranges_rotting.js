/**
 * @param {number[][]} grid
 * @return {number}
 */
const [EMPTY, FRESH, ROTTEN] = [0, 1, 2];
const DIRS = [[-1, 0], [0, 1], [1, 0], [0, -1]];

var orangesRotting = function(grid) {
  console.assert(grid.length > 0 && grid[0].length > 0);
  let queue = new Array();
  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[i].length; ++j) {
      if (grid[i][j] === ROTTEN) queue.push([i, j]);
    }
  }
  let minutes = 0;
  while (queue.length > 0) {
    //console.log('minute', minutes, ':', queue);
    let next = new Array();
    for (let curr of queue) {
      for (let d of DIRS) {
        const [r, c] = [curr[0] + d[0], curr[1] + d[1]];
        if (r >= 0 && r < grid.length && grid[r][c] === FRESH) {
          grid[r][c] = ROTTEN;
          next.push([r, c]);
        }
      }
    }
    if (next.length > 0) minutes++;
    queue = next;
  }
  // Validate possibility
  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[i].length; ++j) {
      if (grid[i][j] === FRESH) return -1;
    }
  }
  return minutes;
};
// TESTS
[
  {
    grid: [[2, 1, 1], [1, 1, 0], [0, 1, 1]],
    expected: 4
  },
  {
    grid: [[2, 1, 1], [0, 1, 1], [1, 0, 1]],
    expected: -1
  },
  {
    grid: [[0, 2]],
    expected: 0
  },
  {
    grid: [[0]],
    expected: 0
  }
].forEach(t => {
  const actual = orangesRotting(t.grid);
  console.log('Mininum number of minutes elapse ->', actual);
  console.assert(actual === t.expected);
});
