/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProductV1 = function(nums) {
  console.assert(nums.length >= 3);
  nums.sort((a, b) => b - a);
  const len = nums.length;
  return Math.max(
    nums[0] * nums[1] * nums[2],
    nums[0] * nums[len - 2] * nums[len - 1]
  );
};
var maximumProductV2 = function(nums) {
  console.assert(nums.length >= 3);
  let min1 = Number.MAX_SAFE_INTEGER,
    min2 = min1;
  let max1 = Number.MIN_SAFE_INTEGER,
    max2 = max1,
    max3 = max1;
  for (let n of nums) {
    if (n <= min1) {
      min2 = min1;
      min1 = n;
    } else if (n <= min2) {
      // n lies between min1 and min2
      min2 = n;
    }
    if (n >= max1) {
      // n is greater than max1, max2 and max3
      max3 = max2;
      max2 = max1;
      max1 = n;
    } else if (n >= max2) {
      // n lies betweeen max1 and max2
      max3 = max2;
      max2 = n;
    } else if (n >= max3) {
      // n lies betwen max2 and max3
      max3 = n;
    }
  }
  return Math.max(max1 * max2 * max3, max1 * min2 * min1);
};
// TESTS
[
  {
    nums: [1, 2, 3],
    expected: 6
  },
  {
    nums: [5, 4, 3, 0],
    expected: 60
  },
  {
    nums: [-4, -1, -2, -1],
    expected: -2
  },
  {
    nums: [4, -5, -4, 2, 3],
    expected: 80
  }
].forEach(t => {
  let actual = maximumProductV2(t.nums);
  console.log("Maxinum product of three numbers in", t.nums, "->", actual);
  //console.assert(t.expected === actual);
});
