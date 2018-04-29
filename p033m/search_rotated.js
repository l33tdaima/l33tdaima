/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let lo = 0, hi = nums.length - 1;
    while (lo < hi) {
        let mid = ~~((lo + hi) / 2);
        if (nums[mid] === target) { return mid; }
        if (nums[lo] <= nums[mid]) { // [lo .. mid] is sorted, [mid .. hi] is not
            if (target >= nums[lo] && target < nums[mid]) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        } else { // [mid .. hi] is sorted, [lo .. mid] is not
            if (target <= nums[hi] && target > nums[mid]) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
    }
    return (nums[lo] === target) ? lo : -1;
};
// TEST
[
    [[4,5,6,7,0,1,2], 0],
    [[4,5,6,7,0,1,2], 3],
].forEach(t => {
    console.log("Search", t[1], "in", t[0], "->",
                search(t[0], t[1]));
});
