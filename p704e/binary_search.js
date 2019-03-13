/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let [l, r] = [0, nums.length - 1];
  while (l <= r) {
    let m = ~~((l + r) / 2);
    if (nums[m] === target) return m;
    else if (nums[m] < target) l = m + 1;
    else r = m - 1;
  }
  return -1;
};
// TESTS
[
  {
    nums: [],
    target: 9,
    expected: -1
  },
  {
    nums: [1],
    target: 2,
    expected: -1
  },
  {
    nums: [1],
    target: 1,
    expected: 0
  },
  {
    nums: [1, 2],
    target: 2,
    expected: 1
  },
  {
    nums: [-1, 0, 3, 5, 9, 12],
    target: 9,
    expected: 4
  },
  {
    nums: [-1, 0, 3, 5, 9, 12],
    target: 2,
    expected: -1
  }
].forEach(t => {
  let actual = search(t.nums, t.target);
  console.log("Binary search target", t.target, "in", t.nums, "->", actual);
  console.assert(t.expected === actual);
});
