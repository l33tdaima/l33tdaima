/**
 * @param {number[]} A
 * @return {number[]}
 */

var sortArrayByParityOutPlace = function (A) {
  let ans = new Array(A.length);
  let [le, ro] = [0, A.length - 1];
  for (let a of A) {
    if ((a & 1) === 0) ans[le++] = a;
    else ans[ro--] = a;
  }
  return ans;
};

var sortArrayByParityFunctional = function (A) {
  return A.reduce((ans, a) => {
    if (a % 2 === 0) ans.unshift(a);
    else ans.push(a);
    return ans;
  }, []);
};

var sortArrayByParityInPlace = function (A) {
  let [le, ro] = [0, A.length - 1];
  while (le < ro) {
    if (A[le] % 2 === 0) le++;
    else if (A[ro] % 2 !== 0) ro--;
    else if (le < ro && le < A.length && ro > 0) {
      [A[le], A[ro]] = [A[ro], A[le]];
    }
  }
  return A;
};
// TESTS
[
  [],
  [1, 2],
  [1, 3],
  [2, 4],
  [3, 1, 2, 4],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 6, 7, 8],
].forEach((t) => {
  let orig = Array.from(t);
  console.log(
    'Sort',
    orig,
    'by parity ->',
    sortArrayByParityFunctional(t),
    sortArrayByParityOutPlace(t),
    sortArrayByParityInPlace(t)
  );
});
