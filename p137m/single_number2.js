/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let [msb, lsb] = [0, 0];
  for (let n of nums) {
    lsb = (lsb ^ n) & ~msb;
    msb = (msb ^ n) & ~lsb;
  }
  // return state (0,1) since we look for the one appear only once
  // (1,0) if we look for the one appear twice
  return lsb;
};
// TEST
[
  [[2, 2, 3, 2], 3],
  [[0, 1, 0, 1, 0, 1, 99], 99],
  [[45, -3, 878, -3, 45, 9999, -3, 45, 9999, 9999], 878],
].forEach((t) => {
  const actual = singleNumber(t[0]);
  console.log('Single number in', t[0], '->', actual);
  console.assert(t[1] === actual);
});
