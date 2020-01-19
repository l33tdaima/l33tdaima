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
tests = [
    [[1], 1],
    [[2, 1], 1],
    [[2, 0, 3], 0],
    [[1, 2, 0], 0],
    [[3, 4, 5, 1, 2], 1],
    [[4, 5, 6, 7, 0, 1, 2], 0],
]
for t in tests:
    sol = Solution()
    actual = sol.findMin(t[0])
    print("Find min in", t[0], "->", actual)
    assert actual == t[1]
