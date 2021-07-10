from typing import List


class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        dp = [1] * len(nums)
        for n in range(1, len(nums)):
            dp[n] = 1 + max(
                [dp for i, dp in enumerate(dp[:n]) if nums[n] > nums[i]] or [0]
            )
        return max(dp)


# TESTS
for nums, expected in [
    [[1], 1],
    [[10, 9, 2, 5, 3, 7, 101, 18], 4],
    [[0, 1, 0, 3, 2, 3], 4],
    [[7, 7, 7, 7, 7, 7, 7], 1],
    [[4, 5, 1, 2, 7], 3],
]:
    sol = Solution()
    actual = sol.lengthOfLIS(nums)
    print("Length of LIS in", nums, "->", actual)
    assert actual == expected
