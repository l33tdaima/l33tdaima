/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  const distance2 = (a, b) => {
    const dx = a[0] - b[0];
    const dy = a[1] - b[1];
    return dx * dx + dy * dy;
  };
  let distCount = new Map();
  let ans = 0;
  for (let i = 0; i < points.length; ++i) {
    for (let j = 0; j < points.length; ++j) {
      if (i === j) continue;
      let d = distance2(points[i], points[j]);
      let c = distCount.get(d) || 0;
      distCount.set(d, ++c);
    }
    for (let dc of distCount) {
      ans += dc[1] * (dc[1] - 1);
    }
    distCount.clear();
  }
  return ans;
};
// TESTS
[{ points: [[0, 0], [1, 0], [2, 0]], expected: 2 }].forEach(t => {
  const actual = numberOfBoomerangs(t.points);
  console.log("Number of Boomerangs -> ", actual);
  console.assert(actual === t.expected);
});
