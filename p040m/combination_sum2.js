/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2Old = function(candidates, target) {
    candidates.sort((a, b) => a - b);

    var recCombinationSum = function(candis, t) {
        // console.log("Search", t, candis);
        if(candis.length <= 0 || candis[0] > t) {
            return [];    
        }

        let solutions = [];
        for (let i = 0; i < candis.length; ++i) {
            // skip duplicates
            if (candis[i] === candis[i-1]) {
                continue;
            }
            if (candis[i] === t) {
                solutions.push([t]);
                return solutions;
            }
            let subTarget = t - candis[i];
            if (subTarget < 0) {
                break;
            }
            let subSol = recCombinationSum(candis.slice(i+1), subTarget);
            for (let j = 0; j < subSol.length; ++j) {
                // insert parent node into each solution path
                subSol[j].unshift(candis[i]);
                solutions.push(subSol[j]);
            }
        }
        return solutions;
    }

    return recCombinationSum(candidates, target);
};

var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);
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
                if (i > start && candidates[i] === candidates[i-1]) { continue; }
                workPath.push(candidates[i]);
                recBacktrack(workPath, remTarget - candidates[i], i + 1);
                workPath.pop();
            }
        }
    };
    recBacktrack(new Array(), target, 0);
    return solutions;
};

[
    [
        [2, 3, 6, 7], 7
    ],
    [
        [10, 1, 2, 7, 6, 1, 5], 8
    ],
    [
        [3, 4, 5, 6, 7, 8, 9, 11, 12], 15
    ],
].forEach(t => {
    console.log("Combinations in", t[0], "sum v2 to", t[1], "->");
    console.log(combinationSum2(t[0], t[1]));
});
