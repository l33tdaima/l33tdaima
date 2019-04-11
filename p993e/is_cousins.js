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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  const queue = [[root, 0]];
  while (queue.length > 0) {
    let [xp, yp] = [null, null];
    const count = queue.length;
    for (let i = 0; i < count; ++i) {
      let [node, pval] = queue.shift();
      if (node.val === x) xp = pval;
      else if (node.val === y) yp = pval;
      // push the next level
      if (node.left) queue.push([node.left, node.val]);
      if (node.right) queue.push([node.right, node.val]);
    }
    if (xp === null && xp === null) continue;
    else if (xp && yp) return xp !== yp;
    else return false;
  }
  console.assert(false, 'Not found');
  return false; // invalid inputs
};
// TESTS
[
  {
    tree: '1,2,4,#,#,#,3,#,#',
    x: 4,
    y: 3,
    expected: false
  },
  {
    tree: '1,2,#,4,#,#,3,#,5,#,#',
    x: 4,
    y: 5,
    expected: true
  },
  {
    tree: '1,2,#,4,#,#,3,#,#',
    x: 2,
    y: 3,
    expected: false
  }
].forEach(t => {
  const tree = Tree.deserialize(t.tree);
  const actual = isCousins(tree, t.x, t.y);
  console.log('Is', t.x, 'and', t.y, 'cousins in', t.tree, '->', actual);
  console.assert(actual === t.expected);
});
