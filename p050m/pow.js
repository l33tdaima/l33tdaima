/**
 * @param {number float} x
 * @param {number int} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) {
        return 1;
    }
    if (n < 0) {
        return 1/myPow(x, -n);
    }
    if (n === 1) {
        return x;
    }
    if (n%2 === 0) {
        let sqrt = myPow(x, n/2);
        return sqrt * sqrt;
    }
    else {
        let sqrt = myPow(x, Math.floor(n/2));
        return x * sqrt * sqrt;
    }
};

var x = parseFloat(process.argv[2]);
var n = parseInt(process.argv[3]);

console.log("Pow(", x, ",", n, ") =", myPow(x,n),
            "Test passed?:", myPow(x,n) === Math.pow(x,n));
