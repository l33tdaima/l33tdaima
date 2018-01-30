/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let a = 0, b = ~~(Math.sqrt(c));
    while (a <= b) {
        let p = a*a + b*b;
        if (p === c) {
            console.log("a=" + a + ", b=" + b);
            return true;
        } else if (p < c) {
            a++;
        } else {
            b--;
        }
    }
    return false;
};
// TEST
for (let test = 1; test <= 20; ++test) {
    if (judgeSquareSum(test)) {
        console.log("Exists square sum =", test + "? -> true");
    }
}
