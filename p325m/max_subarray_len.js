/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
    let sumCache = new Map(); // (sum, index)
    let maxLen = 0;
    nums.reduce((sum, num, i) => {
        sum += num;
        if (sum === k) {
            maxLen = i + 1;
        } else if (sumCache.has(sum - k)) {
            maxLen = Math.max(maxLen, i - sumCache.get(sum - k));
        }
        if (!sumCache.has(sum)) {
            sumCache.set(sum, i);
        }
        return sum;
    }, 0);
    return maxLen;
};
// TEST
[
    [[], 5],
    [[5], 5],
    [[-2, -1, 2, 1], 1],
    [[1, -1, 5, -2, 3], 3],
    [[1, -1, 5, -2, 3], 1000],
].forEach(t => {
    console.log("The maximum length of a subarray in", t[0], 
                "that sums to", t[1], "->",
                maxSubArrayLen(t[0], t[1]));
});
