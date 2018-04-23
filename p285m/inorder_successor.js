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
var inorderSuccessorRec = function(root, p) {
    if (root == null || p == null) {
        return null;
    }
    if (p.val < root.val) {
        let s = inorderSuccessorRec(root.left, p);
        return (s === null)? root : s;
    } else { // p.val >= root.val
        return inorderSuccessorRec(root.right, p);
    }
};
var inorderSuccessorIter = function(root, p) {
    if (root == null || p == null) {
        return null;
    }
    let succ = null;
    while (root !== null) {
        if (p.val < root.val) {
            succ = root;
            root = root.left;
        } else {
            root = root.right;
        }
    }
    return succ;
};
var inorderPredecessorRec = function(root, p) {
    if (root == null || p == null) {
        return null;
    }
    if (p.val <= root.val) {
        return inorderPredecessorRec(root.left, p);
    } else {
        let s = inorderPredecessorRec(root.right, p);
        return (s === null)? root : s;
    }
}
var inorderPredecessorIter = function(root, p) {
    if (root == null || p == null) {
        return null;
    }
    let pre = null;
    while (root !== null) {
        if (p.val > root.val) {
            pre = root;
            root = root.right;
        } else {
            root = root.left;
        }
    }
    return pre;
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
let des = "6,2,0,#,#,4,3,#,#,5,#,#,8,7,#,#,9,#,#";
let tree = Tree.deserialize(des);
console.log("Testing tree", des);
[
    0,2,3,4,5,6,7,8,9,
].forEach(t => {
    let p = find(tree, t);
    let ansRec = inorderSuccessorRec(tree, p);
    let ansIte = inorderSuccessorIter(tree, p);
    console.log("  Inorder successor of", p.val, "->",
                (ansRec == null)? null : ansRec.val, "&&",
                (ansIte == null)? null : ansIte.val);
    ansRec = inorderPredecessorRec(tree, p);
    ansIte = inorderPredecessorIter(tree, p);
    console.log("  Preorder predecessor of", p.val, "->",
                (ansRec == null)? null : ansRec.val, "&&",
                (ansIte == null)? null : ansIte.val);
    console.log("  ---");
});
