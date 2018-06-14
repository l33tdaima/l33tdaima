/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let len = nums.length;
    if (len === 0) { return 0; }
    let maxProduct = nums[0];
    for (let i = 1, lmin = maxProduct, lmax = maxProduct; i < len; ++i) {
        if (nums[i] < 0) {
            let tmp = lmin;
            lmin = lmax;
            lmax = tmp;
        }
        lmax = Math.max(nums[i], lmax * nums[i]);
        lmin = Math.min(nums[i], lmin * nums[i]);
        maxProduct = Math.max(lmax, maxProduct);
    }
    return maxProduct;
};
// TEST
[
    [],
    [1],
    [1, -2],
    [-1, -3],
    [3, -1, 4],
    [-2, 0, -1],
    [3, -1, 2, 6],
    [2, 3, -2, 4],
    [-2, -3, 0, -4],
    [-2, 1, -3, -4],
    [-2, 1, -3, 1, -4],
    [-2, 1, -3, 1, -4, -2],
    [-2, 1, -3, 1, -4, -2, 0, 49],
].forEach(function (test) {
    console.log("Max product of subarray in", test, "->", maxProduct(test));
});
