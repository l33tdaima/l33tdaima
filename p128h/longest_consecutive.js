/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let len = nums.length;
    let nset = new Set();
    // hash the numbers
    for (let i = 0; i < len; ++i) {
        nset.add(nums[i]);
    }
    // compute the longest consecutive
    let longest = 0;
    for (let i = 0; i < len; ++i) {
        // only counts from a lower bound of a range
        if (!nset.has(nums[i] - 1)) {
            let n = nums[i] + 1;
            let count = 1;
            while (nset.has(n++)) { count ++; }
            if (count > longest) { longest = count; }
        }
    }
    return longest;
};
// TEST
[
    [],
    [100],
    [6,5,4],
    [100, 4, 200, 1, 3, 2],
].forEach(function (test) {
    console.log("Longest consecutive elements ->",
                longestConsecutive(test));
});
