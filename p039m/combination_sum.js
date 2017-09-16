/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a,b) => a - b);

    var recCombinationSum = function(candis, t) {
        // console.log("Search", t, candis);
        if(candis[0] > t) {
            return [];    
        }

        let solutions = [];
        for (let i = 0; i < candis.length; ++i) {
            if (candis[i] === t) {
                solutions.push([t]);
                return solutions;
            }
            let subTarget = t- candis[i];
            if (subTarget < 0) {
                break;
            }
            let subSol = recCombinationSum(candis.slice(i), subTarget);
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

var testCandidate = [3,4,5,6,7,8,9,11,12]; 
var testTarget = 15; 
console.log("Solutions:", combinationSum(testCandidate, testTarget));
