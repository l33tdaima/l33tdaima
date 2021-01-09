/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;
  // BFS for the shortest distance
  const queue = [[endWord, 1]];
  wordSet.delete(endWord);
  while (queue.length > 0) {
    let [w, dist] = queue.shift();
    for (let i = 0; i < w.length; ++i) {
      for (let c of ALPHABET) {
        // generate a possible tranformed word
        let t = w.slice(0, i) + c + w.slice(i + 1);
        if (t === beginWord) return dist + 1;
        if (wordSet.has(t)) {
          queue.push([t, dist + 1]);
          wordSet.delete(t);
        }
      }
    }
  }
  return 0;
};
// TESTS
[
  {
    begin: 'm',
    end: 'n',
    wordList: ['a', 'b', 'c'],
    expected: 0,
  },
  {
    begin: 'a',
    end: 'c',
    wordList: ['a', 'b', 'c'],
    expected: 2,
  },
  {
    begin: 'hot',
    end: 'dog',
    wordList: ['hot', 'dog'],
    expected: 0,
  },
  {
    begin: 'hit',
    end: 'cog',
    wordList: ['hot', 'dot', 'dog', 'lot', 'log', 'cog'],
    expected: 5,
  },
  {
    begin: 'lag',
    end: 'cog',
    wordList: ['hot', 'dot', 'dog', 'lot', 'log', 'cog'],
    expected: 3,
  },
  {
    begin: 'dog',
    end: 'bag',
    wordList: ['hot', 'dot', 'dog', 'lot', 'log', 'cog'],
    expected: 0,
  },
  {
    begin: 'dog',
    end: 'hit',
    wordList: ['hot', 'dot', 'dog', 'lot', 'log', 'cog'],
    expected: 0,
  },
  {
    begin: 'hot',
    end: 'dog',
    wordList: ['hot', 'dot', 'dog', 'lot', 'log', 'cog'],
    expected: 3,
  },
  {
    begin: 'hit',
    end: 'dog',
    wordList: ['hot', 'dot', 'dog', 'lot', 'log', 'cog'],
    expected: 4,
  },
].forEach(({ begin, end, wordList, expected }) => {
  const actual = ladderLength(begin, end, wordList);
  console.log(
    "Shortest sequence from '" + begin + "' to '" + end + "' ->",
    actual
  );
  console.assert(actual === expected);
});
