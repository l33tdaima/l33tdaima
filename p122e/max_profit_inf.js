/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let ans = 0;
  for (let i = 1; i < prices.length; ++i) {
    if (prices[i] > prices[i - 1]) {
      ans += prices[i] - prices[i - 1];
    }
  }
  return ans;
};
var maxProfit_DP = function (prices) {
  let [dpClosed, dpOpen] = [0, Number.MIN_SAFE_INTEGER];
  for (let p of prices) {
    let tmp = dpClosed;
    dpClosed = Math.max(dpClosed, dpOpen + p);
    dpOpen = Math.max(dpOpen, tmp - p);
  }
  return dpClosed;
};
// TEST
[
  [[1], 0],
  [[7, 1, 5, 3, 6, 4], 7],
  [[1, 2, 3, 4, 5], 4],
  [[7, 6, 4, 3, 1], 0],
].forEach((t) => {
  const actual = maxProfit(t[0]);
  console.log('Max profit by Inf transaction in', t[0], '->', actual);
  console.assert(actual === t[1]);
  console.assert(maxProfit_DP(t) === t[1]);
});
