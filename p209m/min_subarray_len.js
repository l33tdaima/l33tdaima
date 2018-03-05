/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let len = nums.length;
    let min = Number.MAX_SAFE_INTEGER;
    let sum = 0, head = 0, tail = 0;
    while (tail < len) {
        while (tail < len && sum < s) {
            sum += nums[tail++];
        }
        while (sum >= s) {
            sum -= nums[head ++];
            min = Math.min(min, tail - head + 1);
        }
    }
    return min === Number.MAX_SAFE_INTEGER ? 0 : min;
};
var minSubArrayLenNlogN = function(s, nums) {
    let sums = [0];  // length is (len + 1)
    nums.reduce((acc, v) => {
        sums.push(acc + v); return acc + v;
    }, 0);
    let binarySearch = function (lo, hi, target) {
        // sums as closure
        while (lo <= hi) {
            let mid = ~~((lo + hi) / 2);
            if (sums[mid] >= target) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        }
        return lo;
    };

    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0, len = sums.length; i < len; ++i) {
        let end = binarySearch(i + 1, len - 1, sums[i] + s);
        if (end === len) { break; }
        min = Math.min(min, end - i)
    }
    return min === Number.MAX_SAFE_INTEGER ? 0 : min;
};
// TEST
[
    [100, []],
    [100, [2,1,2]],
    [5, [2,1,2]],
    [7, [2,3,1,2,4,3]],
    [8, [2,3,1,2,4,3]],
].forEach((t) => {
    console.log("Minimal length of a subarray of", t[1],
                "where the sum >=", t[0], "->",
                minSubArrayLen(t[0], t[1]),
                minSubArrayLenNlogN(t[0], t[1]));
});
