from typing import List


class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums)
        if target < nums[0]:
            return l
        if target > nums[-1]:
            return r
        while l < r:
            m = l + (r - l) // 2
            if nums[m] < target:
                l = m + 1
            else:
                r = m
        return l


# TESTS
tests = [
    ([1, 3, 5, 6], 5, 2),
    ([1, 3, 5, 6], 2, 1),
    ([1, 3, 5, 6], 7, 4),
    ([1, 3, 5, 6], 0, 0),
]
for t in tests:
    sol = Solution()
    actual = sol.searchInsert(t[0], t[1])
    print("Search insert in", t[0], "for", t[1], "->", actual)
    assert actual == t[2]
