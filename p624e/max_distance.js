/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
  let res = 0;
  let minVal = Number.MAX_SAFE_INTEGER;
  let maxVal = Number.MIN_SAFE_INTEGER;
  for (let a of arrays) {
    res = Math.max(res, a[a.length - 1] - minVal, maxVal - a[0]);
    minVal = Math.min(minVal, a[0]);
    maxVal = Math.max(maxVal, a[a.length - 1]);
  }
  return res;
};
[
  [[1], [5]],
  [[5, 7], [4, 5, 6], [2, 5, 7, 9], [3, 4, 5, 6, 7], [4, 6], [5, 8, 9, 10]]
].forEach(t => {
  console.log("Max distance in arrays ->", maxDistance(t));
});
