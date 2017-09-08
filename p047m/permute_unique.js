/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if (nums.length <= 1) {
        return [nums];
    }
    nums.sort();

    var recPermuteUnique = function(nums) {
        if (nums.length <= 1) {
            return [nums];
        }
        let permutations = [];
        for (let i = 0; i < nums.length; ++i) {
            if (i > 0 && nums[i] === nums[i-1]) {
                continue;
            }
            // Extract nums[i] as pivot point
            let subnums = Array.from(nums);
            subnums.splice(i, 1);
            // Go deeper to solve the set of the rest elements
            let subperm = permuteUnique(subnums);
            for (let j = 0; j < subperm.length; ++j) {
                // insert nums[i] at the beginning
                subperm[j].unshift(nums[i]);
            }
            permutations = permutations.concat(subperm);
        }
        return permutations;
    };

    return recPermuteUnique(nums);
};

var testSets = [1, 2, 1];
console.log(permuteUnique(testSets));
