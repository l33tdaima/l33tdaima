/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let msb = 0, lsb = 0;
    for (let i = 0, len  = nums.length; i < len; ++i) {
        lsb = (lsb ^ nums[i]) & ~msb;
        msb = (msb ^ nums[i]) & ~lsb;
    }
    // return state (0,1) since we look for the one appear only once
    // (1,0) if we look for the one appear twice
    return lsb;
};
// TEST
[
    [45,-3,878,-3,45,9999,-3,45,9999,9999],
].forEach(function(test) {
    console.log("Single number ->", singleNumber(test));
});
