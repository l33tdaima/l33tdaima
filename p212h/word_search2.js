/**
 * Constructor of the trie
 */
const Trie = function () {
  this.word = null;
  this.links = Array.from({ length: 26 }, (v) => null);
};
/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let curr = this;
  for (let i = 0; i < word.length; ++i) {
    let j = word.charCodeAt(i) - 97;
    if (!curr.links[j]) curr.links[j] = new Trie();
    curr = curr.links[j];
  }
  curr.word = word;
};

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  // build the trie from the words dictionary
  const trie = new Trie();
  for (let w of words) trie.insert(w);
  const ans = [];

  const recFind = function (i, j, ptrie) {
    const idx = board[i][j].charCodeAt(0) - 97;
    if (board[i][j] === '+' || ptrie.links[idx] === null) return;

    let pn = ptrie.links[idx];
    if (pn.word) {
      ans.push(pn.word);
      pn.word = null; // de-duplicate
    }

    let c = board[i][j];
    board[i][j] = '+';
    // DFS search for the next char
    if (i > 0) recFind(i - 1, j, pn);
    if (j > 0) recFind(i, j - 1, pn);
    if (i < board.length - 1) recFind(i + 1, j, pn);
    if (j < board[i].length - 1) recFind(i, j + 1, pn);
    board[i][j] = c;
  };

  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[i].length; ++j) {
      recFind(i, j, trie);
    }
  }
  return ans;
};

const t = (board, words, expected) => [board, words, expected];
[
  t(
    [
      ['o', 'a', 'a', 'n'],
      ['e', 't', 'a', 'e'],
      ['i', 'h', 'k', 'r'],
      ['i', 'f', 'l', 'v'],
    ],
    ['oath', 'pea', 'eat', 'rain', 'a'],
    ['oath', 'a', 'eat']
  ),
  t(
    [
      ['a', 'b'],
      ['c', 'd'],
    ],
    ['abcb'],
    []
  ),
].forEach(([board, words, expected]) => {
  const actual = findWords(board, words);
  console.log('Word search from', words, '->', actual);
  console.assert(actual.sort().toString() === expected.sort().toString());
});
