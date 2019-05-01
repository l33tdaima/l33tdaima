/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
const NaryTree = require('n_ary_tree');
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root == null) return 0;
  let maxChildren = 0;
  for (let c of root.children) {
    maxChildren = Math.max(maxChildren, maxDepth(c));
  }
  return maxChildren + 1;
};

var maxDepthIter = function(root) {
  const stack = [];
  if (root != null) stack.push([1, root]);
  let maxDepth = 0;
  while (stack.length !== 0) {
    let [currDepth, curr] = stack[stack.length - 1];
    stack.pop();
    if (curr != null) {
      maxDepth = Math.max(maxDepth, currDepth);
      for (let c of curr.children) stack.push([currDepth + 1, c]);
    }
  }
  return maxDepth;
};

// TESTS
[
  '',
  '1 0',
  '1 1 2 0',
  '1 2 2 0 3 0',
  '1 3 2 0 3 0 4 0',
  '1 3 3 2 5 0 6 0 2 0 4 0'
].forEach(t => {
  const tree = NaryTree.deserialize(t);
  console.log('Max depth of', t, '->', maxDepth(tree));
  console.assert(maxDepth(tree) === maxDepthIter(tree));
});
