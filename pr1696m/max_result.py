from typing import List
from collections import deque


class Solution:
    def maxResult(self, nums: List[int], k: int) -> int:
        dp = [nums[0]] + [0] * (len(nums) - 1)
        d = deque([0])
        for i in range(1, len(nums)):
            dp[i] = nums[i] + dp[d[0]]
            while d and dp[d[-1]] < dp[i]:
                d.pop()
            d.append(i)
            if d[0] == i - k:
                d.popleft()
        return dp[-1]


# TESTS
for nums, k, expected in [
    ([1, -1, -2, 4, -7, 3], 2, 7),
    ([10, -5, -2, 4, 0, 3], 3, 17),
    ([1, -5, -20, 4, -1, 3, -6, -3], 2, 0),
]:
    sol = Solution()
    actual = sol.maxResult(nums, k)
    print("The max result in", nums, ", k =", k, "->", actual)
    assert actual == expected

