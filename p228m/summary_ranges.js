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
var summaryRangesV2 = function(nums) {
    let ans = [];
    let start = nums[0];
    for (let i = 1; i <= nums.length; ++i) {
        if (nums[i] != nums[i-1] + 1) {
            ans.push(start === nums[i-1] ?
                     "" + start: start + "->" + nums[i-1]);
            start = nums[i];
        }
    }
    return ans;
};
// TEST
[
    [0,1,2,4,5,7],
    [0,2,3,4,6,8,9],
    [0,2,4,6,8,10],
    [0,1,2,3,4,5],
].forEach((test) => {
    console.log("Summary ranges of", test, "->\n",
                summaryRanges(test), "\n",
                summaryRangesV2(test));
});
