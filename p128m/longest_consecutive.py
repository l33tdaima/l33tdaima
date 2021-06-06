from typing import List


class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        ans, nums = 0, set(nums)
        for x in nums:
            if x - 1 not in nums:
                y = x + 1
                while y in nums:
                    y += 1
                ans = max(ans, y - x)
        return ans


# TESTS
for nums, expected in [
    ([], 0),
    ([100], 1),
    ([100, 4, 200, 1, 3, 2], 4),
    ([0, 3, 7, 2, 5, 8, 4, 6, 0, 1], 9),
]:
    sol = Solution()
    actual = sol.longestConsecutive(nums)
    print("The length of the longest consecutive subsequence ->", actual)
    assert actual == expected

