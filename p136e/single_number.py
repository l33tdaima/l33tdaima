from functools import reduce


class Solution:
    def singleNumber(self, nums: list[int]) -> int:
        return reduce(lambda x, y: x ^ y, nums, 0)


# TESTS
for nums, expected in [
    [[2, 2, 1], 1],
    [[4, 1, 2, 1, 2], 4],
    [[1, 1, 90], 90],
    [[-3, 878, -3, 45, 9999, 45, 9999], 878],
]:
    sol = Solution()
    actual = sol.singleNumber(nums)
    print("Single number in", nums, "->", actual)
    assert actual == expected
