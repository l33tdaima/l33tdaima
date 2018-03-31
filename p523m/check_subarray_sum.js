/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySumSlow = function(nums, k) {
    if (k < 0) { k = -k; }
    let sumMap = new Map(); // sum to index map
    sumMap.set(0, -1);
    let sum = 0;
    for (let i = 0; i < nums.length; ++i) {
        sum += nums[i];
        if (k === 0) {
            let j = sumMap.get(sum);
            if (j !== undefined && i - j > 1) return true;
        } else {
            for (let m = 0; m * k <= sum; ++m) {
                let j = sumMap.get(sum - m*k);
                if (j !== undefined && i - j > 1) return true;
            }
        }
        if (!sumMap.has(sum)) {
            sumMap.set(sum, i);
        }
    }
    return false;
};
var checkSubarraySum = function(nums, k) {
    let sumMap = new Map(); // sum to index map
    sumMap.set(0, -1);
    let sum = 0;
    for (let i = 0; i < nums.length; ++i) {
        sum += nums[i];
        if (k !== 0) { sum %= k; }
        let j = sumMap.get(sum);
        if (j !== undefined) {
            if (i - j > 1) return true;
        } else {
            sumMap.set(sum, i);
        }
    }
    return false;
};
// TEST
[
    [[0,0], -1],
    [[0], 0],
    [[0,0], 0],
    [[0,1,0], 0],
    [[1,0,0,3], 0],
    [[23,2,4,6,7], -6],
    [[23,2,4,6,7],  6],
    [[23,2,6,4,7],  6],
    [[1], 2],
].forEach(t => {
    console.log("There is subarray in", t[0], 
                "sum up to n *", t[1], "? ->",
                checkSubarraySumSlow(t[0], t[1]),
                checkSubarraySum(t[0], t[1]));
});
