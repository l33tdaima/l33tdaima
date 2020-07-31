/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict);
  const slen = s.length;
  // We need a Word Break I to do a sanity check if s is breakable, just to avoid MLE from OJ
  let dp = new Array(slen + 1);
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
  if (!dp[slen]) return [];

  // DP memorization map
  const dpMap = new Map();
  dpMap.set(0, ['']);
  for (let i = 1; i <= slen; ++i) {
    let memo = [];
    for (let j = 0; j < i; ++j) {
      let substr = s.substring(j, i);
      if (dpMap.has(j) && wordSet.has(substr)) {
        // memorize it
        dpMap.get(j).forEach((v) => {
          memo.push((v === '' ? '' : v + ' ') + substr);
        });
      }
    }
    if (memo.length > 0) dpMap.set(i, Array.from(memo));
  }
  return dpMap.has(slen) ? dpMap.get(slen) : [];
};
// TEST
[
  {
    s: 'catsanddog',
    wordDict: ['cat', 'cats', 'and', 'sand', 'dog'],
  },
  {
    s: 'pineapplepenapple',
    wordDict: ['apple', 'pen', 'applepen', 'pine', 'pineapple'],
  },
  {
    s: 'catsandog',
    wordDict: ['cats', 'dog', 'sand', 'and', 'cat'],
  },
  {
    s: 'aaaaaa',
    wordDict: [
      'a',
      'aa',
      'aaa',
      'aaaa',
      'aaaaa',
      'aaaaaa',
      'aaaaaaa',
      'aaaaaaaa',
      'aaaaaaaaa',
      'aaaaaaaaaa',
    ],
  },
  {
    s: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
    wordDict: [
      'a',
      'aa',
      'aaa',
      'aaaa',
      'aaaaa',
      'aaaaaa',
      'aaaaaaa',
      'aaaaaaaa',
      'aaaaaaaaa',
      'aaaaaaaaaa',
    ],
  },
].forEach((t) => {
  console.log('Word break for', t.s, '->', wordBreak(t.s, t.wordDict));
});
