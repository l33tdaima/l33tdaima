/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let [dpClosed, dpClosedPrev, dpOpen] = [0, 0, Number.MIN_SAFE_INTEGER];
  for (let p of prices) {
    let oldClosed = dpClosed;
    dpClosed = Math.max(dpClosed, dpOpen + p); // hold or sell
    dpOpen = Math.max(dpOpen, dpClosedPrev - p); // hold or buy
    dpClosedPrev = oldClosed;
  }
  return dpClosed;
};
// TEST
[
  [[2], 0],
  [[1, 3], 2],
  [[1, 2, 3, 0, 2], 3],
  [[1, 3, 2, 8, 4, 9], 8],
].forEach((t) => {
  const actual = maxProfit(t[0]);
  console.log(
    'Max profit you can make from',
    t[0],
    'with cooldown',
    '->',
    actual
  );
  console.assert(actual === t[1]);
});
