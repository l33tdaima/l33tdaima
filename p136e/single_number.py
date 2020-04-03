from typing import List
from functools import reduce


class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        return reduce(lambda x, y: x ^ y, nums, 0)


# TESTS
tests = [
    [[2, 2, 1], 1],
    [[4, 1, 2, 1, 2], 4],
    [[1, 1, 90], 90],
    [[-3, 878, -3, 45, 9999, 45, 9999], 878],
]
for t in tests:
    sol = Solution()
    actual = sol.singleNumber(t[0])
    print("Single number in", t[0], "->", actual)
    assert actual == t[1]
