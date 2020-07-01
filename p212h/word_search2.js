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
  const result = [];

  const recFind = function (ib, jb, ptrie) {
    const idx = board[ib][jb].charCodeAt(0) - 97;
    if (board[ib][jb] === '+' || ptrie.links[idx] === null) return;

    let pn = ptrie.links[idx];
    if (pn.word) {
      result.push(pn.word);
      pn.word = null; // de-duplicate
    }

    let c = board[ib][jb];
    board[ib][jb] = '+';
    // DFS search for the next char
    if (ib > 0) recFind(ib - 1, jb, pn);
    if (jb > 0) recFind(ib, jb - 1, pn);
    if (ib < board.length - 1) recFind(ib + 1, jb, pn);
    if (jb < board[ib].length - 1) recFind(ib, jb + 1, pn);
    board[ib][jb] = c;
  };

  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[i].length; ++j) {
      recFind(i, j, trie);
    }
  }
  return result;
};

const board = [
  ['o', 'a', 'a', 'n'],
  ['e', 't', 'a', 'e'],
  ['i', 'h', 'k', 'r'],
  ['i', 'f', 'l', 'v'],
];
const words = ['oath', 'pea', 'eat', 'rain', 'a'];
const res = findWords(board, words);
console.log('Word search results', res);
