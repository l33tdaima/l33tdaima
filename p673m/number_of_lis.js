/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    let len = nums.length;
    if (len === 0) { return 0; }
    let dpLIS = Array.from({length: len}, v => 1);
    let dpNLIS = Array.from({length: len}, v => 1);
    let maxlen = 0;
    for (let i = 1; i < len; ++i) {
        for (let j = 0; j < i; ++j) {
            if (nums[i] <= nums[j]) { continue; }
            // This is an optimized version based on the knowledge
            // that in qualified nums[j], LIS is sympototically
            // increasing, if we are not 100% sure about this, we
            // should safely do two loops to compute dpLIS first,
            // dpNLIS second
            if (dpLIS[j] + 1 > dpLIS[i]) {
                dpLIS[i] = dpLIS[j] + 1;
                dpNLIS[i] = dpNLIS[j];
            } else if (dpLIS[j] + 1 === dpLIS[i]) {
                dpNLIS[i] += dpNLIS[j];
            }
        }
        maxlen = Math.max(maxlen, dpLIS[i]);
    }
    let ans = 0;
    for (let i = 0; i < len; ++i) {
        if (dpLIS[i] === maxlen) {
            ans += dpNLIS[i];
        }
    }
    return ans;
};
// TEST
[
    [1,2,4,2,3],
    [1,3,5,4,7],
    [2,2,2,2,2],
].forEach(t => {
    console.log("Number of LIS of", t, "->",
                findNumberOfLIS(t));
});
