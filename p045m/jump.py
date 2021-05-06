from typing import List


class Solution:
    def jumpDP(self, nums: List[int]) -> int:
        N = len(nums)
        dp = [float("Inf")] * (N - 1) + [0]
        for i in range(N - 1)[::-1]:
            dp[i] = min(dp[i + 1 : i + nums[i] + 1] or [dp[i] - 1]) + 1
        return dp[0]

    def jumpBFS(self, nums: List[int]) -> int:
        N, jumps, lvl_end, farthest = len(nums), 0, 0, 0
        for i in range(N - 1):
            farthest = max(farthest, i + nums[i])
            if i == lvl_end:
                jumps, lvl_end = jumps + 1, farthest
                if farthest >= N - 1:
                    break
        return jumps


# TESTS
for nums, expected in [
    ([2, 3, 1, 1, 4], 2),
    ([2, 3, 0, 1, 4], 2),
    ([8, 3, 0, 1, 4], 1),
    ([1, 1, 1, 1, 1], 4),
]:
    sol = Solution()
    actual = sol.jumpDP(nums)
    print("The minimum jumps in", nums, "->", actual)
    assert actual == expected
    assert expected == sol.jumpBFS(nums)
