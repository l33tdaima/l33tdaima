/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  let len = s.length;
  // DP array of number way to decode
  let dp = Array.from({ length: len + 1 }, (v) => 0);

  dp[0] = 1;
  if (s[0] === '*') dp[1] = 9;
  else if (s[0] === '0') dp[1] = 0;
  else dp[1] = 1;

  for (let i = 2; i <= len; ++i) {
    // 1. Case for one char ahead
    let [c1, c2] = [s[i - 1], s[i - 2]];
    if (c1 === '*') {
      dp[i] += dp[i - 1] * 9;
    } else if (c1 >= '1') {
      dp[i] += dp[i - 1];
    } // ignore '0'
    // 2. Case for two chars ahead
    c = [s[i - 2], s[i - 1]];
    if (c2 === '1' && c1 === '*') {
      dp[i] += dp[i - 2] * 9;
    } else if (c2 === '2' && c1 === '*') {
      dp[i] += dp[i - 2] * 6;
    } else if (c2 === '*' && c1 === '*') {
      dp[i] += dp[i - 2] * 15;
    } else if (c2 === '*' && c1 !== '*' && c1 >= '7') {
      dp[i] += dp[i - 2];
    } else if (c2 === '*' && c1 !== '*' && c1 <= '6') {
      dp[i] += dp[i - 2] * 2;
    } else if (c2 === '1' || (c2 === '2' && c1 <= '6')) {
      // && parseInt(c) <= 26) {
      dp[i] += dp[i - 2];
    }
    dp[i] %= 1000000007;
  }
  return dp[len];
};
// TEST
[
  ['*', 9],
  ['1*', 18],
  ['2*', 15],
  ['2', 1],
  ['12', 2],
  ['*9', 10],
  ['123', 3],
  ['132', 2],
  ['19*798112', 60],
].forEach(([s, expected]) => {
  const actual = numDecodings(s);
  console.log('# of ways to decoding', s, '->', actual);
  console.assert(actual === expected);
});
