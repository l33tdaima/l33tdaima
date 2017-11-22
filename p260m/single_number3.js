/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let diff = nums.reduce((s, num) => s ^ num, 0);
    diff &= -diff; // extract the last set bit of target XOR
    let res = [0, 0];
    for (let i = 0, len = nums.length; i < len; ++i) {
        if (nums[i] & diff) {
            res[0] ^= nums[i];
        } else {
            res[1] ^= nums[i];
        }
    }
    return res;
};
// TEST
[
    [1,5,5,1,98,98,23,58,-1,-1]
].forEach(function (test) {
    console.log("Single nums ->", singleNumber(test));
})
