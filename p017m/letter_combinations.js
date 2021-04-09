/**
 * @param {string} digits
 * @return {string[]}
 */
const mapping = {
  0: [],
  1: [],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};
var letterCombinationsDFS = function (digits) {
  let cartesianProduct = function (as, bs) {
    const product = [];
    for (let a of as) {
      for (let b of bs) {
        product.push(a.concat(b));
      }
    }
    return product;
  };
  if (digits.length === 0) return [];
  if (digits.length === 1) return mapping[digits[0]];
  return cartesianProduct(
    mapping[digits[0]],
    letterCombinationsDFS(digits.substr(1))
  );
};

var letterCombinationsBFS = function (digits) {
  if (digits.length === 0 || digits === '1') return [];
  let ans = [''];
  for (let i = 0; i < digits.length; ++i) {
    let d = digits[i];
    while (ans[0].length === i) {
      let base = ans.shift();
      for (let c of mapping[d]) {
        ans.push(base + c);
      }
    }
  }
  return ans;
};
[
  ['', []],
  ['1', []],
  ['2', ['a', 'b', 'c']],
  ['23', ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']],
].forEach(([digits, expected]) => {
  const actual = letterCombinationsBFS(digits);
  console.log('Letter combinations of', digits, '->', actual);
  console.assert(actual.toString() === expected.toString());
  console.assert(
    letterCombinationsDFS(digits).toString() === expected.toString()
  );
});
