/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    console.assert(nums.length > 0);
    let m = null, counter = 0;
    for (let i = 0, len = nums.length; i < len; ++i) {
        if (counter === 0) {
            m = nums[i];
        }
        if (nums[i] !== m) {
            counter --;
        } else {
            counter ++;
        }
    }
    return m;
};
// TEST
[
    [1],
    [1,2,1],
    [1,2,3,2,2],
    [3,3,1,3,2,2,3],
].forEach(function (test) {
    console.log("Majority element ->", majorityElement(test));
});
