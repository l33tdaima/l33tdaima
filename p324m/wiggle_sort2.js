/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    let sorted = Array.from(nums);
    sorted.sort((a, b) => a - b);
    for (let n = nums.length - 1, i = 0, j = ~~(n / 2) + 1; n >= 0; n--) {
        nums[n] = sorted[n % 2 ? j++ : i++];
    }
};
// TEST
[
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    [6, 13, 5, 4, 5, 2],
    [1, 5, 1, 1, 6, 4],
    [1, 3, 2, 2, 3, 1],
].forEach(t => {
    console.log("Wiggle sort", t);
    wiggleSort(t);
    console.log("  ->", t);
});
