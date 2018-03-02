/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let numSq = [0];
    for (let m = 1; m <= n; ++m) {
        let least = Number.MAX_SAFE_INTEGER;
        for (let i = 1; i * i <= m; ++i) {
            least = Math.min(least, numSq[m - i*i] + 1);
        }
        numSq.push(least);
    }
    return numSq[n];
};
// TEST
[
    0,1,12,16,194,431,
].forEach((test) => {
    console.log("The least # of squares sum to", test, "->",
                numSquares(test));
});
