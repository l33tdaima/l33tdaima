var LadderNode = function (word, depth, prev) {
  this.val = word;
  this.depth = depth;
  this.prev = prev;
};
var walkToRoot = function (p, beginWord) {
  let trace = [beginWord];
  while (p) {
    trace.push(p.val);
    p = p.prev;
  }
  return trace;
};
// Function to validate tranformation by computing the distance of two words
var validTransform = function (word1, word2) {
  let dist = 0;
  for (let i = 0; i < word1.length; ++i) {
    if (word1[i] !== word2[i]) dist++;
    if (dist > 1) return false;
  }
  return true;
};
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  // Step 1: Convert to a set
  let wordSet = new Set(wordList);
  // Corner cases
  if (!wordSet.has(endWord)) return [];
  if (validTransform(beginWord, endWord)) {
    return [[beginWord, endWord]];
  }
  let res = [],
    shortestPath = Number.MAX_SAFE_INTEGER;
  // Step 2: Build a tree and BFS for the solution candidates
  let root = new LadderNode(endWord, 2, null);
  let queue = [root];
  let wlen = endWord.length;
  while (queue.length > 0) {
    let p = queue.shift();
    let w = p.val;
    wordSet.delete(w);
    if (p.depth + 1 > shortestPath) break; // shortestPath has been found
    for (let i = 0; i < wlen; ++i) {
      for (let j = 0; j < 25; ++j) {
        // generate a candidate transformed word
        let t = w.slice(0, i) + ALPHABET[j] + w.slice(i + 1);
        if (wordSet.has(t)) {
          let ln = new LadderNode(t, p.depth + 1, p);
          queue.push(ln);
          // Do we have a solution?
          if (validTransform(beginWord, t)) {
            shortestPath = p.depth + 1;
            res.push(walkToRoot(ln, beginWord)); // append a solution
          }
        }
      }
    }
  }
  return res;
};
// TEST
[
  {
    beginword: 'm',
    endword: 'n',
    wordList: ['a', 'b', 'c'],
    expected: [],
  },
  {
    beginword: 'a',
    endword: 'c',
    wordList: ['a', 'b', 'c'],
    expected: [['a', 'c']],
  },
  {
    beginword: 'hit',
    endword: 'cog',
    wordList: ['hot', 'dot', 'dog', 'lot', 'log', 'cog'],
    expected: [
      ['hit', 'hot', 'dot', 'dog', 'cog'],
      ['hit', 'hot', 'lot', 'log', 'cog'],
    ],
  },
  {
    beginword: 'lop',
    endword: 'cog',
    wordList: ['hot', 'dot', 'dog', 'lot', 'log', 'cog'],
    expected: [['lop', 'log', 'cog']],
  },
  {
    beginword: 'dog',
    endword: 'bag',
    wordList: ['hot', 'dot', 'dog', 'lot', 'log', 'cog'],
    expected: [],
  },
  {
    beginword: 'dog',
    endword: 'hit',
    wordList: ['hot', 'dot', 'dog', 'lot', 'log', 'cog'],
    expected: [],
  },
  {
    beginword: 'hot',
    endword: 'dog',
    wordList: ['hot', 'dot', 'dog', 'lot', 'log', 'cog'],
    expected: [['hot', 'dot', 'dog']],
  },
  {
    beginword: 'hit',
    endword: 'dog',
    wordList: ['hot', 'dot', 'dog', 'lot', 'log', 'cog'],
    expected: [['hit', 'hot', 'dot', 'dog']],
  },
].forEach(({ expected, beginword, endword, wordList }) => {
  let actual = findLadders(beginword, endword, wordList);
  console.log('Word ladder from', beginword, 'to', endword, '->', actual);
  console.assert(actual.toString() === expected.toString());
});
