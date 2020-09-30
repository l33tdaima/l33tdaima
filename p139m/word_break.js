/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let wordSet = new Set(wordDict); // build a wordDict set
  // DP: truth value of substring of length l are word segmented
  const slen = s.length;
  const dp = [true].concat(Array.from({ length: s.length }, (v) => false));
  for (let l = 1; l <= s.length; ++l) {
    for (let i = 0; i < l; ++i) {
      if (dp[i] && wordSet.has(s.substring(i, l))) {
        dp[l] = true;
        break;
      }
    }
  }
  return dp[slen];
};
//TEST
[
  { s: 'l', wordDict: ['let'], expected: false },
  { s: 'gogo', wordDict: ['go', 'code'], expected: true },
  { s: 'leetcode', wordDict: ['leet', 'code'], expected: true },
  { s: 'applepenapple', wordDict: ['apple', 'pen'], expected: true },
  {
    s: 'catsandog',
    wordDict: ['cats', 'dog', 'sand', 'and', 'cat'],
    expected: false,
  },
].forEach(({ s, wordDict, expected }) => {
  const actual = wordBreak(s, wordDict);
  console.log('Break', s, 'by wordDict', wordDict, '->', actual);
  console.assert(actual === expected);
});
