/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce((s, n) => s ^ n, 0);
};
// TEST
[
    [1,1,90],
    [-3,878,-3,45,9999,45,9999],
].forEach(function(test) {
    console.log("Single number ->", singleNumber(test));
});
