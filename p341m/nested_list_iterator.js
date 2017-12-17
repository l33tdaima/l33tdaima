// PART: ASSUMPTION
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 */
const Nested = require('nested_integer');

// PART: SOLUTION
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
    this.iterStack = [ {
        currList:  nestedList,
        currIndex: 0
    } ];
};
/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    let s = this.iterStack;
    while (s.length > 0) {
        let top = this.iterStack[s.length - 1];
        let list = top.currList, i = top.currIndex;
        if (i === list.length) {
            s.pop();
        } else {
            if (list[i].isInteger()) {
                return true;
            }
            top.currIndex ++;
            s.push({
                currList: list[i].getList(),
                currIndex: 0
            });
        }
    }
    return false;
};
/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    if (!this.hasNext()) { return null; }
    let top = this.iterStack[this.iterStack.length - 1];
    let i = top.currIndex ++;
    return top.currList[i].getInteger();
};
// PART: TEST
/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
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
    var i = new NestedIterator(nestedList), a = [];
    while (i.hasNext()) {
        a.push(i.next());
    }
    console.log("Nested Iteration of", test, "->", a);
});
