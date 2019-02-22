/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // dp[i] is # of ways to climb i steps
  let dp = Array.from({ length: n + 1 }, (v, k) => k); // such that [1,2,...]
  for (let i = 3; i <= n; ++i) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
var climbStairsFab = function(n) {
  let [a, b] = [1, 1];
  while (n--) {
    let t = a;
    a = a + b;
    b = t;
  }
  return b;
};
// TEST
for (let n = 1; n <= 20; ++n) {
  console.log(
    "There are",
    climbStairsFab(n),
    "ways to climb to the top of",
    n,
    "steps"
  );
  console.assert(climbStairs(n) === climbStairsFab(n));
}
