/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let ans = 0;
  for (let i = 1, len = prices.length; i < len; ++i) {
    if (prices[i] > prices[i - 1]) {
      ans += prices[i] - prices[i - 1];
    }
  }
  return ans;
};
var maxProfit_DP = function(prices) {
  let dpClosed = 0,
    dpOpen = Number.MIN_SAFE_INTEGER;
  for (let p of prices) {
    let tmp = dpClosed;
    dpClosed = Math.max(dpClosed, dpOpen + p);
    dpOpen = Math.max(dpOpen, tmp - p);
    // console.log("price =", p, ", dpClosed =", dpClosed, ", dpOpen =", dpOpen);
  }
  return dpClosed;
};
// TEST
[[1], [7, 1, 5, 3, 6, 4], [7, 6, 4, 3, 1]].forEach(t => {
  console.log('Max profit by Inf transaction in', t, '->', maxProfit(t));
  console.assert(maxProfit_DP(t) === maxProfit(t));
});
