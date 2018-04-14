/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // dpClose0 = 0, dpOpen1 = -Inf
    let dpClosed1 = 0, dpClosed2 = 0; // one and two maximum transactions
    let dpOpen1 = Number.MIN_SAFE_INTEGER, dpOpen2 = Number.MIN_SAFE_INTEGER;
    for (let p of prices) {
        dpClosed2 = Math.max(dpClosed2, dpOpen2 + p);
        dpOpen2   = Math.max(dpOpen2, dpClosed1 - p);
        dpClosed1 = Math.max(dpClosed1, dpOpen1 + p);
        dpOpen1   = Math.max(dpOpen1, -p);
    }
    return dpClosed2;
};
// TEST
[
    [1],
    [7, 1, 5, 3, 6, 4],
    [7, 6, 4, 3, 1],
].forEach(t => {
    console.log("Max profit by 2 transactions in", t, "->",
                maxProfit(t));
});
