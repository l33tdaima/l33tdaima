/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
    let numsVisited = Array.from(nums, (v) => false);
    let maxlap = 0;
    for (let i = 0, len = nums.length; i < len; ++i) {
        if (numsVisited[i]) { continue; }
        let count = 1;
        let p = nums[i];
        while (p !== i) {
            p = nums[p];
            numsVisited[p] = true;
            count ++;
        }
        if (count > maxlap) { maxlap = count; }
    }
    return maxlap;
};
// TEST
[
    [],
    [0],
    [0,1],
    [1,0],
    [0,1,2],
    [1,0,2],
    [2,0,1],
    [5,4,0,3,1,6,2],
].forEach(function (test) {
    console.log("Longest loop in", test, "->", arrayNesting(test));
});
