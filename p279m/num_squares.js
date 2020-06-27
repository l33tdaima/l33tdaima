/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const numSq = [0];
  for (let i = 1; i <= n; ++i) {
    let least = Number.MAX_SAFE_INTEGER;
    for (let k = 1; k * k <= i; ++k)
      least = Math.min(least, numSq[i - k * k] + 1);
    numSq.push(least);
  }
  return numSq[n];
};
// TESTS
[
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 1],
  [5, 2],
  [6, 3],
  [7, 4],
  [8, 2],
  [12, 3],
  [13, 2],
].forEach((t) => {
  const actual = numSquares(t[0]);
  console.log('The least # of squares sum to', t[0], '->', actual);
  console.assert(actual === t[1]);
});
