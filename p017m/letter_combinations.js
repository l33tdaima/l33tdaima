/**
 * @param {string} digits
 * @return {string[]}
 */
var mapping = {
    '0': [" "],
    '1': [""],
    '2': ["a", "b", "c"],
    '3': ["d", "e", "f"],
    '4': ["g", "h", "i"],
    '5': ["j", "k", "l"],
    '6': ["m", "n", "o"],
    '7': ["p", "q", "r", "s"],
    '8': ["t", "u", "v"],
    '9': ["w", "x", "y", "z"]
};
var cartesianProduct = function(a, b) {
    var product = [];
    for (let i = 0; i < a.length; ++i) {
        for (let j = 0; j < b.length; ++j) {
            product.push(a[i].concat(b[j]));
        }
    }
    return product;
}
var letterCombinations = function(digits) {
    // console.log("Input digits: ", digits);
    if (digits.length === 1) {
        return mapping[digits[0]];
    }
    if (digits.length === 0) {
        return [];
    }
    return cartesianProduct(mapping[digits[0]], letterCombinations(digits.substr(1)));
};

var tests = [ "", "1", "3", "23", "357", "2468"];

tests.forEach(function(val) {
    console.log(val + ": " + letterCombinations(val));
}, this);
