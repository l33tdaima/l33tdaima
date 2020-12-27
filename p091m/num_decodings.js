/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const isValid = (sub) => {
    if (sub.length > 0 && sub[0] !== '0') {
      let n = parseInt(sub);
      return n >= 1 && n <= 26;
    } else {
      return false;
    }
  };
  if (s === '') return 0;
  const len = s.length;
  const dp = Array.from({ length: len + 1 }, (v) => 0);
  dp[0] = 1;
  dp[1] = s[0] === '0' ? 0 : 1;
  for (let i = 2; i <= len; ++i) {
    if (isValid(s.substring(i - 1, i))) dp[i] += dp[i - 1];
    if (isValid(s.substring(i - 2, i))) dp[i] += dp[i - 2];
  }
  return dp[len];
};
// TEST
[
  ['12', 2],
  ['226', 3],
  ['', 0],
  ['1', 1],
  ['102', 1],
  ['1302', 0],
  ['123', 3],
  ['132', 2],
].forEach(([s, expected]) => {
  const actual = numDecodings(s);
  console.log('# of ways to decode' + s + '->', actual);
  console.assert(actual === expected);
});
