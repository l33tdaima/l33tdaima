/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = [];
    let m = matrix.length;
    if (m === 0) { return res; }
    let n = matrix[0].length;

    let seen = Array.from({length: m},
                          (v) => Array.from({length: n}, (v) => false));
    // travesal point moving directions
    let dirs = [
        {rowStep: 0, colStep: 1},
        {rowStep: 1, colStep: 0},
        {rowStep: 0, colStep: -1},
        {rowStep: -1, colStep: 0}
    ];
    let i = 0, j = 0;
    let k = 0, d = dirs[k];
    for (let c = 0; c < m * n; ++c) {
        res.push(matrix[i][j]);
        seen[i][j] = true;
        let ni = i + d.rowStep;
        let nj = j + d.colStep;
        if (ni >= 0 && ni < m && nj >= 0 && nj < n && !seen[ni][nj]) {
            i = ni;
            j = nj;
        } else {
            // switch direction
            k = (k + 1) % 4;
            d = dirs[k];
            i += d.rowStep;
            j += d.colStep;
        }
    }
    return res;
};
// TEST
[
    [
        [ 5, 6, 7, 8 ]
    ],
    [
        [ 1, 2, 3, 4],
        [ 5, 6, 7, 8 ]
    ],
    [
        [ 1, 2, 3 ],
        [ 4, 5, 6 ],
        [ 7, 8, 9 ]
    ],
].forEach((test) => {
    console.log("Spiral order of", test, "->", spiralOrder(test));
});
