/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [];
  for (let i of intervals) {
    // without overlapping
    if (merged.length === 0 || merged[merged.length - 1][1] < i[0]) {
      merged.push(i);
    } else {
      // with overlapping
      let last = merged.length - 1;
      merged[last][1] = Math.max(merged[last][1], i[1]);
    }
  }
  return merged;
};
// TESTS
[
  [
    [1, 4],
    [5, 8],
  ],
  [
    [1, 4],
    [4, 5],
  ],
  [
    [15, 18],
    [1, 3],
    [2, 6],
    [8, 10],
  ],
].forEach((t) => {
  const actual = merge(t);
  console.log('Merge', t, '->', actual);
});
