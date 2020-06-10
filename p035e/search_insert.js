/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let [left, right] = [0, nums.length];
  // The two lines before are just added to speed up,
  // without them algorithm are still accurate and elegant
  if (target < nums[0]) return left;
  if (target > nums[right - 1]) return right;

  while (left < right) {
    let mid = ~~((left + right) / 2);
    if (nums[mid] < target) left = mid + 1;
    else right = mid;
  }
  return left;
};
// TESTS
[
  {
    nums: [1, 3, 5, 6],
    target: 5,
    expected: 2,
  },
  {
    nums: [1, 3, 5, 6],
    target: 2,
    expected: 1,
  },
  {
    nums: [1, 3, 5, 6],
    target: 7,
    expected: 4,
  },
  {
    nums: [1, 3, 5, 6],
    target: 0,
    expected: 0,
  },
].forEach((t) => {
  const actual = searchInsert(t.nums, t.target);
  console.log('Search insert in', t.nums, 'for', t.target, '->', actual);
  console.assert(actual === t.expected);
});
