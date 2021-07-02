/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  let ans = [0];
  for (let i = 0; i < n; ++i) {
    for (let j = ans.length - 1; j >= 0; --j) {
      // '1' + reversed list of (n-1)
      ans.push(ans[j] | (1 << i));
    }
  }
  return ans;
};
// TEST
[0, 1, 2, 3, 4].forEach((n) => {
  console.log('Gray code of', n, '->');
  console.log('  ', grayCode(n));
});
