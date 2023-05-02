class Solution:
    def arraySign(self, nums: list[int]) -> int:
        ans = 1
        for n in nums:
            if n == 0:
                return 0
            if n < 0:
                ans *= -1
        return ans


# TESTS
for nums, expected in [
    ([-1, -2, -3, -4, 3, 2, 1], 1),
    ([1, 5, 0, 2, -3], 0),
    ([-1, 1, -1, 1, -1], -1),
]:
    sol = Solution()
    actual = sol.arraySign(nums)
    assert actual == expected
