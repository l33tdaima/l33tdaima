from typing import List


class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        i, i1, i2 = m + n - 1, m - 1, n - 1
        while i1 >= 0 or i2 >= 0:
            if i1 < 0:
                nums1[i], i2 = nums2[i2], i2 - 1
            elif i2 < 0:
                nums1[i], i1 = nums1[i1], i1 - 1
            elif nums1[i1] < nums2[i2]:
                nums1[i], i2 = nums2[i2], i2 - 1
            else:
                nums1[i], i1 = nums1[i1], i1 - 1
            i -= 1


# TESTS
for nums1, m, nums2, n, expected in [
    ([], 0, [], 0, []),
    ([2, 0], 1, [1], 1, [1, 2]),
    ([1, 3, 5, 0, 0, 0], 3, [2, 4, 6], 3, [1, 2, 3, 4, 5, 6],),
    ([4, 5, 6, 0, 0, 0], 3, [2, 2, 2], 3, [2, 2, 2, 4, 5, 6],),
]:
    sol = Solution()
    print("Merge", nums1, "with", nums2)
    sol.merge(nums1, m, nums2, n)
    print(" ->", nums1)
    assert nums1 == expected
