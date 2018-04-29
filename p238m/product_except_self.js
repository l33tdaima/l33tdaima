/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelfV1= function(nums) {
    let n = nums.length;
    let prodLeft = [], prodRight = [];
    // Fold left
    nums.reduce((prod, v) => {
        prodLeft.push(prod);
        return prod * v;
    }, 1);
    // Fold right
    nums.reduceRight((prod, v) => {
        prodRight.unshift(prod);
        return prod * v;
    }, 1);
    // Multiply left and right
    prodLeft.forEach((v, i) => {
        prodLeft[i] = v * prodRight[i];
    });
    return prodLeft;
};
var productExceptSelfV2 = function(nums) {
    let n = nums.length;
    let ans = [];
    // Fold left
    nums.reduce((prod, v) => {
        ans.push(prod);
        return prod * v;
    }, 1);
    // Combine fold right and multiply to left
    nums.reduceRight((prod, v, i) => {
        ans[i] *= prod;
        return prod * v;
    }, 1);
    return ans;
};
var productExceptSelf = productExceptSelfV2;
// TEST
[
    //[1,2],
    //[2,3,4],
    [1,2,3,4],
].forEach(function (test) {
    console.log("Product array ->", productExceptSelf(test));
});
