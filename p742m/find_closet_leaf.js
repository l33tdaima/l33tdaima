/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const Tree = require("binary_tree");
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var findClosestLeaf = function(root, k) {
  /* Recursive helper to carry info from child to parent:
   * - distance from this root to target
   * - closest leaf to target: [value, dist]
   * - closest leaf to current node: [value, dist]
   */
  const recHelper = function(node) {
    if (node === null) {
      return {
        distToTarget: Number.MAX_SAFE_INTEGER,
        cloLeafToNode: [null, Number.MAX_SAFE_INTEGER],
        cloLeafToTarget: [null, Number.MAX_SAFE_INTEGER]
      };
    }
    let ansl = recHelper(node.left);
    let ansr = recHelper(node.right);
    let ret = {
      distToTarget: node.val === k ? 0 : Number.MAX_SAFE_INTEGER,
      cloLeafToNode: []
    };
    // compute distance to target
    if (ansl.distToTarget !== ansr.distToTarget) {
      ret.distToTarget = Math.min(ansl.distToTarget, ansr.distToTarget) + 1;
    }
    // compute closest distance to this node
    if (node.left === null && node.right === null) {
      ret.cloLeafToNode = [node.val, 0];
    } else {
      ret.cloLeafToNode = [
        ansl.cloLeafToNode[1] <= ansr.cloLeafToNode[1]
          ? ansl.cloLeafToNode[0]
          : ansr.cloLeafToNode[0],
        Math.min(ansl.cloLeafToNode[1], ansr.cloLeafToNode[1]) + 1
      ];
    }
    // compute closest distance to target
    if (node.val === k) {
      ret.cloLeafToTarget = [ret.cloLeafToNode[0], ret.cloLeafToNode[1]];
    } else {
      ret.cloLeafToTarget = [null, Number.MAX_SAFE_INTEGER];
      if (ansl.cloLeafToTarget[0] || ansr.cloLeafToTarget[0]) {
        ret.cloLeafToTarget[0] = ansl.cloLeafToTarget[0]
          ? ansl.cloLeafToTarget[0]
          : ansr.cloLeafToTarget[0];
        ret.cloLeafToTarget[1] = Math.min(
          ansl.cloLeafToTarget[1],
          ansr.cloLeafToTarget[1]
        );
        if (ret.cloLeafToNode[1] + ret.distToTarget < ret.cloLeafToTarget[1]) {
          ret.cloLeafToTarget[0] = ret.cloLeafToNode[0];
          ret.cloLeafToTarget[1] = ret.cloLeafToNode[1] + ret.distToTarget;
        }
      }
    }
    return ret;
  };
  const { cloLeafToTarget } = recHelper(root);
  return cloLeafToTarget[0];
};
// TESTS
[
  {
    tree: "1,#,#",
    k: 1,
    expected: 1
  },
  {
    tree: "1,#,2,#,#",
    k: 1,
    expected: 2
  },
  {
    tree: "1,2,#,#,3,#,#",
    k: 1,
    expected: 2
  },
  {
    tree: "1,2,4,5,6,#,#,#,#,3,#,#",
    k: 2,
    expected: 3
  },
  {
    tree: "1,2,4,5,6,#,#,#,3,#,#",
    k: 2,
    expected: 3
  }
].forEach(t => {
  let root = Tree.deserialize(t.tree);
  let actual = findClosestLeaf(root, t.k);
  console.log("Find closest leaf in", t.tree, "to", t.k, "->", actual);
  console.assert(actual === t.expected);
});
