/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let len = nums.length;
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        // exact mid point if odd, or mid - 1 if even length
        let mid = ~~((l + r) / 2);
        if (nums[mid] === target) {
            l = mid, r = mid;
            while (l >= 1 && nums[l - 1] === target)  { l--; }
            while (r < len - 1 && nums[r + 1] === target) { r++; }
            break;
        } else if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    if (l > r) {
        return [-1, -1];
    } else {
        return [l, r];
    }
};
var searchRangeFromSolution = function(nums, target) {
    let len = nums.length;
    let binarySearch = function(searchLeftMost) {
        let l = 0, r = nums.length;
        while (l < r) {
            // exact mid point if odd, or mid - 1 if even length
            let mid = ~~((l + r) / 2);
            if (nums[mid] > target || (searchLeftMost && nums[mid] === target)) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }
        return l;
    };
    let range = [-1, -1];
    let leftIdx = binarySearch(true);
    if (leftIdx === len || nums[leftIdx] !== target) {
        return range;
    }
    range[0] = leftIdx;
    range[1] = binarySearch(false) - 1;
    return range;
};
// TEST
[
    [[], 0],
    [[2], 0],
    [[2], 2],
    [[2, 2], 2],
    [[1, 2, 3], 3],
    [[4, 4, 4, 4, 4], 4],
    [[5, 7, 7, 9, 9], 7],
    [[5, 7, 7, 8, 8, 10], 8],
].forEach(function(test) {
    console.log("Search", test[1], "in", test[0], "->",
                searchRange(test[0], test[1]));
});
