/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  if (k === 0) return 0;
  if (k >= ~~(prices.length / 2)) {
    // equivalent to Inf transactions
    let ansInf = 0;
    for (let i = 1; i < prices.length; ++i) {
      if (prices[i] > prices[i - 1]) {
        ansInf += prices[i] - prices[i - 1];
      }
    }
    return ansInf;
  }
  let dpClosed = Array.from({ length: k + 1 }, (v) => 0);
  let dpOpen = Array.from({ length: k + 1 }, (v) => Number.MIN_SAFE_INTEGER);
  for (let p of prices) {
    for (let j = k; j > 0; --j) {
      dpClosed[j] = Math.max(dpClosed[j], dpOpen[j] + p);
      dpOpen[j] = Math.max(dpOpen[j], dpClosed[j - 1] - p);
    }
  }
  return dpClosed[k];
};
// TEST
[
  [[2], 0, 0],
  [[1, 3], 2, 2],
  [[2, 4, 1], 2, 2],
  [[3, 2, 6, 5, 0, 3], 2, 7],
  [[1, 3, 2, 8, 4, 9], 2, 12],
  [[7, 1, 5, 3, 6, 4], 5, 7],
  [[7, 6, 4, 3, 1], 3, 0],
].forEach(([prices, k, expected]) => {
  const actual = maxProfit(k, prices);
  console.log(
    'Max profit you can make from',
    prices,
    'with k =',
    k,
    '->',
    actual
  );
  console.assert(actual === expected);
});
