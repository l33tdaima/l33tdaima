/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const Tree = require('binary_tree');
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
    // This recursive helper returns sec min reference to the given min value
    let recFindSecMin = function (root, minref) {
        if (root == null) {
            return Number.MAX_SAFE_INTEGER;
        }
        if (root.val > minref) { // root <= children always
            return root.val;
        }
        let ltCand = recFindSecMin(root.left, minref);
        let rtCand = recFindSecMin(root.right, minref);
        return Math.min(ltCand, rtCand);
    };

    if (root == null) { return -1; }
    let secmin = recFindSecMin(root, root.val);
    return (secmin === Number.MAX_SAFE_INTEGER) ? -1 : secmin;
};
// TEST
[
    "#",
    "1,#,#",
    "2,2,#,#,#",
    "2,#,7,#,#",
    "2,2,#,#,2,#,#",
    "2,4,#,#,2,#,#",
    "2,4,#,#,3,#,#",
    "2,2,#,#,5,5,#,#,7,#,#",
    "1,1,1,3,3,#,#,3,#,#,1,1,#,#,6,#,#,1,1,2,#,#,1,#,#,1,#,#,3,3,3,#,#,8,#,#,4,4,#,#,8,#,#",
].forEach(function (test) {
    let root = Tree.deserialize(test);
    console.log("Find second minimum in", test, "->",
                findSecondMinimumValue(root));
});
