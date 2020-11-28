from typing import List


class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        s = sum(nums)
        if s & 1 == 1:
            return False

        target, sum_set = s / 2, {0}
        for n in nums:
            sum_set |= {n + x for x in sum_set}
            if target in sum_set:
                return True
        return False


# TESTS
for nums, expected in [
    ([1, 5, 11, 5], True),
    ([1, 2, 3, 5], False),
    ([1, 2, 3, 5, 9, 2], True),
]:
    sol = Solution()
    actual = sol.canPartition(nums)
    assert actual == expected
