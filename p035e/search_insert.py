from typing import List


class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums)
        while l < r:
            m = l + (r - l) // 2
            if nums[m] < target:
                l = m + 1
            else:
                r = m
        return l


# TESTS
for nums, target, expected in [
    ([1, 3, 5, 6], 5, 2),
    ([1, 3, 5, 6], 2, 1),
    ([1, 3, 5, 6], 7, 4),
    ([1, 3, 5, 6], 0, 0),
]:
    sol = Solution()
    actual = sol.searchInsert(nums, target)
    print("Search insert in", nums, "for", target, "->", actual)
    assert actual == expected
