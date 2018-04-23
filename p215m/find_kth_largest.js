/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    var swap = function (i, j) {
        let t = nums[i];
        nums[i] = nums[j];
        nums[j] = t;
    };
    var partition = function (begin, end) {
        let pivot = nums[begin];
        let l = begin + 1, r = end;
        while (l <= r) {
            if (nums[l] < pivot && nums[r] > pivot) {
                swap(l++, r--);
            }
            if (nums[l] >= pivot) {
                l++;
            }
            if (nums[r] <= pivot) {
                r--;
            }
        }
        swap(begin, r);
        return r;
    };

    let begin = 0, end = nums.length - 1;
    while (true) {
        let p = partition(begin, end);
        if (p === k - 1) {
            return nums[p];
        } else if (p > k - 1) {
            end = p - 1;
        } else {
            begin = p + 1;
        }
    }
};
// TESTS
[{
    list: [99, 99, 99],
    k: 1,
    expected: 99
}, {
    list: [3, 2, 1, 5, 6, 4],
    k: 3,
    expected: 4 
}, {
    list: [3, 2, 1, 5, 6, 4],
    k: 1,
    expected: 6
}].forEach(function (test) {
    let res = findKthLargest(test.list, test.k);
    console.log("Find #" + test.k, "largest in",
        test.list, "->", res, res === test.expected);
});
