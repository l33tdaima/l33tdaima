/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit_Functional = function(prices) {
    // dp[0] is max profit for closed position
    // dp[1] is max profit for open position
    let ans = prices.reduce((dp, p) =>
        [ Math.max(dp[0], p - dp[1]),
          Math.min(dp[1], p) ],
        [0, Number.MAX_SAFE_INTEGER]);
    return ans[0];
};
var maxProfit = function(prices) {
    let maxClosed = 0, maxOpen = Number.MAX_SAFE_INTEGER;
    for (let p of prices) {
        maxClosed = Math.max(maxClosed, p - maxOpen);
        maxOpen = Math.min(maxOpen, p);
    }
    return maxClosed;
};
// TEST
[
    [1],
    [7, 1, 5, 3, 6, 4],
    [7, 6, 4, 3, 1],
].forEach(t => {
    console.log("Max profit by one transaction in", t, "->",
                maxProfit(t), "&&", maxProfit_Functional(t));
});
