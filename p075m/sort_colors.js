/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let swap = function (j, k) {
        let temp = nums[j];
        nums[j] = nums[k];
        nums[k] = temp;
    };

    let len = nums.length;
    if (len <= 1) { return; }
    let fst1 = 0, fst2 = len - 1; // indices of the first 1 and the first 2
    for (let i = 0; i <= fst2;) {
        // console.log("fst1=" + fst1 + ", fst2=" + fst2, ",i=" + i);
        if (nums[i] < 1) { // 0
            swap(fst1, i);
            fst1 ++;
            i ++;
        } else if (nums[i] > 1) { // 2
            swap(fst2, i);
            fst2 --;
            // Do not do i++, as fst2 actually means all the number after it are 2's
            // but itself could be any number, so don't move i after swap
        } else {
            i ++;
        }
    }
};
// TEST
[
    [1,0],
    [2,1],
    [2,0,1],
    [0,0,0],
    [1,1,1],
    [2,2,2],
    [2,1,0,2,1,0],
    [2,2,2,1,1,0,0,0],
].forEach(function(test) {
    sortColors(test);
    console.log("SortColors ->", test);
});
