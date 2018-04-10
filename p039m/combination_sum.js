/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a,b) => a - b);
    let solutions = [];
    /**
     * Recursive Backtrack helper function
     * closure {number[][]} solutions: output
     * closure {number[]} candidates 
     * @param {number[]} workPath:  temporary working path
     * @param {number}   remTarget: ramaining target
     * @param {number}   start: index in candidates to start search
     */
    let recBacktrack = function(workPath, remTarget, start) {
        if (remTarget < 0) {
            return;
        } else if (remTarget === 0) {
            solutions.push(Array.from(workPath));
        } else {
            for (let i = start, len = candidates.length; i < len; ++i) {
                workPath.push(candidates[i]);
                recBacktrack(workPath, remTarget - candidates[i], i);
                workPath.pop();
            }
        }
    };
    recBacktrack(new Array(), target, 0);
    return solutions;
};
[
    [[2, 3, 6, 7], 7],
    [[3,4,5,6,7,8,9,11,12], 15],
].forEach(t => {
    console.log("Combinations in", t[0], "sum to", t[1], "->");
    console.log(combinationSum(t[0], t[1]));
});
