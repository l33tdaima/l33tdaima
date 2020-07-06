/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let [result, carry] = [[], 1];
  for (let i = digits.length - 1; i >= 0; i--) {
    result[i] = (digits[i] + carry) % 10;
    carry = ~~((digits[i] + carry) / 10);
  }
  if (carry > 0) return [1].concat(result);
  else return result;
};

[
  [[0], [1]],
  [[5], [6]],
  [
    [1, 2, 3],
    [1, 2, 4],
  ],
  [
    [1, 0, 0],
    [1, 0, 1],
  ],
  [
    [3, 8, 9, 4],
    [3, 8, 9, 5],
  ],
  [
    [3, 8, 4, 9],
    [3, 8, 5, 0],
  ],
  [
    [9, 9, 9, 9],
    [1, 0, 0, 0, 0],
  ],
].forEach((t) => {
  const actual = plusOne(t[0]);
  console.log('Plus one to', t[0], '->', actual);
});
