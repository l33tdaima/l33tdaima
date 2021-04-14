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
var NestedIterator = function (nestedList) {
  this.stack = [];
  this.prepareStack(nestedList);
};
NestedIterator.prototype.prepareStack = function (nestedList) {
  for (let i = nestedList.length - 1; i >= 0; --i) {
    this.stack.push(nestedList[i]);
  }
};
/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  while (
    this.stack.length > 0 &&
    !this.stack[this.stack.length - 1].isInteger()
  ) {
    let l = this.stack.pop().getList();
    this.prepareStack(l);
  }
  return this.stack.length > 0;
};
/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
  return this.stack.pop().getInteger();
};
// PART: TEST
/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
[
  [[[]], []],
  [[1], [1]],
  [[[1, 2]], [1, 2]],
  [[[[3]]], [3]],
  [
    [[1, 1], 2, [1, 1]],
    [1, 1, 2, 1, 1],
  ],
  [
    [1, [4, [[5], 6]]],
    [1, 4, 5, 6],
  ],
  [
    [[[3], 4], [5], 6],
    [3, 4, 5, 6],
  ],
].forEach(([t, expected]) => {
  let nestedList = Array.from(t, (v) => new Nested.NestedInteger(v));
  let [i, actual] = [new NestedIterator(nestedList), []];
  while (i.hasNext()) {
    actual.push(i.next());
  }
  console.log('Nested Iteration of', t, '->', actual);
  console.assert(actual.toString() === expected.toString());
});
