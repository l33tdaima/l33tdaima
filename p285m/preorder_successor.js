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
var preorderSuccessor = function(root, p) {
    if (root == null || p == null) {
        return null;
    }
    if (p.val === root.val) {
        if (root.left !== null) {
            return root.left;
        }
        if (root.right !== null) {
            return root.right;
        }
        return null;
    }
    let s = null;
    if (p.val < root.val) {
        s = preorderSuccessor(root.left, p);
        return (s === null)? root.right : s;
    } else {
        s = preorderSuccessor(root.right, p);
        return (s === null)? null : s;
    }
};
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

let des = "5,3,2,1,#,#,#,4,#,#,7,#,9,#,#";
let tree = Tree.deserialize(des);
console.log("Testing tree", des);
[
    5,3,2,1,4,7,9,
].forEach(t => {
    let p = find(tree, t);
    let ans = preorderSuccessor(tree, p);
    console.log("Preorder successor of", p.val, "->",
                (ans == null)? null : ans.val);
});
