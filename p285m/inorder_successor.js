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
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    if (root == null || p == null) {
        return null;
    }
    if (p.val < root.val) {
        let s = inorderSuccessor(root.left, p);
        return (s === null)? root : s;
    } else { // p.val >= root.val
        return inorderSuccessor(root.right, p);
    }
};
var inorderPredecessor = function(root, p) {
    if (root == null || p == null) {
        return null;
    }
    if (p.val <= root.val) {
        return inorderPredecessor(root.left, p);
    } else {
        let s = inorderPredecessor(root.right, p);
        return (s === null)? root : s;
    }
}
// TEST
let find = function(root, v) {
    if (root == null) { return null; }
    if (root.val === v) { return root; }
    if (v < root.val) {
        return find(root.left, v);
    } else {
        return find(root.right, v);
    }
}
let des = "6,2,0,#,#,4,3,#,#,5,#,#,8,7,#,#,9,#,#";
let tree = Tree.deserialize(des);
console.log("Testing tree", des);
[
    0,2,3,4,5,6,7,8,9,
].forEach(t => {
    let p = find(tree, t);
    let ans = inorderSuccessor(tree, p);
    console.log("Inorder successor of", p.val, "->",
                (ans == null)? null : ans.val);
    ans = inorderPredecessor(tree, p);
    console.log("Preorder predecessor of", p.val, "->",
                (ans == null)? null : ans.val);
});
