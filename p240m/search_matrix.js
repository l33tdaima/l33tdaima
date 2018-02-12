/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrixV1 = function(matrix, target) {
    let lrow = 0, urow = matrix.length - 1;
    if (urow < 0) { return false; }
    let lcol = 0, ucol = matrix[0].length - 1;
    if (ucol < 0 ||
        matrix[lrow][lcol] > target ||
        matrix[urow][ucol] < target) {
        return false;
    }
    while (matrix[lrow][ucol] <= target) {
        if (matrix[lrow][ucol] === target) {
            return true;
        }
        lrow ++;
    }
    while (matrix[urow][lcol] >= target) {
        if (matrix[urow][lcol] === target) {
            return true;
        }
        urow --;
    }
    while (matrix[urow][lcol] <= target) {
        if (matrix[urow][lcol] === target) {
            return true;
        }
        lcol ++;
    }
    while (matrix[lrow][ucol] >= target) {
        if (matrix[lrow][ucol] === target) {
            return true;
        }
        ucol --;
    }
    for (let i = lrow; i <= urow; ++i) {
        for (let j = lcol; j <= ucol; ++j) {
            if (matrix[i][j] === target) {
                return true;
            }
        }
    }
    return false;
};
// TEST
var searchMatrixV2 = function(matrix, target) {
    let row = matrix.length - 1;
    if (row < 0) { return false; }
    let col = 0, cols = matrix[0].length;
    if (cols === 0) { return false; }
    while (row >= 0 && col < cols ) {
        let cv = matrix[row][col];
        if (cv > target) {
            row --;
        } else if (cv < target) {
            col ++;
        } else {
            return true;
        }
    }
    return false;
};
let matrix =
    [
        [1,   4,  7, 11, 15],
        [2,   5,  8, 12, 19],
        [3,   6,  9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30]
    ];
[
    0,1,5,16,20,99
].forEach((test) => {
    console.log("Search", test, "->",
                searchMatrixV2(matrix, test));
});
