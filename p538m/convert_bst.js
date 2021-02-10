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
 * @return {TreeNode}
 */
var convertBST = function (root) {
  // return the sum of greater keys
  const recFold = function (p, s) {
    if (p == null) return s;
    p.val += recFold(p.right, s);
    return recFold(p.left, p.val);
  };
  recFold(root, 0);
  return root;
};
// TEST
[
  [
    '4,1,0,#,#,2,#,3,#,#,6,5,#,#,7,#,8,#,#',
    '30,36,36,#,#,35,#,33,#,#,21,26,#,#,15,#,8,#,#',
  ],
  ['0,#,1,#,#', '1,#,1,#,#'],
  ['1,0,#,#,2,#,#', '3,3,#,#,2,#,#'],
  ['3,2,1,#,#,#,4,#,#', '7,9,10,#,#,#,4,#,#'],
].forEach(([tree, expected]) => {
  const actual = Tree.serialize(convertBST(Tree.deserialize(tree)));
  console.log('Convert BST', tree, 'to greater tree ->', actual);
  console.assert(actual === expected);
});
