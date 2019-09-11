/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let k = 0; // index of last element TO BE copied
  for (let i = 0; i < nums.length; ++i) {
    if (k < 1 || nums[k - 1] < nums[i]) {
      nums[k++] = nums[i];
    }
  }
  return k;
};
// TEST
[
  [[], 0],
  [[1], 1],
  [[1, 1, 1, 2, 2, 3], 3],
  [[0, 0, 1, 1, 1, 1, 2, 3, 3], 4],
  [[3, 3, 3, 4, 5, 6, 6, 7, 8, 9], 7]
].forEach(t => {
  console.log('Original array', t[0]);
  let reducedLength = removeDuplicates(t[0]);
  console.log(
    'After removing duplicates ->',
    reducedLength,
    t[0].slice(0, reducedLength),
    '\n'
  );
  console.assert(t[1] === reducedLength);
});
