/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    console.assert(target > 0 && nums.length > 0);
    nums.sort((a, b) => a - b);
    let dp = Array.from({length: target + 1}, v => 0);
    dp[0] = 1;
    for (let t = 1; t <= target; ++t) {
        for (let num of nums) {
            if (t < num) { continue; }
            dp[t] += dp[t - num];
        }
    }
    return dp[target];
};
var combinationSum4Rec = function(nums, target) {
    let dp = Array.from({length: target + 1}, v => -1);
    dp[0] = 1;
    let recDP = function(t) {
        if (dp[t] !== -1) { return dp[t]; }
        let ans = 0;
        for (let num of nums) {
            if (t >= num) {
                ans += recDP(t - num);
            }
        }
        dp[t] = ans;
        return ans;
    };
    return recDP(target);
};
// TEST
[
    [[1,2,3], 4],
].forEach(t => {
    console.log("Numbers of combinations in", t[0], "sums to", t[1], "->",
                combinationSum4(t[0], t[1]), "&", combinationSum4Rec(t[0], t[1]));
});
