/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (matrix == null || matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }
    let maxArea = 0;
    let rows = matrix.length;
    let cols = matrix[0].length;
    // heights array has one extra to do the wrapping up stack poping
    let h = Array.from({length:cols + 1}, (v) => 0);

    // Solve histogram largest rec area problem with increasing rows(heights)
    for (let r = 0; r < rows; ++r) {
        let stack = [];
        for (let c = 0; c <= cols; ++c) {
            // prepare the heights from columns
            if (c < cols) {
                if (matrix[r][c] === '1') { h[c] ++; }
                else { h[c] = 0; }
            }

            while (stack.length > 0 && h[c] < h[stack[stack.length - 1]]) {
                let itop = stack.pop();
                let remained = stack.length;
                // Case 1: when poping the last item which is the global minimum,
                // we should calcuate the area by the full length, e.g. [2,1,2]
                // Case 2: if not last item, the width of area should be from remained index + 1 to j
                // eg. [1,4,3] -> 3*(3-1-0) = 6
                let area = h[itop] * ((remained === 0)? c : (c - stack[remained-1] - 1));
                if (area > maxArea) { maxArea = area; }
            }
            stack.push(c);
            //console.log("# h= ", h, ", stack =", stack, ", max =", maxArea);
        }
        //console.log("Max for row", r, "is", maxArea);
    }
    return maxArea;
};
// TEST
[
    [
        ['1']
    ],[
        ['1','1','0']
    ],[
        ['1'],
        ['1']
    ],[
        ['1','0','1','0','0'],
        ['1','0','1','1','1'],
        ['1','1','1','1','1'],
        ['1','0','0','1','0']
    ]
].forEach(function (test) {
    console.log("Max rectangle ->", maximalRectangle(test));
});
