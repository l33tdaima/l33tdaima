/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const dp = Array.from({ length: text2.length + 1 }, (v) => 0);
  for (let i = 1; i <= text1.length; ++i) {
    let prev = 0;
    for (let j = 1; j <= text2.length; ++j) {
      let temp = dp[j];
      if (text1[i - 1] === text2[j - 1]) dp[j] = prev + 1;
      else dp[j] = Math.max(dp[j - 1], dp[j]);
      prev = temp;
    }
  }
  return dp[text2.length];
};
// TESTS
[
  ['a', 'c', 0],
  ['a', 'a', 1],
  ['abcde', 'ace', 3],
  ['abc', 'abc', 3],
  ['abc', 'def', 0],
].forEach((t) => {
  const actual = longestCommonSubsequence(t[0], t[1]);
  console.log('Length of LCS between', t[0], t[1], '->', actual);
  console.assert(actual === t[2]);
});
