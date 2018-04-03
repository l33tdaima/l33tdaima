/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let n = nums.length;
    if (n === 0) { return 0; }
    let dp = Array.from({length: n}, v => 1);
    let ans = 1;
    for (let i = 1; i < n; ++i) {
        let max = 0;
        for (let j = 0; j < i; ++j) {
            if (nums[i] > nums[j]) {
                max = Math.max(max, dp[j]);
            }
        }
        dp[i] = max + 1;
        ans = Math.max(ans, dp[i]);
    }
    return ans;
};
// TEST
[
    [],
    [1],
    [10, 9, 2, 5, 3, 7, 101, 18],
    [4, 5, 1, 2, 7],
].forEach(t => {
    console.log("Length of LIS in", t, "->",
                lengthOfLIS(t));
});
