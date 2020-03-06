/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let [m, counter] = [null, 0];
  for (let n of nums) {
    if (counter === 0) m = n;
    if (n !== m) counter--;
    else counter++;
  }
  return m;
};
// TEST
[
  [[1], 1],
  [[1, 2, 1], 1],
  [[1, 2, 3, 2, 2], 2],
  [[3, 3, 1, 3, 2, 2, 3], 3]
].forEach(t => {
  const actual = majorityElement(t[0]);
  console.log('Majority element in', t[0], '->', actual);
  console.assert(actual === t[1]);
});
