/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const Tree = require('binary_tree');
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if (t2 == null) {
        // this is t referrencing t1, ideally deep copy
        return t1;
    }
    let t = new Tree.TreeNode(t2.val);
    if (t1 !== null) {
        t.val += t1.val;
    }
    t.left = mergeTrees(t1 ? t1.left : null, t2.left);
    t.right = mergeTrees(t1 ? t1.right : null, t2.right);
    return t;
};
// TEST
[
    ["#", "#"],
    ["1", "#"],
    ["#", "1"],
    ["1,2,#,#,#", "1,#,3,#,#"],
    ["1,#,#", "1,2,#,4,#,#,3,#,#"],
    ["1,3,5,#,#,#,2,#,#", "2,1,#,4,#,#,3,#,#"],
].forEach(function(test) {
    let t1 = Tree.deserialize(test[0]);
    let t2 = Tree.deserialize(test[1]);
    let t = mergeTrees(t1, t2);
    console.log("Merged tree ->", Tree.serialize(t));
});
