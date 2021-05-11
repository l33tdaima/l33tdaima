/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let isPrime = Array.from({ length: n }, (v) => true);
  let count = 0;
  // sieve of Eratosthenes, if only need to filter out all non-primes
  // we can simply stop at i <= sqrt(n)
  for (let i = 2; i < n; ++i) {
    if (isPrime[i]) {
      for (let j = 2; i * j < n; ++j) isPrime[i * j] = false;
      count++;
    }
  }
  return count;
};
// TEST
[
  [0, 0],
  [3, 1],
  [4, 2],
  [5, 2],
  [6, 3],
  [7, 3],
  [8, 4],
  [10, 4],
  [15, 6],
  [300, 62],
  [1000, 168],
  [5000, 669],
].forEach(([n, expected]) => {
  let actual = countPrimes(n);
  console.log('# of primes less than', n, '->', actual);
  console.assert(actual === expected);
});
