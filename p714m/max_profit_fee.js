/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let dpClosed = 0;
  let dpOpen = Number.MIN_SAFE_INTEGER;
  for (let price of prices) {
    let prevClosed = dpClosed;
    dpClosed = Math.max(dpClosed, dpOpen + price - fee); // hold or sell
    dpOpen = Math.max(dpOpen, prevClosed - price); // hold or buy
  }
  return dpClosed;
};
// TEST
[
  [[2], 0, 0],
  [[1, 3], 2, 0],
  [[1, 3, 2, 8, 4, 9], 2, 8],
  [[1, 3, 7, 5, 10, 3], 3, 6],
].forEach(([prices, fee, expected]) => {
  const actual = maxProfit(prices, fee);
  console.log(
    'Max profit you can achieve',
    prices,
    'with fee',
    fee,
    '->',
    actual
  );
  console.assert(actual === expected);
});
