/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySumON2 = function(nums, k) {
    let n = nums.length;
    let count = 0;
    for (let i = n-1; i >=0; --i) {
        let sum = 0;
        for (let j = i; j >= 0; --j) {
            sum += nums[j];
            if (sum === k) count ++;
        }
    }
    return count;
};
var subarraySumON = function(nums, k) {
    let sumCountMap = new Map();
    sumCountMap.set(0, 1);
    let sum = 0, count = 0;
    for (let num of nums) {
        sum += num;
        let v = sumCountMap.get(sum - k);
        if (v) { count += v; }
        // update map
        v = sumCountMap.get(sum);
        if (v) {
            sumCountMap.set(sum, v + 1);
        } else {
            sumCountMap.set(sum, 1);
        }
    }
    return count;
};
// TEST
[
    [[1], 0],
    [[1,1,1], 2],
    [[1,2,3,4,5], 11],
    [[3,4,7,2,-3,1,4,2], 7],
].forEach(t => {
    console.log("# of subarrays of", t[0], "sum to", t[1], "=>",
                subarraySumON2(t[0], t[1]),
                subarraySumON(t[0], t[1]));
});
