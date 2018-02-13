/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows <= 0) { return []; }
    let rows = [[1]];
    if (numRows === 1) { return rows; }
    for (let r = 1; r < numRows; ++r) {
        let currRow = Array.from({length:r + 1}, (v) => 1);
        for (let i = 1, len = currRow.length; i < len - 1; ++i) {
            currRow[i] = rows[r-1][i-1] + rows[r-1][i];
        }
        rows.push(currRow);
    }
    return rows;
};
// TEST
[
    1,2,3,4,5,10
].forEach((test) => {
    console.log("Pascal's triangle of order", test, "->");
    console.log(generate(test));
});
