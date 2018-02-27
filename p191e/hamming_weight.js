/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let ones = 0;
    while (n !== 0) {
        if (n & 1 !== 0) { 
            ++ ones;
        }
        n = n >>> 1;
    }
    return ones;
};
// TEST
[
    0,1,2,3,4,8,16,20,255,256,2147483648
].forEach((test) => {
    console.log("Hamming weight (# of 1's) in", test, "->",
                hammingWeight(test));
});
