/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let worknum = 0;
    for (let i = 0, len = nums.length; i < len; ++i) {
        worknum = worknum ^ nums[i];
    }
    return worknum;
};
// TEST
[
    [1,1,90],
    [-3,878,-3,45,9999,45,9999],
].forEach(function(test) {
    console.log("Single number ->", singleNumber(test));
});
