/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0;
    for (let i = 0, len = nums.length; i < len; ++i) {
        if (k < 2 || (nums[i] > nums[k - 2])) {
            nums[k++] = nums[i];
        }
    }
    return k;
};
// TEST
[
    [[1,1,1,2,2,3], 5],
    [[0,0,1,1,1,1,2,3,3], 7],
    [[3,3,3,4,5,6,6,7,8,9], 9]
].forEach(t => {
    console.log("Original array", t[0]);
    let reducedLength = removeDuplicates(t[0]);
    console.log("After removing duplicates ->",
                reducedLength, t[0].slice(0, reducedLength), "\n");
    console.assert(t[1] === reducedLength);
});