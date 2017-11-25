/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let xor = x ^ y;
    let count = 0;
    for (let i = 0, mask = 1; i < 31; ++i) {
        if ((xor & mask) !== 0) { count ++; }
        mask = mask << 1;
    }
    /* another way to do the counting
    while (xor !== 0) {
        let shifted = xor >> 1;
        if (shifted << 1 !== xor) { count ++; }
        xor = shifted;
    }
    */
    return count;
};
// TEST
[
    [1, 1],
    [1, 4],
    [1, 19091801],
].forEach(function (test) {
    console.log("Hamming distance of", test, "->",
                hammingDistance(test[0], test[1]));
});
