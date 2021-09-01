from typing import List


class Solution:
    def findMin(self, nums: List[int]) -> int:
        lo, hi = 0, len(nums) - 1
        while lo < hi:
            mid = lo + (hi - lo) // 2
            if nums[mid] > nums[hi]:  # left is sorted, min is on the right
                lo = mid + 1
            else:
                hi = mid
        return nums[lo]


# TESTS
for nums, expected in [
    [[1], 1],
    [[2, 1], 1],
    [[2, 0, 3], 0],
    [[1, 2, 0], 0],
    [[1, 2, 3], 1],
    [[3, 4, 5, 1, 2], 1],
    [[4, 5, 6, 7, 0, 1, 2], 0],
    [[11, 13, 15, 17], 11],
]:
    sol = Solution()
    actual = sol.findMin(nums)
    print("Find min in", nums, "->", actual)
    assert actual == expected
