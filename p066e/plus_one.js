/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var result = Array.from(digits);
    var carry = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        result[i] = (digits[i] + carry) % 10;
        carry = Math.floor((digits[i] + carry) / 10);
    }
    if (carry > 0) {
        return [1].concat(result);
    }
    else {
        return result;
    }
};

var testArrays = [
    [5],
    [1, 2, 3],
    [1, 0, 0],
    [3, 8, 9, 4],
    [9, 9, 9, 9]
];

testArrays.forEach(function(test) {
    console.log(test, "plus one is:", plusOne(test));
}, this);
