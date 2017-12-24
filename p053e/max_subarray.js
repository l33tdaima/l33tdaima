/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = Number.NEGATIVE_INFINITY;
    let s = 0;
    for (let i = 0, len = nums.length; i < len; ++i) {
        s += nums[i];
        if (s > maxSum) { maxSum = s; }
        if (s < 0) { s = 0; }
    }
    return maxSum;
};
// TEST
[
    [],
    [-1],
    [-2,1,-3],
    [-2,1,-3,4],
    [-2,1,-3,4,-1,2,1,-5,4],
].forEach(function (test) {
    console.log("Largest sum of subarray in", test, "->", maxSubArray(test));
});
