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
for nums, expected in [
    [
        [1, 2, 1, 3, 2, 5],
        [3, 5],
    ],
    [[-1, 0], [-1, 0]],
    [[0, 1], [0, 1]],
    [
        [1, 5, 5, 1, 98, 98, 23, 58, -1, -1],
        [23, 58],
    ],
]:
    sol = Solution()
    actual = sol.singleNumber(nums)
    print("Two single nums in", nums, "->", actual)
    assert sorted(actual) == expected
