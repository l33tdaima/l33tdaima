/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let len = nums.length;
    if (len <= 1) {
        return len;
    } else {
        let ni = 0; // index of last element of reduced array
        for (let i = 1; i < len; ++i) {
            if (nums[ni] !== nums[i]) {
                ni = ni + 1;
                nums[ni] = nums[i];
            }
        }
        return ni + 1;
    }
};

var testArray = [ 3, 3, 3, 4, 5, 6, 6, 7, 8, 9];
var reducedLength = removeDuplicates(testArray);
console.log("After removing duplicates: ", reducedLength);
console.log(testArray.slice(0, reducedLength));
