/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let dp = Array.from({ length: n + 1 }, (v, k) => 1);
  for (let i = 2; i <= n; ++i) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
var climbStairsFab = function (n) {
  let [a, b] = [1, 1];
  while (--n) {
    [a, b] = [b, a + b];
  }
  return b;
};
// TEST
for (let n = 1; n <= 45; ++n) {
  console.log(
    'There are',
    climbStairsFab(n),
    'ways to climb to the top of',
    n,
    'steps'
  );
  console.assert(climbStairs(n) === climbStairsFab(n));
}
