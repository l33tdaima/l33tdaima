from typing import List


class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        n = len(nums)
        return n * (n + 1) // 2 - sum(nums)


# TESTS
for nums, expected in [
    ([3, 0, 1], 2),
    ([0, 1], 2),
    ([9, 6, 4, 2, 3, 5, 7, 0, 1], 8),
    ([0], 1),
]:
    sol = Solution()
    actual = sol.missingNumber(nums)
    print("The missing number in", nums, "->", actual)
    assert actual == expected
