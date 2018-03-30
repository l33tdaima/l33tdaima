/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
// Branch and Bound
var findTargetSumWaysBB = function(nums, S) {
    let sum = nums.reduce((p, v) => p + v, 0);

    let recDFS = function(nums, S) {
        if (S > sum || S < -sum) { return 0; }
        if (nums.length === 0) {
            return (S === 0) ? 1 : 0;
        }
        let subnums = nums.slice(1);
        return recDFS(subnums, S - nums[0])
             + recDFS(subnums, S + nums[0]);
    };
    return recDFS(nums, S);
};
// Dynamic Programming
var findTargetSumWaysDP = function(nums, S) {
    let n = nums.length;
    let sum = nums.reduce((p, v) => p + v, 0);
    if (S > sum || S < -sum) { return 0; }

    // We can alternate two 1-D array of length 2*sum + 1 to save some space
    let dp = Array.from({length: n + 1},
                        r => Array.from({length: 2*sum + 1},
                                        c => 0));
    dp[0][0 + sum] = 1;
    for (let i = 1; i <= n; ++i) {
        for (let j = 0; j < 2 * sum + 1; ++j) {
            // avoid out of bound when computing the last element
            // which only evolute from only one direction
            if (j + nums[i - 1] < 2  * sum + 1) {
                dp[i][j] += dp[i-1][j+nums[i-1]]; // minus this num
            }
            if (j - nums[i - 1] >= 0) {
                dp[i][j] += dp[i-1][j-nums[i-1]]; // add this num
            }
        }
    }
    // console.log(dp);
    return dp[n][S + sum];
};
// TEST
[
    [[1,1,1,1,1], 3],
    [[1,2,3,4,5], 3],
].forEach(t => {
    console.log("Find target sum of", t[1], "in", t[0], "->",
                findTargetSumWaysDP(t[0], t[1]),
                findTargetSumWaysBB(t[0], t[1]));
});
