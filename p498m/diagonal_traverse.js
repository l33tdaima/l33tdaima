var findDiagonalOrder = function (matrix) {
    var orderList = [];
    var maxRow = matrix.length - 1;
    var maxCol = 0;
    matrix.forEach(function (row) {
        maxCol = Math.max(maxCol, row.length - 1);
    });
    //console.log(maxRow);
    //console.log(maxCol);

    for (var order = 0; order <= maxRow + maxCol; ++order) {
        // console.log("Order" + order);
        // alternating order
        for (var i = 0; i <= order; ++i) {
            //console.log("Pushing index" + i + ", " + (order-i));
            if (order % 2 === 0) {
                if (order - i <= maxRow && i < matrix[order - i].length)
                    orderList.push(matrix[order - i][i]);
            } else {
                if (i <= maxRow && order - i < matrix[i].length)
                    orderList.push(matrix[i][order - i]);
            }
        }
    }
    return orderList;
}

var matrix = [
    [1, 2, 3, 10],
    [4, 5, 6],
    [7, 8, 9, 11]
];

console.log("Input: " + matrix.toString());
console.log("Output: " + findDiagonalOrder(matrix).toString());