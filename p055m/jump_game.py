from typing import List


class Solution:
    def canJump(self, nums: List[int]) -> bool:
        canreach = 0
        for i, n in enumerate(nums):
            if canreach < i:
                return False
            canreach = max(canreach, i + n)
        return True


# TESTS
for nums, expected in [
    ([1], True),
    ([1, 2], True),
    ([1, 0, 1], False),
    ([2, 3, 1, 1, 4], True),
    ([3, 2, 1, 0, 4], False),
    ([3, 2, 2, 0, 4], True),
]:
    sol = Solution()
    actual = sol.canJump(nums)
    print("Can jump in", nums, "->", actual)
    assert actual == expected
