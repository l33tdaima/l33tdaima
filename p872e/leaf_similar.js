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
var leafSimilarV1 = function(root1, root2) {
  const leafSequence = (root, seq) => {
    if (root == null) return;
    if (root.left == null && root.right == null) {
      seq.push(root.val);
      return;
    }
    leafSequence(root.left, seq);
    leafSequence(root.right, seq);
  };
  let [seq1, seq2] = [[], []];
  leafSequence(root1, seq1);
  leafSequence(root2, seq2);
  if (seq1.length !== seq2.length) return false;
  for (let i = 0; i < seq1.length; ++i) {
    if (seq1[i] !== seq2[i]) return false;
  }
  return true;
};
// Generator version is much slower
var leafSimilarV2 = function(root1, root2) {
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
    expected: false
  },
  {
    tree1: '3,5,6,#,#,2,7,#,#,4,#,#,1,9,#,#,8,#,#',
    tree2: '3,5,6,#,#,7,#,#,1,4,#,#,2,9,#,#,8,#,#',
    expected: true
  }
].forEach(t => {
  const root1 = Tree.deserialize(t.tree1);
  const root2 = Tree.deserialize(t.tree2);
  const actual = leafSimilarV1(root1, root2);
  console.log('Two tree', t.tree1, t.tree2, 'are leaf similar ->', actual);
  console.assert(actual === t.expected);
  console.assert(leafSimilarV2(root1, root2) === t.expected);
});
