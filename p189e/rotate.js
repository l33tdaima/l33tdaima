/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let swap = function(s, e) {
        while (s < e) {
            let t = nums[s];
            nums[s++] = nums[e];
            nums[e--] = t;
        }
    };
    let n = nums.length;
    if (k > n) { k = k % n; }
    if (k === 0 || k === n) { return; }
    swap(n - k, n - 1);
    swap(0, n - k - 1);
    swap(0, n - 1);
};
// TEST
[
    [[1,2], 1],
    [[1,2], 4],
    [[1,2,3,4,5,6,7], 3],
].forEach(function (test) {
    console.log("Rotate", test[0], "right by", test[1], "steps ->");
    rotate(test[0], test[1]);
    console.log(test[0]);
});
