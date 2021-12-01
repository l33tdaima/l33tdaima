class Solution:
    def robV1(self, nums: list[int]) -> int:
        dp = [0] * (len(nums) + 2)
        for i in range(len(nums)):
            dp[i + 2] = max(dp[i + 1], dp[i] + nums[i])
        return dp[-1]

    def robV2(self, nums: list[int]) -> int:
        pm1, pm2 = 0, 0
        for n in nums:
            pm2, pm1 = pm1, max(pm2 + n, pm1)
        return pm1


# TESTS
for nums, expected in [
    ([], 0),
    ([1], 1),
    ([1, 2], 2),
    ([2, 1], 2),
    ([1, 5, 3], 5),
    ([1, 3, 3], 4),
    ([1, 2, 3, 1], 4),
    ([5, 2, 2, 1], 7),
    ([2, 5, 2, 1], 6),
    ([3, 2, 4, 2], 7),
    ([2, 7, 9, 3, 1], 12),
]:
    sol = Solution()
    actual = sol.robV2(nums)
    print("The max robbed amount of", nums, "->", actual)
    assert actual == expected
    assert expected == sol.robV1(nums)
