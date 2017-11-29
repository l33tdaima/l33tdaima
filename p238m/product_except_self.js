/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let len = nums.length;
    let res = new Array(len); // faster than Array.from()
    res[0] = 1;
    for (let i = 1; i < len; ++i) {
        res[i] = res[i - 1] * nums[i - 1];
    }
    let fromRight = 1;
    for (let i = len - 2; i >= 0; --i) {
        fromRight *= nums[i + 1];
        res[i] *= fromRight;
    }
    return res;
};
// TEST
[
    [1,2],
    [2,3,4],
    [1,2,3,4],
].forEach(function (test) {
    console.log("Product array ->", productExceptSelf(test));
});
