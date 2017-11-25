/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let stack = []; // stack to store the indices
    let maxArea = 0;
    for (let i = 0, len = heights.length; i < len || stack.length > 0;) {
        let sz = stack.length;
        console.log("\n# Loop", i, "Stack", stack);
        // i out of bound will yield undefined and hence false for the check below
        if (sz === 0 || heights[i] >= heights[stack[sz - 1]]) {
        // push the increasing histogram bar index into the stack
            console.log("+ Push [" + i + "], height", heights[i]);
            stack.push(i++);
        } else {
        // pop the decreasing histogram bar index from the stack
            let itop = stack.pop();
            console.log("- Pop [" + itop + "], height", heights[itop]);
            let remained = stack.length;
            // Case 1: when poping the last item which is the global minimum,
            // we should calcuate the area by the full length, e.g. [2,1,2]
            // Case 2: if not last item, the width of area should be from remained index + 1 to i
            // eg. [1,4,3] -> 3*(3-1-0) = 6
            let area = heights[itop] * (remained === 0 ? i : (i - (1 + stack[remained - 1])));
            if (area > maxArea) { maxArea = area; }
            console.log("Max area so far", maxArea);
        }
    }
    return maxArea;
};
// TEST
[
    //[2],
    //[2,5],
    //[4,3],
    //[1,4,3],
    //[2,1,2],
    [1,5,4,3],
    //[2,0,3,2],
    //[2,1,5,6,2,3],
    //[2,1,5,6,2,3,6,7],
].forEach(function (test) {
    console.log("Largest Rectangle Area ->",
                largestRectangleArea(test));
});
