/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargestV1 = function(nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
};

var findKthLargestV2 = function(nums, k) {
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
  {
    list: [99, 99, 99],
    k: 1,
    expected: 99
  },
  {
    list: [3, 2, 1, 5, 6, 4],
    k: 3,
    expected: 4
  },
  {
    list: [3, 2, 1, 5, 6, 4],
    k: 1,
    expected: 6
  }
].forEach(t => {
  const list = [...t.list];
  const res = findKthLargestV2(list, t.k);
  console.log('Find #' + t.k, 'largest in', t.list, '->', res);
  console.assert(res === t.expected);
});
