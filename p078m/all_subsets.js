/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var solutions = [];
    var backtrack = function(solution, start) {
        let elemSolution = Array.from(solution);
        solutions.push(elemSolution);
        for (let i = start; i < nums.length; ++i) {
            elemSolution.push(nums[i]);
            backtrack(elemSolution, i + 1);
            elemSolution.pop(nums[i]);
        }
    };

    backtrack([], 0);
    return solutions;
};

var subsetsByBit = function(nums) {
    var solutions = Array.from({length:2**nums.length}, (v) => []);
    for (let i = 0; i < solutions.length; ++i) {
        for (let b = 0; b < nums.length; ++b) {
            if((i>>b) & 1) {
                solutions[i].push(nums[b]);
            }
        }
    }
    return solutions;
}

var testArray = [1, 2, 3];
console.log(subsetsByBit(testArray));
