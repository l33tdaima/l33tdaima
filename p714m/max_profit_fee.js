/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let dpOpen = Number.MIN_SAFE_INTEGER;
    let dpClosed = 0;
    for (let price of prices) {
        let prevClosed = dpClosed;
        dpClosed = Math.max(dpClosed, dpOpen + price - fee); // hold or sell
        dpOpen   = Math.max(dpOpen, prevClosed - price);     // hold or buy
    }
    return dpClosed;
};
// TEST
[
    [[2], 0],
    [[1,3], 2],
    [[1,3,2,8,4,9], 2],
].forEach(t => {
    console.log("Max profit you can make from",
                t[0], "with fee", t[1], "->",
                maxProfit(t[0], t[1]));
});
