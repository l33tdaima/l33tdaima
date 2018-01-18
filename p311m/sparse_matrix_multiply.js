/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var multiply = function (A, B) {
    let rA = A.length,
        rB = B.length;
    let cB = B[0].length;
    let AB = Array.from({
            length: rA
        }, (v) =>
        Array.from({
            length: cB
        }, (v) => 0));

    for (let i = 0; i < rA; ++i) {
        for (let k = 0; k < rB; ++k) {
            if (A[i][k] !== 0) {
                for (let j = 0; j < cB; ++j) {
                    if (B[k][j] !== 0) {
                        AB[i][j] += A[i][k] * B[k][j];
                    }
                }
            }
        }
    }
    return AB;
};
// TEST
[{
        A: [
            [1, 0]
        ],
        B: [
            [0],
            [1]
        ]
    },
    {
        A: [
            [1, 0, 0],
            [-1, 0, 3]
        ],
        B: [
            [7, 0, 0],
            [0, 0, 0],
            [0, 0, 1]
        ]
    },
].forEach(function (test) {
    console.log("Multiply", test.A, "by", test.B, "->", multiply(test.A, test.B));
});
