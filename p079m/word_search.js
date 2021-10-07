/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const visited = Array.from(board, (r) => Array.from(r, (c) => false));
  const [rows, cols] = [board.length, board[0].length];

  // Check if word starting from [iw] available starting board[ib, jb],
  // board, word are accessed under closure
  const recExist = function (i, j, c) {
    if (c === word.length) return true;
    if (i < 0 || j < 0 || i >= rows || j >= cols) return false;
    if (visited[i][j] || board[i][j] !== word[c]) return false;

    visited[i][j] = true;
    // DFS search for the next char with backtracking
    const found =
      recExist(i - 1, j, c + 1) || // up
      recExist(i, j - 1, c + 1) || // left
      recExist(i + 1, j, c + 1) || // down
      recExist(i, j + 1, c + 1); // right
    visited[i][j] = false;
    return found;
  };

  // Initiate the search
  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[i].length; ++j) {
      if (recExist(i, j, 0)) return true;
    }
  }
  return false;
};
// TEST
[
  [
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCCED',
    true,
  ],
  [
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'SEE',
    true,
  ],
  [
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCB',
    false,
  ],
].forEach(([board, word, expected]) => {
  const actual = exist(board, word);
  console.log('Word', word, 'exist in the board ->', actual);
  console.assert(actual === expected);
});
