/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  const edgeCount = new Map(); // <edgePos, edgeCount>
  let maxCount = 0;
  for (let row of wall) {
    let s = 0;
    for (let b = 0; b < row.length - 1; ++b) {
      s += row[b];
      let c = edgeCount.get(s) || 0;
      edgeCount.set(s, c + 1);
      maxCount = Math.max(maxCount, c + 1);
    }
  }
  return wall.length - maxCount;
};
// TESTS
[
  [
    [
      [1, 2, 2, 1],
      [3, 1, 2],
      [1, 3, 2],
      [2, 4],
      [3, 1, 2],
      [1, 3, 1, 1],
    ],
    2,
  ],
  [[[3], [3], [3]], 3],
].forEach(([wall, expected]) => {
  const actual = leastBricks(wall);
  console.log('Least number of crossed bricks ->', actual);
  console.assert(actual === expected);
});
