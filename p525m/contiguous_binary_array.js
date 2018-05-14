/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let count = 0, maxLen = 0;
    let map = new Map();
    map.set(0, -1);
    for (let i = 0, len = nums.length; i < len; ++i) {
        count += nums[i] > 0 ? 1 : -1;
        let firstSeen = map.get(count);
        if (firstSeen !== undefined) {
            maxLen = Math.max(maxLen, i - firstSeen);
        } else {
            map.set(count, i);
        }
    }
    return maxLen;
};
// TEST
[
    [[1,0], 2],
    [[0,1,0], 2],
    [[0,1,0,0,1], 4],
    [[0,1,0,0,1,1,0], 6],
    [[0,0,0,0,0,0,0], 0],
    [[1,1,1,1,1], 0]
].forEach(t => {
    let act = findMaxLength(t[0]);
    console.log("Max length of breakeven subarray in", t[0], "->", act);
    console.assert(act === t[1]);
});