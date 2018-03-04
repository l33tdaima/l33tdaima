/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let len = nums.length;
    for (let i = 0; i < len; ++i) {
        let v = Math.abs(nums[i]) - 1;
        if (nums[v] > 0) {
            nums[v] = -nums[v];
        }
    }
    let res = [];
    for (let i = 0; i < len; ++i) {
        if (nums[i] > 0) {
            res.push(i + 1);
        }
    }
    return res;
};
// TEST
[
    [4,3,2,1],
    [4,3,2,3],
    [4,3,2,7,8,2,3,1],
].forEach((test) => {
    console.log("Disappeared numbers ->",
                findDisappearedNumbers(test));
});
