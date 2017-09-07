/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort();
    var solutions = [];
    var backtrack = function(solution, start) {
        solutions.push(Array.from(solution));
        // console.log(start, "*", solution, "*", solutions);
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

var testArray = [2, 1, 2, 2];
console.log("Backtracking:")
console.log(subsetsWithDup(testArray));
