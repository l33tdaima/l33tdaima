/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
const compare = (p1, p2) =>
  p1[0] * p1[0] + p1[1] * p1[1] - p2[0] * p2[0] - p2[1] * p2[1];

const helper = (points, l, r) => {
  const pivot = Array.from(points[l]);
  while (l < r) {
    while (l < r && compare(points[r], pivot) >= 0) r--;
    points[l] = points[r];
    while (l < r && compare(points[l], pivot) <= 0) l++;
    points[r] = points[l];
  }
  points[l] = [...pivot];
  return l;
};

var kClosest = function (points, K) {
  let [l, r] = [0, points.length - 1];
  while (l < r) {
    let mid = helper(points, l, r);
    if (mid === K) break;
    if (mid < K) l = mid + 1;
    else r = mid - 1;
  }
  return points.slice(0, K);
};
// TESTS
[
  {
    points: [
      [1, 3],
      [-2, 2],
    ],
    K: 1,
  },
  {
    points: [
      [3, 3],
      [5, -1],
      [-2, 4],
    ],
    K: 2,
  },
].forEach((t) => {
  console.log('K closet points in', t.points, '->', kClosest(t.points, t.K));
});
