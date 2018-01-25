/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    let r = 0, b = 0, g = 0;
    for (let i = 0, len = costs.length; i < len; ++i) {
        let pr = r, pb = b, pg = g;
        r = costs[i][0] + Math.min(pb, pg);
        b = costs[i][1] + Math.min(pr, pg);
        g = costs[i][2] + Math.min(pr, pb);
    }
    return Math.min(r, b, g);
};
// TEST
[
    [[1,2,3]],
    [[1,2,3],
     [3,8,9]],
].forEach(function (test) {
    console.log("Mininum cost ->", minCost(test));
});
