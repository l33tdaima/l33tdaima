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
var longestUnivaluePath = function (root) {
    let longest = 0;
    const recHelper = function (node, parentVal) {
        if (node == null) { return 0; }
        let l = recHelper(node.left, node.val);
        let r = recHelper(node.right, node.val);
        let count = 0;
        longest = Math.max(longest, l + r);
        if (node.val === parentVal) {
            count = Math.max(l, r) + 1;
        }
        return count;
    };
    if (root !== null) {
        recHelper(root, root.val);
    }
    return longest;
};
// TEST
[
    ["#", 0],
    ["5,#,#", 0],
    ["1,1,#,#,#", 1],
    ["5,5,5,#,#,#,5,#,#", 3],
    ["5,4,1,#,#,1,#,#,5,#,5,#,#", 2],
    ["1,4,4,#,#,4,#,#,5,#,5,#,#", 2],
].forEach(t => {
    let tree = Tree.deserialize(t[0]);
    let act = longestUnivaluePath(tree);
    console.log("Longest Univalue Path of", t[0], "->", act);
    console.assert(t[1] === act);
});