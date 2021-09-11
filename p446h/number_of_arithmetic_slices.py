from typing import List
from collections import defaultdict


class Solution:
    def numberOfArithmeticSlices(self, nums: List[int]) -> int:
        ans = 0
        dp = [defaultdict(int) for _ in nums]
        for i in range(1, len(nums)):
            for j in range(i):
                diff = nums[i] - nums[j]
                dp[i][diff] += dp[j][diff] + 1
                ans += dp[j][diff]
        return ans


# TESTS
for nums, expected in [
    ([2, 4, 6, 8, 10], 7),
    ([7, 7, 7, 7, 7], 16),
    ([0, 2, 2, 3, 4], 4),
]:
    sol = Solution()
    actual = sol.numberOfArithmeticSlices(nums)
    print("# of all the arithmetic subsequences of", nums, "->", actual)
    assert actual == expected
