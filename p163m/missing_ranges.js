/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
    let fromRange = function(lo, hi) {
        return (lo === hi ? "" + lo : lo + "->" + hi);
    };
    let ans = [];
    if (nums.length === 0 || 
        // the following is not necessary per assumption that nums must be in the range
        nums[0] > upper || nums[nums.length - 1] < lower) {
        ans.push(fromRange(lower, upper));
        return ans;
    }
    let next = lower;
    for (let i = 0, len = nums.length; i < len; ++i) {
        if (nums[i] < next) { continue; }
        if (nums[i] === next) { next ++; continue; }
        ans.push(fromRange(next, nums[i] - 1));
        next = nums[i] + 1;
    }
    if (next <= upper) {
        ans.push(fromRange(next, upper));
    }
    return ans;
};
// TEST
[
    { nums: [], lower: 1, upper: 1 },
    { nums: [0,1], lower: 0, upper: 1 },
    { nums: [-1], lower: -2, upper: -1 },
    { nums: [-1,-1], lower: -4, upper: -1 },
    { nums: [0], lower: -1, upper: 2 },
    { nums: [1], lower: 1, upper: 2 },
    { nums: [1,1,1], lower: 1, upper: 20 },
    { nums: [1,1,1], lower: 1, upper: 1 },
    { nums: [0,1,3,50,75], lower: -2, upper: -1 },
    { nums: [0,1,3,50,75], lower: 80, upper: 100 },
    { nums: [0,1,3,50,75], lower: 49, upper: 49 },
    { nums: [0,1,3,50,75], lower: 30, upper: 100 },
    { nums: [0,1,3,50,75], lower: 0, upper: 99 },
].forEach(t => {
    console.log("Missing ranges in", t.nums,
                "lower =", t.lower, "upper =", t.upper, "->\n  ",
                findMissingRanges(t.nums, t.lower, t.upper));
});