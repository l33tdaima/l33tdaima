from typing import List
from itertools import accumulate


class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        return list(accumulate(nums))


# TESTS
for nums, expected in [
    ([1, 2, 3, 4], [1, 3, 6, 10]),
    ([1, 1, 1, 1, 1], [1, 2, 3, 4, 5]),
    ([3, 1, 2, 10, 1], [3, 4, 6, 16, 17]),
]:
    sol = Solution()
    assert sol.runningSum(nums) == expected
