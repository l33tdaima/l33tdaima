/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
    let totalHD = 0;
    let n = nums.length;
    for (let bit = 0; bit <= 31; ++bit) {
        let k = 0;
        for (let i = 0; i < n; ++i) {
            if (((nums[i] >> bit) & 1) > 0) {
                k++;
            }
        }
        totalHD += k * (n - k);
    }
    return totalHD;
};
// TEST
[
    [],
    [1],
    [1,4],
    [4,14,2],
].forEach(function (test) {
    console.log("Totalk hamming distance ->",
                totalHammingDistance(test));
});
