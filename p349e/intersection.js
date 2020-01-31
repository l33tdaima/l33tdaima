/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let set1 = new Set(nums1);
  return [...new Set(nums2.filter(n => set1.has(n)))];
};
// TESTS
[
  [[], []],
  [[1], [2]],
  [[1, 2, 2], [3]],
  [
    [1, 2, 2, 1],
    [2, 2]
  ],
  [
    [4, 9, 5],
    [9, 4, 9, 8, 4]
  ]
].forEach(t => {
  console.log(
    'Intersection of',
    t[0],
    'and',
    t[1],
    '->',
    intersection(t[0], t[1])
  );
});
