/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndexBySort = function (citations) {
  citations.sort((a, b) => a - b);
  let N = citations.length;
  for (let h = N; h > 0; h--) {
    if (citations[N - h] >= h) return h;
  }
  return 0;
};
var hIndexByCount = function (citations) {
  const N = citations.length;
  let citCount = Array.from({ length: N + 1 }, (v) => 0);
  for (let c of citations) {
    citCount[Math.min(c, N)]++;
  }
  let [sum, h] = [citCount[N], N];
  while (h > sum) {
    sum += citCount[--h];
  }
  return h;
};
// TEST
[
  [[1, 1], 1],
  [[6, 6, 4, 8, 4, 3, 3, 10], 4],
  [[3, 0, 6, 1, 5], 3],
  [[9, 10, 9, 8, 13, 20, 9], 7],
  [[0, 0, 0, 0, 0, 0], 0],
  [[0, 0, 100, 0, 0, 0], 1],
].forEach((t) => {
  let hIndex = hIndexBySort(t[0]);
  console.log('H-Index of', t[0], '->', hIndex);
  console.assert(hIndex === t[1]);
  console.assert(hIndexByCount(t[0]) === t[1]);
});
