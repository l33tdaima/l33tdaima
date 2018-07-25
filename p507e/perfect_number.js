/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num <= 1) { return false; }
    let sum = 1;
    for (let i = 2; i * i <= num; ++i) {
        if (num % i === 0) { // i is a factor
            sum += i + num/i;
        }
        if (sum > num) { return false; }
    }
    return sum === num;
};
// TEST
for (let t = 1; t <= 1e6; ++t) {
    if (checkPerfectNumber(t)) {
        console.log("", t, "is a perfect number.");
    }
}
