/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const Tree = require('binary_tree');
/** Is two tree equal
 * @param {TreeNode} a
 * @param {TreeNode} b
 * @return {boolean}
 */
var isEqual = function(a, b) {
    if (a === null && b === null) {
        return true;
    }
    if (a === null ||  b === null) {
        return false;
    }
    return (a.val === b.val) && 
           isEqual(a.left, b.left) &&
           isEqual(a.right, b.right);
};
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    if (t === null) {
        return s === null;
    }
    if (s === null) { // t !== null here
        return false;
    }
    if (isEqual(s, t)) {
        return true;
    } else {
        return isSubtree(s.left, t) || isSubtree(s.right, t);
    }
};
// TEST
[
    ["#", "#"],
    ["1", "#"],
    ["#", "1"],
    ["3,4,1,#,#,2,#,#,5,#,#", "4,1,#,#,2,#,#"],
    ["3,4,1,#,#,2,0,#,#,#,5,#,#", "4,1,#,#,2,#,#"],
].forEach(function(test) {
    let s = Tree.deserialize(test[0]);
    let t = Tree.deserialize(test[1]);
    console.log("Is", test[1], "a subtree of", test[0],
                "->", isSubtree(s,t));
});
