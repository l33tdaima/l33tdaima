/** Imperative style
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let resultArray = Array.from({ length: num1.length + num2.length }, (v) => 0);
  for (let i = num1.length - 1; i >= 0; --i) {
    for (let j = num2.length - 1; j >= 0; --j) {
      let prod = (num1[i] - '0') * (num2[j] - '0');
      let [msb, lsb] = [i + j, i + j + 1];
      let sum = prod + resultArray[lsb];
      resultArray[msb] += ~~(sum / 10);
      resultArray[lsb] = sum % 10;
    }
  }
  // remove leading zeros
  while (resultArray[0] === 0 && resultArray.length > 1) resultArray.shift();
  return resultArray.join('');
};
// TESTS
[
  ['0', '987', '0'],
  ['2', '3', '6'],
  ['123', '456', '56088'],
  ['123', '45', '5535'],
].forEach(([num1, num2, expected]) => {
  const actual = multiply(num1, num2);
  console.log(num1, '*', num2, '->', actual);
  console.assert(actual === expected);
});
