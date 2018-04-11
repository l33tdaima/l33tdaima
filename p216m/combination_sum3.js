/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let solutions = [];
    /**
     * Recursive Backtrack helper function
     * closure {number[][]} solutions: output
     * @param {number[]} workPath:  temporary working path
     * @param {number}   remTarget: ramaining target
     * @param {number}   start: index in candidates to start search
     */
    let recBacktracing = function(workPath, remTarget, start) {
        if (remTarget < 0 || workPath.length > k) {
            return;
        } else if (remTarget === 0 && workPath.length === k) {
            solutions.push(Array.from(workPath));
        } else {
            for (let i = start; i <= 9; ++i) {
                workPath.push(i);
                recBacktracing(workPath, remTarget - i, i + 1);
                workPath.pop();
            }
        }
    };
    recBacktracing([], n, 1);
    return solutions;
};
[
    [0, 0],
    [1, 9],
    [3, 7],
    [3, 9],
].forEach(t => {
    console.log("Combinations of", t[0], "digits summing to", t[1], "->",
                combinationSum3(t[0], t[1]));
});
