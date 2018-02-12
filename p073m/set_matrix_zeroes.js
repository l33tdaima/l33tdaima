/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let rows = matrix.length;
    if (rows === 0) { return; }
    let cols = matrix[0].length;
    let col0 = 1;
    for (let i = 0; i < rows; ++i) {
        if (matrix[i][0] === 0) {
            col0 = 0;
        }
        for (let j = 1; j < cols; ++j) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    // scan from bottom-right to avoid setting the first row too soon
    for (let i = rows - 1; i >= 0; --i) {
        for (let j = cols - 1; j >= 1; --j) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
        if (col0 === 0) {
            matrix[i][0] = 0;
        }
    }
};
// TEST
[
    [
        []
    ],
    [
        [1,0],
        [2,3],
    ],
    [
        [1,2,0,4,5],
        [6,7,8,9,0],
    ],
    [
        [0,2,0,4,5],
        [6,7,8,9,10],
    ],
].forEach((test) => {
    console.log("Before:");
    console.log(test);
    console.log("After:");
    setZeroes(test);
    console.log(test);
});
