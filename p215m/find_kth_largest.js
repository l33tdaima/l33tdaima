/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargestV1a = function (nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
};

var findKthLargestV2 = function (nums, k) {
  const swap = (i, j) => {
    [nums[j], nums[i]] = [nums[i], nums[j]];
  };
  const partition = (begin, end) => {
    let [pivot, l, r] = [nums[begin], begin + 1, end];
    while (l <= r) {
      if (nums[l] < pivot && nums[r] > pivot) swap(l++, r--);
      if (nums[l] >= pivot) l++;
      if (nums[r] <= pivot) r--;
    }
    swap(begin, r);
    return r;
  };

  let [begin, end] = [0, nums.length - 1];
  while (true) {
    let p = partition(begin, end);
    if (p === k - 1) return nums[p];
    else if (p > k - 1) end = p - 1;
    else begin = p + 1;
  }
};

// TESTS
[
  [[99, 99, 99], 1, 99],
  [[3, 2, 1, 5, 6, 4], 3, 4],
  [[3, 2, 1, 5, 6, 4], 2, 5],
  [[3, 2, 1, 5, 6, 4], 3, 4],
  [[3, 2, 1, 5, 6, 4], 1, 6],
  [[3, 2, 3, 1, 2, 4, 5, 5, 6], 4, 4],
].forEach(([nums, k, expected]) => {
  const list = [...nums];
  const actual = findKthLargestV2(list, k);
  console.log('Find #' + k, 'largest in', nums, '->', actual);
  console.assert(actual === expected);
});
