/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function(nums, k) {
    if (nums.length < 3*k) { return []; }
    let n = nums.length;
    let sums = [0];
    nums.reduce((s, v) => {sums.push(s + v); return s + v;}, 0);

    // 1. Compute the left DP
    // each element means if the mid interval start index is i,
    // the index for left interval s.t. left interval has the maximum
    let dpLeft = Array.from({length: n}, v => 0);
    for (let i = k + 1, leftMax = sums[k] - sums[0]; i <= n - 2*k; ++i) {
        if (sums[i] - sums[i - k] > leftMax) {
            dpLeft[i] = i - k;
            leftMax = sums[i] - sums[i - k];
        } else {
            dpLeft[i] = dpLeft[i - 1];
        }
    }
    // 2. Compute the right DP backward
    // each element means if the mid interval start index is i,
    // the index for right interval s.t. right interval has the maximum
    let dpRight = Array.from({length: n}, v => n - k);
    for (let i = n - 2*k - 1, rightMax = sums[n] - sums[n - k]; i >= k; --i) {
        if (sums[i + 2 * k] - sums[i + k] >= rightMax) {
            dpRight[i] = i + k;
            rightMax = sums[i + 2 * k] - sums[i + k];
        } else {
            dpRight[i] = dpRight[i + 1];
        }
    }
    // 3. Shift the mid interval searching for the global maximum
    let ans = [0, 0, 0], maxSum = 0;
    for (let i = k; i <= n - 2*k; ++i) {
        let l = dpLeft[i], r = dpRight[i];
        let total = (sums[i + k] - sums[i]) + (sums[l + k] - sums[l]) + (sums[r + k] - sums[r]);
        if (total > maxSum) {
            maxSum = total;
            ans = [l, i, r];
        }
    }
    return ans;
};
// TEST
[
    [[1,2,1,2,6,7,5,1], 2],
].forEach(t => {
    console.log("Max sum of three subarrays in", t[0], 
                "of size", t[1], "->",
                maxSumOfThreeSubarrays(t[0], t[1]));
});
