/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    for (let i = 1; i < nums.length; ++i) {
        // previous subarray is odd length and new item too small
        // or
        // previous subarray is even length and new item too large
        if ((i % 2 === 1 && nums[i] < nums[i - 1]) ||
            (i % 2 === 0 && nums[i] > nums[i - 1])) {
            let t = nums[i];
            nums[i] = nums[i-1];
            nums[i-1] = t;
        }
    }
};
// TEST
[
    [],
    [1],
    [2,1],
    [3,5,2,1,6,4],
].forEach(t => {
    console.log("Wiggle sort", t);
    wiggleSort(t);
    console.log("  ->", t);
});
