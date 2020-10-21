/**
 * // Definition for a Node.
 */
function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  const seen = new Map();

  let recClone = function (node) {
    if (node === null) return null;
    if (seen.has(node.val)) return seen.get(node.val);
    let clone = new Node(node.val);
    seen.set(node.val, clone);
    for (let n of node.neighbors) {
      clone.neighbors.push(recClone(n));
    }
    return clone;
  };

  return recClone(node);
};
