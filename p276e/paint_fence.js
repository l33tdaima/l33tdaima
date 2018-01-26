/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, k) {
    if (n === 0) { return 0; }
    // One pole has k different color options and no same color options
    let diffColor = k, sameColor = 0;
    // From pole 2 to n
    for (let i = 2; i <= n; ++i) {
        let temp = diffColor;
        diffColor = (diffColor + sameColor) * (k - 1);
        // the new pole has different color with previous
        sameColor = temp;
        // the new pole has same color with the previous
    }
    return diffColor + sameColor;
};
// TEST
[
    [0,1],
    [1,1],
    [2,1],
    [2,2],
    [2,3],
    [3,3],
].forEach(function (test) {
    console.log("Number of ways to paint n =", test[0],
                "k =", test[1], "->", numWays(test[0], test[1]));
});
