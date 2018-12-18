/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  let [left, right] = [0, A.length - 1];
  while (left < right) {
    let mid = ~~((left + right) / 2);
    if (A[mid - 1] > A[mid]) right = mid;
    else if (A[mid] < A[mid + 1]) left = mid;
    else return mid;
  }
  return -1;
};
[
  [[0, 1, 0], 1],
  [[0, 2, 1, 0], 1],
  [[0, 1, 3, 0], 2],
  [[0, 1, 3, 2, 0], 2],
  [[0, 1, 3, 7, 0], 3]
].forEach(t => {
  let actual = peakIndexInMountainArray(t[0]);
  console.log("Peak index in a mountain array", t[0], "->", actual);
  console.assert(t[1] === actual);
});
