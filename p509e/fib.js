/**
 * @param {number} N
 * @return {number}
 */
var fibRec = function(N) {
  if (N <= 1) return N;
  return fib(N - 1) + fib(N - 2);
};
var fib = function(N) {
  if (N <= 1) return N;
  let [a, b] = [0, 1];
  while (N-- > 1) {
    let s = a + b;
    a = b;
    b = s;
  }
  return b;
};
for (let n = 0; n <= 30; ++n) {
  console.log("Fib(" + n + ") ->", fib(n));
}
