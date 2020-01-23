/**
 * @param {number float} x
 * @param {number int} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;
  if (n < 0) return 1 / myPow(x, -n);
  if (n % 2 === 0) return myPow(x * x, n / 2);
  else return x * myPow(x * x, ~~(n / 2));
};
// TEST
[
  [2.0, 10],
  [2.1, 3],
  [2.0, -2],
  [0, 5],
  [1, 100],
  [23.123, 9]
].forEach(t => {
  let actual = myPow(t[0], t[1]);
  console.log(`Pow(${t[0]}, ${t[1]}) = ${actual}`);
  console.assert(actual === Math.pow(t[0], t[1]));
});
