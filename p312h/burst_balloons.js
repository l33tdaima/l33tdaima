/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    let balloons = new Array(nums.length + 2);
    let n = 1;
    nums.forEach(v => {
        if (v > 0) { balloons[n++] = v; }
    });
    balloons[0] = balloons[n++] = 1;
    // console.log(balloons);
    // coins[l][r] is maxCoins from balloon l to r, not including l, r
    let coins = Array.from({length: n}, v =>
                            Array.from({length: n}, k => 0)
                          );
    // console.log(coins);
    for (let range = 2; range < n; ++range) {
        // console.log("range =", range);
        for (let left = 0; left < n - range; ++left) {
            let right = left + range;
            for (let k = left + 1; k < right; ++k) {
                let c = coins[left][k] + coins[k][right]
                      + balloons[left] * balloons[k] * balloons[right];
                coins[left][right] = Math.max(coins[left][right], c);
            }
        }
        //console.log(coins);
    }
    return coins[0][n-1];
};
// TEST
[
    [3,1,5,8],
].forEach(t => {
    console.log("Max coins to burst", t, "->", maxCoins(t));
});
