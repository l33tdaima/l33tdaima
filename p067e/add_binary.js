/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let ans = '';
  let [carry, i, j] = [0, a.length - 1, b.length - 1];
  while (i >= 0 || j >= 0 || carry === 1) {
    carry += i >= 0 ? a[i--] - '0' : 0;
    carry += j >= 0 ? b[j--] - '0' : 0;
    ans = (carry % 2 == 1 ? '1' : '0') + ans;
    carry = ~~(carry / 2);
  }
  return ans;
};
// TEST
[
  ['11', '1', '100'],
  ['10', '1010', '1100'],
  ['110', '10001', '10111'],
  ['111111', '1', '1000000'],
].forEach(([a, b, expected]) => {
  const actual = addBinary(a, b);
  console.log(a, '+', b, '->', actual);
  console.assert(actual == expected);
});
