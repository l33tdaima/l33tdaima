/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let n = matrix.length;
    if (n === 0) { return; }
    console.assert(n === matrix[0].length);

    // Round 1: swap diagonally
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n - 1 - i; ++j) {
            let t = matrix[i][j];
            // e.g. 0,1 <-> 1,2
            matrix[i][j] = matrix[n-1-j][n-1-i];
            matrix[n-1-j][n-1-i] = t;
        }
    }
    // Round 1: swap vertically
    for (let i = 0; i + i < n - 1 ; ++i) {
        for (let j = 0; j < n; ++j) {
            let t = matrix[i][j];
            // e.g. 0,2 <-> 2,2
            matrix[i][j] = matrix[n-1-i][j];
            matrix[n-1-i][j] = t; 
        }
    }
};
// TEST
[
    [
        [1, 2],
        [3, 4]
    ],
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ],
    [
        [ 5, 1, 9,11],
        [ 2, 4, 8,10],
        [13, 3, 6, 7],
        [15,14,12,16]
    ]
].forEach(function (test) {
    console.log("--------");
    console.log("Before rotate:");
    console.log(test);
    console.log("After rotate:");
    rotate(test);
    console.log(test);
});
