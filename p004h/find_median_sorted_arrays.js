/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length, n = nums2.length;
    if (m > n) { // ensure m <= n
        let temp = nums2;
        nums2 = nums1;
        nums1 = temp;
        m = nums1.length;
        n = nums2.length;
    }
    if (n === 0) { return undefined; }

    let imin = 0, imax = m; // search range
    let half = ~~((m + n + 1) / 2);
    while (imin <= imax) {
        let i = ~~((imin + imax) / 2);
        let j = half - i;
        if (i < m && nums2[j - 1] > nums1[i]) {
            // increase i to satisfy invariant condition
            imin = i + 1;
        } else if (i > 0 && nums1[i - 1] > nums2[j]) {
            // decrease i to satisfy invariant condition
            imax = i - 1;
        } else {
            let maxLeft = undefined, minRight = undefined;
            if (i === 0) {
                maxLeft = nums2[j - 1];
            } else if (j === 0) {
                maxLeft = nums1[i - 1];
            } else {
                maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
            }
            if ((m + n) % 2 === 1) {
                return maxLeft;
            }
            if (i === m) {
                minRight = nums2[j];
            } else if (j === n) {
                minRight = nums1[i];
            } else {
                minRight = Math.min(nums1[i], nums2[j]);
            }
            return (maxLeft + minRight) / 2;
        }
    }
};
// TEST
[
    [
        [1, 3],
        [2]
    ],
    [
        [1, 2],
        [3, 4]
    ],
    [
        [1, 3, 5, 7, 9],
        [3, 4, 4]
    ],
    
].forEach((test) => {
    console.log("Find median of arrays", test[0], test[1],
                "->", findMedianSortedArrays(test[0], test[1]));
});
