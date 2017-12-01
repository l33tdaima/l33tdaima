/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {

    // DFS'ly measure from the current cell
    var recMeasurePerimeter = function(i, j) {
        grid[i][j] ++; // mark this cell
        // on boundary
        let peri = ((i === 0) ? 1 : 0)
                 + ((j === 0) ? 1 : 0)
                 + ((i === rows - 1) ? 1 : 0)
                 + ((j === cols - 1) ? 1 : 0);
        if (i > 0) {
            if (grid[i-1][j] === 0) { peri ++; }
            else if (grid[i-1][j] === 1) {
                peri += recMeasurePerimeter(i-1, j);
            }
        }
        if (j > 0) {
            if (grid[i][j-1] === 0) { peri ++; }
            else if (grid[i][j-1] === 1) {
                peri += recMeasurePerimeter(i, j-1);
            }
        }
        if (i < rows - 1) {
            if (grid[i+1][j] === 0) { peri ++; }
            else if (grid[i+1][j] === 1) {
                peri += recMeasurePerimeter(i+1, j);
            }
        }
        if (j < cols - 1) {
            if (grid[i][j+1] === 0) { peri ++; }
            else if (grid[i][j+1] === 1) {
                peri += recMeasurePerimeter(i, j+1);
            }
        }
        return peri;
    };
    let rows = grid.length;
    console.assert(rows > 0);
    let cols = grid[0].length;

    let perimeter = 0;
    for (let i = 0; i < rows; ++i) {
        for (let j = 0; j < cols; ++j) {
            if (grid[i][j] === 1) {
                perimeter += 4;
                if (i < rows - 1 && grid[i+1][j] === 1) {
                    perimeter -= 2;
                }
                if (j < cols - 1 && grid[i][j+1] === 1) {
                    perimeter -= 2;
                }
            }
        }
    }
    return perimeter;
};
// TEST
[
    [[1]],

    [[0,0],
     [1,1]],

    [[0,1],
     [1,1]],

    [[0,1,0,0],
     [1,1,1,0],
     [0,1,0,0],
     [1,1,0,0]]
].forEach(function(test) {
    console.log("Island perimeter ->", islandPerimeter(test));
});
