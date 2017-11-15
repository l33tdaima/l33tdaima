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
var diameterOfBinaryTree = function(root) {
    var recDia = function(p) {
        if (p == null) {
            return { depth: 0,
                     dia:   0 };
        }
        if (p.left === null && p.right === null) {
            return { depth: 1,
                     dia:   0 };
        }
        let lt = recDia(p.left);
        let rt = recDia(p.right);
        return { depth: Math.max(lt.depth, rt.depth) + 1,
                 dia: Math.max(lt.dia, rt.dia, lt.depth + rt.depth)};
    };
    return recDia(root).dia;
};
// TEST
[
    "#",
    "1,#,#",
    "1,2,#,#,#",
    "1,2,#,#,3,#,#",
    "1,2,4,#,#,5,#,#,3,#,#",
    "1,2,4,6,7,#,#,#,#,5,#,8,#,9,#,#,3,#,#"
].forEach(function(test){
    let tree = Tree.deserialize(test);
    console.log("Diagmeter of", test,
                "->", diameterOfBinaryTree(tree));
});
