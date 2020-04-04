/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  if (num <= 1) return false;
  let sum = 1;
  for (let i = 2; i * i < num; ++i) {
    if (num % i === 0) sum += i + num / i;
    if (sum > num) return false;
  }
  return sum === num;
};
// TEST
[
  [1, false],
  [6, true],
  [28, true],
  [34, false],
  [496, true],
  [8128, true],
  [33550336, true],
].forEach((t) => {
  const actual = checkPerfectNumber(t[0]);
  console.log('Is', t[0], 'a perfect number? ->', actual);
  console.assert(actual === t[1]);
});
