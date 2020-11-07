from typing import List
from math import ceil


class Solution:
    def smallestDivisor(self, nums: List[int], threshold: int) -> int:
        l, u = 1, max(nums)
        while l < u:
            m = (l + u) // 2
            res = sum(-(-n // m) for n in nums)
            if res > threshold:
                l = m + 1
            else:
                u = m
        return l


# TESTS
for nums, threshold, expected in [
    ([1, 2, 5, 9], 6, 5),
    ([2, 3, 5, 7, 11], 11, 3),
    ([19], 5, 4),
]:
    sol = Solution()
    actual = sol.smallestDivisor(nums, threshold)
    print("The smallest divisor in", nums, "<=", threshold, "->", actual)
