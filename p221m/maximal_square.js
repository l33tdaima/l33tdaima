/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let dp = Array.from(
        {length: matrix.length + 1},
         (r) => Array.from(
             {length: matrix.length === 0 ? 0 : matrix[0].length + 1}, 
             (c) => 0 ) );
    let maxsqlen = 0;
    for (let i = 0, ilen = matrix.length; i < ilen; ++i) {
        for (let j = 0, jlen = matrix[0].length; j < jlen; ++j) {
            if (matrix[i][j] === '1') {
                dp[i+1][j+1] = Math.min(dp[i][j], dp[i+1][j], dp[i][j+1]) + 1;
                if (dp[i+1][j+1] > maxsqlen) { maxsqlen = dp[i+1][j+1]; }
            }
        }
    }
    //console.log("DP\n", dp);
    return maxsqlen * maxsqlen;
};
// TEST
let testMatrix = [];
console.log("Maximum of square area ->", maximalSquare(testMatrix));
testMatrix = [["1"]];
console.log("Maximum of square area ->", maximalSquare(testMatrix));
testMatrix = [["0", "1"], ["1", "0"]];
console.log("Maximum of square area ->", maximalSquare(testMatrix));
testMatrix = [
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]
];
console.log("Maximum of square area ->", maximalSquare(testMatrix));
