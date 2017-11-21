/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var swap = function (j, k) {
        let temp = nums[j];
        nums[j] = nums[k];
        nums[k] = temp;
    };

    let len = nums.length;
    if (len <= 1) { return; }
    // fst1 and fst2 are indices of the first 1 and the first 2
    for (let fst1 = 0, fst2 = 0, i = 0; i < len;) {
        // console.log("fst1=" + fst1 + ", fst2=" + fst2, ",i=" + i);
        // skip zeros
        while (fst1 < len && nums[fst1] === 0) { fst1 ++; }
        // skip ones
        if (fst2 < fst1) { fst2 = fst1; }
        while (fst2 < len && nums[fst2] === 1) { fst2 ++; }
        // skip twos
        if (i < fst2) { i = fst2; }
        while (i < len && nums[i] === 2) { i ++; }
        
        if (i >= len) { break; }
        if (nums[i] === 0) { // swap a 0 with 1
            swap(fst1, i);
            fst1 ++;
        } else { // swap a 1 with 2
            swap(fst2, i);
            fst2 ++;
        }
        // console.log("nums =", nums);
    }
};
// TEST
[
    [1,0],
    [2,1],
    [0,0,0],
    [1,1,1],
    [2,2,2],
    [2,1,0,2,1,0],
    [2,2,2,1,1,0,0,0],
].forEach(function(test) {
    sortColors(test);
    console.log("SortColors ->", test);
});
