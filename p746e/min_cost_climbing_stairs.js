/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let len = cost.length;
  let dp = Array.from(cost);
  // dp[i] accumlated min cost if step i is stepped on
  for (let i = 2; i < len; ++i) {
    dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
  }
  return Math.min(dp[len - 1], dp[len - 2]);
};
// TEST
[
  [[3, 1], 1],
  [[1, 4], 1],
  [[10, 15, 20], 15],
  [[1, 100, 1, 1, 1, 100, 1, 1, 100, 1], 6],
].forEach(([cost, expected]) => {
  const actual = minCostClimbingStairs(cost);
  console.log('Min cost climbing', cost, '->', actual);
  console.assert(actual === expected);
});
