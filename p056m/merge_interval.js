/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let merged = [];
  for (let i of intervals) {
    // without overlapping
    if (merged.length === 0 || merged[merged.length - 1][1] < i[0]) {
      merged.push(i);
    } else {
      // with overlapping
      merged[merged.length - 1][1] = Math.max(
        merged[merged.length - 1][1],
        i[1]
      );
    }
  }
  return merged;
};
// TESTS
[
  [
    [1, 4],
    [5, 8]
  ],
  [
    [1, 4],
    [4, 5]
  ],
  [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18]
  ]
].forEach(t => {
  const actual = merge(t);
  console.log('Merge', t, '->', actual);
});
