/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let rows = grid.length;
    if (rows === 0) { return maxArea; }
    let cols = grid[0].length;
    
    let maxArea = 0;
    // DFS measure function with closure of grid
    var recMeasureFromPoint = function(i, j) {
        // mark this point counted by changing from 1 to 2
        grid[i][j]++;
        let measure = 1;
        if (i > 0 && grid[i-1][j] === 1) {
            measure += recMeasureFromPoint(i - 1, j);
        }
        if (j > 0 && grid[i][j-1] === 1) {
            measure += recMeasureFromPoint(i, j - 1);
        }
        if (i < rows - 1 && grid[i+1][j] === 1) {
            measure += recMeasureFromPoint(i + 1, j);
        }
        if (j < cols - 1 && grid[i][j+1] === 1) {
            measure += recMeasureFromPoint(i, j + 1);
        }
        return measure;
    };
    for (let i = 0, rows = grid.length; i < rows; ++i) {
        for (let j = 0, cols = grid[i].length; j < cols; ++j) {
            if (grid[i][j] === 1) {
                let area = recMeasureFromPoint(i, j);
                if (area > maxArea) { maxArea = area; }
            }
        }
    }
    return maxArea;
};
// TEST
[
    [[0,1],
     [1,1]],
    [[0,0],
     [1,1]],
    [[0,0,0,0,0,0,0,0]],
    [[0,0,1,0,0,1,1,0]],
    [[0,0,1,0],
     [0,1,1,0],
     [1,0,0,0],
     [1,0,1,0]],
    [[0,0,1,0,0,0,0,1,0,0,0,0,0],
     [0,0,0,0,0,0,0,1,1,1,0,0,0],
     [0,1,1,0,1,0,0,0,0,0,0,0,0],
     [0,1,0,0,1,1,0,0,1,0,1,0,0],
     [0,1,0,0,1,1,0,0,1,1,1,0,0],
     [0,0,0,0,0,0,0,0,0,0,1,0,0],
     [0,0,0,0,0,0,0,1,1,1,0,0,0],
     [0,0,0,0,0,0,0,1,1,0,0,0,0]]
].forEach(function(test) {
    console.log("Max area of island ->", maxAreaOfIsland(test));
});
