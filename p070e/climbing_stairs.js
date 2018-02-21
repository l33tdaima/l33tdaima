/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    console.assert(n >= 0);
    if (n === 1) { return 1; }
    if (n === 2) { return 2; }
    // dp[i] is # of ways to climb i steps
    let dp = Array.from({length: n},
                        (v, k) => k + 1); // such that [1,2,...]
    for (let i = 2; i <= n; ++i) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n - 1];
};
var climbStairsFab = function(n) {
    let a = 1, b = 1;
    while (n--) {
        let t = a;
        a = a + b;
        b = t;
    }
    return b;
};
// TEST
let n = 10;
for (let i = 1; i <= n; ++i) {
    console.log("There are", climbStairs(i), climbStairsFab(i),
                "ways to climb to the top of", i, "steps");
}
