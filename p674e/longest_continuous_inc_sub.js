/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let start = 0, end = 0;
    let maxLen = 0;
    let prev = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < nums.length; prev = nums[i++]) {
        if (nums[i] <= prev) {
            start = i;
        } else {
            end = i;
            maxLen = Math.max(maxLen, end - start + 1);
        }
    }
    return maxLen;
};
// TEST
[
    [],
    [9],
    [9,7],
    [1,3,5,4,7],
    [6,3,5,6,7],
    [1,3,5,6,7],
    [2,2,2,2,2],
].forEach(t => {
    console.log("Longest continuous increaing subsequence of",
                t, "->", findLengthOfLCIS(t));
});
