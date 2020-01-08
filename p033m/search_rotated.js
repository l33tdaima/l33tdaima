/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let [lo, hi] = [0, nums.length - 1];
  while (lo <= hi) {
    let mid = ~~((lo + hi) / 2);
    if (nums[mid] === target) return mid;
    if (nums[lo] <= nums[mid]) {
      // [lo .. mid] is sorted, [mid .. hi] is not
      if (nums[lo] <= target && target < nums[mid]) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    } else {
      // [mid .. hi] is sorted, [lo .. mid] is not
      if (nums[mid] < target && target <= nums[hi]) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
  }
  return -1;
};
// TEST
[
  [[3, 1], 1, 1],
  [[4, 5, 6, 7, 0, 1, 2], 0, 4],
  [[4, 5, 6, 7, 0, 1, 2], 3, -1],
  [[5, 6, 0, 1, 2, 3, 4], 5, 0],
  [[5, 6, 0, 1, 2, 3, 4], 4, 6],
  [[4, 5, 6, 7, 0, 1, 2, 3], 3, 7],
  [[3, 4, 5, 6, 7, 0, 1, 2], 0, 5]
].forEach(t => {
  actual = search(t[0], t[1]);
  console.log('Search', t[0], 'for target', t[1], '->', actual);
  console.assert(actual === t[2]);
});
