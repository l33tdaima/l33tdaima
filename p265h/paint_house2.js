/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII = function(costs) {
    if (costs == null || costs.length === 0) {
        return 0;
    }
    let n = costs.length, k = costs[0].length;
    let minCost = 0;
    let minCostColor = -1;
    let secondMinCost = 0;
    for (let i = 0; i < n; ++i) {
        let min = Number.MAX_SAFE_INTEGER;
        let minColor = -1;
        let secondMin = Number.MAX_SAFE_INTEGER
        for (let j = 0; j < k; ++j) {
            let val = costs[i][j] + ((j === minCostColor) ? secondMinCost : minCost);
            if (val < min) {
                secondMin = min;
                minColor = j;
                min = val;
            } else if (val < secondMin) {
                secondMin = val;
            }
        }
        minCost = min;
        minCostColor = minColor;
        secondMinCost = secondMin;
    }
    return minCost;
};
// TEST
[
    [[1,2,3]],
    [[1,2,3],
     [3,8,9]],
].forEach(function (test) {
    console.log("Mininum cost ->", minCostII(test));
});
