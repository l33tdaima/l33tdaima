/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumberV1 = function(nums) {
    return nums.reduce((xs, v, i) => xs ^ v ^ i, nums.length);    
};
var missingNumberV2 = function(nums) {
    let sum = nums.reduce((sum, v) => sum + v, 0);
    let n = nums.length;
    return n * (n + 1) / 2 - sum;
};
// TEST
[
    [3,0,1],
    [5,1,3,4,2],
    [1,2,0,4,3],
    [9,6,4,2,3,5,7,0,1],
].forEach(t => {
    console.log("The missing number in", t, "->",
                missingNumberV1(t),
                missingNumberV2(t));
});
