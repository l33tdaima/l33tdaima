/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let res = [];
    for (let i = 0, len = nums.length; i < len; ++i) {
        let v = Math.abs(nums[i]) - 1;
        if (nums[v] > 0) {
            nums[v] = -nums[v];
        } else {
            res.push(v + 1);
        }
    }
    return res;
};
// TEST
[
    [4,1,2,3],
    [5,1,2,3,5],
    [4,3,2,7,8,2,3,1],
].forEach((test) => {
    console.log("Find duplicates in ->",
                findDuplicates(test));
});
