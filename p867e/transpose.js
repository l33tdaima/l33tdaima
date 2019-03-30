/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  const [rows, cols] = [A.length, A[0].length];
  let ans = Array.from({ length: cols }, v =>
    Array.from({ length: rows }, v => 0)
  );

  for (let i = 0; i < cols; ++i) {
    for (let j = 0; j < rows; ++j) {
      ans[i][j] = A[j][i];
    }
  }
  return ans;
};
// TESTS
[
  [[1]],
  [[1, 2]],
  [[1, 2, 3], [4, 5, 6]],
  [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
].forEach(t => {
  console.log("Transpose of", t, "->", transpose(t));
});
