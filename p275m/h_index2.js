/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  const N = citations.length;
  let [lo, hi] = [0, N]; // min and max of hIndex
  while (lo < hi) {
    let mid = ~~((lo + hi) / 2) + 1; // go ceiling
    if (citations[N - mid] >= mid) {
      lo = mid;
    } else {
      hi = mid - 1;
    }
  }
  return lo;
};
// TEST
[
  [[8, 8, 8, 8, 9], 5],
  [[0, 0, 0, 0, 0, 0], 0],
  [[0, 0, 0, 0, 0, 100], 1],
  [[0, 1, 3, 5, 6], 3],
  [[0, 1, 2, 2, 3, 4, 8], 3],
].forEach((t) => {
  let act = hIndex(t[0]);
  console.log('H-Index of', t[0], '->', act);
  console.assert(act === t[1]);
});
