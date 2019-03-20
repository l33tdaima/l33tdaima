/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  for (let i = m + n - 1, i1 = m - 1, i2 = n - 1; i1 >= 0 || i2 >= 0; --i) {
    if (i1 < 0) {
      nums1[i] = nums2[i2--];
    } else if (i2 < 0) {
      nums1[i] = nums1[i1--];
    } else if (nums1[i1] <= nums2[i2]) {
      nums1[i] = nums2[i2--];
    } else {
      nums1[i] = nums1[i1--];
    }
  }
};
// TEST
[
  { nums1: [], m: 0, nums2: [], n: 0 },
  { nums1: [2, 0], m: 1, nums2: [1], n: 1 },
  { nums1: [1, 3, 5, 0, 0, 0], m: 3, nums2: [2, 4, 6], n: 3 },
  { nums1: [4, 5, 6, 0, 0, 0], m: 3, nums2: [2, 2, 2], n: 3 }
].forEach(function(test) {
  console.log("---\n  Merge", test.nums1, "with", test.nums2);
  merge(test.nums1, test.m, test.nums2, test.n);
  console.log("  ->", test.nums1);
});
