/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let ans = [[1]];
  for (let r = 1; r < numRows; ++r) {
    let currRow = Array.from({ length: r + 1 }, (v) => 1);
    for (let i = 1; i < currRow.length - 1; ++i) {
      currRow[i] = ans[r - 1][i - 1] + ans[r - 1][i];
    }
    ans.push(currRow);
  }
  return ans;
};
// TEST
[1, 2, 3, 4, 5, 10].forEach((t) => {
  console.log("Pascal's triangle of order", t, '->');
  console.log(generate(t));
});
