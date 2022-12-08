/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const Tree = require('binary_tree');
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
// Generator version is much slower
var leafSimilar = function (root1, root2) {
  function* seqGenerator(root) {
    if (root == null) return;
    if (root.left == null && root.right == null) yield root.val;
    yield* seqGenerator(root.left);
    yield* seqGenerator(root.right);
  }
  let seq1 = seqGenerator(root1);
  let seq2 = seqGenerator(root2);
  let v1, v2;
  do {
    [v1, v2] = [seq1.next(), seq2.next()];
    if (v1.value !== v2.value) return false;
  } while (!v1.done && !v2.done);
  return v1.done && v2.done;
};
// TESTS
[
  {
    tree1: '3,#,#',
    tree2: '1,#,#',
    expected: false,
  },
  {
    tree1: '3,5,6,#,#,2,7,#,#,4,#,#,1,9,#,#,8,#,#',
    tree2: '3,5,6,#,#,7,#,#,1,4,#,#,2,9,#,#,8,#,#',
    expected: true,
  },
].forEach(({ tree1, tree2, expected }) => {
  const root1 = Tree.deserialize(tree1);
  const root2 = Tree.deserialize(tree2);
  const actual = leafSimilar(root1, root2);
  console.log('Two trees', tree1, tree2, 'are leaf similar ->', actual);
  console.assert(actual === expected);
});
