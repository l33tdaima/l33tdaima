/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
const Tree = require('binary_tree');
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
  // Helper function to convert a given node
  // return the references to first and last of converted linked list
  const recConvert = function(node) {
    let [first, last] = [node, node];
    if (node.left !== null) {
      let [lfirst, llast] = recConvert(node.left);
      first = lfirst;
      llast.right = node;
      node.left = llast;
    }
    if (node.right !== null) {
      let [rfirst, rlast] = recConvert(node.right);
      last = rlast;
      node.right = rfirst;
      rfirst.left = node;
    }
    return [first, last];
  };

  if (root == null) return null;
  let [first, last] = recConvert(root);
  first.left = last;
  last.right = first;
  return first;
};

// TEST
[
  '#',
  '1,#,#',
  '2,1,#,#,3,#,#',
  '4,2,1,#,#,3,#,#,5,#,#',
  '4,2,1,#,#,3,#,#,5,#,6,#,7,#,8,#,#'
].forEach(t => {
  const root = Tree.deserialize(t);
  const head = treeToDoublyList(root);
  let deserList = [];
  if (head !== null) {
    let p = head;
    do {
      deserList.push(p.val);
      p = p.right;
    } while (p !== head);
  }
  console.log('Tree', t, 'to doubly linked list ->', deserList);
});
