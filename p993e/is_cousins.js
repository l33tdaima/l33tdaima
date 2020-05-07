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
var isCousinsDFS = function (root, x, y) {
  let [xinfo, yinfo] = [null, null];
  const dfs = (node, parent, depth) => {
    if (node == null) return;
    if (node.val === x) xinfo = [parent, depth];
    if (node.val === y) yinfo = [parent, depth];
    dfs(node.left, node.val, depth + 1);
    dfs(node.right, node.val, depth + 1);
  };
  dfs(root, 0, 0);
  return xinfo[0] !== yinfo[0] && xinfo[1] === yinfo[1];
};

var isCousinsBFS = function (root, x, y) {
  const queue = [[root, 0]];
  while (queue.length > 0) {
    let [xp, yp] = [null, null]; // parent of x and y
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
  return false; // invalid inputs
};
// TESTS
[
  {
    tree: '1,2,4,#,#,#,3,#,#',
    x: 4,
    y: 3,
    expected: false,
  },
  {
    tree: '1,2,#,4,#,#,3,#,5,#,#',
    x: 4,
    y: 5,
    expected: true,
  },
  {
    tree: '1,2,#,4,#,#,3,#,#',
    x: 2,
    y: 3,
    expected: false,
  },
].forEach((t) => {
  const tree = Tree.deserialize(t.tree);
  console.log('Is', t.x, 'and', t.y, 'cousins in', t.tree, '->', t.expected);
  console.assert(t.expected === isCousinsDFS(tree, t.x, t.y));
  console.assert(t.expected === isCousinsBFS(tree, t.x, t.y));
});
