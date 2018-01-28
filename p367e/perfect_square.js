/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquareV1 = function(num) {
    if (num < 0) { return false; }
    let i = 0;
    while (true) {
        let sq = i * i;
        if (sq === num) {
            return true;
        } else if (sq > num) {
            return false;
        } else {
            ++i;
        }
    }
    return false;
};
var isPerfectSquareV2 = function(num) {
    // a perfect square is 1 + 3 + 5 + 7 ...
    let i = 1;
    while (num > 0) {
        num -= i;
        i += 2;
    }
    return num === 0;
};
var isPerfectSquareV3 = function(num) {
    if (num < 0) { return false; }
    let r = num;
    while (r*r > num) {
        r = ~~((r + num/r) / 2);
    }
    return r*r === num;
};
// TEST
[
    -3,
    0,
    1,
    2,
    16,
    255,
    256
].forEach(function (test) {
    console.log("Is", test, "perfect square? ->",
                isPerfectSquareV2(test));
});
