/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let len = nums.length;
    let l = 0, r = len - 1;
    while (l < r) {
        let m = ~~((r - l)/2) + l; // protect sum overflow
        if (nums[m] < nums[m + 1]) {
            l = m + 1;
        } else { // nums[m] > num[m + 1]
            r = m;
        }
    }
    return l;
};
// TEST
[
    //[1],
    [1, 2],
    [2, 1],
    [1, 2, 1],
    [2, 1, 2],
    [1, 2, 3, 1]
].forEach(t => {
    console.log("Any peak of", t, "->", findPeakElement(t));
});
