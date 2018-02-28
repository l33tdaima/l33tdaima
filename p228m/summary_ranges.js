/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let res = [];
    for (let i = 0, len = nums.length; i < len; ++i) {
        let start = i;
        while (i+1 < len && nums[i+1] === nums[i] + 1) {
            i++;
        }
        if (i > start) {
            res.push(nums[start] + "->" + nums[i]);
        } else {
            res.push("" + nums[i]);
        }
    }
    return res;
};
// TEST
[
    [0,1,2,4,5,7],
    [0,2,3,4,6,8,9],
    [0,2,4,6,8,10],
    [0,1,2,3,4,5],
].forEach((test) => {
    console.log("Summary ranges of", test, "->",
                summaryRanges(test));
});
