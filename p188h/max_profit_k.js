/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    if (k === 0) { return 0; }
    let len = prices.length;
    if (k >= ~~(len/2)) {
        // equivalent to Inf transactions
        let ansInf = 0;
        for (let i = 1; i < len; ++i) {
            if (prices[i] > prices[i-1]) {
                ansInf += prices[i] - prices[i-1];
            }
        }
        return ansInf;
    }
    let dpClosed = Array.from({length: k+1}, v => 0);
    let dpOpen   = Array.from({length: k+1}, v => Number.MIN_SAFE_INTEGER);
    for (let p of prices) {
        for (let j = k; j > 0; --j) {
            dpClosed[j] = Math.max(dpClosed[j], dpOpen[j] + p);
            dpOpen[j]   = Math.max(dpOpen[j],   dpClosed[j-1] - p);
        }
    }
    return dpClosed[k];
};
// TEST
[
    [[2], 0],
    [[1,3], 2],
    [[1,3,2,8,4,9], 2],
    [[7,1,5,3,6,4], 5],
    [[7,6,4,3,1], 3],
].forEach(t => {
    console.log("Max profit you can make from",
                t[0], "with k =", t[1], "->",
                maxProfit(t[1], t[0]));
});
