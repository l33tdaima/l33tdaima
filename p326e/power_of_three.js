/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThreeV1 = function(n) {
    if (n < 1) { return false; }
    while (n !== 1) {
        n /= 3;
        if (!Number.isInteger(n)) { return false; }
    }
    return true;
};
var isPowerOfThreeV2 = function(n) {
    if (n > 1) {
        while (n%3 === 0) {
            n /= 3;
        }
    }
    return n === 1;
};
var isPowerOfThreeV3 = function(n) {
    // works only for 32-bit signed integer
    return n > 0 && (1162261467 % n === 0);
};
// TEST
[
    -9,0,1,3,4,8,9,15,27,50,2187,5000,1162261467,3486784401
].forEach((test) => {
    console.log("", test, "is power of 3 ->",
                isPowerOfThreeV2(test));
    console.assert(isPowerOfThreeV1(test) === isPowerOfThreeV2(test));
});
