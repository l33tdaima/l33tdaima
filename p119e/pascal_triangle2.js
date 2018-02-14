/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex < 0) { return []; }
    if (rowIndex === 0) { return [1]; }
    let row = Array.from({length: 2}, (v) => 1); // rowIndex = 1
    for (let i = 2; i <= rowIndex; ++i) {
        let cur = Array.from({length: i + 1}, (v) => 1);
        for (let j = 1; j < i; ++j) {
            cur[j] = row[j - 1] + row[j];
        }
        row = cur;
    }
    return row;
};
// TEST
[
    3,5,7,10
].forEach((test) => {
    console.log("Pascal's triangle rowIndex of", test, "->",
                getRow(test));
});
