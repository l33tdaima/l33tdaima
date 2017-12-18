const Nested = require('nested_integer');
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSumInverse = function(nestedList) {
    let wsum = 0, lsum = 0;
    while (nestedList.length > 0) {
        let nextLevel = new Array(); 
        for (let i = 0, len = nestedList.length; i < len; ++i) {
            let ni = nestedList[i];
            if (ni.isInteger()) {
                lsum += ni.getInteger();
            } else {
                ni.getList().forEach((e) => nextLevel.push(e));
            }
        }
        wsum += lsum;
        nestedList = nextLevel;
    }
    return wsum;
};
// TEST
[
    [[]],
    [1],
    [[1,2]],
    [[1,1],2,[1,1]],
    [[[3]]],
    [1,[4,[6]]],
    [1,[4,[[5],6]]],
    [[[3],4],[5],6],
].forEach(function (test) {
    let nestedList = Array.from(test, (v) => new Nested.NestedInteger(v));
    console.log("Depth sum of", test, "->", depthSumInverse(nestedList));
});
