/**
 * // Definition for a QuadTree node.
 */
function Node(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
  this.val = val;
  this.isLeaf = isLeaf;
  this.topLeft = topLeft;
  this.topRight = topRight;
  this.bottomLeft = bottomLeft;
  this.bottomRight = bottomRight;
}
/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {
  if (grid.length === 0) return null;
  const recHelper = (r1, c1, r2, c2) => {
    if (r1 === r2 && c1 === c2)
      return new Node(grid[r1][c1], true, null, null, null, null);
    let p = grid[r1][c1];
    for (let i = r1; i <= r2; ++i) {
      for (let j = c1; j <= c2; ++j) {
        if (grid[i][j] !== p) {
          // split and recurrsion
          const rm = (r1 + r2 + 1) / 2;
          const cm = (c1 + c2 + 1) / 2;
          let tl = recHelper(r1, c1, rm - 1, cm - 1);
          let tr = recHelper(r1, cm, rm - 1, c2);
          let bl = recHelper(rm, c1, r2, cm - 1);
          let br = recHelper(rm, cm, r2, c2);
          return new Node(grid[i][j], false, tl, tr, bl, br);
        }
      }
    }
    return new Node(p, true, null, null, null, null);
  };
  return recHelper(0, 0, grid.length - 1, grid[0].length - 1);
};
