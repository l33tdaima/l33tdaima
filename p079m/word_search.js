/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const used = Array.from(board, (r) => Array.from(r, (c) => false));
  const [rows, cols] = [board.length, board[0].length];

  // Check if word starting from [iw] available starting board[ib, jb],
  // board, word are accessed under closure
  const recExist = function (ib, jb, iw) {
    if (iw === word.length) return true;
    if (ib < 0 || jb < 0 || ib >= rows || jb >= cols) return false;
    if (used[ib][jb] || board[ib][jb] !== word[iw]) return false;

    used[ib][jb] = true;
    // DFS search for the next char with backtracking
    const found =
      recExist(ib - 1, jb, iw + 1) || // up
      recExist(ib, jb - 1, iw + 1) || // left
      recExist(ib + 1, jb, iw + 1) || // down
      recExist(ib, jb + 1, iw + 1); // right
    used[ib][jb] = false;
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
].forEach((t) => {
  const actual = exist(t[0], t[1]);
  console.log('Word', t[1], 'exist in the board ->', actual);
  console.assert(actual === t[2]);
});
