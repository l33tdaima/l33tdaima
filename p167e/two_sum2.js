/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let lo = 0, hi = numbers.length - 1;
    while (numbers[lo] + numbers[hi] !== target) {
        if (numbers[lo] + numbers[hi] < target) {
            lo ++;
        } else {
            hi --;
        }
    }
    return [lo + 1, hi + 1];    
};
// TEST
[
    [[2,3], 5],
    [[2,3,4], 5],
    [[2,7,11,15], 9],
    [[2,7,11,15], 13],
    [[2,7,11,15], 26],
].forEach(function (test) {
    console.log("Two sum II:", test[0], ", sum =", test[1], 
                "->", twoSum(test[0], test[1]));
});
