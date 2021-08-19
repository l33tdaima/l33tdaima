/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const dp = Array.from({ length: s.length + 1 }, (v) => 0);
  dp[0] = 1;
  dp[1] = s[0] !== '0' ? 1 : 0;
  for (let i = 2; i <= s.length; ++i) {
    let sm2 = parseInt(s.substring(i - 2, i));
    dp[i] = (s[i - 1] > '0') * dp[i - 1] + (sm2 >= 10 && sm2 <= 26) * dp[i - 2];
  }
  return dp[s.length];
};
// TEST
[
  ['12', 2],
  ['226', 3],
  ['1', 1],
  ['102', 1],
  ['1302', 0],
  ['123', 3],
  ['132', 2],
].forEach(([s, expected]) => {
  const actual = numDecodings(s);
  console.log('# of ways to decode', s, '->', actual);
  console.assert(actual === expected);
});
