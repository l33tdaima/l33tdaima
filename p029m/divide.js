/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let negative = (dividend < 0) ^ (divisor < 0);
  let n = Math.abs(dividend);
  let d = Math.abs(divisor);
  let ans = 0;
  while (n >= d) {
    n -= d;
    ans++;
  }
  return negative ? -1 * ans : ans;
};
// TESTS
[
  [10, 3, 3],
  [7, -3, -2],
  [-2147483648, -1, 2147483648]
].forEach(t => {
  const actual = divide(t[0], t[1]);
  console.log('', t[0], '/', t[1], '->', actual);
  console.assert(actual === t[2]);
});
