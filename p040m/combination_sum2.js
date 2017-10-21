/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
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

var testCandidate = [10, 1, 2, 7, 6, 1, 5];
var testTarget = 8; 
console.log("Solutions:", combinationSum2(testCandidate, testTarget));
