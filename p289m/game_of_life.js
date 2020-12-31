/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const [rows, cols] = [board.length, board[0].length];
  // Count the live neighbors of a given cell
  // closure: board, rows, cols
  const countLiveNeighbors = (row, col) => {
    let count = 0;
    for (let i = row - 1; i <= row + 1; ++i) {
      for (let j = col - 1; j <= col + 1; ++j) {
        if (i >= 0 && i < rows && j >= 0 && j < cols) {
          count += board[i][j] & 1;
        }
      }
    }
    return count - (board[row][col] & 1);
  };

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      let ln = countLiveNeighbors(i, j);
      if ((board[i][j] & 1) === 0) {
        // from dead
        board[i][j] = ln === 3 ? 2 : 0;
      } else {
        // from live
        board[i][j] = ln < 2 || ln > 3 ? 1 : 3;
      }
    }
  }
  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      board[i][j] = board[i][j] >> 1;
    }
  }
};
// TEST
[
  [
    [
      [1, 1],
      [1, 0],
    ],
    [
      [1, 1],
      [1, 1],
    ],
  ],
  [
    [
      [0, 1, 0],
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0],
    ],
    [
      [0, 0, 0],
      [1, 0, 1],
      [0, 1, 1],
      [0, 1, 0],
    ],
  ],
].forEach(([board, expected]) => {
  console.log('Before transition ->', board);
  gameOfLife(board);
  console.log('After transition ->', board);
  console.assert(board.toString() === expected.toString());
  console.log('======');
});
