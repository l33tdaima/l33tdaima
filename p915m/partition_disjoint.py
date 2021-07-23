from typing import List
from itertools import accumulate


class Solution:
    def partitionDisjoint3Pass(self, nums: List[int]) -> int:
        max_from_left = list(accumulate(nums, max))
        min_from_right = list(accumulate(nums[::-1], min))[::-1]
        for i in range(len(nums)):
            if max_from_left[i] <= min_from_right[i + 1]:
                return i + 1

    def partitionDisjoint1Pass(self, nums: List[int]) -> int:
        p, lmax, gmax = 0, nums[0], nums[0]
        for i in range(1, len(nums)):
            gmax = max(gmax, nums[i])
            # If nums[i] < lmax, nums[i] belongs to left partition, update the partition point
            if nums[i] < lmax:
                p, lmax = i, gmax
        return p + 1


# TESTS
for nums, expected in [
    ([5, 0, 3, 8, 6], 3),
    ([1, 1, 1, 0, 6, 12], 4),
    ([2, 0, 3, 5, 4, 1, 8, 6], 6),
]:
    sol = Solution()
    actual = sol.partitionDisjoint3Pass(nums)
    print("The length of left after partitioning", nums, "->", actual)
    assert actual == expected
    assert expected == sol.partitionDisjoint1Pass(nums)
