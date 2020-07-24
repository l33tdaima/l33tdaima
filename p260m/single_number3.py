from typing import List
from functools import reduce


class Solution:
    def singleNumber(self, nums: List[int]) -> List[int]:
        x = reduce(lambda a, b: a ^ b, nums, 0)
        # another way to extrac the last set bit, x & (x-1) remove the last bit
        # then ^x will restore it only
        last_set_bit = x & (x - 1) ^ x
        num1 = reduce(
            lambda a, b: a ^ b, filter(lambda n: n & last_set_bit, nums)
        )
        return num1, x ^ num1


# TESTS
tests = [
    [[1, 2, 1, 3, 2, 5], [3, 5],],
    [[1, 5, 5, 1, 98, 98, 23, 58, -1, -1], [23, 58],],
]
for t in tests:
    sol = Solution()
    actual = sol.singleNumber(t[0])
    print("Two single nums in", t[0], "->", actual)
    assert sorted(actual) == t[1]
