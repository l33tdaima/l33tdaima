class Solution:
    def maximumScore(self, nums: list[int], multipliers: list[int]) -> int:
        n, m = len(nums), len(multipliers)
        dp = [[0] * m for _ in range(m)]

        def dfs(l: int, i: int) -> int:
            if i >= m:
                return 0
            if not dp[l][i]:
                pick_left = dfs(l + 1, i + 1) + nums[l] * multipliers[i]
                pick_right = (
                    dfs(l, i + 1) + nums[n - 1 - (i - l)] * multipliers[i]
                )
                dp[l][i] = max(pick_left, pick_right)
            return dp[l][i]

        return dfs(0, 0)


# TESTS
for nums, multipliers, expected in [
    ([1, 2, 3], [3, 2, 1], 14),
    ([-5, -3, -3, -2, 7, 1], [-10, -5, 3, 4, 6], 102),
]:
    sol = Solution()
    actual = sol.maximumScore(nums, multipliers)
    print("Max score of", nums, multipliers, "->", actual)
    assert actual == expected
