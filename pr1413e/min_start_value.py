from typing import List
from itertools import accumulate


class Solution:
    def minStartValue(self, nums: List[int]) -> int:
        return max(1, 1 - min(accumulate(nums)))
        # OR
        # return 1 - min(accumulate(nums, initial=0))
        # which has a leading 0 element


for nums, expected in [
    ([-3, 2, -3, 4, 2], 5),
    ([1, 2], 1),
    ([10, 2], 1),
    ([1, -2, -3], 5),
]:
    sol = Solution()
    actual = sol.minStartValue(nums)
    print("The minimum positive value of startValue in", nums, "->", actual)
    assert actual == expected
