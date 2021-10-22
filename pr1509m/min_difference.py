from typing import List


class Solution:
    def minDifference(self, nums: List[int]) -> int:
        if len(nums) <= 3:
            return 0
        xs = sorted(nums)
        return min(xs[-1] - xs[3], xs[-2] - xs[2], xs[-3] - xs[1], xs[-4] - xs[0])
        # return min(b - a for a, b in zip(xs[:4], xs[-4:]))


# TESTS
for nums, expected in [
    ([5, 3, 2, 4], 0),
    ([1, 5, 0, 10, 14], 1),
    ([6, 6, 0, 1, 1, 4, 6], 2),
    ([1, 5, 6, 14, 15], 1),
]:
    sol = Solution()
    actual = sol.minDifference(nums)
    print("The min difference for", nums, "->", actual)
    assert actual == expected
