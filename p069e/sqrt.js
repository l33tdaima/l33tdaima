/**
 * @param {number:int} x
 * @return {number:int}
 */
var mySqrt = function(x) {
    var r = x;
    while (r*r > x) {
        r = ((r + x/r) / 2) | 0;
    }
    return r;
};

for (let t = 0; t < 10000000/*Number.MAX_SAFE_INTEGER*/; ++t) {
    let r = mySqrt(t);
    if (r < 0 || r*r > t || (r+1)*(r+1) <= t) {
        console.log("Failed case:", t, r);
    }
    if (t % 1000000 === 0) {
        console.log("Tested", t, "so far.");
    }
}
console.log("All tested.");
