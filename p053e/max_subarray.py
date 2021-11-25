from typing import List


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        ans, dp = nums[0], 0
        for n in nums:
            dp = max(dp + n, n)
            ans = max(ans, dp)
        return ans


# TESTS
for nums, expected in [
    ([-1], -1),
    ([-2, 1, -3], 1),
    ([-2, -1, -3], -1),
    ([-2, 1, -3, 4], 4),
    ([-2, 1, -3, 4, -1, 2, 1, -5, 4], 6),
]:
    sol = Solution()
    actual = sol.maxSubArray(nums)
    print("Largest sum of subarray in", nums, "->", actual)
    assert actual == expected
