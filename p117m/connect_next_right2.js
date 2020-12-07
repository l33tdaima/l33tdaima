/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
const Tree = require('binary_tree_link');
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root == null) return root;
  // nHead: haead of next level, to be set when iterating this level pHead
  // nPrev: holder of prev node when traversing next level
  let [pHead, nHead, nPrev] = [root, null, null];
  while (pHead) {
    let p = pHead;
    while (p) {
      // iterate horizon within this level
      if (p.left) {
        if (nPrev) nPrev.next = p.left;
        else nHead = p.left;
        nPrev = p.left;
      }
      if (p.right) {
        if (nPrev) nPrev.next = p.right;
        else nHead = p.right;
        nPrev = p.right;
      }
      p = p.next;
    }
    [pHead, nHead, nPrev] = [nHead, null, null];
  }
  return root;
};
// TEST
[
  '#',
  '1,#,#',
  '1,2,4,#,#,5,#,#,3,#,7,#,#',
  '1,2,4,#,#,#,3,6,#,#,#',
  '1,2,#,4,#,#,3,#,7,#,#',
].forEach((t) => {
  let tree = Tree.deserializeNoLink(t);
  connect(tree);
  console.log('Dump links of tree ->');
  console.log(' ', t);
  console.log(' ', Tree.serializeLink(tree));
});
