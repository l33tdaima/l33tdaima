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
 * @param {number} k
 * @return {boolean}
 */
var findTargetV1 = function (root, k) {
  let nums = [];
  const toArray = (node) => {
    if (node == null) return;
    toArray(node.left);
    nums.push(node.val);
    toArray(node.right);
  };
  toArray(root);

  for (let lo = 0, hi = nums.length - 1; lo < hi; ) {
    let s = nums[lo] + nums[hi];
    if (s === k) return true;
    if (s < k) lo++;
    else hi--;
  }
  return false;
};

var findTargetV2 = function (root, k) {
  let set = new Set();
  let recTraverse = function (p) {
    if (p == null) return false;
    if (set.has(k - p.val)) return true;
    set.add(p.val);
    return recTraverse(p.left) || recTraverse(p.right);
  };
  return recTraverse(root);
};
// TEST
[
  ['5,3,2,#,#,4,#,#,6,#,7,#,#', 9, true],
  ['5,3,2,#,#,4,#,#,6,#,7,#,#', 28, false],
  ['2,1,#,#,3,#,#', 1, false],
  ['2,1,#,#,3,#,#', 4, true],
  ['2,1,#,#,3,#,#', 3, true],
].forEach(([tree, k, expected]) => {
  let root = Tree.deserialize(tree);
  const actual1 = findTargetV1(root, k);
  const actual2 = findTargetV2(root, k);
  console.log(
    'There exist two elements in BST',
    tree,
    'sum to',
    k,
    '->',
    actual1
  );
  console.assert(actual1 === expected && actual2 === expected);
});
