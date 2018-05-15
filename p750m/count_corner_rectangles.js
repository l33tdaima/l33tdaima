/**
 * @param {number[][]} grid
 * @return {number}
 */
var countCornerRectangles = function(grid) {
    let rows = grid.length;
    let ans = 0;
    for (let r1 = 0; r1 < rows; ++r1) {
        let cols = grid[r1].length;
        for (let r2 = r1 + 1; r2 < rows; ++r2) {
            let n = 0; // # of alignments for this r1, r2 pair
            for (let c = 0; c < cols; ++c) {
                if (grid[r1][c] === 1 && grid[r2][c] === 1) {
                    n++;
                }
            }
            ans += (n > 0) ? n * (n-1) / 2 : 0;
        }
    }
    return ans;
};
// TEST
[
    {
        grid: [
            [1, 1, 1, 1]
        ],
        expected: 0
    }, {
        grid: [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ],
        expected: 9
    }, {
        grid: [
            [1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1],
            [0, 0, 0, 1, 0],
            [1, 0, 1, 0, 1]
        ],
        expected: 1
    }
].forEach(t => {
    let act = countCornerRectangles(t.grid);
    console.log("Number of corner rectangles of", t.grid, "->", act);
    console.assert(act === t.expected);
});