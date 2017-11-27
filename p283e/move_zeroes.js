/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes1 = function(nums) {
    var swap = function(a, b) {
        let temp = nums[b];
        nums[b] = nums[a];
        nums[a] = temp;
    };
    let leftmost = 0;
    for (let i = 0, len = nums.length; i < len;) {
        // forward to the first zero
        while (nums[i] !== 0 && i < len) { i++; }
        if (i === len) { return; }
        if (leftmost === 0) { leftmost = i; }
        // forward beyond the last zero
        while (nums[i] === 0 && i < len) { i++; }
        if (i === len) { return; }
        swap(leftmost, i);
        leftmost ++;
    }
};
var moveZeroes2 = function(nums) {
    let nonzero = 0;
    let len = nums.length;
    for (let i = 0; i < len; ++i) {
        if (nums[i] !== 0) {
            nums[nonzero++] = nums[i];
        }
    }
    for (let i = nonzero; i < len; ++i) {
        nums[i] = 0;
    }
};
// TEST
[
    [],
    [1,2],
    [0,1],
    [2,0,1],
    [0,1,0,3,12],
].forEach(function (test) {
    console.log("Move", test, "zeros ->");
    moveZeroes2(test);
    console.log(test);
});
