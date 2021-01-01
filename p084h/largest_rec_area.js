/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let [stack, ans] = [[], 0]; // stack to store the indices
  for (let i = 0; i < heights.length || stack.length > 0; ) {
    let sz = stack.length;
    // i out of bound will yield undefined and hence false for the check below
    if (sz === 0 || heights[i] >= heights[stack[sz - 1]]) {
      // push the increasing histogram bar index into the stack
      stack.push(i++);
    } else {
      // pop the decreasing histogram bar index from the stack
      let itop = stack.pop();
      let remained = stack.length;
      // Case 1: when poping the last item which is the global minimum,
      // we should calcuate the area by the full length, e.g. [2,1,2]
      // Case 2: if not last item, the width of area should be from remained index + 1 to i
      // eg. [1,4,3] -> 3*(3-1-0) = 6
      ans = Math.max(
        ans,
        heights[itop] * (remained === 0 ? i : i - (stack[remained - 1] + 1))
      );
      //console.log("Max area so far", maxArea);
    }
  }
  return ans;
};
// TEST
[
  [[2], 2],
  [[2, 5], 5],
  [[4, 3], 6],
  [[1, 4, 3], 6],
  [[2, 1, 2], 3],
  [[1, 5, 4, 3], 9],
  [[2, 0, 3, 2], 4],
  [[2, 1, 5, 6, 2, 3], 10],
  [[2, 1, 5, 6, 2, 3, 6, 7], 12],
  [[6, 7, 5, 2, 4, 5, 9, 3], 16],
].forEach(([heights, expected]) => {
  const actual = largestRectangleArea(heights);
  console.log('Largest Rectangle Area in', heights, '->', actual);
  console.assert(actual === expected);
});
