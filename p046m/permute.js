/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length <= 1) {
        return [nums];
    }
    let permutations = [];
    for (let i = 0; i < nums.length; ++i) {
        let subnums = Array.from(nums);
        subnums.splice(i, 1);
        let subperm = permute(subnums);
        for (let j = 0; j < subperm.length; ++j) {
            subperm[j].unshift(nums[i]);
        }
        permutations = permutations.concat(subperm);
    }
    return permutations;
};

var testSets = [1, 2, 3];
console.log(permute(testSets));
