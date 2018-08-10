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
var countUnivalSubtrees = function(root) {
    const recIsUnival = function(node, parentVal) {
        // null node is treated as the same with parent
        if (node == null) { 
            // return { count: 0, isUnival: true, val: parentVal};
            return [0, true, parentVal];
        }
        let l = recIsUnival(node.left, node.val);
        let r = recIsUnival(node.right, node.val);
        let count = l[0] + r[0];
        let isUnival = false;
        if (l[1] && r[1] && node.val === l[2] && node.val === r[2]) {
            count ++;
            isUnival = true;
        }
        // return { count: count, isUnival: isUnival, val: node.val };
        return [count, isUnival, node.val];
    };
    if (root == null) { return 0; }
    return recIsUnival(root, root.val)[0];
};
// TEST
[
    ["1,#,#", 1],
    ["5,5,#,#,1,#,#", 2],
    ["5,1,5,#,#,5,#,#,5,#,5,#,#", 4],
    ["7,82,-79,-79,#,97,#,#,#,98,-28,65,#,#,-4,#,#,-24,#,3,#,#,82,98,-28,-4,#,#,65,#,#,-24,3,#,#,#,-79,#,-79,97,#,#,#", 8],
    //[7,82,82,-79,98,98,-79,-79,null,-28,-24,-28,-24,null,-79,null,97,65,-4,null,3,-4,65,3,null,97]
].forEach(t => {
    let tree = Tree.deserialize(t[0]);
    let act = countUnivalSubtrees(tree);
    console.log("Count univalue of", t[0], "->", act);
    console.assert(t[1] === act);
});