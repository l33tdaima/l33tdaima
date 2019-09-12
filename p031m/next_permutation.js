/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  // 1. Find the ascending neighbors
  let i = nums.length - 1;
  while (i >= 1 && nums[i - 1] >= nums[i]) {
    // >= will handle the duplicated permutation
    i--;
  }
  // 2. Swap
  let j = nums.length - 1;
  if (i > 0) {
    while (nums[i - 1] >= nums[j]) {
      j--;
    }
    [nums[i - 1], nums[j]] = [nums[j], nums[i - 1]];
  }
  // 3. Reverse
  j = nums.length - 1;
  for (; i < j; ++i, --j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
};
// SPOT TEST
console.log('SPOT TEST:');
[
  [1, 3, 2],
  [1, 2, 3],
  [9, 1, 1],
  [2, 3, 4, 1],
  [5, 4, 3, 2, 1],
  [1, 5, 8, 4, 7, 6, 5, 3, 2, 1]
].forEach(t => {
  console.log('Given', t);
  nextPermutation(t);
  console.log('Next ', t);
  console.log('------');
});
// RANGE TEST
console.log('RANGE TEST:');
[2, 3, 4].forEach(t => {
  let fact = function(n) {
    if (n === 2) return 2;
    return n * fact(n - 1);
  };
  console.log('The next permutations of order', t, '->');
  let perm = Array.from({ length: t }, (_, k) => t - k);
  for (let i = 1; i <= fact(t) + 1; ++i) {
    nextPermutation(perm);
    console.log('  ', perm);
  }
});
