from typing import List


class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()
        min_diff = float("Inf")
        for i in range(len(nums) - 2):
            lo, hi = i + 1, len(nums) - 1
            while lo < hi:
                d = nums[i] + nums[lo] + nums[hi] - target
                if d == 0:
                    return target
                if d < 0:
                    lo += 1
                else:
                    hi -= 1
                min_diff = d if abs(d) < abs(min_diff) else min_diff
        return target + min_diff


# TESTS
for nums, target, expected in [
    ([-1, 2, 1, -4], 1, 2),
    ([1, 2, 3, 5, 6, 7], 12, 12),
    ([4, 0, 5, -5, 3, 3, 0, -4, -5], -2, -2),
    ([1, 1, 1, 0], -100, 2),
]:
    sol = Solution()
    actual = sol.threeSumClosest(nums, target)
    print(nums, "3Sum closest to", target, "->", actual)
    assert actual == expected
