/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  // build a wordDict map
  let wordSet = new Set(wordDict);
  // DP: truth value of substring up to i are word segmented
  const slen = s.length;
  const dp = new Array(slen + 1);
  dp[0] = true; // empty string is segmented
  for (let i = 1; i <= slen; ++i) {
    dp[i] = false;
    for (let j = 0; j < i; ++j) {
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true;
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
].forEach((t) => {
  const actual = wordBreak(t.s, t.wordDict);
  console.log('Break', t.s, 'by wordDict', t.wordDict, '->', actual);
  console.assert(actual === t.expected);
});
