/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let dpClosed = 0, dpClosedPrev = 0;
    let dpOpen = Number.MIN_SAFE_INTEGER;
    for (let price of prices) {
        let tmp = dpClosed;
        dpClosed = Math.max(dpClosed, dpOpen + price);     // hold or sell
        dpOpen   = Math.max(dpOpen, dpClosedPrev - price); // hold or buy
        dpClosedPrev = tmp;
        //console.log("dpClosed =", dpClosed, ", dpClosedPrev =", dpClosedPrev, ", dpOpen =", dpOpen);
    }
    return dpClosed;
};
// TEST
[
    [2],
    [1,3],
    [1,2,3,0,2],
    [1,3,2,8,4,9],
].forEach(t => {
    console.log("Max profit you can make from",
                t, "with cooldown", "->",
                maxProfit(t));
});
