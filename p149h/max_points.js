/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  const gcd = (a, b) => {
    if (b === 0) return a;
    else return gcd(b, a % b);
  };
  let maxPt = 0;
  for (let i = 0; i < points.length; ++i) {
    let maxLines = 0;
    const map = new Map();
    for (let j = i + 1; j < points.length; ++j) {
      // distances of each coordinate
      let [dx, dy] = [points[j][0] - points[i][0], points[j][1] - points[i][1]];
      const d = gcd(dx, dy);
      dx /= d;
      dy /= d;
      const key = `${dy}/${dx}`;
      const count = (map.get(key) || 0) + 1;
      map.set(key, count);
      maxLines = Math.max(maxLines, count);
    }
    maxPt = Math.max(maxPt, maxLines + 1);
  }
  return maxPt;
};
// TESTS
[
  [[[0, 0]], 1],
  [
    [
      [0, 0],
      [1, 1],
    ],
    2,
  ],
  [
    [
      [1, 1],
      [2, 2],
      [3, 3],
    ],
    3,
  ],
  [
    [
      [1, 1],
      [3, 2],
      [5, 3],
      [4, 1],
      [2, 3],
      [1, 4],
    ],
    4,
  ],
].forEach(([points, expected]) => {
  const actual = maxPoints(points);
  console.log('Max points in', points, '->', actual);
  console.assert(actual === expected);
});
