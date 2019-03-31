/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
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
