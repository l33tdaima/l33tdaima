/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n <= 1) return n;
  let f = [0, 1];
  for (let i = 2; i <= n; ++i) f = [f[1], f[0] + f[1]];
  return f[1];
};
for (let n = 0; n <= 30; ++n) {
  console.log('F(' + n + ') =', fib(n));
}
