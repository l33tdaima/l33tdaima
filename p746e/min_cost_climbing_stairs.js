/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    console.assert(cost.length > 1);
    let len = cost.length;
    let dp = Array.from(cost);
    // dp[i] accumlated min cost if step i is stepped on
    for (let i = 2; i < len; ++i) {
        dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2]);
    }
    return Math.min(dp[len - 1], dp[len - 2]);
};
// TEST
[
    [3,1],
    [1,4],
    [10, 15, 20],
    [1, 100, 1, 1, 1, 100, 1, 1, 100, 1],
].forEach((test) => {
    console.log("Min cost climbing", test, "->",
                minCostClimbingStairs(test));
});
