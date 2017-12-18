const Nested = require('nested_integer');
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSum = function(nestedList) {
    var recDepthSum = function(list, depth) {
        let sum = 0;
        for (let i = 0, len = list.length; i < len; ++i) {
            if (list[i].isInteger()) {
                sum += list[i].getInteger() * depth;
            } else {
                sum += recDepthSum(list[i].getList(), depth + 1);
            }
        }
        return sum;
    };
    return recDepthSum(nestedList, 1);
};
// TEST
[
    [[]],
    [1],
    [[1,2]],
    [[[3]]],
    [[1,1],2,[1,1]],
    [1,[4,[[5],6]]],
    [[[3],4],[5],6],
].forEach(function (test) {
    let nestedList = Array.from(test, (v) => new Nested.NestedInteger(v));
    console.log("Depth sum of", test, "->", depthSum(nestedList));
});
