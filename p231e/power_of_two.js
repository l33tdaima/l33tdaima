/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwoV1 = function(n) {
    if (n <= 0) { return false; }
    let ones = 0;
    while (n !== 0) {
        if (n & 1 !== 0) { 
            if (++ones > 1) { return false; }
        }
        n = n >> 1;
    }
    return (ones === 1);
};
var isPowerOfTwoV2 = function(n) {
    return n > 0 && ((n & (n-1)) === 0);
};
// TEST
[
    -8,0,1,2,3,4,8,16,20,256
].forEach((test) => {
    console.log("" + test, "is power of 2 ->",
                isPowerOfTwoV1(test));
});
