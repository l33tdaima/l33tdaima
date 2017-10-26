/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    // Recusive DFS helper
    var recCombineHelper = function(sol, currCombi, base) {
        // console.log("# s =", sol, ", combi =", currCombi);
        if (currCombi.length === k) {
            sol.push(Array.from(currCombi));
            // console.log("+ sol:", sol);
            return;
        }
        for (let i = base; i <= n; ++i) {
            currCombi.push(i);
            recCombineHelper(sol, currCombi, i + 1);
            currCombi.pop(i);
        }
    };

    var solutions = new Array();
    recCombineHelper(solutions, [], 1);
    return solutions;
};

var n = (process.argv[2] === undefined) ? 1 : parseInt(process.argv[2]);
var k = (process.argv[3] === undefined) ? 1 : parseInt(process.argv[3]);
console.log("C(", n, ",", k, ") =", combine(n, k));
