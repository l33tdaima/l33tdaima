/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort();
    var solutions = [];
    var backtrack = function(solution, start) {
        solutions.push(Array.from(solution));
        for (let i = start; i < nums.length; ++i) {
            if(i > start && nums[i] === nums[i-1]) {
                continue;
            }
            solution.push(nums[i]);
            backtrack(solution, i + 1);
            solution.pop();
        }
    };

    backtrack([], 0);
    return solutions;
};
// TEST
[
    [],
    [1],
    [1, 2],
    [1, 2, 2],
    [2, 1, 2, 2],
].forEach(t => {
    console.log("All subsets of", t, "->\n", subsetsWithDup(t));
});
